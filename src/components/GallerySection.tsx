// src/components/ExploreGallerySection.tsx
import { useRef, useEffect } from 'react';

const images = [
  // Replace these URLs with your own 20 images from /public or external CDN
  // Mix of portrait, landscape, square to create variety in heights
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop&q=80', // tall mountain
  'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&auto=format&fit=crop&q=80', // wide lake reflection
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&auto=format&fit=crop&q=80', // landscape tent
  'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&auto=format&fit=crop&q=80', // wide nature
  'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop&q=80', // portrait-ish rocks
  'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=800&auto=format&fit=crop&q=80', // square-ish tent
  'https://images.unsplash.com/photo-1540979388789-7cee28a1cdc9?w=800&auto=format&fit=crop&q=80', // tall peak
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop&q=80', // repeat or new
  // Add your remaining 12 images here (total 20)
  // Example placeholders:
  'https://images.unsplash.com/photo-1518098268026-4e266b1f3cd8?w=800&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1508739773434-c26b3d09e71e?w=800&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=800&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1540979388789-7cee28a1cdc9?w=800&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1508739773434-c26b3d09e71e?w=800&auto=format&fit=crop&q=80',
];

const GallerySection = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll animation
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    let animationFrame: number;
    let scrollAmount = 0;

    const scroll = () => {
      if (!scroller) return;

      scrollAmount += 0.5; // adjust speed here (smaller = slower)
      if (scrollAmount >= scroller.scrollWidth / 2) {
        scrollAmount = 0; // seamless loop by resetting when half duplicated
      }
      scroller.scrollLeft = scrollAmount;

      animationFrame = requestAnimationFrame(scroll);
    };

    // Duplicate images for seamless infinite loop
    const originalContent = scroller.innerHTML;
    scroller.innerHTML += originalContent;

    animationFrame = requestAnimationFrame(scroll);

    // Pause on hover (optional)
    const pauseScroll = () => cancelAnimationFrame(animationFrame);
    const resumeScroll = () => (animationFrame = requestAnimationFrame(scroll));

    scroller.addEventListener('mouseenter', pauseScroll);
    scroller.addEventListener('mouseleave', resumeScroll);

    return () => {
      cancelAnimationFrame(animationFrame);
      scroller.removeEventListener('mouseenter', pauseScroll);
      scroller.removeEventListener('mouseleave', resumeScroll);
    };
  }, []);

  return (
    <section className="relative py-16 md:py-24 bg-gray-900 overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/70 z-10" />

      {/* Main content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Start exploring now and turn your trip into an
          <br className="hidden sm:block" />
          unforgettable journey!
        </h2>

        <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-10">
          Looking for exciting spots to explore near your destination? From breathtaking landmarks
          and cultural gems to hidden treasures, we've got you covered.
        </p>

        <a
          href="/book" // or your booking page/link
          className="
            inline-flex items-center gap-3
            bg-blue-600 hover:bg-blue-700
            text-white font-semibold text-lg
            px-10 py-5 rounded-full shadow-xl
            transition-all duration-300 transform hover:scale-105 hover:shadow-2xl
          "
        >
          Book your seat
          <span className="text-2xl">→</span>
        </a>
      </div>

      {/* Auto-scrolling gallery */}
      <div className="relative mt-12 md:mt-16">
        <div
          ref={scrollerRef}
          className="
            flex overflow-x-hidden whitespace-nowrap
            will-change-transform
          "
        >
          {images.map((src, index) => (
            <div
              key={index}
              className="flex-none mx-3 md:mx-5"
              style={{
                // Random-ish height variation between 280px - 480px
                height: `${280 + Math.floor(Math.random() * 200)}px`,
                width: `${(280 + Math.floor(Math.random() * 200)) * 0.75}px`, // keep aspect ratio-ish
              }}
            >
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;