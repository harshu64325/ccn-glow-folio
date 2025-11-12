import developerPhoto from "@/assets/developer-photo.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-card/50">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            About <span className="text-primary">Me</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
              <img 
                src={developerPhoto}
                alt="C.C.N - Software Developer"
                className="relative rounded-2xl border border-primary/20 w-full max-w-md mx-auto shadow-2xl"
              />
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-semibold">
                Passionate About Building Digital Experiences
              </h3>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  With years of experience in software development, I specialize in creating 
                  robust, scalable applications that solve real-world problems. My journey in 
                  tech has been driven by curiosity and a constant desire to learn.
                </p>
                
                <p>
                  Currently working at C.C.N, I focus on building modern web applications using 
                  cutting-edge technologies. I believe in writing clean, maintainable code and 
                  staying up-to-date with industry best practices.
                </p>
                
                <p>
                  When I'm not coding, you'll find me contributing to open-source projects, 
                  exploring new technologies, or sharing knowledge with the developer community.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-3 pt-4">
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium">
                  Problem Solver
                </span>
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium">
                  Team Player
                </span>
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium">
                  Lifelong Learner
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
