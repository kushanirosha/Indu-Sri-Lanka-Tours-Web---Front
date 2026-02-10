import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Img1  from '../public/Gallery/WhatsApp Image 2026-02-07 at 15.37.33 (2).webp';
import Img2  from '../public/Gallery/WhatsApp Image 2026-02-07 at 15.37.33.webp';
import Img3  from '../public/Gallery/WhatsApp Image 2026-02-07 at 15.37.35.webp';
import Img4  from '../public/Gallery/WhatsApp Image 2026-02-07 at 15.38.54 (2).webp';
import Img5  from '../public/Gallery/WhatsApp Image 2026-02-07 at 15.38.54.webp';
import Img6  from '../public/Gallery/WhatsApp Image 2026-02-07 at 15.43.24 (1).webp';
import Img7  from '../public/Gallery/WhatsApp Image 2026-02-07 at 15.43.24.webp';
import Img8  from '../public/Gallery/WhatsApp Image 2026-02-07 at 15.45.50 (1).webp';
import Img9  from '../public/Gallery/WhatsApp Image 2026-02-07 at 15.45.51 (2).webp';
import Img10 from '../public/Gallery/WhatsApp Image 2026-02-07 at 15.45.51.webp';
import Img11 from '../public/Gallery/WhatsApp Image 2026-02-07 at 16.57.14.webp';
import Img12 from '../public/Gallery/WhatsApp Image 2026-02-07 at 16.57.25 (1).webp';
import Img13 from '../public/Gallery/WhatsApp Image 2026-02-07 at 16.57.25.webp';
import Img14 from '../public/Gallery/WhatsApp Image 2026-02-07 at 16.57.27.webp';
import Img15 from '../public/Gallery/WhatsApp Image 2026-02-07 at 16.57.30 (2).webp';
import Img16 from '../public/Gallery/WhatsApp Image 2026-02-07 at 16.57.30 (2) (1).webp';
import Img17 from '../public/Gallery/WhatsApp Image 2026-02-07 at 17.01.06 (1).webp';
import Img18 from '../public/Gallery/WhatsApp Image 2026-02-07 at 17.01.08.webp';
import Img19 from '../public/Gallery/WhatsApp Image 2026-02-07 at 17.01.10.webp';


const galleryImages = [
  { id: 1,  src: Img1,  alt: 'Indian Pilgrimage', category: 'India' },
  { id: 2,  src: Img2,  alt: 'Indian Pilgrimage', category: 'India' },
  { id: 3,  src: Img3,  alt: 'Indian Pilgrimage', category: 'India' },
  { id: 4,  src: Img4,  alt: 'Indian Pilgrimage', category: 'India' },
  { id: 5,  src: Img5,  alt: 'Indian Pilgrimage', category: 'India' },
  { id: 6,  src: Img6,  alt: 'Indian Pilgrimage', category: 'India' },
  { id: 7,  src: Img7,  alt: 'Indian Pilgrimage', category: 'India' },
  { id: 8,  src: Img8,  alt: 'Indian Pilgrimage', category: 'India' },
  { id: 9,  src: Img9,  alt: 'Indian Pilgrimage', category: 'India' },
  { id: 10, src: Img10, alt: 'Indian Pilgrimage', category: 'India' },
  { id: 11, src: Img11, alt: 'Indian Pilgrimage', category: 'India' },
  { id: 12, src: Img12, alt: 'Indian Pilgrimage', category: 'India' },
  { id: 13, src: Img13, alt: 'Indian Pilgrimage', category: 'India' },
  { id: 14, src: Img14, alt: 'Indian Pilgrimage', category: 'India' },
  { id: 15, src: Img15, alt: 'Indian Pilgrimage', category: 'India' },
  { id: 16, src: Img16, alt: 'Indian Pilgrimage', category: 'India' },
  { id: 17, src: Img17, alt: 'Indian Pilgrimage', category: 'India' },
  { id: 18, src: Img18, alt: 'Indian Pilgrimage', category: 'India' },
  { id: 19, src: Img19, alt: 'Indian Pilgrimage', category: 'India' },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const prevImage = () => {
    if (selectedImage !== null && selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    }
  };

  const nextImage = () => {
    if (selectedImage !== null && selectedImage < galleryImages.length - 1) {
      setSelectedImage(selectedImage + 1);
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'Escape') closeLightbox();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="relative bg-[#0B1C2D] text-white">
        <div className="bg-[#0B1C2D] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Gallery</h1>
            <p className="text-gray-300 text-lg">
              Capturing the beauty, spirit, and serenity of Sri Lanka and beyond
            </p>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 md:gap-6 space-y-4 md:space-y-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="break-inside-avoid group cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <div className="relative overflow-hidden rounded-xl shadow-md">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium">{image.alt}</p>
                  <span className="text-xs opacity-80">{image.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-6 right-6 text-white p-3 hover:bg-white/10 rounded-full transition-colors"
            onClick={closeLightbox}
            aria-label="Close"
          >
            <X size={32} />
          </button>

          <button
            className="absolute left-6 text-white p-4 hover:bg-white/10 rounded-full transition-colors disabled:opacity-30"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            disabled={selectedImage === 0}
            aria-label="Previous image"
          >
            <ChevronLeft size={40} />
          </button>

          <div
            className="relative max-w-5xl max-h-[90vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="text-white text-center mt-4">
              <p className="text-xl font-medium">
                {galleryImages[selectedImage].alt}
              </p>
              <p className="text-gray-400 mt-1">
                {galleryImages[selectedImage].category}
              </p>
            </div>
          </div>

          <button
            className="absolute right-6 text-white p-4 hover:bg-white/10 rounded-full transition-colors disabled:opacity-30"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            disabled={selectedImage === galleryImages.length - 1}
            aria-label="Next image"
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;