import { useParams } from 'react-router-dom';
import TourCard from '../components/TourCard';
import { tours, destinations } from '../data/travelData';
import { Download, MapPin } from 'lucide-react';

export default function Destination() {
  const { id } = useParams();
  const destination = destinations.find((d) => d.id === id);
  const destinationTours = tours.filter(
    (tour) => tour.country.toLowerCase() === destination?.country.toLowerCase()
  );

  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 text-lg">Destination not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="relative h-96">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1C2D]/90 to-[#0B1C2D]/60"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="flex items-center text-[#F4B41A] mb-4">
              <MapPin className="h-6 w-6 mr-2" />
              <span className="text-lg font-medium">{destination.country}</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              {destination.name}
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl">
              {destination.description}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-[#0B1C2D] mb-2">
              Available Tours
            </h2>
            <p className="text-gray-600">
              {destinationTours.length} tours available in {destination.name}
            </p>
          </div>
          <button className="flex items-center space-x-2 bg-[#F4B41A] text-[#0B1C2D] px-6 py-3 rounded-lg font-semibold hover:bg-[#e5a515] transition-colors">
            <Download className="h-5 w-5" />
            <span>Download Brochure</span>
          </button>
        </div>

        {destinationTours.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinationTours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">
              No tours available for this destination at the moment.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
