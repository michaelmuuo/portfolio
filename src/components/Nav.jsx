const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  return (
    <header className="nav">
      <div className="nav__inner">
        <a href="#top" className="nav__logo mono">
          root@mmj<span className="nav__cursor">_</span>
        </a>
        <nav aria-label="Section navigation">
          <ul className="nav__links">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
