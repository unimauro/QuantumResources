import React, {useEffect, useRef, useState, useCallback} from 'react';
import * as THREE from 'three';

/**
 * Interactive Bloch sphere.
 *
 * Single-qubit state |ψ⟩ = a|0⟩ + b|1⟩ stored as two complex amplitudes.
 * Gates are applied as 2×2 complex matrices. The Bloch vector is derived from
 * the amplitudes so it always stays consistent and normalized.
 */

// --- tiny complex helpers: a complex number is {re, im} ---
const c = (re, im = 0) => ({re, im});
const cadd = (x, y) => c(x.re + y.re, x.im + y.im);
const cmul = (x, y) => c(x.re * y.re - x.im * y.im, x.re * y.im + x.im * y.re);
const cabs2 = (x) => x.re * x.re + x.im * x.im;

const INV_SQRT2 = 1 / Math.SQRT2;

// 2x2 gate matrices as [[m00, m01], [m10, m11]] of complex numbers
const GATES = {
  X: [[c(0), c(1)], [c(1), c(0)]],
  Y: [[c(0), c(0, -1)], [c(0, 1), c(0)]],
  Z: [[c(1), c(0)], [c(0), c(-1)]],
  H: [[c(INV_SQRT2), c(INV_SQRT2)], [c(INV_SQRT2), c(-INV_SQRT2)]],
  S: [[c(1), c(0)], [c(0), c(0, 1)]],
  T: [[c(1), c(0)], [c(0), c(INV_SQRT2, INV_SQRT2)]],
};

function applyGate(state, g) {
  const m = GATES[g];
  const [a, b] = state;
  return [
    cadd(cmul(m[0][0], a), cmul(m[0][1], b)),
    cadd(cmul(m[1][0], a), cmul(m[1][1], b)),
  ];
}

// Bloch vector (x,y,z) from amplitudes
function blochVector([a, b]) {
  // x = 2 Re(a* b), y = 2 Im(a* b), z = |a|^2 - |b|^2
  const aStar = c(a.re, -a.im);
  const ab = cmul(aStar, b);
  return {
    x: 2 * ab.re,
    y: 2 * ab.im,
    z: cabs2(a) - cabs2(b),
  };
}

function fmt(x) {
  const r = Math.abs(x.re) < 1e-6 ? 0 : x.re;
  const i = Math.abs(x.im) < 1e-6 ? 0 : x.im;
  if (i === 0) return r.toFixed(3);
  const sign = i >= 0 ? '+' : '−';
  return `${r.toFixed(3)} ${sign} ${Math.abs(i).toFixed(3)}i`;
}

export default function BlochSphere() {
  const mountRef = useRef(null);
  const arrowRef = useRef(null);
  const [state, setState] = useState([c(1), c(0)]); // |0⟩
  const [history, setHistory] = useState([]);

  const bloch = blochVector(state);

  // Build the static scene once
  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    const size = Math.min(mount.clientWidth || 360, 420);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
    camera.position.set(2.6, 1.8, 2.6);
    camera.lookAt(0, 0, 0);

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
    } catch (e) {
      return undefined;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(size, size);
    mount.appendChild(renderer.domElement);

    // Sphere (wireframe)
    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(1, 32, 32),
      new THREE.MeshBasicMaterial({
        color: 0x6d5efc,
        wireframe: true,
        transparent: true,
        opacity: 0.15,
      }),
    );
    scene.add(sphere);

    // Equator + meridian rings
    const ringMat = new THREE.LineBasicMaterial({color: 0x22d3ee, transparent: true, opacity: 0.5});
    const ringGeo = new THREE.BufferGeometry().setFromPoints(
      new THREE.EllipseCurve(0, 0, 1, 1, 0, 2 * Math.PI).getPoints(64).map((p) => new THREE.Vector3(p.x, 0, p.y)),
    );
    const equator = new THREE.LineLoop(ringGeo, ringMat);
    scene.add(equator);

    // Axes
    const axes = [
      {dir: [1.3, 0, 0], color: 0xff6b6b, label: '+x'},
      {dir: [0, 1.3, 0], color: 0x4dd4ac, label: '+z'},
      {dir: [0, 0, 1.3], color: 0xffd166, label: '+y'},
    ];
    axes.forEach(({dir, color}) => {
      const g = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(-dir[0], -dir[1], -dir[2]),
        new THREE.Vector3(dir[0], dir[1], dir[2]),
      ]);
      scene.add(new THREE.Line(g, new THREE.LineBasicMaterial({color, transparent: true, opacity: 0.6})));
    });

    // |0⟩ at north pole (y up), |1⟩ at south pole
    const poleMat = new THREE.SpriteMaterial({color: 0xffffff});
    const north = new THREE.Mesh(new THREE.SphereGeometry(0.04, 8, 8), new THREE.MeshBasicMaterial({color: 0xffffff}));
    north.position.set(0, 1, 0);
    const south = north.clone();
    south.position.set(0, -1, 0);
    scene.add(north, south);

    // State arrow
    const arrow = new THREE.ArrowHelper(
      new THREE.Vector3(0, 1, 0),
      new THREE.Vector3(0, 0, 0),
      1,
      0xa855f7,
      0.18,
      0.1,
    );
    scene.add(arrow);
    arrowRef.current = arrow;

    // Simple mouse drag to rotate
    let isDragging = false;
    let prev = {x: 0, y: 0};
    const group = new THREE.Group();
    scene.add(group);
    group.add(sphere, equator, north, south);

    const onDown = (e) => {
      isDragging = true;
      prev = {x: e.clientX ?? e.touches?.[0]?.clientX, y: e.clientY ?? e.touches?.[0]?.clientY};
    };
    const onUp = () => {
      isDragging = false;
    };
    const onMove = (e) => {
      if (!isDragging) return;
      const x = e.clientX ?? e.touches?.[0]?.clientX;
      const y = e.clientY ?? e.touches?.[0]?.clientY;
      const dx = (x - prev.x) * 0.01;
      const dy = (y - prev.y) * 0.01;
      scene.rotation.y += dx;
      scene.rotation.x += dy;
      prev = {x, y};
    };
    renderer.domElement.addEventListener('mousedown', onDown);
    renderer.domElement.addEventListener('touchstart', onDown, {passive: true});
    window.addEventListener('mouseup', onUp);
    window.addEventListener('touchend', onUp);
    renderer.domElement.addEventListener('mousemove', onMove);
    renderer.domElement.addEventListener('touchmove', onMove, {passive: true});

    let frameId;
    const animate = () => {
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      renderer.domElement.removeEventListener('mousedown', onDown);
      renderer.domElement.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('touchend', onUp);
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  // Update arrow whenever the quantum state changes
  useEffect(() => {
    const arrow = arrowRef.current;
    if (!arrow) return;
    // Map quantum (x,y,z) to three.js (x=x, y=z, z=y) so |0⟩ is "up"
    const dir = new THREE.Vector3(bloch.x, bloch.z, bloch.y);
    if (dir.length() < 1e-6) dir.set(0, 1, 0);
    arrow.setDirection(dir.clone().normalize());
    arrow.setLength(1, 0.18, 0.1);
  }, [bloch.x, bloch.y, bloch.z]);

  const apply = useCallback(
    (g) => {
      setState((s) => applyGate(s, g));
      setHistory((h) => [...h, g]);
    },
    [],
  );

  const reset = useCallback(() => {
    setState([c(1), c(0)]);
    setHistory([]);
  }, []);

  const p0 = cabs2(state[0]);
  const p1 = cabs2(state[1]);

  return (
    <div style={{display: 'flex', flexWrap: 'wrap', gap: '1.5rem', alignItems: 'flex-start'}}>
      <div
        ref={mountRef}
        style={{
          minWidth: 300,
          flex: '1 1 320px',
          cursor: 'grab',
          borderRadius: 16,
          background: 'radial-gradient(circle at 50% 40%, rgba(109,94,252,0.12), transparent 70%)',
        }}
      />
      <div style={{flex: '1 1 280px', minWidth: 260}}>
        <p style={{marginBottom: '0.5rem', fontWeight: 600}}>Apply a gate:</p>
        <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem'}}>
          {Object.keys(GATES).map((g) => (
            <button
              key={g}
              className="button button--sm button--primary"
              onClick={() => apply(g)}>
              {g}
            </button>
          ))}
          <button className="button button--sm button--secondary" onClick={reset}>
            Reset |0⟩
          </button>
        </div>

        <table style={{width: '100%', fontFamily: 'var(--ifm-font-family-monospace)', fontSize: '0.85rem'}}>
          <tbody>
            <tr>
              <td>α (amplitude of |0⟩)</td>
              <td>{fmt(state[0])}</td>
            </tr>
            <tr>
              <td>β (amplitude of |1⟩)</td>
              <td>{fmt(state[1])}</td>
            </tr>
            <tr>
              <td>P(0)</td>
              <td>{(p0 * 100).toFixed(1)}%</td>
            </tr>
            <tr>
              <td>P(1)</td>
              <td>{(p1 * 100).toFixed(1)}%</td>
            </tr>
            <tr>
              <td>Bloch (x, y, z)</td>
              <td>
                ({bloch.x.toFixed(2)}, {bloch.y.toFixed(2)}, {bloch.z.toFixed(2)})
              </td>
            </tr>
          </tbody>
        </table>

        <p style={{marginTop: '1rem', fontSize: '0.85rem', opacity: 0.75}}>
          <strong>Gate sequence:</strong>{' '}
          {history.length ? history.join(' → ') : '(none yet)'}
        </p>
        <p style={{fontSize: '0.8rem', opacity: 0.6}}>
          Drag the sphere to rotate your view. Green axis = z (|0⟩ up), red = x, yellow = y.
        </p>
      </div>
    </div>
  );
}
