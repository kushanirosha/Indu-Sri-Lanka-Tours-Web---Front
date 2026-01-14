import { Link } from 'react-router-dom';
import { Clock, Star, Badge } from 'lucide-react';
import { Tour } from '../data/travelData';

interface TourCardProps {
  tour: Tour;
}

export default function TourCard({ tour }: TourCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img
          src={tour.image}
          alt={tour.title}
          className="w-full h-48 object-cover"
        />
        {tour.bestseller && (
          <div className="absolute top-3 right-3 bg-[#F4B41A] text-[#0B1C2D] px-3 py-1 rounded-full text-sm font-semibold flex items-center">
            <Badge className="h-4 w-4 mr-1" />
            Bestseller
          </div>
        )}
        {tour.discount && (
          <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {tour.discount}% OFF
          </div>
        )}
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-500">{tour.country}</span>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-[#F4B41A] fill-current" />
            <span className="ml-1 text-sm font-semibold">{tour.rating}</span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-[#0B1C2D] mb-2 line-clamp-2">
          {tour.title}
        </h3>

        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {tour.destination}
        </p>

        <div className="flex items-center text-gray-500 mb-4">
          <Clock className="h-4 w-4 mr-2" />
          <span className="text-sm">{tour.duration}</span>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-[#F4B41A]">
              ${tour.discount ? tour.price * (1 - tour.discount / 100) : tour.price}
            </span>
            {tour.discount && (
              <span className="text-sm text-gray-400 line-through ml-2">
                ${tour.price}
              </span>
            )}
            <p className="text-xs text-gray-500">per person</p>
          </div>
          <Link
            to={`/tour/${tour.id}`}
            className="bg-[#F4B41A] text-[#0B1C2D] px-6 py-2 rounded-lg font-semibold hover:bg-[#e5a515] transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
