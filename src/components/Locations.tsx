import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; // only import what we need

import 'swiper/css';                    // core styles
import 'swiper/css/autoplay';           // if you want any extra autoplay styling

import { popularDestinations } from '../data/travelData'; // ← your file name

const Locations = () => {
  const swiperRef = useRef(null);

  return (
    <section className="py-10 md:py-18 bg-gray-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1C2D] mb-3">
            Explore India's Most Popular Destinations
          </h2>
          <p className="text-gray-600 text-lg">
            Discover the iconic places millions of travellers visit every year
          </p>
        </div>

        {/* Swiper Carousel – continuous auto-scroll + infinite loop */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={52}           // matches your original gap-32 (adjust as needed)
          slidesPerView="auto"        // important for variable width + continuous feel
          loop={true}                 // infinite loop
          autoplay={{
            delay: 0,                 // 0 = continuous (no pause)
            disableOnInteraction: false, // keeps going even after drag
            pauseOnMouseEnter: true,  // pause on hover (change to false if you want non-stop)
            reverseDirection: false,  // change to true for right → left scroll
          }}
          speed={4000}                // slower = smoother marquee-like (4000–8000ms good range)
          grabCursor={true}
          freeMode={false}            // false = snap to slides; true = momentum scroll
          // centeredSlides={true}    // optional: center current item
          // loopedSlides={popularDestinations.length} // helps with loop seamlessness
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="!pb-6"           // padding-bottom like your original
        >
          {popularDestinations.map((dest) => (
            <SwiperSlide
              key={dest.id}
              className="!w-44 sm:!w-52 md:!w-60 lg:!w-64" // matches your original widths
            >
              <a
                href={`/destinations/${dest.slug}`}
                className="block group"
              >
                <div className="relative rounded-xl overflow-hidden shadow-md group-hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={dest.imageUrl}
                    alt={dest.name}
                    className="w-full h-44 sm:h-48 md:h-52 object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <p className="mt-3 text-center text-sm md:text-base font-medium text-[#0B1C2D] group-hover:text-[#F4B41A] transition-colors">
                  {dest.name}
                </p>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default Locations;