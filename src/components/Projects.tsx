import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import voiceAssistantImg from "@/assets/voice-assistant.png";
import portfolioImg from "@/assets/portfolio.png";
import storeManagementImg from "@/assets/store-management.png";
// ✅ only two projects
// ✅ only two projects
const projects = [
  {
    id: 1,
    title: "AI Voice Assistant",
    description:
      "A Python-based desktop voice assistant that responds to voice commands to open apps, search the web, and automate daily tasks using SpeechRecognition and pyttsx3.",
    image: voiceAssistantImg, // ✔ now working
    tags: ["Featured", "Python", "AI"],
    techStack: ["Python", "SpeechRecognition", "pyttsx3"],
    githubUrl: "https://github.com/harshu64325/voice-assistant",
    liveUrl: "",
    featured: true,
  },
  {
    id: 2,
    title: "Portfolio Website",
    description:
      "A modern portfolio website built using React and Tailwind CSS to showcase projects, skills, and contact information with smooth animations.",
    image: portfolioImg, // ✔ now working
    tags: ["Featured", "React", "Frontend"],
    techStack: ["React", "Tailwind CSS", "Vite"],
    githubUrl: "https://github.com/harshu64325/ccn-glow-folio",
    liveUrl: "https://ccn-glow-folio.vercel.app",
    featured: true,
  },
  {
  id: 3,
  title: "Store Management System (Java + MySQL)",
  description:
    "A complete desktop-based Store Management System built using Java (NetBeans) and MySQL. Supports inventory management, billing system, and includes an EXE installer with a full SQL database setup.",
  image: storeManagementImg, // ← apna screenshot yaha daalo
  tags: ["Java", "MySQL", "Desktop App"],
  techStack: ["Java", "NetBeans", "MySQL", "JDBC"],
  githubUrl: "https://github.com/harshu64325/store-management-system",
  liveUrl: "",
  featured: true,
}
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.filter((p) => p.featured);

  return (
    <section id="projects" className="py-20 bg-card/50">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            A selection of projects showcasing my technical skills and problem-solving approach
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {displayedProjects.map((project, idx) => (
              <article
                key={project.id}
                className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Project Info */}
                <div className="p-6 space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-primary/10 text-primary border-primary/20"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <Github className="h-4 w-4" />
                        Code
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                        aria-label={`View ${project.title} live demo`}
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
