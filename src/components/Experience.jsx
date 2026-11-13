import { experience, education } from '../data/content'

export default function Experience() {
  return (
    <section className="section" id="experience">
      <h2 className="section__title">Experience</h2>
      <div className="timeline">
        {experience.map((job) => (
          <div className="timeline__item" key={job.role}>
            <div className="timeline__marker" aria-hidden="true" />
            <div className="timeline__content">
              <p className="timeline__period mono">{job.period}</p>
              <h3 className="timeline__role">{job.role}</h3>
              <p className="timeline__org">{job.org}</p>
              <ul className="timeline__points">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <h3 className="section__subtitle">Education</h3>
      <div className="timeline">
        {education.map((ed) => (
          <div className="timeline__item" key={ed.school}>
            <div className="timeline__marker" aria-hidden="true" />
            <div className="timeline__content">
              <p className="timeline__period mono">{ed.period}</p>
              <h3 className="timeline__role">{ed.program}</h3>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
