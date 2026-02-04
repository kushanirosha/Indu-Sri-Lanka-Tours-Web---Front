import { Award, Users, Globe, Heart, Target, Eye } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Users, value: '10,000+', label: 'Happy Travelers' },
    { icon: Globe, value: '50+', label: 'Destinations' },
    { icon: Award, value: '15+', label: 'Years Experience' },
    { icon: Heart, value: '98%', label: 'Satisfaction Rate' },
  ];

  const reasons = [
    {
      title: 'Expert Travel Planning',
      description: 'Our experienced team crafts personalized itineraries tailored to your preferences',
    },
    {
      title: 'Best Price Guarantee',
      description: 'We offer competitive prices and exclusive deals you won\'t find elsewhere',
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock assistance to ensure your journey is smooth and worry-free',
    },
    {
      title: 'Trusted Partners',
      description: 'We work with verified hotels, airlines, and local operators worldwide',
    },
    {
      title: 'Flexible Booking',
      description: 'Easy booking modifications and flexible cancellation policies',
    },
    {
      title: 'Safety First',
      description: 'Your safety and security are our top priorities on every journey',
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="bg-[#0B1C2D] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Indu Sri Lanka Travels</h1>
          <p className="text-gray-300 text-lg">
            Your trusted partner in creating unforgettable travel experiences
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <stat.icon className="h-12 w-12 text-[#F4B41A]" />
              </div>
              <p className="text-4xl font-bold text-[#0B1C2D] mb-2">{stat.value}</p>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#0B1C2D] mb-6 text-center">Our Story</h2>
          <div className="max-w-4xl mx-auto text-gray-700 space-y-4 leading-relaxed">
            <p>
              Founded with a passion for exploration and a commitment to exceptional service,
              Indu Sri Lanka Travels has been helping travelers discover the world for over 15 years.
            </p>
            <p>
              What started as a small travel agency has grown into a trusted name in the industry,
              serving thousands of satisfied customers who return to us year after year for their
              travel needs.
            </p>
            <p>
              We believe that travel is not just about visiting new places, but about creating
              memories, experiencing different cultures, and broadening perspectives. Our dedicated
              team works tirelessly to ensure every journey is seamless and extraordinary.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="flex items-center mb-4">
              <Target className="h-10 w-10 text-[#F4B41A] mr-3" />
              <h3 className="text-2xl font-bold text-[#0B1C2D]">Our Mission</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To inspire and enable people to explore the world by providing exceptional travel
              experiences, personalized service, and unmatched value. We strive to make travel
              accessible, enjoyable, and transformative for everyone.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            <div className="flex items-center mb-4">
              <Eye className="h-10 w-10 text-[#F4B41A] mr-3" />
              <h3 className="text-2xl font-bold text-[#0B1C2D]">Our Vision</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To be the world's most trusted travel partner, recognized for our innovation,
              reliability, and commitment to creating life-changing travel experiences that
              connect people with the beauty and diversity of our planet.
            </p>
          </div>
        </div>

        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
            {/* Heading & intro */}
            <div className="text-center mb-10 md:mb-14">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
                What We Do
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Indu Sri Lanka Travels providing personalized itineraries, seamless bookings, visa assistance,
                travel insurance, and tailor-made tours for unforgettable journeys.
              </p>
            </div>

            {/* Grid: 3 columns on large screens */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-8 lg:gap-10">

              {/* First column - merged / tall card spanning 2 rows */}
              <div className="bg-[#f0faff] rounded-3xl p-8 md:p-10 shadow-sm relative overflow-hidden border border-[#e0f2fe] md:row-span-2 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-5 leading-tight">
                    Tailor-made Tour<br />Packages
                  </h3>
                  <p className="text-gray-700 text-base leading-relaxed">
                    Customized travel experiences crafted to your preferences and desires to meet with your budget.
                  </p>
                </div>
                <div className="mt-10 md:mt-auto self-end">
                  <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center text-6xl">
                    🌱
                  </div>
                </div>
              </div>

              {/* Second column - two stacked cards */}
              <div className="space-y-7 md:space-y-8">
                {/* Top card in column 2 */}
                <div className="bg-[#f0faff] rounded-3xl p-8 md:p-9 shadow-sm relative overflow-hidden border border-[#e0f2fe]">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 leading-tight">
                    Hotel Bookings
                  </h3>
                  <p className="text-gray-700 text-base leading-relaxed mb-16">
                    Effortless hotel reservations tailored to your specific needs and preferences.
                  </p>
                  <div className="absolute bottom-6 right-6">
                    <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-5xl">
                      🌿
                    </div>
                  </div>
                </div>

                {/* Bottom card in column 2 */}
                <div className="bg-[#f0faff] rounded-3xl p-8 md:p-9 shadow-sm relative overflow-hidden border border-[#e0f2fe]">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 leading-tight">
                    Travel Insurance
                  </h3>
                  <p className="text-gray-700 text-base leading-relaxed mb-16">
                    Comprehensive protection for your travel adventures, giving you peace of mind on the go.
                  </p>
                  <div className="absolute bottom-6 right-6">
                    <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-5xl">
                      🌿
                    </div>
                  </div>
                </div>
              </div>

              {/* Third column - two stacked cards */}
              <div className="space-y-7 md:space-y-8">
                {/* Top card in column 3 */}
                <div className="bg-[#f0faff] rounded-3xl p-8 md:p-9 shadow-sm relative overflow-hidden border border-[#e0f2fe]">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 leading-tight">
                    Airline Bookings
                  </h3>
                  <p className="text-gray-700 text-base leading-relaxed mb-16">
                    Seamless booking for your air travel needs, ensuring a smooth and hassle-free experience.
                  </p>
                  <div className="absolute bottom-6 right-6">
                    <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-5xl">
                      🌱
                    </div>
                  </div>
                </div>

                {/* Bottom card in column 3 */}
                <div className="bg-[#f0faff] rounded-3xl p-8 md:p-9 shadow-sm relative overflow-hidden border border-[#e0f2fe]">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 leading-tight">
                    Visa Assistance
                  </h3>
                  <p className="text-gray-700 text-base leading-relaxed mb-16">
                    Efficient support in obtaining visas, simplifying the process for your international travel.
                  </p>
                  <div className="absolute bottom-6 right-6">
                    <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-5xl">
                      🌿
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div>
          <h2 className="text-3xl font-bold text-[#0B1C2D] mb-8 text-center">
            Why Choose Indu Sri Lanka Travels?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-[#0B1C2D] mb-3">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#0B1C2D] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-gray-300 text-lg mb-8">
            Let us help you plan your next unforgettable adventure
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#F4B41A] text-[#0B1C2D] px-8 py-3 rounded-lg font-bold hover:bg-[#e5a515] transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}
