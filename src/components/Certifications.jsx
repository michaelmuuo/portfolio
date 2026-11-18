import { certifications, issuerLogos  } from '../data/content'

export default function Certifications() {
  return (
    <section className="section" id="certifications">
      <h2 className="section__title">Certifications & Trainings</h2>
      <ul className="certs">
        {certifications.map((cert) => (
          <li className="certs__item" key={cert.name}>
            <img
          className="certs__logo"
          src={issuerLogos[cert.issuer]}
          alt=""
          width="40"
          height="40"
          loading="lazy"
            />
            <div className="certs__text">
              <p className="certs__name">{cert.name}</p>
              <p className="certs__issuer">{cert.issuer}</p>
            </div>
            <a
        className="btn btn--ghost certs__link mono"
        href={cert.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View certificate: ${cert.name}`}
      >
        View certificate
      </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
