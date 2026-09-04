export const profile = {
  name: 'Nancy Agarwal',
  initials: 'NA',
  location: 'Greater Noida, U.P.',
  phone: '+91-9079451197',
  phoneHref: 'tel:+919079451197',
  email: 'nancyagarwal9023@gmail.com',
  role: 'B.Tech IT · Full-stack & AI',
  resumeHref: '/Nancy_Agarwal_Resume.pdf',
  headline: 'Building useful software with',
  typing: [
    'full-stack web apps.',
    'AI-powered products.',
    'clean, human UX.',
    'solid DSA habits.',
  ],
}

export const socials = [
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/nancy123-ag',
    handle: 'nancy123-ag',
    tint: 'bg-[#111827]',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/nancy-agarwal-2599b8331',
    handle: 'nancy-agarwal',
    tint: 'bg-[#0A66C2]',
  },
  {
    id: 'leetcode',
    label: 'LeetCode',
    href: 'https://leetcode.com/u/_nancyag/',
    handle: '_nancyag',
    tint: 'bg-[#FFA116]',
  },
  {
    id: 'neetcode',
    label: 'NeetCode',
    href: 'https://neetcode.io/user/VerdantGuardian57',
    handle: 'VerdantGuardian57',
    tint: 'bg-[#1f6feb]',
  },
  {
    id: 'gfg',
    label: 'GeeksforGeeks',
    href: 'https://www.geeksforgeeks.org/profile/nancyagawal05?tab=activity',
    handle: 'nancyagawal05 · Banasthali Vidyapith',
    tint: 'bg-[#2F8D46]',
  },
  {
    id: 'code360',
    label: 'Naukri Code 360',
    href: 'https://www.naukri.com/code360/profile/b3c5cdfe-1dd4-4ac2-a547-4eb99ab637f1',
    handle: 'Nancy Agarwal · Coding Ninjas',
    tint: 'bg-[#FA7A27]',
  },
] as const

export const stats = [
  { value: '9.36', suffix: '', label: 'CGPA' },
  { value: '500+', suffix: '', label: 'Users persisted' },
  { value: '~80%', suffix: '', label: 'Emotion accuracy' },
  { value: 'Top 150', suffix: '', label: 'Akamai EmpowHer' },
]

export const education = [
  {
    id: 'btech',
    kind: 'education' as const,
    logo: 'BV',
    title: 'Banasthali Vidyapith',
    role: 'B.Tech — Information Technology',
    place: 'Jaipur, Rajasthan',
    dates: '2023 – 2027',
    meta: 'CGPA 9.36 / 10',
    points: [
      'Coursework: OOP, Operating Systems, Computer Networks, Data Structures, Analysis of Algorithms.',
    ],
  },
]

export const experience = [
  {
    id: 'mits',
    kind: 'work' as const,
    logo: 'MI',
    title: 'Micro Information Technology Services',
    role: 'Software Engineer Intern',
    place: 'Remote',
    dates: 'May 2025 – Jun 2025',
    meta: 'Web + C++',
    points: [
      'Built a C++ health tracker with BMI/BMR calculator, food logging, and workout planner using OOP and file handling for 500+ users.',
      'Shipped responsive web apps, including interactive Tic Tac Toe, with HTML, CSS, and JavaScript in a virtual team.',
      'Cut development time by ~20% with browser DevTools, structured reviews, and Git collaboration.',
    ],
  },
]

export const projects = [
  {
    id: 'youtube-agent',
    name: 'YouTube Agent',
    kind: 'Personal project',
    dates: 'CLI · Node + Python',
    blurb:
      'Automated YouTube channel manager that plans 30 days of content, renders AI videos, uploads on schedule, and emails comment digests.',
    points: [
      'Node/TypeScript orchestrator plus Python engine: script, images, TTS, captions, FFmpeg MP4s.',
      'YouTube Data API v3 uploads, comment polling, SQLite status, and daily Gmail summaries.',
    ],
    tags: ['TypeScript', 'Node.js', 'Python', 'Ollama', 'FFmpeg', 'YouTube API'],
    github: 'https://github.com/nancy123-ag/youtube-agent',
    live: null as string | null,
    accent: 'from-violet-500 to-indigo-500',
  },
  {
    id: 'emoheal',
    name: 'EmoHeal — AI Mental Health Platform',
    kind: 'Group project',
    dates: 'Jul 2025 – Apr 2026',
    blurb:
      'Multimodal emotion detection (webcam + mic) with a Digital Garden dashboard, chatbot, and mood-aware Spotify.',
    points: [
      'OpenCV + Librosa classification at ~80% real-time accuracy.',
      'Therapy mini-games (Fruit Ninja, Pac-Man) plus Spotify API playlists.',
    ],
    tags: ['Python', 'OpenCV', 'Librosa', 'React', 'Node.js', 'Spotify'],
    github: 'https://github.com/nancy123-ag/MainApp',
    live: null as string | null,
    accent: 'from-cyan-500 to-emerald-500',
  },
]

export const skillGroups = [
  {
    title: 'Languages',
    items: ['Java', 'Python', 'C', 'C++', 'JavaScript'],
  },
  {
    title: 'Web',
    items: ['HTML', 'CSS', 'React.js', 'Node.js'],
  },
  {
    title: 'Data',
    items: ['MongoDB', 'MySQL', 'Oracle'],
  },
  {
    title: 'AI / ML',
    items: ['OpenCV', 'NumPy', 'Pandas', 'OpenAI API'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'Docker', 'Linux', 'VS Code'],
  },
]

export const certifications = [
  {
    title: 'Graph Theory Programming Camp',
    org: 'AlgoUniversity',
    date: 'Oct 2025',
    href: 'https://d3uam8jk4sa4y4.cloudfront.net/static/certificates/graph_camp/nancy-agarwal.png',
  },
  {
    title: 'Array Mastery — Crack Array Puzzles Like a Pro',
    org: 'Certification',
    date: 'Jun 2025',
    href: 'https://drive.google.com/file/d/1n_oRJda5_aBLAH-YUa9ZhMQLx_ADrcm1/view',
  },
  {
    title: '1-Month Virtual Internship on Web Development',
    org: 'Internship cert',
    date: 'Jun 2025',
    href: 'https://drive.google.com/file/d/1bR7HyRWOy0cfXQeHdNCHsC6ZPGSQkmCi/view?usp=drivesdk',
  },
]

export const highlights = [
  {
    title: 'Akamai EmpowHer 3.0',
    detail: 'Top 150 candidates',
    date: 'Jun 2026',
  },
  {
    title: 'Ideathon Winner 2025',
    detail: 'Secure digital identity wallet · 110+ teams',
    date: 'Oct 2025',
  },
  {
    title: 'Mayukh Workshop',
    detail: 'Subcore · MayukhXBV sessions',
    date: 'Mar 2026',
  },
  {
    title: 'NSS Volunteer',
    detail: '7-day camp · drives & outreach',
    date: 'Jul 2023',
  },
]

export const nav = [
  { href: '#work', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#profiles', label: 'Profiles' },
  { href: '#contact', label: 'Contact' },
]
