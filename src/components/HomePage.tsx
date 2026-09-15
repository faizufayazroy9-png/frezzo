import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Truck,
  Heart,
  Star,
  Leaf,
  Clock,
  Instagram,
  CheckCircle2,
  Gift
} from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { ProductCard } from './ProductCard';
import { DEMO_REVIEWS } from '../data/dessertData';
import craftImg from '../assets/images/malai_craft_1789488607309.jpg';
import founderImg from '../assets/images/founder_chinnari_1789488589823.jpg';

export const HomePage: React.FC = () => {
  const { products, navigateTo, addToast } = useStore();
  const [emailInput, setEmailInput] = useState('');
  const [newsletterJoined, setNewsletterJoined] = useState(false);

  const bestsellers = products.filter((p) => p.isBestseller);
  const seasonalProducts = products.filter((p) => p.isSeasonal);
  const newDrops = products.filter((p) => p.isNew);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim()) return;
    setNewsletterJoined(true);
    addToast('Welcome to Frezzo Club!', 'Use code FIRSTTREAT for 15% off your first chilled box.', 'success');
  };

  const instagramShots = [
    {
      img: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80',
      tag: '@priya.bites • Shahdood Malai'
    },
    {
      img: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=600&q=80',
      tag: '@sweettooth_hyd • Strawberry Bowl'
    },
    {
      img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80',
      tag: '@delhi_foodie • Alphonso Mango Spoon'
    },
    {
      img: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=600&q=80',
      tag: '@dessert_diaries • Gulab Jamun Rabdi'
    }
  ];

  return (
    <div className="bg-[#FAF7F2] min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-8 pb-16 sm:pb-24 lg:pt-14 border-b border-[#EEDFD5]">
        {/* Subtle background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#F2A4B2]/20 via-[#C89D5C]/15 to-transparent rounded-full blur-3xl pointer-events-none -z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#DECBBF] shadow-xs text-xs font-semibold text-[#2C1810]">
                <span className="flex items-center text-amber-500">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                </span>
                <span>4.9/5 Rating from 3,800+ Sweet Lovers</span>
                <span className="text-stone-300">•</span>
                <span className="text-[#85223B] font-bold">Chilled Express</span>
              </div>

              {/* Tagline Headline */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-[#2C1810] tracking-tight leading-[1.08]">
                Desserts Worth <br />
                <span className="italic font-normal text-[#85223B]">Falling For.</span>
              </h1>

              {/* Sub-headline */}
              <p className="text-base sm:text-lg text-stone-700 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Handcrafted Indian fruit malai, rich slow-simmered rabdi, and contemporary chilled confectionery. Made fresh daily with pure whole milk and sun-ripened orchard fruits.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3.5 justify-center lg:justify-start pt-2">
                <button
                  id="hero-explore-btn"
                  onClick={() => navigateTo('shop')}
                  className="px-8 py-4 rounded-full bg-[#85223B] hover:bg-[#6c172d] text-white font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-lg hover:shadow-xl active:scale-95 flex items-center justify-center gap-2"
                >
                  <span>EXPLORE FRESH DESSERTS</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  id="hero-specials-btn"
                  onClick={() => {
                    const el = document.getElementById('bestsellers-section');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-8 py-4 rounded-full bg-white hover:bg-[#F4EBE1] text-[#2C1810] border border-[#DECBBF] font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-xs flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-[#85223B]" />
                  <span>TODAY'S SPECIALS</span>
                </button>
              </div>

              {/* Assurance bullets */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-semibold text-stone-600">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Pure Whole Milk Malai
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Sub-4°C Cold Packaging
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Zero Chemical Preservatives
                </span>
              </div>
            </div>

            {/* Right Visual Composition (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-4/5 rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#F4EBE1]">
                <img
                  src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1000&q=80"
                  alt="Frezzo Handcrafted Fruit Malai Glass Jar"
                  className="w-full h-full object-cover object-center"
                />

                {/* Floating Highlight Tag 1 */}
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-lg border border-[#EEDFD5] flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FDF2F4] text-[#85223B] flex items-center justify-center font-bold">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#85223B] tracking-wider block">
                      Signature Churn
                    </span>
                    <strong className="text-xs text-[#2C1810] font-serif">Shahdood Malai Jar</strong>
                  </div>
                </div>

                {/* Floating Highlight Tag 2 */}
                <div className="absolute bottom-6 right-6 bg-[#2C1810]/90 backdrop-blur-md text-white rounded-2xl p-3 shadow-lg flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></div>
                  <div>
                    <span className="text-[10px] text-stone-300 uppercase block font-semibold">
                      Fresh Batch Ready
                    </span>
                    <strong className="text-xs text-white">45 Mins Express Delivery</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ASSURANCE STRIP */}
      <section className="bg-white border-b border-[#EEDFD5] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Leaf className="w-6 h-6 text-[#85223B] mb-2" />
              <h4 className="font-serif font-bold text-sm text-[#2C1810]">100% Real Fresh Fruit</h4>
              <p className="text-xs text-stone-500 mt-0.5">Sourced from regional orchards</p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="w-6 h-6 text-[#85223B] mb-2" />
              <h4 className="font-serif font-bold text-sm text-[#2C1810]">Crafted Daily in Batches</h4>
              <p className="text-xs text-stone-500 mt-0.5">Never frozen or warehouse-stored</p>
            </div>
            <div className="flex flex-col items-center">
              <Truck className="w-6 h-6 text-[#85223B] mb-2" />
              <h4 className="font-serif font-bold text-sm text-[#2C1810]">Chilled Thermal Packaging</h4>
              <p className="text-xs text-stone-500 mt-0.5">Delivered cold at sub-4°C</p>
            </div>
            <div className="flex flex-col items-center">
              <ShieldCheck className="w-6 h-6 text-[#85223B] mb-2" />
              <h4 className="font-serif font-bold text-sm text-[#2C1810]">Clean Kitchen Purity</h4>
              <p className="text-xs text-stone-500 mt-0.5">Zero artificial preservatives</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BESTSELLERS SECTION */}
      <section id="bestsellers-section" className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] font-extrabold text-[#85223B]">
              Most Loved Jars
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#2C1810] mt-1">
              Frezzo Bestsellers
            </h2>
            <p className="text-xs text-stone-600 mt-1 max-w-lg">
              The iconic jars that our dessert lovers order again and again. Layered fresh daily with pure dairy malai.
            </p>
          </div>

          <button
            onClick={() => navigateTo('shop')}
            className="text-xs font-bold uppercase tracking-wider text-[#85223B] hover:text-[#2C1810] flex items-center gap-1.5 self-start sm:self-auto transition-colors"
          >
            <span>VIEW COMPLETE MENU</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Bestseller Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 4. WHY FREZZO (4 PILLARS) */}
      <section className="py-16 bg-[#F4EBE1]/60 border-y border-[#EEDFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-[0.25em] font-extrabold text-[#85223B]">
              The Confectionery Standard
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#2C1810] mt-1">
              Why Frezzo Is Unlike Any Other
            </h2>
            <p className="text-xs text-stone-600 mt-2">
              We took the soul of timeless Indian desserts and reimagined them with pristine ingredients, modern balance, and artisanal presentation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-3xl p-6 border border-[#EEDFD5] shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-[#FDF2F4] text-[#85223B] flex items-center justify-center font-bold mb-4">
                01
              </div>
              <h3 className="font-serif text-lg font-bold text-[#2C1810] mb-2">
                Slow-Simmered Malai
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                We double-simmer pure whole milk for hours until the clotted malai achieves a velvety, spoonable cloud consistency without any artificial stabilizers.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-[#EEDFD5] shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-[#FDF2F4] text-[#85223B] flex items-center justify-center font-bold mb-4">
                02
              </div>
              <h3 className="font-serif text-lg font-bold text-[#2C1810] mb-2">
                Peak-Harvest Fruit
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                From Mahabaleshwar mulberries to Konkan Alphonsoes, we work directly with fruit growers to pick fruits when their natural aromas and sweetness peak.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-[#EEDFD5] shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-[#FDF2F4] text-[#85223B] flex items-center justify-center font-bold mb-4">
                03
              </div>
              <h3 className="font-serif text-lg font-bold text-[#2C1810] mb-2">
                Preservative-Free
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Zero synthetic food colors, zero chemical preservatives, and zero palm oil. What you taste is clean, honest dairy and sun-ripened fruit.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-[#EEDFD5] shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-[#FDF2F4] text-[#85223B] flex items-center justify-center font-bold mb-4">
                04
              </div>
              <h3 className="font-serif text-lg font-bold text-[#2C1810] mb-2">
                Cold-Chain Delivery
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Our insulated dispatch bags with food-grade gel ice keep temperatures sub-4°C from our kitchen counter to your hands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. THE INGREDIENT STORY SPOTLIGHT */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#EEDFD5] shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          {/* Left Media (6 cols) */}
          <div className="lg:col-span-6 relative aspect-square lg:aspect-auto bg-[#F4EBE1]">
            <img
              src={craftImg}
              alt="Fresh Indian whole milk malai simmering in brass kadai"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/80 via-[#2C1810]/20 to-transparent flex items-end p-8">
              <div className="text-white">
                <span className="text-xs uppercase font-bold tracking-widest text-[#E88296]">
                  Farm to Chilled Jar
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold mt-1">
                  Honoring the Purity of Indian Dairy & Orchards
                </h3>
              </div>
            </div>
          </div>

          {/* Right Editorial (6 cols) */}
          <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] font-extrabold text-[#85223B]">
                Craftsmanship
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#2C1810] mt-1 mb-4">
                The Ingredient Story
              </h2>
              <p className="text-sm text-stone-600 leading-relaxed mb-6">
                At FREZZO, we believe a dessert is only as magnificent as its raw ingredients. Our founder, Miss. Chinnari, spent months testing dairy sources to find grass-fed cow and buffalo milk with the exact butterfat ratio needed to churn silky, non-greasy malai.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#FDF2F4] text-[#85223B] flex items-center justify-center shrink-0 font-bold text-xs">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-xs uppercase text-[#2C1810]">
                      Mahabaleshwar Mulberry Compote
                    </h4>
                    <p className="text-xs text-stone-500 mt-0.5">
                      Slow-cooked with raw organic khandsari to preserve the fruit's gentle tartness and deep purple hue.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#FDF2F4] text-[#85223B] flex items-center justify-center shrink-0 font-bold text-xs">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-xs uppercase text-[#2C1810]">
                      Ratnagiri Alphonso Pulp
                    </h4>
                    <p className="text-xs text-stone-500 mt-0.5">
                      Naturally sweet mango chunks folded gently into cold cream without heating or artificial coloring.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#FDF2F4] text-[#85223B] flex items-center justify-center shrink-0 font-bold text-xs">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-xs uppercase text-[#2C1810]">
                      Kannauj Rosewater & Pistachios
                    </h4>
                    <p className="text-xs text-stone-500 mt-0.5">
                      Traditional steam-distilled floral essence and slivered Irani pistachios for subtle aromatic luxury.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#EEDFD5] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <img
                  src={founderImg}
                  alt="Miss. Chinnari"
                  className="w-11 h-11 rounded-full object-cover border-2 border-[#85223B] shadow-sm shrink-0"
                />
                <div>
                  <h5 className="font-serif text-xs font-bold text-[#2C1810]">Miss. Chinnari</h5>
                  <p className="text-[10px] text-stone-500 uppercase tracking-wider font-semibold">Founder & Confectioner</p>
                </div>
              </div>

              <button
                onClick={() => navigateTo('about')}
                className="text-xs font-bold uppercase tracking-wider text-[#85223B] hover:text-[#2C1810] flex items-center gap-2 transition-colors group"
              >
                <span>READ HER STORY & CRAFT</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SEASONAL HARVEST COLLECTION */}
      <section className="py-16 bg-[#FAF7F2] border-t border-[#EEDFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] font-extrabold text-[#85223B]">
                Limited Batches
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#2C1810] mt-1">
                Seasonal Harvest Drops
              </h2>
              <p className="text-xs text-stone-600 mt-1">
                These creations depend entirely on natural fruit seasons. Once the batch sells out, it waits until the next bloom.
              </p>
            </div>

            <button
              onClick={() => navigateTo('shop')}
              className="text-xs font-bold uppercase tracking-wider text-[#85223B] hover:text-[#2C1810] flex items-center gap-1.5 transition-colors"
            >
              <span>EXPLORE ALL DROPS</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {seasonalProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 7. CUSTOMER REVIEWS SLIDER / GRID */}
      <section className="py-16 sm:py-20 bg-white border-y border-[#EEDFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-[0.25em] font-extrabold text-[#85223B]">
              Tasting Impressions
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#2C1810] mt-1">
              Loved by Dessert Connoisseurs
            </h2>
            <p className="text-xs text-stone-500 mt-2">
              Discover what dessert lovers in Hyderabad, Mumbai, Bangalore and beyond are saying about our cold malai jars.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DEMO_REVIEWS.map((rev) => (
              <div
                key={rev.id}
                className="bg-[#FAF7F2] rounded-3xl p-6 border border-[#EEDFD5] shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] text-stone-400">{rev.date}</span>
                  </div>

                  <h4 className="font-serif font-bold text-base text-[#2C1810] mb-2">
                    "{rev.title}"
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed mb-4">
                    {rev.comment}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#DECBBF] flex items-center justify-between text-xs">
                  <div>
                    <strong className="text-[#2C1810] block">{rev.author}</strong>
                    <span className="text-stone-400 text-[11px]">{rev.city}</span>
                  </div>
                  <span className="text-[10px] font-bold text-[#85223B] bg-[#FDF2F4] px-2.5 py-1 rounded-full border border-[#F2A4B2]">
                    {rev.productName}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. INSTAGRAM GALLERY (#FrezzoMoments) */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#85223B] mb-1">
            <Instagram className="w-4 h-4" />
            <span>#FrezzoMoments</span>
          </div>
          <h2 className="font-serif text-3xl font-extrabold text-[#2C1810]">
            Instagram-Worthy Indulgence
          </h2>
          <p className="text-xs text-stone-600 mt-1">
            Tag @frezzo.desserts to be featured on our community tasting gallery.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {instagramShots.map((shot, idx) => (
            <div
              key={idx}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-[#F4EBE1] border border-[#EEDFD5] shadow-xs cursor-pointer"
            >
              <img
                src={shot.img}
                alt="Instagram dessert feature"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex items-end">
                <span className="text-white text-xs font-semibold">{shot.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. NEWSLETTER & SWEET CLUB SIGNUP */}
      <section className="py-16 sm:py-20 bg-[#2C1810] text-[#FAF7F2] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6 relative z-10">
          <div className="w-14 h-14 rounded-full bg-[#85223B] text-white flex items-center justify-center mx-auto shadow-md">
            <Gift className="w-7 h-7 text-[#E88296]" />
          </div>

          <span className="text-xs uppercase tracking-[0.25em] font-extrabold text-[#E88296]">
            The Frezzo Tasting Circle
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Join The Frezzo Sweet Club
          </h2>

          <p className="text-sm text-stone-300 max-w-md mx-auto leading-relaxed">
            Subscribe to receive private invites for limited seasonal fruit churns, secret weekend drop discounts, and <strong>15% off your first chilled box</strong>.
          </p>

          {newsletterJoined ? (
            <div className="p-4 rounded-2xl bg-[#85223B]/80 text-white max-w-md mx-auto text-xs font-bold flex items-center justify-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span>Welcome! Use code <strong>FIRSTTREAT</strong> at checkout for 15% off.</span>
            </div>
          ) : (
            <form onSubmit={handleNewsletter} className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className="flex-1 px-4 py-3.5 bg-white/10 border border-white/20 rounded-full text-xs text-white placeholder-stone-400 focus:outline-none focus:border-[#E88296]"
              />
              <button
                type="submit"
                className="px-6 py-3.5 bg-[#85223B] hover:bg-[#6c172d] text-white text-xs font-bold uppercase tracking-wider rounded-full transition-all shadow-md active:scale-95"
              >
                Join Now
              </button>
            </form>
          )}

          <p className="text-[11px] text-stone-400">
            No spam, only pure sweet joy. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  );
};
