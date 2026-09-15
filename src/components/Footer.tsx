import React from 'react';
import {
  Instagram,
  Facebook,
  Youtube,
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  Heart,
  Truck,
  Sparkles
} from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const Footer: React.FC = () => {
  const { navigateTo } = useStore();

  return (
    <footer className="bg-[#21110A] text-[#FAF7F2] border-t border-[#3D2318] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Feature Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-12 mb-12 border-b border-[#3D2318]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#3D2318] flex items-center justify-center text-[#E88296] shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-200">Fresh Daily Batches</h4>
              <p className="text-xs text-stone-400">Handcrafted every morning with real fruit</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#3D2318] flex items-center justify-center text-[#E88296] shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-200">Chilled Cold-Pack Delivery</h4>
              <p className="text-xs text-stone-400">Sub-4°C insulation straight to your door</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#3D2318] flex items-center justify-center text-[#E88296] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-200">Pure Food Safety</h4>
              <p className="text-xs text-stone-400">FSSAI compliant hygienic confectionery</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#3D2318] flex items-center justify-center text-[#E88296] shrink-0">
              <Heart className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-200">Founded with Passion</h4>
              <p className="text-xs text-stone-400">Vision crafted by Miss. Chinnari</p>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-serif text-3xl font-extrabold tracking-widest text-[#FAF7F2]">
                FREZZO
              </span>
              <span className="w-2 h-2 rounded-full bg-[#E88296] mb-1"></span>
            </div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#E88296] font-semibold">
              Desserts Worth Falling For
            </p>
            <p className="text-sm text-stone-300 leading-relaxed max-w-sm">
              FREZZO was founded by Miss. Chinnari to reimagine Indian fruit desserts through artisanal craft, pure whole milk malai, and farm-harvested seasonal fruits.
            </p>

            <div className="pt-2 flex items-center space-x-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#351C12] hover:bg-[#E88296] hover:text-[#21110A] text-stone-300 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#351C12] hover:bg-[#E88296] hover:text-[#21110A] text-stone-300 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#351C12] hover:bg-[#E88296] hover:text-[#21110A] text-stone-300 flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <button
                onClick={() => {
                  window.open('https://api.whatsapp.com/send?text=Hi%20Frezzo%20Desserts!%20I%20would%20like%20to%20order', '_blank');
                }}
                className="w-9 h-9 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
                aria-label="WhatsApp Concierge"
              >
                <Phone className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Shop */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-semibold tracking-wider text-[#E88296] uppercase">
              Shop Desserts
            </h4>
            <ul className="space-y-2 text-sm text-stone-300">
              <li>
                <button
                  onClick={() => navigateTo('shop')}
                  className="hover:text-white transition-colors"
                >
                  All Desserts
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('shop')}
                  className="hover:text-white transition-colors"
                >
                  Best Sellers
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('shop')}
                  className="hover:text-white transition-colors"
                >
                  New Arrivals
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('shop')}
                  className="hover:text-white transition-colors"
                >
                  Seasonal Specials
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('shop')}
                  className="hover:text-white transition-colors"
                >
                  Fruit Malai Series
                </button>
              </li>
            </ul>
          </div>

          {/* About */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-semibold tracking-wider text-[#E88296] uppercase">
              About & Story
            </h4>
            <ul className="space-y-2 text-sm text-stone-300">
              <li>
                <button
                  onClick={() => navigateTo('about')}
                  className="hover:text-white transition-colors"
                >
                  Our Story
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('about')}
                  className="hover:text-white transition-colors"
                >
                  Founder — Miss. Chinnari
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('about')}
                  className="hover:text-white transition-colors"
                >
                  Why Frezzo?
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('order-tracking')}
                  className="hover:text-white transition-colors"
                >
                  Track an Order
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('admin')}
                  className="hover:text-white transition-colors text-stone-400 flex items-center gap-1"
                >
                  <span>Admin Portal</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Help & Contact */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-semibold tracking-wider text-[#E88296] uppercase">
              Help & Concierge
            </h4>
            <ul className="space-y-2 text-sm text-stone-300">
              <li className="flex items-center gap-2 text-xs">
                <Mail className="w-3.5 h-3.5 text-[#E88296]" />
                <span>care@frezzo.in</span>
              </li>
              <li className="flex items-center gap-2 text-xs">
                <Phone className="w-3.5 h-3.5 text-[#E88296]" />
                <span>+91 (0) 800-FREZZO-HELP</span>
              </li>
              <li className="flex items-start gap-2 text-xs">
                <MapPin className="w-3.5 h-3.5 text-[#E88296] shrink-0 mt-0.5" />
                <span>Artisanal Kitchen, Jubilee Hills, Hyderabad & Bandra, Mumbai</span>
              </li>
              <li className="pt-2 text-xs text-stone-400">
                Operating Hours: 10:00 AM – 11:30 PM (7 Days a week)
              </li>
            </ul>
          </div>
        </div>

        {/* FSSAI & Food Regulatory Compliance Strip */}
        <div className="bg-[#2A160E] rounded-xl p-4 mb-8 border border-[#3D2318] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div className="flex items-center gap-3">
            <div className="px-2.5 py-1 bg-[#FAF7F2] text-[#2C1810] font-black tracking-widest text-[11px] rounded">
              fssai
            </div>
            <div>
              <p className="font-semibold text-stone-200">
                FSSAI License No. [Demo Registration / Ref #10022026000418]
              </p>
              <p className="text-[11px] text-stone-400">
                Verified dairy & confectionery processing facility standard. Compliant with Food Safety & Standards Regulations.
              </p>
            </div>
          </div>
          <div className="text-right text-[11px] text-stone-500">
            Temperature-controlled cold-chain packaging (2°C – 4°C)
          </div>
        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-6 border-t border-[#3D2318] flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-4">
          <p>© 2026 FREZZO Confectionery Pvt. Ltd. All rights reserved.</p>
          <div className="flex flex-wrap gap-4 text-stone-400 text-xs">
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Terms of Service</span>
            <span>•</span>
            <span>Refund & Cancellation Policy</span>
            <span>•</span>
            <span>Shipping & Cold-Chain Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
