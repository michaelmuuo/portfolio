import { LuCog } from 'react-icons/lu'
import { projects } from '../data/content' // adjust the path to wherever your data file lives

function WipIcon() {
  // Spinning cog (same icon library as your nav) to signal "being worked on".
  return <LuCog className="wip__icon" size={22} aria-hidden="true" />
}

export default function Projects() {
  return (
    <section className="section" id="projects">
      <p className="eyebrow">Projects</p>
      <h2 className="section__title projects__heading">
        What I'm building
        <span className="wip" title="Projects in this section are still being worked on">
          <WipIcon />
          <span className="wip__label">Work in progress</span>
        </span>
      </h2>

      <div className="projects">
        {projects.map((p) => (
          <article className="project" key={p.title}>
            <header className="project__header">
              <h3 className="project__title">
                <span className="wip wip--inline" aria-label="In progress">
                  <WipIcon />
                </span>
                {p.title}
              </h3>
              <span className="project__status">
                <span className="wip__dot wip__dot--light" aria-hidden="true" />
                 {p.status}
                </span>
            </header>

            <p className="project__tagline">{p.tagline}</p>

            <h4 className="project__label">Value proposition</h4>
            <p className="project__text">{p.valueProposition}</p>

            <h4 className="project__label">How it updates itself</h4>
            <ol className="pipeline">
              {p.pipeline.map((step, i) => (
                <li className="pipeline__step" key={step}>
                  {step}
                  {i < p.pipeline.length - 1 && <span className="pipeline__arrow" aria-hidden="true">→</span>}
                </li>
              ))}
            </ol>

            <h4 className="project__label">Functionality</h4>
            <div className="project__features">
              {p.features.map((f) => (
                <div className="feature" key={f.name}>
                  <h5 className="feature__name">{f.name}</h5>
                  <p className="feature__desc">{f.description}</p>
                </div>
              ))}
            </div>

            <h4 className="project__label">Highlights</h4>
            <ul className="timeline__points">
              {p.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>

            <div className="skills__tags project__stack">
              {p.stack.map((s) => (
                <span className="skills__tag" key={s}>{s}</span>
              ))}
            </div>

            <div className="project__actions">
              {p.liveUrl ? (
                <a className="btn btn--primary" href={p.liveUrl} target="_blank" rel="noreferrer">Live demo</a>
              ) : (
                <span className="btn btn--primary btn--disabled">Live demo · coming soon</span>
              )}
              {p.repoUrl ? (
                <a className="btn btn--ghost" href={p.repoUrl} target="_blank" rel="noreferrer">Source code</a>
              ) : (
                <span className="btn btn--ghost btn--disabled">Source code · coming soon</span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
