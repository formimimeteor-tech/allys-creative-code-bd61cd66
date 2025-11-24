import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const images = [
    "https://i.postimg.cc/wTYFc7V0/Whats-App-Image-2025-11-24-at-23-00-52-(2).jpg",
    "https://i.postimg.cc/XqdL6bVw/Whats-App-Image-2025-11-24-at-23-00-52-(3).jpg",
    "https://i.postimg.cc/VL9g7mZ1/Whats-App-Image-2025-11-24-at-23-00-52-(1).jpg",
    "https://i.postimg.cc/sgwcrKRh/Whats-App-Image-2025-11-24-at-23-00-52.jpg",
  ];

  const navigate = (direction: "prev" | "next") => {
    if (selectedIndex === null) return;
    
    if (direction === "prev") {
      setSelectedIndex(selectedIndex === 0 ? images.length - 1 : selectedIndex - 1);
    } else {
      setSelectedIndex(selectedIndex === images.length - 1 ? 0 : selectedIndex + 1);
    }
  };

  return (
    <>
      <section id="gallery" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold font-outfit mb-4">
              Photo <span className="text-accent">Gallery</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-sky via-pink to-sage mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Moments and memories captured through my journey
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer hover-lift hover:shadow-2xl transition-all animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedIndex(index)}
              >
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-lg font-medium">View</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox with Navigation */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedIndex(null)}
        >
          <button
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
            onClick={() => setSelectedIndex(null)}
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <button
            className="absolute left-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation();
              navigate("prev");
            }}
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            className="absolute right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation();
              navigate("next");
            }}
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          <img
            src={images[selectedIndex]}
            alt={`Gallery image ${selectedIndex + 1}`}
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-sm">
            {selectedIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
