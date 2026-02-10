// src/components/StatsSection.tsx
import { useEffect, useRef, useState } from 'react';
import { Users, Globe, Trophy, Heart } from 'lucide-react';
import VideoBg from '../public/hero.mp4';

const stats = [
  { value: 10000, label: 'Happy Travelers', icon: Users, suffix: '+' },
  { value: 50, label: 'Destinations', icon: Globe, suffix: '+' },
  { value: 30, label: 'Years Experience', icon: Trophy, suffix: '+' },
  { value: 98, label: 'Satisfaction Rate', icon: Heart, suffix: '%' },
];

const StatsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));

  // Intersection Observer – trigger animation once
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  // Count-up animation
  useEffect(() => {
    if (!isVisible) return;

    const duration = 2200;
    const steps = 60;
    const intervalTime = duration / steps;

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
      }, intervalTime);
    });

    return () => timers.forEach(clearInterval);
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[480px] md:h-[700px] flex items-center justify-center overflow-hidden my-8 md:my-18"
    >
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={VideoBg} type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-white px-6 sm:px-10 w-full max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 lg:gap-16 text-center">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={index}
                className="flex flex-col items-center transform transition-all duration-500"
              >
                {/* Icon */}
                <div className="mb-5 md:mb-6">
                  <Icon
                    className="h-14 w-14 md:h-16 md:w-16 text-blue-600 opacity-95"
                    strokeWidth={1.8}
                  />
                </div>

                {/* Number */}
                <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-2">
                  {counts[index].toLocaleString()}
                  {stat.suffix}
                </div>

                {/* Label */}
                <div className="flex flex-col items-center">
                  <div className="text-lg md:text-xl font-semibold opacity-95 mb-3">
                    {stat.label}
                  </div>
                  <div className="h-1 w-16 md:w-20 bg-blue-600 rounded-full opacity-90" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
