import { statusRows } from '../data/content'

export default function StatusBar() {
  return (
    <section className="status-bar" aria-label="Quick facts">
      <div className="status-bar__inner mono">
        <div className="status-bar__row status-bar__row--head">
          <span>Name</span>
          <span>Status</span>
          <span>Detail</span>
        </div>
        {statusRows.map((row) => (
          <div className="status-bar__row" key={row.name}>
            <span>{row.name}</span>
            <span className="status-bar__status">
              <span className="status-bar__pip" aria-hidden="true" />
              {row.status}
            </span>
            <span className="status-bar__detail">{row.detail}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
