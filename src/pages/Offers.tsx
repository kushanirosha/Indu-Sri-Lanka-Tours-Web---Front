import { useEffect } from 'react';
import TourCard from '../components/TourCard';
import { tours } from '../data/travelData';
import { Download, Tag } from 'lucide-react';
import PdfFile from '../public/CCF01132026_0001.pdf';

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

      <section className="py-16 md:py-24 ">
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
                  bg-blue-600 hover:bg-blue-600
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

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-[#0B1C2D] text-white rounded-xl p-10 md:p-12 lg:p-16 text-center shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-5">
            Ready to Register with Indu Sri Lanka?
          </h2>

          <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
            Download our official registration form right now and start the process.
            Our team will assist you personally to make your pilgrimage / travel booking smooth and hassle-free.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-5 md:gap-8">
            {/* Button 1 - Contact Us */}
            <a
              href="/contact"
              className="
          inline-flex items-center justify-center gap-3
          bg-blue-600 text-[#0B1C2D] 
          px-9 py-4 rounded-full font-bold text-lg
          hover:bg-blue-800 transition-all duration-300
          shadow-lg hover:shadow-xl hover:scale-[1.03]
          min-w-[220px]
        "
            >
              Contact Us Now
              <span className="text-xl">→</span>
            </a>

            {/* Button 2 - Download Registration Form */}
            <button
              onClick={() => {
                const pdfUrl = PdfFile; // change path if file is in subfolder

                // 1. Open in new tab
                window.open(pdfUrl, '_blank');

                // 2. Trigger download
                const link = document.createElement('a');
                link.href = pdfUrl;
                link.download = 'Indu-Sri-Lanka-Registration-Form.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="
          inline-flex items-center justify-center gap-3
          bg-white text-[#0B1C2D] border-2 border-blue-600
          px-9 py-4 rounded-full font-bold text-lg
          hover:bg-blue-600 hover:text-[#0B1C2D]
          transition-all duration-300
          shadow-lg hover:shadow-xl hover:scale-[1.03]
          min-w-[280px]
        "
            >
              <Download className="h-5 w-5" />
              Download Registration Form
            </button>
          </div>

          <div className="mt-10 space-y-4 text-base text-gray-300 max-w-3xl mx-auto">
            <p className="font-medium">
              <strong>Important notes:</strong>
            </p>
            <ul className="list-disc list-inside space-y-2 text-left">
              <li>This is <strong>Indu Sri Lanka's own registration form</strong> – not a government document</li>
              <li>Please fill it accurately so we can prepare the best package for you</li>
              <li>After submission, our team will contact you within 24 hours</li>
              <li>You can also send the filled form via WhatsApp or email</li>
            </ul>
          </div>

          <p className="text-gray-400 text-sm mt-10">
            Indu Sri Lanka Travels – Your trusted partner for pilgrimages & tours
          </p>
        </div>
      </section>

    </div>
  );
}
