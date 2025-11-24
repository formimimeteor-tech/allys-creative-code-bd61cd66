import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { Card } from "./ui/card";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Engineering",
      institution: "Father Conceicao Rodrigues College of Engineering",
      location: "Bandra",
      duration: "2024 - Present (Expected 2028)",
      status: "First Year",
      color: "sky",
    },
    {
      degree: "Higher Secondary Education",
      institution: "R.P. Junior College of Arts, Science and Commerce",
      location: "",
      duration: "2022 - 2024",
      status: "Completed",
      color: "pink",
    },
    {
      degree: "Secondary Education",
      institution: "Auxilium School",
      location: "Bangalore",
      duration: "Completed",
      status: "Foundation",
      color: "sage",
    },
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold font-outfit mb-4">
            My <span className="text-primary">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-sky via-pink to-sage mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <Card
              key={index}
              className={`p-6 lg:p-8 hover-lift hover:shadow-xl transition-all animate-slide-up border-l-4 border-${edu.color}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col lg:flex-row gap-6">
                <div className={`flex-shrink-0 w-16 h-16 bg-${edu.color}/10 rounded-xl flex items-center justify-center`}>
                  <GraduationCap className={`w-8 h-8 text-${edu.color}`} />
                </div>

                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold font-outfit mb-1">{edu.degree}</h3>
                      <p className="text-lg text-muted-foreground font-medium">{edu.institution}</p>
                    </div>
                    <div className={`mt-2 lg:mt-0 inline-block px-3 py-1 bg-${edu.color}/10 text-${edu.color} rounded-full text-sm font-medium`}>
                      {edu.status}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.duration}</span>
                    </div>
                    {edu.location && (
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
