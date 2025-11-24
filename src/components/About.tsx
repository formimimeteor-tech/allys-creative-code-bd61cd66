import { Code, Palette, Rocket, Sparkles } from "lucide-react";

const About = () => {
  const focuses = [
    {
      icon: Code,
      title: "Computer Engineering Studies",
      color: "sky",
    },
    {
      icon: Sparkles,
      title: "Programming & Software Development",
      color: "pink",
    },
    {
      icon: Palette,
      title: "Digital Art & Creative Expression",
      color: "sage",
    },
    {
      icon: Rocket,
      title: "Entrepreneurship & Innovation",
      color: "sky",
    },
  ];

  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold font-outfit mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-sky via-pink to-sage mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left: Bio Text */}
          <div className="space-y-6 animate-slide-up">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm currently pursuing my Bachelor of Technology in Computer Engineering at 
              <span className="font-semibold text-foreground"> Father Conceicao Rodrigues College of Engineering</span> in Bandra.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey in education has taken me from <span className="font-semibold text-foreground">Auxilium School</span> in 
              Bangalore to <span className="font-semibold text-foreground">R.P. Junior College of Arts, Science and Commerce</span>, 
              and now to engineering college where I'm combining my passion for technology with my creative instincts.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              What sets me apart is my ability to bridge the worlds of engineering and art. I believe that the best 
              innovations come from creative thinking, and I strive to bring an artistic perspective to every technical 
              challenge I encounter.
            </p>

            <div className="pt-4">
              <h3 className="text-xl font-semibold font-outfit mb-4">Current Focus Areas</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {focuses.map((focus, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-muted/50 rounded-xl hover-lift hover:shadow-md transition-all"
                  >
                    <div className={`p-2 bg-${focus.color}/10 rounded-lg`}>
                      <focus.icon className={`w-5 h-5 text-${focus.color}`} />
                    </div>
                    <span className="text-sm font-medium">{focus.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Timeline/Journey */}
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="bg-gradient-to-br from-sky/10 via-pink/10 to-sage/10 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold font-outfit mb-6 text-center">My Journey</h3>
              
              <div className="space-y-6">
                <div className="relative pl-8 border-l-2 border-sky pb-6">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-sky rounded-full" />
                  <div className="text-sm text-sky font-semibold mb-1">Present</div>
                  <h4 className="font-semibold">Father Conceicao Rodrigues College of Engineering</h4>
                  <p className="text-sm text-muted-foreground">Bachelor of Technology - Computer Engineering</p>
                  <p className="text-xs text-muted-foreground mt-1">Bandra</p>
                </div>

                <div className="relative pl-8 border-l-2 border-pink pb-6">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-pink rounded-full" />
                  <div className="text-sm text-pink font-semibold mb-1">2022 - 2024</div>
                  <h4 className="font-semibold">R.P. Junior College</h4>
                  <p className="text-sm text-muted-foreground">Arts, Science and Commerce</p>
                </div>

                <div className="relative pl-8 border-l-2 border-sage">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-sage rounded-full" />
                  <div className="text-sm text-sage font-semibold mb-1">Foundation</div>
                  <h4 className="font-semibold">Auxilium School</h4>
                  <p className="text-sm text-muted-foreground">Bangalore</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
