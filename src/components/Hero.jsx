import { profile } from '../data/content'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__inner">
        <div className="hero__summary hero__summary--visible">
          <p className="eyebrow mono">{profile.availability}</p>
          <h1 className="hero__name">{profile.name}</h1>
          <p className="hero__title">{profile.title}</p>
          <p className="hero__tagline">{profile.tagline}</p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#contact">Get in touch</a>
            <a className="btn btn--ghost" href="#certifications">View certifications</a>
          </div>
        </div>
      </div>
    </section>
  )
}