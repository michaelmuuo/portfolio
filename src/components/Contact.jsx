import { profile } from '../data/content'

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="contact__panel">
        <p className="eyebrow mono">Connection request</p>
        <h2 className="contact__title">Let's connect</h2>
        <p className="contact__body">
          Reach out about networking, security, or infrastructure roles —
          I'm happy to talk through the details.
        </p>
        <div className="contact__links">
          <a className="btn btn--primary" href={`mailto:${profile.email}`}>Email me</a>
          <a className="btn btn--ghost" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="btn btn--ghost" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </section>
  )
}
