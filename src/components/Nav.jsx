export default function Nav() {
  return (
    <nav className="nav-inner" style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      borderBottom: '1px solid var(--border)',
      background: 'rgba(10,10,10,0.94)',
      backdropFilter: 'blur(16px)',
    }}>
      <a href="#" style={{
        fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700,
        fontSize: 17, letterSpacing: '-0.3px', color: 'var(--white)', textDecoration: 'none',
      }}>
        Hector<span style={{ color: 'var(--accent)' }}>.</span>
      </a>
      <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
        <a href="#work" className="nav-links" style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: 'var(--subtle)',
          textDecoration: 'none',
        }}
          onMouseEnter={e => e.target.style.color = 'var(--white)'}
          onMouseLeave={e => e.target.style.color = 'var(--subtle)'}
        >Work</a>
        <a href="#contact" className="nav-links" style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: 'var(--subtle)',
          textDecoration: 'none',
        }}
          onMouseEnter={e => e.target.style.color = 'var(--white)'}
          onMouseLeave={e => e.target.style.color = 'var(--subtle)'}
        >Contact</a>
        <a href="#contact" style={{
          fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 600,
          color: 'var(--black)', background: 'var(--accent)',
          padding: '9px 20px', borderRadius: 100, textDecoration: 'none',
          transition: 'opacity 0.2s, transform 0.15s',
        }}
          onMouseEnter={e => { e.target.style.opacity = '0.88'; e.target.style.transform = 'translateY(-1px)' }}
          onMouseLeave={e => { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)' }}
        >Get Started</a>
      </div>
    </nav>
  )
}
