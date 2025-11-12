export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management, secure payment processing, and an intuitive admin dashboard.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    tags: ["Featured", "Full-Stack", "Production"],
    techStack: ["React", "Node.js", "PostgreSQL", "Stripe", "Docker"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true,
  },
  {
    id: "2",
    title: "AI Task Manager",
    description: "Smart task management application powered by AI that helps prioritize tasks, suggests optimal scheduling, and provides productivity insights.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
    tags: ["Featured", "AI/ML", "SaaS"],
    techStack: ["TypeScript", "Next.js", "OpenAI", "Supabase", "TailwindCSS"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true,
  },
  {
    id: "3",
    title: "Real-Time Analytics Dashboard",
    description: "Interactive dashboard for visualizing complex data streams with customizable widgets, real-time updates, and advanced filtering capabilities.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["Featured", "Analytics", "Dashboard"],
    techStack: ["React", "D3.js", "WebSocket", "Redis", "MongoDB"],
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: "4",
    title: "Social Media Mobile App",
    description: "Cross-platform mobile application with rich media sharing, real-time messaging, and social networking features.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    tags: ["Mobile", "Social", "React Native"],
    techStack: ["React Native", "Firebase", "GraphQL", "Redux"],
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: "5",
    title: "Developer Documentation Hub",
    description: "Comprehensive documentation platform with version control, search functionality, and interactive code examples.",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&q=80",
    tags: ["Documentation", "Open Source"],
    techStack: ["Next.js", "MDX", "Algolia", "Vercel"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: false,
  },
  {
    id: "6",
    title: "Fitness Tracking API",
    description: "RESTful API for fitness applications with workout tracking, nutrition logging, and progress analytics.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
    tags: ["Backend", "API", "Health"],
    techStack: ["Node.js", "Express", "PostgreSQL", "JWT"],
    githubUrl: "https://github.com",
    featured: false,
  },
];
