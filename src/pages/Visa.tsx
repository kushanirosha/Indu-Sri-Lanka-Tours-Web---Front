import { Check, FileText, Clock, Shield, Globe } from 'lucide-react';
import { visaCountries } from '../data/travelData';
import BookingStepsSection from '../components/BookingStepsSection';
import { useEffect } from 'react';

export default function Visa() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const steps = [
    {
      icon: FileText,
      title: 'Document Collection',
      description: 'We guide you on required documents for your visa application',
    },
    {
      icon: Check,
      title: 'Application Review',
      description: 'Our experts review your application for accuracy',
    },
    {
      icon: Clock,
      title: 'Processing',
      description: 'We submit and track your application',
    },
    {
      icon: Shield,
      title: 'Visa Delivery',
      description: 'Receive your approved visa securely',
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="bg-[#0B1C2D] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Visa Assistance Services</h1>
          <p className="text-gray-300 text-lg">
            Let us handle the complexities of visa processing for you
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#0B1C2D] mb-4">
            Why Choose Our Visa Services?
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            With years of experience and a high success rate, we make visa processing simple and stress-free
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-[#F4B41A] bg-opacity-10 p-6 rounded-full">
                  <step.icon className="h-10 w-10 text-[#F4B41A]" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#0B1C2D] mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        {/*<div className="bg-gray-50 rounded-lg p-8 mb-16">
          <div className="flex items-center justify-center mb-6">
            <Globe className="h-12 w-12 text-[#F4B41A]" />
          </div>
          <h2 className="text-3xl font-bold text-[#0B1C2D] text-center mb-8">
            Countries We Support
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {visaCountries.map((country, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg transition-shadow"
              >
                <p className="font-semibold text-gray-700">{country}</p>
              </div>
            ))}
          </div>
        </div>*/}

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
      </div>

      <BookingStepsSection />
    </div>
  );
}
