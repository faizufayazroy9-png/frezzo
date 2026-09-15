import React from 'react';
import { Star, Heart, Plus, Eye, Sparkles } from 'lucide-react';
import { Product } from '../types';
import { useStore } from '../context/StoreContext';

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const {
    addToCart,
    toggleWishlist,
    isInWishlist,
    navigateTo,
    cart
  } = useStore();

  const isFavorite = isInWishlist(product.id);
  const cartItem = cart.find((item) => item.product.id === product.id);
  const isOutOfStock = !product.inStock || product.stock <= 0;
  const isLowStock = product.inStock && product.stock <= product.lowStockThreshold;

  const handleCardClick = () => {
    navigateTo('product-detail', product.slug);
  };

  return (
    <div
      id={`product-card-${product.id}`}
      className="group relative bg-white rounded-2xl overflow-hidden border border-[#EEDFD5] hover:border-[#DECBBF] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
    >
      {/* Top Media Area */}
      <div className="relative aspect-square overflow-hidden bg-[#F4EBE1] cursor-pointer" onClick={handleCardClick}>
        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start pointer-events-none">
          {product.isBestseller && (
            <span className="px-2.5 py-1 text-[11px] font-bold tracking-wider uppercase rounded-full bg-[#85223B] text-white shadow-sm flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              Bestseller
            </span>
          )}
          {product.isNew && !product.isBestseller && (
            <span className="px-2.5 py-1 text-[11px] font-bold tracking-wider uppercase rounded-full bg-[#2C1810] text-[#FAF7F2] shadow-sm">
              New Drop
            </span>
          )}
          {product.isSeasonal && (
            <span className="px-2.5 py-0.5 text-[10px] font-semibold uppercase rounded-full bg-[#FAF7F2] text-[#85223B] border border-[#F2A4B2] shadow-sm">
              Seasonal
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          id={`wishlist-btn-${product.id}`}
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product.id);
          }}
          aria-label={isFavorite ? 'Remove from wishlist' : 'Add to wishlist'}
          className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center backdrop-blur-md transition-transform active:scale-90 shadow-sm ${
            isFavorite
              ? 'bg-[#85223B] text-white'
              : 'bg-white/80 hover:bg-white text-[#2C1810] hover:text-[#85223B]'
          }`}
        >
          <Heart className={`w-4 h-4 ${isFavorite ? 'fill-white' : ''}`} />
        </button>

        {/* Stock Alert Overlay if Out of Stock */}
        {isOutOfStock && (
          <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px] flex items-center justify-center p-4">
            <span className="px-3 py-1.5 rounded-full bg-[#2C1810] text-white text-xs font-bold uppercase tracking-wider shadow">
              Out of Stock
            </span>
          </div>
        )}

        {/* Quick View Hover Peek */}
        <div className="absolute bottom-3 inset-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden sm:flex gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleCardClick();
            }}
            className="flex-1 py-2 px-3 bg-white/95 hover:bg-white text-[#2C1810] text-xs font-semibold rounded-lg shadow-md flex items-center justify-center gap-1.5 transition-colors"
          >
            <Eye className="w-3.5 h-3.5 text-[#85223B]" />
            <span>View Details</span>
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Rating & Net Qty */}
          <div className="flex items-center justify-between text-xs mb-1.5">
            <div className="flex items-center gap-1 text-amber-600 font-bold">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{product.rating.toFixed(1)}</span>
              <span className="text-stone-400 font-normal">({product.reviewCount})</span>
            </div>
            <span className="text-[11px] text-stone-500 font-medium">{product.netQuantity}</span>
          </div>

          {/* Product Title */}
          <h3
            onClick={handleCardClick}
            className="font-serif text-lg sm:text-xl font-bold text-[#2C1810] group-hover:text-[#85223B] transition-colors cursor-pointer line-clamp-1"
          >
            {product.name}
          </h3>

          {/* Short Description */}
          <p className="text-xs text-stone-600 line-clamp-2 mt-1 mb-3 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        {/* Price & Action Row */}
        <div>
          {/* Low stock warning */}
          {isLowStock && !isOutOfStock && (
            <p className="text-[10px] text-rose-700 font-bold mb-2 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-600 animate-ping"></span>
              Only {product.stock} left in daily batch!
            </p>
          )}

          <div className="pt-2 border-t border-[#F4EBE1] flex items-center justify-between gap-2">
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-base sm:text-lg font-extrabold text-[#2C1810]">
                  ₹{product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-xs text-stone-400 line-through">
                    ₹{product.originalPrice}
                  </span>
                )}
              </div>
              <span className="text-[10px] text-emerald-800 font-medium block">
                Fresh Chilled
              </span>
            </div>

            {/* Add to Cart Button */}
            {isOutOfStock ? (
              <button
                disabled
                className="px-3 py-2 rounded-xl bg-stone-200 text-stone-400 text-xs font-semibold cursor-not-allowed"
              >
                Sold Out
              </button>
            ) : (
              <button
                id={`quick-add-${product.id}`}
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart(product, 1);
                }}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-200 flex items-center gap-1.5 shadow-sm active:scale-95 ${
                  cartItem
                    ? 'bg-[#E88296] text-[#2C1810] hover:bg-[#de7489]'
                    : 'bg-[#2C1810] text-[#FAF7F2] hover:bg-[#85223B]'
                }`}
              >
                <Plus className="w-3.5 h-3.5" />
                <span>{cartItem ? `In Bag (${cartItem.quantity})` : 'Add'}</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
