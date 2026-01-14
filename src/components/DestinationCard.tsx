import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { Destination } from '../data/travelData';

interface DestinationCardProps {
  destination: Destination;
}

export default function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <Link
      to={`/destination/${destination.id}`}
      className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      <div className="relative h-64">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70"></div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <div className="flex items-center mb-2">
          <MapPin className="h-5 w-5 mr-2 text-[#F4B41A]" />
          <span className="text-sm font-medium">{destination.country}</span>
        </div>
        <h3 className="text-2xl font-bold mb-2">{destination.name}</h3>
        <p className="text-sm text-gray-200">{destination.tourCount} Tours Available</p>
      </div>
    </Link>
  );
}
