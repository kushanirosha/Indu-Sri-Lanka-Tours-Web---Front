import PD1 from "../public/Popularplaces/1.webp";
import PD2 from "../public/Popularplaces/2.webp";
import PD3 from "../public/Popularplaces/3.webp";
import PD4 from "../public/Popularplaces/4.webp";
import PD5 from "../public/Popularplaces/5.webp";
import PD6 from "../public/Popularplaces/6.webp";
import PD7 from "../public/Popularplaces/7.webp";
import PD8 from "../public/Popularplaces/8.webp";
import PD9 from "../public/Popularplaces/9.webp";
import PD10 from "../public/Popularplaces/10.webp";
import PD11 from "../public/Popularplaces/11.webp";
import PD12 from "../public/Popularplaces/12.webp";

//export interface Tour {
//  id: string;
//  title: string;
//  destination: string;
//  country: string;
//  duration: string;
//  price: number;
//  image: string;
//  description: string;
//  highlights: string[];
//  includes: string[];
//  excludes: string[];
//  itinerary: { day: number; title: string; description: string }[];
//  category: string;
//  rating: number;
//  bestseller?: boolean;
//  featured?: boolean;
//  discount?: number;
//}

export interface Tour {
  id: string;
  title: string | { en: string; si: string };
  destination: string | { en: string; si: string };
  country: string;
  duration: string | { en: string; si: string };
  price?: number;
  priceOptions?: Array<{
    label: string | { en: string; si: string };
    price: number;
  }>;
  image: string;
  brochure?: string;
  description: string | { en: string; si: string };
  highlights: string[] | { en: string[]; si: string[] };
  includes: string[] | { en: string[]; si: string[] };
  excludes: string[] | { en: string[]; si: string[] };
  itinerary?: Array<{
    day: number;
    title: string | { en: string; si: string };
    description: string | { en: string; si: string };
  }>;
  departures: string[];
  importantNotes?: string[] | { en: string[]; si: string[] };
  category: string;
  rating: number;
  featured: boolean;
}

export interface Destination {
  id: string;
  name: string;
  country: string;
  image: string;
  description: string;
  tourCount: number;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface Locations {
  id: string;
  name: string;
  imageUrl: string;
  slug: string;
}

export const popularDestinations: Locations[] = [
  {
    id: '1',
    name: 'Bodhgaya',
    imageUrl: PD1,
    slug: 'goa-beaches',
  },
  {
    id: '2',
    name: 'Sarnath',
    imageUrl: PD2,
    slug: 'taj-mahal-agra',
  },
  {
    id: '3',
    name: 'Kushinagar',
    imageUrl: PD3,
    slug: 'jaipur',
  },
  {
    id: '4',
    name: 'Lumbini',
    imageUrl: PD4,
    slug: 'kerala-backwaters',
  },
  {
    id: '5',
    name: 'Jetavana Monastery',
    imageUrl: PD5,
    slug: 'varanasi',
  },
  {
    id: '6',
    name: 'Shravasti',
    imageUrl: PD6,
    slug: 'manali',
  },
  {
    id: '7',
    name: 'Kapilavastu',
    imageUrl: PD7,
    slug: 'ladakh',
  },
  {
    id: '8',
    name: 'Vaishali',
    imageUrl: PD8,
    slug: 'rishikesh',
  },
  {
    id: '9',
    name: 'Varanasi',
    imageUrl: PD9,
    slug: 'udaipur',
  },
  {
    id: '10',
    name: 'Andaman Islands',
    imageUrl: PD10,
    slug: 'andaman-islands',
  },
  {
    id: '11',
    name: 'Taj Mahal',
    imageUrl: PD11,
    slug: 'darjeeling',
  },
  {
    id: '12',
    name: 'Ayodhya Ram Temple',
    imageUrl: PD12, 
    slug: 'ayodhya',
  },
];

export const categories: Category[] = [
  { id: '1', name: 'Honeymoon', icon: 'Heart', description: 'Romantic getaways for couples' },
  { id: '2', name: 'Family', icon: 'Users', description: 'Perfect trips for families' },
  { id: '3', name: 'Adventure', icon: 'Mountain', description: 'Thrilling experiences' },
  { id: '4', name: 'Group Tours', icon: 'UsersRound', description: 'Travel with groups' },
  { id: '5', name: 'Luxury', icon: 'Crown', description: 'Premium experiences' },
  { id: '6', name: 'Budget', icon: 'Wallet', description: 'Affordable packages' },
];

export const destinations: Destination[] = [
  {
    id: 'thailand',
    name: 'Thailand',
    country: 'Thailand',
    image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Discover the land of smiles with stunning beaches, ancient temples, and vibrant street markets.',
    tourCount: 15,
  },
  {
    id: 'vietnam',
    name: 'Vietnam',
    country: 'Vietnam',
    image: 'https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Experience rich culture, breathtaking landscapes, and delicious cuisine.',
    tourCount: 12,
  },
  {
    id: 'malaysia',
    name: 'Malaysia',
    country: 'Malaysia',
    image: 'https://images.pexels.com/photos/1470405/pexels-photo-1470405.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Modern cities, pristine beaches, and lush rainforests await.',
    tourCount: 10,
  },
  {
    id: 'singapore',
    name: 'Singapore',
    country: 'Singapore',
    image: 'https://images.pexels.com/photos/2354054/pexels-photo-2354054.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'A futuristic city-state with world-class attractions and cuisine.',
    tourCount: 8,
  },
  {
    id: 'uae',
    name: 'UAE',
    country: 'United Arab Emirates',
    image: 'https://images.pexels.com/photos/1470502/pexels-photo-1470502.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Luxury, desert adventures, and iconic architecture in Dubai and Abu Dhabi.',
    tourCount: 14,
  },
  {
    id: 'turkey',
    name: 'Turkey',
    country: 'Turkey',
    image: 'https://images.pexels.com/photos/1612351/pexels-photo-1612351.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Where East meets West - ancient history and stunning landscapes.',
    tourCount: 11,
  },
  {
    id: 'egypt',
    name: 'Egypt',
    country: 'Egypt',
    image: 'https://images.pexels.com/photos/262780/pexels-photo-262780.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Explore ancient pyramids, pharaohs, and the mighty Nile River.',
    tourCount: 9,
  },
  {
    id: 'china',
    name: 'China',
    country: 'China',
    image: 'https://images.pexels.com/photos/1557960/pexels-photo-1557960.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Ancient civilization meets modern marvels in this vast country.',
    tourCount: 13,
  },
  {
    id: 'india',
    name: 'India',
    country: 'India',
    image: 'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Colorful culture, diverse landscapes, and spiritual experiences.',
    tourCount: 16,
  },
];

//export const tours: Tour[] = [
//  {
//    id: 'tour-1',
//    title: 'Sacred Buddhist Pilgrimage Tour – India',
//    destination: 'Bodhgaya, Sarnath, Kushinagar, Lumbini',
//    country: 'India',
//    duration: '12 Days / 11 Nights',
//    price: 239000,
//    image: 'https://t3.ftcdn.net/jpg/01/40/69/32/360_F_140693217_CAzgOW3Bey6QoSqr7HBb3fxIdydVAb7D.jpg',
//    description: 'Experience a spiritual and meaningful journey through the most sacred Buddhist pilgrimage sites in India and Nepal. Visit the places connected to the life of Lord Buddha including Enlightenment, First Sermon, Parinirvana, and Birthplace with comfortable travel and guided support.',
//    highlights: [
//      'Visit the Sacred Mahabodhi Temple – Bodhgaya',
//      'Explore Sarnath – The First Sermon Place',
//      'Worship at Kushinagar – Parinirvana Site',
//      'Visit Lumbini – Birthplace of Lord Buddha',
//      'Special Pooja Programs and Blessings',
//      'Comfortable hotels, meals, and transport included',
//    ],
//    includes: [
//      'Air Ticket Assistance',
//      'Visa Support',
//      'Hotel Accommodation (Double Sharing)',
//      'Daily Breakfast & Meals',
//      'Airport Transfers',
//      'Private Transportation',
//      'Sightseeing Tours',
//      'Experienced Tour Guide',
//      'Special Religious Programs',
//    ],
//    excludes: [
//      'Personal Expenses',
//      'Extra Meals & Drinks',
//      'Travel Insurance',
//      'Optional Activities',
//      'Tips and Porter Charges',
//    ],
//    itinerary: [
//      { day: 1, title: 'Arrival in India', description: 'Arrive at the airport and transfer to the hotel.' },
//      { day: 2, title: 'Bodhgaya Pilgrimage', description: 'Visit Mahabodhi Temple, Bodhi Tree, and sacred surroundings.' },
//      { day: 3, title: 'Rajgir & Nalanda Tour', description: 'Explore Rajgir, Vulture Peak, and Nalanda University ruins.' },
//      { day: 4, title: 'Travel to Sarnath', description: 'Visit Sarnath Temple, Dhamek Stupa, and museum.' },
//      { day: 5, title: 'Kushinagar Visit', description: 'Pilgrimage to the Parinirvana Temple and Ramabhar Stupa.' },
//      { day: 6, title: 'Shravasti Tour', description: 'Visit Jetavana Monastery and Ananda Bodhi Tree.' },
//      { day: 7, title: 'Lumbini (Nepal)', description: 'Visit the birthplace of Lord Buddha and Maya Devi Temple.' },
//      { day: 8, title: 'Kapilavastu Excursion', description: 'Explore ancient Kapilavastu kingdom ruins.' },
//      { day: 9, title: 'Vaishali Visit', description: 'Visit important Buddhist heritage sites in Vaishali.' },
//      { day: 10, title: 'Return Journey', description: 'Travel back with sightseeing stops.' },
//      { day: 11, title: 'Free Day & Shopping', description: 'Relax, spiritual activities, and local shopping.' },
//      { day: 12, title: 'Departure', description: 'Check out and transfer to the airport for departure.' },
//    ],
//    category: 'Buddhist Pilgrimage',
//    rating: 5,
//    bestseller: true,
//    featured: true,
//  },
//  {
//    id: 'tour-2',
//    title: 'Grand Buddhist Pilgrimage Tour – India',
//    destination: 'Bodhgaya, Sarnath, Kushinagar, Shravasti, Lumbini, Kapilavastu',
//    country: 'India',
//    duration: '21 Days / 20 Nights',
//    price: 189500,
//    image: 'https://lumbinidevtrust.gov.np/upload_file/images/post/1742239450_1028830086_Parbjaya%20500%20jana%20%20(4).JPG',
//    description: 'Join our special 21 Days Grand Buddhist Pilgrimage Tour covering the most sacred Buddhist heritage sites across India and Nepal. This long spiritual journey is designed for devotees who wish to visit all major places connected with the life of Lord Buddha, including enlightenment, first sermon, parinirvana, and birthplace. Enjoy a well-organized tour with comfortable accommodation, transport, meals, and experienced guidance throughout the trip.',
//    highlights: [
//      'Complete Buddhist pilgrimage across India & Nepal',
//      'Visit Bodhgaya – Place of Enlightenment',
//      'Explore Sarnath – First Sermon Site',
//      'Worship at Kushinagar – Parinirvana Place',
//      'Visit Shravasti & Jetavana Monastery',
//      'Lumbini – Birthplace of Lord Buddha',
//      'Kapilavastu – Ancient Kingdom of Prince Siddhartha',
//      'Special Pooja programs and blessings',
//      'Comfortable hotels and full travel facilities',
//    ],
//    includes: [
//      'Air Ticket Assistance',
//      'Visa Support',
//      'Hotel Accommodation (Double Sharing)',
//      'Daily Meals (Breakfast + Main Meals)',
//      'Private Transport & Transfers',
//      'Sightseeing at All Pilgrimage Sites',
//      'Experienced Tour Guide',
//      'Special Religious Programs',
//      'Entry Fees for Main Locations',
//    ],
//    excludes: [
//      'Personal Expenses',
//      'Extra Drinks & Snacks',
//      'Travel Insurance',
//      'Optional Tours',
//      'Tips and Porter Charges',
//    ],
//    itinerary: [
//      { day: 1, title: 'Arrival in India', description: 'Arrival and transfer to hotel.' },
//      { day: 2, title: 'Bodhgaya Pilgrimage (Day 1)', description: 'Visit Mahabodhi Temple, Bodhi Tree, Sujata Temple.' },
//      { day: 3, title: 'Bodhgaya Pilgrimage (Day 2)', description: 'Continue exploring Bodhgaya sacred sites and surroundings.' },
//      { day: 4, title: 'Bodhgaya Pilgrimage (Day 3)', description: 'More pilgrimage visits and spiritual activities in Bodhgaya.' },
//      { day: 5, title: 'Rajgir & Nalanda (Day 1)', description: 'Visit Vulture Peak and Buddhist sacred locations.' },
//      { day: 6, title: 'Rajgir & Nalanda (Day 2)', description: 'Explore Nalanda ruins and nearby historical areas.' },
//      { day: 7, title: 'Sarnath & Varanasi (Day 1)', description: 'Visit Dhamek Stupa, museum and key Sarnath attractions.' },
//      { day: 8, title: 'Sarnath & Varanasi (Day 2)', description: 'Enjoy Varanasi sightseeing including Ganga visit.' },
//      { day: 9, title: 'Kushinagar (Day 1)', description: 'Visit Parinirvana Temple and sacred stupas.' },
//      { day: 10, title: 'Kushinagar (Day 2)', description: 'Continue Kushinagar pilgrimage and temple visits.' },
//      { day: 11, title: 'Shravasti (Day 1)', description: 'Visit Jetavana Monastery and sacred Buddhist sites.' },
//      { day: 12, title: 'Shravasti (Day 2)', description: 'Explore remaining holy sites and spiritual areas.' },
//      { day: 13, title: 'Lumbini (Nepal) (Day 1)', description: 'Visit Maya Devi Temple and sacred birthplace sites.' },
//      { day: 14, title: 'Lumbini (Nepal) (Day 2)', description: 'Explore monasteries and spiritual heritage locations.' },
//      { day: 15, title: 'Kapilavastu (Day 1)', description: 'Visit ancient palace ruins and pilgrimage locations.' },
//      { day: 16, title: 'Kapilavastu (Day 2)', description: 'Continue exploring Kapilavastu heritage sites.' },
//      { day: 17, title: 'Vaishali & Patna (Day 1)', description: 'Visit important Buddhist history locations in Vaishali.' },
//      { day: 18, title: 'Vaishali & Patna (Day 2)', description: 'Explore Patna and surrounding Buddhist heritage sites.' },
//      { day: 19, title: 'Free Day & Spiritual Activities', description: 'Rest, meditation, spiritual activities, and shopping.' },
//      { day: 20, title: 'Return Journey', description: 'Travel back with sightseeing stops.' },
//      { day: 21, title: 'Departure', description: 'Check out and airport transfer.' },
//    ],
//    category: 'Buddhist Pilgrimage',
//    rating: 5,
//    bestseller: true,
//    featured: true,
//  },
//  {
//    id: 'tour-3',
//    title: 'Thailand Bangkok & Pattaya Tour',
//    destination: 'Bangkok, Pattaya, Coral Island, Ayutthaya',
//    country: 'Thailand',
//    duration: '06 Days / 05 Nights',
//    price: 249000,
//    image: 'https://cdn.forevervacation.com/uploads/blog/thailand-visitor-guide-things-to-do-4406.jpg',
//    description: 'Experience the perfect blend of vibrant city life, serene beaches, and ancient history with our 06 Days / 05 Nights Thailand Tour. From the bustling streets of Bangkok to the crystal-clear waters of Coral Island and the sacred ruins of Ayutthaya, this journey is designed for those seeking both adventure and spiritual enrichment. Enjoy a seamless travel experience provided by Indu Sri Lanka Tour Organization, featuring private speed boat tours, majestic temple visits, and world-class entertainment.',
//    highlights: [
//      'Coral Island Tour via private speed boat',
//      'Big Buddha Temple & Pattaya Viewpoint',
//      'Elephant & Cultural Shows with a Botanical Garden visit',
//      'Ayutthaya Ancient Kingdom exploration (UNESCO sites)',
//      'Chao Phraya River Cruise with international buffet and live music',
//      'Spiritual Visits to Wat Trimit, Wat Saket, and Dhammakaya Temple',
//      'Safari World & Marine Park adventure',
//      'Dedicated Shopping Day in Bangkok',
//    ],
//    includes: [
//      'Flight & Visa Assistance',
//      'Accommodation (05 Nights stay in comfortable hotels)',
//      'Private speed boat and air-conditioned vehicle transfers',
//      'Daily meals including International Buffet Cruise',
//      'Sightseeing entry tickets for all locations in itinerary',
//      'Tickets for Elephant and Cultural shows',
//    ],
//    excludes: [
//      'Personal Expenses (Laundry, Telephone, etc.)',
//      'Extra Drinks & Snacks',
//      'Travel Insurance',
//      'Tips for guides and drivers',
//    ],
//    itinerary: [
//      { day: 1, title: 'Arrival & Island Adventure', description: 'Arrival and transfer to Pattaya. Coral Island tour by private speed boat.' },
//      { day: 2, title: 'Pattaya Landmarks & Culture', description: 'Visit Big Buddha Temple and Pattaya Viewpoint. Gems Gallery Tram Ride. Elephant Show and Cultural Performances. Visit to the Botanical Garden.' },
//      { day: 3, title: 'Wildlife & Marine Life', description: 'Full day at Safari World & Marine Park.' },
//      { day: 4, title: 'Ancient Kingdom of Ayutthaya', description: 'Explore Ayutthaya Ancient Kingdom. Visit Wat Yai Chaimongkhon, Wat Phra Mahathat, Wat Lokayasutharam, and Wat Chaiwatthanaram. Visit Dhammakaya Temple.' },
//      { day: 5, title: 'Bangkok Temples & Dinner Cruise', description: 'City tour including Wat Traimit, Wat Saket, and Wat Pho. Evening Chao Phraya River Cruise with international buffet and live music.' },
//      { day: 6, title: 'Shopping & Departure', description: 'Free day for shopping in Bangkok malls and markets. Transfer to airport for departure.' },
//    ],
//    category: 'Leisure & Sightseeing',
//    rating: 5,
//    bestseller: true,
//    featured: true,
//  }

//  //{
//  //  id: 'tour-4',
//  //  title: 'Dubai Luxury Escape',
//  //  destination: 'Dubai, Abu Dhabi',
//  //  country: 'UAE',
//  //  duration: '5 Days / 4 Nights',
//  //  price: 1599,
//  //  image: 'https://images.pexels.com/photos/1470502/pexels-photo-1470502.jpeg?auto=compress&cs=tinysrgb&w=800',
//  //  description: 'Experience luxury and adventure in the UAE with world-class attractions and desert safaris.',
//  //  highlights: [
//  //    'Burj Khalifa observation deck',
//  //    'Desert safari with BBQ dinner',
//  //    'Dubai Marina cruise',
//  //    'Abu Dhabi city tour',
//  //    'Shopping at Dubai Mall',
//  //  ],
//  //  includes: ['5-star hotel', 'Daily breakfast', 'Tours and transfers', 'Desert safari', 'Entrance tickets'],
//  //  excludes: ['Flights', 'Lunch and dinner', 'Optional activities', 'Shopping'],
//  //  itinerary: [
//  //    { day: 1, title: 'Arrival Dubai', description: 'Airport transfer, hotel check-in, evening at leisure.' },
//  //    { day: 2, title: 'Dubai City Tour', description: 'Burj Khalifa, Dubai Mall, Marina, and old Dubai.' },
//  //    { day: 3, title: 'Desert Safari', description: 'Dune bashing, camel ride, BBQ dinner with entertainment.' },
//  //    { day: 4, title: 'Abu Dhabi Tour', description: 'Sheikh Zayed Mosque, Emirates Palace, Louvre Museum.' },
//  //    { day: 5, title: 'Departure', description: 'Free time for shopping, airport transfer.' },
//  //  ],
//  //  category: 'Luxury',
//  //  rating: 5,
//  //  bestseller: true,
//  //},
//  //{
//  //  id: 'tour-5',
//  //  title: 'Ancient Egypt Explorer',
//  //  destination: 'Cairo, Luxor, Aswan',
//  //  country: 'Egypt',
//  //  duration: '8 Days / 7 Nights',
//  //  price: 1799,
//  //  image: 'https://images.pexels.com/photos/262780/pexels-photo-262780.jpeg?auto=compress&cs=tinysrgb&w=800',
//  //  description: 'Journey through ancient Egypt visiting pyramids, temples, and cruising the Nile River.',
//  //  highlights: [
//  //    'Pyramids of Giza and Sphinx',
//  //    'Egyptian Museum treasures',
//  //    'Nile River cruise',
//  //    'Valley of the Kings',
//  //    'Karnak and Luxor temples',
//  //  ],
//  //  includes: ['Hotels and cruise', 'All meals', 'Egyptologist guide', 'Entrance fees', 'Domestic flights'],
//  //  excludes: ['International flights', 'Visa fees', 'Optional tours', 'Tips'],
//  //  itinerary: [
//  //    { day: 1, title: 'Arrive Cairo', description: 'Airport meet and transfer to hotel.' },
//  //    { day: 2, title: 'Pyramids Tour', description: 'Giza pyramids, Sphinx, and Memphis.' },
//  //    { day: 3, title: 'Egyptian Museum', description: 'Museum visit, Khan el-Khalili bazaar.' },
//  //    { day: 4, title: 'Fly to Aswan', description: 'Philae Temple, High Dam, board cruise.' },
//  //    { day: 5, title: 'Kom Ombo & Edfu', description: 'Temple visits while sailing to Luxor.' },
//  //    { day: 6, title: 'Luxor West Bank', description: 'Valley of the Kings, Hatshepsut Temple.' },
//  //    { day: 7, title: 'Luxor East Bank', description: 'Karnak and Luxor temples, fly to Cairo.' },
//  //    { day: 8, title: 'Departure', description: 'Transfer to airport for international flight.' },
//  //  ],
//  //  category: 'Adventure',
//  //  rating: 5,
//  //  featured: true,
//  //},
//  //{
//  //  id: 'tour-6',
//  //  title: 'Turkey Heritage Tour',
//  //  destination: 'Istanbul, Cappadocia, Pamukkale',
//  //  country: 'Turkey',
//  //  duration: '7 Days / 6 Nights',
//  //  price: 1399,
//  //  image: 'https://images.pexels.com/photos/1612351/pexels-photo-1612351.jpeg?auto=compress&cs=tinysrgb&w=800',
//  //  description: 'Discover Turkey\'s rich history, stunning landscapes, and unique experiences.',
//  //  highlights: [
//  //    'Hot air balloon in Cappadocia',
//  //    'Hagia Sophia and Blue Mosque',
//  //    'Underground cities',
//  //    'Pamukkale thermal pools',
//  //    'Bosphorus cruise',
//  //  ],
//  //  includes: ['4-star hotels', 'Daily breakfast', 'Internal flights', 'Guided tours', 'Entrance fees'],
//  //  excludes: ['International flights', 'Lunch and dinner', 'Balloon ride', 'Travel insurance'],
//  //  itinerary: [
//  //    { day: 1, title: 'Arrive Istanbul', description: 'Airport transfer and hotel check-in.' },
//  //    { day: 2, title: 'Istanbul Old City', description: 'Hagia Sophia, Blue Mosque, Topkapi Palace.' },
//  //    { day: 3, title: 'Bosphorus & Fly to Cappadocia', description: 'Cruise and evening flight.' },
//  //    { day: 4, title: 'Cappadocia Tour', description: 'Goreme Valley, underground city, fairy chimneys.' },
//  //    { day: 5, title: 'Pamukkale', description: 'Drive to Pamukkale, thermal terraces visit.' },
//  //    { day: 6, title: 'Pamukkale to Istanbul', description: 'Fly back to Istanbul, Grand Bazaar shopping.' },
//  //    { day: 7, title: 'Departure', description: 'Transfer to airport.' },
//  //  ],
//  //  category: 'Adventure',
//  //  rating: 5,
//  //},
//  //{
//  //  id: 'tour-7',
//  //  title: 'China Discovery',
//  //  destination: 'Beijing, Xi\'an, Shanghai',
//  //  country: 'China',
//  //  duration: '9 Days / 8 Nights',
//  //  price: 1999,
//  //  image: 'https://images.pexels.com/photos/1557960/pexels-photo-1557960.jpeg?auto=compress&cs=tinysrgb&w=800',
//  //  description: 'Experience China\'s ancient wonders and modern cities on this comprehensive tour.',
//  //  highlights: [
//  //    'Great Wall of China',
//  //    'Terracotta Warriors',
//  //    'Forbidden City',
//  //    'Shanghai skyline',
//  //    'Traditional Chinese cuisine',
//  //  ],
//  //  includes: ['Hotels', 'Daily breakfast', 'High-speed train', 'Guided tours', 'Entry tickets'],
//  //  excludes: ['International flights', 'China visa', 'Lunch and dinner', 'Personal expenses'],
//  //  itinerary: [
//  //    { day: 1, title: 'Arrive Beijing', description: 'Airport pickup and hotel transfer.' },
//  //    { day: 2, title: 'Great Wall', description: 'Visit Mutianyu section of Great Wall.' },
//  //    { day: 3, title: 'Beijing Highlights', description: 'Forbidden City, Tiananmen Square, Temple of Heaven.' },
//  //    { day: 4, title: 'Train to Xi\'an', description: 'High-speed train, city wall bike tour.' },
//  //    { day: 5, title: 'Terracotta Warriors', description: 'Full day at archaeological site.' },
//  //    { day: 6, title: 'Xi\'an to Shanghai', description: 'Flight to Shanghai, evening river cruise.' },
//  //    { day: 7, title: 'Shanghai Modern', description: 'The Bund, Pudong district, Oriental Pearl Tower.' },
//  //    { day: 8, title: 'Shanghai Culture', description: 'Yuyuan Garden, old town, acrobatic show.' },
//  //    { day: 9, title: 'Departure', description: 'Transfer to Pudong airport.' },
//  //  ],
//  //  category: 'Group Tours',
//  //  rating: 5,
//  //  featured: true,
//  //},
//  //{
//  //  id: 'tour-8',
//  //  title: 'Vietnam Highlights',
//  //  destination: 'Hanoi, Halong Bay, Hoi An, Ho Chi Minh',
//  //  country: 'Vietnam',
//  //  duration: '10 Days / 9 Nights',
//  //  price: 1499,
//  //  image: 'https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=800',
//  //  description: 'Complete Vietnam experience from north to south with cultural and natural wonders.',
//  //  highlights: [
//  //    'Halong Bay cruise',
//  //    'Hoi An ancient town',
//  //    'Mekong Delta tour',
//  //    'Cu Chi tunnels',
//  //    'Vietnamese cooking class',
//  //  ],
//  //  includes: ['Accommodation', 'Breakfast daily', 'Domestic flights', 'Cruise', 'Tours and guide'],
//  //  excludes: ['International flights', 'Vietnam visa', 'Meals', 'Tips', 'Personal expenses'],
//  //  itinerary: [
//  //    { day: 1, title: 'Arrive Hanoi', description: 'Airport transfer, old quarter walk.' },
//  //    { day: 2, title: 'Hanoi City Tour', description: 'Ho Chi Minh complex, Temple of Literature, water puppet show.' },
//  //    { day: 3, title: 'Halong Bay Cruise', description: 'Full day cruise with cave visit and kayaking.' },
//  //    { day: 4, title: 'Fly to Da Nang', description: 'Transfer to Hoi An, ancient town exploration.' },
//  //    { day: 5, title: 'Hoi An Free Day', description: 'Beach time, cycling, or tailor shopping.' },
//  //    { day: 6, title: 'My Son Sanctuary', description: 'Ancient Cham ruins excursion.' },
//  //    { day: 7, title: 'Fly to Ho Chi Minh', description: 'City arrival, evening street food tour.' },
//  //    { day: 8, title: 'Cu Chi Tunnels', description: 'Half day tour of war tunnels.' },
//  //    { day: 9, title: 'Mekong Delta', description: 'Full day boat tour of river and villages.' },
//  //    { day: 10, title: 'Departure', description: 'Morning market visit, airport transfer.' },
//  //  ],
//  //  category: 'Adventure',
//  //  rating: 5,
//  //  bestseller: true,
//  //},
//  //{
//  //  id: 'tour-9',
//  //  title: 'Malaysia Wonders',
//  //  destination: 'Kuala Lumpur, Penang, Langkawi',
//  //  country: 'Malaysia',
//  //  duration: '6 Days / 5 Nights',
//  //  price: 999,
//  //  image: 'https://images.pexels.com/photos/1470405/pexels-photo-1470405.jpeg?auto=compress&cs=tinysrgb&w=800',
//  //  description: 'Experience Malaysia\'s modern cities, cultural heritage, and tropical islands.',
//  //  highlights: [
//  //    'Petronas Twin Towers',
//  //    'Batu Caves',
//  //    'Penang street food',
//  //    'Langkawi island hopping',
//  //    'Sky bridge and cable car',
//  //  ],
//  //  includes: ['Hotels', 'Breakfast', 'Domestic flights', 'Tours', 'Transfers'],
//  //  excludes: ['International flights', 'Lunch and dinner', 'Optional activities', 'Travel insurance'],
//  //  itinerary: [
//  //    { day: 1, title: 'Arrive Kuala Lumpur', description: 'Airport transfer and city evening tour.' },
//  //    { day: 2, title: 'KL City Tour', description: 'Petronas Towers, Batu Caves, shopping.' },
//  //    { day: 3, title: 'Fly to Penang', description: 'Georgetown heritage walk, street food.' },
//  //    { day: 4, title: 'Penang Hill', description: 'Funicular ride, temples, and beaches.' },
//  //    { day: 5, title: 'Langkawi', description: 'Ferry to Langkawi, sky bridge, cable car.' },
//  //    { day: 6, title: 'Departure', description: 'Island hopping tour, fly back to KL.' },
//  //  ],
//  //  category: 'Family',
//  //  rating: 4,
//  //},
//  //{
//  //  id: 'tour-10',
//  //  title: 'Singapore City Break',
//  //  destination: 'Singapore',
//  //  country: 'Singapore',
//  //  duration: '4 Days / 3 Nights',
//  //  price: 799,
//  //  image: 'https://images.pexels.com/photos/2354054/pexels-photo-2354054.jpeg?auto=compress&cs=tinysrgb&w=800',
//  //  description: 'Perfect short getaway to explore the Garden City\'s attractions and cuisine.',
//  //  highlights: [
//  //    'Gardens by the Bay',
//  //    'Universal Studios',
//  //    'Marina Bay Sands',
//  //    'Sentosa Island',
//  //    'Hawker food centers',
//  //  ],
//  //  includes: ['4-star hotel', 'Daily breakfast', 'Universal Studios ticket', 'Airport transfers', 'City tour'],
//  //  excludes: ['Flights', 'Lunch and dinner', 'Additional attractions', 'Travel insurance'],
//  //  itinerary: [
//  //    { day: 1, title: 'Arrival', description: 'Airport transfer, Marina Bay area walk.' },
//  //    { day: 2, title: 'Universal Studios', description: 'Full day at theme park, evening Sentosa.' },
//  //    { day: 3, title: 'City Tour', description: 'Gardens by Bay, Chinatown, Little India, Arab Street.' },
//  //    { day: 4, title: 'Departure', description: 'Morning shopping at Orchard Road, airport transfer.' },
//  //  ],
//  //  category: 'Family',
//  //  rating: 5,
//  //  bestseller: true,
//  //},
//];

export const experienceTypes = [
  {
    id: 'beach',
    name: 'Beach Escapes',
    icon: 'Waves',
    image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'cultural',
    name: 'Cultural Tours',
    icon: 'Landmark',
    image: 'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'wildlife',
    name: 'Wildlife & Nature',
    icon: 'Trees',
    image: 'https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'shopping',
    name: 'Shopping Tours',
    icon: 'ShoppingBag',
    image: 'https://images.pexels.com/photos/1470502/pexels-photo-1470502.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'city',
    name: 'City Tours',
    icon: 'Building',
    image: 'https://images.pexels.com/photos/2354054/pexels-photo-2354054.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export const visaCountries = [
  'Thailand', 'Vietnam', 'Malaysia', 'Singapore', 'UAE', 'Turkey',
  'Egypt', 'China', 'India', 'Indonesia', 'Japan', 'South Korea'
];


export const WHATSAPP_NUMBER_LK = "0710151021"; // local format
export const WHATSAPP_NUMBER_E164 = "94710151021"; // for wa.me links

export const tours = [
  {
    id: "tour-1",
    title: {
      en: "Indo–Sri Lanka Buddhist Pilgrimage – 2026 (12 Days)",
      si: "ඉන්දු ශ්‍රී ලංකා බුද්ධ භූමි වන්දනා - 2026 (දින 12 පැකේජය)",
    },
    destination: {
      en: "New Delhi, Bodhgaya, Sarnath (Isipathana), Kushinagar, Shravasti, Lumbini (Nepal), Kapilavastu, Vaishali + more",
      si: "නව දිල්ලිය, බුද්ධගයාව, බරණැස/ඉසිපතන, කුසිනාරාව, සැවැත් නුවර, ලුම්බිණි (නේපාලය), කපිලවස්තු, විශාලා සහ තවත්",
    },
    country: "India / Nepal",
    duration: { en: "12 Days", si: "දින 12" },
    price: 239000,
    image:
      "https://t3.ftcdn.net/jpg/01/40/69/32/360_F_140693217_CAzgOW3Bey6QoSqr7HBb3fxIdydVAb7D.jpg",

    brochure: "/brochures/tour-1.pdf",

    description: {
      en: "A spiritually enriching 12-day Buddhist pilgrimage covering the most sacred places connected with the life of Lord Buddha. Includes flights, luxury AC transport, Sri Lankan-style buffet meals, bottled water, comfortable accommodation, and religious programs including Kiripidu Pooja and Aloka Pooja in Bodhgaya.",
      si: "බුදුරජාණන් වහන්සේගේ ජීවිතයට සම්බන්ධ අති පූජනීය බුද්ධ භූමි රැසක් ආවරණය කරන දින 12ක වන්දනා චාරිකාවකි. ගුවන් ගමන්, AC බස් රථ ගමන්, ශ්‍රී ලංකා ක්‍රමයට ආහාර, බෝතල් කළ වතුර, සුව පහසු නවාතැන් සහ විශේෂ ආගමික වැඩසටහන් ඇතුළත් වේ.",
    },

    highlights: {
      en: [
        "Colombo – Delhi – Colombo by air",
        "Luxury air-conditioned coach transport (AC)",
        "Air-conditioned rooms with hot water (Hot Water)",
        "Sri Lankan-style buffet meals + bottled drinking water",
        "Bodhgaya: Kiripidu Pooja, Sil observance, Sanghika Dana & Special Aloka Pooja",
        "Double Room option available with additional payment",
        "Optional Extension: Sanchi worship tour – 15 Days – LKR 260,000",
      ],
      si: [
        "කොළඹ – දිල්ලිය – කොළඹ ගුවනින්",
        "රට තුළ ගමන් කිරීමට සුව පහසු සුඛෝපභෝගී AC බස් රථ",
        "වායු සමනය කළ උණු වතුර සහිත සුව පහසු නවාතැන්",
        "ශ්‍රී ලංකා ක්‍රමයට ආහාර (බුෆේ) + බෝතල් කළ වතුර",
        "බුද්ධගයාව: කිරිපිඬු පූජාව, සිල් සමාදන් වීම, සාංඝික දානය, විශේෂ ආලෝක පූජාව",
        "Double Room අවශ්‍ය නම් අමතර ගාස්තුවට ලබාගත හැක",
        "සාංචිය වැඳපුදා ගැනීමට අවශ්‍ය බැතිමතුන් සඳහා දින 15 – ගණන 260,000/-",
      ],
    },

    includes: {
      en: [
        "Air ticket assistance",
        "Airport transfers",
        "Private transportation (AC coach)",
        "Hotel accommodation",
        "Sri Lankan-style meals",
        "Bottled water",
        "Religious programs & offerings",
        "Experienced tour guide",
      ],
      si: [
        "ගුවන් ටිකට් සහාය",
        "Airport Transfers",
        "AC Private Transportation",
        "නවාතැන්",
        "ශ්‍රී ලංකා ක්‍රමයට ආහාර",
        "බෝතල් කළ වතුර",
        "ආගමික වැඩසටහන්",
        "අත්දැකීම් සහිත මාර්ගෝපදේශක සේවාව",
      ],
    },

    excludes: {
      en: [
        "Personal expenses",
        "Extra meals & drinks",
        "Travel insurance",
        "Optional activities",
        "Tips & porter charges",
      ],
      si: [
        "පුද්ගලික වියදම්",
        "අමතර ආහාර/පාන",
        "ගමන් රක්ෂණ",
        "විකල්ප ක්‍රියාකාරකම්",
        "Tips සහ Porter ගාස්තු",
      ],
    },

    itinerary: [
      { day: 1, title: { en: "Arrival – New Delhi", si: "පැමිණීම – නව දිල්ලිය" }, description: { en: "Arrival and hotel transfer.", si: "පැමිණීම සහ හෝටලයට ගමන් කිරීම." } },
      { day: 2, title: { en: "Bodhgaya", si: "බුද්ධගයාව" }, description: { en: "Mahabodhi Temple & Sacred Bodhi Tree.", si: "මහාබෝධි විහාරය සහ ශ්‍රී මහා බෝධිය." } },
      { day: 3, title: { en: "Rajgir & Nalanda", si: "රජගහ – නාලන්දා" }, description: { en: "Griddhakuta Peak & Nalanda ruins.", si: "ගිජ්ජකූටය හා නාලන්දා පුරාවස්තු." } },
      { day: 4, title: { en: "Sarnath (Isipathana)", si: "ඉසිපතන – සාරනාත්" }, description: { en: "Dhamek Stupa & main sacred sites.", si: "ධමේක් ස්තූපය හා පූජනීය ස්ථාන." } },
      { day: 5, title: { en: "Kushinagar", si: "කුසිනාරාව" }, description: { en: "Parinirvana Temple & sacred sites.", si: "පිරිනිවන් මංචකය, ආදාහන චෛත්‍ය ඇතුළු ස්ථාන." } },
      { day: 6, title: { en: "Shravasti", si: "සැවැත් නුවර" }, description: { en: "Jetavana & Ananda Bodhi.", si: "ජේතවනාරාමය සහ ආනන්ද බෝධිය." } },
      { day: 7, title: { en: "Lumbini (Nepal)", si: "ලුම්බිණිය (නේපාලය)" }, description: { en: "Maya Devi Temple & birthplace area.", si: "මහාමයා දේවී විහාරය සහ උපන් ස්ථානය." } },
      { day: 8, title: { en: "Kapilavastu", si: "කපිල වස්තු පුර" }, description: { en: "Ancient kingdom ruins.", si: "පුරාණ නගර අවශේෂ." } },
      { day: 9, title: { en: "Vaishali", si: "විශාලා" }, description: { en: "Buddhist heritage sites.", si: "බුද්ධ උරුම ස්ථාන." } },
      { day: 10, title: { en: "Return Journey", si: "ආපසු ගමන" }, description: { en: "Sightseeing stops along the way.", si: "ගමන් මඟදී දර්ශනීය ස්ථාන." } },
      { day: 11, title: { en: "Free Day", si: "නිදහස් දිනය" }, description: { en: "Rest, meditation & shopping.", si: "විවේකය, භාවනා, සාප්පු සවාරි." } },
      { day: 12, title: { en: "Departure", si: "පිටත්වීම" }, description: { en: "Airport transfer and departure.", si: "ගුවන් තොටුපළට ගමන් කර පිටත්වීම." } },
    ],

    departures: [
      "February 15, 2026",
      "March 15, 2026",
      "August 16, 2026",
      "September 20, 2026",
      "October 18, 2026",
      "November 21, 2026 (Kathina Pinkama – Varanasi)",
    ],

    importantNotes: {
      en: [
        "If foreign exchange rates increase or air ticket prices increase before the tour begins, the stated package price may change.",
        "If you cancel the tour, and passport/visa fees or Non-Refundable Air Tickets have already been issued, those costs must be paid.",
      ],
      si: [
        "චාරිකාව ඇරඹීමට පෙර විදේශ විනිමය හෝ ගුවන් ටිකට්පත් මිල වැඩි වුවහොත්, මෙහි සඳහන් මුදල වෙනස් විය හැක.",
        "ඔබ චාරිකාව අවලංගු කරන්නේ නම්, ඒ වන විට වීසා/ගමන් බලපත්‍ර ගාස්තු හෝ Non‑Refundable Air Ticket නිකුත් කර තිබේ නම් එම මුදල් ගෙවිය යුතුය.",
      ],
    },

    category: "Buddhist Pilgrimage",
    rating: 5,
    featured: true,
  },

  {
    id: "tour-2",
    title: {
      en: "Indo–Sri Lanka Buddhist Pilgrimage – 2026 (21 Days)",
      si: "ඉන්දු ශ්‍රී ලංකා බුද්ධ භූමි වන්දනා - 2026 (දින 21 පැකේජය)",
    },
    destination: {
      en: "Chennai, Sanchi, Varanasi, Sarnath, Bodhgaya, Rajgir, Nalanda, Kesariya, Kushinagar, Lumbini (Nepal), Kapilavastu, Shravasti, Sankassa, Agra, New Delhi + more",
      si: "මදුරාසිය (චෙන්නායි), සාංචිය, බරණැස, ඉසිපතන, බුද්ධගයාව, රජගහ, නාලන්දා, කෙසරියා, කුසිනාරාව, ලුම්බිණිය, කපිලවස්තු, සැවැත්, සංකස්ස, අග්‍රා, නව දිල්ලිය සහ තවත්",
    },
    country: "India / Nepal",
    duration: { en: "21 Days", si: "දින 21" },
    price: 189500,
    image:
      "https://lumbinidevtrust.gov.np/upload_file/images/post/1742239450_1028830086_Parbjaya%20500%20jana%20%20(4).JPG",

    brochure: "/brochures/tour-2.pdf",

    description: {
      en: "A complete 21-day pilgrimage across India & Nepal including long-distance train journeys, AC luxury coaches from Sanchi, Sri Lankan-style meals, bottled water, and key religious programs including Sil observance, Sanghika Dana, Bodhi Pooja and Special Aloka Pooja.",
      si: "ඉන්දියාව සහ නේපාලය පුරා ප්‍රධාන බුද්ධ උරුම ස්ථාන රැසක් ආවරණය කරන දින 21ක වන්දනා චාරිකාවකි. දුම්රිය ගමන්, AC බස් රථ, ශ්‍රී ලංකා ක්‍රමයට ආහාර, බෝතල් කළ වතුර, සිල් සමාදන්වීම සහ විශේෂ පූජා වැඩසටහන් ඇතුළත් වේ.",
    },

    highlights: {
      en: [
        "Colombo – Chennai – Colombo by air",
        "Chennai → Sanchi train journey (22 hours) at the start",
        "Delhi → Chennai train journey (48 hours) at the end",
        "Luxury AC coach transport within India (from Sanchi)",
        "Sri Lankan-style meals + bottled drinking water",
        "Varanasi/Bodhgaya/Shravasti: Sil observance & Sanghika Dana",
        "Bodhgaya: Kiripidu Pooja, Bodhi Pooja & Special Aloka Pooja",
        "Shravasti: Ananda Bodhi Bodhi Pooja",
        "Shopping tours included",
        "Optional Change: End tour in New Delhi and return to Sri Lanka by flight (no Delhi→Chennai train) – 17 Days – LKR 220,000",
      ],
      si: [
        "කොළඹ – මදුරාසිය – කොළඹ ගුවනින්",
        "චෙන්නායි සිට සාංචි දක්වා දුම්රිය ගමන (පැය 22) (ආරම්භයේදී)",
        "දිල්ලි සිට චෙන්නායි දක්වා දුම්රිය ගමන (පැය 48) (අවසානයේදී)",
        "සාංචියේ සිට රට තුළ AC බස් රථ ගමන්",
        "ශ්‍රී ලංකා ක්‍රමයට ආහාර + බෝතල් කළ වතුර",
        "බරණැස/බුද්ධගයාව/සැවැත්නුවර සිල් සමාදන්වීම සහ සාංඝික දානය",
        "බුද්ධගයාවේ කිරිපිඩු පූජාව, බෝධි පූජාව සහ විශේෂ ආලෝක පූජාව",
        "සැවැත් නුවර ආනන්ද බෝධිය බෝධි පූජාව",
        "සාප්පු සවාරිද ඇතුළත් වේ",
        "දුම්රිය ගමන නොමැතිව නව දිල්ලියෙන් අවසන් කර ගුවනින් ලංකාවට පැමිණේ නම්: දින 17 – 220,000/-",
      ],
    },

    priceOptions: [
      { label: { en: "Non-AC Train Coach", si: "වායුසමනය නොකළ දුම්රිය මැදිරි" }, price: 189500 },
      { label: { en: "AC Luxury Train Coach", si: "වායු සමනය කළ සුඛෝපභෝගී දුම්රිය මැදිරි" }, price: 199000 },
    ],

    includes: {
      en: [
        "Air ticket assistance",
        "Train journey arrangements (AC / Non-AC)",
        "Hotel accommodation",
        "Sri Lankan-style meals",
        "Bottled water",
        "AC luxury transport (from Sanchi)",
        "Religious programs & offerings",
        "Experienced tour guide",
      ],
      si: [
        "ගුවන් ටිකට් සහාය",
        "දුම්රිය ගමන් (AC/Non‑AC) සකස් කිරීම",
        "නවාතැන්",
        "ශ්‍රී ලංකා ක්‍රමයට ආහාර",
        "බෝතල් කළ වතුර",
        "AC බස් රථ ගමන් (සාංචියේ සිට)",
        "ආගමික වැඩසටහන්",
        "අත්දැකීම් සහිත මාර්ගෝපදේශක සේවාව",
      ],
    },

    excludes: {
      en: ["Personal expenses", "Extra drinks & snacks", "Travel insurance", "Optional tours", "Tips & porter charges"],
      si: ["පුද්ගලික වියදම්", "අමතර පාන/ස්නැක්ස්", "ගමන් රක්ෂණ", "විකල්ප සංචාර", "Tips සහ Porter ගාස්තු"],
    },

    departures: [
      "February 13, 2026",
      "March 13, 2026",
      "August 07, 2026",
      "September 11, 2026",
      "October 09, 2026",
      "November 09, 2026 (Kathina Pinkama – Varanasi)",
    ],

    importantNotes: {
      en: [
        "If foreign exchange rates increase or air ticket prices increase before the tour begins, the stated package price may change.",
        "If you cancel the tour, and passport/visa fees or Non-Refundable Air Tickets have already been issued, those costs must be paid.",
      ],
      si: [
        "චාරිකාව ඇරඹීමට පෙර විදේශ විනිමය හෝ ගුවන් ටිකට්පත් මිල වැඩි වුවහොත්, මෙහි සඳහන් මුදල වෙනස් විය හැක.",
        "ඔබ චාරිකාව අවලංගු කරන්නේ නම්, ඒ වන විට වීසා/ගමන් බලපත්‍ර ගාස්තු හෝ Non‑Refundable Air Ticket නිකුත් කර තිබේ නම් එම මුදල් ගෙවිය යුතුය.",
      ],
    },

    category: "Buddhist Pilgrimage",
    rating: 5,
    featured: true,
  },
];