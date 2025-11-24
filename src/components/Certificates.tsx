import { useState } from "react";
import { X, Award, Download } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);

  const certificates = [
    {
      title: "MATLAB Desktop Tools and Troubleshooting Scripts",
      issuer: "MathWorks",
      category: "MATLAB Skills",
      image: "https://i.postimg.cc/W1RjBtbp/certificate5.png",
      color: "sky",
    },
    {
      title: "MATLAB Onramp",
      issuer: "MathWorks",
      category: "MATLAB Skills",
      image: "https://i.postimg.cc/hPVPPVY8/certificate4.png",
      color: "pink",
    },
    {
      title: "MATLAB Machine Learning Onramp",
      issuer: "MathWorks",
      category: "MATLAB Skills",
      image: "https://i.postimg.cc/HLvTPzrP/certificate3.png",
      color: "sage",
    },
    {
      title: "MATLAB Signals Processing Onramp",
      issuer: "MathWorks",
      category: "MATLAB Skills",
      image: "https://i.postimg.cc/NMWBQ078/certificate2.png",
      color: "sky",
    },
    {
      title: "Wadhwani Foundation Certificate",
      issuer: "Wadhwani Foundation",
      category: "Entrepreneurship",
      image: "https://i.postimg.cc/SNYYLXvq/Wadhwani-Foundation-Certificate-691e7ea722e77ecc97799291.png",
      color: "pink",
    },
  ];

  const categories = ["MATLAB Skills", "Entrepreneurship"];

  return (
    <>
      <section id="certificates" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold font-outfit mb-4">
              Certificates & <span className="text-primary">Achievements</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-sky via-pink to-sage mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Professional certifications and recognitions in technology and entrepreneurship
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-12">
            {categories.map((category, catIndex) => {
              const categoryCerts = certificates.filter((c) => c.category === category);

              return (
                <div key={category} className="animate-slide-up" style={{ animationDelay: `${catIndex * 0.1}s` }}>
                  <div className="flex items-center gap-3 mb-6">
                    <Award className="w-6 h-6 text-primary" />
                    <h3 className="text-2xl font-bold font-outfit">{category}</h3>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categoryCerts.map((cert, index) => (
                      <Card
                        key={index}
                        className="group overflow-hidden cursor-pointer hover-lift hover:shadow-xl transition-all"
                        onClick={() => setSelectedCertificate(cert.image)}
                      >
                        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                          <img
                            src={cert.image}
                            alt={cert.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="text-white font-medium">View Certificate</span>
                          </div>
                        </div>

                        <div className="p-4">
                          <Badge className={`mb-2 bg-${cert.color}/10 text-${cert.color}`} variant="secondary">
                            {cert.issuer}
                          </Badge>
                          <h4 className="font-semibold leading-tight">{cert.title}</h4>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedCertificate(null)}
        >
          <button
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            onClick={() => setSelectedCertificate(null)}
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <a
            href={selectedCertificate}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-4 right-16 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <Download className="w-6 h-6 text-white" />
          </a>

          <img
            src={selectedCertificate}
            alt="Certificate"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default Certificates;
