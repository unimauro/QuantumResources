import React, {useState} from 'react';

/**
 * Single-qubit gate visualizer.
 * Renders the 2×2 matrix of each common gate and shows how it transforms the
 * computational basis states |0⟩ and |1⟩. Pure React (no WebGL).
 */

const s = (1 / Math.SQRT2).toFixed(3);

const GATES = {
  I: {matrix: [['1', '0'], ['0', '1']], desc: 'Identity — does nothing.'},
  X: {matrix: [['0', '1'], ['1', '0']], desc: 'Bit flip (quantum NOT): |0⟩↔|1⟩.'},
  Y: {matrix: [['0', '−i'], ['i', '0']], desc: 'Bit + phase flip about the y-axis.'},
  Z: {matrix: [['1', '0'], ['0', '−1']], desc: 'Phase flip: leaves |0⟩, sends |1⟩→−|1⟩.'},
  H: {matrix: [[s, s], [s, `−${s}`]], desc: 'Hadamard — creates equal superposition.'},
  S: {matrix: [['1', '0'], ['0', 'i']], desc: 'Phase gate (√Z): adds a π/2 phase to |1⟩.'},
  T: {matrix: [['1', '0'], ['0', 'e^{iπ/4}']], desc: 'π/8 gate (√S): adds a π/4 phase to |1⟩.'},
};

// How each gate maps the basis states (display strings)
const ACTION = {
  I: {zero: '|0⟩', one: '|1⟩'},
  X: {zero: '|1⟩', one: '|0⟩'},
  Y: {zero: 'i|1⟩', one: '−i|0⟩'},
  Z: {zero: '|0⟩', one: '−|1⟩'},
  H: {zero: '(|0⟩+|1⟩)/√2', one: '(|0⟩−|1⟩)/√2'},
  S: {zero: '|0⟩', one: 'i|1⟩'},
  T: {zero: '|0⟩', one: 'e^{iπ/4}|1⟩'},
};

function Matrix({m}) {
  return (
    <span
      style={{
        display: 'inline-grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '0.15rem 0.9rem',
        padding: '0.4rem 0.8rem',
        borderLeft: '2px solid var(--qr-cyan)',
        borderRight: '2px solid var(--qr-cyan)',
        borderRadius: 4,
        fontFamily: 'var(--ifm-font-family-monospace)',
      }}>
      {m.flat().map((v, i) => (
        <span key={i} style={{textAlign: 'center'}}>
          {v}
        </span>
      ))}
    </span>
  );
}

export default function GateVisualizer() {
  const [active, setActive] = useState('H');
  const g = GATES[active];
  const act = ACTION[active];

  return (
    <div>
      <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.25rem'}}>
        {Object.keys(GATES).map((k) => (
          <button
            key={k}
            className={`button button--sm ${active === k ? 'button--primary' : 'button--outline button--primary'}`}
            onClick={() => setActive(k)}>
            {k}
          </button>
        ))}
      </div>

      <div className="card padding--lg" style={{display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center'}}>
        <div>
          <h4 style={{marginBottom: '0.5rem'}}>Gate {active}</h4>
          <Matrix m={g.matrix} />
        </div>
        <div style={{flex: '1 1 260px'}}>
          <p style={{marginBottom: '0.75rem'}}>{g.desc}</p>
          <table style={{width: '100%', fontFamily: 'var(--ifm-font-family-monospace)'}}>
            <thead>
              <tr>
                <th style={{textAlign: 'left'}}>Input</th>
                <th style={{textAlign: 'left'}}>Output</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>|0⟩</td>
                <td>{act.zero}</td>
              </tr>
              <tr>
                <td>|1⟩</td>
                <td>{act.one}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
