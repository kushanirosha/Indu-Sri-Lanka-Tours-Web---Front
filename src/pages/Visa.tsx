import { Check, FileText, Clock, Shield, Download } from 'lucide-react';
import BookingStepsSection from '../components/BookingStepsSection';
import { useEffect } from 'react';
import PdfFile from '../public/CCF01132026.pdf';

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

  const handleDownloadAndOpen = () => {
    // pdfUrl is a string (e.g. "/CCF01132026.pdf" or hashed name in production)
    const pdfUrl = PdfFile;

    // 1. Open in new tab
    window.open(pdfUrl, '_blank');

    // 2. Force download
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'CCF01132026.pdf'; // suggested filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
                <div className="bg-blue-600 bg-opacity-10 p-6 rounded-full">
                  <step.icon className="h-10 w-10 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#0B1C2D] mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Download Section */}
        <div className="bg-gray-100 rounded-xl p-8 md:p-12 mb-16 shadow-sm">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0B1C2D] mb-4">
              Download Application Form
            </h2>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              Download the Sri Lankan Identity Overseas Certificate application form 
              to begin your visa process.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <button
              onClick={handleDownloadAndOpen}
              className="
                inline-flex items-center gap-3
                bg-blue-600 hover:bg-blue-800
                text-[#0B1C2D] font-bold text-lg
                px-10 py-4 rounded-full shadow-lg
                transition-all duration-300 transform hover:scale-105 hover:shadow-xl
              "
            >
              <Download className="h-6 w-6" />
              Download & View Form
            </button>

            {/*Optional: direct view link
            <a
              href={PdfFile}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2
                text-[#0B1C2D] hover:text-blue-600
                font-medium underline underline-offset-4
              "
            >
              View Form in Browser
            </a>*/}
          </div>
        </div>

        <div className="bg-[#0B1C2D] text-white rounded-xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Apply?</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Contact our visa specialists today and let us help you with your travel documentation
          </p>
          <a
            href="/contact"
            className="
              inline-block bg-blue-600 text-[#0B1C2D] 
              px-10 py-4 rounded-full font-bold 
              hover:bg-blue-800 transition-colors shadow-lg
            "
          >
            Contact Us Now
          </a>
        </div>
      </div>

      <BookingStepsSection />
    </div>
  );
}