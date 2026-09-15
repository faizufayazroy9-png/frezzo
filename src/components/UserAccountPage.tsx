import React, { useState } from 'react';
import {
  User,
  ShoppingBag,
  Heart,
  MapPin,
  CreditCard,
  Bell,
  LogOut,
  RotateCcw,
  Truck,
  CheckCircle2,
  Clock,
  Sparkles
} from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const UserAccountPage: React.FC = () => {
  const { orders, wishlist, products, addToCart, navigateTo, addToast } = useStore();
  const [activeTab, setActiveTab] = useState<
    'orders' | 'profile' | 'addresses' | 'payments' | 'notifications'
  >('orders');

  const customer = {
    name: 'Miss. Ananya Sharma',
    email: 'ananya.sharma@example.com',
    phone: '+91 98765 43210',
    memberSince: 'July 2026',
    tier: 'Gold Dessert Connoisseur'
  };

  const handleReorder = (order: typeof orders[0]) => {
    order.items.forEach((item) => {
      const prod = products.find((p) => p.id === item.productId);
      if (prod) {
        addToCart(prod, item.quantity);
      }
    });
    addToast('Items added to Bag', 'Your previous favorites have been added!', 'success');
  };

  return (
    <div className="bg-[#FAF7F2] min-h-screen py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Banner */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#EEDFD5] shadow-sm mb-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-16 h-16 rounded-full bg-[#85223B] text-white flex items-center justify-center font-serif text-2xl font-bold shadow-md">
              A
            </div>
            <div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <h1 className="font-serif text-2xl font-bold text-[#2C1810]">
                  {customer.name}
                </h1>
                <span className="px-2.5 py-0.5 rounded-full bg-[#FAF7F2] text-[#85223B] text-[10px] font-extrabold uppercase border border-[#F2A4B2]">
                  {customer.tier}
                </span>
              </div>
              <p className="text-xs text-stone-500 mt-0.5">
                {customer.email} • {customer.phone}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => navigateTo('shop')}
              className="px-4 py-2.5 rounded-xl bg-[#2C1810] text-[#FAF7F2] text-xs font-bold hover:bg-[#85223B] transition-colors"
            >
              Order Desserts
            </button>
          </div>
        </div>

        {/* Dashboard Layout: Left Nav Tabs + Right Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Navigation (3 cols) */}
          <div className="lg:col-span-3 space-y-2">
            {[
              { id: 'orders', label: 'My Orders', icon: ShoppingBag, count: orders.length },
              { id: 'profile', label: 'Personal Profile', icon: User },
              { id: 'addresses', label: 'Saved Addresses', icon: MapPin },
              { id: 'payments', label: 'Payment Methods', icon: CreditCard },
              { id: 'notifications', label: 'Notifications', icon: Bell, count: 2 }
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-[#85223B] text-white shadow-sm'
                      : 'bg-white text-[#2C1810] hover:bg-[#F4EBE1] border border-[#EEDFD5]'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </div>
                  {tab.count !== undefined && (
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-full ${
                        isActive ? 'bg-white/20 text-white' : 'bg-[#FAF7F2] text-stone-600'
                      }`}
                    >
                      {tab.count}
                    </span>
                  )}
                </button>
              );
            })}

            <button
              onClick={() => {
                addToast('Logged out', 'You have been signed out from demo session.', 'info');
              }}
              className="w-full flex items-center gap-2.5 px-4 py-3 rounded-2xl text-xs font-bold text-stone-500 hover:text-rose-600 hover:bg-rose-50 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>

          {/* Right Content Area (9 cols) */}
          <div className="lg:col-span-9">
            {/* Orders Tab */}
            {activeTab === 'orders' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="font-serif text-xl font-bold text-[#2C1810]">Order History</h2>
                  <span className="text-xs text-stone-500">
                    Showing {orders.length} past dessert orders
                  </span>
                </div>

                {orders.map((order) => (
                  <div
                    key={order.id}
                    className="bg-white rounded-3xl p-5 sm:p-6 border border-[#EEDFD5] shadow-xs hover:shadow-md transition-shadow space-y-4"
                  >
                    {/* Header Row */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-[#F4EBE1] gap-2">
                      <div className="flex items-center gap-3">
                        <span className="font-serif font-extrabold text-base text-[#2C1810]">
                          #{order.id}
                        </span>
                        <span className="text-xs text-stone-400">• {order.createdAt}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span
                          className={`text-xs px-2.5 py-0.5 rounded-full font-bold uppercase ${
                            order.status === 'delivered'
                              ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                              : 'bg-amber-50 text-amber-800 border border-amber-200'
                          }`}
                        >
                          {order.status.replace(/_/g, ' ')}
                        </span>
                        <span className="text-sm font-extrabold text-[#2C1810]">
                          ₹{order.total}
                        </span>
                      </div>
                    </div>

                    {/* Products list */}
                    <div className="space-y-2">
                      {order.items.map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between text-xs">
                          <div className="flex items-center gap-3">
                            <img
                              src={item.image}
                              alt={item.productName}
                              className="w-10 h-10 rounded-xl object-cover"
                            />
                            <div>
                              <span className="font-bold text-[#2C1810]">{item.productName}</span>
                              <span className="text-stone-400 block text-[11px]">
                                Qty: {item.quantity}
                              </span>
                            </div>
                          </div>
                          <span className="font-semibold text-stone-700">
                            ₹{item.price * item.quantity}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Footer Actions */}
                    <div className="pt-3 border-t border-[#F4EBE1] flex items-center justify-between gap-3">
                      <p className="text-[11px] text-stone-500">
                        Address: {order.deliveryAddress.area}, {order.deliveryAddress.city}
                      </p>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => navigateTo('order-tracking', undefined, order.id)}
                          className="px-3 py-1.5 rounded-xl border border-[#DECBBF] text-xs font-bold text-[#2C1810] hover:bg-[#FAF7F2] flex items-center gap-1.5 transition-colors"
                        >
                          <Truck className="w-3.5 h-3.5 text-[#85223B]" />
                          <span>Track</span>
                        </button>
                        <button
                          onClick={() => handleReorder(order)}
                          className="px-3.5 py-1.5 rounded-xl bg-[#2C1810] text-white text-xs font-bold hover:bg-[#85223B] flex items-center gap-1.5 transition-colors"
                        >
                          <RotateCcw className="w-3.5 h-3.5" />
                          <span>Reorder</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#EEDFD5] shadow-xs space-y-6">
                <h2 className="font-serif text-xl font-bold text-[#2C1810]">Personal Profile</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block text-stone-500 font-semibold mb-1">Full Name</label>
                    <input
                      type="text"
                      defaultValue={customer.name}
                      className="w-full p-2.5 bg-[#FAF7F2] rounded-xl border border-[#DECBBF]"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-500 font-semibold mb-1">Email</label>
                    <input
                      type="email"
                      defaultValue={customer.email}
                      className="w-full p-2.5 bg-[#FAF7F2] rounded-xl border border-[#DECBBF]"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-500 font-semibold mb-1">Phone</label>
                    <input
                      type="tel"
                      defaultValue={customer.phone}
                      className="w-full p-2.5 bg-[#FAF7F2] rounded-xl border border-[#DECBBF]"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-500 font-semibold mb-1">Favorite Dessert</label>
                    <input
                      type="text"
                      defaultValue="Shahdood Malai (Mulberry)"
                      className="w-full p-2.5 bg-[#FAF7F2] rounded-xl border border-[#DECBBF]"
                    />
                  </div>
                </div>
                <button
                  onClick={() => addToast('Profile Updated', 'Changes saved successfully!', 'success')}
                  className="px-6 py-2.5 rounded-xl bg-[#85223B] text-white text-xs font-bold"
                >
                  Save Changes
                </button>
              </div>
            )}

            {/* Addresses Tab */}
            {activeTab === 'addresses' && (
              <div className="space-y-4">
                <h2 className="font-serif text-xl font-bold text-[#2C1810]">Saved Delivery Addresses</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white rounded-2xl p-5 border border-[#85223B] shadow-xs text-xs space-y-2 relative">
                    <span className="absolute top-4 right-4 text-[10px] font-bold bg-[#FDF2F4] text-[#85223B] px-2 py-0.5 rounded-full border border-[#F2A4B2]">
                      Default
                    </span>
                    <span className="font-bold text-sm text-[#2C1810] block">Home</span>
                    <p className="text-stone-600 leading-relaxed">
                      Flat 402, Lotus Grand Residences<br />
                      14th Cross, Road No. 36, Jubilee Hills<br />
                      Hyderabad, Telangana - 500033
                    </p>
                    <p className="text-stone-400">Phone: +91 98765 43210</p>
                  </div>

                  <div className="bg-white rounded-2xl p-5 border border-[#EEDFD5] shadow-xs text-xs space-y-2">
                    <span className="font-bold text-sm text-[#2C1810] block">Office</span>
                    <p className="text-stone-600 leading-relaxed">
                      Tower 3, Mindspace Tech Park<br />
                      Madhapur, Hitec City<br />
                      Hyderabad, Telangana - 500081
                    </p>
                    <p className="text-stone-400">Phone: +91 98765 43210</p>
                  </div>
                </div>
              </div>
            )}

            {/* Payments Tab */}
            {activeTab === 'payments' && (
              <div className="bg-white rounded-3xl p-6 border border-[#EEDFD5] shadow-xs space-y-4 text-xs">
                <h2 className="font-serif text-xl font-bold text-[#2C1810]">Saved Payment Methods</h2>
                <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#DECBBF] flex items-center justify-between">
                  <div>
                    <p className="font-bold text-[#2C1810]">Google Pay / UPI</p>
                    <p className="text-stone-500">ananya@okhdfcbank</p>
                  </div>
                  <span className="text-emerald-700 font-bold">Verified</span>
                </div>
                <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#DECBBF] flex items-center justify-between">
                  <div>
                    <p className="font-bold text-[#2C1810]">HDFC Bank Regalia Credit Card</p>
                    <p className="text-stone-500">•••• •••• •••• 8921</p>
                  </div>
                  <span className="text-stone-500">Expires 09/28</span>
                </div>
              </div>
            )}

            {/* Notifications Tab */}
            {activeTab === 'notifications' && (
              <div className="space-y-3">
                <h2 className="font-serif text-xl font-bold text-[#2C1810]">Recent Notifications</h2>
                <div className="bg-white rounded-2xl p-4 border border-[#EEDFD5] text-xs space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-[#85223B]">Order Dispatched Chilled!</span>
                    <span className="text-stone-400 text-[10px]">10 mins ago</span>
                  </div>
                  <p className="text-stone-600">
                    Rider Rajesh is en route with your fresh jars of Mango Malai & Shahdood Malai.
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-4 border border-[#EEDFD5] text-xs space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-[#2C1810]">Seasonal Drop Alert: Lychee Rose Malai</span>
                    <span className="text-stone-400 text-[10px]">Yesterday</span>
                  </div>
                  <p className="text-stone-600">
                    Our artisanal chef batch of fragrant Shahi Lychees steeped in Kannauj rosewater is now live.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
