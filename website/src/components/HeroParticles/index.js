import React, {useEffect, useRef} from 'react';
import * as THREE from 'three';

/**
 * Lightweight animated "quantum particle field" rendered with Three.js.
 * SSR-safe: the WebGL renderer is only created inside useEffect (client only).
 * Respects prefers-reduced-motion by rendering a single static frame.
 */
export default function HeroParticles() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    const width = mount.clientWidth;
    const height = mount.clientHeight || 480;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 60;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
    } catch (e) {
      // No WebGL available — fail gracefully (gradient background remains).
      return undefined;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    mount.appendChild(renderer.domElement);

    // Particle cloud
    const COUNT = 900;
    const positions = new Float32Array(COUNT * 3);
    const colors = new Float32Array(COUNT * 3);
    const cyan = new THREE.Color('#22d3ee');
    const purple = new THREE.Color('#a855f7');

    for (let i = 0; i < COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 140;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 90;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 80;
      const c = cyan.clone().lerp(purple, Math.random());
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.9,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // A few orbiting "qubit" rings for a quantum feel
    const rings = [];
    for (let i = 0; i < 3; i++) {
      const ringGeo = new THREE.TorusGeometry(18 + i * 6, 0.15, 12, 80);
      const ringMat = new THREE.MeshBasicMaterial({
        color: i % 2 ? purple : cyan,
        transparent: true,
        opacity: 0.35,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = Math.random() * Math.PI;
      ring.rotation.y = Math.random() * Math.PI;
      scene.add(ring);
      rings.push(ring);
    }

    let frameId;
    const render = () => {
      renderer.render(scene, camera);
    };

    const animate = () => {
      points.rotation.y += 0.0009;
      points.rotation.x += 0.0004;
      rings.forEach((r, i) => {
        r.rotation.z += 0.002 * (i + 1);
        r.rotation.y += 0.0015;
      });
      render();
      frameId = requestAnimationFrame(animate);
    };

    if (reduceMotion) {
      render();
    } else {
      animate();
    }

    const onResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight || 480;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      if (frameId) cancelAnimationFrame(frameId);
      geometry.dispose();
      material.dispose();
      rings.forEach((r) => {
        r.geometry.dispose();
        r.material.dispose();
      });
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="qr-hero__canvas" aria-hidden="true" />;
}
