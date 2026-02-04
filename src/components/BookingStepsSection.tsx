// src/components/BookingStepsSection.tsx
import { Search, CalendarCheck, SmilePlus } from 'lucide-react';

const BookingStepsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              Book Your Journey in Just 3 Easy Steps
            </h2>
            {/*<div className="relative">
              <span className="text-5xl md:text-6xl font-black text-[#F4B41A]/30">3</span>
              <div className="absolute -top-1 -right-3 w-8 h-8 bg-[#F4B41A]/20 rounded-full blur-sm"></div>
            </div>*/}
          </div>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Just tell us where you dream of going — we handle everything else with care and simplicity.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {/* Step 1 */}
          <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100">
            <div className="h-2 bg-gradient-to-r from-[#F4B41A] to-amber-500"></div>
            
            <div className="p-8 md:p-10 text-center">
              <div className="mx-auto mb-6 w-20 h-20 rounded-full bg-[#F4B41A]/10 flex items-center justify-center group-hover:bg-[#F4B41A]/20 transition-colors">
                <Search className="w-10 h-10 text-[#F4B41A]" strokeWidth={2.5} />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Find Your Dream Destination
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Enter your desired destination or pilgrimage keyword, filter by country or spiritual site, 
                and discover perfectly matched tours in seconds.
              </p>

              <div className="mt-6 inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-gray-500 font-bold text-xl">
                1
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 relative">
            <div className="h-2 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
            
            <div className="p-8 md:p-10 text-center">
              <div className="mx-auto mb-6 w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                <CalendarCheck className="w-10 h-10 text-blue-600" strokeWidth={2.5} />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Reserve Your Ideal Getaway
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Select your preferred dates, package, and number of travelers. 
                Just provide your contact details — booking made simple and secure.
              </p>

              <div className="mt-6 inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-gray-500 font-bold text-xl">
                2
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100">
            <div className="h-2 bg-gradient-to-r from-green-500 to-emerald-600"></div>
            
            <div className="p-8 md:p-10 text-center">
              <div className="mx-auto mb-6 w-20 h-20 rounded-full bg-green-100 flex items-center justify-center group-hover:bg-green-200 transition-colors">
                <SmilePlus className="w-10 h-10 text-green-600" strokeWidth={2.5} />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Complete & Celebrate
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Finalize payment securely. Congratulations — your spiritual journey or dream vacation is confirmed! 
                We’ll send all details and start preparing your unforgettable experience.
              </p>

              <div className="mt-6 inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-gray-500 font-bold text-xl">
                3
              </div>
            </div>
          </div>
        </div>

        {/* Optional trust line at bottom */}
        <div className="text-center mt-12 text-gray-500 text-sm md:text-base">
          <p className="inline-flex items-center gap-2">
            <span className="text-green-600">✓</span> Secure booking • No hidden fees • 24/7 support
          </p>
        </div>
      </div>
    </section>
  );
};

export default BookingStepsSection;