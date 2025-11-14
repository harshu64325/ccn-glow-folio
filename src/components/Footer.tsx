import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/30 backdrop-blur-sm">
      <div className="container px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold mb-2">
                <span className="text-primary">Software development</span>
              </h3>
              <p className="text-muted-foreground text-sm">
                Software Developer crafting elegant solutions to complex problems
              </p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <nav className="space-y-2">
                <a href="#home" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </a>
                <a href="#about" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  About
                </a>
                <a href="#skills" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  Skills
                </a>
                <a href="#projects" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </a>
                <a href="#contact" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </nav>
            </div>
            
            {/* Social */}
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex gap-3">
                <a 
                  href="https://github.com/harshu64325/harshu64325/projects" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-card hover:bg-primary/10 border border-border hover:border-primary/50 transition-all"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/harshit-agarwal-51b174369/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-card hover:bg-primary/10 border border-border hover:border-primary/50 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="mailto:agarwalharshit234@gmail.com"
                  className="p-2 rounded-lg bg-card hover:bg-primary/10 border border-border hover:border-primary/50 transition-all"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p className="flex items-center justify-center gap-1">
              © {currentYear} Software Development. Built using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
