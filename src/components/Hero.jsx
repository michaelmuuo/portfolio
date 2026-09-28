import { useEffect, useState } from 'react'
import { profile, traceHops } from '../data/content'

const HOP_DELAY_MS = 260

export default function Hero() {
  const [visibleHops, setVisibleHops] = useState(0)
  const [revealSummary, setRevealSummary] = useState(false)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion) {
      setVisibleHops(traceHops.length)
      setRevealSummary(true)
      return
    }

    let cancelled = false
    let i = 0

    const tick = () => {
      if (cancelled) return
      i += 1
      setVisibleHops(i)
      if (i >= traceHops.length) {
        setTimeout(() => !cancelled && setRevealSummary(true), 300)
        return
      }
      setTimeout(tick, HOP_DELAY_MS)
    }

    const start = setTimeout(tick, 500)
    return () => {
      cancelled = true
      clearTimeout(start)
    }
  }, [])

  return (
    <section className="hero" id="top">
      <div className="hero__inner">
        <div className="terminal" role="img" aria-label={`Traceroute showing career path: ${traceHops.map(h => h.host).join(', ')}, ending at ${profile.name}`}>
          <div className="terminal__bar">
            <span className="terminal__dot" style={{ background: '#ff5f57' }} />
            <span className="terminal__dot" style={{ background: '#febc2e' }} />
            <span className="terminal__dot" style={{ background: '#28c840' }} />
            <span className="terminal__title mono">michael@network:~</span>
          </div>
          <div className="terminal__body mono">
            <p className="terminal__prompt">
              <span className="terminal__prompt-sign">$</span> traceroute {profile.name.toLowerCase().replace(/\s+/g, '-')}.dev
            </p>
            <p className="terminal__meta">traceroute to destination, {traceHops.length} hops max</p>
            <ol className="terminal__hops">
              {traceHops.slice(0, visibleHops).map((hop, idx) => (
                <li key={hop.host} className={hop.final ? 'terminal__hop terminal__hop--final' : 'terminal__hop'}>
                  <span className="terminal__hop-index">{idx + 1}</span>
                  <span className="terminal__hop-host">{hop.host}</span>
                  <span className="terminal__hop-detail">{hop.detail}{hop.final ? ' ✓' : ''}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className={revealSummary ? 'hero__summary hero__summary--visible' : 'hero__summary'}>
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
