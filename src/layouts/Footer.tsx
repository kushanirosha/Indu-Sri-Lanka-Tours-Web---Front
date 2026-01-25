import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0B1C2D] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#F4B41A]">Indu Sri Lanka Travels</h3>
            <p className="text-gray-300 mb-4">
              Your trusted partner for unforgettable travel experiences around the world.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-[#F4B41A] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#F4B41A] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#F4B41A] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#F4B41A] transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-[#F4B41A] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/tours" className="text-gray-300 hover:text-[#F4B41A] transition-colors">
                  Tours
                </Link>
              </li>
              <li>
                <Link to="/visa" className="text-gray-300 hover:text-[#F4B41A] transition-colors">
                  Visa Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-[#F4B41A] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-[#F4B41A] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Popular Destinations</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/destination/thailand" className="text-gray-300 hover:text-[#F4B41A] transition-colors">
                  Thailand
                </Link>
              </li>
              <li>
                <Link to="/destination/uae" className="text-gray-300 hover:text-[#F4B41A] transition-colors">
                  UAE
                </Link>
              </li>
              <li>
                <Link to="/destination/india" className="text-gray-300 hover:text-[#F4B41A] transition-colors">
                  India
                </Link>
              </li>
              <li>
                <Link to="/destination/turkey" className="text-gray-300 hover:text-[#F4B41A] transition-colors">
                  Turkey
                </Link>
              </li>
              <li>
                <Link to="/destination/egypt" className="text-gray-300 hover:text-[#F4B41A] transition-colors">
                  Egypt
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#F4B41A] mt-1 flex-shrink-0" />
                <span className="text-gray-300">123 Travel Street, City Center, Country</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#F4B41A] flex-shrink-0" />
                <span className="text-gray-300">+1 234 567 8900</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#F4B41A] flex-shrink-0" />
                <span className="text-gray-300">info@indusrilankatravels.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Indu Sri Lanka Travels. All rights reserved.
          </p>
          <div className="mt-2 space-x-4">
            <Link to="/privacy" className="text-gray-400 hover:text-[#F4B41A] text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-[#F4B41A] text-sm">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
