export default function Footer() {
  return (
    <footer style={{
      padding: '28px 48px',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    }}>
      <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, color: '#444' }}>
        © 2026 — Hector Silva-Robles
      </p>
      <div style={{ display: 'flex', gap: 20 }}>
        {[
          { label: 'Email', href: 'mailto:hectorsilvarobles@gmail.com' },
          { label: 'LinkedIn', href: '#' },
          { label: 'GitHub', href: '#' },
        ].map(({ label, href }) => (
          <a key={label} href={href} style={{
            fontFamily: "'Space Grotesk', sans-serif", fontSize: 12,
            color: '#555', textDecoration: 'none', transition: 'color 0.2s',
          }}
            onMouseEnter={e => e.target.style.color = 'var(--accent)'}
            onMouseLeave={e => e.target.style.color = '#555'}
          >{label}</a>
        ))}
      </div>
    </footer>
  )
}
