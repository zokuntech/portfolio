import { services } from '../data/services'

export default function Services() {
  return (
    <section style={{ padding: '96px 48px', borderBottom: '1px solid var(--border)' }}>
      <p style={{
        fontFamily: "'Space Grotesk', sans-serif", fontSize: 10, fontWeight: 600,
        letterSpacing: '2.5px', textTransform: 'uppercase', color: 'var(--accent)',
        marginBottom: 14, display: 'flex', alignItems: 'center', gap: 10,
      }}>
        <span style={{ width: 16, height: 1, background: 'var(--accent)', display: 'inline-block' }} />
        What I Build
      </p>
      <h2 style={{
        fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px, 3.2vw, 42px)',
        fontWeight: 800, letterSpacing: '-0.5px', marginBottom: 12, maxWidth: 540, lineHeight: 1.1,
      }}>Automate. Integrate. Ship.</h2>
      <p style={{ fontSize: 15, color: '#888', maxWidth: 480, lineHeight: 1.75, marginBottom: 52 }}>
        I scope, build, and deliver working automation systems — not slide decks or proposals. Most POCs are live within a week.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 2 }}>
        {services.map((s, i) => <ServiceCard key={i} {...s} />)}
      </div>
    </section>
  )
}

function ServiceCard({ icon, title, desc }) {
  return (
    <div
      style={{
        background: 'var(--card)', border: '1px solid var(--border)',
        padding: 32, borderRadius: 4,
        transition: 'border-color 0.25s',
        position: 'relative', overflow: 'hidden',
        cursor: 'default',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = '#333'
        e.currentTarget.querySelector('.accent-bar').style.transform = 'scaleX(1)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--border)'
        e.currentTarget.querySelector('.accent-bar').style.transform = 'scaleX(0)'
      }}
    >
      <div className="accent-bar" style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 2,
        background: 'var(--accent)',
        transform: 'scaleX(0)', transformOrigin: 'left',
        transition: 'transform 0.3s',
      }} />
      <div style={{
        width: 36, height: 36, borderRadius: 8,
        background: 'rgba(200,241,53,0.08)',
        border: '1px solid rgba(200,241,53,0.2)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 16, marginBottom: 20,
      }}>{icon}</div>
      <h3 style={{
        fontFamily: "'Space Grotesk', sans-serif", fontSize: 15, fontWeight: 600,
        marginBottom: 10, color: 'var(--white)', letterSpacing: '-0.2px',
      }}>{title}</h3>
      <p style={{ fontSize: 13, color: 'var(--subtle)', lineHeight: 1.75 }}>{desc}</p>
    </div>
  )
}
