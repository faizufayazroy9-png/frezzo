import React from 'react';
import { Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const WishlistPage: React.FC = () => {
  const { wishlist, products, addToCart, toggleWishlist, navigateTo } = useStore();

  const savedProducts = products.filter((p) => wishlist.includes(p.id));

  return (
    <div className="bg-[#FAF7F2] min-h-screen py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#EEDFD5]">
          <div>
            <h1 className="font-serif text-3xl font-extrabold text-[#2C1810]">
              My Sweet Wishlist
            </h1>
            <p className="text-xs text-stone-500 mt-1">
              Your curated favorites ready for your next dessert indulgence
            </p>
          </div>
          <span className="text-xs font-bold px-3 py-1 bg-white rounded-full border border-[#DECBBF] text-[#85223B]">
            {savedProducts.length} Saved {savedProducts.length === 1 ? 'Dessert' : 'Desserts'}
          </span>
        </div>

        {savedProducts.length === 0 ? (
          <div className="py-20 text-center bg-white rounded-3xl border border-[#EEDFD5] shadow-sm max-w-xl mx-auto p-8">
            <div className="w-16 h-16 rounded-full bg-[#FDF2F4] text-[#85223B] flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 opacity-60" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#2C1810] mb-2">
              Your sweet list is waiting.
            </h3>
            <p className="text-xs text-stone-500 max-w-sm mx-auto mb-6">
              Explore our fresh fruit malai and seasonal confectionery creations. Save them here so you never miss a sweet craving.
            </p>
            <button
              id="wishlist-empty-cta"
              onClick={() => navigateTo('shop')}
              className="px-8 py-3.5 rounded-full bg-[#85223B] hover:bg-[#6c172d] text-white text-xs font-bold tracking-wider uppercase transition-all shadow-md inline-flex items-center gap-2"
            >
              <span>DISCOVER DESSERTS</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-3xl overflow-hidden border border-[#EEDFD5] shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div
                  className="relative aspect-4/3 cursor-pointer overflow-hidden bg-[#F4EBE1]"
                  onClick={() => navigateTo('product-detail', product.slug)}
                >
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleWishlist(product.id);
                    }}
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 text-rose-600 hover:bg-white flex items-center justify-center shadow transition-transform active:scale-90"
                    title="Remove from wishlist"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#85223B]">
                      {product.category}
                    </span>
                    <h3
                      onClick={() => navigateTo('product-detail', product.slug)}
                      className="font-serif text-lg font-bold text-[#2C1810] hover:text-[#85223B] transition-colors cursor-pointer mt-0.5"
                    >
                      {product.name}
                    </h3>
                    <p className="text-xs text-stone-600 line-clamp-2 mt-1 mb-4">
                      {product.shortDescription}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#F4EBE1] flex items-center justify-between">
                    <div>
                      <span className="text-base font-extrabold text-[#2C1810]">
                        ₹{product.price}
                      </span>
                      <span className="text-[11px] text-stone-400 block">
                        {product.netQuantity}
                      </span>
                    </div>

                    <button
                      onClick={() => addToCart(product, 1)}
                      className="px-4 py-2 rounded-xl bg-[#2C1810] text-[#FAF7F2] hover:bg-[#85223B] text-xs font-bold flex items-center gap-1.5 transition-all shadow-xs active:scale-95"
                    >
                      <ShoppingBag className="w-3.5 h-3.5 text-[#E88296]" />
                      <span>Move to Bag</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
