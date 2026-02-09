import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useEffect, useState } from 'react';
import FAQSection from '../components/FAQSection';

export default function Contact() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[#0B1C2D] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-300 text-lg">
            We're here to help plan your perfect journey
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-center w-12 h-12 bg-[#F4B41A] bg-opacity-10 rounded-full mb-4">
              <Phone className="h-6 w-6 text-[#F4B41A]" />
            </div>
            <h3 className="text-xl font-bold text-[#0B1C2D] mb-2">Phone</h3>
            <p className="text-gray-600">+1 234 567 8900</p>
            <p className="text-gray-600">+1 234 567 8901</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-center w-12 h-12 bg-[#F4B41A] bg-opacity-10 rounded-full mb-4">
              <Mail className="h-6 w-6 text-[#F4B41A]" />
            </div>
            <h3 className="text-xl font-bold text-[#0B1C2D] mb-2">Email</h3>
            <p className="text-gray-600">info@indusrilankatravels.com</p>
            <p className="text-gray-600">support@indusrilankatravels.com</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-center w-12 h-12 bg-[#F4B41A] bg-opacity-10 rounded-full mb-4">
              <Clock className="h-6 w-6 text-[#F4B41A]" />
            </div>
            <h3 className="text-xl font-bold text-[#0B1C2D] mb-2">Working Hours</h3>
            <p className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM</p>
            <p className="text-gray-600">Sat - Sun: 10:00 AM - 4:00 PM</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-[#0B1C2D] mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F4B41A] focus:border-transparent"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F4B41A] focus:border-transparent"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F4B41A] focus:border-transparent"
                    placeholder="+1 234 567 8900"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F4B41A] focus:border-transparent"
                    placeholder="Tour Inquiry"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F4B41A] focus:border-transparent"
                  placeholder="Tell us about your travel plans..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#F4B41A] text-[#0B1C2D] py-3 rounded-lg font-bold hover:bg-[#e5a515] transition-colors flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0B1C2D] mb-6">Visit Our Office</h2>
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="flex items-start space-x-4 mb-6">
                <MapPin className="h-6 w-6 text-[#F4B41A] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-[#0B1C2D] mb-2">Main Office</h3>
                  <p className="text-gray-600">
                    123 Travel Street<br />
                    City Center, State 12345<br />
                    Country
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-200 rounded-lg overflow-hidden h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412648750455!2d-73.98823492346747!3d40.748817671418016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      <FAQSection />

      <section className="p-16 bg-[#253d55] border-b border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Mail className="h-16 w-16 text-[#F4B41A] mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-4">Join Our Travel Community</h2>
          <p className="text-gray-300 text-lg mb-8">
            Subscribe to receive exclusive deals, travel tips, and destination guides
          </p>

          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-3 rounded-lg focus:ring-2 focus:ring-[#F4B41A] focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#F4B41A] text-[#0B1C2D] px-8 py-3 rounded-lg font-bold hover:bg-[#e5a515] transition-colors whitespace-nowrap"
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </section>

    </div>
  );
}
