// src/components/FAQSection.tsx
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    id: '01',
    question: 'Do I need any prior pilgrimage or spiritual tour experience?',
    answer:
      'No prior experience is required. Our Dambadiva Wandana tours are designed for first-time pilgrims, families, seniors, and experienced devotees alike. Our experienced guides and coordinators will take care of every aspect — from rituals to logistics — so you can focus on the spiritual experience.',
  },
  {
    id: '02',
    question: 'Is everything arranged for the Dambadiva pilgrimage (flights, hotels, meals, etc.)?',
    answer:
      'Yes — everything is fully arranged. This includes round-trip flights (from Colombo or your nearest international airport), comfortable AC transport, 3–4 star accommodations near sacred sites, all vegetarian sattvic meals, local guides, entry fees, and ritual assistance. No hidden costs.',
  },
  {
    id: '03',
    question: 'What is the best time to join a Dambadiva Wandana tour?',
    answer:
      'The most popular and spiritually favorable periods are October to March (pleasant weather in North India) and April–June (fewer crowds at some sites). We also run special tours during major festivals like Maha Shivaratri, Diwali, and Ram Navami for enhanced spiritual energy.',
  },
  {
    id: '04',
    question: 'Can senior citizens and people with limited mobility join the Dambadiva tour?',
    answer:
      'Absolutely. We offer senior-friendly packages with slower pacing, wheelchair assistance at major temples (where available), ground-floor rooms, and optional e-rickshaws/golf carts at large sites like Vrindavan and Ayodhya. Our team ensures comfort and safety at every step.',
  },
  {
    id: '05',
    question: 'Are your Dambadiva tour leaders and pandits experienced and reliable?',
    answer:
      'Yes — all our accompanying pandits, local guides, and coordinators have 10+ years of experience conducting Dambadiva yatras. They are well-versed in rituals, temple procedures, and Hindi/Sanskrit mantras. Many are from pilgrimage families with deep traditional knowledge.',
  },
  {
    id: '06',
    question: 'What should I bring for the Dambadiva pilgrimage?',
    answer:
      'Light cotton clothes (modest attire — kurta-pajama/saree/salwar for temples), comfortable walking shoes, personal medicines, small backpack, water bottle, umbrella/raincoat (seasonal), passport/ID, and a positive mindset. We provide yatra bags, water, snacks, and ritual items (puja samagri).',
  },
  {
    id: '07',
    question: 'How safe are the Dambadiva tours with Indu Sri Lanka Travels?',
    answer:
      'Safety is our top priority. We use only verified hotels & transport, 24/7 coordinator support, group travel for security, COVID protocols (when applicable), travel insurance included, and emergency medical contacts at every destination. Women and solo travelers are given extra care.',
  },
  {
    id: '08',
    question: 'How can I book a Dambadiva Wandana tour?',
    answer:
      'Booking is simple: Contact us via WhatsApp/phone/email or fill the form on our website. Choose your preferred date/package, pay a small deposit to reserve your seat, and complete payment 30–45 days before departure. We offer easy installment plans for larger groups.',
  },
  {
    id: '09',
    question: 'Can I customize the Dambadiva itinerary (add extra temples or change duration)?',
    answer:
      'Yes — we specialize in tailor-made Dambadiva tours. You can add temples (e.g., extra days in Varanasi, Mathura, or Haridwar), shorten/extend duration, or request private/family-only groups. Just let us know your preferences during inquiry.',
  },
  {
    id: '10',
    question: 'What is included in the tour cost and what is not?',
    answer:
      'Included: Flights, accommodation, vegetarian meals, transport, guides, pandit services, temple entries, insurance, taxes. Not included: Personal expenses, shopping, optional activities, tips, extra meals/drinks, or items not mentioned. Full transparency — detailed breakdown sent before booking.',
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1C2D]">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Common questions about our Dambadiva Wandana and spiritual pilgrimage tours
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="text-xl md:text-2xl font-bold text-[#F4B41A] min-w-[40px]">
                    {faq.id}
                  </span>
                  <span className="text-lg md:text-xl font-medium text-gray-800">
                    {faq.question}
                  </span>
                </div>
                <ChevronDown
                  className={`w-6 h-6 text-gray-500 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 pt-2 text-gray-700 text-base leading-relaxed border-t border-gray-200">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;