// src/components/WhyChooseUsSection.tsx
import {
  Award,
  Globe,
  ShieldCheck,
  Zap,
} from 'lucide-react';

const WhyChooseUsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
            Why Pilgrims & Travelers Choose Indu Sri Lanka
          </h2>
          <p className="mt-5 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Over 30 years of heartfelt service • Deep knowledge of sacred journeys • 
            Your spiritual & leisure travel, guided with devotion and care
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          
          {/* Card 1 - 30+ Years of Trust */}
          <div className={`
            group relative bg-white rounded-2xl shadow-md border border-gray-100 
            p-8 md:p-9 overflow-hidden transition-all duration-300
            hover:shadow-xl hover:-translate-y-2 hover:border-blue-600/30
          `}>
            <div className="absolute -right-6 -top-6 w-24 h-24 bg-blue-600/10 rounded-full blur-xl group-hover:bg-blue-600/20 transition-colors" />
            
            <div className="relative z-10 text-center">
              <Award 
                className="mx-auto mb-5 h-16 w-16 md:h-20 md:w-20 text-blue-600 transition-transform group-hover:scale-110 duration-300" 
                strokeWidth={1.5} 
              />
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                30+ Years of Trust
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Guiding pilgrims and travelers since 1995 with unwavering dedication.
              </p>
            </div>
          </div>

          {/* Card 2 - 50+ Sacred & Leisure Destinations */}
          <div className={`
            group relative bg-white rounded-2xl shadow-md border border-gray-100 
            p-8 md:p-9 overflow-hidden transition-all duration-300
            hover:shadow-xl hover:-translate-y-2 hover:border-blue-600/30
          `}>
            <div className="absolute -right-6 -top-6 w-24 h-24 bg-blue-600/10 rounded-full blur-xl group-hover:bg-blue-600/20 transition-colors" />
            
            <div className="relative z-10 text-center">
              <Globe 
                className="mx-auto mb-5 h-16 w-16 md:h-20 md:w-20 text-blue-600 transition-transform group-hover:scale-110 duration-300" 
                strokeWidth={1.5} 
              />
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                50+ Sacred & Leisure Destinations
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                From Dambadiva yatra to global spiritual journeys — curated with devotion.
              </p>
            </div>
          </div>

          {/* Card 3 - Best Value Guarantee */}
          <div className={`
            group relative bg-white rounded-2xl shadow-md border border-gray-100 
            p-8 md:p-9 overflow-hidden transition-all duration-300
            hover:shadow-xl hover:-translate-y-2 hover:border-blue-600/30
          `}>
            <div className="absolute -right-6 -top-6 w-24 h-24 bg-blue-600/10 rounded-full blur-xl group-hover:bg-blue-600/20 transition-colors" />
            
            <div className="relative z-10 text-center">
              <ShieldCheck 
                className="mx-auto mb-5 h-16 w-16 md:h-20 md:w-20 text-blue-600 transition-transform group-hover:scale-110 duration-300" 
                strokeWidth={1.5} 
              />
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                Best Value Guarantee
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Transparent pricing — no hidden costs, maximum value for your sacred journey.
              </p>
            </div>
          </div>

          {/* Card 4 - Lightning-Fast Booking */}
          <div className={`
            group relative bg-white rounded-2xl shadow-md border border-gray-100 
            p-8 md:p-9 overflow-hidden transition-all duration-300
            hover:shadow-xl hover:-translate-y-2 hover:border-blue-600/30
          `}>
            <div className="absolute -right-6 -top-6 w-24 h-24 bg-blue-600/10 rounded-full blur-xl group-hover:bg-blue-600/20 transition-colors" />
            
            <div className="relative z-10 text-center">
              <Zap 
                className="mx-auto mb-5 h-16 w-16 md:h-20 md:w-20 text-blue-600 transition-transform group-hover:scale-110 duration-300" 
                strokeWidth={1.5} 
              />
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                Lightning-Fast Booking
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Instant quotes & easy confirmation — your pilgrimage begins in minutes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;