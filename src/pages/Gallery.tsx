import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// Sample images – replace with your real URLs or import from assets
const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1585208798174-6cedd78e0198?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    alt: 'Sigiriya Rock Fortress at sunrise',
    category: 'Cultural',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    alt: 'Temple of the Tooth',
    category: 'Spiritual',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1622484212850-eb596d846862?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    alt: 'Nine Arch Bridge',
    category: 'Scenic',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1569520652356-2c0a0c6e5d2e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    alt: 'Adam’s Peak pilgrimage',
    category: 'Pilgrimage',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1590523277543-a94c8a96d26f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    alt: 'Yala National Park safari',
    category: 'Wildlife',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1625504611841-8a0e6d8e3c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    alt: 'Mirissa beach sunset',
    category: 'Beach',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1585506946482-9e6a8d0f6d6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    alt: 'Kandy Lake and Temple',
    category: 'Cultural',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1599669454699-248893623440?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    alt: 'Ella train journey',
    category: 'Scenic',
  },
  // Add more images as needed (10–20 recommended)
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
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
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