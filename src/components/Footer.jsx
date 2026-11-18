import { FaWhatsapp, FaLinkedinIn } from 'react-icons/fa'
import { SiCredly } from 'react-icons/si'
import { profile } from '../data/content'

const socials = [
  { label: 'WhatsApp', href: profile.whatsapp, Icon: FaWhatsapp },
  { label: 'LinkedIn', href: profile.linkedin, Icon: FaLinkedinIn },
  { label: 'Credly', href: profile.credly, Icon: SiCredly },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="mono">
          {profile.name} · {profile.location} · © {new Date().getFullYear()}
        </p>

        <ul className="footer__social">
          {socials.map(({ label, href, Icon }) => (
            <li key={label}>
              <a href={href} target="_blank" rel="noreferrer" aria-label={label} title={label}>
                <Icon size={20} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}