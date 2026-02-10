import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import TourCard from '../components/TourCard';
import { tours } from '../data/travelData';
import { SlidersHorizontal, X } from 'lucide-react';

export default function Tours() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [searchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    destination: searchParams.get('destination') || '',
    category: searchParams.get('category') || '',
    minPrice: '',
    maxPrice: '',
    duration: '',
  });

  const filteredTours = useMemo(() => {
    return tours.filter((tour) => {
      if (filters.destination && !tour.destination.toLowerCase().includes(filters.destination.toLowerCase()) && !tour.country.toLowerCase().includes(filters.destination.toLowerCase())) {
        return false;
      }
      if (filters.category && tour.category.toLowerCase() !== filters.category.toLowerCase()) {
        return false;
      }
      if (filters.minPrice && tour.price < parseInt(filters.minPrice)) {
        return false;
      }
      if (filters.maxPrice && tour.price > parseInt(filters.maxPrice)) {
        return false;
      }
      return true;
    });
  }, [filters]);

  const resetFilters = () => {
    setFilters({
      destination: '',
      category: '',
      minPrice: '',
      maxPrice: '',
      duration: '',
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[#0B1C2D] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">All Tours</h1>
          <p className="text-gray-300 text-lg">Discover your next adventure</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <p className="text-gray-600">
            Showing <span className="font-semibold text-[#0B1C2D]">{filteredTours.length}</span> tours
          </p>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden flex items-center space-x-2 bg-blue-600 text-[#0B1C2D] px-4 py-2 rounded-lg font-semibold"
          >
            <SlidersHorizontal className="h-5 w-5" />
            <span>Filters</span>
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <aside className={`${showFilters ? 'block' : 'hidden'} lg:block w-full lg:w-64 flex-shrink-0`}>
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-[#0B1C2D]">Filters</h3>
                <button onClick={() => setShowFilters(false)} className="lg:hidden">
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Destination
                  </label>
                  <input
                    type="text"
                    placeholder="Search destination"
                    value={filters.destination}
                    onChange={(e) => setFilters({ ...filters, destination: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Category
                  </label>
                  <select
                    value={filters.category}
                    onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  >
                    <option value="">All Categories</option>
                    <option value="Honeymoon">Honeymoon</option>
                    <option value="Family">Family</option>
                    <option value="Adventure">Adventure</option>
                    <option value="Group Tours">Group Tours</option>
                    <option value="Luxury">Luxury</option>
                    <option value="Budget">Budget</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Price Range
                  </label>
                  <div className="flex space-x-2">
                    <input
                      type="number"
                      placeholder="Min"
                      value={filters.minPrice}
                      onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                    <input
                      type="number"
                      placeholder="Max"
                      value={filters.maxPrice}
                      onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Duration
                  </label>
                  <select
                    value={filters.duration}
                    onChange={(e) => setFilters({ ...filters, duration: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  >
                    <option value="">Any Duration</option>
                    <option value="1-3">1-3 Days</option>
                    <option value="4-7">4-7 Days</option>
                    <option value="8-14">8-14 Days</option>
                    <option value="15+">15+ Days</option>
                  </select>
                </div>

                <button
                  onClick={resetFilters}
                  className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            </div>
          </aside>

          <div className="flex-1">
            {filteredTours.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredTours.map((tour) => (
                  <TourCard key={tour.id} tour={tour} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-gray-500 text-lg">No tours found matching your criteria.</p>
                <button
                  onClick={resetFilters}
                  className="mt-4 bg-blue-600 text-[#0B1C2D] px-6 py-2 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
