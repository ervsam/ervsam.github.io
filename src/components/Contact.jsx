import { useRef, useState } from 'react'
import useReveal from '../useReveal'

const Contact = () => {
  const headerRef = useReveal()
  const formRef = useReveal()
  const [sent, setSent] = useState(false)
  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const msgRef = useRef(null)

  const handleSend = (e) => {
    e.preventDefault()
    const name = nameRef.current?.value || ''
    const email = emailRef.current?.value || ''
    const msg = msgRef.current?.value || ''
    if (!msg.trim()) return
    const subject = encodeURIComponent('Hello from your site')
    const body = encodeURIComponent(msg + '\n\n— ' + name + (email ? ` <${email}>` : ''))
    window.location.href = `mailto:ervsml@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '78px var(--pad-side) 80px' }}>

      <div ref={headerRef} className="reveal" style={{ display: 'flex', alignItems: 'baseline', gap: 18, marginBottom: 32 }}>
        <span className="section-num">03</span>
        <h2 className="section-title">Contact</h2>
      </div>

      <div ref={formRef} className="reveal" style={{ transitionDelay: '.08s', border: '1px solid var(--ink)', background: '#fff' }}>
        <div style={{ padding: '42px 44px 40px' }}>

          <div className="contact-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 24, marginBottom: 30, paddingBottom: 26, borderBottom: '1px solid var(--border)', flexWrap: 'wrap' }}>
            <div>
              <h3 style={{ fontSize: 34, fontWeight: 700, letterSpacing: '-0.035em', color: 'var(--ink)', marginBottom: 10 }}>Say hello.</h3>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--gray)', maxWidth: 340 }}>
                A role, a project, or just want to talk shop — leave a note and it lands in my inbox.
              </p>
            </div>
            <a
              href="mailto:ervsml@gmail.com"
              className="hover-accent"
              style={{ display: 'flex', alignItems: 'center', gap: 9, fontFamily: 'var(--font-mono)', fontSize: 13.5, color: 'var(--ink)', textDecoration: 'none', borderBottom: '1px solid var(--ink)', paddingBottom: 4, flexShrink: 0 }}
            >
              <span style={{ width: 7, height: 7, background: 'var(--accent)', borderRadius: '50%' }} />
              ervsml@gmail.com
            </a>
          </div>

          {sent ? (
            <div style={{ padding: '40px 0', textAlign: 'center' }}>
              <div style={{ fontSize: 26, fontWeight: 700, letterSpacing: '-0.03em', color: 'var(--ink)', marginBottom: 8 }}>Message sent.</div>
              <div className="mono" style={{ fontSize: 12, color: 'var(--gray-mid)' }}>I'll be in touch shortly. ↗</div>
            </div>
          ) : (
            <form onSubmit={handleSend}>
              <div className="contact-fields" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 24 }}>
                <div>
                  <label className="mono" style={{ display: 'block', fontSize: 10, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gray-mid)', marginBottom: 10 }}>
                    Name
                  </label>
                  <input
                    ref={nameRef}
                    type="text"
                    placeholder="Your name"
                    style={{ width: '100%', background: 'var(--bg)', border: '1px solid var(--border-mid)', color: 'var(--ink)', padding: '12px 14px', fontSize: 14, transition: 'border-color .15s' }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--ink)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--border-mid)')}
                  />
                </div>
                <div>
                  <label className="mono" style={{ display: 'block', fontSize: 10, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gray-mid)', marginBottom: 10 }}>
                    Email
                  </label>
                  <input
                    ref={emailRef}
                    type="email"
                    placeholder="you@example.com"
                    style={{ width: '100%', background: 'var(--bg)', border: '1px solid var(--border-mid)', color: 'var(--ink)', padding: '12px 14px', fontSize: 14, transition: 'border-color .15s' }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--ink)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--border-mid)')}
                  />
                </div>
              </div>
              <div style={{ marginBottom: 28 }}>
                <label className="mono" style={{ display: 'block', fontSize: 10, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gray-mid)', marginBottom: 10 }}>
                  Message
                </label>
                <textarea
                  ref={msgRef}
                  placeholder="Write your message…"
                  rows={5}
                  style={{ width: '100%', background: 'var(--bg)', border: '1px solid var(--border-mid)', color: 'var(--ink)', padding: '12px 14px', fontSize: 14, lineHeight: 1.6, resize: 'none', transition: 'border-color .15s' }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--ink)')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--border-mid)')}
                />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
                <button
                  type="submit"
                  style={{ fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 500, color: 'var(--bg)', background: 'var(--ink)', border: '1px solid var(--ink)', padding: '13px 30px', cursor: 'pointer', transition: 'background .15s' }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.borderColor = 'var(--accent)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--ink)'; e.currentTarget.style.borderColor = 'var(--ink)' }}
                >
                  Send message
                </button>
                <a
                  href="https://www.linkedin.com/in/ervinsamuel/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mono hover-accent"
                  style={{ fontSize: 14, color: 'var(--ink)', textDecoration: 'none', borderBottom: '1px solid var(--ink)', paddingBottom: 3 }}
                >
                  LinkedIn ↗
                </a>
              </div>
            </form>
          )}

        </div>
      </div>
    </section>
  )
}

export default Contact
