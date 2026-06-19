const Footer = () => (
  <footer style={{ background: 'var(--ink)' }}>
    <div
      className="footer-inner"
      style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '26px var(--pad-side)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}
    >
      <span className="mono" style={{ fontSize: 12.5, letterSpacing: '0.04em', color: '#8a857c' }}>
        © {new Date().getFullYear()} Ervin Samuel
      </span>
      <span className="mono" style={{ fontSize: 12.5, letterSpacing: '0.04em', color: '#8a857c' }}>
        Vancouver, BC <span style={{ color: 'var(--accent)' }}>·</span> M.Sc. Computing Science
      </span>
    </div>
  </footer>
)

export default Footer
