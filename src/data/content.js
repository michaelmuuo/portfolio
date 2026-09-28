// Edit this file to update the site's content — nothing else needs to change.

export const profile = {
  name: 'Michael Muuo John',
  title: 'Information Technology Professional',
  location: 'Nairobi, Kenya',
  tagline:
    'I design, secure, and support IT systems that keep organizations connected — from routing and VPNs to endpoint security and SIEM monitoring.',
  email: 'your.email@example.com', // TODO: replace with real contact email
  linkedin: 'https://linkedin.com/in/your-handle', // TODO
  github: 'https://github.com/your-handle', // TODO
  resumeUrl: '#', // TODO: link to a hosted PDF resume
  availability: 'Open to opportunities',
}

// Hops rendered in the hero traceroute. Order matters — it reads top to bottom
// the way a real traceroute does, tracing the path to where Michael is today.
export const traceHops = [
  {
    host: 'kenyatta-university.edu',
    detail: 'BSc Information Technology · Upper Second Class Honours · Dec 2023',
  },
  {
    host: 'pdtp.icta.go.ke',
    detail: 'Presidential Digital Talent Program, ICT Authority · Jan–Dec 2025',
  },
  {
    host: 'ccna.cisco.com',
    detail: 'CCNA · CyberOps Associate · DevNet Associate',
  },
  {
    host: 'huawei.hcia-datacom',
    detail: 'Huawei Certified ICT Associate — Datacom',
  },
  {
    host: 'linuxfoundation.org',
    detail: 'Linux Foundation Certified',
  },
  {
    host: 'michael-muuo.dev',
    detail: 'connection established',
    final: true,
  },
]

export const statusRows = [
  { name: 'Location', status: 'up', detail: 'Nairobi, Kenya' },
  { name: 'Focus', status: 'up', detail: 'Network Infrastructure & Security' },
  { name: 'Availability', status: 'up', detail: 'Open to opportunities' },
]

export const about = `Michael holds a Bachelor of Science in Information Technology from Kenyatta University, graduating with Upper Second Class Honours in December 2023. He completed the Presidential Digital Talent Program with the ICT Authority, based at the State Department for Livestock Development, where he spent a year supporting networking and ICT infrastructure for a government agency in production. His work sits at the intersection of networking, endpoint security, and monitoring — the practical layer that keeps systems reachable, protected, and observable.`

export const skillGroups = [
  {
    label: 'Networking',
    items: ['Routing & Switching', 'VPN Technologies', 'ICT Infrastructure Support', 'Network Troubleshooting'],
  },
  {
    label: 'Security',
    items: ['Endpoint Security', 'SIEM Tools', 'Security Operations Basics'],
  },
  {
    label: 'Platforms',
    items: ['Linux Administration', 'Cisco IOS', 'Huawei Datacom'],
  },
]

export const certifications = [
  { name: 'CCNA', issuer: 'Cisco', code: 'CCNA-TRACK' },
  { name: 'CyberOps Associate', issuer: 'Cisco', code: 'CBROPS' },
  { name: 'DevNet Associate', issuer: 'Cisco', code: 'DEVASC' },
  { name: 'HCIA-Datacom', issuer: 'Huawei', code: 'HCIA-DC' },
  { name: 'Linux Foundation Certifications', issuer: 'Linux Foundation', code: 'LF-CERT' },
]

export const experience = [
  {
    role: 'ICT Intern — Presidential Digital Talent Program',
    org: 'ICT Authority, at the State Department for Livestock Development',
    period: 'Jan 2025 – Dec 2025',
    points: [
      'Supported networking and ICT infrastructure for a government department in daily production use.',
      'Worked hands-on with routing, VPN connectivity, endpoint security, and monitoring tools.',
      'Provided infrastructure support as part of a national digital talent placement program.',
    ],
  },
]

export const education = [
  {
    school: 'Kenyatta University',
    program: 'B.Sc. Information Technology',
    period: 'Graduated Dec 2023',
    detail: 'Upper Second Class Honours',
  },
]

export const memberships = [
  'Association of Computing Practitioners – Kenya',
  'Internet Society – Kenya Chapter',
]
