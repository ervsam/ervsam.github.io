import useReveal from '../useReveal'

const roles = [
  {
    title: 'ML Research Assistant',
    badge: '95% latency ↓',
    period: '2022–25',
    company: 'Simon Fraser University · AIRob Lab',
    desc: 'Designed and deployed an end-to-end ML automation pipeline and a CNN + multi-head attention model in PyTorch into a live C++ multi-agent planning system — cutting planning latency by 95% while holding solution quality within 6%.',
    tags: ['PyTorch', 'C++', 'CNN + Attention', 'Multi-agent planning'],
    borderTop: 'var(--ink)',
  },
  {
    title: 'Machine Learning Engineer Intern',
    period: '2022',
    company: 'Neurelli · Linkou, Taiwan',
    desc: 'Built an end-to-end ML pipeline — ingestion, cleaning, feature engineering, and XGBoost training — to predict logistics delivery delays, then monitored outputs in production to catch and correct feature drift.',
    borderTop: 'var(--border-mid)',
  },
  {
    title: 'Software Engineer Intern',
    period: '2021',
    company: 'HTC Corporation · Taipei, Taiwan',
    desc: 'Built REST API validation tooling with Robot Framework, automating integration testing across backend services for a VR platform shipped to millions of users.',
    borderTop: 'var(--border-mid)',
  },
  {
    title: 'Teaching Assistant',
    period: '2023–25',
    company: 'Simon Fraser University · School of Computing Science',
    desc: 'Supported 100+ students in AI and Data Structures & Algorithms through office hours and grading.',
    borderTop: 'var(--border-mid)',
    borderBottom: 'var(--ink)',
  },
]

const schools = [
  {
    degree: 'M.Sc. Computing Science',
    school: 'Simon Fraser University · Burnaby, BC',
    note: 'AIRob Lab — machine learning for multi-agent planning · GPA 3.84/4.33',
    thesisTitle: 'Learning to Prioritize: Accelerating Priority-Based Search for Lifelong Multi-Agent Path Finding',
    thesisUrl: 'https://summit.sfu.ca/_flysystem/fedora/2026-01/etd24107.pdf',
    tag: 'Class of 2025',
  },
  {
    degree: 'B.Sc. Computer Science',
    school: 'National Tsing Hua University · Taiwan',
    note: 'GPA 3.94/4.3',
    tag: 'Class of 2022',
  },
]

const RoleRow = ({ role }) => {
  const ref = useReveal()
  return (
    <div
      ref={ref}
      className="reveal"
      style={{
        padding: '22px 0',
        borderTop: `1px solid ${role.borderTop}`,
        borderBottom: role.borderBottom ? `1px solid ${role.borderBottom}` : 'none',
        transition: 'padding-left .22s ease, opacity .8s cubic-bezier(.16,1,.3,1), transform .8s cubic-bezier(.16,1,.3,1)',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.paddingLeft = '12px')}
      onMouseLeave={(e) => (e.currentTarget.style.paddingLeft = '0')}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 20, marginBottom: 5, flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 11, flexWrap: 'wrap' }}>
          <span style={{ fontSize: 19, fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.01em' }}>{role.title}</span>
          {role.badge && (
            <span className="mono" style={{ fontSize: 10, letterSpacing: '0.04em', color: 'var(--accent)', border: '1px solid var(--accent)', padding: '2px 7px' }}>
              {role.badge}
            </span>
          )}
        </div>
        <span className="mono" style={{ fontSize: 12, color: 'var(--gray-mid)', whiteSpace: 'nowrap' }}>{role.period}</span>
      </div>
      <div style={{ fontSize: 13.5, color: 'var(--gray)', marginBottom: 13 }}>{role.company}</div>
      <p style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--ink-soft)', maxWidth: 700, marginBottom: role.tags ? 14 : 0 }}>{role.desc}</p>
      {role.tags && (
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          {role.tags.map((t) => (
            <span key={t} className="tag" style={{ background: 'var(--bg)' }}>{t}</span>
          ))}
        </div>
      )}
    </div>
  )
}

const ExperienceSection = () => {
  const headerRef = useReveal()

  return (
    <div id="experience" style={{ background: 'var(--bg-band)', borderTop: '1px solid var(--ink)', marginTop: 78 }}>
      <section style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '64px var(--pad-side) 70px' }}>

        <div ref={headerRef} className="reveal" style={{ display: 'flex', alignItems: 'baseline', gap: 18, marginBottom: 38 }}>
          <span className="section-num">02</span>
          <h2 className="section-title">Experience</h2>
        </div>

        <div>
          {roles.map((role) => (
            <RoleRow key={role.title} role={role} />
          ))}

          {/* Education */}
          <div style={{ marginTop: 46 }}>
            <div className="mono" style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink)', paddingBottom: 14, borderBottom: '1px solid var(--ink)' }}>
              Education
            </div>
            {schools.map((s, i) => (
              <div
                key={s.degree}
                style={{
                  background: 'var(--bg)',
                  border: '1px solid var(--ink)',
                  borderTop: i === 0 ? 'none' : '1px solid var(--border)',
                  padding: '26px 28px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  gap: 24,
                  flexWrap: 'wrap',
                }}
              >
                <div>
                  <div style={{ fontSize: 26, fontWeight: 700, letterSpacing: '-0.03em', color: 'var(--ink)', marginBottom: 7 }}>
                    {s.degree}
                  </div>
                  <div style={{ fontSize: 14, color: 'var(--gray)' }}>{s.school}</div>
                  <div style={{ fontSize: 13.5, color: 'var(--gray-mid)', marginTop: 6 }}>{s.note}</div>
                  {s.thesisTitle && (
                    <div style={{ fontSize: 13, color: 'var(--gray-mid)', marginTop: 6, maxWidth: 560, lineHeight: 1.55 }}>
                      Thesis:{' '}
                      {s.thesisUrl ? (
                        <a
                          href={s.thesisUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover-accent"
                          style={{ color: 'var(--gray-mid)', fontStyle: 'italic', textDecoration: 'none', borderBottom: '1px solid var(--border-mid)' }}
                        >
                          "{s.thesisTitle}" ↗
                        </a>
                      ) : (
                        <span style={{ fontStyle: 'italic' }}>"{s.thesisTitle}"</span>
                      )}
                    </div>
                  )}
                </div>
                <span className="mono" style={{ fontSize: 12, color: 'var(--ink)', border: '1px solid var(--ink)', padding: '5px 11px', whiteSpace: 'nowrap' }}>
                  {s.tag}
                </span>
              </div>
            ))}
          </div>
        </div>

      </section>
    </div>
  )
}

export default ExperienceSection
