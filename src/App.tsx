import React, { useEffect } from 'react';
import { StoreProvider, useStore } from './context/StoreContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { ShopPage } from './components/ShopPage';
import { ProductDetailPage } from './components/ProductDetailPage';
import { CheckoutPage } from './components/CheckoutPage';
import { OrderSuccessPage } from './components/OrderSuccessPage';
import { OrderTrackingPage } from './components/OrderTrackingPage';
import { UserAccountPage } from './components/UserAccountPage';
import { WishlistPage } from './components/WishlistPage';
import { AboutPage } from './components/AboutPage';
import { AdminDashboard } from './components/AdminDashboard';
import { CartDrawer } from './components/CartDrawer';
import { SearchModal } from './components/SearchModal';
import { ToastContainer } from './components/ToastContainer';

const AppContent: React.FC = () => {
  const { currentView, selectedProduct, products, navigateTo } = useStore();

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView, selectedProduct]);

  const renderPage = () => {
    switch (currentView) {
      case 'home':
        return <HomePage />;

      case 'shop':
        return <ShopPage />;

      case 'product-detail': {
        const product = selectedProduct || products[0];
        return <ProductDetailPage product={product} />;
      }

      case 'checkout':
        return <CheckoutPage />;

      case 'order-success':
        return <OrderSuccessPage />;

      case 'order-tracking':
        return <OrderTrackingPage />;

      case 'account':
        return <UserAccountPage />;

      case 'wishlist':
        return <WishlistPage />;

      case 'about':
        return <AboutPage />;

      case 'admin':
        return <AdminDashboard />;

      default:
        return <HomePage />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF7F2] text-[#2C1810]">
      {/* Persistent Sticky Header */}
      <Header />

      {/* Main Content View */}
      <main className="flex-1">
        {renderPage()}
      </main>

      {/* Premium Footer */}
      <Footer />

      {/* Global Slide-out Shopping Bag Drawer */}
      <CartDrawer />

      {/* Global Quick Search Modal */}
      <SearchModal />

      {/* Real-time Toast Notifications */}
      <ToastContainer />
    </div>
  );
};

export default function App() {
  return (
    <StoreProvider>
      <AppContent />
    </StoreProvider>
  );
}
