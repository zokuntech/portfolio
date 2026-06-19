const pains = [
  {
    title: "Manual reports that eat up your Fridays",
    desc: "Built by hand, sent by 5pm, and obsolete by Monday morning. Every single week.",
  },
  {
    title: "Copy-pasting between tools that don't talk",
    desc: "Your CRM, your spreadsheets, your inbox — all disconnected. Someone on your team is the human glue holding it together, and that's a problem.",
  },
  {
    title: "Approvals stuck in inboxes",
    desc: "Compliance checks, document reviews, intake forms — sitting idle, waiting on a human who has far better things to do.",
  },
  {
    title: "Lead research done by hand",
    desc: "Manually hunting contacts, qualifying prospects, building lists one row at a time — work that should take seconds, not hours.",
  },
  {
    title: "Processes that break when one person is out",
    desc: "If it lives in someone's head or their inbox, it's not a process — it's a risk. Automation makes it consistent, documented, and easier to maintain.",
  },
]

export default function PainSection() {
  return (
    <div className="pain-grid">
      <div>
        <p style={{
          fontFamily: "'Space Grotesk', sans-serif", fontSize: 10, fontWeight: 600,
          letterSpacing: '2.5px', textTransform: 'uppercase', color: 'var(--accent)',
          marginBottom: 14, display: 'flex', alignItems: 'center', gap: 10,
        }}>
          <span style={{ width: 16, height: 1, background: 'var(--accent)', display: 'inline-block' }} />
          Sound Familiar?
        </p>
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 800,
          lineHeight: 1.1, letterSpacing: '-0.5px', marginBottom: 20,
        }}>
          Your best people should not be stuck doing{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>repeat work.</em>
        </h2>
        <p style={{ fontSize: 15, color: '#999', lineHeight: 1.8, maxWidth: 400 }}>
          Most teams already know which processes are wasting time. The problem is they're buried inside spreadsheets, inboxes, CRMs, forms, and "that one person who knows how it works."
          <br /><br />
          I help turn those messy manual workflows into reliable systems — so your team stops firefighting and starts moving forward.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {pains.map((p, i) => (
          <PainItem key={i} {...p} />
        ))}
      </div>
    </div>
  )
}

function PainItem({ title, desc }) {
  return (
    <div
      style={{
        display: 'flex', alignItems: 'flex-start', gap: 16,
        padding: '20px 24px',
        background: 'var(--card)',
        border: '1px solid var(--border)',
        borderRadius: 4,
        transition: 'border-color 0.2s',
        cursor: 'default',
      }}
      onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
      onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
    >
      <div style={{
        width: 18, height: 18, borderRadius: '50%',
        background: 'rgba(200,241,53,0.1)', border: '1px solid var(--accent)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0, marginTop: 2,
        fontSize: 9, color: 'var(--accent)', fontWeight: 700,
      }}>✓</div>
      <div style={{ fontSize: 14, color: '#bbb', lineHeight: 1.6 }}>
        <strong style={{ color: 'var(--white)', fontWeight: 500, display: 'block', marginBottom: 2 }}>
          {title}
        </strong>
        {desc}
      </div>
    </div>
  )
}
