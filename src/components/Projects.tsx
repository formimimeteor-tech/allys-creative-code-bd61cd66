import { ExternalLink } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();
  const projects = [
    {
      title: "Zitistraws Project",
      description:
        "Biodegradable pasta-based straws as an innovative alternative to single-use plastic straws. Developed in collaboration with Wadhwani Entrepreneurship Foundation to address environmental sustainability.",
      image: "https://i.postimg.cc/zfjdF2c3/Screenshot-2025-11-24-at-22-28-13.png",
      tags: ["Sustainability", "Entrepreneurship", "Innovation"],
      color: "sky",
    },
    {
      title: "Gilli Danda Model",
      description:
        "Physical engineering model of the traditional Indian game Gilli Danda (Vito Dandu), showcasing design and construction principles while preserving cultural heritage.",
      image: "https://i.postimg.cc/kGxwDjKX/Whats-App-Image-2025-11-24-at-22-31-04.jpg",
      tags: ["Cultural Heritage", "Design", "Engineering"],
      color: "pink",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold font-outfit mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-sky via-pink to-sage mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Innovative projects combining sustainability, engineering, and cultural preservation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`group overflow-hidden hover-lift hover:shadow-2xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 200 + 200}ms` }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold font-outfit mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="outline"
                      className={`border-${project.color}/30 text-${project.color}`}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
