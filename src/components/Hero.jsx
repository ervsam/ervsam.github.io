const Hero = () => (
  <section className="hero-section" style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '148px var(--pad-side) 70px' }}>
    <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 64, alignItems: 'start' }}>

      {/* Left */}
      <div>
        <div className="fade-in" style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 34 }}>
          <span style={{ width: 7, height: 7, background: 'var(--accent)', borderRadius: '50%', flexShrink: 0 }} />
          <span className="mono" style={{ fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gray)' }}>
            Ervin Samuel — ML Engineer
          </span>
        </div>

        <h1
          className="fade-up hero-title"
          style={{
            fontWeight: 700,
            lineHeight: 0.95,
            letterSpacing: '-0.05em',
            color: 'var(--ink)',
            marginBottom: 30,
            maxWidth: 640,
            animationDelay: '.06s',
          }}
        >
          I build ML systems that <span style={{ color: 'var(--accent)' }}>ship.</span>
        </h1>

        <p
          className="fade-up"
          style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--ink-soft)', maxWidth: 480, marginBottom: 38, animationDelay: '.18s' }}
        >
          M.Sc. Computing Science (SFU, 2025). End-to-end pipelines, training, and C++
          integration — most recently a <span style={{ color: 'var(--accent)', fontWeight: 600 }}>95% cut</span> in
          multi-agent planning latency on a live system, solution quality held within 6%.
        </p>

        <div className="fade-up" style={{ display: 'flex', border: '1px solid var(--ink)', width: 'max-content', animationDelay: '.3s' }}>
          <a
            href="#work"
            style={{ fontSize: 13, fontWeight: 500, color: 'var(--bg)', background: 'var(--ink)', padding: '13px 26px', textDecoration: 'none', transition: 'background .15s' }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--accent)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--ink)')}
          >
            See the work
          </a>
          <a
            href="#contact"
            className="hover-accent"
            style={{ fontSize: 13, color: 'var(--ink)', padding: '13px 24px', textDecoration: 'none', borderLeft: '1px solid var(--ink)' }}
          >
            Get in touch
          </a>
        </div>
      </div>

      {/* Right meta column */}
      <div className="fade-in hero-meta" style={{ animationDelay: '.3s' }}>
        <div style={{ aspectRatio: '1/1', width: '100%', border: '1px solid var(--ink)', marginBottom: 18, overflow: 'hidden', background: '#f0eee7' }}>
          <img
            src="/images/face_img.jpg"
            alt="Ervin Samuel"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'grayscale(100%) contrast(1.02)', transition: 'filter .45s ease' }}
            onMouseEnter={(e) => (e.currentTarget.style.filter = 'grayscale(0%) contrast(1)')}
            onMouseLeave={(e) => (e.currentTarget.style.filter = 'grayscale(100%) contrast(1.02)')}
          />
        </div>
        <div style={{ borderTop: '1px solid var(--ink)' }}>
          <div style={{ padding: '11px 0', borderBottom: '1px solid var(--border)' }}>
            <div className="label" style={{ marginBottom: 4 }}>Based in</div>
            <div style={{ fontSize: 13, color: 'var(--ink)' }}>Vancouver, BC</div>
          </div>
          <div style={{ padding: '11px 0', borderBottom: '1px solid var(--border)' }}>
            <div className="label" style={{ marginBottom: 4 }}>Degree</div>
            <div style={{ fontSize: 13, color: 'var(--ink)' }}>M.Sc. Computing Science · SFU</div>
          </div>
          <div style={{ padding: '11px 0' }}>
            <div className="label" style={{ marginBottom: 4 }}>Status</div>
            <div style={{ fontSize: 13, color: 'var(--accent)' }}>Open to ML / AI roles</div>
          </div>
        </div>
      </div>

    </div>
  </section>
)

export default Hero
