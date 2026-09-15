import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import {
  CheckCircle2,
  Truck,
  MapPin,
  Clock,
  ArrowRight,
  ShoppingBag,
  Sparkles
} from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const OrderSuccessPage: React.FC = () => {
  const { lastPlacedOrder, navigateTo } = useStore();

  useEffect(() => {
    // Launch celebratory confetti burst
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#85223B', '#E88296', '#2C1810', '#C89D5C', '#FAF7F2']
    });
  }, []);

  if (!lastPlacedOrder) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <h2 className="font-serif text-2xl font-bold text-[#2C1810] mb-4">
          No Recent Order Found
        </h2>
        <button
          onClick={() => navigateTo('shop')}
          className="px-6 py-2.5 rounded-full bg-[#85223B] text-white text-xs font-bold"
        >
          Browse Fresh Desserts
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#FAF7F2] min-h-screen py-12 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Main Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#EEDFD5] shadow-xl text-center">
          {/* Animated Success Badge */}
          <div className="w-20 h-20 rounded-full bg-emerald-50 border-2 border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto mb-6 shadow-sm">
            <CheckCircle2 className="w-10 h-10 animate-bounce" />
          </div>

          <span className="text-xs uppercase tracking-[0.25em] font-extrabold text-[#85223B]">
            Order Confirmed & Logged
          </span>

          <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#2C1810] mt-2 mb-3">
            Your Sweet Treats Are On Their Way! 🍨
          </h1>

          <p className="text-sm text-stone-600 max-w-md mx-auto mb-8">
            Thank you for ordering with FREZZO. Our confectionery kitchen has received your request and is packaging your chilled jars with loving care.
          </p>

          {/* Quick Info Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-[#FAF7F2] border border-[#EEDFD5] text-left text-xs mb-8">
            <div>
              <span className="text-stone-400 block text-[11px]">Order Reference</span>
              <strong className="text-[#2C1810] font-bold text-sm tracking-wide">
                #{lastPlacedOrder.id}
              </strong>
            </div>

            <div>
              <span className="text-stone-400 block text-[11px]">Estimated Handover</span>
              <div className="flex items-center gap-1 font-bold text-emerald-800">
                <Clock className="w-3.5 h-3.5" />
                <span>{lastPlacedOrder.estimatedDeliveryTime}</span>
              </div>
            </div>

            <div>
              <span className="text-stone-400 block text-[11px]">Paid Total</span>
              <strong className="text-[#85223B] font-extrabold text-sm">
                ₹{lastPlacedOrder.total}
              </strong>
            </div>
          </div>

          {/* Delivery Details */}
          <div className="text-left bg-[#FDF2F4]/60 p-4 sm:p-5 rounded-2xl border border-[#F2A4B2]/40 mb-8 space-y-2 text-xs">
            <div className="flex items-center gap-2 font-bold text-[#85223B]">
              <MapPin className="w-4 h-4" />
              <span>Delivering to:</span>
            </div>
            <p className="text-stone-700 leading-relaxed pl-6">
              <strong>{lastPlacedOrder.deliveryAddress.fullName}</strong> ({lastPlacedOrder.deliveryAddress.mobile})<br />
              {lastPlacedOrder.deliveryAddress.flat}, {lastPlacedOrder.deliveryAddress.street}, {lastPlacedOrder.deliveryAddress.area}, {lastPlacedOrder.deliveryAddress.city} - {lastPlacedOrder.deliveryAddress.pincode}
            </p>
          </div>

          {/* Order Summary Items */}
          <div className="text-left mb-8 border border-[#EEDFD5] rounded-2xl p-4 sm:p-5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-3">
              Items in this chilled box
            </h4>
            <div className="space-y-3 divide-y divide-stone-100">
              {lastPlacedOrder.items.map((item, idx) => (
                <div key={idx} className="pt-2 first:pt-0 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.productName}
                      className="w-10 h-10 rounded-xl object-cover"
                    />
                    <div>
                      <p className="font-bold text-[#2C1810]">{item.productName}</p>
                      <p className="text-[11px] text-stone-500">Qty: {item.quantity}</p>
                    </div>
                  </div>
                  <span className="font-extrabold text-[#2C1810]">
                    ₹{item.price * item.quantity}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              id="order-success-track"
              onClick={() => navigateTo('order-tracking', undefined, lastPlacedOrder.id)}
              className="py-3.5 px-8 rounded-full bg-[#85223B] hover:bg-[#6c172d] text-white font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-md transition-all"
            >
              <Truck className="w-4 h-4" />
              <span>TRACK ORDER LIVE</span>
            </button>

            <button
              id="order-success-continue"
              onClick={() => navigateTo('shop')}
              className="py-3.5 px-8 rounded-full bg-[#FAF7F2] hover:bg-[#F4EBE1] text-[#2C1810] border border-[#DECBBF] font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all"
            >
              <ShoppingBag className="w-4 h-4 text-[#85223B]" />
              <span>CONTINUE SHOPPING</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
