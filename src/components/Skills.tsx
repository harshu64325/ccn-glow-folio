import { Code2, Database, FileText, BarChart3, Zap } from "lucide-react";

const skills = [
  {
    category: "Programming Languages",
    icon: Code2,
    items: [
      { name: "Python", level: 92 },
      { name: "C", level: 85 },
      { name: "Java", level: 88 },
    ],
  },
  {
    category: "Database Management",
    icon: Database,
    items: [
      { name: "SQL Server Management", level: 90 },
      { name: "MySQL", level: 85 },
    ],
  },
  {
    category: "Data Visualization & BI",
    icon: BarChart3,
    items: [
      { name: "Power BI", level: 80 },
    ],
  },
  {
    category: "Tools & IDEs",
    icon: Zap,
    items: [
      { name: "NetBeans (Java GUI Form Design)", level: 90 },
      { name: "VS Code", level: 95 },
    ],
  },

  {
    category: "Office & Productivity Tools",
    icon: FileText,
    items: [
      { name: "Microsoft Word", level: 95 },
      { name: "Microsoft PowerPoint", level: 90 },
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
            A comprehensive toolkit built through hands-on experience and continuous learning
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
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
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
