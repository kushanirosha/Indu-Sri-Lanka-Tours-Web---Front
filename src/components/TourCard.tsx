import { Link } from 'react-router-dom';
import { Clock, Star, Badge } from 'lucide-react';
import { Tour } from '../data/travelData';

interface TourCardProps {
  tour: Tour;
}

export default function TourCard({ tour }: TourCardProps) {
  return (
    <div 
      className={`
        group bg-white rounded-xl shadow-lg overflow-hidden 
        transition-all duration-300 ease-out
        hover:shadow-2xl hover:-translate-y-2
        border border-gray-100 hover:border-[#F4B41A]/30
      `}
    >
      {/* Image section with zoom + overlay effect */}
      <div className="relative overflow-hidden">
        <img
          src={tour.image}
          alt={tour.title}
          className={`
            w-full h-48 object-cover transition-transform duration-500
            group-hover:scale-110
          `}
        />

        {/* Badges with subtle lift on hover */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 items-end">
          {tour.bestseller && (
            <div className={`
              bg-[#F4B41A] text-[#0B1C2D] px-3 py-1 rounded-full text-sm font-semibold 
              flex items-center shadow-md transition-transform duration-300
              group-hover:scale-105 group-hover:shadow-lg
            `}>
              <Badge className="h-4 w-4 mr-1" />
              Bestseller
            </div>
          )}
          {tour.discount && (
            <div className={`
              bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold 
              shadow-md transition-transform duration-300
              group-hover:scale-105 group-hover:shadow-lg
            `}>
              {tour.discount}% OFF
            </div>
          )}
        </div>

        {/* Subtle dark overlay on hover */}
        <div className={`
          absolute inset-0 bg-black/0 transition-all duration-500
          group-hover:bg-black/15
        `} />
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-gray-600 font-medium">{tour.country}</span>
          <div className="flex items-center">
            <Star className="h-4.5 w-4.5 text-[#F4B41A] fill-current" />
            <span className="ml-1.5 text-sm font-semibold text-gray-800">
              {tour.rating}
            </span>
          </div>
        </div>

        <h3 className={`
          text-xl font-bold text-[#0B1C2D] mb-2 line-clamp-2
          group-hover:text-[#F4B41A] transition-colors duration-300
        `}>
          {tour.title}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {tour.destination}
        </p>

        <div className="flex items-center text-gray-600 mb-5">
          <Clock className="h-4 w-4 mr-2" />
          <span className="text-sm font-medium">{tour.duration}</span>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl md:text-2.5xl font-bold text-[#F4B41A]">
                LKR {tour.discount 
                  ? Math.round(tour.price * (1 - tour.discount / 100)) 
                  : tour.price}
              </span>
              {tour.discount && (
                <span className="text-sm text-gray-400 line-through">
                  LKR {tour.price}
                </span>
              )}
            </div>
            <p className="text-xs text-gray-500 mt-0.5">per person</p>
          </div>

          {/* Button with better hover */}
          <Link
            to={`/tour/${tour.id}`}
            className={`
              bg-[#F4B41A] text-[#0B1C2D] px-6 py-2.5 rounded-lg 
              font-semibold text-sm md:text-base
              transition-all duration-300
              hover:bg-[#e5a515] hover:shadow-md hover:shadow-[#F4B41A]/30
              active:scale-95
              flex items-center gap-2
            `}
          >
            View Details
            <span className="text-lg opacity-80 group-hover:opacity-100 transition-opacity">
              →
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}