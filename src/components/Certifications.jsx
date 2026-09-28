import { certifications } from '../data/content'

export default function Certifications() {
  return (
    <section className="section" id="certifications">
      <h2 className="section__title">Certifications</h2>
      <ul className="certs">
        {certifications.map((cert) => (
          <li className="certs__item" key={cert.code}>
            <span className="certs__status" aria-hidden="true" />
            <div className="certs__text">
              <p className="certs__name">{cert.name}</p>
              <p className="certs__issuer">{cert.issuer}</p>
            </div>
            <span className="certs__code mono">{cert.code}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
