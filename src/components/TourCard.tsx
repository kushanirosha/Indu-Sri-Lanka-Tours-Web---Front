import { Link } from 'react-router-dom';
import { Clock, Star, BadgeCheck } from 'lucide-react';
import { Tour } from '../data/travelData'; // ← make sure this import has correct path

interface TourCardProps {
  tour: Tour;
  lang?: 'en' | 'si'; // optional — if you want to support language switch here too
}

export default function TourCard({ tour, lang = 'en' }: TourCardProps) {
  // Choose language — fallback to English
  const t = lang === 'si' ? 'si' : 'en';

  // Get translated values
  const title = tour.title[t];
  const destination = tour.destination[t];
  const duration = tour.duration[t];
  const country = tour.country;

  // Price logic
  const basePrice = tour.priceOptions?.length
    ? Math.min(...tour.priceOptions.map(p => p.price))
    : tour.price ?? 0;

  // You can add discount logic later if you decide to add discount field
  const hasDiscount = false; // ← placeholder — you can add discount?: number later
  const displayPrice = basePrice;
  // const displayPrice = hasDiscount ? Math.round(basePrice * (1 - discount / 100)) : basePrice;

  return (
    <div
      className={`
        group bg-white rounded-xl shadow-lg overflow-hidden 
        transition-all duration-300 ease-out
        hover:shadow-2xl hover:-translate-y-2
        border border-gray-100 hover:border-blue-600/30
      `}
    >
      {/* Image + overlay + badges */}
      <div className="relative overflow-hidden">
        <img
          src={tour.image}
          alt={title}
          className={`
            w-full aspect-[4/3] object-cover transition-transform duration-700
            group-hover:scale-110
          `}
        />

        {/* Badges - top right */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          {tour.featured && (
            <div
              className={`
                bg-gradient-to-r from-blue-600 to-indigo-600 
                text-white px-3 py-1 rounded-full text-xs font-bold
                flex items-center shadow-md
                transition-all duration-300 group-hover:scale-105
              `}
            >
              <BadgeCheck className="h-4 w-4 mr-1.5" />
              Featured
            </div>
          )}

          {/* You can add discount / bestseller badge here later */}
          {/* {hasDiscount && (
            <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
              {tour.discount}% OFF
            </div>
          )} */}
        </div>

        {/* Subtle overlay on hover */}
        <div
          className={`
            absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent
            opacity-0 group-hover:opacity-100 transition-opacity duration-500
          `}
        />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Country + Rating */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-gray-600 font-medium">{country}</span>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
            <span className="text-sm font-semibold text-gray-800">{tour.rating}</span>
          </div>
        </div>

        {/* Title */}
        <h3
          className={`
            text-xl font-bold text-gray-900 mb-2 line-clamp-2
            group-hover:text-blue-700 transition-colors
          `}
        >
          {title}
        </h3>

        {/* Destination */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{destination}</p>

        {/* Duration */}
        <div className="flex items-center text-gray-600 mb-5">
          <Clock className="h-4 w-4 mr-2" />
          <span className="text-sm font-medium">{duration}</span>
        </div>

        {/* Price + Button */}
        <div className="flex items-center justify-between">
          {/* Price */}
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl md:text-3xl font-extrabold text-blue-700">
                {new Intl.NumberFormat('en-LK').format(displayPrice)}
              </span>
              <span className="text-sm text-gray-500">LKR</span>
            </div>
            <p className="text-xs text-gray-500 mt-0.5">per person</p>
          </div>

          {/* View Details Button */}
          <Link
            to={`/tour/${tour.id}`}
            className={`
              bg-blue-600 hover:bg-blue-700 
              text-white px-5 py-2.5 rounded-lg font-semibold text-sm
              transition-all duration-300
              hover:shadow-lg hover:shadow-blue-600/30
              active:scale-95
              flex items-center gap-2
            `}
          >
            View Details
            <span className="text-lg opacity-80">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}