import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  Product,
  CartItem,
  Coupon,
  Order,
  Customer,
  ViewMode,
  ToastMessage,
  OrderAddress,
  OrderStatus
} from '../types';
import {
  INITIAL_PRODUCTS,
  DEMO_COUPONS,
  DEMO_ORDERS,
  DEMO_CUSTOMERS,
  SERVICEABLE_PINS
} from '../data/dessertData';

interface StoreContextType {
  // State
  products: Product[];
  cart: CartItem[];
  wishlist: string[];
  appliedCoupon: Coupon | null;
  orders: Order[];
  customers: Customer[];
  currentView: ViewMode;
  selectedProduct: Product | null;
  searchModalOpen: boolean;
  cartDrawerOpen: boolean;
  trackingOrderId: string | null;
  lastPlacedOrder: Order | null;
  toasts: ToastMessage[];
  verifiedPincode: { pin: string; city: string; minTime: number } | null;

  // Cart Calculations
  cartSubtotal: number;
  discountAmount: number;
  deliveryFee: number;
  taxes: number;
  cartTotal: number;
  freeDeliveryThreshold: number;
  amountToFreeDelivery: number;

  // Actions
  navigateTo: (view: ViewMode, productSlug?: string, orderId?: string) => void;
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateCartQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  toggleWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  applyCoupon: (code: string) => { success: boolean; message: string };
  removeCoupon: () => void;
  openCartDrawer: () => void;
  closeCartDrawer: () => void;
  openSearchModal: () => void;
  closeSearchModal: () => void;
  addToast: (title: string, description?: string, type?: 'success' | 'info' | 'warning' | 'error') => void;
  removeToast: (id: string) => void;
  checkPincode: (pin: string) => { serviceable: boolean; city?: string; minTime?: number; message: string };
  placeOrder: (
    address: OrderAddress,
    paymentMethod: 'upi' | 'card' | 'netbanking' | 'wallet' | 'cod',
    deliverySlot?: string
  ) => Promise<Order>;

  // Admin Actions
  addProduct: (product: Omit<Product, 'id'>) => void;
  updateProduct: (id: string, updates: Partial<Product>) => void;
  deleteProduct: (id: string) => void;
  updateOrderStatus: (orderId: string, status: OrderStatus) => void;
  addCoupon: (coupon: Coupon) => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

const FREE_DELIVERY_THRESHOLD = 399;
const STANDARD_DELIVERY_FEE = 49;

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Products
  const [products, setProducts] = useState<Product[]>(() => {
    const saved = localStorage.getItem('frezzo_products_v1');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse saved products', e);
      }
    }
    return INITIAL_PRODUCTS;
  });

  useEffect(() => {
    localStorage.setItem('frezzo_products_v1', JSON.stringify(products));
  }, [products]);

  // Cart
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('frezzo_cart_v1');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse saved cart', e);
      }
    }
    return [
      { product: INITIAL_PRODUCTS[0], quantity: 2 },
      { product: INITIAL_PRODUCTS[1], quantity: 1 }
    ];
  });

  useEffect(() => {
    localStorage.setItem('frezzo_cart_v1', JSON.stringify(cart));
  }, [cart]);

  // Wishlist
  const [wishlist, setWishlist] = useState<string[]>(() => {
    const saved = localStorage.getItem('frezzo_wishlist_v1');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse saved wishlist', e);
      }
    }
    return [INITIAL_PRODUCTS[0].id, INITIAL_PRODUCTS[2].id];
  });

  useEffect(() => {
    localStorage.setItem('frezzo_wishlist_v1', JSON.stringify(wishlist));
  }, [wishlist]);

  // Coupon
  const [appliedCoupon, setAppliedCoupon] = useState<Coupon | null>(() => {
    return DEMO_COUPONS[0]; // Pre-applied FREZZO10 as a warm welcome
  });

  // Orders
  const [orders, setOrders] = useState<Order[]>(() => {
    const saved = localStorage.getItem('frezzo_orders_v1');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse saved orders', e);
      }
    }
    return DEMO_ORDERS;
  });

  useEffect(() => {
    localStorage.setItem('frezzo_orders_v1', JSON.stringify(orders));
  }, [orders]);

  // Customers
  const [customers] = useState<Customer[]>(DEMO_CUSTOMERS);

  // View Navigation
  const [currentView, setCurrentView] = useState<ViewMode>('home');
  const [selectedProductSlug, setSelectedProductSlug] = useState<string | null>(null);
  const [trackingOrderId, setTrackingOrderId] = useState<string | null>('FRZ-9042');
  const [lastPlacedOrder, setLastPlacedOrder] = useState<Order | null>(null);

  // Modals & Drawers
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);

  // Toasts
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Verified Pincode
  const [verifiedPincode, setVerifiedPincode] = useState<{ pin: string; city: string; minTime: number } | null>({
    pin: '500033',
    city: 'Hyderabad (Jubilee Hills)',
    minTime: 30
  });

  const selectedProduct = selectedProductSlug
    ? products.find((p) => p.slug === selectedProductSlug) || null
    : null;

  // Cart Calculations
  const cartSubtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  let discountAmount = 0;
  if (appliedCoupon && cartSubtotal >= appliedCoupon.minOrder) {
    if (appliedCoupon.discountPercent) {
      const calc = (cartSubtotal * appliedCoupon.discountPercent) / 100;
      discountAmount = appliedCoupon.maxDiscount ? Math.min(calc, appliedCoupon.maxDiscount) : calc;
    } else if (appliedCoupon.discountFlat) {
      discountAmount = appliedCoupon.discountFlat;
    }
  }

  const isFreeDelivery = cartSubtotal >= FREE_DELIVERY_THRESHOLD || appliedCoupon?.code === 'FREESHIP';
  const deliveryFee = cart.length === 0 ? 0 : isFreeDelivery ? 0 : STANDARD_DELIVERY_FEE;
  const taxableAmount = Math.max(0, cartSubtotal - discountAmount);
  const taxes = Number((taxableAmount * 0.05).toFixed(2)); // 5% GST on confectionery
  const cartTotal = Number((taxableAmount + deliveryFee + taxes).toFixed(2));

  const amountToFreeDelivery = Math.max(0, FREE_DELIVERY_THRESHOLD - cartSubtotal);

  // Navigation
  const navigateTo = (view: ViewMode, productSlug?: string, orderId?: string) => {
    setCurrentView(view);
    if (productSlug) {
      setSelectedProductSlug(productSlug);
    }
    if (orderId) {
      setTrackingOrderId(orderId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Toast Helper
  const addToast = (
    title: string,
    description?: string,
    type: 'success' | 'info' | 'warning' | 'error' = 'success'
  ) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, title, description, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 4000);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Cart Actions
  const addToCart = (product: Product, quantity = 1) => {
    if (!product.inStock || product.stock <= 0) {
      addToast('Out of Stock', `${product.name} is currently out of stock.`, 'warning');
      return;
    }

    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        const newQty = Math.min(existing.quantity + quantity, product.stock);
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, quantity: newQty } : item
        );
      }
      return [...prev, { product, quantity: Math.min(quantity, product.stock) }];
    });

    addToast('Added to Sweet Bag', `${quantity}x ${product.name} added!`, 'success');
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
    addToast('Removed from Bag', 'Item removed from your cart', 'info');
  };

  const updateCartQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) => {
      return prev.map((item) => {
        if (item.product.id === productId) {
          const clamped = Math.min(quantity, item.product.stock);
          return { ...item, quantity: clamped };
        }
        return item;
      });
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  // Wishlist Actions
  const toggleWishlist = (productId: string) => {
    const product = products.find((p) => p.id === productId);
    setWishlist((prev) => {
      const exists = prev.includes(productId);
      if (exists) {
        addToast('Removed from Wishlist', `${product?.name || 'Item'} removed`, 'info');
        return prev.filter((id) => id !== productId);
      } else {
        addToast('Saved to Sweet Wishlist', `${product?.name || 'Item'} saved with love ❤️`, 'success');
        return [...prev, productId];
      }
    });
  };

  const isInWishlist = (productId: string) => wishlist.includes(productId);

  // Coupon Actions
  const applyCoupon = (code: string) => {
    const trimmed = code.trim().toUpperCase();
    const found = DEMO_COUPONS.find((c) => c.code.toUpperCase() === trimmed);

    if (!found) {
      addToast('Invalid Coupon', 'That coupon code does not exist or has expired.', 'error');
      return { success: false, message: 'Invalid coupon code.' };
    }

    if (!found.isActive) {
      addToast('Coupon Expired', 'This coupon is no longer active.', 'error');
      return { success: false, message: 'Coupon has expired.' };
    }

    if (cartSubtotal < found.minOrder) {
      const msg = `Minimum order amount of ₹${found.minOrder} required for ${found.code}.`;
      addToast('Minimum Not Met', msg, 'warning');
      return { success: false, message: msg };
    }

    setAppliedCoupon(found);
    addToast('Coupon Applied!', `You saved with ${found.code}!`, 'success');
    return { success: true, message: `Coupon ${found.code} applied successfully!` };
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    addToast('Coupon Removed', 'Promo code removed from your order.', 'info');
  };

  // Pincode Checker
  const checkPincode = (pin: string) => {
    const clean = pin.trim();
    if (SERVICEABLE_PINS[clean]) {
      const data = SERVICEABLE_PINS[clean];
      setVerifiedPincode({ pin: clean, city: data.city, minTime: data.minTimeMinutes });
      return {
        serviceable: true,
        city: data.city,
        minTime: data.minTimeMinutes,
        message: `Good news! Frezzo delivers to ${data.city} in ~${data.minTimeMinutes} mins chilled.`
      };
    } else if (clean.length === 6 && /^\d+$/.test(clean)) {
      // For any standard Indian 6-digit pin code, give an informative serviceable or upcoming notice
      const isMetropolitan = clean.startsWith('500') || clean.startsWith('400') || clean.startsWith('560') || clean.startsWith('110');
      if (isMetropolitan) {
        const inferredCity = clean.startsWith('500')
          ? 'Hyderabad'
          : clean.startsWith('400')
          ? 'Mumbai'
          : clean.startsWith('560')
          ? 'Bengaluru'
          : 'Delhi NCR';
        setVerifiedPincode({ pin: clean, city: inferredCity, minTime: 45 });
        return {
          serviceable: true,
          city: inferredCity,
          minTime: 45,
          message: `Good news! Frezzo delivers fresh to ${clean} (${inferredCity}) in ~45 mins.`
        };
      }
      return {
        serviceable: false,
        message: "We're not delivering here yet — but we're expanding our cold-chain hubs rapidly!"
      };
    }
    return {
      serviceable: false,
      message: 'Please enter a valid 6-digit PIN code.'
    };
  };

  // Place Order (Simulation)
  const placeOrder = async (
    address: OrderAddress,
    paymentMethod: 'upi' | 'card' | 'netbanking' | 'wallet' | 'cod',
    deliverySlot = 'Instant Chilled Express (30 - 45 mins)'
  ): Promise<Order> => {
    const newOrderId = `FRZ-${Math.floor(1000 + Math.random() * 9000)}`;

    const newOrder: Order = {
      id: newOrderId,
      createdAt: 'Just now',
      customerName: address.fullName,
      customerEmail: address.email,
      customerPhone: address.mobile,
      items: cart.map((item) => ({
        productId: item.product.id,
        productName: item.product.name,
        price: item.product.price,
        quantity: item.quantity,
        image: item.product.images[0]
      })),
      subtotal: cartSubtotal,
      discount: discountAmount,
      couponCode: appliedCoupon?.code,
      deliveryFee,
      taxes,
      total: cartTotal,
      status: 'confirmed',
      paymentMethod,
      paymentStatus: paymentMethod === 'cod' ? 'pending' : 'paid',
      deliveryAddress: address,
      estimatedDeliveryTime: deliverySlot,
      temperatureControl: true,
      timeline: [
        {
          status: 'placed',
          title: 'Order Placed',
          description: 'Received in our confectionery order system.',
          timestamp: 'Just now',
          completed: true,
          current: false
        },
        {
          status: 'confirmed',
          title: 'Confirmed by Frezzo Kitchen',
          description: 'Payment verified and batch assigned.',
          timestamp: 'Just now',
          completed: true,
          current: true
        },
        {
          status: 'preparing',
          title: 'Chilled Handcrafting',
          description: 'Gently layering fresh fruit compote and farm malai.',
          timestamp: 'In ~10 mins',
          completed: false,
          current: false
        },
        {
          status: 'packed',
          title: 'Thermal Ice Box Packing',
          description: 'Sealing temperature-controlled cold packs.',
          timestamp: 'In ~20 mins',
          completed: false,
          current: false
        },
        {
          status: 'out_for_delivery',
          title: 'Out for Delivery',
          description: 'Express chilled rider dispatched.',
          timestamp: 'In ~30 mins',
          completed: false,
          current: false
        },
        {
          status: 'delivered',
          title: 'Delivered',
          description: 'Pure dessert indulgence delivered to your hands.',
          timestamp: 'Estimated 35 - 45 mins',
          completed: false,
          current: false
        }
      ]
    };

    // Deduct stock for placed products
    setProducts((prev) => {
      return prev.map((p) => {
        const purchased = cart.find((item) => item.product.id === p.id);
        if (purchased) {
          const newStock = Math.max(0, p.stock - purchased.quantity);
          return {
            ...p,
            stock: newStock,
            inStock: newStock > 0
          };
        }
        return p;
      });
    });

    setOrders((prev) => [newOrder, ...prev]);
    setLastPlacedOrder(newOrder);
    setTrackingOrderId(newOrder.id);
    clearCart();
    return newOrder;
  };

  // Admin Actions
  const addProduct = (productData: Omit<Product, 'id'>) => {
    const id = `frz-${Math.random().toString(36).substring(2, 9)}`;
    const newProd: Product = {
      ...productData,
      id
    };
    setProducts((prev) => [newProd, ...prev]);
    addToast('Product Added', `${newProd.name} added to catalog`, 'success');
  };

  const updateProduct = (id: string, updates: Partial<Product>) => {
    setProducts((prev) =>
      prev.map((p) => {
        if (p.id === id) {
          const updated = { ...p, ...updates };
          if (updated.stock !== undefined) {
            updated.inStock = updated.stock > 0;
          }
          return updated;
        }
        return p;
      })
    );
    addToast('Product Updated', 'Changes saved successfully', 'info');
  };

  const deleteProduct = (id: string) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
    addToast('Product Deleted', 'Product removed from catalog', 'info');
  };

  const updateOrderStatus = (orderId: string, status: OrderStatus) => {
    setOrders((prev) =>
      prev.map((order) => {
        if (order.id === orderId) {
          const updatedTimeline = order.timeline.map((step) => {
            if (step.status === status) {
              return { ...step, completed: true, current: true, timestamp: 'Updated' };
            }
            return step;
          });
          return { ...order, status, timeline: updatedTimeline };
        }
        return order;
      })
    );
    addToast('Order Status Updated', `Order ${orderId} marked as ${status}`, 'success');
  };

  const addCoupon = (coupon: Coupon) => {
    DEMO_COUPONS.push(coupon);
    addToast('Coupon Created', `Code ${coupon.code} is now ready to use`, 'success');
  };

  return (
    <StoreContext.Provider
      value={{
        products,
        cart,
        wishlist,
        appliedCoupon,
        orders,
        customers,
        currentView,
        selectedProduct,
        searchModalOpen,
        cartDrawerOpen,
        trackingOrderId,
        lastPlacedOrder,
        toasts,
        verifiedPincode,
        cartSubtotal,
        discountAmount,
        deliveryFee,
        taxes,
        cartTotal,
        freeDeliveryThreshold: FREE_DELIVERY_THRESHOLD,
        amountToFreeDelivery,
        navigateTo,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        toggleWishlist,
        isInWishlist,
        applyCoupon,
        removeCoupon,
        openCartDrawer: () => setCartDrawerOpen(true),
        closeCartDrawer: () => setCartDrawerOpen(false),
        openSearchModal: () => setSearchModalOpen(true),
        closeSearchModal: () => setSearchModalOpen(false),
        addToast,
        removeToast,
        checkPincode,
        placeOrder,
        addProduct,
        updateProduct,
        deleteProduct,
        updateOrderStatus,
        addCoupon
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};
