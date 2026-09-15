import React, { useState } from 'react';
import {
  Search,
  Package,
  CheckCircle2,
  Clock,
  Truck,
  ChefHat,
  ThermometerSnowflake,
  Phone,
  ShieldCheck,
  MapPin,
  RefreshCw
} from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { OrderStatus } from '../types';

export const OrderTrackingPage: React.FC = () => {
  const { orders, trackingOrderId, updateOrderStatus, navigateTo } = useStore();

  const [searchId, setSearchId] = useState(trackingOrderId || 'FRZ-9042');
  const [activeOrder, setActiveOrder] = useState(() => {
    return orders.find((o) => o.id === (trackingOrderId || 'FRZ-9042')) || orders[0];
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const found = orders.find(
      (o) => o.id.toLowerCase() === searchId.trim().toLowerCase()
    );
    if (found) {
      setActiveOrder(found);
    } else {
      alert(`No order found for ID: ${searchId}. Showing latest order.`);
    }
  };

  const stages: {
    status: OrderStatus;
    label: string;
    icon: any;
    desc: string;
  }[] = [
    {
      status: 'placed',
      label: 'Order Placed',
      icon: Clock,
      desc: 'Order logged in Frezzo central kitchen system.'
    },
    {
      status: 'confirmed',
      label: 'Confirmed',
      icon: CheckCircle2,
      desc: 'Kitchen accepted; ingredients inspected.'
    },
    {
      status: 'preparing',
      label: 'Handcrafting',
      icon: ChefHat,
      desc: 'Layering fresh fruit compote and rich whole milk malai.'
    },
    {
      status: 'packed',
      label: 'Thermal Box Sealed',
      icon: ThermometerSnowflake,
      desc: 'Insulated sub-4°C packaging applied.'
    },
    {
      status: 'out_for_delivery',
      label: 'Out for Delivery',
      icon: Truck,
      desc: 'Cold-chain express rider dispatched.'
    },
    {
      status: 'delivered',
      label: 'Delivered',
      icon: Package,
      desc: 'Fresh indulgence handed over at your doorstep.'
    }
  ];

  const getStageIndex = (status: OrderStatus) => {
    return stages.findIndex((s) => s.status === status);
  };

  const currentStageIndex = getStageIndex(activeOrder.status);

  // Quick simulation controls for testing live order tracking updates
  const handleSimulateStatus = (newStatus: OrderStatus) => {
    updateOrderStatus(activeOrder.id, newStatus);
    setActiveOrder((prev) => ({ ...prev, status: newStatus }));
  };

  return (
    <div className="bg-[#FAF7F2] min-h-screen py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Title & Search Bar */}
        <div className="text-center mb-8">
          <span className="text-xs uppercase font-extrabold tracking-[0.25em] text-[#85223B]">
            Real-Time Cold-Chain Tracking
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#2C1810] mt-1 mb-4">
            Track Your Dessert Delivery 🚚
          </h1>
          <p className="text-xs text-stone-600 max-w-md mx-auto mb-6">
            Track the exact temperature and dispatch phase of your handcrafted Frezzo jars.
          </p>

          <form onSubmit={handleSearch} className="max-w-md mx-auto flex gap-2">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Enter Order ID (e.g. FRZ-9042)"
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white rounded-xl border border-[#DECBBF] text-xs font-semibold uppercase focus:outline-none focus:border-[#85223B]"
              />
            </div>
            <button
              type="submit"
              className="px-5 py-2.5 bg-[#2C1810] hover:bg-[#85223B] text-white text-xs font-bold rounded-xl transition-colors"
            >
              Track
            </button>
          </form>
        </div>

        {/* Tracking Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#EEDFD5] shadow-lg mb-8">
          {/* Header Info */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#EEDFD5] gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-stone-400">Order ID:</span>
                <span className="font-serif text-xl font-black text-[#2C1810]">
                  #{activeOrder.id}
                </span>
                <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-[#FDF2F4] text-[#85223B] font-extrabold uppercase border border-[#F2A4B2]">
                  {activeOrder.status.replace(/_/g, ' ')}
                </span>
              </div>
              <p className="text-xs text-stone-500 mt-1">Placed: {activeOrder.createdAt}</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-right">
                <span className="text-[11px] text-stone-400 block">Temperature Log</span>
                <div className="flex items-center gap-1 text-emerald-800 font-extrabold text-xs">
                  <ThermometerSnowflake className="w-3.5 h-3.5 text-cyan-600 animate-pulse" />
                  <span>3.2°C (Optimal Chill)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Visualizer */}
          <div className="py-8">
            <div className="relative">
              {/* Desktop Progress Line */}
              <div className="hidden sm:block absolute top-5 left-8 right-8 h-1 bg-stone-200 -z-0">
                <div
                  className="h-full bg-[#85223B] transition-all duration-500"
                  style={{
                    width: `${Math.min(100, (currentStageIndex / (stages.length - 1)) * 100)}%`
                  }}
                />
              </div>

              {/* Steps */}
              <div className="grid grid-cols-1 sm:grid-cols-6 gap-6 sm:gap-2 relative z-10">
                {stages.map((stage, idx) => {
                  const Icon = stage.icon;
                  const isCompleted = idx <= currentStageIndex;
                  const isCurrent = idx === currentStageIndex;

                  return (
                    <div
                      key={stage.status}
                      className="flex sm:flex-col items-center gap-3 sm:gap-2 text-left sm:text-center"
                    >
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm shrink-0 ${
                          isCompleted
                            ? 'bg-[#85223B] text-white ring-4 ring-[#85223B]/20'
                            : 'bg-[#FAF7F2] text-stone-400 border border-[#DECBBF]'
                        } ${isCurrent ? 'scale-110' : ''}`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>

                      <div>
                        <h4
                          className={`text-xs font-bold ${
                            isCompleted ? 'text-[#2C1810]' : 'text-stone-400'
                          }`}
                        >
                          {stage.label}
                        </h4>
                        <p className="text-[10px] text-stone-500 sm:max-w-[110px] leading-tight mt-0.5">
                          {stage.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Rider & Cold Box Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-[#EEDFD5] text-xs">
            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#EEDFD5] space-y-1">
              <span className="font-bold text-[#85223B] uppercase tracking-wider text-[10px] block">
                Assigned Delivery Partner
              </span>
              <p className="font-extrabold text-[#2C1810]">Rajesh Kumar (Express Cold-Fleet #12)</p>
              <p className="text-stone-500">Contact: +91 98112 34567 (Masked)</p>
              <div className="pt-2">
                <button
                  onClick={() => alert('Calling delivery partner... (Demo simulation)')}
                  className="px-3 py-1 bg-white border border-[#DECBBF] rounded-lg font-bold text-[#2C1810] hover:bg-stone-50 transition-colors flex items-center gap-1.5"
                >
                  <Phone className="w-3 h-3 text-emerald-600" />
                  <span>Call Rider</span>
                </button>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#EEDFD5] space-y-1">
              <span className="font-bold text-[#85223B] uppercase tracking-wider text-[10px] block">
                Destination Address
              </span>
              <p className="font-bold text-[#2C1810]">{activeOrder.deliveryAddress.fullName}</p>
              <p className="text-stone-500 line-clamp-2">
                {activeOrder.deliveryAddress.flat}, {activeOrder.deliveryAddress.area}, {activeOrder.deliveryAddress.city} - {activeOrder.deliveryAddress.pincode}
              </p>
              <p className="text-emerald-800 font-bold pt-1">
                Estimated: {activeOrder.estimatedDeliveryTime}
              </p>
            </div>
          </div>

          {/* Items in this order */}
          <div className="mt-6 pt-6 border-t border-[#EEDFD5]">
            <h4 className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-3">
              Items in Delivery
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {activeOrder.items.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-2.5 rounded-xl border border-stone-100 bg-[#FAF7F2]/50 text-xs"
                >
                  <img
                    src={item.image}
                    alt={item.productName}
                    className="w-10 h-10 rounded-lg object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-[#2C1810] truncate">{item.productName}</p>
                    <p className="text-stone-500 text-[11px]">
                      {item.quantity} jar(s) • ₹{item.price}
                    </p>
                  </div>
                  <span className="font-bold text-[#2C1810]">
                    ₹{item.price * item.quantity}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Simulation Controls */}
          <div className="mt-8 p-4 rounded-2xl bg-[#FDF2F4] border border-[#F2A4B2]/60 text-xs">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2 font-bold text-[#85223B]">
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Interactive Tracking Simulator (Demo Mode)</span>
              </div>
              <span className="text-[10px] text-stone-500">Test live state transitions:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {stages.map((s) => (
                <button
                  key={s.status}
                  onClick={() => handleSimulateStatus(s.status)}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                    activeOrder.status === s.status
                      ? 'bg-[#85223B] text-white shadow-sm'
                      : 'bg-white text-stone-700 hover:bg-[#FAF7F2] border border-[#DECBBF]'
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Back CTA */}
        <div className="text-center">
          <button
            onClick={() => navigateTo('shop')}
            className="text-xs font-bold text-[#85223B] hover:underline"
          >
            ← Continue shopping fresh desserts
          </button>
        </div>
      </div>
    </div>
  );
};
