import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Download, Mail, MapPin, Phone } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_gauh5yf", 
        "template_6zn7u6u", // 
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "fURwmgkG5sUobWs6H" // 
      );

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I’ll reply as soon as possible.",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast({
        title: "Failed to send!",
        description: "Please try again later.",
      });
    }

    setIsSubmitting(false);
  };

  const handleDownloadResume = () => {
    toast({
      title: "Resume downloading...",
      description: "Your download will begin shortly.",
    });
      // Trigger actual download
      const link = document.createElement("a");
      link.href = "";
      link.download = "public/CN_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  };

  return (
    <section id="contact" className="py-20 bg-card/50">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Let's talk about how we can work together
          </p>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I'm always interested in hearing about new projects and opportunities. 
                  Whether you have a question or just want to say hi, feel free to reach out!
                </p>
              </div>
              
              <div className="space-y-4">
                <a 
                  href="mailto:agarwalharshit234@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-all group"
                >
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Email</div>
                    <div className="font-medium">agarwalharshit234@gmail.com</div>
                  </div>
                </a>
                
                <div className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Location</div>
                    <div className="font-medium">Roorkee, India</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Phone</div>
                    <a href="tel:+917668944271" className="font-medium hover:text-primary">
                      +91 76689 44271
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Resume Download */}
              <Button 
                onClick={handleDownloadResume}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-border"
                size="lg"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
            
            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name *
                </label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-card border-border focus:border-primary"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-card border-border focus:border-primary"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject *
                </label>
                <Input
                  id="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="bg-card border-border focus:border-primary"
                  placeholder="How can I help?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-card border-border focus:border-primary min-h-[150px]"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                size="lg"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
