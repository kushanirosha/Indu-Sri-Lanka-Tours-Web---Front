export interface Tour {
  id: string;
  title: string;
  destination: string;
  country: string;
  duration: string;
  price: number;
  image: string;
  description: string;
  highlights: string[];
  includes: string[];
  excludes: string[];
  itinerary: { day: number; title: string; description: string }[];
  category: string;
  rating: number;
  bestseller?: boolean;
  featured?: boolean;
  discount?: number;
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
    name: 'Goa Beaches',
    imageUrl: 'https://www.shoreexcursionsgroup.com/img/tour/ASGOBEACHBEERTOUR-2.jpg',
    slug: 'goa-beaches',
  },
  {
    id: '2',
    name: 'Taj Mahal, Agra',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Taj_Mahal_%28Edited%29.jpeg',
    slug: 'taj-mahal-agra',
  },
  {
    id: '3',
    name: 'Jaipur Pink City',
    imageUrl: 'https://www.pinkcityroyals.com/assets/images/jaipur-places-pics/Hawa_Mahal_jaipur_pinkcityroyals02.jpg',
    slug: 'jaipur',
  },
  {
    id: '4',
    name: 'Kerala Backwaters',
    imageUrl: 'https://mynatour.org/wp-content/uploads/2015/05/Houseboats_at_Kerala_Backwaters.jpg',
    slug: 'kerala-backwaters',
  },
  {
    id: '5',
    name: 'Varanasi Ghats',
    imageUrl: 'https://varanasismartcity.gov.in//assets/images/images/DashashwamedhGhat.jpg',
    slug: 'varanasi',
  },
  {
    id: '6',
    name: 'Manali Hills',
    imageUrl: 'https://www.tmthpl.com/wp-content/uploads/2023/12/shimla-manali-budget-tour-package.jpg',
    slug: 'manali',
  },
  {
    id: '7',
    name: 'Ladakh Leh',
    imageUrl: 'https://www.felixferiatravel.com/images/1736416900Leh_Ladakh_Image_(18).jpg',
    slug: 'ladakh',
  },
  {
    id: '8',
    name: 'Rishikesh Yoga',
    imageUrl: 'https://adisheshyoga.com/blog/images/rishikesh-yoga-retreat-featured-06.webp',
    slug: 'rishikesh',
  },
  {
    id: '9',
    name: 'Udaipur Lakes',
    imageUrl: 'https://udaipurtourism.co.in/images/places-to-visit/headers/lake-pichola-udaipur-indian-tourism-entry-fee-timings-holidays-reviews-header.jpg',
    slug: 'udaipur',
  },
  {
    id: '10',
    name: 'Andaman Islands',
    imageUrl: 'https://www.andamanislands.com/uploads/andamanislands/blog/main/5fa4011d9f7f4152_how_to_reach_the_andaman_islands.jpeg',
    slug: 'andaman-islands',
  },
  {
    id: '11',
    name: 'Darjeeling Tea',
    imageUrl: 'https://teafloor.com/blog/wp-content/uploads/2021/04/Recipe-of-Darjeeling-Tea.jpeg',
    slug: 'darjeeling',
  },
  {
    id: '12',
    name: 'Ayodhya Ram Temple',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Ram_Janmbhoomi_Mandir%2C_Ayodhya_Dham.jpg', // placeholder - use better one
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

export const tours: Tour[] = [
  {
    id: 'tour-1',
    title: 'Magical Thailand Experience',
    destination: 'Bangkok, Pattaya, Phuket',
    country: 'Thailand',
    duration: '6 Days / 5 Nights',
    price: 899,
    image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Experience the best of Thailand with visits to bustling Bangkok, beautiful beaches of Pattaya, and the tropical paradise of Phuket.',
    highlights: [
      'Visit the Grand Palace and Wat Phra Kaew',
      'Coral Island tour with water sports',
      'Phi Phi Islands excursion',
      'Thai cultural show and dinner',
      'Shopping at floating markets',
    ],
    includes: ['Accommodation', 'Daily breakfast', 'Airport transfers', 'Sightseeing tours', 'Tour guide'],
    excludes: ['International flights', 'Travel insurance', 'Personal expenses', 'Lunch and dinner'],
    itinerary: [
      { day: 1, title: 'Arrival in Bangkok', description: 'Arrive at Bangkok airport, transfer to hotel and check-in.' },
      { day: 2, title: 'Bangkok City Tour', description: 'Visit Grand Palace, Wat Phra Kaew, and floating market.' },
      { day: 3, title: 'Bangkok to Pattaya', description: 'Transfer to Pattaya, visit Coral Island with water activities.' },
      { day: 4, title: 'Pattaya to Phuket', description: 'Fly to Phuket, relax on the beach.' },
      { day: 5, title: 'Phi Phi Islands Tour', description: 'Full day excursion to stunning Phi Phi Islands.' },
      { day: 6, title: 'Departure', description: 'Check out and transfer to airport for departure.' },
    ],
    category: 'Family',
    rating: 5,
    bestseller: true,
    featured: true,
  },
  {
    id: 'tour-2',
    title: 'Incredible India Golden Triangle',
    destination: 'Delhi, Agra, Jaipur',
    country: 'India',
    duration: '5 Days / 4 Nights',
    price: 699,
    image: 'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Explore the famous Golden Triangle circuit covering Delhi, Agra, and Jaipur with iconic monuments.',
    highlights: [
      'Taj Mahal sunrise visit',
      'Red Fort and Qutub Minar',
      'Amber Fort elephant ride',
      'City Palace and Hawa Mahal',
      'Local markets and cuisine',
    ],
    includes: ['4-star hotels', 'Breakfast and dinner', 'AC transportation', 'Monument entry fees', 'English guide'],
    excludes: ['Flights', 'Lunch', 'Camera fees', 'Tips', 'Personal expenses'],
    itinerary: [
      { day: 1, title: 'Arrive Delhi', description: 'Airport pickup and hotel check-in, evening market visit.' },
      { day: 2, title: 'Delhi Sightseeing', description: 'Full day tour of Old and New Delhi highlights.' },
      { day: 3, title: 'Delhi to Agra', description: 'Drive to Agra, visit Taj Mahal at sunset.' },
      { day: 4, title: 'Agra to Jaipur', description: 'Early Taj visit, drive to Jaipur via Fatehpur Sikri.' },
      { day: 5, title: 'Jaipur Tour & Departure', description: 'Amber Fort, City Palace, transfer to Delhi airport.' },
    ],
    category: 'Adventure',
    rating: 5,
    bestseller: true,
  },
  {
    id: 'tour-3',
    title: 'Romantic Bali Honeymoon',
    destination: 'Ubud, Seminyak, Nusa Dua',
    country: 'Indonesia',
    duration: '7 Days / 6 Nights',
    price: 1299,
    image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Perfect honeymoon package with romantic settings, spa treatments, and private excursions.',
    highlights: [
      'Private villa with pool',
      'Couples spa treatment',
      'Candlelight dinner on beach',
      'Rice terrace sunrise',
      'Tanah Lot temple visit',
    ],
    includes: ['Luxury accommodation', 'Daily breakfast', 'Romantic dinners', 'Private tours', 'Spa sessions'],
    excludes: ['International flights', 'Lunch', 'Additional activities', 'Travel insurance'],
    itinerary: [
      { day: 1, title: 'Arrival', description: 'Airport welcome, transfer to romantic villa.' },
      { day: 2, title: 'Ubud Cultural Tour', description: 'Temples, monkey forest, and rice terraces.' },
      { day: 3, title: 'Spa Day', description: 'Couples massage and relaxation.' },
      { day: 4, title: 'Beach Day', description: 'Seminyak beach, shopping, and sunset.' },
      { day: 5, title: 'Water Sports', description: 'Snorkeling and beach activities.' },
      { day: 6, title: 'Tanah Lot', description: 'Temple visit and traditional dance.' },
      { day: 7, title: 'Departure', description: 'Check out and airport transfer.' },
    ],
    category: 'Honeymoon',
    rating: 5,
    featured: true,
  },
  {
    id: 'tour-4',
    title: 'Dubai Luxury Escape',
    destination: 'Dubai, Abu Dhabi',
    country: 'UAE',
    duration: '5 Days / 4 Nights',
    price: 1599,
    image: 'https://images.pexels.com/photos/1470502/pexels-photo-1470502.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Experience luxury and adventure in the UAE with world-class attractions and desert safaris.',
    highlights: [
      'Burj Khalifa observation deck',
      'Desert safari with BBQ dinner',
      'Dubai Marina cruise',
      'Abu Dhabi city tour',
      'Shopping at Dubai Mall',
    ],
    includes: ['5-star hotel', 'Daily breakfast', 'Tours and transfers', 'Desert safari', 'Entrance tickets'],
    excludes: ['Flights', 'Lunch and dinner', 'Optional activities', 'Shopping'],
    itinerary: [
      { day: 1, title: 'Arrival Dubai', description: 'Airport transfer, hotel check-in, evening at leisure.' },
      { day: 2, title: 'Dubai City Tour', description: 'Burj Khalifa, Dubai Mall, Marina, and old Dubai.' },
      { day: 3, title: 'Desert Safari', description: 'Dune bashing, camel ride, BBQ dinner with entertainment.' },
      { day: 4, title: 'Abu Dhabi Tour', description: 'Sheikh Zayed Mosque, Emirates Palace, Louvre Museum.' },
      { day: 5, title: 'Departure', description: 'Free time for shopping, airport transfer.' },
    ],
    category: 'Luxury',
    rating: 5,
    bestseller: true,
  },
  {
    id: 'tour-5',
    title: 'Ancient Egypt Explorer',
    destination: 'Cairo, Luxor, Aswan',
    country: 'Egypt',
    duration: '8 Days / 7 Nights',
    price: 1799,
    image: 'https://images.pexels.com/photos/262780/pexels-photo-262780.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Journey through ancient Egypt visiting pyramids, temples, and cruising the Nile River.',
    highlights: [
      'Pyramids of Giza and Sphinx',
      'Egyptian Museum treasures',
      'Nile River cruise',
      'Valley of the Kings',
      'Karnak and Luxor temples',
    ],
    includes: ['Hotels and cruise', 'All meals', 'Egyptologist guide', 'Entrance fees', 'Domestic flights'],
    excludes: ['International flights', 'Visa fees', 'Optional tours', 'Tips'],
    itinerary: [
      { day: 1, title: 'Arrive Cairo', description: 'Airport meet and transfer to hotel.' },
      { day: 2, title: 'Pyramids Tour', description: 'Giza pyramids, Sphinx, and Memphis.' },
      { day: 3, title: 'Egyptian Museum', description: 'Museum visit, Khan el-Khalili bazaar.' },
      { day: 4, title: 'Fly to Aswan', description: 'Philae Temple, High Dam, board cruise.' },
      { day: 5, title: 'Kom Ombo & Edfu', description: 'Temple visits while sailing to Luxor.' },
      { day: 6, title: 'Luxor West Bank', description: 'Valley of the Kings, Hatshepsut Temple.' },
      { day: 7, title: 'Luxor East Bank', description: 'Karnak and Luxor temples, fly to Cairo.' },
      { day: 8, title: 'Departure', description: 'Transfer to airport for international flight.' },
    ],
    category: 'Adventure',
    rating: 5,
    featured: true,
  },
  {
    id: 'tour-6',
    title: 'Turkey Heritage Tour',
    destination: 'Istanbul, Cappadocia, Pamukkale',
    country: 'Turkey',
    duration: '7 Days / 6 Nights',
    price: 1399,
    image: 'https://images.pexels.com/photos/1612351/pexels-photo-1612351.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Discover Turkey\'s rich history, stunning landscapes, and unique experiences.',
    highlights: [
      'Hot air balloon in Cappadocia',
      'Hagia Sophia and Blue Mosque',
      'Underground cities',
      'Pamukkale thermal pools',
      'Bosphorus cruise',
    ],
    includes: ['4-star hotels', 'Daily breakfast', 'Internal flights', 'Guided tours', 'Entrance fees'],
    excludes: ['International flights', 'Lunch and dinner', 'Balloon ride', 'Travel insurance'],
    itinerary: [
      { day: 1, title: 'Arrive Istanbul', description: 'Airport transfer and hotel check-in.' },
      { day: 2, title: 'Istanbul Old City', description: 'Hagia Sophia, Blue Mosque, Topkapi Palace.' },
      { day: 3, title: 'Bosphorus & Fly to Cappadocia', description: 'Cruise and evening flight.' },
      { day: 4, title: 'Cappadocia Tour', description: 'Goreme Valley, underground city, fairy chimneys.' },
      { day: 5, title: 'Pamukkale', description: 'Drive to Pamukkale, thermal terraces visit.' },
      { day: 6, title: 'Pamukkale to Istanbul', description: 'Fly back to Istanbul, Grand Bazaar shopping.' },
      { day: 7, title: 'Departure', description: 'Transfer to airport.' },
    ],
    category: 'Adventure',
    rating: 5,
  },
  {
    id: 'tour-7',
    title: 'China Discovery',
    destination: 'Beijing, Xi\'an, Shanghai',
    country: 'China',
    duration: '9 Days / 8 Nights',
    price: 1999,
    image: 'https://images.pexels.com/photos/1557960/pexels-photo-1557960.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Experience China\'s ancient wonders and modern cities on this comprehensive tour.',
    highlights: [
      'Great Wall of China',
      'Terracotta Warriors',
      'Forbidden City',
      'Shanghai skyline',
      'Traditional Chinese cuisine',
    ],
    includes: ['Hotels', 'Daily breakfast', 'High-speed train', 'Guided tours', 'Entry tickets'],
    excludes: ['International flights', 'China visa', 'Lunch and dinner', 'Personal expenses'],
    itinerary: [
      { day: 1, title: 'Arrive Beijing', description: 'Airport pickup and hotel transfer.' },
      { day: 2, title: 'Great Wall', description: 'Visit Mutianyu section of Great Wall.' },
      { day: 3, title: 'Beijing Highlights', description: 'Forbidden City, Tiananmen Square, Temple of Heaven.' },
      { day: 4, title: 'Train to Xi\'an', description: 'High-speed train, city wall bike tour.' },
      { day: 5, title: 'Terracotta Warriors', description: 'Full day at archaeological site.' },
      { day: 6, title: 'Xi\'an to Shanghai', description: 'Flight to Shanghai, evening river cruise.' },
      { day: 7, title: 'Shanghai Modern', description: 'The Bund, Pudong district, Oriental Pearl Tower.' },
      { day: 8, title: 'Shanghai Culture', description: 'Yuyuan Garden, old town, acrobatic show.' },
      { day: 9, title: 'Departure', description: 'Transfer to Pudong airport.' },
    ],
    category: 'Group Tours',
    rating: 5,
    featured: true,
  },
  {
    id: 'tour-8',
    title: 'Vietnam Highlights',
    destination: 'Hanoi, Halong Bay, Hoi An, Ho Chi Minh',
    country: 'Vietnam',
    duration: '10 Days / 9 Nights',
    price: 1499,
    image: 'https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Complete Vietnam experience from north to south with cultural and natural wonders.',
    highlights: [
      'Halong Bay cruise',
      'Hoi An ancient town',
      'Mekong Delta tour',
      'Cu Chi tunnels',
      'Vietnamese cooking class',
    ],
    includes: ['Accommodation', 'Breakfast daily', 'Domestic flights', 'Cruise', 'Tours and guide'],
    excludes: ['International flights', 'Vietnam visa', 'Meals', 'Tips', 'Personal expenses'],
    itinerary: [
      { day: 1, title: 'Arrive Hanoi', description: 'Airport transfer, old quarter walk.' },
      { day: 2, title: 'Hanoi City Tour', description: 'Ho Chi Minh complex, Temple of Literature, water puppet show.' },
      { day: 3, title: 'Halong Bay Cruise', description: 'Full day cruise with cave visit and kayaking.' },
      { day: 4, title: 'Fly to Da Nang', description: 'Transfer to Hoi An, ancient town exploration.' },
      { day: 5, title: 'Hoi An Free Day', description: 'Beach time, cycling, or tailor shopping.' },
      { day: 6, title: 'My Son Sanctuary', description: 'Ancient Cham ruins excursion.' },
      { day: 7, title: 'Fly to Ho Chi Minh', description: 'City arrival, evening street food tour.' },
      { day: 8, title: 'Cu Chi Tunnels', description: 'Half day tour of war tunnels.' },
      { day: 9, title: 'Mekong Delta', description: 'Full day boat tour of river and villages.' },
      { day: 10, title: 'Departure', description: 'Morning market visit, airport transfer.' },
    ],
    category: 'Adventure',
    rating: 5,
    bestseller: true,
  },
  {
    id: 'tour-9',
    title: 'Malaysia Wonders',
    destination: 'Kuala Lumpur, Penang, Langkawi',
    country: 'Malaysia',
    duration: '6 Days / 5 Nights',
    price: 999,
    image: 'https://images.pexels.com/photos/1470405/pexels-photo-1470405.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Experience Malaysia\'s modern cities, cultural heritage, and tropical islands.',
    highlights: [
      'Petronas Twin Towers',
      'Batu Caves',
      'Penang street food',
      'Langkawi island hopping',
      'Sky bridge and cable car',
    ],
    includes: ['Hotels', 'Breakfast', 'Domestic flights', 'Tours', 'Transfers'],
    excludes: ['International flights', 'Lunch and dinner', 'Optional activities', 'Travel insurance'],
    itinerary: [
      { day: 1, title: 'Arrive Kuala Lumpur', description: 'Airport transfer and city evening tour.' },
      { day: 2, title: 'KL City Tour', description: 'Petronas Towers, Batu Caves, shopping.' },
      { day: 3, title: 'Fly to Penang', description: 'Georgetown heritage walk, street food.' },
      { day: 4, title: 'Penang Hill', description: 'Funicular ride, temples, and beaches.' },
      { day: 5, title: 'Langkawi', description: 'Ferry to Langkawi, sky bridge, cable car.' },
      { day: 6, title: 'Departure', description: 'Island hopping tour, fly back to KL.' },
    ],
    category: 'Family',
    rating: 4,
  },
  {
    id: 'tour-10',
    title: 'Singapore City Break',
    destination: 'Singapore',
    country: 'Singapore',
    duration: '4 Days / 3 Nights',
    price: 799,
    image: 'https://images.pexels.com/photos/2354054/pexels-photo-2354054.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Perfect short getaway to explore the Garden City\'s attractions and cuisine.',
    highlights: [
      'Gardens by the Bay',
      'Universal Studios',
      'Marina Bay Sands',
      'Sentosa Island',
      'Hawker food centers',
    ],
    includes: ['4-star hotel', 'Daily breakfast', 'Universal Studios ticket', 'Airport transfers', 'City tour'],
    excludes: ['Flights', 'Lunch and dinner', 'Additional attractions', 'Travel insurance'],
    itinerary: [
      { day: 1, title: 'Arrival', description: 'Airport transfer, Marina Bay area walk.' },
      { day: 2, title: 'Universal Studios', description: 'Full day at theme park, evening Sentosa.' },
      { day: 3, title: 'City Tour', description: 'Gardens by Bay, Chinatown, Little India, Arab Street.' },
      { day: 4, title: 'Departure', description: 'Morning shopping at Orchard Road, airport transfer.' },
    ],
    category: 'Family',
    rating: 5,
    bestseller: true,
  },
];

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
