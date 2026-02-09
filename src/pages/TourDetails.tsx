import { useParams, Link } from 'react-router-dom';
import { tours } from '../data/travelData';
import {
  Clock,
  MapPin,
  Star,
  Check,
  X,
  Calendar,
  Users,
  ShoppingCart,
} from 'lucide-react';
import { useEffect, useState } from 'react';

export default function TourDetails() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();
  const tour = tours.find((t) => t.id === id);
  const [travelers, setTravelers] = useState(1);

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 text-lg">Tour not found</p>
      </div>
    );
  }

  const totalPrice = tour.price * travelers;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-96">
        <img
          src={tour.image}
          alt={tour.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
            <div className="flex-1">
              <div className="flex items-center space-x-3 text-gray-600 mb-3">
                <MapPin className="h-5 w-5 text-[#F4B41A]" />
                <span>{tour.destination}</span>
              </div>
              <h1 className="text-4xl font-bold text-[#0B1C2D] mb-4">
                {tour.title}
              </h1>
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-gray-500 mr-2" />
                  <span className="text-gray-600">{tour.duration}</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-[#F4B41A] fill-current mr-1" />
                  <span className="font-semibold">{tour.rating}</span>
                </div>
              </div>
            </div>

            <div className="bg-[#0B1C2D] text-white rounded-lg p-6 lg:w-80">
              <div className="mb-4">
                <p className="text-gray-300 text-sm mb-1">Price per person</p>
                <p className="text-4xl font-bold text-[#F4B41A]">LKR{tour.price}</p>
              </div>

              <div className="mb-4">
                <label className="block text-sm mb-2">Number of Travelers</label>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setTravelers(Math.max(1, travelers - 1))}
                    className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600"
                  >
                    -
                  </button>
                  <span className="text-xl font-semibold">{travelers}</span>
                  <button
                    onClick={() => setTravelers(travelers + 1)}
                    className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="border-t border-gray-600 pt-4 mb-4">
                <div className="flex justify-between text-lg">
                  <span>Total Price</span>
                  <span className="font-bold text-[#F4B41A]">LKR {totalPrice}</span>
                </div>
              </div>

              <button className="w-full bg-[#F4B41A] text-[#0B1C2D] py-3 rounded-lg font-bold hover:bg-[#e5a515] transition-colors mb-3">
                Book Now
              </button>
              <Link
                to="/cart"
                className="w-full flex items-center justify-center space-x-2 bg-white text-[#0B1C2D] py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                <ShoppingCart className="h-5 w-5" />
                <span>Add to Cart</span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-[#0B1C2D] mb-4">
                  Tour Description
                </h2>
                <p className="text-gray-700 leading-relaxed">{tour.description}</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0B1C2D] mb-4">
                  Highlights
                </h2>
                <ul className="space-y-3">
                  {tour.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0B1C2D] mb-4">
                  Day-wise Itinerary
                </h2>
                <div className="space-y-4">
                  {tour.itinerary.map((item) => (
                    <div
                      key={item.day}
                      className="border-l-4 border-[#F4B41A] pl-4 py-2"
                    >
                      <div className="flex items-center space-x-3 mb-2">
                        <Calendar className="h-5 w-5 text-[#F4B41A]" />
                        <h3 className="font-bold text-lg text-[#0B1C2D]">
                          Day {item.day}: {item.title}
                        </h3>
                      </div>
                      <p className="text-gray-700">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h2 className="text-2xl font-bold text-[#0B1C2D] mb-4">
                    What's Included
                  </h2>
                  <ul className="space-y-2">
                    {tour.includes.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#0B1C2D] mb-4">
                    What's Not Included
                  </h2>
                  <ul className="space-y-2">
                    {tour.excludes.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <X className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-100 rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#0B1C2D] mb-4">
                  Tour Information
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Destination</span>
                    <span className="font-semibold text-[#0B1C2D]">
                      {tour.country}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration</span>
                    <span className="font-semibold text-[#0B1C2D]">
                      {tour.duration}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Category</span>
                    <span className="font-semibold text-[#0B1C2D]">
                      {tour.category}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Rating</span>
                    <span className="font-semibold text-[#0B1C2D]">
                      {tour.rating} / 5
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-[#F4B41A] bg-opacity-10 rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#0B1C2D] mb-4">
                  Need Help?
                </h3>
                <p className="text-gray-700 mb-4">
                  Our travel experts are available to help you plan your perfect trip.
                </p>
                <Link
                  to="/contact"
                  className="block text-center bg-[#0B1C2D] text-white py-3 rounded-lg font-semibold hover:bg-[#152d42] transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16"></div>
    </div>
  );
}
