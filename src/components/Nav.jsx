
import {
  LuUser,
  LuCode,
  LuBriefcase,
  LuAward,
  LuMail
} from 'react-icons/lu'

const links = [
  { href: '#about', label: 'About', icon: LuUser },
  { href: '#skills', label: 'Skills', icon: LuCode },
  { href: '#experience', label: 'Experience', icon: LuBriefcase },
  { href: '#certifications', label: 'Certifications', icon: LuAward },
  { href: '#contact', label: 'Contact', icon: LuMail },
]

export default function Nav() {
  return (
    <header className="nav">
      <div className="nav__inner">

        <nav aria-label="Section navigation">
          <ul className="nav__links">
            {links.map((link) => {
              const Icon = link.icon

              return (
                <li key={link.href}>
                  <a href={link.href}>
                    <Icon className="nav__icon" aria-hidden="true" />
                    <span>{link.label}</span>
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <img
          src="/passport.png"
          alt="Michael Muuo John"
          className="nav__photo"
        />

      </div>
    </header>
  )
}
