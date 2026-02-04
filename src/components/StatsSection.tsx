// src/components/StatsSection.tsx
import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 10000, label: 'Happy Travelers', icon: '👥' },
  { value: 50, label: 'Destinations', icon: '🌍' },
  { value: 15, label: 'Years Experience', icon: '🏆' },
  { value: 98, label: 'Satisfaction Rate', suffix: '%', icon: '❤️' },
];

const StatsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));

  // Intersection Observer to detect when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // only trigger once
        }
      },
      { threshold: 0.3 } // start animation when 30% visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Count-up animation
  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    const timers = stats.map((stat, index) => {
      let current = 0;
      const target = stat.value;
      const increment = target / steps;

      return setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timers[index]);
        }

        setCounts((prev) =>
          prev.map((c, i) => (i === index ? Math.floor(current) : c))
        );
      }, interval);
    });

    return () => timers.forEach(clearInterval);
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[380px] md:h-[480px] flex items-center justify-center overflow-hidden my-12 md:my-20"
    >
      {/* Fixed background image with parallax effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://t3.ftcdn.net/jpg/01/40/69/32/360_F_140693217_CAzgOW3Bey6QoSqr7HBb3fxIdydVAb7D.jpg')`,
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />
      </div>

      {/* Stats content */}
      <div className="relative z-10 text-white px-4 sm:px-8 w-full max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 lg:gap-16 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-2 tracking-tight">
                {counts[index].toLocaleString()}
                {stat.suffix || '+'}
              </div>
              <div className="text-lg md:text-xl font-medium opacity-90 mb-3">
                {stat.label}
              </div>
              <div className="text-5xl md:text-6xl opacity-90">
                {stat.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;