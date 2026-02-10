import SearchBar from '../components/SearchBar';
import CategoryCard from '../components/CategoryCard';
import TourCard from '../components/TourCard';
import DestinationCard from '../components/DestinationCard';
import { categories, tours, destinations, experienceTypes } from '../data/travelData';
import { Mail, Waves, Landmark, Trees, ShoppingBag, Building } from 'lucide-react';
import { Link } from 'react-router-dom';
import Locations from '../components/Locations';
import logo from '../public/logo1.png'
import ReviewsSection from '../components/ReviewsSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import StatsSection from '../components/StatsSection';
import GallerySection from '../components/GallerySection';
import { useEffect } from 'react';
import Img1 from '../public/Travel-in-Budget.webp';
import Video from '../public/hero.mp4';

const experienceIcons: { [key: string]: React.ElementType } = {
  Waves,
  Landmark,
  Trees,
  ShoppingBag,
  Building,
};

export default function Home() {
  const featuredTours = tours.filter((tour) => tour.featured).slice(0, 6);
  const popularTours = tours.filter((tour) => tour.bestseller).slice(0, 4);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <section className="relative h-[700px] flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">

          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={Video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Optional Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1C2D]/80 to-[#0B1C2D]/60"></div>

        </div>

        <div className="relative z-10 flex flex-col items-center text-center text-white px-4 max-w-4xl mx-auto">

          {/* Top Small Heading */}
          <h2 className="text-xs md:text-sm lg:text-base uppercase tracking-[0.35em] text-blue-600 mb-5 font-semibold">
            Welcome to Indu Sri Lanka Travel Organization
          </h2>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            සසර වසන තුරු - නිවන් දකින තුරු
            <span className="block mt-2 bg-gradient-to-r from-blue-600 via-[#FFD166] to-blue-600 bg-clip-text text-transparent drop-shadow-lg">
              දඹදිව වන්දනා
            </span>
          </h1>

          {/* Description */}
          <p className="text-sm md:text-lg lg:text-xl text-gray-200 max-w-2xl mb-8">
            Embark on a blissful spiritual voyage to the most revered Buddhist destinations,
            guided with comfort, devotion, and unforgettable experiences.
          </p>

        </div>

      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SearchBar />
      </div>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <img
              src={logo}
              alt="Indu Sri Lanka Travels Logo"
              className="h-24 md:h-32 w-auto object-contain"
            />
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#0B1C2D] via-[#0E7490] to-blue-600 bg-clip-text text-transparent mb-3">
            Indu Sri Lanka Travels
          </h1>

          <hr className="border-t-1 border-gray-300  mb-10" />

          {/* Description */}
          <div className="text-gray-700 leading-relaxed space-y-6">
            {/*<p className="text-2xl font-bold">
              Welcome to Indu Sri Lanka Travels!
            </p>*/}

            <p className='text-lg'>
              Your trusted inbound and outbound travel agency with a remarkable 30-year legacy of excellence. We are your gateway to unforgettable journeys, specializing in Dambadiva tours and spiritual expeditions in the heart of Sri Lanka. With a deep-rooted commitment to providing immersive and spiritually enriching experiences, we invite you to embark on a voyage of discovery with us.
            </p>

            <p className='text-lg'>
              Discover the sacred wonders of cultural and spiritual heritage on our outbound pilgrimage tours, where we take you on a transformative journey like no other. Join us as we explore the soul of these holy destinations, one pilgrimage at a time.
            </p>
          </div>

          {/* Button */}
          <div className="mt-12">
            <a
              href="/about"
              className="
          inline-block
          bg-blue-600 hover:bg-blue-800
          text-black font-bold
          text-lg px-12 py-3
          rounded-xl
          shadow-lg hover:shadow-xl
          transition-all duration-300
          transform hover:-translate-y-1
        "
            >
              Explore More
            </a>
          </div>
        </div>
      </section>

      <Locations />

      {/*<section className="py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0B1C2D] mb-4">Tour Categories</h2>
            <p className="text-gray-600 text-lg">Find the perfect tour for your travel style</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>*/}

      <section className="py-24 mt-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0B1C2D] mb-4">Dambadiva Pilgrimage Tours</h2>
            <p className="text-gray-600 text-lg">
              Explore our handpicked selection of amazing group tours
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/tours"
              className="inline-block bg-[#0B1C2D] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1f405e] transition-colors"
            >
              View All Tours
            </Link>
          </div>
        </div>
      </section>

      {/*<section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0B1C2D] mb-4">Browse by Country</h2>
            <p className="text-gray-600 text-lg">Choose your dream destination</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
        </div>
      </section>*/}

      {/*<section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0B1C2D] mb-4">Adventure & Experiences</h2>
            <p className="text-gray-600 text-lg">Find your perfect travel experience</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {experienceTypes.map((experience) => {
              const IconComponent = experienceIcons[experience.icon];
              return (
                <Link
                  key={experience.id}
                  to={`/tours?type=${experience.id}`}
                  className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 h-64"
                >
                  <img
                    src={experience.image}
                    alt={experience.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80"></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                    {IconComponent && (
                      <IconComponent className="h-12 w-12 mb-3 text-blue-600" />
                    )}
                    <h3 className="text-xl font-bold text-center">{experience.name}</h3>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>*/}

      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left - Text Content */}
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1C2D] leading-tight">
                Travel Within Your Budget, <br />
                Sri Lanka's Best Value International Tours
              </h2>

              <div className="w-24 h-1 bg-blue-600 rounded-full my-6"></div>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Tell us how much you want to spend and we'll find the perfect international
                options for you. Our budget specialists will help you get the most value for your
                money. Zero hidden costs guaranteed!
              </p>

              <ul className="list-disc pl-6 space-y-3 text-gray-800">

                <li>
                  Customized budget-friendly international options
                </li>

                <li>
                  Special deals within your price range
                </li>

                <li>
                  No hidden costs or surprise fees
                </li>
              </ul>

              <a
                href="/contact"
                className="inline-block bg-blue-600 text-[#0B1C2D] px-8 py-3 rounded-lg font-bold hover:bg-blue-800 transition-colors"
              >
                Contact Us Now
              </a>

              {/* Budget Input + Button */}
              {/*<div className="mt-10 flex flex-col sm:flex-row gap-4 max-w-md">
                <div className="relative flex-1">
                  <input
                    type="number"
                    placeholder="500000"
                    className="
                w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-full
                focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/30
                placeholder-gray-500
              "
                  />
                  <span className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500 font-medium">
                    LKR
                  </span>
                </div>

                <button
                  className="
              bg-blue-600 hover:bg-[#e0a010] text-white font-semibold
              text-lg px-10 py-4 rounded-full shadow-lg
              transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl
              flex items-center justify-center gap-2 min-w-[140px]
            "
                >
                  <span>Search</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>*/}
            </div>

            {/* Right - Image */}
            <div className="relative hidden lg:block">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src={Img1}
                  alt="Travel budget jar with money, compass and airplane"
                  className="w-full  object-cover"
                />
              </div>

              {/* Optional decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600/20 rounded-full blur-2xl" />
              <div className="absolute -top-6 -left-6 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />
            </div>
          </div>

          {/* Mobile image - shown only on smaller screens */}
          <div className="mt-12 lg:hidden">
            <img
              src={Img1}
              alt="Travel budget jar with money, compass and airplane"
              className="w-full rounded-2xl shadow-2xl object-cover border-4 border-white"
            />
          </div>
        </div>
      </section>

      <GallerySection />

      <WhyChooseUsSection />

      <StatsSection />

      {/*<section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0B1C2D] mb-4">Popular Tours</h2>
            <p className="text-gray-600 text-lg">Our most loved tour packages</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {popularTours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </div>
      </section>*/}

      <ReviewsSection />

      <section className="py-16 bg-[#253d55] border-b border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Mail className="h-16 w-16 text-blue-600 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-4">Join Our Travel Community</h2>
          <p className="text-gray-300 text-lg mb-8">
            Subscribe to receive exclusive deals, travel tips, and destination guides
          </p>

          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-3 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-600 text-[#0B1C2D] px-8 py-3 rounded-lg font-bold hover:bg-blue-800 transition-colors whitespace-nowrap"
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
