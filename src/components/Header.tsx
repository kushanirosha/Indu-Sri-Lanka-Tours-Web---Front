import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart, ChevronDown, Plane } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isToursDropdownOpen, setIsToursDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0B1C2D] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2">
            <Plane className="h-8 w-8 text-[#F4B41A]" />
            <span className="text-2xl font-bold text-white">TravelWorld</span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-[#F4B41A] transition-colors font-medium">
              Home
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setIsToursDropdownOpen(true)}
              onMouseLeave={() => setIsToursDropdownOpen(false)}
            >
              <button className="text-white hover:text-[#F4B41A] transition-colors font-medium flex items-center">
                Tours
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {isToursDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2">
                  <Link to="/tours" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    All Tours
                  </Link>
                  <Link to="/tours?category=honeymoon" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Honeymoon
                  </Link>
                  <Link to="/tours?category=family" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Family Tours
                  </Link>
                  <Link to="/tours?category=adventure" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Adventure
                  </Link>
                  <Link to="/tours?category=luxury" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Luxury
                  </Link>
                </div>
              )}
            </div>

            <Link to="/visa" className="text-white hover:text-[#F4B41A] transition-colors font-medium">
              Visa
            </Link>
            <Link to="/offers" className="text-white hover:text-[#F4B41A] transition-colors font-medium">
              Offers
            </Link>
            <Link to="/about" className="text-white hover:text-[#F4B41A] transition-colors font-medium">
              About
            </Link>
            <Link to="/members" className="text-white hover:text-[#F4B41A] transition-colors font-medium">
              Members
            </Link>
            <Link to="/contact" className="text-white hover:text-[#F4B41A] transition-colors font-medium">
              Contact
            </Link>
            <Link to="/cart" className="text-white hover:text-[#F4B41A] transition-colors">
              <ShoppingCart className="h-6 w-6" />
            </Link>
          </nav>

          <button
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-[#0B1C2D] border-t border-gray-700">
          <div className="px-4 py-6 space-y-4">
            <Link to="/" className="block text-white hover:text-[#F4B41A] font-medium">
              Home
            </Link>
            <Link to="/tours" className="block text-white hover:text-[#F4B41A] font-medium">
              Tours
            </Link>
            <Link to="/visa" className="block text-white hover:text-[#F4B41A] font-medium">
              Visa
            </Link>
            <Link to="/offers" className="block text-white hover:text-[#F4B41A] font-medium">
              Offers
            </Link>
            <Link to="/about" className="block text-white hover:text-[#F4B41A] font-medium">
              About
            </Link>
            <Link to="/members" className="block text-white hover:text-[#F4B41A] font-medium">
              Members
            </Link>
            <Link to="/contact" className="block text-white hover:text-[#F4B41A] font-medium">
              Contact
            </Link>
            <Link to="/cart" className="block text-white hover:text-[#F4B41A] font-medium">
              Cart
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
