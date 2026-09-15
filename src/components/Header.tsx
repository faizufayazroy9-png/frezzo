import React, { useState, useEffect } from 'react';
import {
  Search,
  User,
  Heart,
  ShoppingBag,
  Menu,
  X,
  Sparkles,
  ShieldCheck,
  ChevronDown
} from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const Header: React.FC = () => {
  const {
    cart,
    wishlist,
    currentView,
    navigateTo,
    openCartDrawer,
    openSearchModal
  } = useStore();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [collectionsDropdownOpen, setCollectionsDropdownOpen] = useState(false);

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-[#2C1810] text-[#FAF7F2] text-xs font-medium py-2 px-4 border-b border-[#3D2318] transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="hidden sm:flex items-center gap-2 text-[#E88296]">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-[#FAF7F2]">Fresh Handcrafted Daily • Chilled Express Delivery Under 4°C</span>
          </div>

          <div className="flex-1 text-center sm:flex-none">
            <span>
              Use code <strong className="text-[#E88296] font-bold tracking-wider">FREZZO10</strong> for 10% off your first sweet treat box
            </span>
          </div>

          <div className="hidden md:flex items-center gap-4 text-stone-300">
            <button
              onClick={() => navigateTo('admin')}
              className="text-[11px] px-2 py-0.5 rounded bg-[#3D2318] hover:bg-[#E88296] hover:text-white transition-colors flex items-center gap-1 border border-stone-700"
            >
              <ShieldCheck className="w-3 h-3 text-[#E88296]" />
              <span>Admin Portal Demo</span>
            </button>
            <button
              onClick={() => navigateTo('about')}
              className="hover:text-white transition-colors text-[11px]"
            >
              Meet Miss. Chinnari
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 bg-[#FAF7F2]/95 backdrop-blur-md border-b ${
          isScrolled
            ? 'py-3 shadow-md border-[#EEDFD5]'
            : 'py-4 md:py-5 border-[#F1E5DC]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              id="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 -ml-2 text-[#2C1810] hover:text-[#85223B] transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => navigateTo('home')}
              className="text-left group flex flex-col items-start"
            >
              <div className="flex items-center gap-1.5">
                <span className="font-serif text-2xl sm:text-3xl font-extrabold tracking-widest text-[#2C1810] group-hover:text-[#85223B] transition-colors">
                  FREZZO
                </span>
                <span className="w-2 h-2 rounded-full bg-[#E88296] inline-block animate-pulse mb-1"></span>
              </div>
              <span className="text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-[#85223B] font-semibold">
                Artisanal Malai & Desserts
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => navigateTo('home')}
              className={`text-sm tracking-wide font-medium transition-colors hover:text-[#85223B] py-1 ${
                currentView === 'home'
                  ? 'text-[#85223B] font-semibold border-b-2 border-[#85223B]'
                  : 'text-[#2C1810]'
              }`}
            >
              Home
            </button>

            <button
              onClick={() => navigateTo('shop')}
              className={`text-sm tracking-wide font-medium transition-colors hover:text-[#85223B] py-1 ${
                currentView === 'shop'
                  ? 'text-[#85223B] font-semibold border-b-2 border-[#85223B]'
                  : 'text-[#2C1810]'
              }`}
            >
              Shop All
            </button>

            {/* Collections Dropdown */}
            <div className="relative" onMouseLeave={() => setCollectionsDropdownOpen(false)}>
              <button
                onMouseEnter={() => setCollectionsDropdownOpen(true)}
                onClick={() => navigateTo('shop')}
                className="flex items-center gap-1 text-sm tracking-wide font-medium transition-colors text-[#2C1810] hover:text-[#85223B] py-1"
              >
                <span>Collections</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60" />
              </button>

              {collectionsDropdownOpen && (
                <div className="absolute top-full left-0 w-56 pt-2 z-50">
                  <div className="bg-white rounded-xl shadow-xl border border-[#F1E5DC] p-2 space-y-1">
                    <button
                      onClick={() => {
                        navigateTo('shop');
                        setCollectionsDropdownOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 text-xs font-medium text-[#2C1810] hover:bg-[#FDF2F4] hover:text-[#85223B] rounded-lg transition-colors"
                    >
                      🍓 Fresh Fruit Malai
                    </button>
                    <button
                      onClick={() => {
                        navigateTo('shop');
                        setCollectionsDropdownOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 text-xs font-medium text-[#2C1810] hover:bg-[#FDF2F4] hover:text-[#85223B] rounded-lg transition-colors"
                    >
                      🍨 Creamy Gourmet Specials
                    </button>
                    <button
                      onClick={() => {
                        navigateTo('shop');
                        setCollectionsDropdownOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 text-xs font-medium text-[#2C1810] hover:bg-[#FDF2F4] hover:text-[#85223B] rounded-lg transition-colors"
                    >
                      ⭐ Best Sellers
                    </button>
                    <button
                      onClick={() => {
                        navigateTo('shop');
                        setCollectionsDropdownOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 text-xs font-medium text-[#2C1810] hover:bg-[#FDF2F4] hover:text-[#85223B] rounded-lg transition-colors"
                    >
                      ✨ Seasonal Harvest Drops
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => navigateTo('about')}
              className={`text-sm tracking-wide font-medium transition-colors hover:text-[#85223B] py-1 ${
                currentView === 'about'
                  ? 'text-[#85223B] font-semibold border-b-2 border-[#85223B]'
                  : 'text-[#2C1810]'
              }`}
            >
              Our Story & Founder
            </button>

            <button
              onClick={() => navigateTo('order-tracking')}
              className={`text-sm tracking-wide font-medium transition-colors hover:text-[#85223B] py-1 ${
                currentView === 'order-tracking'
                  ? 'text-[#85223B] font-semibold border-b-2 border-[#85223B]'
                  : 'text-[#2C1810]'
              }`}
            >
              Track Order
            </button>
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Search */}
            <button
              id="header-search-btn"
              onClick={openSearchModal}
              className="p-2 text-[#2C1810] hover:text-[#85223B] hover:bg-[#F4EBE1] rounded-full transition-colors"
              aria-label="Search desserts"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Account */}
            <button
              id="header-account-btn"
              onClick={() => navigateTo('account')}
              className={`p-2 rounded-full transition-colors ${
                currentView === 'account'
                  ? 'bg-[#E88296] text-white'
                  : 'text-[#2C1810] hover:text-[#85223B] hover:bg-[#F4EBE1]'
              }`}
              aria-label="My Account"
            >
              <User className="w-5 h-5" />
            </button>

            {/* Wishlist */}
            <button
              id="header-wishlist-btn"
              onClick={() => navigateTo('wishlist')}
              className={`p-2 rounded-full relative transition-colors ${
                currentView === 'wishlist'
                  ? 'bg-[#E88296] text-white'
                  : 'text-[#2C1810] hover:text-[#85223B] hover:bg-[#F4EBE1]'
              }`}
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#85223B] text-white text-[10px] font-bold flex items-center justify-center shadow">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Shopping Bag */}
            <button
              id="header-cart-btn"
              onClick={openCartDrawer}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#2C1810] text-[#FAF7F2] hover:bg-[#85223B] transition-all shadow-sm group"
              aria-label="Shopping Bag"
            >
              <div className="relative">
                <ShoppingBag className="w-4 h-4 text-[#E88296] group-hover:text-white transition-colors" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-[#E88296] text-[#2C1810] text-[10px] font-extrabold flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </div>
              <span className="hidden sm:inline text-xs font-semibold tracking-wide">
                Bag
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 max-w-xs w-full bg-[#FAF7F2] shadow-2xl p-6 flex flex-col justify-between z-10 border-r border-[#EEDFD5]">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#EEDFD5]">
                <div>
                  <span className="font-serif text-2xl font-bold tracking-widest text-[#2C1810]">
                    FREZZO
                  </span>
                  <p className="text-[10px] uppercase tracking-wider text-[#85223B] font-semibold">
                    Artisanal Desserts
                  </p>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-stone-500 hover:text-black rounded-lg hover:bg-stone-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col space-y-3">
                <button
                  onClick={() => {
                    navigateTo('home');
                    setMobileMenuOpen(false);
                  }}
                  className="text-left py-2.5 px-3 rounded-lg text-sm font-semibold text-[#2C1810] hover:bg-[#F4EBE1]"
                >
                  🏠 Home
                </button>
                <button
                  onClick={() => {
                    navigateTo('shop');
                    setMobileMenuOpen(false);
                  }}
                  className="text-left py-2.5 px-3 rounded-lg text-sm font-semibold text-[#2C1810] hover:bg-[#F4EBE1]"
                >
                  🛍️ Shop All Desserts
                </button>
                <button
                  onClick={() => {
                    navigateTo('about');
                    setMobileMenuOpen(false);
                  }}
                  className="text-left py-2.5 px-3 rounded-lg text-sm font-semibold text-[#2C1810] hover:bg-[#F4EBE1]"
                >
                  👩‍🍳 Story & Miss. Chinnari
                </button>
                <button
                  onClick={() => {
                    navigateTo('wishlist');
                    setMobileMenuOpen(false);
                  }}
                  className="text-left py-2.5 px-3 rounded-lg text-sm font-semibold text-[#2C1810] hover:bg-[#F4EBE1] flex items-center justify-between"
                >
                  <span>❤️ My Sweet Wishlist</span>
                  {wishlist.length > 0 && (
                    <span className="bg-[#85223B] text-white text-xs px-2 py-0.5 rounded-full font-bold">
                      {wishlist.length}
                    </span>
                  )}
                </button>
                <button
                  onClick={() => {
                    navigateTo('order-tracking');
                    setMobileMenuOpen(false);
                  }}
                  className="text-left py-2.5 px-3 rounded-lg text-sm font-semibold text-[#2C1810] hover:bg-[#F4EBE1]"
                >
                  🚚 Track Fresh Delivery
                </button>
                <button
                  onClick={() => {
                    navigateTo('account');
                    setMobileMenuOpen(false);
                  }}
                  className="text-left py-2.5 px-3 rounded-lg text-sm font-semibold text-[#2C1810] hover:bg-[#F4EBE1]"
                >
                  👤 My Profile & Orders
                </button>
                <button
                  onClick={() => {
                    navigateTo('admin');
                    setMobileMenuOpen(false);
                  }}
                  className="text-left py-2.5 px-3 rounded-lg text-sm font-semibold text-[#85223B] bg-[#FDF2F4] border border-[#F2A4B2]/30"
                >
                  ⚙️ Admin Management
                </button>
              </div>
            </div>

            <div className="pt-6 border-t border-[#EEDFD5] text-xs text-stone-500 space-y-2">
              <p className="font-medium text-[#2C1810]">Need assistance?</p>
              <p>Email: care@frezzo.in</p>
              <p>Cold-pack dispatch from Central Kitchens</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
