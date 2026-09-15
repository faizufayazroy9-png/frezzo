import React, { useState } from 'react';
import {
  ShieldCheck,
  CreditCard,
  QrCode,
  Building2,
  Banknote,
  ArrowLeft,
  Truck,
  Sparkles,
  Lock,
  CheckCircle2
} from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { OrderAddress } from '../types';

export const CheckoutPage: React.FC = () => {
  const {
    cart,
    cartSubtotal,
    discountAmount,
    deliveryFee,
    taxes,
    cartTotal,
    appliedCoupon,
    placeOrder,
    navigateTo
  } = useStore();

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Step 1 & 2: Form Data
  const [address, setAddress] = useState<OrderAddress>({
    fullName: 'Ananya Sharma',
    mobile: '9876543210',
    email: 'ananya.sharma@example.com',
    flat: 'Flat 402, Lotus Grand Residences',
    street: '14th Cross, Road No. 36',
    area: 'Jubilee Hills',
    city: 'Hyderabad',
    state: 'Telangana',
    pincode: '500033',
    landmark: 'Opposite Starbucks Reserve',
    addressType: 'home'
  });

  // Step 3: Delivery Slot
  const [deliverySlot, setDeliverySlot] = useState(
    'Instant Chilled Express (30 - 45 mins)'
  );

  // Step 4: Payment Method
  const [paymentMethod, setPaymentMethod] = useState<
    'upi' | 'card' | 'netbanking' | 'wallet' | 'cod'
  >('upi');

  const [upiId, setUpiId] = useState('ananya@okhdfcbank');
  const [cardNumber, setCardNumber] = useState('4532 •••• •••• 8921');

  if (cart.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <h2 className="font-serif text-2xl font-bold text-[#2C1810] mb-3">
          Your sweet bag is empty
        </h2>
        <p className="text-sm text-stone-500 mb-6">
          Add fresh handcrafted desserts before proceeding to checkout.
        </p>
        <button
          onClick={() => navigateTo('shop')}
          className="px-6 py-3 rounded-full bg-[#85223B] text-white font-bold text-sm hover:bg-[#6c172d]"
        >
          Explore Desserts
        </button>
      </div>
    );
  }

  const handleSubmitOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate simulated network delay for realistic experience
      await new Promise((res) => setTimeout(res, 1200));
      const order = await placeOrder(address, paymentMethod, deliverySlot);
      navigateTo('order-success', undefined, order.id);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#FAF7F2] min-h-screen py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Back & Assurance */}
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#EEDFD5]">
          <button
            onClick={() => navigateTo('cart')}
            className="flex items-center gap-2 text-xs font-semibold text-[#2C1810] hover:text-[#85223B] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Shopping Bag</span>
          </button>

          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            <Lock className="w-3.5 h-3.5" />
            <span>Secure 256-Bit Encrypted Checkout (Demo Mode)</span>
          </div>
        </div>

        <form onSubmit={handleSubmitOrder}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Col: Contact, Address, Delivery, Payment (7 cols) */}
            <div className="lg:col-span-7 space-y-8">
              {/* Step 1: Contact Information */}
              <div className="bg-white rounded-3xl p-6 border border-[#EEDFD5] shadow-xs">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-7 h-7 rounded-full bg-[#2C1810] text-[#FAF7F2] text-xs font-bold flex items-center justify-center">
                    1
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#2C1810]">
                    Contact Information
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-600 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={address.fullName}
                      onChange={(e) => setAddress({ ...address, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FAF7F2] rounded-xl border border-[#DECBBF] focus:outline-none focus:border-[#85223B]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-600 mb-1">
                      Mobile Number (for delivery updates) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={address.mobile}
                      onChange={(e) => setAddress({ ...address, mobile: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FAF7F2] rounded-xl border border-[#DECBBF] focus:outline-none focus:border-[#85223B]"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-stone-600 mb-1">
                      Email Address (for order receipt) *
                    </label>
                    <input
                      type="email"
                      required
                      value={address.email}
                      onChange={(e) => setAddress({ ...address, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FAF7F2] rounded-xl border border-[#DECBBF] focus:outline-none focus:border-[#85223B]"
                    />
                  </div>
                </div>
              </div>

              {/* Step 2: Delivery Address */}
              <div className="bg-white rounded-3xl p-6 border border-[#EEDFD5] shadow-xs">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-7 h-7 rounded-full bg-[#2C1810] text-[#FAF7F2] text-xs font-bold flex items-center justify-center">
                    2
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#2C1810]">
                    Delivery Address (Chilled Handover)
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-stone-600 mb-1">
                      Flat / House No. / Building Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={address.flat}
                      onChange={(e) => setAddress({ ...address, flat: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FAF7F2] rounded-xl border border-[#DECBBF] focus:outline-none focus:border-[#85223B]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-600 mb-1">
                      Street / Road / Lane *
                    </label>
                    <input
                      type="text"
                      required
                      value={address.street}
                      onChange={(e) => setAddress({ ...address, street: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FAF7F2] rounded-xl border border-[#DECBBF] focus:outline-none focus:border-[#85223B]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-600 mb-1">
                      Area / Locality *
                    </label>
                    <input
                      type="text"
                      required
                      value={address.area}
                      onChange={(e) => setAddress({ ...address, area: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FAF7F2] rounded-xl border border-[#DECBBF] focus:outline-none focus:border-[#85223B]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-600 mb-1">
                      City *
                    </label>
                    <input
                      type="text"
                      required
                      value={address.city}
                      onChange={(e) => setAddress({ ...address, city: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FAF7F2] rounded-xl border border-[#DECBBF] focus:outline-none focus:border-[#85223B]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-600 mb-1">
                      PIN Code *
                    </label>
                    <input
                      type="text"
                      maxLength={6}
                      required
                      value={address.pincode}
                      onChange={(e) => setAddress({ ...address, pincode: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FAF7F2] rounded-xl border border-[#DECBBF] focus:outline-none focus:border-[#85223B]"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-stone-600 mb-1">
                      Landmark (Optional)
                    </label>
                    <input
                      type="text"
                      value={address.landmark || ''}
                      onChange={(e) => setAddress({ ...address, landmark: e.target.value })}
                      placeholder="e.g. Near HDFC Bank ATM"
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FAF7F2] rounded-xl border border-[#DECBBF] focus:outline-none focus:border-[#85223B]"
                    />
                  </div>
                </div>
              </div>

              {/* Step 3: Delivery Options */}
              <div className="bg-white rounded-3xl p-6 border border-[#EEDFD5] shadow-xs">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-7 h-7 rounded-full bg-[#2C1810] text-[#FAF7F2] text-xs font-bold flex items-center justify-center">
                    3
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#2C1810]">
                    Select Delivery Slot
                  </h3>
                </div>

                <div className="space-y-3">
                  {[
                    {
                      id: 'express',
                      label: 'Instant Chilled Express (30 - 45 mins)',
                      desc: 'Dispatched immediately in insulated ice box from nearest kitchen hub',
                      badge: 'Fastest'
                    },
                    {
                      id: 'evening',
                      label: 'Evening Dessert Slot (06:30 PM - 08:30 PM)',
                      desc: 'Perfect for dinner & post-work sweet cravings'
                    },
                    {
                      id: 'morning',
                      label: 'Next Morning Fresh Slot (10:00 AM - 12:00 PM)',
                      desc: 'Packed right from the morning churn batch'
                    }
                  ].map((slot) => (
                    <label
                      key={slot.id}
                      className={`flex items-start gap-3 p-3.5 rounded-2xl border-2 cursor-pointer transition-all ${
                        deliverySlot === slot.label
                          ? 'border-[#85223B] bg-[#FDF2F4]'
                          : 'border-[#EEDFD5] hover:border-[#DECBBF] bg-[#FAF7F2]'
                      }`}
                    >
                      <input
                        type="radio"
                        name="delivery_slot"
                        checked={deliverySlot === slot.label}
                        onChange={() => setDeliverySlot(slot.label)}
                        className="mt-1 accent-[#85223B]"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-[#2C1810]">{slot.label}</span>
                          {slot.badge && (
                            <span className="px-2 py-0.5 rounded-full bg-[#85223B] text-white text-[10px] font-extrabold">
                              {slot.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-stone-500 mt-0.5">{slot.desc}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Step 4: Demo Payment Methods */}
              <div className="bg-white rounded-3xl p-6 border border-[#EEDFD5] shadow-xs">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-[#2C1810] text-[#FAF7F2] text-xs font-bold flex items-center justify-center">
                      4
                    </div>
                    <h3 className="font-serif text-lg font-bold text-[#2C1810]">
                      Payment Method
                    </h3>
                  </div>
                  <span className="text-[11px] text-stone-400 font-medium italic">
                    (Simulated Demo Flow)
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                  {[
                    { id: 'upi', label: 'UPI / QR', icon: QrCode },
                    { id: 'card', label: 'Cards', icon: CreditCard },
                    { id: 'netbanking', label: 'Net Banking', icon: Building2 },
                    { id: 'cod', label: 'Cash on Del.', icon: Banknote }
                  ].map((method) => {
                    const Icon = method.icon;
                    const isSelected = paymentMethod === method.id;
                    return (
                      <button
                        key={method.id}
                        type="button"
                        onClick={() => setPaymentMethod(method.id as any)}
                        className={`p-3 rounded-2xl border-2 flex flex-col items-center justify-center text-center transition-all ${
                          isSelected
                            ? 'border-[#85223B] bg-[#FDF2F4] text-[#85223B] font-bold'
                            : 'border-[#EEDFD5] bg-[#FAF7F2] text-stone-600 hover:border-[#DECBBF]'
                        }`}
                      >
                        <Icon className="w-5 h-5 mb-1.5" />
                        <span className="text-xs">{method.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Simulated payment detail view */}
                <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#DECBBF] text-xs">
                  {paymentMethod === 'upi' && (
                    <div className="space-y-3">
                      <p className="font-semibold text-[#2C1810]">
                        Pay instantly using GPay, PhonePe, Paytm or BHIM UPI
                      </p>
                      <div className="flex items-center gap-3">
                        <input
                          type="text"
                          value={upiId}
                          onChange={(e) => setUpiId(e.target.value)}
                          placeholder="yourname@upi"
                          className="flex-1 px-3 py-2 bg-white rounded-xl border border-[#DECBBF] text-xs"
                        />
                        <span className="text-emerald-700 font-bold text-xs flex items-center gap-1">
                          <CheckCircle2 className="w-4 h-4" /> Verified
                        </span>
                      </div>
                    </div>
                  )}

                  {paymentMethod === 'card' && (
                    <div className="space-y-3">
                      <p className="font-semibold text-[#2C1810]">
                        Credit / Debit Card (Simulated Demo Card)
                      </p>
                      <input
                        type="text"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        className="w-full px-3 py-2 bg-white rounded-xl border border-[#DECBBF] text-xs"
                      />
                    </div>
                  )}

                  {paymentMethod === 'netbanking' && (
                    <p className="text-stone-600">
                      All major banks supported: HDFC, ICICI, SBI, Axis, Kotak. (Demo Instant Approval)
                    </p>
                  )}

                  {paymentMethod === 'cod' && (
                    <p className="text-stone-600">
                      Pay via cash or UPI QR upon chilled delivery arrival. Please keep exact change ready.
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Right Col: Order Summary & Review (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-3xl p-6 border border-[#EEDFD5] shadow-md sticky top-28">
                <h3 className="font-serif text-lg font-bold text-[#2C1810] mb-4 pb-3 border-b border-[#EEDFD5]">
                  Order Review ({cart.reduce((s, i) => s + i.quantity, 0)} Items)
                </h3>

                {/* Items List */}
                <div className="space-y-3 max-h-60 overflow-y-auto pr-1 mb-4">
                  {cart.map((item) => (
                    <div key={item.product.id} className="flex items-center gap-3 text-xs">
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-12 h-12 rounded-xl object-cover shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-[#2C1810] truncate">{item.product.name}</p>
                        <p className="text-[11px] text-stone-500">
                          {item.quantity} x ₹{item.product.price}
                        </p>
                      </div>
                      <span className="font-extrabold text-[#2C1810]">
                        ₹{item.product.price * item.quantity}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Price Breakdown */}
                <div className="space-y-2 text-xs text-stone-600 pt-3 border-t border-[#EEDFD5]">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-semibold text-[#2C1810]">₹{cartSubtotal}</span>
                  </div>
                  {discountAmount > 0 && (
                    <div className="flex justify-between text-emerald-700 font-bold">
                      <span>Promo Savings ({appliedCoupon?.code})</span>
                      <span>-₹{discountAmount}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>Chilled Express Delivery</span>
                    <span>
                      {deliveryFee === 0 ? (
                        <strong className="text-emerald-700 font-bold uppercase text-[11px]">
                          FREE
                        </strong>
                      ) : (
                        `₹${deliveryFee}`
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Taxes (GST 5%)</span>
                    <span>₹{taxes}</span>
                  </div>
                  <div className="flex justify-between text-base font-extrabold text-[#2C1810] pt-3 border-t border-[#EEDFD5]">
                    <span>Total Payable</span>
                    <span className="text-xl font-black text-[#85223B]">₹{cartTotal}</span>
                  </div>
                </div>

                {/* Place Order CTA */}
                <button
                  type="submit"
                  id="place-order-btn"
                  disabled={isSubmitting}
                  className="w-full mt-6 py-4 px-6 rounded-2xl bg-[#85223B] hover:bg-[#6c172d] text-white font-bold text-sm shadow-xl transition-all active:scale-95 disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Simulating Fresh Order Dispatch...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 text-amber-300" />
                      <span>PLACE ORDER (₹{cartTotal})</span>
                    </>
                  )}
                </button>

                <div className="mt-4 p-3 rounded-xl bg-[#FAF7F2] border border-[#EEDFD5] text-[11px] text-stone-500 space-y-1">
                  <p className="font-semibold text-[#2C1810] flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    Chilled Thermal Handover
                  </p>
                  <p>
                    Every jar is sealed at 2°C in food-grade cold containers for pristine texture and spoonable bliss.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
