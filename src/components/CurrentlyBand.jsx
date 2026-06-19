const items = [
  {
    label: 'Searching',
    value: 'ML / AI Engineer roles · Vancouver, BC',
  },
  {
    label: 'Building',
    value: 'Job Match Intelligence — a RAG pipeline for my own job hunt',
  },
  {
    label: 'Reading',
    value: 'Religious Affections — Jonathan Edwards',
  },
]

const CurrentlyBand = () => (
  <div style={{ background: 'var(--bg-band)', borderTop: '1px solid var(--ink)', borderBottom: '1px solid var(--border)' }}>
    <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '30px var(--pad-side)' }}>
      <div className="currently-grid" style={{ display: 'grid', gridTemplateColumns: '130px 1fr', gap: 40, alignItems: 'start' }}>
        <div className="mono" style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink)', paddingTop: 2 }}>
          Currently
        </div>
        <div className="currently-items" style={{ display: 'grid', gridTemplateColumns: `repeat(${items.length}, 1fr)`, gap: 36 }}>
          {items.map(({ label, value }) => (
            <div key={label}>
              <div className="label" style={{ marginBottom: 7 }}>{label}</div>
              <div style={{ fontSize: 13.5, color: 'var(--ink-soft)', lineHeight: 1.55 }}>{value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
)

export default CurrentlyBand
