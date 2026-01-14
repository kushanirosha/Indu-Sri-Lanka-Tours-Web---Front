import { useState } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function SearchBar() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useState({
    destination: '',
    month: '',
    budget: '',
    travelers: '',
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    Object.entries(searchParams).forEach(([key, value]) => {
      if (value) params.append(key, value);
    });
    navigate(`/tours?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSearch} className="bg-white rounded-lg shadow-xl p-6 max-w-5xl mx-auto -mt-10 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Destination
          </label>
          <input
            type="text"
            placeholder="Where to?"
            value={searchParams.destination}
            onChange={(e) => setSearchParams({ ...searchParams, destination: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F4B41A] focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Travel Month
          </label>
          <select
            value={searchParams.month}
            onChange={(e) => setSearchParams({ ...searchParams, month: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F4B41A] focus:border-transparent"
          >
            <option value="">Any Month</option>
            <option value="jan">January</option>
            <option value="feb">February</option>
            <option value="mar">March</option>
            <option value="apr">April</option>
            <option value="may">May</option>
            <option value="jun">June</option>
            <option value="jul">July</option>
            <option value="aug">August</option>
            <option value="sep">September</option>
            <option value="oct">October</option>
            <option value="nov">November</option>
            <option value="dec">December</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Budget
          </label>
          <select
            value={searchParams.budget}
            onChange={(e) => setSearchParams({ ...searchParams, budget: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F4B41A] focus:border-transparent"
          >
            <option value="">Any Budget</option>
            <option value="0-500">Under $500</option>
            <option value="500-1000">$500 - $1000</option>
            <option value="1000-1500">$1000 - $1500</option>
            <option value="1500-2000">$1500 - $2000</option>
            <option value="2000+">$2000+</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Travelers
          </label>
          <select
            value={searchParams.travelers}
            onChange={(e) => setSearchParams({ ...searchParams, travelers: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F4B41A] focus:border-transparent"
          >
            <option value="">Select</option>
            <option value="1">1 Person</option>
            <option value="2">2 People</option>
            <option value="3-4">3-4 People</option>
            <option value="5+">5+ People</option>
          </select>
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        <button
          type="submit"
          className="bg-[#F4B41A] text-[#0B1C2D] px-12 py-3 rounded-lg font-bold hover:bg-[#e5a515] transition-colors flex items-center space-x-2 text-lg"
        >
          <Search className="h-5 w-5" />
          <span>Search Tours</span>
        </button>
      </div>
    </form>
  );
}
