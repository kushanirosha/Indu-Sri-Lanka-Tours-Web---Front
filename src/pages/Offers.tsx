import { useEffect } from 'react';
import TourCard from '../components/TourCard';
import { tours } from '../data/travelData';
import { Tag } from 'lucide-react';

export default function Offers() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toursWithDiscounts = tours.map((tour, index) => {
    if (index % 3 === 0) {
      return { ...tour, discount: 20 };
    } else if (index % 3 === 1) {
      return { ...tour, discount: 15 };
    }
    return { ...tour, discount: 10 };
  });

  return (
    <div className="min-h-screen">
      <div className="bg-[#0B1C2D] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Reserved Your seat</h1>
          <p className="text-gray-300 text-lg">
            Save big on your dream vacation with our exclusive deals
          </p>
        </div>
      </div>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Card wrapper - light background like screenshot */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
            {/* Header */}
            <div className="bg-blue-50 px-8 py-10 md:px-12 md:py-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                Make Your Reservation
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
                Thank you for choosing Indu Sri Lanka Travels. Please fill out this form with your details and preferences,
                and we'll get back to you soon to confirm your reservation.
                <br className="hidden sm:block" />
                We're here to help plan your perfect Dambadiva pilgrimage or dream vacation — your journey starts here!
              </p>
            </div>

            {/* Form */}
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="p-8 md:p-12 space-y-8"
            >
              {/* Hidden fields for Web3Forms */}
              <input
                type="hidden"
                name="access_key"
                value="YOUR_WEB3FORMS_ACCESS_KEY_HERE" // ← Replace with your real key
              />
              <input type="hidden" name="subject" value="New Reservation Inquiry - Indu Sri Lanka Travels" />
              <input type="hidden" name="from_name" value="Indu Sri Lanka Travels Website" />

              {/* Title, First Name, Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Title
                  </label>
                  <select
                    name="title"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    defaultValue="Mr"
                  >
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Ms">Ms</option>
                    <option value="Dr">Dr</option>
                    <option value="Prof">Prof</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your first name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              {/* Travelers count */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    No. Adults <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="number"
                    name="adults"
                    min="1"
                    required
                    defaultValue="1"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    No. Kids (0-11 Years) <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="number"
                    name="kids"
                    min="0"
                    required
                    defaultValue="0"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    No. Infants <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="number"
                    name="infants"
                    min="0"
                    required
                    defaultValue="0"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Contact */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Mobile <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="+94 77 123 4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Country <span className="text-red-600">*</span>
                  </label>
                  <select
                    name="country"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    defaultValue="Sri Lanka"
                  >
                    <option value="Sri Lanka">Sri Lanka</option>
                    <option value="India">India</option>
                    <option value="United States">United States</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Australia">Australia</option>
                    <option value="Canada">Canada</option>
                    <option value="Germany">Germany</option>
                    {/* Add more countries or use a full country list library */}
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Anything else we should know?
                </label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Add requirements, timing preferences, special notes, preferred travel dates, or any other details..."
                ></textarea>
              </div>

              {/* Submit */}
              <div className="text-center pt-6">
                <button
                  type="submit"
                  className="
                  bg-blue-600 hover:bg-blue-700
                  text-white font-bold text-lg
                  px-12 py-4 rounded-full shadow-lg
                  transition-all duration-300 transform hover:scale-105 hover:shadow-xl
                "
                >
                  SUBMIT INQUIRY
                </button>
              </div>

              {/* reCAPTCHA notice */}
              <p className="text-center text-sm text-gray-500 mt-6">
                This site is protected by reCAPTCHA and the Google{' '}
                <a href="https://policies.google.com/privacy" className="underline hover:text-blue-600">
                  Privacy Policy
                </a>{' '}
                and{' '}
                <a href="https://policies.google.com/terms" className="underline hover:text-blue-600">
                  Terms of Service
                </a>{' '}
                apply.
              </p>
            </form>
          </div>
        </div>
      </section>

      <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20'>
        <div className="bg-[#0B1C2D] text-white rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Apply?</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Contact our visa specialists today and let us help you with your travel documentation
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#F4B41A] text-[#0B1C2D] px-8 py-3 rounded-lg font-bold hover:bg-[#e5a515] transition-colors"
          >
            Contact Us Now
          </a>
        </div>
      </section>

    </div>
  );
}
