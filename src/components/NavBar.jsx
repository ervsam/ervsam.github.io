import { useEffect, useState } from 'react'

const links = [
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: 60,
        padding: '0 var(--pad-side)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: scrolled ? 'rgba(251,251,249,0.94)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: '1px solid',
        borderBottomColor: scrolled ? 'var(--border)' : 'transparent',
        transition: 'background .35s ease, border-color .35s ease',
      }}
    >
      <a
        href="#top"
        onClick={closeMenu}
        style={{ fontSize: 15, fontWeight: 700, color: 'var(--ink)', textDecoration: 'none', letterSpacing: '-0.02em' }}
      >
        Ervin Samuel
      </a>

      {/* Desktop links */}
      <div className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
        {links.map((l) => (
          <a key={l.label} href={l.href} className="hover-accent" style={{ fontSize: 13, color: 'var(--gray)' }}>
            {l.label}
          </a>
        ))}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mono"
          style={{
            fontSize: 12,
            fontWeight: 500,
            color: 'var(--ink)',
            textDecoration: 'none',
            border: '1px solid var(--ink)',
            padding: '6px 13px',
            transition: 'background .15s, color .15s',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--ink)'; e.currentTarget.style.color = 'var(--bg)' }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--ink)' }}
        >
          Résumé ↗
        </a>
      </div>

      {/* Mobile hamburger */}
      <button
        className="nav-burger"
        onClick={() => setMenuOpen((v) => !v)}
        aria-label="Toggle menu"
        style={{
          display: 'none',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          width: 28,
          height: 28,
          flexDirection: 'column',
          justifyContent: 'center',
          gap: 5,
        }}
      >
        <span style={{ display: 'block', height: 1, background: 'var(--ink)', transform: menuOpen ? 'translateY(3px) rotate(45deg)' : 'none', transition: 'transform .2s' }} />
        <span style={{ display: 'block', height: 1, background: 'var(--ink)', transform: menuOpen ? 'translateY(-3px) rotate(-45deg)' : 'none', transition: 'transform .2s' }} />
      </button>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          className="nav-mobile-menu"
          style={{
            position: 'absolute',
            top: 60,
            left: 0,
            right: 0,
            background: 'var(--bg)',
            borderBottom: '1px solid var(--ink)',
            display: 'flex',
            flexDirection: 'column',
            padding: '8px var(--pad-side) 18px',
          }}
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={closeMenu}
              className="hover-accent"
              style={{ fontSize: 14, color: 'var(--ink)', padding: '12px 0', borderBottom: '1px solid var(--border)' }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mono hover-accent"
            style={{ fontSize: 13, fontWeight: 500, color: 'var(--ink)', padding: '14px 0 0' }}
          >
            Résumé ↗
          </a>
        </div>
      )}
    </nav>
  )
}

export default NavBar
