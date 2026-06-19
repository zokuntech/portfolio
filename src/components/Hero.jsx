export default function Hero() {
  return (
    <div className="hero-inner" style={{
      minHeight: '100vh',
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      padding: '130px 48px 90px',
      borderBottom: '1px solid var(--border)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* glow top-right */}
      <div style={{
        position: 'absolute', top: -300, right: -300,
        width: 800, height: 800,
        background: 'radial-gradient(circle, rgba(200,241,53,0.055) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />
      {/* glow bottom-left */}
      <div style={{
        position: 'absolute', bottom: -100, left: -100,
        width: 400, height: 400,
        background: 'radial-gradient(circle, rgba(200,241,53,0.025) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <p style={{
        display: 'inline-flex', alignItems: 'center', gap: 8,
        fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 500,
        letterSpacing: 2, textTransform: 'uppercase', color: 'var(--accent)',
        marginBottom: 28,
      }}>
        <span style={{ width: 20, height: 1, background: 'var(--accent)', display: 'inline-block' }} />
        Business Process Automation for SMBs
      </p>

      <h1 style={{
        fontFamily: "'Playfair Display', serif", fontWeight: 900,
        fontSize: 'clamp(46px, 6.8vw, 90px)', lineHeight: 1.0,
        letterSpacing: '-1.5px', maxWidth: 820, marginBottom: 0, color: 'var(--white)',
      }}>
        Automation systems for teams{' '}
        <span style={{ display: 'block', color: 'var(--accent)', fontStyle: 'italic' }}>
          buried in manual work.
        </span>
      </h1>

      <div style={{ width: 48, height: 1, background: 'var(--border)', margin: '32px 0' }} />

      <p style={{ fontSize: 18, fontWeight: 400, color: '#aaa', maxWidth: 520, lineHeight: 1.75, marginBottom: 48 }}>
        I help SMBs turn repetitive reporting, data entry, approvals, lead research, and disconnected tools into{' '}
        <strong style={{ color: 'var(--white)', fontWeight: 500 }}>systems that run automatically.</strong>
        <br /><br />
        Every hour your team spends on manual work is an hour you're paying for twice — once in salary, once in lost focus.
        <br /><br />
        First working version in about a week. Clean handoff. No vendor lock-in.
      </p>

      <p style={{
        fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, color: 'var(--subtle)',
        marginTop: -28, marginBottom: 48, letterSpacing: '0.3px',
      }}>
        Best fit for teams spending{' '}
        <strong style={{ color: '#aaa' }}>5+ hours per week</strong>{' '}
        on repeat workflows, manual reporting, CRM cleanup, lead research, or approval processes.
      </p>

      <div className="hero-stats" style={{
        display: 'flex', gap: 0, border: '1px solid var(--border)', borderRadius: 6,
        overflow: 'hidden', maxWidth: 520, background: 'var(--mid)',
      }}>
        {[
          { number: '5', label: 'Projects Shipped' },
          { number: '20h+', label: 'Saved / Week' },
          { number: '~1wk', label: 'To First Version' },
        ].map((s, i) => (
          <div key={i} style={{
            flex: 1, display: 'flex', flexDirection: 'column', gap: 5,
            padding: '18px 22px',
            borderRight: i < 2 ? '1px solid var(--border)' : 'none',
          }}>
            <span style={{
              fontFamily: "'Space Grotesk', sans-serif", fontSize: 28, fontWeight: 700,
              color: 'var(--white)', letterSpacing: '-1px', lineHeight: 1,
            }}>{s.number}</span>
            <span style={{
              fontFamily: "'Space Grotesk', sans-serif", fontSize: 9, color: 'var(--subtle)',
              letterSpacing: 1, textTransform: 'uppercase', lineHeight: 1.4,
            }}>{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
