// src/components/WhyChooseUsSection.tsx
const WhyChooseUsSection = () => {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading - very simple */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Choose Indu Sri Lanka Travels?
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            30+ years of trusted service • Personalized pilgrimage & travel experiences • Your journey, our care
          </p>
        </div>

        {/* 4 simple feature cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow">
            <div className="text-5xl mb-4">🏆</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              30+ Years Experience
            </h3>
            <p className="text-gray-600 text-sm">
              Serving pilgrims and travelers since 1995 with dedication and expertise.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow">
            <div className="text-5xl mb-4">🌍</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              50+ Destinations
            </h3>
            <p className="text-gray-600 text-sm">
              From sacred Dambadiva sites to worldwide spiritual & leisure journeys.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow">
            <div className="text-5xl mb-4">💰</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Best Price Guarantee
            </h3>
            <p className="text-gray-600 text-sm">
              Honest pricing, no hidden fees, best value for your pilgrimage or vacation.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow">
            <div className="text-5xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Super Fast Booking
            </h3>
            <p className="text-gray-600 text-sm">
              Quick quotes, easy reservation — confirm your trip in minutes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;