import { about, memberships } from '../data/content'

export default function About() {
  return (
    <section className="section" id="about">
      <h2 className="section__title">About</h2>
      <div className="about">
        <p className="about__body">{about}</p>
        <div className="about__memberships">
          <p className="eyebrow mono">Professional bodies Memberships</p>
          <ul>
            {memberships.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
