export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[#0B1C2D] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-gray-300 text-lg">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-md p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-[#0B1C2D] mb-4">Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              TravelWorld is committed to protecting your privacy. This Privacy Policy explains how we collect,
              use, disclose, and safeguard your information when you use our website and services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0B1C2D] mb-4">Information We Collect</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Name, email address, and contact information</li>
              <li>Payment and billing information</li>
              <li>Travel preferences and booking history</li>
              <li>Communications with our customer service team</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0B1C2D] mb-4">How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Process your bookings and payments</li>
              <li>Provide customer support</li>
              <li>Send you booking confirmations and updates</li>
              <li>Improve our services and user experience</li>
              <li>Send promotional communications (with your consent)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0B1C2D] mb-4">Information Sharing</h2>
            <p className="text-gray-700 leading-relaxed">
              We do not sell your personal information. We may share your information with trusted partners
              who assist us in operating our website, conducting our business, or serving our users.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0B1C2D] mb-4">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have questions about this Privacy Policy, please contact us at privacy@travelworld.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
