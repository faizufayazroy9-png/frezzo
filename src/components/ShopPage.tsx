import React, { useState, useMemo } from 'react';
import { Filter, SlidersHorizontal, Sparkles, X, Check } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { ProductCard } from './ProductCard';
import { ProductCategory } from '../types';

export const ShopPage: React.FC = () => {
  const {
    products,
    selectedCategory,
    setSelectedCategory
  } = useStore();

  const [sortBy, setSortBy] = useState<
    'bestseller' | 'price_low' | 'price_high' | 'rating' | 'newest'
  >('bestseller');
  const [inStockOnly, setInStockOnly] = useState(false);
  const [seasonalOnly, setSeasonalOnly] = useState(false);
  const [maxPrice, setMaxPrice] = useState(1200);

  const categories: { id: ProductCategory | 'all'; label: string }[] = [
    { id: 'all', label: 'All Desserts' },
    { id: 'Fruit Desserts', label: 'Fruit Desserts' },
    { id: 'Creamy Desserts', label: 'Creamy Desserts' },
    { id: 'Seasonal Specials', label: 'Seasonal Specials' },
    { id: 'Best Sellers', label: 'Best Sellers' },
    { id: 'New Arrivals', label: 'New Arrivals' }
  ];

  // Filtering & Sorting logic
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category
    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // In Stock Only
    if (inStockOnly) {
      result = result.filter((p) => p.inStock && p.stock > 0);
    }

    // Seasonal Only
    if (seasonalOnly) {
      result = result.filter((p) => p.isSeasonal);
    }

    // Max Price
    result = result.filter((p) => p.price <= maxPrice);

    // Sorting
    if (sortBy === 'bestseller') {
      result.sort((a, b) => (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0));
    } else if (sortBy === 'price_low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price_high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'newest') {
      result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    }

    return result;
  }, [products, selectedCategory, inStockOnly, seasonalOnly, maxPrice, sortBy]);

  const resetFilters = () => {
    setSelectedCategory('all');
    setInStockOnly(false);
    setSeasonalOnly(false);
    setMaxPrice(1200);
    setSortBy('bestseller');
  };

  return (
    <div className="bg-[#FAF7F2] min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-[0.25em] font-extrabold text-[#85223B]">
            Handcrafted Menu
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2C1810] mt-1 mb-3">
            Explore All Frezzo Jars
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            Every dessert is slow-churned in small batches with fresh buffalo & cow whole milk malai and authentic seasonal fruits. Chilled to perfection.
          </p>
        </div>

        {/* Category Pills Bar */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 shrink-0 ${
                selectedCategory === cat.id
                  ? 'bg-[#85223B] text-white shadow-md'
                  : 'bg-white text-stone-700 hover:bg-[#F4EBE1] border border-[#EEDFD5]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white rounded-2xl p-4 border border-[#EEDFD5] shadow-xs mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Quick Toggles */}
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <button
              onClick={() => setInStockOnly(!inStockOnly)}
              className={`px-3 py-1.5 rounded-xl border font-semibold flex items-center gap-1.5 transition-colors ${
                inStockOnly
                  ? 'border-emerald-600 bg-emerald-50 text-emerald-800'
                  : 'border-[#DECBBF] bg-[#FAF7F2] text-stone-600 hover:bg-stone-100'
              }`}
            >
              {inStockOnly && <Check className="w-3.5 h-3.5 text-emerald-600" />}
              <span>In Stock Only</span>
            </button>

            <button
              onClick={() => setSeasonalOnly(!seasonalOnly)}
              className={`px-3 py-1.5 rounded-xl border font-semibold flex items-center gap-1.5 transition-colors ${
                seasonalOnly
                  ? 'border-[#85223B] bg-[#FDF2F4] text-[#85223B]'
                  : 'border-[#DECBBF] bg-[#FAF7F2] text-stone-600 hover:bg-stone-100'
              }`}
            >
              {seasonalOnly && <Sparkles className="w-3.5 h-3.5 text-[#85223B]" />}
              <span>Seasonal Harvest Drops</span>
            </button>

            {/* Price Max Slider */}
            <div className="flex items-center gap-2 pl-2 border-l border-stone-200">
              <span className="text-stone-500 font-medium">Under:</span>
              <span className="font-extrabold text-[#2C1810]">₹{maxPrice}</span>
              <input
                type="range"
                min="250"
                max="1200"
                step="50"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-24 accent-[#85223B] cursor-pointer"
              />
            </div>

            {(inStockOnly || seasonalOnly || maxPrice < 1200 || selectedCategory !== 'all') && (
              <button
                onClick={resetFilters}
                className="text-[11px] font-bold text-[#85223B] hover:underline flex items-center gap-1 ml-auto sm:ml-0"
              >
                <X className="w-3 h-3" />
                <span>Reset All</span>
              </button>
            )}
          </div>

          {/* Sort Selector & Result Count */}
          <div className="flex items-center justify-between md:justify-end gap-3 text-xs">
            <span className="text-stone-500">
              Showing <strong className="text-[#2C1810]">{filteredProducts.length}</strong> creations
            </span>

            <div className="flex items-center gap-1.5">
              <span className="text-stone-500 font-medium">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-2.5 py-1.5 rounded-xl bg-[#FAF7F2] border border-[#DECBBF] text-xs font-bold text-[#2C1810] focus:outline-none focus:border-[#85223B]"
              >
                <option value="bestseller">Bestsellers First</option>
                <option value="rating">Highest Rated</option>
                <option value="price_low">Price: Low to High</option>
                <option value="price_high">Price: High to Low</option>
                <option value="newest">Newest Churns</option>
              </select>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center bg-white rounded-3xl border border-[#EEDFD5] max-w-md mx-auto p-8 shadow-xs">
            <p className="font-serif text-xl font-bold text-[#2C1810] mb-2">
              No desserts match your filters
            </p>
            <p className="text-xs text-stone-500 mb-6">
              Try adjusting the price slider or clearing the category filters.
            </p>
            <button
              onClick={resetFilters}
              className="px-6 py-2.5 rounded-full bg-[#85223B] text-white text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
