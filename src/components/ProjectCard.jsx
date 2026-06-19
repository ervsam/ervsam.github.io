import useReveal from '../useReveal'

const BarsViz = () => (
  <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 11, marginBottom: 22 }}>
    <div style={{ position: 'absolute', top: '-30px', bottom: '-24px', left: '33.33%', width: 1, background: '#ecebe3' }} />
    <div style={{ position: 'absolute', top: '-30px', bottom: '-24px', left: '66.66%', width: 1, background: '#ecebe3' }} />
    {[
      { n: '01', w: '100%', c: 'var(--accent)', val: '94', valColor: 'var(--gray)' },
      { n: '02', w: '76%', c: '#cfccc3', val: '89', valColor: 'var(--gray-mid)' },
      { n: '03', w: '58%', c: '#dedbd2', val: '82', valColor: 'var(--gray-light)' },
    ].map((row) => (
      <div key={row.n} style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 12 }}>
        <span className="mono" style={{ fontSize: 10, color: 'var(--gray-light)', minWidth: 18 }}>{row.n}</span>
        <div style={{ flex: row.n === '01' ? 1 : `0 0 ${row.w}`, height: 5, background: row.c }} />
        <span className="mono" style={{ fontSize: 10, color: row.valColor }}>{row.val}</span>
      </div>
    ))}
  </div>
)

const gridSymbols = ['×', '', '○', '', '', '○', '', '×', '×', '', '', '', '', '', '○', '']

const GridViz = () => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 40px)',
      gridTemplateRows: 'repeat(4, 40px)',
      marginBottom: 22,
      borderTop: '1px solid #dedbd2',
      borderLeft: '1px solid #dedbd2',
    }}
  >
    {gridSymbols.map((s, i) => (
      <div
        key={i}
        style={{
          borderRight: '1px solid #dedbd2',
          borderBottom: '1px solid #dedbd2',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'var(--font-mono)',
          fontSize: 16,
          color: s === '○' ? 'var(--accent)' : 'var(--ink)',
        }}
      >
        {s}
      </div>
    ))}
  </div>
)

const ProjectCard = ({ title, desc, tags, href, fig, visual, delay = '0s' }) => {
  const revealRef = useReveal()
  return (
  <a
    ref={revealRef}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="reveal project-card"
    style={{
      display: 'block',
      textDecoration: 'none',
      border: '1px solid var(--border)',
      background: '#fff',
      transitionDelay: delay,
    }}
    onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--ink)')}
    onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
  >
    <div
      style={{
        height: 262,
        background: 'var(--bg-card)',
        borderBottom: '1px solid var(--border)',
        padding: '30px 30px 24px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: visual === 'grid' ? 'flex-start' : 'stretch',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {visual === 'bars' ? <BarsViz /> : <GridViz />}
      <span className="mono" style={{ position: 'relative', fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gray-light)' }}>
        {fig}
      </span>
    </div>

    <div style={{ padding: '22px 26px 24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 9 }}>
        <span style={{ fontSize: 18, fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.02em' }}>{title}</span>
        <span style={{ fontSize: 14, color: 'var(--accent)' }}>↗</span>
      </div>
      <p style={{ fontSize: 13, lineHeight: 1.65, color: 'var(--gray)', marginBottom: 16 }}>{desc}</p>
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
        {tags.map((t) => (
          <span key={t} className="tag">{t}</span>
        ))}
      </div>
    </div>
  </a>
  )
}

export default ProjectCard
