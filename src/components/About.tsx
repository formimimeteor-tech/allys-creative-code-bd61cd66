import { Code, Palette, Rocket, Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const colorMap = {
  sky: { bg: "bg-sky/10", text: "text-sky" },
  pink: { bg: "bg-pink/10", text: "text-pink" },
  sage: { bg: "bg-sage/10", text: "text-sage" },
};

const About = () => {
  const { ref, isVisible } = useScrollAnimation();
  const focuses = [
    { icon: Code, title: "Computer Engineering Studies", color: "sky" },
    { icon: Sparkles, title: "Programming & Software Development", color: "pink" },
    { icon: Palette, title: "Digital Art & Creative Expression", color: "sage" },
    { icon: Rocket, title: "Entrepreneurship & Innovation", color: "sky" },
  ];

  // Debug log for visibility
  console.log("About section visible:", isVisible);

  return (
    <section id="about" className="py-20 bg-card" ref={ref}>
      <div className="container mx-auto px-4">
        {/* ... */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left */}
          <div className={`space-y-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* ...focuses map */}
            <div className="grid sm:grid-cols-2 gap-4">
              {focuses.map((focus, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-muted/50 rounded-xl hover-lift hover:shadow-md transition-all"
                >
                  <div className={`p-2 ${colorMap[focus.color].bg} rounded-lg`}>
                    <focus.icon className={`w-5 h-5 ${colorMap[focus.color].text}`} />
                  </div>
                  <span className="text-sm font-medium">{focus.title}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Right */}
          {/* ... */}
        </div>
      </div>
    </section>
  );
};
