export type ProductCategory =
  | 'All Desserts'
  | 'Fruit Desserts'
  | 'Creamy Desserts'
  | 'Seasonal Specials'
  | 'Best Sellers'
  | 'New Arrivals';

export interface Product {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  detailedDescription: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  category: ProductCategory;
  secondaryCategory?: string;
  isBestseller: boolean;
  isNew: boolean;
  isSeasonal: boolean;
  images: string[];
  stock: number;
  lowStockThreshold: number;
  inStock: boolean;
  tags: string[];
  accentColor: string;
  // Specifications
  netQuantity: string;
  ingredients: string;
  allergenInfo: string;
  storageInstructions: string;
  shelfLife: string;
  servingInfo: string;
  preparationInfo: string;
  deliveryInfo: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Review {
  id: string;
  productId?: string;
  productName?: string;
  author: string;
  city: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  verified: boolean;
  avatar?: string;
}

export interface Coupon {
  code: string;
  discountPercent?: number;
  discountFlat?: number;
  minOrder: number;
  maxDiscount?: number;
  expiresAt: string;
  description: string;
  isActive: boolean;
}

export type OrderStatus =
  | 'placed'
  | 'confirmed'
  | 'preparing'
  | 'packed'
  | 'out_for_delivery'
  | 'delivered'
  | 'cancelled';

export interface OrderTimelineStep {
  status: OrderStatus;
  title: string;
  description: string;
  timestamp: string;
  completed: boolean;
  current: boolean;
}

export interface OrderAddress {
  fullName: string;
  mobile: string;
  email: string;
  flat: string;
  street: string;
  area: string;
  city: string;
  state: string;
  pincode: string;
  landmark?: string;
  addressType: 'home' | 'work' | 'other';
}

export interface Order {
  id: string;
  createdAt: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  items: {
    productId: string;
    productName: string;
    price: number;
    quantity: number;
    image: string;
  }[];
  subtotal: number;
  discount: number;
  couponCode?: string;
  deliveryFee: number;
  taxes: number;
  total: number;
  status: OrderStatus;
  paymentMethod: 'upi' | 'card' | 'netbanking' | 'wallet' | 'cod';
  paymentStatus: 'paid' | 'pending' | 'refunded';
  deliveryAddress: OrderAddress;
  estimatedDeliveryTime: string;
  timeline: OrderTimelineStep[];
  temperatureControl: boolean;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  city: string;
  totalOrders: number;
  totalSpent: number;
  lastOrderDate: string;
  favoriteDessert: string;
}

export type ViewMode =
  | 'home'
  | 'shop'
  | 'product-detail'
  | 'cart'
  | 'checkout'
  | 'order-success'
  | 'order-tracking'
  | 'account'
  | 'wishlist'
  | 'about'
  | 'contact'
  | 'admin';

export interface ToastMessage {
  id: string;
  title: string;
  description?: string;
  type: 'success' | 'info' | 'warning' | 'error';
}
