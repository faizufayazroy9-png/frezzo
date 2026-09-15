import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Sparkles, ArrowRight, ShoppingBag } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const SearchModal: React.FC = () => {
  const { searchModalOpen, closeSearchModal, products, navigateTo, addToCart } = useStore();
  const [searchQuery, setSearchQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchModalOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setSearchQuery('');
    }
  }, [searchModalOpen]);

  if (!searchModalOpen) return null;

  const popularSearches = [
    'Shahdood Malai',
    'Strawberry',
    'Sitaphal',
    'Mango',
    'Anjeer Badam',
    'Gift Box'
  ];

  const results = products.filter((p) => {
    if (!searchQuery.trim()) return false;
    const query = searchQuery.toLowerCase();
    return (
      p.name.toLowerCase().includes(query) ||
      p.shortDescription.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query) ||
      p.ingredients.toLowerCase().includes(query)
    );
  });

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-start justify-center p-4 sm:p-6 pt-16 sm:pt-24">
      {/* Click outside to close */}
      <div className="fixed inset-0" onClick={closeSearchModal} />

      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#EEDFD5] overflow-hidden z-10 flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-[#EEDFD5] flex items-center gap-3 bg-[#FAF7F2]">
          <Search className="w-5 h-5 text-[#85223B]" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search fresh desserts, ingredients or collections..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 bg-transparent text-sm sm:text-base font-medium text-[#2C1810] placeholder-stone-400 focus:outline-none"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="p-1 rounded-full text-stone-400 hover:text-stone-700"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={closeSearchModal}
            className="px-2.5 py-1 text-xs font-bold text-stone-500 hover:text-stone-900"
          >
            ESC
          </button>
        </div>

        {/* Popular Tags */}
        {!searchQuery && (
          <div className="p-6">
            <span className="text-[11px] uppercase tracking-wider font-extrabold text-stone-400 block mb-3">
              Trending Cravings
            </span>
            <div className="flex flex-wrap gap-2">
              {popularSearches.map((term) => (
                <button
                  key={term}
                  onClick={() => setSearchQuery(term)}
                  className="px-3.5 py-1.5 rounded-full bg-[#FAF7F2] hover:bg-[#F4EBE1] text-xs font-semibold text-[#2C1810] border border-[#DECBBF] transition-colors flex items-center gap-1.5"
                >
                  <Sparkles className="w-3 h-3 text-[#85223B]" />
                  <span>{term}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results Area */}
        {searchQuery && (
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 divide-y divide-[#F4EBE1]">
            {results.length > 0 ? (
              results.map((product) => (
                <div
                  key={product.id}
                  className="py-3 first:pt-0 last:pb-0 flex items-center justify-between gap-4 hover:bg-[#FAF7F2] p-2 rounded-2xl transition-colors cursor-pointer"
                  onClick={() => {
                    closeSearchModal();
                    navigateTo('product-detail', product.slug);
                  }}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-14 h-14 rounded-xl object-cover shrink-0"
                    />
                    <div className="min-w-0">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#85223B]">
                        {product.category}
                      </span>
                      <h4 className="font-serif font-bold text-sm text-[#2C1810] truncate">
                        {product.name}
                      </h4>
                      <p className="text-xs text-stone-500 truncate">
                        {product.shortDescription}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <span className="font-extrabold text-sm text-[#2C1810]">
                      ₹{product.price}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(product, 1);
                        closeSearchModal();
                      }}
                      className="p-2 rounded-xl bg-[#2C1810] hover:bg-[#85223B] text-white transition-colors"
                      title="Add to cart"
                    >
                      <ShoppingBag className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="py-12 text-center text-stone-500">
                <p className="text-sm font-semibold text-[#2C1810] mb-1">
                  No sweet matches found for "{searchQuery}"
                </p>
                <p className="text-xs">
                  Try searching for Mulberry, Strawberry, Mango, or Rabdi.
                </p>
              </div>
            )}
          </div>
        )}

        {/* Footer info */}
        <div className="p-3 bg-[#FAF7F2] border-t border-[#EEDFD5] text-[11px] text-center text-stone-500">
          All desserts prepared fresh daily with pure dairy malai & real fruits.
        </div>
      </div>
    </div>
  );
};
