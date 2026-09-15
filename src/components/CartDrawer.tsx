import React, { useState } from 'react';
import {
  X,
  ShoppingBag,
  Trash2,
  Heart,
  Plus,
  Minus,
  Sparkles,
  Tag,
  ArrowRight,
  CheckCircle2,
  Truck
} from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    cartDrawerOpen,
    closeCartDrawer,
    updateCartQuantity,
    removeFromCart,
    toggleWishlist,
    cartSubtotal,
    discountAmount,
    deliveryFee,
    taxes,
    cartTotal,
    freeDeliveryThreshold,
    amountToFreeDelivery,
    appliedCoupon,
    applyCoupon,
    removeCoupon,
    navigateTo,
    products,
    addToCart
  } = useStore();

  const [couponInput, setCouponInput] = useState('');
  const [couponError, setCouponError] = useState<string | null>(null);

  if (!cartDrawerOpen) return null;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!couponInput.trim()) return;
    const result = applyCoupon(couponInput);
    if (!result.success) {
      setCouponError(result.message);
    } else {
      setCouponError(null);
      setCouponInput('');
    }
  };

  const handleCheckoutClick = () => {
    closeCartDrawer();
    navigateTo('checkout');
  };

  // 2 recommended upsells not already in the cart
  const cartProductIds = cart.map((i) => i.product.id);
  const upsellProducts = products
    .filter((p) => !cartProductIds.includes(p.id) && p.inStock)
    .slice(0, 2);

  const progressPercentage = Math.min(
    100,
    Math.round((cartSubtotal / freeDeliveryThreshold) * 100)
  );

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={closeCartDrawer}
      />

      <div className="fixed inset-y-0 right-0 max-w-md w-full bg-[#FAF7F2] shadow-2xl flex flex-col justify-between z-10 border-l border-[#EEDFD5]">
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 border-b border-[#EEDFD5] bg-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#85223B]" />
            <h2 className="font-serif text-lg font-bold text-[#2C1810]">
              Your Sweet Bag ({cart.reduce((s, i) => s + i.quantity, 0)})
            </h2>
          </div>
          <button
            id="close-cart-btn"
            onClick={closeCartDrawer}
            className="p-1.5 rounded-full text-stone-400 hover:text-stone-800 hover:bg-stone-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Delivery Bar */}
        <div className="bg-[#FDF2F4] p-3 border-b border-[#F2A4B2]/40 text-xs">
          {amountToFreeDelivery > 0 ? (
            <div className="space-y-1.5">
              <div className="flex items-center justify-between font-semibold text-[#85223B]">
                <span className="flex items-center gap-1.5">
                  <Truck className="w-4 h-4" />
                  You're <strong className="underline">₹{amountToFreeDelivery}</strong> away from Free Chilled Delivery!
                </span>
                <span>{progressPercentage}%</span>
              </div>
              <div className="w-full bg-[#EEDFD5] h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-[#85223B] h-full rounded-full transition-all duration-300"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-2 font-bold text-emerald-800">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>🎉 Free Express Chilled Delivery unlocked!</span>
            </div>
          )}
        </div>

        {/* Cart Items Scroll Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          {cart.length === 0 ? (
            <div className="py-16 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#F4EBE1] text-[#85223B] flex items-center justify-center mx-auto">
                <ShoppingBag className="w-8 h-8 opacity-60" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#2C1810]">
                Your sweet bag is empty
              </h3>
              <p className="text-xs text-stone-500 max-w-xs mx-auto">
                Discover handcrafted fruit malai and artisanal confectionery made fresh today.
              </p>
              <button
                onClick={() => {
                  closeCartDrawer();
                  navigateTo('shop');
                }}
                className="px-6 py-2.5 rounded-full bg-[#2C1810] text-[#FAF7F2] text-xs font-bold hover:bg-[#85223B] transition-colors"
              >
                Explore Desserts
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.product.id}
                className="bg-white rounded-2xl p-3 sm:p-4 border border-[#EEDFD5] shadow-xs flex gap-3 sm:gap-4 items-center"
              >
                <img
                  src={item.product.images[0]}
                  alt={item.product.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover shrink-0 cursor-pointer"
                  onClick={() => {
                    closeCartDrawer();
                    navigateTo('product-detail', item.product.slug);
                  }}
                />

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-1">
                    <h4
                      onClick={() => {
                        closeCartDrawer();
                        navigateTo('product-detail', item.product.slug);
                      }}
                      className="font-serif font-bold text-sm text-[#2C1810] truncate cursor-pointer hover:text-[#85223B]"
                    >
                      {item.product.name}
                    </h4>
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-stone-400 hover:text-rose-600 p-1 transition-colors"
                      title="Remove"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <p className="text-[11px] text-stone-500 mb-2">
                    ₹{item.product.price} each • {item.product.netQuantity}
                  </p>

                  <div className="flex items-center justify-between">
                    {/* Stepper */}
                    <div className="flex items-center border border-[#DECBBF] rounded-lg overflow-hidden bg-[#FAF7F2]">
                      <button
                        onClick={() => updateCartQuantity(item.product.id, item.quantity - 1)}
                        className="px-2 py-1 text-stone-600 hover:bg-white text-xs font-bold"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-7 text-center text-xs font-bold text-[#2C1810]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateCartQuantity(item.product.id, item.quantity + 1)}
                        className="px-2 py-1 text-stone-600 hover:bg-white text-xs font-bold"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => toggleWishlist(item.product.id)}
                        className="text-stone-400 hover:text-[#85223B] p-1"
                        title="Save to Wishlist"
                      >
                        <Heart className="w-4 h-4" />
                      </button>
                      <span className="font-extrabold text-sm text-[#2C1810]">
                        ₹{item.product.price * item.quantity}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}

          {/* Upsell / You May Also Like */}
          {cart.length > 0 && upsellProducts.length > 0 && (
            <div className="pt-4 mt-4 border-t border-[#EEDFD5]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#85223B] mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                You May Also Like
              </h4>
              <div className="space-y-2">
                {upsellProducts.map((up) => (
                  <div
                    key={up.id}
                    className="p-2.5 rounded-xl bg-[#F4EBE1]/70 border border-[#DECBBF] flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <img
                        src={up.images[0]}
                        alt={up.name}
                        className="w-10 h-10 rounded-lg object-cover"
                      />
                      <div className="truncate">
                        <p className="text-xs font-bold text-[#2C1810] truncate">{up.name}</p>
                        <p className="text-[10px] text-stone-500">₹{up.price}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => addToCart(up, 1)}
                      className="px-2.5 py-1 rounded-lg bg-[#2C1810] text-[#FAF7F2] text-[11px] font-bold hover:bg-[#85223B] transition-colors shrink-0"
                    >
                      + Add
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Drawer Footer / Summary & Checkout */}
        {cart.length > 0 && (
          <div className="p-4 sm:p-5 bg-white border-t border-[#EEDFD5] space-y-3">
            {/* Coupon Code Input */}
            <div>
              {appliedCoupon ? (
                <div className="flex items-center justify-between p-2 rounded-xl bg-emerald-50 border border-emerald-200 text-xs">
                  <div className="flex items-center gap-1.5 text-emerald-800 font-semibold">
                    <Tag className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Coupon <strong>{appliedCoupon.code}</strong> applied</span>
                  </div>
                  <button
                    onClick={removeCoupon}
                    className="text-stone-500 hover:text-stone-900 text-[11px] font-bold"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplyCoupon} className="flex gap-2">
                  <div className="relative flex-1">
                    <Tag className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Promo code (e.g. FREZZO10)"
                      value={couponInput}
                      onChange={(e) => {
                        setCouponInput(e.target.value);
                        setCouponError(null);
                      }}
                      className="w-full pl-8 pr-3 py-2 text-xs uppercase bg-[#FAF7F2] rounded-xl border border-[#DECBBF] focus:outline-none focus:border-[#85223B]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#2C1810] text-[#FAF7F2] hover:bg-[#85223B] text-xs font-bold rounded-xl transition-colors"
                  >
                    Apply
                  </button>
                </form>
              )}
              {couponError && (
                <p className="text-[11px] text-rose-600 mt-1 font-medium">{couponError}</p>
              )}
            </div>

            {/* Calculations Breakdown */}
            <div className="space-y-1.5 text-xs text-stone-600 pt-1">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold text-[#2C1810]">₹{cartSubtotal}</span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-emerald-700 font-medium">
                  <span>Coupon Discount ({appliedCoupon?.code})</span>
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
                <span>GST (5%)</span>
                <span>₹{taxes}</span>
              </div>
              <div className="flex justify-between text-sm font-extrabold text-[#2C1810] pt-2 border-t border-[#F4EBE1]">
                <span>Total Amount</span>
                <span className="text-base font-black text-[#85223B]">₹{cartTotal}</span>
              </div>
            </div>

            {/* Checkout Button */}
            <button
              id="cart-proceed-checkout"
              onClick={handleCheckoutClick}
              className="w-full py-3.5 px-6 rounded-2xl bg-[#85223B] hover:bg-[#6c172d] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-all duration-200 active:scale-95"
            >
              <span>PROCEED TO CHECKOUT</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <p className="text-[10px] text-center text-stone-400">
              Safe & Chilled Thermal Delivery • 100% Satisfaction Guarantee
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
