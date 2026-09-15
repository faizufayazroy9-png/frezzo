import React, { useState } from 'react';
import {
  Star,
  Heart,
  ShoppingBag,
  Zap,
  ChevronDown,
  ShieldCheck,
  Truck,
  RotateCcw,
  Sparkles,
  MapPin,
  CheckCircle2,
  AlertCircle,
  ArrowLeft
} from 'lucide-react';
import { Product } from '../types';
import { useStore } from '../context/StoreContext';
import { DEMO_REVIEWS } from '../data/dessertData';

interface ProductDetailPageProps {
  product: Product;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ product }) => {
  const {
    addToCart,
    toggleWishlist,
    isInWishlist,
    navigateTo,
    openCartDrawer,
    checkPincode,
    products
  } = useStore();

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [pinInput, setPinInput] = useState('');
  const [pinResult, setPinResult] = useState<{ serviceable: boolean; message: string } | null>(null);

  // Accordion states
  const [openSection, setOpenSection] = useState<string | null>('ingredients');

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const isFavorite = isInWishlist(product.id);
  const isOutOfStock = !product.inStock || product.stock <= 0;

  const handleAddToCart = () => {
    addToCart(product, quantity);
    openCartDrawer();
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    navigateTo('checkout');
  };

  const handleCheckPin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pinInput.trim()) return;
    const result = checkPincode(pinInput);
    setPinResult(result);
  };

  const productReviews = DEMO_REVIEWS.filter(
    (r) => r.productId === product.id || r.productName === product.name
  );

  const relatedProducts = products
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      {/* Breadcrumbs & Back */}
      <div className="flex items-center justify-between text-xs text-stone-500 mb-6">
        <button
          onClick={() => navigateTo('shop')}
          className="flex items-center gap-1.5 text-[#2C1810] hover:text-[#85223B] font-medium transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Shop</span>
        </button>

        <nav aria-label="Breadcrumb" className="hidden sm:flex items-center gap-2">
          <button onClick={() => navigateTo('home')} className="hover:text-[#85223B]">Home</button>
          <span>/</span>
          <button onClick={() => navigateTo('shop')} className="hover:text-[#85223B]">Shop</button>
          <span>/</span>
          <span className="text-[#2C1810] font-semibold">{product.name}</span>
        </nav>
      </div>

      {/* Main Grid: Gallery & Product Info */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
        {/* Left: Gallery (5 cols) */}
        <div className="lg:col-span-6 space-y-4">
          {/* Main Large Image with Zoom Container */}
          <div className="relative aspect-square rounded-3xl overflow-hidden bg-[#F4EBE1] border border-[#EEDFD5] shadow-md group">
            <img
              src={product.images[selectedImageIndex] || product.images[0]}
              alt={`${product.name} large view`}
              className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
            />

            {/* Badges */}
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              {product.isBestseller && (
                <span className="px-3 py-1 text-xs font-bold tracking-wider uppercase rounded-full bg-[#85223B] text-white shadow-md flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  Bestseller
                </span>
              )}
              {product.isSeasonal && (
                <span className="px-3 py-1 text-xs font-bold uppercase rounded-full bg-[#FAF7F2] text-[#85223B] border border-[#F2A4B2] shadow-sm">
                  Seasonal Harvest
                </span>
              )}
            </div>

            {/* Temperature Badge */}
            <div className="absolute bottom-4 left-4 bg-[#2C1810]/85 backdrop-blur-md text-white text-[11px] font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span>Chilled sub-4°C Guaranteed</span>
            </div>
          </div>

          {/* Thumbnails Row */}
          <div className="flex items-center gap-3 overflow-x-auto pb-2">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImageIndex(idx)}
                className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 transition-all shrink-0 ${
                  selectedImageIndex === idx
                    ? 'border-[#85223B] ring-2 ring-[#85223B]/20 scale-95'
                    : 'border-transparent hover:border-[#DECBBF] opacity-75 hover:opacity-100'
                }`}
              >
                <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

          {/* Quick Assurance Strip */}
          <div className="p-4 rounded-2xl bg-white border border-[#EEDFD5] grid grid-cols-3 gap-2 text-center text-xs">
            <div className="flex flex-col items-center">
              <Truck className="w-4 h-4 text-[#85223B] mb-1" />
              <span className="font-bold text-[#2C1810]">45 Mins</span>
              <span className="text-[10px] text-stone-500">Chilled Delivery</span>
            </div>
            <div className="flex flex-col items-center border-x border-[#EEDFD5]">
              <Sparkles className="w-4 h-4 text-[#85223B] mb-1" />
              <span className="font-bold text-[#2C1810]">100% Real</span>
              <span className="text-[10px] text-stone-500">Fresh Fruit & Malai</span>
            </div>
            <div className="flex flex-col items-center">
              <ShieldCheck className="w-4 h-4 text-[#85223B] mb-1" />
              <span className="font-bold text-[#2C1810]">Hygienic</span>
              <span className="text-[10px] text-stone-500">FSSAI Standards</span>
            </div>
          </div>
        </div>

        {/* Right: Product Details & Purchase Actions (6 cols) */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
          <div>
            {/* Tag & Category */}
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#85223B]">
                {product.category}
              </span>
              <span className="text-stone-300">•</span>
              <span className="text-xs text-stone-500 font-medium">Glass Jar ({product.netQuantity})</span>
            </div>

            {/* Title */}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2C1810] tracking-tight mb-3">
              {product.name}
            </h1>

            {/* Rating & Reviews */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-1 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200 text-xs font-bold text-amber-800">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span>{product.rating.toFixed(1)}</span>
              </div>
              <span className="text-xs text-stone-600 font-medium">
                Based on {product.reviewCount} customer ratings
              </span>
            </div>

            {/* Price Row */}
            <div className="flex items-baseline gap-3 py-3 border-y border-[#EEDFD5] mb-4">
              <span className="text-3xl font-extrabold text-[#2C1810]">
                ₹{product.price}
              </span>
              {product.originalPrice && (
                <span className="text-base text-stone-400 line-through">
                  ₹{product.originalPrice}
                </span>
              )}
              {product.originalPrice && (
                <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  Save ₹{product.originalPrice - product.price}
                </span>
              )}
              <span className="text-xs text-stone-500 ml-auto font-medium">
                Inclusive of all taxes
              </span>
            </div>

            {/* Short Description */}
            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-normal">
              {product.detailedDescription}
            </p>

            {/* Stock State */}
            <div className="mb-6">
              {isOutOfStock ? (
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-800 text-xs font-bold">
                  <AlertCircle className="w-4 h-4" />
                  <span>Currently Out of Stock in Today's Batch</span>
                </div>
              ) : (
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Fresh Daily Batch Available ({product.stock} left)</span>
                </div>
              )}
            </div>

            {/* Quantity Selector & Action Buttons */}
            {!isOutOfStock && (
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-600">
                    Quantity:
                  </span>
                  <div className="flex items-center border-2 border-[#EEDFD5] rounded-xl overflow-hidden bg-white">
                    <button
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      disabled={quantity <= 1}
                      className="px-3.5 py-2 text-stone-600 hover:bg-[#F4EBE1] transition-colors disabled:opacity-30 text-base font-bold"
                    >
                      -
                    </button>
                    <span className="w-10 text-center font-bold text-sm text-[#2C1810]">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity((q) => Math.min(product.stock, q + 1))}
                      disabled={quantity >= product.stock}
                      className="px-3.5 py-2 text-stone-600 hover:bg-[#F4EBE1] transition-colors disabled:opacity-30 text-base font-bold"
                    >
                      +
                    </button>
                  </div>

                  <span className="text-xs text-stone-500">
                    Total: <strong className="text-[#2C1810]">₹{product.price * quantity}</strong>
                  </span>
                </div>

                {/* Main Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    id="product-add-to-cart"
                    onClick={handleAddToCart}
                    className="flex-1 py-3.5 px-6 rounded-2xl bg-[#2C1810] text-[#FAF7F2] hover:bg-[#85223B] transition-all font-bold text-sm flex items-center justify-center gap-2 shadow-md active:scale-95"
                  >
                    <ShoppingBag className="w-4 h-4 text-[#E88296]" />
                    <span>ADD TO CART</span>
                  </button>

                  <button
                    id="product-buy-now"
                    onClick={handleBuyNow}
                    className="flex-1 py-3.5 px-6 rounded-2xl bg-[#85223B] text-white hover:bg-[#6c172d] transition-all font-bold text-sm flex items-center justify-center gap-2 shadow-md active:scale-95"
                  >
                    <Zap className="w-4 h-4 text-amber-300" />
                    <span>BUY NOW</span>
                  </button>

                  <button
                    id="product-detail-wishlist"
                    onClick={() => toggleWishlist(product.id)}
                    className={`p-3.5 rounded-2xl border-2 transition-all flex items-center justify-center shadow-sm active:scale-95 ${
                      isFavorite
                        ? 'border-[#85223B] bg-[#85223B] text-white'
                        : 'border-[#EEDFD5] bg-white text-[#2C1810] hover:border-[#85223B]'
                    }`}
                    aria-label="Wishlist"
                  >
                    <Heart className={`w-5 h-5 ${isFavorite ? 'fill-white' : ''}`} />
                  </button>
                </div>
              </div>
            )}

            {/* PIN Code Serviceability Checker */}
            <div className="p-4 rounded-2xl bg-[#F4EBE1]/60 border border-[#EEDFD5] mb-8">
              <div className="flex items-center gap-2 mb-2 text-xs font-bold text-[#2C1810]">
                <MapPin className="w-4 h-4 text-[#85223B]" />
                <span>Check Fresh Delivery to Your PIN Code</span>
              </div>
              <form onSubmit={handleCheckPin} className="flex gap-2">
                <input
                  type="text"
                  maxLength={6}
                  placeholder="Enter 6-digit PIN (e.g. 500033)"
                  value={pinInput}
                  onChange={(e) => setPinInput(e.target.value)}
                  className="flex-1 px-3 py-2 text-xs bg-white rounded-xl border border-[#DECBBF] focus:outline-none focus:border-[#85223B]"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#2C1810] text-white hover:bg-[#85223B] text-xs font-bold rounded-xl transition-colors"
                >
                  Check
                </button>
              </form>

              {pinResult && (
                <div
                  className={`mt-2 text-xs p-2.5 rounded-lg flex items-start gap-2 ${
                    pinResult.serviceable
                      ? 'bg-emerald-50 text-emerald-900 border border-emerald-200'
                      : 'bg-amber-50 text-amber-900 border border-amber-200'
                  }`}
                >
                  {pinResult.serviceable ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  )}
                  <span>{pinResult.message}</span>
                </div>
              )}
            </div>

            {/* Accordion Details */}
            <div className="border-t border-[#EEDFD5] divide-y divide-[#EEDFD5]">
              {/* Ingredients */}
              <div className="py-3">
                <button
                  onClick={() => toggleSection('ingredients')}
                  className="w-full flex items-center justify-between text-left text-xs font-bold uppercase tracking-wider text-[#2C1810]"
                >
                  <span>Ingredients (Handcrafted Quality)</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      openSection === 'ingredients' ? 'rotate-180 text-[#85223B]' : ''
                    }`}
                  />
                </button>
                {openSection === 'ingredients' && (
                  <div className="pt-2 text-xs text-stone-600 leading-relaxed">
                    <p>{product.ingredients}</p>
                    <p className="mt-1 text-[11px] text-amber-800 italic">
                      Note: Demo ingredient specifications for product preview.
                    </p>
                  </div>
                )}
              </div>

              {/* Allergen Information */}
              <div className="py-3">
                <button
                  onClick={() => toggleSection('allergens')}
                  className="w-full flex items-center justify-between text-left text-xs font-bold uppercase tracking-wider text-[#2C1810]"
                >
                  <span>Allergen Information</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      openSection === 'allergens' ? 'rotate-180 text-[#85223B]' : ''
                    }`}
                  />
                </button>
                {openSection === 'allergens' && (
                  <div className="pt-2 text-xs text-stone-600 leading-relaxed">
                    <p>{product.allergenInfo}</p>
                    <p className="mt-1 text-[11px] text-amber-800 italic">
                      Placeholder for verified kitchen allergen disclosure.
                    </p>
                  </div>
                )}
              </div>

              {/* Storage & Shelf Life */}
              <div className="py-3">
                <button
                  onClick={() => toggleSection('storage')}
                  className="w-full flex items-center justify-between text-left text-xs font-bold uppercase tracking-wider text-[#2C1810]"
                >
                  <span>Storage & Shelf Life</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      openSection === 'storage' ? 'rotate-180 text-[#85223B]' : ''
                    }`}
                  />
                </button>
                {openSection === 'storage' && (
                  <div className="pt-2 text-xs text-stone-600 leading-relaxed space-y-1">
                    <p><strong>Storage:</strong> {product.storageInstructions}</p>
                    <p><strong>Shelf Life:</strong> {product.shelfLife}</p>
                    <p><strong>Serving Tip:</strong> {product.servingInfo}</p>
                  </div>
                )}
              </div>

              {/* Delivery & Cold-Chain */}
              <div className="py-3">
                <button
                  onClick={() => toggleSection('delivery')}
                  className="w-full flex items-center justify-between text-left text-xs font-bold uppercase tracking-wider text-[#2C1810]"
                >
                  <span>Delivery & Cold Packaging</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      openSection === 'delivery' ? 'rotate-180 text-[#85223B]' : ''
                    }`}
                  />
                </button>
                {openSection === 'delivery' && (
                  <div className="pt-2 text-xs text-stone-600 leading-relaxed space-y-1">
                    <p>{product.deliveryInfo}</p>
                    <p className="text-[11px] text-stone-500">
                      Dispatched with non-toxic gel packs inside double-walled thermal bags to guarantee that creamy, spoonable consistency upon opening.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Reviews Section */}
      <div className="mt-16 pt-12 border-t border-[#EEDFD5]">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C1810]">
              Customer Reviews for {product.name}
            </h2>
            <p className="text-xs text-stone-500 mt-1">
              Real tasting impressions from dessert connoisseurs across India (Demo Feedback)
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-extrabold text-base text-[#2C1810]">
              {product.rating.toFixed(1)} / 5.0
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productReviews.length > 0 ? (
            productReviews.map((rev) => (
              <div
                key={rev.id}
                className="bg-white rounded-2xl p-6 border border-[#EEDFD5] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] text-stone-400">{rev.date}</span>
                  </div>

                  <h4 className="font-bold text-sm text-[#2C1810] mb-2">"{rev.title}"</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">{rev.comment}</p>
                </div>

                <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-[#2C1810]">{rev.author}</span>
                    <span className="text-stone-400 text-[11px] block">{rev.city}</span>
                  </div>
                  {rev.verified && (
                    <span className="text-[10px] bg-emerald-50 text-emerald-800 font-semibold px-2 py-0.5 rounded-full border border-emerald-200">
                      Verified Tasting
                    </span>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-8 text-center bg-white rounded-2xl border border-dashed border-[#DECBBF]">
              <p className="text-sm font-semibold text-[#2C1810]">
                Be the first to leave a review for {product.name}!
              </p>
              <p className="text-xs text-stone-500 mt-1">
                Order today and tell us how you enjoyed this handcrafted creation.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* You May Also Like / Related Desserts */}
      <div className="mt-16 pt-12 border-t border-[#EEDFD5]">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C1810]">
            You May Also Like
          </h2>
          <button
            onClick={() => navigateTo('shop')}
            className="text-xs font-bold uppercase tracking-wider text-[#85223B] hover:underline"
          >
            Explore All →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedProducts.map((p) => (
            <div
              key={p.id}
              onClick={() => navigateTo('product-detail', p.slug)}
              className="group bg-white rounded-2xl overflow-hidden border border-[#EEDFD5] hover:border-[#DECBBF] shadow-sm hover:shadow-lg transition-all cursor-pointer flex items-center p-3 gap-4"
            >
              <img
                src={p.images[0]}
                alt={p.name}
                className="w-20 h-20 rounded-xl object-cover shrink-0 group-hover:scale-105 transition-transform"
              />
              <div className="flex-1">
                <h4 className="font-serif font-bold text-sm text-[#2C1810] group-hover:text-[#85223B] transition-colors line-clamp-1">
                  {p.name}
                </h4>
                <p className="text-[11px] text-stone-500 line-clamp-1 mt-0.5">{p.shortDescription}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="font-extrabold text-sm text-[#2C1810]">₹{p.price}</span>
                  <span className="text-[10px] font-bold text-[#85223B]">View Jar →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
