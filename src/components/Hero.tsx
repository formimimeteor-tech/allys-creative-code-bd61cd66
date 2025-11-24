import { ArrowRight, Download } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center gradient-hero relative overflow-hidden pt-20"
    >
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-sky/20 rounded-full blur-xl animate-float" />
      <div className="absolute top-40 right-20 w-32 h-32 bg-pink/20 rounded-full blur-xl animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-sage/20 rounded-full blur-xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
              <span className="text-primary font-medium text-sm">
                👋 Welcome to my portfolio
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold font-outfit mb-6 leading-tight">
              Hello, I'm{" "}
              <span className="bg-gradient-to-r from-sky via-pink to-sage bg-clip-text text-transparent">
                Ally Lopes
              </span>
            </h1>
            
            <h2 className="text-2xl lg:text-3xl font-outfit font-medium text-foreground/80 mb-6">
              First-Year Computer Engineering Student | Creative Technologist | Artist
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mb-8 leading-relaxed">
              I'm a first-year Computer Engineering student at Father Conceicao Rodrigues College of Engineering, 
              pursuing a Bachelor of Technology degree. I blend technical expertise with creative expression, 
              exploring the intersection of engineering and art.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8 max-w-lg mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold font-outfit text-sky">2+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold font-outfit text-pink">8+</div>
                <div className="text-sm text-muted-foreground">Skills</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold font-outfit text-sage">5+</div>
                <div className="text-sm text-muted-foreground">Certificates</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={() => scrollToSection("projects")}
                className="bg-primary hover:bg-primary/90 text-white shadow-colored-sky group"
                size="lg"
              >
                View My Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white"
              >
                Contact Me
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-1 flex justify-center animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-sky via-pink to-sage rounded-full blur-2xl opacity-30 animate-pulse" />
              <div className="relative w-64 h-64 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-sky via-pink to-sage rounded-full p-1">
                  <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-muted to-card rounded-full flex items-center justify-center text-6xl font-bold text-primary">
                      AL
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
