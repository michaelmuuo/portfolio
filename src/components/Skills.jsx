import { skillGroups } from '../data/content'

export default function Skills() {
  return (
    <section className="section" id="skills">
      <h2 className="section__title">Skills</h2>
      <div className="skills">
        {skillGroups.map((group) => (
          <div className="skills__group" key={group.label}>
            <p className="skills__label mono">{group.label}</p>
            <ul className="skills__tags">
              {group.items.map((item) => (
                <li className="skills__tag mono" key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
