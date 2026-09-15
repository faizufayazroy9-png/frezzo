import { Product, Review, Customer, Order, Coupon } from '../types';

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'frz-shahdood-malai',
    slug: 'shahdood-malai',
    name: 'Shahdood Malai',
    shortDescription: 'Fresh mulberries layered with rich, creamy malai for a luxurious fruity dessert experience.',
    detailedDescription: 'A luscious dessert crafted with juicy mulberries and silky malai. The natural berry sweetness combines beautifully with creamy richness to create a refreshing yet indulgent treat.',
    price: 149,
    originalPrice: 179,
    rating: 4.9,
    reviewCount: 142,
    category: 'Fruit Desserts',
    secondaryCategory: 'Best Sellers',
    isBestseller: true,
    isNew: false,
    isSeasonal: false,
    images: [
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1000&q=80'
    ],
    stock: 24,
    lowStockThreshold: 5,
    inStock: true,
    tags: ['Mulberry', 'Malai', 'Fruity', 'Artisanal', 'Bestseller'],
    accentColor: '#5C1D42',
    netQuantity: '180 g (Single Serve Jar)',
    ingredients: '[Demo Content] Fresh Indian mulberries (shahdood), double-boiled whole milk malai, organic cane sugar, hint of green cardamom, pure rose essence.',
    allergenInfo: '[Demo Content] Contains dairy (milk malai). Prepared in a dedicated confectionery kitchen that also handles tree nuts.',
    storageInstructions: '[Demo Content] Keep refrigerated at 2°C - 4°C at all times. Do not freeze. Best consumed chilled directly from the jar.',
    shelfLife: '48 hours from dispatch when kept refrigerated.',
    servingInfo: 'Serve chilled. Gently spoon through both the fruit compote layer and rich malai cream.',
    preparationInfo: 'Slow-crafted in small batches every morning using fresh seasonal berries and fresh farm malai.',
    deliveryInfo: 'Delivered in food-grade thermal ice boxes maintaining sub-4°C chill throughout transit.'
  },
  {
    id: 'frz-strawberry-malai',
    slug: 'strawberry-malai',
    name: 'Strawberry Malai',
    shortDescription: 'Fresh strawberries paired with creamy malai for a smooth and fruity indulgence.',
    detailedDescription: 'Made with vibrant strawberries and rich creamy malai, this dessert delivers a beautiful balance of fruity freshness and velvety sweetness.',
    price: 149,
    originalPrice: 169,
    rating: 4.9,
    reviewCount: 218,
    category: 'Fruit Desserts',
    secondaryCategory: 'Best Sellers',
    isBestseller: true,
    isNew: false,
    isSeasonal: true,
    images: [
      'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=1000&q=80'
    ],
    stock: 35,
    lowStockThreshold: 8,
    inStock: true,
    tags: ['Strawberry', 'Fresh Fruit', 'Creamy', 'Instagram Favorite'],
    accentColor: '#D33857',
    netQuantity: '180 g (Single Serve Jar)',
    ingredients: '[Demo Content] Handpicked farm-fresh strawberries, reduced dairy malai, raw sugar syrup, Madagascar vanilla hint.',
    allergenInfo: '[Demo Content] Contains dairy (milk). Free from artificial coloring and synthetic preservatives.',
    storageInstructions: '[Demo Content] Store chilled below 4°C. Consume within 48 hours for optimal berry crunch and creaminess.',
    shelfLife: '48 hours under refrigeration.',
    servingInfo: 'Enjoy cold with a dessert spoon. Pair with our crisp almond thins or enjoy solo.',
    preparationInfo: 'Handcrafted daily using crisp Mahabaleshwar strawberries gently folded into chilled malai.',
    deliveryInfo: 'Chilled express delivery in insulated cold-lock packaging.'
  },
  {
    id: 'frz-mango-malai',
    slug: 'mango-malai',
    name: 'Mango Malai',
    shortDescription: 'Sweet mango goodness layered with smooth and creamy malai.',
    detailedDescription: 'A celebration of India\'s favorite fruit. Sweet mango and creamy malai come together to create a rich, refreshing and irresistibly tropical dessert.',
    price: 149,
    originalPrice: 179,
    rating: 5.0,
    reviewCount: 310,
    category: 'Fruit Desserts',
    secondaryCategory: 'Seasonal Specials',
    isBestseller: true,
    isNew: false,
    isSeasonal: true,
    images: [
      'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1546069901-d64e9a8fcf10?auto=format&fit=crop&w=1000&q=80'
    ],
    stock: 18,
    lowStockThreshold: 6,
    inStock: true,
    tags: ['Alphonso Mango', 'Malai', 'Tropical', 'Customer Favorite'],
    accentColor: '#EAA221',
    netQuantity: '185 g (Single Serve Jar)',
    ingredients: '[Demo Content] Ratnagiri Alphonso mango chunks and puree, thick reduced cream malai, trace saffron strands, brown sugar.',
    allergenInfo: '[Demo Content] Contains dairy. Made in an artisanal facility that may process pistachios and cashews.',
    storageInstructions: '[Demo Content] Store at 2°C - 4°C. Keep lid sealed until consumption.',
    shelfLife: '3 days refrigerated.',
    servingInfo: 'Spoon deep to capture the lush mango compote base with silky top malai.',
    preparationInfo: 'Prepared fresh every 6 hours using tree-ripened Alphonso mangoes.',
    deliveryInfo: 'Packed in biodegradable insulated boxes with cold gel packs.'
  },
  {
    id: 'frz-seethaphal-malai',
    slug: 'seethaphal-malai',
    name: 'Seethaphal Malai',
    shortDescription: 'Creamy malai combined with the delicate sweetness of custard apple.',
    detailedDescription: 'A smooth dessert inspired by the unique taste of fresh seethaphal. Creamy, naturally sweet and incredibly satisfying.',
    price: 159,
    originalPrice: 189,
    rating: 4.8,
    reviewCount: 96,
    category: 'Creamy Desserts',
    secondaryCategory: 'Seasonal Specials',
    isBestseller: false,
    isNew: true,
    isSeasonal: true,
    images: [
      'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=1000&q=80'
    ],
    stock: 12,
    lowStockThreshold: 4,
    inStock: true,
    tags: ['Custard Apple', 'Seethaphal', 'Velvety', 'Authentic'],
    accentColor: '#4E7D56',
    netQuantity: '180 g (Single Serve Jar)',
    ingredients: '[Demo Content] Fresh deseeded custard apple (seethaphal) pulp, slow-stirred creamy rabdi-malai, raw cane sugar.',
    allergenInfo: '[Demo Content] Contains milk solids. Gluten free.',
    storageInstructions: '[Demo Content] Keep refrigerated at all times. Best served ice-cold.',
    shelfLife: '48 hours.',
    servingInfo: 'Enjoy chilled straight from the glass jar with a small dessert spoon.',
    preparationInfo: 'Carefully deseeded by hand to preserve the authentic textured pulp of seasonal custard apples.',
    deliveryInfo: 'Same-day cold chain delivery.'
  },
  {
    id: 'frz-jackfruit-malai',
    slug: 'jackfruit-malai',
    name: 'Jackfruit Malai',
    shortDescription: 'A creamy tropical dessert infused with the distinctive sweetness of ripe jackfruit.',
    detailedDescription: 'Rich jackfruit flavors blended with smooth malai for an indulgent tropical dessert experience.',
    price: 159,
    originalPrice: 189,
    rating: 4.7,
    reviewCount: 84,
    category: 'Creamy Desserts',
    secondaryCategory: 'New Arrivals',
    isBestseller: false,
    isNew: true,
    isSeasonal: false,
    images: [
      'https://images.unsplash.com/photo-1528975604071-b4dc52a2d18c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1000&q=80'
    ],
    stock: 9,
    lowStockThreshold: 3,
    inStock: true,
    tags: ['Jackfruit', 'Tropical', 'Rare Flavour', 'Creamy'],
    accentColor: '#D9822B',
    netQuantity: '180 g (Single Serve Jar)',
    ingredients: '[Demo Content] Sun-ripened tropical jackfruit carpels, gently simmered whole milk cream, organic palm jaggery, cardamom.',
    allergenInfo: '[Demo Content] Contains dairy. No synthetic flavours or gelatin used.',
    storageInstructions: '[Demo Content] Refrigerate upon arrival (2°C - 4°C).',
    shelfLife: '48 hours.',
    servingInfo: 'Serve cold. Pairs delightfully with espresso or iced filter coffee.',
    preparationInfo: 'Cooked with sweet Varikka jackfruit to release its aromatic honey notes.',
    deliveryInfo: 'Cold boxed delivery.'
  },
  {
    id: 'frz-apricot-delight',
    slug: 'apricot-delight',
    name: 'Apricot Delight',
    shortDescription: 'A rich and fruity dessert featuring premium apricot flavors.',
    detailedDescription: 'A sophisticated fruity dessert made with carefully selected apricots and a creamy base, delivering a delightful balance of sweetness and tang.',
    price: 169,
    originalPrice: 199,
    rating: 4.9,
    reviewCount: 165,
    category: 'Fruit Desserts',
    secondaryCategory: 'Best Sellers',
    isBestseller: true,
    isNew: false,
    isSeasonal: false,
    images: [
      'https://images.unsplash.com/photo-1504855134084-780706a16c4b?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=1000&q=80'
    ],
    stock: 15,
    lowStockThreshold: 4,
    inStock: true,
    tags: ['Apricot', 'Qubani Infusion', 'Velvet Cream', 'Royal'],
    accentColor: '#C96238',
    netQuantity: '190 g (Single Serve Jar)',
    ingredients: '[Demo Content] Sun-dried organic golden apricots, infused cream malai, almond slivers, touch of lemon zest, saffron essence.',
    allergenInfo: '[Demo Content] Contains dairy and almonds (nuts).',
    storageInstructions: '[Demo Content] Refrigerate strictly below 4°C. Consume chilled.',
    shelfLife: '72 hours.',
    servingInfo: 'Gently mix the spiced apricot compote at the base with the chilled cream topping.',
    preparationInfo: 'Slow-simmered for 4 hours following traditional royal confectionery recipes.',
    deliveryInfo: 'Delivered in thermal-sealed jars in ice packs.'
  },
  {
    id: 'frz-pistachio-crunch',
    slug: 'pistachio-malai-crunch',
    name: 'Pistachio Kulfi Malai',
    shortDescription: 'Slow-simmered pistachio malai with roasted almond slivers and fragrant saffron.',
    detailedDescription: 'A royal homage to traditional Indian kulfi craft, reimagined as a spoonable malai dessert with intense nutty warmth and silky cream.',
    price: 179,
    originalPrice: 209,
    rating: 4.9,
    reviewCount: 114,
    category: 'Creamy Desserts',
    secondaryCategory: 'New Arrivals',
    isBestseller: false,
    isNew: true,
    isSeasonal: false,
    images: [
      'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&w=1000&q=80'
    ],
    stock: 20,
    lowStockThreshold: 5,
    inStock: true,
    tags: ['Pistachio', 'Kulfi', 'Nuts', 'Gourmet'],
    accentColor: '#537A5A',
    netQuantity: '180 g (Single Serve Jar)',
    ingredients: '[Demo Content] Pure Iranian pistachios, rabdi malai, slow-reduced Buffalo milk, Kashmiri saffron, crushed green cardamom.',
    allergenInfo: '[Demo Content] Contains dairy and tree nuts (pistachio, almond).',
    storageInstructions: '[Demo Content] Store at 2°C - 4°C. Do not freeze.',
    shelfLife: '3 days.',
    servingInfo: 'Serve directly from refrigerator. Extra delicious when paired with hot masala chai.',
    preparationInfo: 'Slow-reduced over wood fires for 6 hours before chilling and whipping with pistachios.',
    deliveryInfo: 'Cold pack insulated dispatch.'
  },
  {
    id: 'frz-lychee-rose-malai',
    slug: 'lychee-rose-malai',
    name: 'Lychee Rose Malai',
    shortDescription: 'Succulent juicy lychees bathed in organic Kannauj rosewater and silky malai.',
    detailedDescription: 'An ethereal floral indulgence celebrating Shahi lychees and damask rose petals. Light, floral, and deeply cooling on the palate.',
    price: 169,
    originalPrice: 199,
    rating: 4.8,
    reviewCount: 78,
    category: 'Seasonal Specials',
    secondaryCategory: 'Fruit Desserts',
    isBestseller: false,
    isNew: true,
    isSeasonal: true,
    images: [
      'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1000&q=80'
    ],
    stock: 14,
    lowStockThreshold: 4,
    inStock: true,
    tags: ['Lychee', 'Rose', 'Floral', 'Refreshing'],
    accentColor: '#B04B67',
    netQuantity: '180 g (Single Serve Jar)',
    ingredients: '[Demo Content] Fresh seasonal lychees, steam-distilled rosewater, condensed farm malai, organic rock sugar.',
    allergenInfo: '[Demo Content] Contains dairy.',
    storageInstructions: '[Demo Content] Keep chilled. Best consumed cold.',
    shelfLife: '48 hours.',
    servingInfo: 'Gently swirl with a chilled spoon before indulging.',
    preparationInfo: 'Crafted with hand-peeled seasonal lychees and pure steam-distilled Kannauj rose extract.',
    deliveryInfo: 'Sub-4°C express delivery.'
  }
];

export const DEMO_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    productId: 'frz-shahdood-malai',
    productName: 'Shahdood Malai',
    author: 'Priya Sundaram',
    city: 'Hyderabad',
    rating: 5,
    date: '3 days ago',
    title: 'Pure nostalgia & luxury in a jar!',
    comment: 'Absolutely delicious and beautifully packed. The mulberries were plump and sweet, and the malai had this incredible velvety texture. Reminded me of my childhood visits to Mahabaleshwar but so much more refined!',
    verified: true
  },
  {
    id: 'rev-2',
    productId: 'frz-mango-malai',
    productName: 'Mango Malai',
    author: 'Ananya Sharma',
    city: 'Mumbai',
    rating: 5,
    date: '1 week ago',
    title: 'The mango malai is honestly addictive!',
    comment: 'Ordered for a Sunday family dinner and everyone fought for the last spoon. The Alphonso mango flavor is genuine, not that synthetic syrup taste other brands use. Ordering 4 more jars today.',
    verified: true
  },
  {
    id: 'rev-3',
    productId: 'frz-strawberry-malai',
    productName: 'Strawberry Malai',
    author: 'Rahul Verma',
    city: 'Bengaluru',
    rating: 5,
    date: '2 weeks ago',
    title: 'Perfect dessert for a weekend treat.',
    comment: 'The strawberry and malai combination is spot-on. Arrived ice-cold in Bangalore within 45 minutes of dispatch. The glass jar packaging feels very premium.',
    verified: true
  },
  {
    id: 'rev-4',
    productId: 'frz-seethaphal-malai',
    productName: 'Seethaphal Malai',
    author: 'Divya Reddy',
    city: 'Hyderabad',
    rating: 5,
    date: '2 weeks ago',
    title: 'Hard to find authentic custard apple malai like this',
    comment: 'Seethaphal is so difficult to prepare well without being grainy. Frezzo nailed the texture completely. Silky smooth and naturally sweet without overwhelming sugar.',
    verified: true
  },
  {
    id: 'rev-5',
    productId: 'frz-apricot-delight',
    productName: 'Apricot Delight',
    author: 'Vikram Mehta',
    city: 'Pune',
    rating: 5,
    date: '3 weeks ago',
    title: 'Rich, royal and perfectly balanced',
    comment: 'The tartness of the apricots cutting through the thick malai cream is culinary genius. Miss Chinnari and team have created something truly world-class.',
    verified: true
  },
  {
    id: 'rev-6',
    productId: 'frz-jackfruit-malai',
    productName: 'Jackfruit Malai',
    author: 'Sneha Nair',
    city: 'Kochi',
    rating: 5,
    date: '1 month ago',
    title: 'A tropical dream come true!',
    comment: 'Being from Kerala, I take jackfruit very seriously. This malai captures that aromatic sweetness so delicately. You can taste the genuine fruit in every spoonful.',
    verified: true
  },
  {
    id: 'rev-7',
    productId: 'frz-pistachio-crunch',
    productName: 'Pistachio Kulfi Malai',
    author: 'Kabir Malhotra',
    city: 'Delhi NCR',
    rating: 5,
    date: '1 month ago',
    title: 'Like royalty dining in Lucknow',
    comment: 'The depth of pistachio and saffron aroma is remarkable. It does not feel heavy on the stomach either. Frezzo is easily our go-to dessert for celebration dinners now.',
    verified: true
  }
];

export const DEMO_CUSTOMERS: Customer[] = [
  {
    id: 'cust-1',
    name: 'Ananya Sharma',
    email: 'ananya.sharma@example.com',
    phone: '+91 98765 43210',
    city: 'Mumbai',
    totalOrders: 6,
    totalSpent: 1890,
    lastOrderDate: '2026-09-12',
    favoriteDessert: 'Mango Malai'
  },
  {
    id: 'cust-2',
    name: 'Priya Sundaram',
    email: 'priya.s@example.com',
    phone: '+91 98234 56789',
    city: 'Hyderabad',
    totalOrders: 9,
    totalSpent: 2780,
    lastOrderDate: '2026-09-14',
    favoriteDessert: 'Shahdood Malai'
  },
  {
    id: 'cust-3',
    name: 'Rahul Verma',
    email: 'rahul.v@example.com',
    phone: '+91 97123 45678',
    city: 'Bengaluru',
    totalOrders: 4,
    totalSpent: 1240,
    lastOrderDate: '2026-09-10',
    favoriteDessert: 'Strawberry Malai'
  },
  {
    id: 'cust-4',
    name: 'Divya Reddy',
    email: 'divya.reddy@example.com',
    phone: '+91 99887 76655',
    city: 'Hyderabad',
    totalOrders: 5,
    totalSpent: 1560,
    lastOrderDate: '2026-09-08',
    favoriteDessert: 'Seethaphal Malai'
  },
  {
    id: 'cust-5',
    name: 'Vikram Mehta',
    email: 'vikram.m@example.com',
    phone: '+91 98321 09876',
    city: 'Pune',
    totalOrders: 3,
    totalSpent: 890,
    lastOrderDate: '2026-09-05',
    favoriteDessert: 'Apricot Delight'
  },
  {
    id: 'cust-6',
    name: 'Rohan Deshmukh',
    email: 'rohan.d@example.com',
    phone: '+91 97654 32109',
    city: 'Mumbai',
    totalOrders: 7,
    totalSpent: 2150,
    lastOrderDate: '2026-09-11',
    favoriteDessert: 'Mango Malai'
  },
  {
    id: 'cust-7',
    name: 'Kavita Iyer',
    email: 'kavita.i@example.com',
    phone: '+91 96543 21098',
    city: 'Chennai',
    totalOrders: 2,
    totalSpent: 598,
    lastOrderDate: '2026-09-02',
    favoriteDessert: 'Jackfruit Malai'
  },
  {
    id: 'cust-8',
    name: 'Sameer Kapoor',
    email: 'sameer.k@example.com',
    phone: '+91 95432 10987',
    city: 'Delhi NCR',
    totalOrders: 8,
    totalSpent: 2940,
    lastOrderDate: '2026-09-13',
    favoriteDessert: 'Pistachio Kulfi Malai'
  },
  {
    id: 'cust-9',
    name: 'Meera Nambiar',
    email: 'meera.n@example.com',
    phone: '+91 94321 09876',
    city: 'Bengaluru',
    totalOrders: 3,
    totalSpent: 920,
    lastOrderDate: '2026-08-28',
    favoriteDessert: 'Strawberry Malai'
  },
  {
    id: 'cust-10',
    name: 'Aditya Sen',
    email: 'aditya.sen@example.com',
    phone: '+91 93210 98765',
    city: 'Kolkata',
    totalOrders: 4,
    totalSpent: 1350,
    lastOrderDate: '2026-09-04',
    favoriteDessert: 'Shahdood Malai'
  }
];

export const DEMO_COUPONS: Coupon[] = [
  {
    code: 'FREZZO10',
    discountPercent: 10,
    minOrder: 250,
    maxDiscount: 100,
    expiresAt: '2026-12-31',
    description: '10% off on all dessert orders above ₹250',
    isActive: true
  },
  {
    code: 'FIRSTTREAT',
    discountFlat: 50,
    minOrder: 299,
    expiresAt: '2026-12-31',
    description: 'Flat ₹50 off on your first Frezzo dessert box',
    isActive: true
  },
  {
    code: 'FREESHIP',
    discountFlat: 49,
    minOrder: 349,
    expiresAt: '2026-12-31',
    description: 'Free chilled express delivery across service areas',
    isActive: true
  },
  {
    code: 'SWEET20',
    discountPercent: 20,
    minOrder: 599,
    maxDiscount: 180,
    expiresAt: '2026-11-30',
    description: '20% off for celebration boxes & weekend gatherings',
    isActive: true
  },
  {
    code: 'CHINNARI15',
    discountPercent: 15,
    minOrder: 399,
    maxDiscount: 120,
    expiresAt: '2026-12-31',
    description: "Founder's Special: 15% off curated fruit malai jars",
    isActive: true
  }
];

export const DEMO_ORDERS: Order[] = [
  {
    id: 'FRZ-9042',
    createdAt: 'Today, 02:40 PM',
    customerName: 'Ananya Sharma',
    customerEmail: 'ananya.sharma@example.com',
    customerPhone: '+91 98765 43210',
    items: [
      {
        productId: 'frz-mango-malai',
        productName: 'Mango Malai',
        price: 149,
        quantity: 2,
        image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=400&q=80'
      },
      {
        productId: 'frz-shahdood-malai',
        productName: 'Shahdood Malai',
        price: 149,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80'
      }
    ],
    subtotal: 447,
    discount: 44.7,
    couponCode: 'FREZZO10',
    deliveryFee: 0,
    taxes: 20.1,
    total: 422.4,
    status: 'out_for_delivery',
    paymentMethod: 'upi',
    paymentStatus: 'paid',
    deliveryAddress: {
      fullName: 'Ananya Sharma',
      mobile: '+91 98765 43210',
      email: 'ananya.sharma@example.com',
      flat: 'Flat 402, Lotus Grand Residences',
      street: '14th Cross, Road No. 36',
      area: 'Jubilee Hills',
      city: 'Hyderabad',
      state: 'Telangana',
      pincode: '500033',
      landmark: 'Opposite Starbucks Reserve',
      addressType: 'home'
    },
    estimatedDeliveryTime: '30 - 45 mins (Chilled Van)',
    temperatureControl: true,
    timeline: [
      {
        status: 'placed',
        title: 'Order Placed',
        description: 'Your order was received and logged in our system.',
        timestamp: '02:40 PM',
        completed: true,
        current: false
      },
      {
        status: 'confirmed',
        title: 'Order Confirmed',
        description: 'Payment verified and sent to confection kitchen.',
        timestamp: '02:42 PM',
        completed: true,
        current: false
      },
      {
        status: 'preparing',
        title: 'Handcrafting Jars',
        description: 'Fresh fruit layered with chilled malai cream.',
        timestamp: '02:48 PM',
        completed: true,
        current: false
      },
      {
        status: 'packed',
        title: 'Packed in Thermal Ice Box',
        description: 'Sealed with dry cold-packs under 4°C.',
        timestamp: '03:05 PM',
        completed: true,
        current: false
      },
      {
        status: 'out_for_delivery',
        title: 'Out for Delivery',
        description: 'Rider Rajesh is en route with your chilled dessert box.',
        timestamp: '03:15 PM',
        completed: true,
        current: true
      },
      {
        status: 'delivered',
        title: 'Delivered',
        description: 'Handed over chilled. Time for happiness!',
        timestamp: 'Estimated 03:45 PM',
        completed: false,
        current: false
      }
    ]
  },
  {
    id: 'FRZ-8911',
    createdAt: 'Yesterday, 07:15 PM',
    customerName: 'Priya Sundaram',
    customerEmail: 'priya.s@example.com',
    customerPhone: '+91 98234 56789',
    items: [
      {
        productId: 'frz-shahdood-malai',
        productName: 'Shahdood Malai',
        price: 149,
        quantity: 2,
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80'
      },
      {
        productId: 'frz-apricot-delight',
        productName: 'Apricot Delight',
        price: 169,
        quantity: 2,
        image: 'https://images.unsplash.com/photo-1504855134084-780706a16c4b?auto=format&fit=crop&w=400&q=80'
      }
    ],
    subtotal: 636,
    discount: 95.4,
    couponCode: 'CHINNARI15',
    deliveryFee: 0,
    taxes: 27.0,
    total: 567.6,
    status: 'delivered',
    paymentMethod: 'upi',
    paymentStatus: 'paid',
    deliveryAddress: {
      fullName: 'Priya Sundaram',
      mobile: '+91 98234 56789',
      email: 'priya.s@example.com',
      flat: 'Villa 12, Palm Meadows',
      street: 'Airport Road',
      area: 'Begumpet',
      city: 'Hyderabad',
      state: 'Telangana',
      pincode: '500016',
      landmark: 'Near Country Club',
      addressType: 'home'
    },
    estimatedDeliveryTime: 'Delivered in 38 mins',
    temperatureControl: true,
    timeline: [
      {
        status: 'placed',
        title: 'Order Placed',
        description: 'Order placed by customer.',
        timestamp: '07:15 PM',
        completed: true,
        current: false
      },
      {
        status: 'confirmed',
        title: 'Confirmed',
        description: 'Kitchen accepted order.',
        timestamp: '07:16 PM',
        completed: true,
        current: false
      },
      {
        status: 'preparing',
        title: 'Preparing',
        description: 'Fresh batches packed.',
        timestamp: '07:22 PM',
        completed: true,
        current: false
      },
      {
        status: 'packed',
        title: 'Packed',
        description: 'Thermal chill seal applied.',
        timestamp: '07:35 PM',
        completed: true,
        current: false
      },
      {
        status: 'out_for_delivery',
        title: 'Out for Delivery',
        description: 'Dispatched via express delivery.',
        timestamp: '07:42 PM',
        completed: true,
        current: false
      },
      {
        status: 'delivered',
        title: 'Delivered',
        description: 'Delivered chilled to doorstep.',
        timestamp: '07:53 PM',
        completed: true,
        current: true
      }
    ]
  },
  {
    id: 'FRZ-8750',
    createdAt: '12 Sep 2026, 01:20 PM',
    customerName: 'Rahul Verma',
    customerEmail: 'rahul.v@example.com',
    customerPhone: '+91 97123 45678',
    items: [
      {
        productId: 'frz-strawberry-malai',
        productName: 'Strawberry Malai',
        price: 149,
        quantity: 3,
        image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=400&q=80'
      }
    ],
    subtotal: 447,
    discount: 50,
    couponCode: 'FIRSTTREAT',
    deliveryFee: 0,
    taxes: 19.8,
    total: 416.8,
    status: 'delivered',
    paymentMethod: 'card',
    paymentStatus: 'paid',
    deliveryAddress: {
      fullName: 'Rahul Verma',
      mobile: '+91 97123 45678',
      email: 'rahul.v@example.com',
      flat: 'A-201, Sterling Heights',
      street: '100ft Road',
      area: 'Indiranagar',
      city: 'Bengaluru',
      state: 'Karnataka',
      pincode: '560038',
      landmark: 'Near Toit Pub',
      addressType: 'home'
    },
    estimatedDeliveryTime: 'Delivered in 42 mins',
    temperatureControl: true,
    timeline: [
      {
        status: 'delivered',
        title: 'Delivered',
        description: 'Successfully handed over to customer.',
        timestamp: '02:02 PM',
        completed: true,
        current: true
      }
    ]
  }
];

export const SERVICEABLE_PINS: Record<string, { city: string; minTimeMinutes: number; hub: string }> = {
  // Hyderabad
  '500001': { city: 'Hyderabad (Abids/Old City)', minTimeMinutes: 40, hub: 'Central Kitchen Hub' },
  '500033': { city: 'Hyderabad (Jubilee Hills)', minTimeMinutes: 30, hub: 'Boutique West Hub' },
  '500081': { city: 'Hyderabad (Madhapur / Hitec)', minTimeMinutes: 35, hub: 'Cyber City Hub' },
  '500016': { city: 'Hyderabad (Begumpet)', minTimeMinutes: 35, hub: 'Central Kitchen Hub' },
  '500034': { city: 'Hyderabad (Banjara Hills)', minTimeMinutes: 30, hub: 'Boutique West Hub' },
  '500082': { city: 'Hyderabad (Kondapur / Gachibowli)', minTimeMinutes: 40, hub: 'West Tech Hub' },
  // Mumbai
  '400001': { city: 'Mumbai (Fort / South Mumbai)', minTimeMinutes: 45, hub: 'Colaba Boutique Hub' },
  '400050': { city: 'Mumbai (Bandra West)', minTimeMinutes: 35, hub: 'Bandra Seaside Hub' },
  '400049': { city: 'Mumbai (Juhu)', minTimeMinutes: 40, hub: 'Juhu Kitchen' },
  '400051': { city: 'Mumbai (BKC)', minTimeMinutes: 35, hub: 'BKC Central Hub' },
  // Bengaluru
  '560001': { city: 'Bengaluru (MG Road / Central)', minTimeMinutes: 40, hub: 'Central Garden Hub' },
  '560038': { city: 'Bengaluru (Indiranagar)', minTimeMinutes: 35, hub: 'Indiranagar Hub' },
  '560034': { city: 'Bengaluru (Koramangala)', minTimeMinutes: 35, hub: 'Koramangala Hub' },
  '560103': { city: 'Bengaluru (Bellandur / Sarjapur)', minTimeMinutes: 45, hub: 'East Tech Hub' },
  // Delhi NCR
  '110001': { city: 'New Delhi (Connaught Place)', minTimeMinutes: 45, hub: 'CP Heritage Hub' },
  '110024': { city: 'New Delhi (Defence Colony)', minTimeMinutes: 40, hub: 'South Delhi Hub' },
  '122002': { city: 'Gurugram (Golf Course Road)', minTimeMinutes: 35, hub: 'Cyber City Hub' },
  // Pune & Chennai
  '411001': { city: 'Pune (Camp / Station)', minTimeMinutes: 40, hub: 'Pune Central Hub' },
  '600001': { city: 'Chennai (George Town)', minTimeMinutes: 45, hub: 'Chennai Coastal Hub' }
};

export const INSTAGRAM_POSTS = [
  {
    id: 'ig-1',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80',
    caption: 'Fresh mulberry layers kissed with velvety farm malai. Summer never tasted this luxurious ✨ #Frezzo #ShahdoodMalai',
    likes: '1.8k',
    tag: 'Best Seller'
  },
  {
    id: 'ig-2',
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=600&q=80',
    caption: 'Pure strawberry heaven in every single spoonful 🍓 Tag someone who owes you dessert!',
    likes: '2.4k',
    tag: 'Fresh Harvest'
  },
  {
    id: 'ig-3',
    image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=600&q=80',
    caption: 'Alphonso season may come and go, but Frezzo Mango Malai remains eternal 🥭 #MangoCravings',
    likes: '3.1k',
    tag: 'Iconic Drop'
  },
  {
    id: 'ig-4',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=600&q=80',
    caption: 'Behind the kitchen doors: Hand-deseeding ripe custard apples with love and precision 🥣',
    likes: '1.2k',
    tag: 'Behind The Scenes'
  },
  {
    id: 'ig-5',
    image: 'https://images.unsplash.com/photo-1504855134084-780706a16c4b?auto=format&fit=crop&w=600&q=80',
    caption: 'Golden apricots slow-simmered to perfection. Tangy meets heavenly cream 🍑 #ApricotDelight',
    likes: '1.5k',
    tag: 'Craft'
  },
  {
    id: 'ig-6',
    image: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&w=600&q=80',
    caption: 'Weekend unwinding with a chilled jar of pistachio malai crunch. Pure bliss 🌿',
    likes: '2.9k',
    tag: 'Lifestyle'
  }
];

export const INGREDIENTS_STORY = [
  {
    name: 'Mulberries (Shahdood)',
    subtitle: 'Wild & Tart-Sweet',
    description: 'Plump, hand-harvested Indian mulberries that burst with natural berry sweetness, perfectly balancing the richness of malai.',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80',
    origin: 'Mahabaleshwar Orchards'
  },
  {
    name: 'Ratnagiri Alphonso',
    subtitle: 'Sun-Kissed Gold',
    description: 'Tree-ripened royal mangoes known for their intoxicating aroma, vibrant saffron hue, and honey-like sweetness.',
    image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=600&q=80',
    origin: 'Ratnagiri, Maharashtra'
  },
  {
    name: 'Pure Whole Milk Malai',
    subtitle: 'Silky Velvet Cream',
    description: 'Slow-simmered whole milk gently skimmed layer by layer to achieve a heavenly, unadulterated texture that melts on the tongue.',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80',
    origin: 'Single-Source Dairy Farms'
  },
  {
    name: 'Fresh Custard Apple',
    subtitle: 'Nature\'s Sweet Velvet',
    description: 'Pulp from wild, naturally ripened seethaphal, hand-deseeded daily to preserve every ounce of delicate fruity flavor.',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=600&q=80',
    origin: 'Deccan Plateau'
  },
  {
    name: 'Golden Apricots',
    subtitle: 'Rich & Aromatic',
    description: 'Sun-dried premium apricots slowly rehydrated and cooked to release warm caramelized fruit notes.',
    image: 'https://images.unsplash.com/photo-1504855134084-780706a16c4b?auto=format&fit=crop&w=600&q=80',
    origin: 'High-Altitude Himalayan Valleys'
  }
];
