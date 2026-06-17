import { steps } from '../data/process'

export default function Process() {
  return (
    <section style={{ padding: '96px 48px', borderBottom: '1px solid var(--border)' }}>
      <p style={{
        fontFamily: "'Space Grotesk', sans-serif", fontSize: 10, fontWeight: 600,
        letterSpacing: '2.5px', textTransform: 'uppercase', color: 'var(--accent)',
        marginBottom: 14, display: 'flex', alignItems: 'center', gap: 10,
      }}>
        <span style={{ width: 16, height: 1, background: 'var(--accent)', display: 'inline-block' }} />
        How It Works
      </p>
      <h2 style={{
        fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px, 3.2vw, 42px)',
        fontWeight: 800, letterSpacing: '-0.5px', marginBottom: 12, maxWidth: 540, lineHeight: 1.1,
      }}>Simple process. Working system.</h2>
      <p style={{ fontSize: 15, color: '#888', maxWidth: 480, lineHeight: 1.75, marginBottom: 52 }}>
        No lengthy discovery phases. No bloated proposals. Just a clear path from problem to working software.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 2 }}>
        {steps.map((s, i) => (
          <div key={i} style={{
            background: 'var(--card)', border: '1px solid var(--border)',
            borderRadius: 4, padding: '28px 24px',
          }}>
            <div style={{
              fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 700,
              color: 'var(--accent)', letterSpacing: 2, marginBottom: 14,
            }}>{s.num}</div>
            <h4 style={{
              fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, fontWeight: 600,
              color: 'var(--white)', marginBottom: 8,
            }}>{s.title}</h4>
            <p style={{ fontSize: 13, color: 'var(--subtle)', lineHeight: 1.7 }}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
