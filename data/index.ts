export const profile = {
  name: "Navin Raj Govindan",
  shortName: "Navin Raj",
  role: "Technical Lead · Full Stack Engineer",
  location: "Chennai, India",
  timezone: "Asia/Kolkata",
  email: "govindannavinraj@gmail.com",
  github: "https://github.com/Navin-nash",
  linkedin: "https://www.linkedin.com/in/navin-raj-govindan-345b49216/",
  instagram: "https://www.instagram.com/naviin.__/",
  availability: "Open to opportunities",
};

export const skills: Record<string, string[]> = {
  "AI / Agents": ["LangGraph", "LangChain", "Vercel AI SDK", "LangSmith", "OpenAI", "Gemini"],
  "Frontend":    ["Next.js", "React", "TypeScript", "Vite", "Tailwind CSS"],
  "Backend":     ["FastAPI", "Node.js", "Express.js", "REST APIs", "Webhooks"],
  "Databases":   ["PostgreSQL", "MySQL", "MongoDB", "pgvector", "Prisma", "Drizzle ORM", "Tortoise ORM"],
  "Cloud / DevOps": ["AWS", "Hetzner", "Fly.io", "Vercel", "GitHub Actions", "Docker", "Kubernetes"],
  "Languages":   ["TypeScript", "Python", "JavaScript", "SQL", "C", "C++", "Java"],
};

export const experiences = [
  {
    id: 1,
    role: "Technical Lead · Global Full Stack Engineer",
    company: "WeCommit Co., Ltd.",
    companyKo: "위커밋",
    location: "Seoul, South Korea (Remote)",
    period: "November 2024 – Present",
    current: true,
    highlights: [
      "Serve as technical lead across the full product lifecycle — frontend, backend, agent architecture, DevOps, and deployment across multiple simultaneous production SaaS products.",
      "Architect standalone AI agent systems using LangGraph, LangChain, and Vercel AI SDK; design multi-step orchestration pipelines for document intelligence and business process automation.",
      "Own cloud infrastructure across AWS, Hetzner, Fly.io, and Vercel with CI/CD pipelines built on GitHub Actions.",
      "Engineer client-side applications in Next.js, React, Vite, and TypeScript; build backend APIs with Python and FastAPI against MySQL and PostgreSQL databases.",
      "Integrate production payment infrastructure using Paddle and Stripe — subscription billing, webhook event processing, and payment lifecycle management.",
      "Lead and mentor a multicultural, multilingual engineering team across multiple timezones.",
    ],
  },
  {
    id: 2,
    role: "Product Support Analyst",
    company: "Mitsogo Technologies",
    companyKo: null,
    location: "Chennai, India",
    period: "March 2024 – July 2024",
    current: false,
    highlights: [
      "Provided expert technical support for Hexnode UEM across Android, iOS, macOS, and Windows platforms.",
      "Achieved high customer satisfaction by delivering clear solutions via chat and email, leveraging in-depth knowledge of backend configurations and device communication protocols.",
      "Functioned as a key point of contact for endpoint security and device management.",
      "Collaborated with the development team by escalating and providing detailed analysis for complex technical issues.",
    ],
  },
];

export const education = {
  degree: "Bachelor of Technology, Information Technology",
  institution: "S.A. Engineering College, Chennai",
  affiliation: "Affiliated to Anna University",
  graduated: "2023",
  gpa: "8.83 / 10",
};

export const projects = [
  {
    id: 1,
    title: "StageX",
    category: "AI SaaS · WeCommit",
    role: "Technical Lead & Core Architect",
    timeline: "March 2026 – Present",
    year: "2026 – Present",
    chronologicalOrder: 2,
    description:
      "AI-powered startup execution SaaS platform serving 200+ founders during an 8-week accelerator program. Integrates dynamic AI planning with LangGraph agent co-founders, a visual React Flow canvas, real-time streaming, and stateless mentor coordination loops.",
    extendedDescription:
      "AI-powered startup execution SaaS platform serving 200+ founders during an 8-week accelerator program. Integrates dynamic AI planning with LangGraph agent co-founders, a visual React Flow canvas, real-time streaming, and stateless mentor coordination loops. Deployed live on https://stagex.kr.",
    details: [
      "Engineered dynamic, multi-agent SaaS orchestration pipelines using LangGraph and the Vercel AI SDK.",
      "Designed a 4-node deep research agent (SearchQuery → WebSearch → Synthesis → Report) with a pre-deduction credit ledger system.",
      "Implemented real-time roadmap generation with progressive streaming using Vercel AI SDK (streamObject), rendering large plans in <2s.",
      "Developed an interactive tree layout engine using React Flow for visual drag-drop roadmap synchronization with Prisma DB.",
      "Engineered token-based mentor invitation/auth system (httpOnly cookies) with dynamic cohort filtering and dashboard feedback UI.",
      "Integrated Paddle subscription checking and transactional checkouts with idempotent event webhook handlers."
    ],
    stack: ["Next.js 14", "React 18", "TypeScript", "LangGraph", "React Flow", "Prisma", "PostgreSQL", "Paddle", "NextAuth", "Vercel"],
    thumbnail: "/stagex.png",
    link: null,
    github: null,
    featured: true
  },
  {
    id: 2,
    title: "Fundscout",
    category: "AI SaaS · WeCommit",
    role: "Full-Stack AI Engineer",
    timeline: "April 2026 – Present",
    year: "2026 – Present",
    chronologicalOrder: 1,
    description:
      "Production-grade AI platform (WeCommit SBIR) that automates federal SBIR/STTR grant discovery and proposal generation for small businesses. Features persistent deep agent conversation memory, real-time multi-user document editing via Yjs CRDTs + Hocuspocus WebSockets, and custom Gemini model routing.",
    extendedDescription:
      "Production-grade AI platform (WeCommit SBIR) that automates federal SBIR/STTR grant discovery and proposal generation for small businesses. Features persistent deep agent conversation memory, real-time multi-user document editing via Yjs CRDTs + Hocuspocus WebSockets, and custom Gemini model routing.",
    details: [
      "Architected a 5-layer middleware deep agent stack (Todo, Filesystem, SubAgent, Skills, Memory) using LangGraph and PostgreSQL checkpointing.",
      "Built custom GeminiRoutingModel supporting runtime Gemini 2.5 Pro vs Flash model selection and dynamic thinking budgets.",
      "Engineered custom streaming protocols mapping LangGraph event streams to Vercel AI SDK DataStreamContext (<3s for 50KB proposals).",
      "Integrated real-time collaborative document editing utilizing Yjs CRDT + Hocuspocus WebSockets (<100ms sync latency).",
      "Developed custom Tiptap 3 rich-text editor extensions for inline artifact embeds, code rendering, and real-time AI content injection.",
      "Resolved async PostgreSQL pooling bottlenecks by implementing automated retry states with exponential backoff, raising uptime to 99.2%."
    ],
    stack: ["React 19", "TypeScript", "Tiptap 3", "FastAPI", "LangGraph", "Gemini AI", "PostgreSQL", "Yjs", "Hocuspocus", "Alembic", "Playwright"],
    thumbnail: "/fundscout.png",
    link: null,
    github: null,
    featured: true
  },
  {
    id: 3,
    title: "CROSS-E",
    category: "AI · Image Generation & Community Platform",
    role: "Full Stack Engineer",
    timeline: "August 2024 – September 2024",
    year: "2024",
    chronologicalOrder: 4,
    description:
      "AI-powered image generation platform. Generate, share, and download unique images from text prompts. Features a community gallery for AI-generated art deployed on AWS CloudFront.",
    extendedDescription:
      "A creative showcase utilizing advanced generative AI models to convert text prompts into high-fidelity custom images. Integrates a vibrant community feed, real-time social sharing, search index filters, and instant media downloads.",
    details: [
      "Integrated OpenAI's DALL-E image generation API into an asynchronous task queue background system.",
      "Architected media storage and high-speed distribution networks using AWS S3 and AWS CloudFront CDN cache.",
      "Developed a lightweight, high-performance community feed with MongoDB and Express.js to scale concurrent requests."
    ],
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "DALL-E", "AWS S3", "AWS CloudFront"],
    thumbnail: "/cross.png",
    link: null,
    github: null,
    featured: true
  },
  {
    id: 4,
    title: "Inventory Management System",
    category: "Full Stack · Cloud & DevOps",
    role: "Lead Engineer — DevOps & Deployments",
    timeline: "August 2022 – December 2022",
    year: "2022",
    chronologicalOrder: 6,
    description:
      "Full-stack inventory platform with a dual-login portal for admins and suppliers, featuring an automated re-order system. Containerised with Docker and Kubernetes on IBM Cloud.",
    extendedDescription:
      "An enterprise-grade inventory planning and logistics platform featuring dual-role interfaces for administrators and suppliers, secure authentication layers, and an automated stock replenishment system.",
    details: [
      "Containerized backend modules with Docker and orchestrated microservices across multi-node Kubernetes clusters.",
      "Architected secure, granular Role-Based Access Control (RBAC) portals for suppliers and organization managers.",
      "Deployed scalable cloud infrastructure on IBM Cloud backed by automated GitHub Actions CI/CD pipelines."
    ],
    stack: ["Python", "IBM Cloud", "Docker", "Kubernetes", "JavaScript", "HTML/CSS"],
    thumbnail: "/inventory.png",
    link: null,
    github: null,
    featured: false
  },
  {
    id: 5,
    title: "Raspberry Pi Cloud Storage",
    category: "Hardware · Cryptography & Networks",
    role: "Lead Security Engineer",
    timeline: "January 2023 – April 2023",
    year: "2023",
    chronologicalOrder: 5,
    description:
      "Secure personal cloud storage on a Raspberry Pi as an affordable alternative to commercial services. Multi-layered encryption using Veracrypt, OpenSSL, Twofish, and Blowfish protocols.",
    extendedDescription:
      "A self-hosted personal storage cloud solution constructed on Raspberry Pi hardware to serve as a private, secure, and cost-effective alternative to public commercial cloud services.",
    details: [
      "Configured robust multi-layer cryptographic partitions utilizing VeraCrypt, OpenSSL, and custom Unix scripts.",
      "Optimized light local network topologies with dynamic DNS and secure Apache servers behind a self-administered MySQL DB.",
      "Developed custom PHP services to handle automated backup synchronizations and user permission levels."
    ],
    stack: ["Raspberry Pi", "Apache", "PHP", "MySQL", "OpenSSL", "VeraCrypt"],
    thumbnail: "/rasp.png",
    link: null,
    github: null,
    featured: false
  },
  {
    id: 6,
    title: "GenDoc (젠닥)",
    category: "AI SaaS · WeCommit",
    role: "Lead Full-Stack UI & Integrations Engineer",
    timeline: "March 2025 – January 2026",
    year: "2025 – 2026",
    chronologicalOrder: 3,
    description:
      "AI-powered government grant automation and enterprise document collaboration platform. Features a fully-compliant Collabora Online editor, S3-backed WOPI host versioning, Better Auth security, and multi-stage containerized deployments.",
    extendedDescription:
      "AI-powered government grant automation and enterprise document collaboration platform designed for startups and SMBs. Streamlines grant discovery, automates proposal drafting matching complex rubrics, and hosts a secure, collaborative rich-text office editor with full revision rollbacks.",
    details: [
      "Engineered a premium, responsive React workspace using Radix UI accessible primitives and Tailwind CSS v4, with elegant Framer Motion transitions.",
      "Architected and implemented a fully compliant Express.js WOPI Host integrated with AWS S3, streaming active office documents securely into Collabora iframe editors.",
      "Developed concurrency collision locking using custom timestamp headers to coordinate multi-user saves and auto-merge actions.",
      "Constructed an automatic S3 snapshot timeline component, allowing founders to review previous draft histories and restore versions with zero data loss.",
      "Managed security integrations with Better Auth, including Naver/Kakao OAuth systems and Drizzle DDL database schemas on PostgreSQL.",
      "Orchestrated multi-stage Docker configurations and automated deployments to Fly.io Tokyo region for optimal latency (<50ms in Korea) and Vercel staging previews."
    ],
    stack: ["React", "Express.js", "Tailwind CSS v4", "Better Auth", "AWS S3", "Drizzle ORM", "PostgreSQL", "Docker", "Fly.io", "Vercel"],
    thumbnail: "/gendoc.png",
    link: null,
    github: null,
    featured: true
  }
];

export const navItems = [
  { name: "About",      link: "/about"      },
  { name: "Work",       link: "/work"       },
  { name: "Experience", link: "/experience" },
  { name: "Contact",    link: "/contact"    },
];

export const socialMedia = [
  { id: 1, label: "GitHub",    img: "/git.svg",  link: "https://github.com/Navin-nash" },
  { id: 2, label: "LinkedIn",  img: "/link.svg", link: "https://www.linkedin.com/in/navin-raj-govindan-345b49216/" },
  { id: 3, label: "Instagram", img: "/insta.svg", link: "https://www.instagram.com/naviin.__/" },
];
