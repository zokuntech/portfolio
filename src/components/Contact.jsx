import { useState } from 'react'

const promises = [
  'Free 30-minute workflow review — no pitch, just problem solving',
  'First working version within a week for most projects',
  'Available remotely and in Phoenix, AZ',
  'You own everything I build — no lock-in',
]

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', company: '', category: '', message: '',
  })

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('loading')
    const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          company: form.company,
          category: form.category,
          message: form.message,
        }),
      })
      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputStyle = {
    background: 'var(--card)', border: '1px solid var(--border)',
    borderRadius: 6, padding: '12px 14px',
    fontFamily: "'DM Sans', sans-serif", fontSize: 14,
    color: 'var(--white)', outline: 'none', width: '100%',
    appearance: 'none', transition: 'border-color 0.2s',
  }

  const labelStyle = {
    fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 600,
    letterSpacing: 1, textTransform: 'uppercase', color: 'var(--subtle)',
  }

  return (
    <div id="contact" className="contact-grid">
      <div>
        <p style={{
          fontFamily: "'Space Grotesk', sans-serif", fontSize: 10, fontWeight: 600,
          letterSpacing: '2.5px', textTransform: 'uppercase', color: 'var(--accent)',
          marginBottom: 14, display: 'flex', alignItems: 'center', gap: 10,
        }}>
          <span style={{ width: 16, height: 1, background: 'var(--accent)', display: 'inline-block' }} />
          Let's Talk
        </p>
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(28px, 3.2vw, 42px)', fontWeight: 800,
          lineHeight: 1.1, letterSpacing: '-0.5px', marginBottom: 16,
        }}>
          What is your team{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>still doing manually?</em>
        </h2>
        <p style={{ fontSize: 15, color: '#888', lineHeight: 1.8, marginBottom: 32 }}>
          Tell me about the process that wastes the most time. I'll help you figure out whether it can be automated, what the first version looks like, and how fast we can get something working.
          <br /><br />
          For many teams, even one automated workflow can save enough hours to justify the project quickly.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {promises.map((p, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 13, color: '#999' }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
              {p}
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div className="form-row">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <label style={labelStyle}>First Name</label>
            <input name="firstName" type="text" placeholder="John" required
              value={form.firstName} onChange={handleChange} style={inputStyle}
              onFocus={e => e.target.style.borderColor = 'var(--accent)'}
              onBlur={e => e.target.style.borderColor = 'var(--border)'}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <label style={labelStyle}>Last Name</label>
            <input name="lastName" type="text" placeholder="Smith" required
              value={form.lastName} onChange={handleChange} style={inputStyle}
              onFocus={e => e.target.style.borderColor = 'var(--accent)'}
              onBlur={e => e.target.style.borderColor = 'var(--border)'}
            />
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <label style={labelStyle}>Work Email</label>
          <input name="email" type="email" placeholder="john@company.com" required
            value={form.email} onChange={handleChange} style={inputStyle}
            onFocus={e => e.target.style.borderColor = 'var(--accent)'}
            onBlur={e => e.target.style.borderColor = 'var(--border)'}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <label style={labelStyle}>Company</label>
          <input name="company" type="text" placeholder="Your company name"
            value={form.company} onChange={handleChange} style={inputStyle}
            onFocus={e => e.target.style.borderColor = 'var(--accent)'}
            onBlur={e => e.target.style.borderColor = 'var(--border)'}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <label style={labelStyle}>What process is killing your team's time?</label>
          <select name="category" value={form.category} onChange={handleChange}
            style={{ ...inputStyle, cursor: 'pointer', color: form.category ? 'var(--white)' : '#888' }}>
            <option value="" disabled>Select a category</option>
            <option>Manual reporting &amp; data exports</option>
            <option>Document review &amp; compliance</option>
            <option>Lead generation &amp; research</option>
            <option>Internal workflow automation</option>
            <option>System integrations</option>
            <option>Something else</option>
          </select>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <label style={labelStyle}>Tell me more</label>
          <textarea name="message" placeholder="Describe the manual process, how often it happens, and roughly how much time it takes per week. The more specific, the better I can help."
            value={form.message} onChange={handleChange}
            style={{ ...inputStyle, resize: 'vertical', minHeight: 110, lineHeight: 1.6 }}
            onFocus={e => e.target.style.borderColor = 'var(--accent)'}
            onBlur={e => e.target.style.borderColor = 'var(--border)'}
          />
        </div>

        <div className="form-submit">
          <span style={{ fontSize: 12, color: '#555' }}>I'll respond within 24 hours.</span>
          <button type="submit" disabled={status === 'loading' || status === 'success'}
            style={{
              fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, fontWeight: 600,
              color: 'var(--black)', background: status === 'success' ? '#fff' : 'var(--accent)',
              border: 'none', padding: '13px 28px', borderRadius: 100,
              cursor: status === 'loading' || status === 'success' ? 'default' : 'pointer',
              opacity: status === 'loading' || status === 'success' ? 0.6 : 1,
              transition: 'opacity 0.2s, transform 0.15s',
              letterSpacing: '-0.2px',
            }}
          >
            {status === 'success' ? 'Request Received ✓' : status === 'loading' ? 'Sending…' : 'See If This Can Be Automated →'}
          </button>
        </div>

        {status === 'success' && (
          <p style={{ fontSize: 13, color: 'var(--accent)', marginTop: 4 }}>
            Request received — I'll be in touch within 24 hours.
          </p>
        )}
        {status === 'error' && (
          <p style={{ fontSize: 13, color: '#f87171', marginTop: 4 }}>
            Something went wrong. Please email <a href="mailto:hectorsilvarobles@gmail.com" style={{ color: '#f87171' }}>hectorsilvarobles@gmail.com</a> directly.
          </p>
        )}
      </form>
    </div>
  )
}
