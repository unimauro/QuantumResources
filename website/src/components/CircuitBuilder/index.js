import React, {useState, useMemo} from 'react';

/**
 * Minimal 2-qubit circuit builder + statevector simulator.
 * Append gates and watch the 4-amplitude statevector and measurement
 * probabilities update live. Pure JS complex-number simulation.
 */

const c = (re, im = 0) => ({re, im});
const cadd = (x, y) => c(x.re + y.re, x.im + y.im);
const cmul = (x, y) => c(x.re * y.re - x.im * y.im, x.re * y.im + x.im * y.re);
const cabs2 = (x) => x.re * x.re + x.im * x.im;
const S = 1 / Math.SQRT2;

const G1 = {
  H: [[c(S), c(S)], [c(S), c(-S)]],
  X: [[c(0), c(1)], [c(1), c(0)]],
  Y: [[c(0), c(0, -1)], [c(0, 1), c(0)]],
  Z: [[c(1), c(0)], [c(0), c(-1)]],
  S: [[c(1), c(0)], [c(0), c(0, 1)]],
  T: [[c(1), c(0)], [c(0), c(S, S)]],
};

const NQ = 2;
const DIM = 1 << NQ;

function initState() {
  const v = Array.from({length: DIM}, () => c(0));
  v[0] = c(1); // |00⟩
  return v;
}

// Apply single-qubit gate `g` to qubit `q` (q=0 is the high/left bit)
function applySingle(state, gName, q) {
  const m = G1[gName];
  const out = state.map((x) => c(x.re, x.im));
  const bit = NQ - 1 - q; // bit position in the integer index
  for (let i = 0; i < DIM; i++) {
    if ((i >> bit) & 1) continue; // process pairs once, from the |...0...⟩ member
    const j = i | (1 << bit);
    const a0 = state[i];
    const a1 = state[j];
    out[i] = cadd(cmul(m[0][0], a0), cmul(m[0][1], a1));
    out[j] = cadd(cmul(m[1][0], a0), cmul(m[1][1], a1));
  }
  return out;
}

// CNOT with control `ctrl`, target `tgt`
function applyCNOT(state, ctrl, tgt) {
  const out = state.map((x) => c(x.re, x.im));
  const cbit = NQ - 1 - ctrl;
  const tbit = NQ - 1 - tgt;
  for (let i = 0; i < DIM; i++) {
    if (((i >> cbit) & 1) && !((i >> tbit) & 1)) {
      const j = i | (1 << tbit);
      const tmp = out[i];
      out[i] = state[j];
      out[j] = tmp;
    }
  }
  return out;
}

function simulate(ops) {
  let state = initState();
  for (const op of ops) {
    if (op.type === 'CNOT') state = applyCNOT(state, op.ctrl, op.tgt);
    else state = applySingle(state, op.gate, op.q);
  }
  return state;
}

const LABELS = ['00', '01', '10', '11'];

function fmt(x) {
  const r = Math.abs(x.re) < 1e-6 ? 0 : x.re;
  const i = Math.abs(x.im) < 1e-6 ? 0 : x.im;
  if (i === 0) return r.toFixed(2);
  const sign = i >= 0 ? '+' : '−';
  return `${r.toFixed(2)}${sign}${Math.abs(i).toFixed(2)}i`;
}

export default function CircuitBuilder() {
  const [ops, setOps] = useState([{gate: 'H', q: 0, type: 'G1'}, {type: 'CNOT', ctrl: 0, tgt: 1}]);
  const state = useMemo(() => simulate(ops), [ops]);

  const add1 = (gate, q) => setOps((o) => [...o, {type: 'G1', gate, q}]);
  const addCNOT = (ctrl, tgt) => setOps((o) => [...o, {type: 'CNOT', ctrl, tgt}]);
  const undo = () => setOps((o) => o.slice(0, -1));
  const clear = () => setOps([]);

  return (
    <div>
      <div style={{display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem'}}>
        {[0, 1].map((q) => (
          <div key={q} className="card padding--md" style={{flex: '1 1 220px'}}>
            <strong>Qubit q{q}</strong>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginTop: '0.5rem'}}>
              {Object.keys(G1).map((g) => (
                <button key={g} className="button button--sm button--outline button--primary" onClick={() => add1(g, q)}>
                  {g}
                </button>
              ))}
            </div>
          </div>
        ))}
        <div className="card padding--md" style={{flex: '1 1 220px'}}>
          <strong>Two-qubit</strong>
          <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginTop: '0.5rem'}}>
            <button className="button button--sm button--primary" onClick={() => addCNOT(0, 1)}>
              CNOT q0→q1
            </button>
            <button className="button button--sm button--primary" onClick={() => addCNOT(1, 0)}>
              CNOT q1→q0
            </button>
          </div>
        </div>
      </div>

      <div style={{display: 'flex', gap: '0.5rem', marginBottom: '1rem'}}>
        <button className="button button--sm button--secondary" onClick={undo}>↶ Undo</button>
        <button className="button button--sm button--secondary" onClick={clear}>Clear</button>
      </div>

      <p style={{fontFamily: 'var(--ifm-font-family-monospace)', fontSize: '0.85rem'}}>
        <strong>Circuit:</strong>{' '}
        {ops.length
          ? ops.map((o, i) => (o.type === 'CNOT' ? `CNOT(q${o.ctrl}→q${o.tgt})` : `${o.gate}(q${o.q})`)).join(' · ')
          : '(empty — output is |00⟩)'}
      </p>

      <div style={{display: 'flex', flexWrap: 'wrap', gap: '1.5rem'}}>
        <table style={{flex: '1 1 260px', fontFamily: 'var(--ifm-font-family-monospace)', fontSize: '0.85rem'}}>
          <thead>
            <tr><th style={{textAlign: 'left'}}>Basis</th><th style={{textAlign: 'left'}}>Amplitude</th><th style={{textAlign: 'left'}}>P</th></tr>
          </thead>
          <tbody>
            {state.map((amp, i) => (
              <tr key={i}>
                <td>|{LABELS[i]}⟩</td>
                <td>{fmt(amp)}</td>
                <td>{(cabs2(amp) * 100).toFixed(1)}%</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={{flex: '1 1 260px'}}>
          {state.map((amp, i) => {
            const p = cabs2(amp);
            return (
              <div key={i} style={{marginBottom: '0.5rem'}}>
                <div style={{fontSize: '0.8rem', fontFamily: 'var(--ifm-font-family-monospace)'}}>|{LABELS[i]}⟩ — {(p * 100).toFixed(1)}%</div>
                <div style={{background: 'rgba(139,125,255,0.15)', borderRadius: 6, overflow: 'hidden', height: 14}}>
                  <div style={{width: `${p * 100}%`, height: '100%', background: 'linear-gradient(90deg, var(--qr-cyan), var(--qr-purple))'}} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
