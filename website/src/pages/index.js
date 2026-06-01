import React from 'react';
import Link from '@docusaurus/Link';
import BrowserOnly from '@docusaurus/BrowserOnly';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import quantumData from '@site/src/data/quantum-data.json';

const FEATURES = [
  {
    icon: '🗺️',
    title: 'Learning Paths',
    desc: 'Four structured roadmaps from your first qubit to fault-tolerant computing and quantum AI.',
    to: '/docs/roadmaps/overview',
  },
  {
    icon: '📄',
    title: 'Research Papers',
    desc: 'A curated reading list of foundational and modern papers with takeaways and difficulty levels.',
    to: '/docs/resources/papers',
  },
  {
    icon: '🧠',
    title: 'Quantum Machine Learning',
    desc: 'Variational circuits, QNNs and hybrid models — with an honest take on quantum advantage.',
    to: '/docs/roadmaps/quantum-ai',
  },
  {
    icon: '🧰',
    title: 'Quantum Frameworks',
    desc: 'Get started with Qiskit, Cirq, PennyLane, Q#, Braket and TensorFlow Quantum.',
    to: '/docs/frameworks/overview',
  },
  {
    icon: '🧪',
    title: 'Hands-on Labs',
    desc: 'Runnable tutorials: RNG, teleportation, Grover, Deutsch–Jozsa and a QML classifier.',
    to: '/docs/labs/overview',
  },
  {
    icon: '💼',
    title: 'Career Roadmaps',
    desc: 'Skills, courses, certifications and projects for four quantum career tracks.',
    to: '/docs/career/overview',
  },
];

function computeStats() {
  const books = quantumData.books?.length ?? 0;
  const byCat = (cat) =>
    (quantumData.qml_resources ?? []).filter((r) => r.category === cat).length;
  return [
    {num: `${books}+`, label: 'Books'},
    {num: '30+', label: 'Courses'},
    {num: `${byCat('papers') + 6}+`, label: 'Research Papers'},
    {num: '6', label: 'Frameworks'},
    {num: '5', label: 'Hands-on Labs'},
    {num: `${byCat('videos')}+`, label: 'Video Series'},
  ];
}

function Hero() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className="qr-hero">
      <BrowserOnly>
        {() => {
          const HeroParticles =
            require('@site/src/components/HeroParticles').default;
          return <HeroParticles />;
        }}
      </BrowserOnly>
      <div className="container qr-hero__inner" style={{textAlign: 'center'}}>
        <Heading as="h1" className="qr-hero__title">
          <span className="qr-gradient-text">Quantum Resources</span>
        </Heading>
        <p className="qr-hero__subtitle">{siteConfig.tagline}</p>
        <p className="qr-hero__desc">
          A free, open and community-driven hub to learn quantum computing —
          from linear algebra and your first qubit to quantum machine learning,
          error correction and real careers. Curated, structured, hands-on.
        </p>
        <div className="qr-buttons">
          <Link className="button button--lg button--quantum" to="/docs/intro">
            🚀 Start Learning
          </Link>
          <Link
            className="button button--lg button--outline button--secondary"
            to="/docs/roadmaps/overview"
            style={{color: '#e6f1ff', borderColor: 'rgba(230,241,255,0.4)'}}>
            View Roadmaps
          </Link>
        </div>
      </div>
    </header>
  );
}

function Stats() {
  const stats = computeStats();
  return (
    <section className="qr-stats">
      {stats.map((s) => (
        <div className="qr-stat" key={s.label}>
          <div className="qr-stat__num">{s.num}</div>
          <div className="qr-stat__label">{s.label}</div>
        </div>
      ))}
    </section>
  );
}

function Features() {
  return (
    <section className="qr-section">
      <div className="container">
        <Heading as="h2" className="qr-section__title">
          Everything you need to learn quantum
        </Heading>
        <p className="qr-section__subtitle">
          One curated hub instead of a hundred scattered tabs.
        </p>
        <div className="row">
          {FEATURES.map((f) => (
            <div
              className="col col--4"
              key={f.title}
              style={{marginBottom: '1.5rem'}}>
              <Link
                to={f.to}
                className="card padding--lg"
                style={{height: '100%', display: 'block', color: 'inherit'}}>
                <div style={{fontSize: '2.2rem', marginBottom: '0.75rem'}}>
                  {f.icon}
                </div>
                <Heading as="h3" style={{marginBottom: '0.5rem'}}>
                  {f.title}
                </Heading>
                <p style={{opacity: 0.8, marginBottom: 0}}>{f.desc}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Paths() {
  const paths = [
    {
      emoji: '🌱',
      title: 'Beginner',
      to: '/docs/roadmaps/beginner',
      items: 'Linear algebra · Qubits · Quantum gates',
    },
    {
      emoji: '⚙️',
      title: 'Intermediate',
      to: '/docs/roadmaps/intermediate',
      items: 'Circuits · Algorithms · Error correction',
    },
    {
      emoji: '🔬',
      title: 'Advanced',
      to: '/docs/roadmaps/advanced',
      items: 'Information theory · Cryptography · Fault tolerance',
    },
    {
      emoji: '🤖',
      title: 'Quantum AI',
      to: '/docs/roadmaps/quantum-ai',
      items: 'QML · Variational circuits · Hybrid models',
    },
  ];
  return (
    <section
      className="qr-section"
      style={{background: 'var(--ifm-background-surface-color)'}}>
      <div className="container">
        <Heading as="h2" className="qr-section__title">
          Pick your path
        </Heading>
        <p className="qr-section__subtitle">
          Structured roadmaps that take you from zero to research-ready.
        </p>
        <div className="row">
          {paths.map((p) => (
            <div
              className="col col--3"
              key={p.title}
              style={{marginBottom: '1.5rem'}}>
              <Link
                to={p.to}
                className="card padding--lg"
                style={{
                  height: '100%',
                  display: 'block',
                  color: 'inherit',
                  textAlign: 'center',
                }}>
                <div style={{fontSize: '2.5rem'}}>{p.emoji}</div>
                <Heading as="h3">{p.title}</Heading>
                <p style={{opacity: 0.75, fontSize: '0.9rem'}}>{p.items}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="qr-section" style={{textAlign: 'center'}}>
      <div className="container">
        <Heading as="h2" className="qr-section__title">
          Build something quantum
        </Heading>
        <p className="qr-section__subtitle">
          Try an interactive Bloch sphere, run a real quantum circuit, or
          contribute a resource. It's all open source.
        </p>
        <div className="qr-buttons">
          <Link
            className="button button--lg button--quantum"
            to="/docs/interactive/bloch-sphere">
            ⚛️ Open Interactive Tools
          </Link>
          <Link
            className="button button--lg button--outline button--primary"
            to="https://github.com/unimauro/QuantumResources">
            ⭐ Star on GitHub
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} — ${siteConfig.tagline}`}
      description="The Ultimate Open Quantum Computing Learning Hub. Free, curated roadmaps, hands-on labs, frameworks, papers and career paths.">
      <Hero />
      <main>
        <Stats />
        <Features />
        <Paths />
        <CTA />
      </main>
    </Layout>
  );
}
