import { profile } from '../data/content'

export default function Footer() {
  return (
    <footer className="footer">
      <p className="mono">
        {profile.name} · {profile.location} · © {new Date().getFullYear()}
      </p>
    </footer>
  )
}
