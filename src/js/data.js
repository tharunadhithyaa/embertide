/* ── Navigation Links ── */
export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about.html' },
  { label: 'Menu', href: '/menu.html' },
  { label: 'Gallery', href: '/gallery.html' },
  { label: 'Reservations', href: '/reservations.html' },
  { label: 'Contact', href: '/contact.html' },
];

/* ── Statistics ── */
export const STATS = [
  { value: 15, suffix: '+', label: 'Years of Culinary Excellence' },
  { value: 120, suffix: '+', label: 'Signature Dishes' },
  { value: 30, suffix: '', label: 'Award-Winning Chefs' },
  { value: '50,000', suffix: '+', label: 'Happy Guests' },
];

/* ── Menu Categories ── */
export const MENU_CATEGORIES = [
  { key: 'starters', label: 'Starters' },
  { key: 'seafood', label: 'Seafood' },
  { key: 'steaks', label: 'Premium Steaks' },
  { key: 'pasta', label: 'Pasta' },
  { key: 'desserts', label: 'Desserts' },
  { key: 'drinks', label: 'Drinks' },
  { key: 'specials', label: "Chef's Specials" },
];

/* ── Menu Items ── */
export const MENU_ITEMS = [
  // Starters
  {
    id: 's1',
    name: 'Truffle Mushroom Bruschetta',
    description: 'Artisan bruschetta with mushrooms and truffle on a dark slate plate.',
    price: 24,
    image: '/images/menu_bruschetta.png',
    category: 'starters',
    isVegetarian: true,
  },
  {
    id: 's2',
    name: 'Crispy Calamari',
    description: 'Golden fried calamari with lemon aioli.',
    price: 26,
    image: '/images/menu_calamari.png',
    category: 'starters',
    isVegetarian: false,
  },
  {
    id: 's3',
    name: 'Burrata Caprese',
    description: 'Fresh burrata with heirloom tomatoes and basil.',
    price: 22,
    image: '/images/menu_caprese.png',
    category: 'starters',
    isVegetarian: true,
  },
  // Seafood
  {
    id: 'sf1',
    name: 'Grilled Atlantic Salmon',
    description: 'Perfectly grilled salmon with asparagus and lemon butter sauce.',
    price: 42,
    image: '/images/menu_salmon.png',
    category: 'seafood',
    isVegetarian: false,
  },
  {
    id: 'sf2',
    name: 'Butter Garlic Lobster Tail',
    description: 'Lobster tail with herb butter in an elegant setting.',
    price: 68,
    image: '/images/menu_lobster.png',
    category: 'seafood',
    isVegetarian: false,
  },
  {
    id: 'sf3',
    name: 'Seared Scallops',
    description: 'Pan-seared scallops with creamy risotto and microgreens.',
    price: 52,
    image: '/images/scallops.png',
    category: 'seafood',
    isVegetarian: false,
  },
  // Steaks
  {
    id: 'st1',
    name: 'Wagyu Ribeye Steak',
    description: 'Medium-rare Wagyu steak with rosemary.',
    price: 145,
    image: '/images/steak.png',
    category: 'steaks',
    isVegetarian: false,
  },
  {
    id: 'st2',
    name: 'Filet Mignon',
    description: 'Premium filet mignon with mashed potatoes.',
    price: 78,
    image: '/images/new/st2_filet.jpg',
    category: 'steaks',
    isVegetarian: false,
  },
  {
    id: 'st3',
    name: 'Tomahawk Steak',
    description: 'Large tomahawk steak served on a wooden board.',
    price: 125,
    image: '/images/new/tomahawk.jpg',
    category: 'steaks',
    isVegetarian: false,
  },
  // Pasta
  {
    id: 'p1',
    name: 'Truffle Alfredo Pasta',
    description: 'Creamy fettuccine with black truffle.',
    price: 36,
    image: '/images/new/pasta_alfredo.jpg',
    category: 'pasta',
    isVegetarian: true,
  },
  {
    id: 'p2',
    name: 'Seafood Linguine',
    description: 'Linguine with shrimp, mussels, and calamari.',
    price: 44,
    image: '/images/new/p2_linguine.jpg',
    category: 'pasta',
    isVegetarian: false,
  },
  {
    id: 'p3',
    name: 'Wild Mushroom Risotto',
    description: 'Creamy risotto with assorted mushrooms.',
    price: 34,
    image: '/images/new/risotto.jpg',
    category: 'pasta',
    isVegetarian: true,
  },
  // Desserts
  {
    id: 'd1',
    name: 'Chocolate Lava Cake',
    description: 'Warm lava cake with vanilla ice cream.',
    price: 22,
    image: '/images/new/d1_lava_cake.jpg',
    category: 'desserts',
    isVegetarian: true,
  },
  {
    id: 'd2',
    name: 'Classic Tiramisu',
    description: 'Traditional Italian tiramisu with cocoa dust.',
    price: 18,
    image: '/images/new/d2_tiramisu.jpg',
    category: 'desserts',
    isVegetarian: true,
  },
  {
    id: 'd3',
    name: 'Berry Cheesecake',
    description: 'Cheesecake topped with fresh berries.',
    price: 20,
    image: '/images/new/d3_cheesecake.jpg',
    category: 'desserts',
    isVegetarian: true,
  },
  // Drinks
  {
    id: 'dr1',
    name: 'Signature Cocktail',
    description: 'Elegant cocktail with citrus garnish.',
    price: 22,
    image: '/images/new/cocktail.jpg',
    category: 'drinks',
    isVegetarian: true,
  },
  {
    id: 'dr2',
    name: 'Premium Red Wine',
    description: 'Glass of premium red wine.',
    price: 20,
    image: '/images/new/red_wine.jpg',
    category: 'drinks',
    isVegetarian: true,
  },
  {
    id: 'dr3',
    name: 'Fresh Tropical Mocktail',
    description: 'Colorful non-alcoholic drink with fresh fruit.',
    price: 18,
    image: '/images/new/mocktail.jpg',
    category: 'drinks',
    isVegetarian: true,
  },
  {
    id: 'dr4',
    name: 'White Wine',
    description: 'White Wine with a sophisticated presentation in an elegant glass.',
    price: 18,
    image: '/images/new/white_wine.jpg',
    category: 'drinks',
    isVegetarian: true,
  },
  {
    id: 'dr5',
    name: 'Sparkling Mineral Water',
    description: 'Sparkling Mineral Water in a premium glass bottle.',
    price: 10,
    image: '/images/new/water.jpg',
    category: 'drinks',
    isVegetarian: true,
  },
  {
    id: 'dr6',
    name: 'Fresh Citrus Juice',
    description: 'Fresh Citrus Juice in a modern glass with ice.',
    price: 12,
    image: '/images/new/juice.jpg',
    category: 'drinks',
    isVegetarian: true,
  },
  // Chef's Specials
  {
    id: 'cs1',
    name: 'Surf & Turf Platter',
    description: 'Premium steak and lobster combination.',
    price: 185,
    image: '/images/new/cs1_surf_turf.jpg',
    category: 'specials',
    isVegetarian: false,
    isChefSpecial: true,
  },
  {
    id: 'cs2',
    name: 'Herb-Crusted Lamb Chops',
    description: 'Lamb chops with roasted vegetables and rosemary jus.',
    price: 120,
    image: '/images/new/cs2_lamb_chops.jpg',
    category: 'specials',
    isVegetarian: false,
    isChefSpecial: true,
  },
  {
    id: 'cs3',
    name: 'Seafood Platter',
    description: 'Assorted premium seafood including oysters, shrimp, and crab.',
    price: 150,
    image: '/images/new/cs3_seafood_platter.jpg',
    category: 'specials',
    isVegetarian: false,
    isChefSpecial: true,
  },
  {
    id: 'cs4',
    name: 'Truffle Alfredo Pasta',
    description: 'Fresh fettuccine coated in creamy Alfredo sauce, thin slices of black truffle, parmesan flakes, fresh herbs.',
    price: 42,
    image: '/images/new/cs4_truffle_pasta.jpg',
    category: 'specials',
    isVegetarian: true,
    isChefSpecial: true,
  },
];

/* ── Featured Dishes ── */
export const FEATURED_DISHES = [
  {
    id: 'f1',
    name: 'Pan-Seared Diver Scallops',
    description:
      'Perfectly caramelized scallops on a bed of cauliflower purée, adorned with golden raisins, crispy capers, and a drizzle of brown butter. A symphony of sea and earth.',
    image: '/images/scallops.png',
    rating: 4.9,
    isChefRecommendation: true,
    price: 42,
  },
  {
    id: 'f2',
    name: 'Wagyu Ribeye A5',
    description:
      'The pinnacle of beef — Japanese A5 wagyu, kissed by charcoal flame, served with roasted bone marrow, aged balsamic, and seasonal micro-greens.',
    image: '/images/steak.png',
    rating: 5.0,
    isChefRecommendation: true,
    price: 145,
  },
  {
    id: 'f3',
    name: 'Butter-Poached Lobster',
    description:
      'Maine lobster tail gently poached in herb-infused butter, paired with saffron risotto, edible flowers, and a delicate champagne foam.',
    image: '/images/lobster.png',
    rating: 4.8,
    isChefRecommendation: true,
    price: 68,
  },
];

/* ── Chef Profile ── */
export const CHEF = {
  name: 'Chef Marcus Aurelio',
  title: 'Executive Chef & Co-Founder',
  image: '/images/chef.png',
  bio: 'With over two decades of culinary mastery spanning Michelin-starred kitchens across Paris, Tokyo, and New York, Chef Marcus brings an extraordinary fusion of classical technique and modern innovation to every plate at Ember & Tide.',
  awards: [
    'James Beard Award — Best Chef, 2019',
    'Michelin Guide — Two Stars, 2021',
    'World\'s 50 Best Restaurants — #34, 2023',
    'AAA Five Diamond Award, 2022',
    'Wine Spectator Grand Award, 2020',
  ],
  experience:
    '22 years across 12 countries. Trained under Alain Ducasse, staged at Noma, and led kitchens in three Michelin-starred establishments before founding Ember & Tide.',
  philosophy:
    '"Cooking is not about recipes — it\'s about understanding the soul of each ingredient. At Ember & Tide, every dish tells a story of fire, sea, and the hands that shaped it."',
};

/* ── Testimonials ── */
export const TESTIMONIALS = [
  {
    id: 't1',
    name: 'Sophia Williams',
    image: 'https://i.pravatar.cc/150?img=1',
    rating: 5,
    review: 'The attention to detail was exceptional. Every course was beautifully presented, and the flavors were unforgettable. EMBER & TIDE exceeded every expectation.',
    date: 'Recently',
  },
  {
    id: 't2',
    name: 'James Carter',
    image: 'https://i.pravatar.cc/150?img=11',
    rating: 5,
    review: 'An incredible dining experience from start to finish. The ambience, service, and signature dishes were simply outstanding.',
    date: 'Recently',
  },
  {
    id: 't3',
    name: 'Emma Thompson',
    image: 'https://i.pravatar.cc/150?img=5',
    rating: 5,
    review: 'The seafood tasting menu was phenomenal. Every bite reflected craftsmanship and passion. I can\'t wait to return.',
    date: 'Recently',
  },
  {
    id: 't4',
    name: 'Daniel Harris',
    image: 'https://i.pravatar.cc/150?img=8',
    rating: 5,
    review: 'Elegant interiors, attentive staff, and remarkable cuisine. One of the finest restaurants I\'ve visited.',
    date: 'Recently',
  },
  {
    id: 't5',
    name: 'Olivia Brown',
    image: 'https://i.pravatar.cc/150?img=9',
    rating: 5,
    review: 'Perfect for celebrating special occasions. Every detail made the evening feel luxurious and memorable.',
    date: 'Recently',
  },
  {
    id: 't6',
    name: 'Michael Anderson',
    image: 'https://i.pravatar.cc/150?img=12',
    rating: 5,
    review: 'Exceptional hospitality combined with extraordinary food. EMBER & TIDE truly offers a five-star dining experience.',
    date: 'Recently',
  },
];

/* ── Gallery Images ── */
export const GALLERY_IMAGES = [
  { id: 'g1', src: '/images/gallery-interior.png', alt: 'Ember & Tide Main Dining Salon', category: 'interior' },
  { id: 'g2', src: '/images/scallops.png', alt: 'Pan-Seared Diver Scallops with Cauliflower Purée', category: 'dishes' },
  { id: 'g3', src: '/images/gallery-cocktail.png', alt: 'Signature Smoked Old Fashioned Cocktail', category: 'wine' },
  { id: 'g4', src: '/images/gallery-plating.png', alt: 'Chef Marcus Plating Signature Dish', category: 'chef' },
  { id: 'g5', src: '/images/steak.png', alt: 'Charcoal Grilled A5 Wagyu Ribeye Steak', category: 'dishes' },
  { id: 'g6', src: '/images/gallery-wine.png', alt: 'Our Curated Sommelier Wine Cellar', category: 'wine' },
  { id: 'g7', src: '/images/gallery-dessert.png', alt: 'Decadent Valrhona Chocolate Sphere', category: 'desserts' },
  { id: 'g8', src: '/images/gallery-seafood.png', alt: 'Kumamoto Oysters on the Half Shell', category: 'dishes' },
  { id: 'g9', src: '/images/lobster.png', alt: 'Butter-Poached Maine Lobster Tail', category: 'dishes' },
  { id: 'g10', src: '/images/kitchen.png', alt: 'Professional Kitchen Station in Action', category: 'kitchen' },
  { id: 'g11', src: '/images/hero.png', alt: 'Ember & Tide Private Dining Lounge', category: 'private' },
  { id: 'g12', src: '/images/chef.png', alt: 'Chef Marcus Aurelio Overseeing Service', category: 'chef' },
  { id: 'g13', src: '/images/new/cs2_lamb_chops.jpg', alt: 'Herb-Crusted Colorado Lamb Chops', category: 'dishes' },
  { id: 'g14', src: '/images/new/cs3_seafood_platter.jpg', alt: 'Grand Seafood Tower with Oysters and Crab', category: 'dishes' },
  { id: 'g15', src: '/images/menu_bruschetta.png', alt: 'Artisan Wild Mushroom & Truffle Bruschetta', category: 'dishes' }
];

/* ── Opening Hours ── */
export const OPENING_HOURS = [
  { day: 'Monday', hours: 'Closed' },
  { day: 'Tuesday – Thursday', hours: '5:00 PM – 10:00 PM' },
  { day: 'Friday – Saturday', hours: '5:00 PM – 11:30 PM' },
  { day: 'Sunday', hours: '5:00 PM – 9:00 PM' },
  { day: 'Sunday Brunch', hours: '11:00 AM – 2:30 PM' },
];

/* ── Contact Info ── */
export const CONTACT_INFO = {
  address: '42 Harbour View Drive, Waterfront District, San Francisco, CA 94111',
  phone: '+1 (415) 555-0142',
  email: 'reservations@emberandtide.com',
  social: {
    instagram: 'https://instagram.com/emberandtide',
    facebook: 'https://facebook.com/emberandtide',
    twitter: 'https://twitter.com/emberandtide',
  },
};
