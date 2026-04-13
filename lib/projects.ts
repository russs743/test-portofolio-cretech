export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  color: string;
  year: string;
  client: string;
  services: string[];
}

export const categories = [
  "All",
  "Branding",
  "UI/UX",
  "AI",
  "Web3",
  "Art",
  "Mobile",
  "Web",
  "Motion",
  "Product",
];

export const projects: Project[] = [
  {
    slug: "quantum-nexus",
    title: "Quantum Nexus",
    category: "Branding",
    description: "Next-gen spatial branding and identity system.",
    longDescription:
      "Quantum Nexus is a complete brand identity system designed for a cutting-edge research facility. The project explores how spatial design, generative graphics, and dynamic typography can create a living brand that evolves with the organization. From environmental graphics to digital touchpoints, every element was designed to evoke the feeling of quantum possibility.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop",
    color: "#08308E",
    year: "2026",
    client: "Nexus Corp",
    services: ["Brand Identity", "Spatial Design", "Typography"],
  },
  {
    slug: "aether-void",
    title: "Aether Void",
    category: "UI/UX",
    description: "Minimalist dashboard for global financial tracking.",
    longDescription:
      "Aether Void reimagines the financial dashboard experience. By stripping away unnecessary chrome and focusing on data clarity, we created an interface that feels both powerful and serene. Real-time market visualizations, adaptive layouts, and a dark mode-first approach make complex financial data accessible to anyone.",
    image:
      "https://images.unsplash.com/photo-1557597774-9d273705befa?q=80&w=1600&auto=format&fit=crop",
    color: "#1a1a1a",
    year: "2025",
    client: "FinTrack Global",
    services: ["UI Design", "UX Research", "Data Visualization"],
  },
  {
    slug: "vortex-lab",
    title: "Vortex Lab",
    category: "AI",
    description: "Hyper-realistic data visualization for AI models.",
    longDescription:
      "Vortex Lab is a visual exploration platform where complex AI model outputs become tangible and beautiful. We designed real-time 3D data sculptures that transform neural network activations into immersive visualizations. The result is a tool that makes machine learning intuitive and visually captivating for researchers.",
    image:
      "https://images.unsplash.com/photo-1610491462702-4ecfc31652f4?q=80&w=1600&auto=format&fit=crop",
    color: "#00c6ff",
    year: "2025",
    client: "DeepMind Labs",
    services: ["3D Visualization", "AI Integration", "Interaction Design"],
  },
  {
    slug: "nova-engine",
    title: "Nova Engine",
    category: "Web3",
    description: "Decentralized protocol for creative autonomous agents.",
    longDescription:
      "Nova Engine is a decentralized platform enabling autonomous creative agents to collaborate, trade, and evolve on-chain. We designed the full ecosystem — from protocol architecture to the consumer-facing marketplace. The visual language blends brutalist web aesthetics with generative art to reflect the project's experimental nature.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop",
    color: "#7000ff",
    year: "2026",
    client: "BlockForge",
    services: ["Protocol Design", "Marketplace UI", "Generative Art"],
  },
  {
    slug: "chronos-ai",
    title: "Chronos AI",
    category: "Art",
    description: "Algorithmic painting series exploring time perception.",
    longDescription:
      "Chronos AI is a generative art series that uses machine learning to explore how humans perceive time across cultures and contexts. Each piece is a unique algorithmic composition that blends temporal data — from atomic clock readings to seasonal cycles — into abstract visual poems. The works have been exhibited in galleries worldwide.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop",
    color: "#ff0080",
    year: "2024",
    client: "Gallery Modern",
    services: ["Generative Art", "ML Pipeline", "Exhibition Design"],
  },
  {
    slug: "pulse-app",
    title: "Pulse App",
    category: "Mobile",
    description: "Health monitoring app with real-time biometric sync.",
    longDescription:
      "Pulse is a health and wellness app that merges clinical accuracy with consumer-grade simplicity. We designed a biometric dashboard that syncs with wearable devices in real-time, transforming raw health data into actionable insights. The interface uses calming gradients and micro-animations to reduce health anxiety while maintaining data fidelity.",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1600&auto=format&fit=crop",
    color: "#00d4aa",
    year: "2025",
    client: "MedSync",
    services: ["Mobile Design", "Wearable Integration", "Health UX"],
  },
  {
    slug: "orbit-studio",
    title: "Orbit Studio",
    category: "Web",
    description: "Creative agency platform with immersive 3D portfolio.",
    longDescription:
      "Orbit Studio is a complete digital experience for a creative agency that wanted to push the boundaries of web presentation. We built an immersive 3D portfolio system that transforms project showcases into navigable environments. Using WebGL and GSAP, every page transition feels cinematic and every scroll interaction tells a story.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?q=80&w=1600&auto=format&fit=crop",
    color: "#ff6b35",
    year: "2026",
    client: "Orbit Inc",
    services: ["WebGL Development", "3D Design", "Creative Direction"],
  },
  {
    slug: "zenith-flow",
    title: "Zenith Flow",
    category: "UI/UX",
    description: "Enterprise workflow automation with intuitive design.",
    longDescription:
      "Zenith Flow transforms enterprise workflow automation from a technical chore into an intuitive visual experience. We designed a drag-and-drop automation builder with real-time previews, role-based dashboards, and smart notifications. The clean interface hides powerful automation logic behind simple, human-centered interactions.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
    color: "#2563eb",
    year: "2024",
    client: "FlowSys",
    services: ["Enterprise UX", "Automation Design", "Dashboard UI"],
  },
  {
    slug: "nebula-pay",
    title: "Nebula Pay",
    category: "Web3",
    description: "Cross-chain payment gateway with zero-knowledge proofs.",
    longDescription:
      "Nebula Pay is a next-generation payment gateway that enables seamless cross-chain transactions using zero-knowledge proof technology. We designed a merchant dashboard and consumer wallet interface that abstracts away blockchain complexity, letting users send and receive payments as easily as traditional fintech apps while maintaining full decentralization.",
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1600&auto=format&fit=crop",
    color: "#8b5cf6",
    year: "2026",
    client: "ChainStack",
    services: ["Payment UX", "Wallet Design", "Protocol Architecture"],
  },
  {
    slug: "prism-brand",
    title: "Prism Brand",
    category: "Branding",
    description: "Multi-dimensional brand system for a luxury fashion house.",
    longDescription:
      "Prism Brand is a comprehensive rebrand for a heritage luxury fashion house entering the digital age. We created a visual system that bridges traditional craftsmanship with futuristic aesthetics — a brand identity that shifts and refracts like light through a prism. From packaging to social media, every touchpoint radiates sophisticated innovation.",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1600&auto=format&fit=crop",
    color: "#d946ef",
    year: "2025",
    client: "Maison Lumière",
    services: ["Brand Strategy", "Visual Identity", "Packaging Design"],
  },
  {
    slug: "synthwave-os",
    title: "Synthwave OS",
    category: "UI/UX",
    description: "Retro-futuristic operating system interface concept.",
    longDescription:
      "Synthwave OS is an experimental UI concept that reimagines the desktop operating system through a retro-futuristic lens. Inspired by 80s aesthetics and modern design principles, we created a fully functional prototype with neon gradients, CRT scanline effects, and synthwave typography — all while maintaining usability and accessibility standards.",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1600&auto=format&fit=crop",
    color: "#f472b6",
    year: "2024",
    client: "RetroLabs",
    services: ["Concept Design", "UI Prototyping", "Motion Design"],
  },
  {
    slug: "atlas-maps",
    title: "Atlas Maps",
    category: "Product",
    description: "AI-powered cartography for urban exploration.",
    longDescription:
      "Atlas Maps transforms how people explore cities by combining satellite imagery, crowd-sourced data, and AI-powered recommendations into a beautiful, intuitive mapping experience. We designed an interface that reveals hidden gems, cultural landmarks, and local stories — turning every walk into an adventure and every city into a narrative.",
    image:
      "https://images.unsplash.com/photo-1476370648495-3533f64427a2?q=80&w=1600&auto=format&fit=crop",
    color: "#059669",
    year: "2025",
    client: "UrbanWay",
    services: ["Product Design", "Map UI", "AI Recommendation Engine"],
  },
  {
    slug: "echo-social",
    title: "Echo Social",
    category: "Mobile",
    description: "Privacy-first social platform with ephemeral content.",
    longDescription:
      "Echo Social is a social media platform built on the principle that digital conversations should be as natural as real-life ones — present in the moment, then gone. We designed an ephemeral content system with end-to-end encryption, disappearing messages, and zero data retention. The interface feels warm and intimate, encouraging authentic connection over performance.",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1600&auto=format&fit=crop",
    color: "#06b6d4",
    year: "2026",
    client: "Echo Labs",
    services: ["App Design", "Privacy UX", "Encryption Architecture"],
  },
  {
    slug: "flux-motion",
    title: "Flux Motion",
    category: "Motion",
    description: "Kinetic typography system for broadcast media.",
    longDescription:
      "Flux Motion is a modular kinetic typography system designed for a global broadcast network. Each letter is treated as a living entity — stretching, morphing, and dancing in response to audio input and editorial tone. The system generates real-time motion graphics for news tickers, show openers, and social media clips, creating a cohesive yet endlessly dynamic visual language.",
    image:
      "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1600&auto=format&fit=crop",
    color: "#eab308",
    year: "2025",
    client: "GlobalCast Media",
    services: ["Motion Design", "Typography", "Real-time Graphics"],
  },
  {
    slug: "terra-dao",
    title: "Terra DAO",
    category: "Web3",
    description: "Governance platform for decentralized climate initiatives.",
    longDescription:
      "Terra DAO is a decentralized autonomous organization focused on funding and governing climate action projects worldwide. We designed the governance interface, proposal system, and treasury dashboard — making complex on-chain voting accessible to non-technical climate activists. The design uses earth tones and organic shapes to reflect the environmental mission.",
    image:
      "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?q=80&w=1600&auto=format&fit=crop",
    color: "#16a34a",
    year: "2024",
    client: "GreenBlock Foundation",
    services: ["DAO Design", "Governance UX", "Treasury Dashboard"],
  },
  {
    slug: "cipher-vault",
    title: "Cipher Vault",
    category: "Product",
    description: "End-to-end encrypted file storage with biometric access.",
    longDescription:
      "Cipher Vault is a secure file storage solution that combines military-grade encryption with consumer-friendly design. Users authenticate with biometrics, organize files in visually rich vaults, and share encrypted links with granular permissions. We designed an interface that makes security feel effortless rather than intimidating.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f2?q=80&w=1600&auto=format&fit=crop",
    color: "#334155",
    year: "2026",
    client: "SecureNet",
    services: ["Product Design", "Security UX", "Biometric Integration"],
  },
  {
    slug: "aurora-gallery",
    title: "Aurora Gallery",
    category: "Art",
    description: "Interactive digital art exhibition in WebGL.",
    longDescription:
      "Aurora Gallery is a virtual art exhibition platform that transforms the browser into an immersive gallery space. Visitors navigate through procedurally generated rooms, each housing digital artworks that respond to cursor movement and ambient sound. We created a seamless experience that blurs the line between technology and art, making high-culture accessible from any device.",
    image:
      "https://images.unsplash.com/photo-1518998053901-5348d3961a04?q=80&w=1600&auto=format&fit=crop",
    color: "#a855f7",
    year: "2025",
    client: "ArtVerse Collective",
    services: ["WebGL Development", "Generative Environments", "Curation UX"],
  },
  {
    slug: "helix-health",
    title: "Helix Health",
    category: "AI",
    description: "AI diagnostic assistant for rural healthcare providers.",
    longDescription:
      "Helix Health is an AI-powered diagnostic tool designed specifically for healthcare providers in underserved rural areas. The system analyzes symptoms, medical images, and patient history to suggest diagnoses with confidence scores. We designed an offline-first interface that works on low-bandwidth connections and guides providers through evidence-based clinical pathways.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1600&auto=format&fit=crop",
    color: "#0ea5e9",
    year: "2024",
    client: "HealthBridge NGO",
    services: ["AI Interface Design", "Offline UX", "Medical Visualization"],
  },
  {
    slug: "monolith-web",
    title: "Monolith Web",
    category: "Web",
    description: "Brutalist web experience for an architecture collective.",
    longDescription:
      "Monolith Web is a digital manifesto for an architecture collective that believes in raw, honest materials. We translated their philosophy into a brutalist web experience — exposed grid systems, raw typography, concrete textures, and deliberate visual weight. Every interaction feels architectural: heavy, precise, and intentional.",
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=1600&auto=format&fit=crop",
    color: "#78716c",
    year: "2026",
    client: "Monolith Architects",
    services: ["Web Design", "Brutalist UI", "CMS Development"],
  },
  {
    slug: "drift-sounds",
    title: "Drift Sounds",
    category: "Motion",
    description: "Audio-reactive visuals for a music streaming platform.",
    longDescription:
      "Drift Sounds is a visual layer for a music streaming platform that generates real-time, audio-reactive artwork for every track. Using WebAudio API and custom shaders, we created a system where bass frequencies trigger particle explosions, melodies paint color trails, and rhythm sculpts geometric forms — making music visible and shareable.",
    image:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1600&auto=format&fit=crop",
    color: "#ec4899",
    year: "2025",
    client: "SonicWave",
    services: ["Audio Visualization", "Shader Programming", "Creative Code"],
  },
  {
    slug: "meridian-brand",
    title: "Meridian Brand",
    category: "Branding",
    description: "Identity system for a sustainable luxury travel company.",
    longDescription:
      "Meridian Brand is a holistic identity for a luxury travel company committed to sustainable tourism. We crafted a visual language that balances opulence with environmental consciousness — gold foils on recycled paper, photography that celebrates nature over resorts, and a tone of voice that educates while it inspires. The brand launched across 40 markets simultaneously.",
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1600&auto=format&fit=crop",
    color: "#b45309",
    year: "2024",
    client: "Meridian Voyages",
    services: ["Brand Identity", "Sustainability Comms", "Global Launch"],
  },
];
