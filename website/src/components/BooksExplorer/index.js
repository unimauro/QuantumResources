import React, {useState, useMemo} from 'react';
import quantumData from '@site/src/data/quantum-data.json';

/**
 * Searchable / filterable explorer over the curated book database
 * (loaded from src/data/quantum-data.json).
 */

const PAGE = 30;

export default function BooksExplorer() {
  const books = quantumData.books ?? [];
  const categories = useMemo(
    () => ['all', ...Array.from(new Set(books.map((b) => b.category))).sort()],
    [books],
  );
  const years = useMemo(
    () => ['all', ...Array.from(new Set(books.map((b) => b.year))).sort((a, b) => b - a)],
    [books],
  );

  const [q, setQ] = useState('');
  const [cat, setCat] = useState('all');
  const [year, setYear] = useState('all');
  const [limit, setLimit] = useState(PAGE);

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return books.filter((b) => {
      if (cat !== 'all' && b.category !== cat) return false;
      if (year !== 'all' && String(b.year) !== String(year)) return false;
      if (needle && !b.title.toLowerCase().includes(needle)) return false;
      return true;
    });
  }, [books, q, cat, year]);

  const shown = filtered.slice(0, limit);

  const inputStyle = {
    padding: '0.5rem 0.75rem',
    borderRadius: 8,
    border: '1px solid rgba(139,125,255,0.3)',
    background: 'var(--ifm-background-color)',
    color: 'inherit',
  };

  return (
    <div>
      <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1rem'}}>
        <input
          type="search"
          placeholder={`Search ${books.length} books…`}
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
            setLimit(PAGE);
          }}
          style={{...inputStyle, flex: '2 1 240px'}}
        />
        <select
          value={cat}
          onChange={(e) => {
            setCat(e.target.value);
            setLimit(PAGE);
          }}
          style={{...inputStyle, flex: '1 1 140px'}}>
          {categories.map((c2) => (
            <option key={c2} value={c2}>
              {c2 === 'all' ? 'All categories' : c2}
            </option>
          ))}
        </select>
        <select
          value={year}
          onChange={(e) => {
            setYear(e.target.value);
            setLimit(PAGE);
          }}
          style={{...inputStyle, flex: '1 1 120px'}}>
          {years.map((y) => (
            <option key={y} value={y}>
              {y === 'all' ? 'All years' : y}
            </option>
          ))}
        </select>
      </div>

      <p style={{opacity: 0.7, fontSize: '0.9rem'}}>
        Showing {shown.length} of {filtered.length} matching books.
      </p>

      <div className="row">
        {shown.map((b, i) => (
          <div className="col col--6" key={`${b.title}-${i}`} style={{marginBottom: '1rem'}}>
            <a
              href={b.link}
              target="_blank"
              rel="noopener noreferrer"
              className="card padding--md"
              style={{display: 'block', height: '100%', color: 'inherit'}}>
              <div style={{display: 'flex', justifyContent: 'space-between', gap: '0.5rem'}}>
                <span
                  style={{
                    fontSize: '0.7rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: 'var(--qr-cyan)',
                  }}>
                  {b.category}
                </span>
                <span style={{fontSize: '0.8rem', opacity: 0.6}}>{b.year}</span>
              </div>
              <div style={{marginTop: '0.35rem', fontWeight: 600, lineHeight: 1.3}}>{b.title}</div>
            </a>
          </div>
        ))}
      </div>

      {limit < filtered.length && (
        <div style={{textAlign: 'center', marginTop: '1rem'}}>
          <button className="button button--primary" onClick={() => setLimit((l) => l + PAGE)}>
            Load more ({filtered.length - limit} remaining)
          </button>
        </div>
      )}
    </div>
  );
}
