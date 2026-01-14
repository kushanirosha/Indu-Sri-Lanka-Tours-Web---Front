import TourCard from '../components/TourCard';
import { tours } from '../data/travelData';
import { Tag } from 'lucide-react';

export default function Offers() {
  const toursWithDiscounts = tours.map((tour, index) => {
    if (index % 3 === 0) {
      return { ...tour, discount: 20 };
    } else if (index % 3 === 1) {
      return { ...tour, discount: 15 };
    }
    return { ...tour, discount: 10 };
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[#0B1C2D] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-4">
            <Tag className="h-12 w-12 text-[#F4B41A]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Special Offers & Deals
          </h1>
          <p className="text-gray-300 text-lg text-center">
            Save big on your dream vacation with our exclusive deals
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-[#F4B41A] to-[#e5a515] text-[#0B1C2D] rounded-lg p-8 mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Limited Time Offers</h2>
          <p className="text-lg mb-2">Book now and save up to 20% on selected tours</p>
          <p className="text-sm font-semibold">Offers valid until end of month</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {toursWithDiscounts.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </div>
    </div>
  );
}
