import { cases } from '../data/cases'

export default function CaseStudies() {
  return (
    <section id="work" className="section-inner" style={{ padding: '96px 48px', borderBottom: '1px solid var(--border)' }}>
      <p style={{
        fontFamily: "'Space Grotesk', sans-serif", fontSize: 10, fontWeight: 600,
        letterSpacing: '2.5px', textTransform: 'uppercase', color: 'var(--accent)',
        marginBottom: 14, display: 'flex', alignItems: 'center', gap: 10,
      }}>
        <span style={{ width: 16, height: 1, background: 'var(--accent)', display: 'inline-block' }} />
        Case Studies
      </p>
      <h2 style={{
        fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px, 3.2vw, 42px)',
        fontWeight: 800, letterSpacing: '-0.5px', marginBottom: 12, maxWidth: 540, lineHeight: 1.1,
      }}>Real systems. Real results.</h2>
      <p style={{ fontSize: 15, color: '#888', maxWidth: 480, lineHeight: 1.75, marginBottom: 52 }}>
        Every project below started with a team doing something manually that they shouldn't have been.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {cases.map((c, i) => <CaseCard key={i} {...c} />)}
      </div>
    </section>
  )
}

function CaseCard({ num, title, tags, impact, problem, solution, stack, stackImpact }) {
  return (
    <div
      style={{
        background: 'var(--card)', border: '1px solid var(--border)',
        borderRadius: 4, overflow: 'hidden', transition: 'border-color 0.25s',
        cursor: 'default',
      }}
      onMouseEnter={e => e.currentTarget.style.borderColor = '#333'}
      onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
    >
      <div className="case-header" style={{
        display: 'grid', gridTemplateColumns: '52px 1fr auto',
        alignItems: 'start', gap: 20, padding: '32px 32px 0',
      }}>
        <span style={{
          fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 600,
          color: 'var(--accent)', paddingTop: 4, letterSpacing: '1.5px',
        }}>{num}</span>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <h3 style={{
            fontFamily: "'Playfair Display', serif", fontSize: 19, fontWeight: 700,
            letterSpacing: '-0.3px', lineHeight: 1.2, color: 'var(--white)',
          }}>{title}</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
            {tags.map((t, i) => (
              <span key={i} style={{
                fontFamily: "'Space Grotesk', sans-serif", fontSize: 9, fontWeight: 500,
                letterSpacing: '0.5px', padding: '3px 8px', borderRadius: 100,
                textTransform: 'uppercase',
                border: t.accent ? '1px solid rgba(200,241,53,0.4)' : '1px solid var(--muted)',
                color: t.accent ? 'var(--accent)' : 'var(--subtle)',
                background: t.accent ? 'rgba(200,241,53,0.05)' : 'transparent',
              }}>{t.label}</span>
            ))}
          </div>
        </div>
        <div style={{ textAlign: 'right', whiteSpace: 'nowrap' }}>
          <span style={{
            fontFamily: "'Space Grotesk', sans-serif", fontSize: 24, fontWeight: 700,
            color: 'var(--accent)', letterSpacing: '-0.5px', display: 'block', lineHeight: 1,
          }}>{impact.number}</span>
          <span style={{
            fontFamily: "'Space Grotesk', sans-serif", fontSize: 9, color: 'var(--subtle)',
            textTransform: 'uppercase', letterSpacing: '0.8px', marginTop: 5, display: 'block',
          }}>{impact.label}</span>
        </div>
      </div>
      <div className="case-body" style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
        margin: '20px 32px 32px 84px',
        border: '1px solid var(--border)', borderRadius: 4, overflow: 'hidden',
      }}>
        {[
          { label: 'The Problem', text: problem },
          { label: 'The Solution', text: solution },
        ].map((col, i) => (
          <div key={i} className="case-body-col" style={{ padding: 18, borderRight: '1px solid var(--border)' }}>
            <p style={{
              fontFamily: "'Space Grotesk', sans-serif", fontSize: 8, fontWeight: 600,
              letterSpacing: 2, textTransform: 'uppercase', color: 'var(--accent)',
              marginBottom: 8, opacity: 0.8,
            }}>{col.label}</p>
            <p style={{ fontSize: 12.5, color: '#888', lineHeight: 1.7 }}>{col.text}</p>
          </div>
        ))}
        <div className="case-body-col" style={{ padding: 18 }}>
          <p style={{
            fontFamily: "'Space Grotesk', sans-serif", fontSize: 8, fontWeight: 600,
            letterSpacing: 2, textTransform: 'uppercase', color: 'var(--accent)',
            marginBottom: 8, opacity: 0.8,
          }}>Stack & Impact</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginBottom: 10 }}>
            {stack.map((s, i) => (
              <span key={i} style={{
                fontFamily: "'Space Grotesk', sans-serif", fontSize: 9, fontWeight: 500,
                background: 'var(--muted)', color: '#ccc',
                padding: '2px 7px', borderRadius: 3, letterSpacing: '0.3px',
              }}>{s}</span>
            ))}
          </div>
          <p style={{ fontSize: 12.5, color: '#888', lineHeight: 1.7 }}>{stackImpact}</p>
        </div>
      </div>
    </div>
  )
}
