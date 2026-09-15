import React, { useState } from 'react';
import {
  Package,
  ShoppingBag,
  Tag,
  TrendingUp,
  AlertTriangle,
  Plus,
  CheckCircle2,
  Edit2,
  Trash2,
  Eye,
  RefreshCw,
  Search,
  Filter,
  ArrowLeft
} from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { Product, OrderStatus, Coupon } from '../types';

export const AdminDashboard: React.FC = () => {
  const {
    products,
    orders,
    coupons,
    updateProductStock,
    updateOrderStatus,
    addProduct,
    addCoupon,
    navigateTo,
    addToast
  } = useStore();

  const [activeTab, setActiveTab] = useState<'orders' | 'products' | 'coupons'>('orders');
  const [orderFilter, setOrderFilter] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  // New Product Modal Form State
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [newProduct, setNewProduct] = useState<Partial<Product>>({
    name: '',
    category: 'Fruit Desserts',
    price: 349,
    originalPrice: 399,
    stock: 25,
    lowStockThreshold: 5,
    inStock: true,
    shortDescription: '',
    detailedDescription: '',
    netQuantity: '300g Jar',
    shelfLife: '48 hours under refrigeration',
    ingredients: 'Fresh fruit compote, whole milk malai, organic khandsari sugar.',
    allergenInfo: 'Contains Milk / Dairy.',
    images: ['https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80']
  });

  // New Coupon Form State
  const [showAddCouponModal, setShowAddCouponModal] = useState(false);
  const [couponCode, setCouponCode] = useState('');
  const [discountType, setDiscountType] = useState<'percent' | 'flat'>('percent');
  const [discountVal, setDiscountVal] = useState(15);
  const [minOrderVal, setMinOrderVal] = useState(499);
  const [couponDesc, setCouponDesc] = useState('');

  // Analytics Stats
  const totalRevenue = orders.reduce((sum, o) => sum + o.total, 0);
  const totalOrders = orders.length;
  const lowStockCount = products.filter((p) => p.inStock && p.stock <= p.lowStockThreshold).length;

  const filteredOrders = orders.filter((o) => {
    if (orderFilter !== 'all' && o.status !== orderFilter) return false;
    if (searchTerm) {
      const matchId = o.id.toLowerCase().includes(searchTerm.toLowerCase());
      const matchCustomer = o.deliveryAddress.fullName.toLowerCase().includes(searchTerm.toLowerCase());
      return matchId || matchCustomer;
    }
    return true;
  });

  const handleCreateProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProduct.name || !newProduct.price) return;

    const created: Product = {
      id: `FRZ-P${Date.now().toString().slice(-4)}`,
      name: newProduct.name,
      slug: newProduct.name.toLowerCase().replace(/\s+/g, '-'),
      category: (newProduct.category as any) || 'Fruit Desserts',
      price: Number(newProduct.price),
      originalPrice: newProduct.originalPrice ? Number(newProduct.originalPrice) : undefined,
      shortDescription: newProduct.shortDescription || 'Fresh handcrafted dessert creation.',
      detailedDescription: newProduct.detailedDescription || 'Delicious artisanal dessert jar made daily.',
      images: newProduct.images || [
        'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80'
      ],
      stock: Number(newProduct.stock) || 20,
      inStock: true,
      lowStockThreshold: 5,
      rating: 4.9,
      reviewCount: 1,
      isBestseller: false,
      isNew: true,
      isSeasonal: false,
      tags: ['Handcrafted', 'Cold-Chain'],
      accentColor: '#85223B',
      ingredients: newProduct.ingredients || 'Fresh dairy malai, organic sugar, fruit.',
      allergenInfo: newProduct.allergenInfo || 'Contains Dairy.',
      netQuantity: newProduct.netQuantity || '300g Jar',
      storageInstructions: 'Store refrigerated at 2°C - 4°C.',
      shelfLife: newProduct.shelfLife || '48 hours',
      servingInfo: 'Serve chilled directly from the glass jar.',
      preparationInfo: 'Slow-simmered daily in small batches.',
      deliveryInfo: 'Packed in cold insulation with ice packs.'
    };

    addProduct(created);
    setShowAddProductModal(false);
    addToast('Product Added', `${created.name} is now available in the store!`, 'success');
  };

  const handleCreateCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!couponCode.trim() || !discountVal) return;

    const coupon: Coupon = {
      code: couponCode.toUpperCase().trim(),
      discountPercent: discountType === 'percent' ? Number(discountVal) : undefined,
      discountFlat: discountType === 'flat' ? Number(discountVal) : undefined,
      minOrder: Number(minOrderVal) || 0,
      isActive: true,
      expiresAt: 'Dec 2026',
      description: couponDesc || 'Special promotional discount'
    };

    addCoupon(coupon);
    setShowAddCouponModal(false);
    setCouponCode('');
    setCouponDesc('');
    addToast('Coupon Created', `Promo code ${coupon.code} is now active!`, 'success');
  };

  return (
    <div className="bg-[#FAF7F2] min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-[#EEDFD5] gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-[#85223B] text-white text-[10px] font-extrabold uppercase tracking-wider">
                Kitchen Admin
              </span>
              <h1 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#2C1810]">
                Frezzo Operations Hub
              </h1>
            </div>
            <p className="text-xs text-stone-500 mt-0.5">
              Live batch inventory, dispatch monitoring & promotion manager
            </p>
          </div>

          <button
            onClick={() => navigateTo('home')}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#DECBBF] text-xs font-bold text-[#2C1810] hover:bg-[#F4EBE1] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-[#85223B]" />
            <span>Return to Storefront</span>
          </button>
        </div>

        {/* Analytics Top Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-3xl p-5 border border-[#EEDFD5] shadow-xs">
            <div className="flex items-center justify-between text-xs text-stone-500 mb-2">
              <span>Gross Sales</span>
              <TrendingUp className="w-4 h-4 text-emerald-600" />
            </div>
            <p className="text-2xl font-extrabold text-[#2C1810]">₹{totalRevenue.toLocaleString()}</p>
            <span className="text-[11px] text-emerald-700 font-semibold mt-1 block">
              ↑ 18% vs yesterday's churn
            </span>
          </div>

          <div className="bg-white rounded-3xl p-5 border border-[#EEDFD5] shadow-xs">
            <div className="flex items-center justify-between text-xs text-stone-500 mb-2">
              <span>Total Orders</span>
              <ShoppingBag className="w-4 h-4 text-[#85223B]" />
            </div>
            <p className="text-2xl font-extrabold text-[#2C1810]">{totalOrders}</p>
            <span className="text-[11px] text-stone-500 mt-1 block">Active across 3 metro zones</span>
          </div>

          <div className="bg-white rounded-3xl p-5 border border-[#EEDFD5] shadow-xs">
            <div className="flex items-center justify-between text-xs text-stone-500 mb-2">
              <span>Catalogued Desserts</span>
              <Package className="w-4 h-4 text-amber-600" />
            </div>
            <p className="text-2xl font-extrabold text-[#2C1810]">{products.length}</p>
            <span className="text-[11px] text-stone-500 mt-1 block">Fresh daily batches</span>
          </div>

          <div className="bg-white rounded-3xl p-5 border border-[#EEDFD5] shadow-xs">
            <div className="flex items-center justify-between text-xs text-stone-500 mb-2">
              <span>Low Stock Alerts</span>
              <AlertTriangle className="w-4 h-4 text-rose-600" />
            </div>
            <p className="text-2xl font-extrabold text-rose-700">{lowStockCount}</p>
            <span className="text-[11px] text-stone-500 mt-1 block">Batch replenish suggested</span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center justify-between border-b border-[#EEDFD5] pb-4 mb-6">
          <div className="flex items-center gap-2">
            {[
              { id: 'orders', label: `Orders (${orders.length})`, icon: ShoppingBag },
              { id: 'products', label: `Products & Stock (${products.length})`, icon: Package },
              { id: 'coupons', label: `Coupons (${coupons.length})`, icon: Tag }
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-[#85223B] text-white shadow-sm'
                      : 'bg-white text-stone-600 hover:bg-[#F4EBE1] border border-[#EEDFD5]'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {activeTab === 'products' && (
            <button
              onClick={() => setShowAddProductModal(true)}
              className="px-4 py-2 bg-[#2C1810] text-[#FAF7F2] hover:bg-[#85223B] text-xs font-bold rounded-xl flex items-center gap-1.5 transition-colors"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add New Dessert</span>
            </button>
          )}

          {activeTab === 'coupons' && (
            <button
              onClick={() => setShowAddCouponModal(true)}
              className="px-4 py-2 bg-[#2C1810] text-[#FAF7F2] hover:bg-[#85223B] text-xs font-bold rounded-xl flex items-center gap-1.5 transition-colors"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Create Coupon</span>
            </button>
          )}
        </div>

        {/* TAB 1: ORDERS MANAGEMENT */}
        {activeTab === 'orders' && (
          <div className="space-y-4">
            {/* Filters & Search */}
            <div className="bg-white rounded-2xl p-4 border border-[#EEDFD5] flex flex-col sm:flex-row gap-3 items-center justify-between">
              <div className="relative w-full sm:w-72">
                <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search by Order ID or Customer..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 bg-[#FAF7F2] rounded-xl border border-[#DECBBF] text-xs"
                />
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto">
                <span className="text-xs text-stone-500 font-semibold shrink-0">Filter Status:</span>
                {['all', 'placed', 'preparing', 'packed', 'out_for_delivery', 'delivered'].map((st) => (
                  <button
                    key={st}
                    onClick={() => setOrderFilter(st)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize shrink-0 transition-colors ${
                      orderFilter === st
                        ? 'bg-[#2C1810] text-white'
                        : 'bg-[#FAF7F2] text-stone-600 hover:bg-stone-200'
                    }`}
                  >
                    {st.replace(/_/g, ' ')}
                  </button>
                ))}
              </div>
            </div>

            {/* Orders Table */}
            <div className="bg-white rounded-3xl border border-[#EEDFD5] shadow-xs overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#FAF7F2] border-b border-[#EEDFD5] text-stone-500 font-bold uppercase tracking-wider">
                    <tr>
                      <th className="p-4">Order ID & Date</th>
                      <th className="p-4">Customer & City</th>
                      <th className="p-4">Items</th>
                      <th className="p-4">Amount</th>
                      <th className="p-4">Delivery Slot</th>
                      <th className="p-4">Status & Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#F4EBE1]">
                    {filteredOrders.map((order) => (
                      <tr key={order.id} className="hover:bg-[#FAF7F2]/50 transition-colors">
                        <td className="p-4 font-semibold text-[#2C1810]">
                          <span className="font-serif font-extrabold block text-sm">#{order.id}</span>
                          <span className="text-[11px] text-stone-400">{order.createdAt}</span>
                        </td>
                        <td className="p-4">
                          <span className="font-bold text-[#2C1810] block">
                            {order.deliveryAddress.fullName}
                          </span>
                          <span className="text-stone-500 text-[11px]">
                            {order.deliveryAddress.area}, {order.deliveryAddress.city}
                          </span>
                        </td>
                        <td className="p-4">
                          <div className="space-y-1 max-w-[200px]">
                            {order.items.map((i, idx) => (
                              <p key={idx} className="truncate text-stone-700">
                                {i.quantity}x {i.productName}
                              </p>
                            ))}
                          </div>
                        </td>
                        <td className="p-4 font-black text-sm text-[#85223B]">
                          ₹{order.total}
                        </td>
                        <td className="p-4 text-stone-600 text-[11px]">
                          {order.deliverySlot}
                        </td>
                        <td className="p-4">
                          {/* Live Status Selector */}
                          <select
                            value={order.status}
                            onChange={(e) => {
                              updateOrderStatus(order.id, e.target.value as OrderStatus);
                              addToast('Status Updated', `Order #${order.id} moved to ${e.target.value}`, 'info');
                            }}
                            className="px-2.5 py-1.5 rounded-lg font-bold text-xs bg-[#FAF7F2] border border-[#DECBBF] focus:border-[#85223B] focus:outline-none"
                          >
                            <option value="placed">Placed</option>
                            <option value="confirmed">Confirmed</option>
                            <option value="preparing">Preparing</option>
                            <option value="packed">Packed (Chilled)</option>
                            <option value="out_for_delivery">Out for Delivery</option>
                            <option value="delivered">Delivered</option>
                            <option value="cancelled">Cancelled</option>
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: PRODUCTS & STOCK */}
        {activeTab === 'products' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => {
                const isOutOfStock = !product.inStock || product.stock <= 0;
                const isLowStock = product.inStock && product.stock <= product.lowStockThreshold;

                return (
                  <div
                    key={product.id}
                    className="bg-white rounded-3xl p-5 border border-[#EEDFD5] shadow-xs flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex gap-4 items-start mb-3">
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="w-16 h-16 rounded-2xl object-cover shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#85223B]">
                            {product.category}
                          </span>
                          <h4 className="font-serif font-bold text-sm text-[#2C1810] truncate">
                            {product.name}
                          </h4>
                          <p className="text-xs font-extrabold text-[#2C1810] mt-0.5">
                            ₹{product.price}{' '}
                            {product.originalPrice && (
                              <span className="text-stone-400 line-through text-[11px] font-normal">
                                ₹{product.originalPrice}
                              </span>
                            )}
                          </p>
                        </div>
                      </div>

                      {/* Stock Alert Badge */}
                      <div className="mb-4">
                        {isOutOfStock ? (
                          <span className="px-2.5 py-1 rounded-full bg-rose-50 text-rose-700 text-[10px] font-extrabold border border-rose-200">
                            Out of Stock
                          </span>
                        ) : isLowStock ? (
                          <span className="px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 text-[10px] font-extrabold border border-amber-200">
                            ⚠️ Low Stock ({product.stock} jars left)
                          </span>
                        ) : (
                          <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-[10px] font-extrabold border border-emerald-200">
                            ✓ {product.stock} Jars in Cold-Storage
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Stock Quick Adjustment Form */}
                    <div className="pt-3 border-t border-[#F4EBE1] flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-stone-500">Units:</span>
                        <input
                          type="number"
                          min="0"
                          value={product.stock}
                          onChange={(e) => {
                            const newStock = Math.max(0, parseInt(e.target.value) || 0);
                            updateProductStock(product.id, newStock);
                          }}
                          className="w-16 px-2 py-1 bg-[#FAF7F2] border border-[#DECBBF] rounded-lg text-xs font-bold text-center"
                        />
                      </div>

                      <button
                        onClick={() => {
                          const toggled = !product.inStock;
                          updateProductStock(product.id, toggled ? 15 : 0);
                          addToast('Stock Toggled', `${product.name} marked as ${toggled ? 'In Stock' : 'Out of Stock'}`, 'info');
                        }}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                          product.inStock
                            ? 'bg-rose-50 text-rose-700 hover:bg-rose-100'
                            : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
                        }`}
                      >
                        {product.inStock ? 'Mark Sold Out' : 'Restock (15)'}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 3: COUPON MANAGEMENT */}
        {activeTab === 'coupons' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {coupons.map((coupon) => (
                <div
                  key={coupon.code}
                  className="bg-white rounded-3xl p-5 border border-[#EEDFD5] shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-serif font-black text-lg tracking-wider text-[#85223B]">
                        {coupon.code}
                      </span>
                      <span className="text-[10px] bg-emerald-50 text-emerald-800 font-bold px-2 py-0.5 rounded-full border border-emerald-200">
                        Active
                      </span>
                    </div>

                    <p className="text-xs text-stone-600 mb-3">{coupon.description}</p>
                  </div>

                  <div className="pt-3 border-t border-[#F4EBE1] text-xs text-stone-500 space-y-1">
                    <p>
                      <strong>Discount:</strong>{' '}
                      {coupon.discountPercent
                        ? `${coupon.discountPercent}% OFF`
                        : `₹${coupon.discountFlat} FLAT OFF`}
                    </p>
                    <p>
                      <strong>Min Order:</strong> ₹{coupon.minOrder}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Modal: Add New Dessert */}
        {showAddProductModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full border border-[#EEDFD5] shadow-2xl max-h-[90vh] overflow-y-auto">
              <h3 className="font-serif text-xl font-bold text-[#2C1810] mb-4">
                Add New Handcrafted Dessert
              </h3>
              <form onSubmit={handleCreateProduct} className="space-y-4 text-xs">
                <div>
                  <label className="block font-semibold mb-1">Dessert Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Raspberry Pistachio Malai"
                    value={newProduct.name}
                    onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-[#DECBBF] bg-[#FAF7F2]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold mb-1">Category</label>
                    <select
                      value={newProduct.category}
                      onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value as any })}
                      className="w-full p-2.5 rounded-xl border border-[#DECBBF] bg-[#FAF7F2]"
                    >
                      <option value="Fruit Desserts">Fruit Desserts</option>
                      <option value="Creamy Desserts">Creamy Desserts</option>
                      <option value="Seasonal Specials">Seasonal Specials</option>
                      <option value="Best Sellers">Best Sellers</option>
                      <option value="New Arrivals">New Arrivals</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold mb-1">Price (₹) *</label>
                    <input
                      type="number"
                      required
                      value={newProduct.price}
                      onChange={(e) => setNewProduct({ ...newProduct, price: Number(e.target.value) })}
                      className="w-full p-2.5 rounded-xl border border-[#DECBBF] bg-[#FAF7F2]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold mb-1">Original Price (₹)</label>
                    <input
                      type="number"
                      value={newProduct.originalPrice}
                      onChange={(e) => setNewProduct({ ...newProduct, originalPrice: Number(e.target.value) })}
                      className="w-full p-2.5 rounded-xl border border-[#DECBBF] bg-[#FAF7F2]"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold mb-1">Initial Stock (Units)</label>
                    <input
                      type="number"
                      value={newProduct.stock}
                      onChange={(e) => setNewProduct({ ...newProduct, stock: Number(e.target.value) })}
                      className="w-full p-2.5 rounded-xl border border-[#DECBBF] bg-[#FAF7F2]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold mb-1">Short Tagline</label>
                  <input
                    type="text"
                    placeholder="e.g. Tart mountain raspberries folded in slow-boiled malai"
                    value={newProduct.shortDescription}
                    onChange={(e) => setNewProduct({ ...newProduct, shortDescription: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-[#DECBBF] bg-[#FAF7F2]"
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowAddProductModal(false)}
                    className="flex-1 py-2.5 rounded-xl border border-[#DECBBF] font-bold text-stone-600"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-2.5 rounded-xl bg-[#85223B] text-white font-bold"
                  >
                    Save & Publish
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Modal: Create Coupon */}
        {showAddCouponModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full border border-[#EEDFD5] shadow-2xl">
              <h3 className="font-serif text-xl font-bold text-[#2C1810] mb-4">
                Create Promo Coupon
              </h3>
              <form onSubmit={handleCreateCoupon} className="space-y-4 text-xs">
                <div>
                  <label className="block font-semibold mb-1">Coupon Code *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. FESTIVE25"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-[#DECBBF] bg-[#FAF7F2] uppercase font-bold"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold mb-1">Discount Type</label>
                    <select
                      value={discountType}
                      onChange={(e) => setDiscountType(e.target.value as any)}
                      className="w-full p-2.5 rounded-xl border border-[#DECBBF] bg-[#FAF7F2]"
                    >
                      <option value="percent">Percentage (%)</option>
                      <option value="flat">Flat Amount (₹)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-semibold mb-1">Discount Value *</label>
                    <input
                      type="number"
                      required
                      value={discountVal}
                      onChange={(e) => setDiscountVal(Number(e.target.value))}
                      className="w-full p-2.5 rounded-xl border border-[#DECBBF] bg-[#FAF7F2]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold mb-1">Min Order Amount (₹)</label>
                  <input
                    type="number"
                    value={minOrderVal}
                    onChange={(e) => setMinOrderVal(Number(e.target.value))}
                    className="w-full p-2.5 rounded-xl border border-[#DECBBF] bg-[#FAF7F2]"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-1">Description</label>
                  <input
                    type="text"
                    placeholder="e.g. 25% off on orders above ₹499"
                    value={couponDesc}
                    onChange={(e) => setCouponDesc(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-[#DECBBF] bg-[#FAF7F2]"
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowAddCouponModal(false)}
                    className="flex-1 py-2.5 rounded-xl border border-[#DECBBF] font-bold text-stone-600"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-2.5 rounded-xl bg-[#85223B] text-white font-bold"
                  >
                    Activate Coupon
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
