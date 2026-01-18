import SearchBar from '../components/SearchBar';
import CategoryCard from '../components/CategoryCard';
import TourCard from '../components/TourCard';
import DestinationCard from '../components/DestinationCard';
import { categories, tours, destinations, experienceTypes } from '../data/travelData';
import { Mail, Waves, Landmark, Trees, ShoppingBag, Building } from 'lucide-react';
import { Link } from 'react-router-dom';

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

  return (
    <div className="min-h-screen">
      <section className="relative h-[700px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Travel Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1C2D]/80 to-[#0B1C2D]/60"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          {/*<h2 className="text-sm md:text-base uppercase tracking-widest text-[#F4B41A] mb-4">
            Welcome to Indu Sri Lanka Travel Organization
          </h2>*/}

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Discover Hidden Retreats Across
            <span className="block bg-gradient-to-r from-[#F4B41A] to-[#FFD166] bg-clip-text text-transparent">
              Asia’s Most Majestic Destinations
            </span>
          </h1>

          <p className="text-base md:text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            From flights and hotels to visas and international tours, we take care of everything.
            Enjoy stress-free travel with transparent pricing, expert planning, and unforgettable
            experiences - specially designed for Sri Lankan travelers.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SearchBar />
      </div>

      <section className="py-28">
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
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0B1C2D] mb-4">Featured Group Tours</h2>
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
              className="inline-block bg-[#0B1C2D] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#152d42] transition-colors"
            >
              View All Tours
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
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
      </section>

      <section className="py-16">
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
                      <IconComponent className="h-12 w-12 mb-3 text-[#F4B41A]" />
                    )}
                    <h3 className="text-xl font-bold text-center">{experience.name}</h3>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
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
      </section>

      <section className="py-16 bg-[#0B1C2D]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Mail className="h-16 w-16 text-[#F4B41A] mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-4">Join Our Travel Community</h2>
          <p className="text-gray-300 text-lg mb-8">
            Subscribe to receive exclusive deals, travel tips, and destination guides
          </p>

          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-3 rounded-lg focus:ring-2 focus:ring-[#F4B41A] focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#F4B41A] text-[#0B1C2D] px-8 py-3 rounded-lg font-bold hover:bg-[#e5a515] transition-colors whitespace-nowrap"
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
