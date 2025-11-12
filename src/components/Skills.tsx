import { Code2, Database, Globe, Smartphone, Terminal, Zap } from "lucide-react";

const skills = [
  {
    category: "Frontend",
    icon: Globe,
    items: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "HTML/CSS", level: 98 },
    ],
  },
  {
    category: "Backend",
    icon: Terminal,
    items: [
      { name: "Node.js", level: 85 },
      { name: "Python", level: 80 },
      { name: "REST APIs", level: 90 },
      { name: "GraphQL", level: 75 },
    ],
  },
  {
    category: "Database",
    icon: Database,
    items: [
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "Redis", level: 70 },
      { name: "Supabase", level: 88 },
    ],
  },
  {
    category: "Tools & DevOps",
    icon: Zap,
    items: [
      { name: "Git / GitHub", level: 95 },
      { name: "Docker", level: 75 },
      { name: "CI/CD", level: 80 },
      { name: "AWS", level: 70 },
    ],
  },
  {
    category: "Mobile",
    icon: Smartphone,
    items: [
      { name: "React Native", level: 82 },
      { name: "Responsive Design", level: 95 },
      { name: "PWA", level: 85 },
    ],
  },
  {
    category: "Other",
    icon: Code2,
    items: [
      { name: "Agile/Scrum", level: 90 },
      { name: "Testing", level: 85 },
      { name: "UI/UX Design", level: 78 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience and continuous learning
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, idx) => (
              <div 
                key={skillGroup.category}
                className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all group"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    <skillGroup.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold">{skillGroup.category}</h3>
                </div>
                
                <div className="space-y-4">
                  {skillGroup.items.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
