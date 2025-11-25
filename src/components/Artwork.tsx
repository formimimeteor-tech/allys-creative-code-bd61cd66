import { useState } from "react";
import { X } from "lucide-react";
import { Card } from "./ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Artwork = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { ref, isVisible } = useScrollAnimation();

  const artworks = [
    {
      title: "Guava Digital Art",
      medium: "Digital (ibis paint)",
      image: "https://i.postimg.cc/VsCbnrT0/Whats-App-Image-2025-11-24-at-20-24-20.jpg",
    },
    {
      title: "Sunset Start Digital Art",
      medium: "Digital",
      image: "https://i.postimg.cc/x83fg2Mp/Untitled25.jpg",
    },
    {
      title: "Peach Painting",
      medium: "Traditional Painting",
      image: "https://i.postimg.cc/mkBR7T6H/Whats-App-Image-2025-11-24-at-22-49-39.jpg",
    },
    {
      title: "Outfits Design",
      medium: "Fashion Illustration",
      image: "https://i.postimg.cc/7ZGvGCYc/Whats-App-Image-2025-11-24-at-22-52-30.jpg",
    },
  ];

  return (
    <>
      <section id="artwork" className="py-20 bg-card" ref={ref}>
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl lg:text-5xl font-bold font-outfit mb-4">
              Artwork & <span className="text-secondary">Creative Expression</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-sky via-pink to-sage mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Exploring creativity through digital art, traditional painting, and illustration
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {artworks.map((artwork, index) => (
              <Card
                key={index}
                className={`group overflow-hidden cursor-pointer hover-lift hover:shadow-2xl transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                style={{ transitionDelay: `${index * 100 + 200}ms` }}
                onClick={() => setSelectedImage(artwork.image)}
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="font-semibold mb-1">{artwork.title}</h3>
                      <p className="text-sm text-white/80">{artwork.medium}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <img
            src={selectedImage}
            alt="Artwork"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default Artwork;
