// src/components/ExploreGallerySection.tsx  (or GallerySection.tsx)
import { useRef, useEffect } from 'react';

// Import all 19 images
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

const images = [
  Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9,
  Img10, Img11, Img12, Img13, Img14, Img15, Img16, Img17, Img18, Img19,
];

const GallerySection = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    let animationFrame: number;
    let scrollAmount = 0;

    const scroll = () => {
      if (!scroller) return;

      scrollAmount += 0.5; // adjust speed if needed
      if (scrollAmount >= scroller.scrollWidth / 2) {
        scrollAmount = 0;
      }
      scroller.scrollLeft = scrollAmount;

      animationFrame = requestAnimationFrame(scroll);
    };

    // Duplicate content for seamless infinite scroll
    const originalContent = scroller.innerHTML;
    scroller.innerHTML += originalContent;

    animationFrame = requestAnimationFrame(scroll);

    // Pause on hover
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

      {/* Headline & CTA */}
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
          href="/tours"
          className="
            inline-flex items-center gap-3
            bg-blue-600 hover:bg-blue-800 hover:shadow-blue-600/30
            text-white font-semibold text-lg
            px-10 py-5 rounded-full shadow-xl
            transition-all duration-300 transform hover:scale-105 hover:shadow-2xl
          "
        >
          Book your seat
          <span className="text-2xl">→</span>
        </a>
      </div>

      {/* Auto-scrolling gallery – FIXED HEIGHT */}
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
                height: '420px',           // ← fixed height for all images
                width: '280px',            // ← fixed width (you can adjust)
              }}
            >
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="
                  w-full h-full object-cover rounded-2xl shadow-2xl
                  transition-transform duration-500 hover:scale-105
                "
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Optional: fade edges */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-900 to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-900 to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
};

export default GallerySection;