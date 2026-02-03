import { Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';

const reviews = [
  {
    name: "Nalin Perera",
    avatar: "https://img.freepik.com/free-photo/front-view-indian-man-posing-studio_23-2150692695.jpg?semt=ais_hybrid&w=740&q=80", // [image:3]
    time: "2 months ago",
    rating: 5,
    text: "My family and I joined the 12-day Dambadiva pilgrimage tour. Everything was perfectly organized — guides were knowledgeable, hotels comfortable, and the spiritual experience was truly uplifting. Highly recommend!",
  },
  {
    name: "Kalani Fernando",
    avatar: "https://previews.123rf.com/images/diegozarulli/diegozarulli2102/diegozarulli210200033/164325892-beautiful-sri-lanka-girl-poses-standing-with-yellow-bright-background-young-woman-smiles.jpg",
    time: "3 months ago",
    rating: 5,
    text: "Our recent trip to Dambadiva with Indu Travels was exceptional. The attention to detail, vegetarian meals, and smooth transportation made it stress-free. Felt like a divine journey!",
  },
  {
    name: "Lasitha Gunawardena",
    avatar: "https://c8.alamy.com/comp/DWHTFA/portrait-of-young-happy-sri-lankan-man-DWHTFA.jpg",
    time: "1 month ago",
    rating: 5,
    text: "As first-time international pilgrims, we were nervous, but the team made us feel so welcome. The Dambadiva tour exceeded expectations — sacred sites, group prayers, and excellent support throughout.",
  },
  {
    name: "Tharindu Silva",
    avatar: "https://img.freepik.com/free-photo/front-view-smiley-man-posing_23-2149512425.jpg?semt=ais_hybrid&w=740&q=80",
    time: "4 months ago",
    rating: 5,
    text: "Best travel agency for spiritual tours in Sri Lanka! The 10-day Dambadiva package was value for money. Friendly drivers, knowledgeable guides, and beautiful accommodations. 10/10!",
  },
  {
    name: "Amali Jayasinghe",
    avatar: "https://img.freepik.com/free-photo/young-beautiful-smiling-female-trendy-summer-white-dress-sexy-carefree-woman-posing-near-blue-wall-studio-positive-model-having-fun-cheerful-happy-isolated_158538-25710.jpg?semt=ais_user_personalization&w=740&q=80",
    time: "2 months ago",
    rating: 4.5,
    text: "Wonderful experience on the outbound pilgrimage tour. Everything was well-planned, though one long drive was tiring. Still, the spiritual vibes and team support made it memorable.",
  },
  {
    name: "Ravindu Mendis",
    avatar: "https://thumbs.dreamstime.com/b/sri-lanka-man-25045564.jpg",
    time: "5 months ago",
    rating: 5,
    text: "Took my elderly parents on the Dambadiva yatra — Indu Travels handled wheelchairs, special meals, and easy pacing perfectly. We all came back spiritually refreshed!",
  },
  {
    name: "Sachini Weerakoon",
    avatar: "https://img.freepik.com/free-photo/woman-doing-close-up-photoshoot-studio_53876-14476.jpg?semt=ais_user_personalization&w=740&q=80",
    time: "3 weeks ago",
    rating: 5,
    text: "Incredible service! The guides explained every historical and religious aspect beautifully. Felt truly connected during the Dambadiva sacred sites visits. Will definitely book again.",
  },
  {
    name: "Dhanushka Ratnayake",
    avatar: "https://c8.alamy.com/comp/DWHTFA/portrait-of-young-happy-sri-lankan-man-DWHTFA.jpg", // reuse or swap
    time: "4 months ago",
    rating: 5,
    text: "VIP treatment from start to finish. Comfortable transport, delicious food, and very caring staff. Dambadiva tour was the highlight of our year!",
  },
  {
    name: "Ishara de Silva",
    avatar: "https://img.freepik.com/free-photo/front-view-indian-man-posing-studio_23-2150692695.jpg?semt=ais_hybrid&w=740&q=80", // [image:3] reuse
    time: "2 months ago",
    rating: 5,
    text: "Professional and heartfelt service. Joined as a solo traveler and never felt alone. The group dynamics and spiritual sessions were amazing.",
  },
  {
    name: "Pubudu Kumari",
    avatar: "https://img.freepik.com/free-photo/young-beautiful-smiling-female-trendy-summer-white-dress-sexy-carefree-woman-posing-near-blue-wall-studio-positive-model-having-fun-cheerful-happy-isolated_158538-25710.jpg?semt=ais_user_personalization&w=740&q=80",
    time: "1 month ago",
    rating: 4.5,
    text: "Great organization for a large family group. Minor delay on one day but overall a fantastic pilgrimage experience with Indu Sri Lanka Travels.",
  },
];



const ReviewsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1C2D] mb-4">
            What Our Guests Say About Us ✨
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            We take pride in providing unforgettable experiences for our guests. Here's what some of our happy travelers have to say about their journey with us.
          </p>
        </div>

        {/* Overall rating summary - unchanged */}
        <div className="flex flex-col items-center mb-10">
          <div className="flex items-center gap-2">
            <span className="text-4xl font-bold text-green-600">GOOD</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
          </div>
          <p className="text-gray-600 mt-2 text-lg">
            ★★★★★ Based on 92 reviews
          </p>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-blue-600 font-semibold">Google</span>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="Google"
              className="h-6 w-6"
            />
          </div>
        </div>

        {/* Swiper - Continuous auto-scroll marquee */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView="auto"
          loop={true}
          freeMode={{
            enabled: true,
            momentum: false,           // prevents extra momentum after drag
          }}
          autoplay={{
            delay: 1,                  // very small delay → almost continuous
            disableOnInteraction: false, // NEVER stops, even after touch/drag
            pauseOnMouseEnter: false,  // no pause on hover (set true if you want pause)
          }}
          speed={10000}                // higher = slower & smoother (adjust 6000-15000)
          grabCursor={true}
          allowTouchMove={true}        // still draggable
          className="!pb-8"
        >
          {reviews.map((review, index) => (
            <SwiperSlide
              key={index}
              className="!w-80 sm:!w-96"  // fixed width per slide (matches your cards)
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 h-full">
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-gray-200"
                    />
                    <div>
                      <h4 className="font-bold text-[#0B1C2D]">{review.name}</h4>
                      <p className="text-sm text-gray-500">{review.time}</p>
                    </div>
                  </div>

                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${i < Math.floor(review.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                    {review.rating % 1 !== 0 && (
                      <Star className="h-5 w-5 text-yellow-400 fill-yellow-400 opacity-50" />
                    )}
                  </div>

                  <p className="text-gray-700 leading-relaxed text-base">
                    "{review.text}"
                  </p>
                </div>

                <div className="bg-gray-50 px-6 py-3 flex items-center justify-between text-sm">
                  <span className="text-blue-600 font-medium">Google Review</span>
                  <span className="text-green-600">✓ Verified</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ReviewsSection;