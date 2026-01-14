export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[#0B1C2D] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-gray-300 text-lg">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-md p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-[#0B1C2D] mb-4">Agreement to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              By accessing and using TravelWorld's services, you agree to be bound by these Terms and Conditions.
              If you disagree with any part of these terms, you may not access our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0B1C2D] mb-4">Booking and Payment</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you make a booking through our platform:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>All prices are subject to availability and may change</li>
              <li>Payment must be received to confirm your booking</li>
              <li>You are responsible for ensuring all information provided is accurate</li>
              <li>Bookings are subject to our cancellation policy</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0B1C2D] mb-4">Cancellation Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              Cancellation terms vary by tour package. Please refer to the specific tour details for
              cancellation policies. Some bookings may be non-refundable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0B1C2D] mb-4">Travel Documents</h2>
            <p className="text-gray-700 leading-relaxed">
              You are responsible for ensuring you have valid travel documents including passports, visas,
              and any required health certificates for your destination.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0B1C2D] mb-4">Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed">
              TravelWorld acts as an intermediary between you and travel service providers. We are not
              liable for any issues arising from services provided by third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0B1C2D] mb-4">Contact Information</h2>
            <p className="text-gray-700 leading-relaxed">
              For questions about these Terms and Conditions, please contact us at legal@travelworld.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
