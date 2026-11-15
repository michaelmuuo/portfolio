import { useState } from 'react'
import {
  LuUser,
  LuCode,
  LuBriefcase,
  LuAward,
  LuMail,
  LuMenu,
  LuX,
} from 'react-icons/lu'

const links = [
  { href: '#about', label: 'About', icon: LuUser },
  { href: '#skills', label: 'Skills', icon: LuCode },
  { href: '#experience', label: 'Experience', icon: LuBriefcase },
  { href: '#certifications', label: 'Certifications', icon: LuAward },
  { href: '#contact', label: 'Contact', icon: LuMail },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="nav">
      <div className="nav__inner">
        <button
          type="button"
          className="nav__toggle"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="nav-menu"
        >
          {open ? <LuX /> : <LuMenu />}
        </button>

        <nav
          id="nav-menu"
          className={`nav__menu ${open ? 'nav__menu--open' : ''}`}
          aria-label="Section navigation"
        >
          <ul className="nav__links">
            {links.map((link) => {
              const Icon = link.icon

              return (
                <li key={link.href}>
                  <a href={link.href} onClick={() => setOpen(false)}>
                    <Icon className="nav__icon" aria-hidden="true" />
                    <span>{link.label}</span>
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <img
          src="/passport.jpg"
          alt="Michael Muuo John"
          className="nav__photo"
        />
      </div>
    </header>
  )
}