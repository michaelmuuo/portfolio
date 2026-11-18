

export const profile = {
  name: 'Michael Muuo John',
  title: 'Information Technology Professional',
  location: 'Nairobi, Kenya',
  tagline:
    'I design, secure, and support systems that keep organizations connected.',
  email: 'michaelmuuo912@gmail.com', 
  linkedin: 'https://www.linkedin.com/in/michael-muuo-2684a93b1/', 
  github: 'https://github.com/your-handle', 
  resumeUrl: '#', 
  availability: 'Open to opportunities',
}




export const about = `I am an IT professional with hands-on experience supporting enterprise networks, endpoint security, databases, and ICT 
infrastructure across a 200+ device environment. Cisco CCNA-certified across Networking, Security, and Automation 
tracks, with additional credentials in CyberOps, DevNet, and Datacom. Proven track record maintaining 90%+ network uptime and delivering 100% device connectivity on a national 
government network migration. Seeking to bring strong troubleshooting, monitoring, and infrastructure support skills 
to a growing IT team.`

export const skillGroups = [
  
  {
    label: 'Software Development',
    items: ['Full Stack Web Development', 'Git & Version Control', 'Node.js','ASP.NET Core C#', 'React.js'],
  },
  
  {
    label: 'Networking',
    items: ['Routing & Switching', 'VPN Technologies', 'Network Infrastructure Support','Network cabling and configuration', 'Network Troubleshooting'],
  },
  {
    label: 'Security',
    items: ['Endpoint Security', 'SIEM Tools', 'Anti-Malware agents deployment'],
  },
  {
    label: 'Platforms',
    items: ['Linux Administration', 'Cisco IOS', 'Huawei Versatile Routing Platform'],
  },
]

export const issuerLogos = {
  Cisco: '/logos/cisco-logo.svg',
  Huawei: '/logos/huawei-logo.svg',
}

export const certifications = [
  { name: 'CCNA (Introduction to Networks)', issuer: 'Cisco', url:'/certificates/ccna-intro-to-networks.pdf' },
  { name: 'CCNA (Switching, Routing and Wireless essentials)', issuer: 'Cisco', url:'/certificates/ccna-switching-routing-wireless.pdf' },
  { name: 'CCNA (Enterprise Networking and Automation)', issuer: 'Cisco', url:'/certificates/ccna-enterprise-networking-automation.pdf' },
  { name: 'CyberOps Associate', issuer: 'Cisco', url:'/certificates/cyberops-associate.pdf'},
  { name: 'DevNet Associate', issuer: 'Cisco', url:'/certificates/devnet-associate.pdf'},
  { name: 'HCIA-Datacom', issuer: 'Huawei', url:'/certificates/hcia-datacom.pdf' },
  { name: 'HCIA-Training', issuer: 'Huawei', url:'/certificates/HCIA_Certificate of participation_Michael Muuo.pdf' },
]


export const experience = [
  {
    role: 'Intern — Presidential Digital Talent Program',
    org: 'ICT Authority, deployed at the State Department for Livestock Development',
    period: 'Jan 2025 – Dec 2025',
    points: [
              'Monitored the Local Area Network infrastructure, maintaining 90% uptime across the department.',
              'Supported 200+ endpoints including desktops, laptops, servers, routers, switches, access points, printers, and smartphones.',
              'Led connection of the Directorate of Livestock Production to the Government Common Core Network (GCCN), achieving 100% device connectivity.',
              'Cut recurring system crashes by implementing a regular software update and inspection routine.',
              'Enabled 100% digital support for departmental meetings, integrating online collaboration and presentation tools.',
              'Collaborated with third-party organizations to develop software solutions for the Directorate of Livestock Production.',
            ],
  },
]

export const education = [
  {
    
    program: 'B.Sc. Information Technology',
    period: 'Dec 2023',

  },
]

export const memberships = [
  'Association of Computing Practitioners – Kenya',
  'Internet Society – Kenya Chapter',
]

export const projects = [
  {
    title: 'EPL 26/27 Live Title Race Tracker',
    status: 'In progress',
    tagline: 'A Premier League dashboard that updates itself after every matchweek.',
    valueProposition:
      "Most football dashboards only show today's table. This one saves a snapshot every week, so it shows the story of the title race: who is climbing, who is fading, and who is on pace to win it. It keeps updating through the 2026/27 season with no manual work, so there is a fresh reason to come back every week.",
    pipeline: ['football-data.org API', 'Vercel Cron', 'Supabase', 'Dashboard'],
    features: [
      {
        name: 'Title Race Chart',
        description:
          'Animated line chart of points against matchweek for the top 5, with teams you can toggle on and off. It grows automatically every week.',
      },
      {
        name: 'Form & Momentum',
        description:
          'Bump chart of league position changes, last-5 form strips (W/W/D/L/W), and an auto-calculated "Biggest Mover This Week" card.',
      },
      {
        name: 'Who Wins It? Predictor',
        description:
          'Projected final points = current points + (points per game × games left). Simple, transparent maths with no black-box AI, refreshed after every update.',
      },
      {
        name: 'Golden Boot Race',
        description:
          'Weekly-updating bar chart of the top scorers, pulled from the competition scorers endpoint.',
      },
    ],
    highlights: [
      'Scheduled data pipeline: a weekly cron job fetches standings and writes a new snapshot instead of overwriting old data.',
      'Historical standings_history table (matchweek, team, points, position, goals for/against) powers every chart.',
      'Runs hands-free for the rest of the 38-matchweek season (Aug 2026 – May 2027).',
    ],
    stack: ['Next.js', 'TypeScript', 'Supabase', 'Vercel Cron', 'football-data.org API', 'Data Visualization'],
    liveUrl: null, // set when deployed
    repoUrl: null, // e.g. 'https://github.com/your-handle/epl-tracker'
  },
]