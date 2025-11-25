import { Badge } from "./ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation();
  const skills = [
    { name: "HTML", category: "Frontend", color: "sky" },
    { name: "JavaScript", category: "Frontend", color: "pink" },
    { name: "C Programming", category: "Programming", color: "sage" },
    { name: "C++", category: "Programming", color: "sky" },
    { name: "Java", category: "Backend", color: "pink" },
    { name: "Python", category: "Programming", color: "sage" },
    { name: "MATLAB", category: "Data Analysis", color: "sky" },
    { name: "SQL", category: "Backend", color: "pink" },
  ];

  const categories = ["Frontend", "Backend", "Programming", "Data Analysis"];

  return (
    <section id="skills" className="py-20 bg-card" ref={ref}>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold font-outfit mb-4">
            Skills & <span className="text-primary">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-sky via-pink to-sage mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A diverse skill set spanning programming languages and development technologies
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Skills by Category */}
          <div className="space-y-8">
            {categories.map((category, catIndex) => {
              const categorySkills = skills.filter((s) => s.category === category);
              if (categorySkills.length === 0) return null;

              return (
                <div
                  key={category}
                  className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${catIndex * 100 + 200}ms` }}
                >
                  <h3 className="text-lg font-semibold font-outfit mb-4 text-muted-foreground">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {categorySkills.map((skill, index) => (
                      <Badge
                        key={index}
                        className={`px-6 py-3 text-base bg-${skill.color}/10 text-${skill.color} hover:bg-${skill.color}/20 hover:scale-105 transition-all cursor-default border-${skill.color}/20`}
                      >
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* All Skills Cloud */}
          <div className="mt-16 p-8 bg-gradient-to-br from-sky/5 via-pink/5 to-sage/5 rounded-2xl">
            <h3 className="text-center text-xl font-semibold font-outfit mb-6">
              Complete Skill Set
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.map((skill, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className={`px-4 py-2 hover-lift hover:shadow-md transition-all cursor-default border-${skill.color}/30`}
                >
                  {skill.name}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
