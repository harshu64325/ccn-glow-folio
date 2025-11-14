import { Code2, Database, FileText, BarChart3, Zap } from "lucide-react";

// Import Certificates (ONLY the ones you have)
import pythonCert from "@/assets/certificates/python.pdf";
import cCert from "@/assets/certificates/c.pdf";
import sqlCert from "@/assets/certificates/sql-server.pdf";

const skills = [
  {
    category: "Programming Languages",
    icon: Code2,
    items: [
      { name: "Python", level: 92, certificate: pythonCert },
      { name: "C", level: 85, certificate: cCert },
      { name: "Java", level: 88, certificate: null },
    ],
  },
  {
    category: "Database Management",
    icon: Database,
    items: [
      { name: "SQL Server Management", level: 90, certificate: sqlCert },
      { name: "MySQL", level: 85, certificate: null },
    ],
  },
  {
    category: "Data Visualization & BI",
    icon: BarChart3,
    items: [
      { name: "Power BI", level: 80, certificate: null },
    ],
  },
  {
    category: "Tools & IDEs",
    icon: Zap,
    items: [
      { name: "NetBeans (Java GUI Form Design)", level: 90, certificate: null },
      { name: "VS Code", level: 95, certificate: null },
    ],
  },
  {
    category: "Office & Productivity Tools",
    icon: FileText,
    items: [
      { name: "Microsoft Word", level: 95, certificate: null },
      { name: "Microsoft PowerPoint", level: 90, certificate: null },
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
            A comprehensive toolkit built through hands-on experience and continuous learning.
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
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>

                        {/* SHOW BUTTON ONLY IF CERTIFICATE EXISTS */}
                        {skill.certificate && (
                          <a
                            href={skill.certificate}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs px-2 py-1 bg-primary/20 text-primary rounded hover:bg-primary/30 transition-colors"
                          >
                            View
                          </a>
                        )}
                      </div>

                      <div className="flex justify-between items-center mb-2">
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
