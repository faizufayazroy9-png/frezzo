import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  Heart,
  Award,
  ShieldCheck,
  ArrowRight,
  Quote,
  Clock,
  Thermometer,
  Leaf,
  CheckCircle2,
  ChevronDown,
  Calendar,
  MapPin,
  Flame,
  Star,
  Compass,
  Check,
  Package,
  Layers,
  Milk,
  Apple
} from 'lucide-react';
import { useStore } from '../context/StoreContext';
import founderImg from '../assets/images/founder_chinnari_1789488589823.jpg';
import craftImg from '../assets/images/malai_craft_1789488607309.jpg';

export const AboutPage: React.FC = () => {
  const { navigateTo } = useStore();
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [activePillar, setActivePillar] = useState<number>(0);

  const pillars = [
    {
      id: 0,
      title: 'Whole Milk Purity',
      tagline: 'Never Skimmed, Never Powdered',
      icon: Milk,
      badge: '100% Pure Dairy',
      color: '#85223B',
      description:
        'We refuse shortcuts. Double-boiled whole buffalo and cow milk is slowly reduced over gentle embers in wide brass vessels until thick, velvety sheets of natural malai rise. We never use vegetable fats, palm oils, or artificial milk powders.',
      bullets: [
        'Slow simmered for 3+ hours per batch',
        'Natural dairy fats preserved at 8.5% richness',
        'Zero synthetic thickeners or gelatin'
      ]
    },
    {
      id: 1,
      title: 'Peak Harvest Sourcing',
      tagline: 'From Tree to Churn in 48 Hours',
      icon: Apple,
      badge: 'Farm Direct',
      color: '#B45309',
      description:
        'We follow nature’s unyielding calendar. We partner directly with smallholder farming families in Ratnagiri for Devgad Alphonso mangoes and Mahabaleshwar for wild ruby mulberries. When the harvest window closes, the dessert gracefully rests until next year.',
      bullets: [
        'Direct ethical trade with orchard farmers',
        'Hand-picked at natural ripeness on the bough',
        'Never canned pulps or artificially colored purées'
      ]
    },
    {
      id: 2,
      title: 'The Sub-4°C Cold Chain',
      tagline: 'Living Desserts Need Real Chill',
      icon: Thermometer,
      badge: 'Always Chilled',
      color: '#047857',
      description:
        'Because our desserts contain zero artificial chemical preservatives or shelf-life extenders, they cannot sit on ambient supermarket shelves. Every jar is chilled to 2°C–4°C and shipped in specialized thermo-insulated dry bags with reusable gel ice packs.',
      bullets: [
        'Multi-layer insulated silver thermal packing',
        'Maintained strictly under 4°C during courier transit',
        'Arrives cold and ready to savor immediately'
      ]
    },
    {
      id: 3,
      title: 'Artisanal Transparency',
      tagline: 'Only What Your Grandmother Recognizes',
      icon: ShieldCheck,
      badge: 'Clean Label',
      color: '#6D28D9',
      description:
        'Turn our jar around, and you will find an ingredient list of four to five natural items. No INS stabilizers, no E407 carrageenan, no artificial essences, and no high-fructose corn syrup. Just pure milk, fruit, organic cane sugar, and spices.',
      bullets: [
        'Completely transparent ingredient deck',
        'Naturally gluten-free and vegetarian',
        'Eco-friendly reusable food-grade glass jars'
      ]
    }
  ];

  const milestones = [
    {
      year: '2023',
      title: 'The Studio Kitchen Genesis',
      subtitle: 'Hyderabad & Mahabaleshwar',
      desc: 'Frustrated by mass-market puddings loaded with hydrogenated fats, Miss. Chinnari turned her private kitchen into an artisanal test lab. She churned the first 50 jars of Shahdood Malai for close friends and local food purists.',
      badge: 'Batch #001'
    },
    {
      year: '2024',
      title: 'The Breakthrough Cold-Chain',
      subtitle: 'Solving Freshness Without Chemicals',
      desc: 'Conventional wisdom said preservative-free malai could not be delivered to doorsteps. Miss. Chinnari spent 6 months engineering custom insulated thermal sleeves with food-safe eutectic ice packs to keep desserts sub-4°C during rapid transit.',
      badge: 'Cold Chain v1'
    },
    {
      year: '2025',
      title: 'A Cult Sweet Movement',
      subtitle: '50,000+ Jars Delivered',
      desc: 'Word-of-mouth spread like wildfire across dessert connoisseurs. FREZZO introduced limited seasonal drops: Sitaphal Chilled Cream, Ratnagiri Alphonso Malai, and Kesar Shahi Rabdi, earning a 4.9-star rating across thousands of orders.',
      badge: 'Community Love'
    },
    {
      year: '2026',
      title: 'The Future of Authentic Confectionery',
      subtitle: 'Preserving Heritage in Glass Jars',
      desc: 'Today, Miss. Chinnari leads a passionate team of confectioners committed to reviving indigenous Indian fruit varieties and setting a new benchmark for clean, luxurious, spoonable desserts.',
      badge: 'Present & Beyond'
    }
  ];

  const faqs = [
    {
      question: 'Why do Frezzo jars only have a 4 to 5-day shelf life?',
      answer:
        'Because our desserts are truly alive and free of synthetic chemical preservatives! Mass-market desserts last months because they use sodium benzoate, potassium sorbate, and ultra-processed shelf stabilizers. At Frezzo, we believe desserts are food, not chemical experiments. Fresh whole milk malai and fresh cut fruit belong in your refrigerator and should be enjoyed within days of slow churning.'
    },
    {
      question: 'What made Miss. Chinnari choose glass jars over plastic tubs?',
      answer:
        'Two reasons: flavor purity and environmental mindfulness. Plastic leaches microscopic compounds into dairy fats over time, flattening the delicate floral aroma of cardamom and fruits. Glass is completely inert, retains chill temperatures far longer, and creates a mindful eating ritual. Plus, our sturdy jars are designed to be reused as spice jars, plant pots, or candle holders!'
    },
    {
      question: 'What happens when a fruit goes out of season?',
      answer:
        'When the season ends, the jar sleeps! For example, when the Ratnagiri Alphonso mango harvest winds down in June, we do not switch to canned mango purées or artificial flavorings. We gracefully retire the Mango Malai until next spring and welcome the arrival of Custard Apple (Sitaphal) and Mahabaleshwar strawberries. We celebrate the beauty of anticipation.'
    },
    {
      question: 'Which dessert is Miss. Chinnari’s personal favorite?',
      answer:
        'Her heart will always belong to the Shahdood (Mulberry) Malai. It took her 42 trials to balance the dark, wine-like tartness of fresh hill mulberries with the rich, velvety sweetness of buffalo milk cream. One spoon takes her back to childhood memories in the Western Ghats.'
    }
  ];

  return (
    <div className="bg-[#FAF7F2] min-h-screen">
      {/* 1. EDITORIAL HERO WITH MOTION */}
      <section className="relative overflow-hidden pt-12 pb-16 sm:pt-20 sm:pb-24 border-b border-[#EEDFD5]">
        {/* Subtle Decorative Ambient Background Blurs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none overflow-hidden opacity-60">
          <div className="absolute -top-24 left-10 w-80 h-80 rounded-full bg-[#FCE8EC] filter blur-3xl opacity-70 animate-pulse"></div>
          <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-[#F4EBE1] filter blur-3xl opacity-60"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Animated Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FDF2F4] border border-[#F3CBD2] text-[#85223B] text-xs font-bold uppercase tracking-widest mb-6 shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#85223B]" />
            <span>The Founder & The Culinary Odyssey</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#2C1810] tracking-tight leading-[1.15] mb-6"
          >
            A Quiet Rebellion for <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#85223B]">Pure Whole-Milk Malai</span> & Ripe Orchards
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="text-base sm:text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed font-normal"
          >
            Frezzo was born not in a boardroom, but in an artisanal test kitchen. Miss. Chinnari set out with a singular conviction: that India’s greatest dairy legacy deserves to be experienced in its purest, coldest, most poetic form.
          </motion.p>

          {/* Jump Navigation Pills */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8 pt-4"
          >
            <a
              href="#founder-story"
              className="px-4 py-2 rounded-full text-xs font-semibold bg-white border border-[#EEDFD5] text-[#2C1810] hover:bg-[#FDF2F4] hover:text-[#85223B] hover:border-[#85223B] transition-all shadow-2xs"
            >
              Miss. Chinnari’s Story
            </a>
            <a
              href="#four-pillars"
              className="px-4 py-2 rounded-full text-xs font-semibold bg-white border border-[#EEDFD5] text-[#2C1810] hover:bg-[#FDF2F4] hover:text-[#85223B] hover:border-[#85223B] transition-all shadow-2xs"
            >
              Our 4 Pillars
            </a>
            <a
              href="#the-craft"
              className="px-4 py-2 rounded-full text-xs font-semibold bg-white border border-[#EEDFD5] text-[#2C1810] hover:bg-[#FDF2F4] hover:text-[#85223B] hover:border-[#85223B] transition-all shadow-2xs"
            >
              Inside the Atelier
            </a>
            <a
              href="#milestones"
              className="px-4 py-2 rounded-full text-xs font-semibold bg-white border border-[#EEDFD5] text-[#2C1810] hover:bg-[#FDF2F4] hover:text-[#85223B] hover:border-[#85223B] transition-all shadow-2xs"
            >
              Journey Timeline
            </a>
            <a
              href="#founder-letter"
              className="px-4 py-2 rounded-full text-xs font-semibold bg-white border border-[#EEDFD5] text-[#2C1810] hover:bg-[#FDF2F4] hover:text-[#85223B] hover:border-[#85223B] transition-all shadow-2xs"
            >
              Founder’s Letter
            </a>
          </motion.div>
        </div>
      </section>

      {/* 2. FOUNDER SPOTLIGHT: MISS. CHINNARI */}
      <section id="founder-story" className="py-16 sm:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-12 lg:p-14 border border-[#EEDFD5] shadow-xl relative overflow-hidden">
          {/* Subtle Background Accent Pattern */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#FCE8EC]/50 to-transparent rounded-bl-full pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
            {/* Left: Founder Portrait with Floating Badges */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="lg:col-span-5 relative"
            >
              {/* Decorative Frame */}
              <div className="relative mx-auto max-w-sm lg:max-w-none">
                <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#85223B]/20 via-[#E88296]/30 to-[#FAF7F2] -rotate-2"></div>

                <div className="relative aspect-4/5 rounded-2xl overflow-hidden border-4 border-white shadow-2xl bg-[#F4EBE1]">
                  <img
                    src={founderImg}
                    alt="Miss. Chinnari - Founder of FREZZO"
                    className="w-full h-full object-cover object-center filter contrast-[1.03] transition-transform duration-700 hover:scale-105"
                  />

                  {/* Gradient Overlay at Bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/85 via-transparent to-transparent flex flex-col justify-end p-6">
                    <span className="text-[11px] uppercase tracking-[0.2em] font-extrabold text-[#E88296]">
                      Founder & Master Confectioner
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-white tracking-wide">
                      Miss. Chinnari
                    </h3>
                    <p className="text-xs text-stone-300 font-light mt-0.5">
                      Curator of Indian Artisanal Malai
                    </p>
                  </div>
                </div>

                {/* Floating Badge 1: Top Right */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-4 -right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-lg border border-[#EEDFD5] flex items-center gap-2.5"
                >
                  <div className="w-8 h-8 rounded-xl bg-[#FDF2F4] text-[#85223B] flex items-center justify-center font-bold">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] uppercase font-bold text-stone-400">Purity Standard</p>
                    <p className="text-xs font-extrabold text-[#2C1810]">100% Real Malai</p>
                  </div>
                </motion.div>

                {/* Floating Badge 2: Bottom Left */}
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute -bottom-5 -left-4 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-2.5 shadow-lg border border-[#EEDFD5] flex items-center gap-2"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
                  <p className="text-xs font-bold text-[#2C1810]">
                    Daily Churn • Limited Jars
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Right: The Narrative & Manifesto */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
              className="lg:col-span-7 space-y-5 text-left"
            >
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#85223B]">
                <Heart className="w-4 h-4 fill-[#85223B]" />
                <span>The Story of Miss. Chinnari</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#2C1810] leading-tight">
                “Dessert is not just sugar. <br />
                It is a memory waiting to be rekindled.”
              </h2>

              <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
                <p>
                  Miss. Chinnari grew up surrounded by the comforting warmth of traditional kitchens. She watched grandmothers simmer brass cauldrons of milk for hours, patiently waiting for the rich, ruffled cream skin—the beloved <strong className="text-[#2C1810]">malai</strong>—to rise to the surface. Coupled with family road trips along the Western Ghats where roadside vendors offered fresh-plucked mulberries and wild berries tossed with chilled cream, an enduring taste memory was forged.
                </p>

                <p>
                  Years later, looking into modern confectionery displays and grocery aisles, she was disheartened. Commercial desserts had become a triumph of chemical convenience over culinary soul: vegetable fats, palm oils, chemical emulsifiers, and fake fruit syrups that had never seen sunshine or fertile soil.
                </p>

                <p>
                  In 2023, Miss. Chinnari made a vow: she would revive the lost art of the fresh fruit churn. Working in small test batches, it took over <strong className="text-[#85223B]">420 painstaking kitchen experiments</strong> to discover the exact temperature curves where pure whole buffalo milk malai pairs seamlessly with tart fruit compotes without splitting or curdling.
                </p>
              </div>

              {/* Founder Quote Card */}
              <div className="p-5 rounded-2xl bg-[#FAF7F2] border-l-4 border-[#85223B] relative mt-2 shadow-2xs">
                <Quote className="w-6 h-6 text-[#85223B]/30 absolute top-4 right-4" />
                <p className="text-xs sm:text-sm italic text-[#2C1810] font-serif leading-relaxed pr-8">
                  “I refuse to put anything into a FREZZO jar that I wouldn’t proudly serve to my own family. Real milk, real fruit, real cold. No compromises, no chemicals.”
                </p>
                <div className="mt-3 flex items-center justify-between pt-2 border-t border-[#EEDFD5]/60 text-xs">
                  <span className="font-extrabold text-[#85223B] tracking-wide">— Miss. Chinnari</span>
                  <span className="text-stone-500 italic">Founder & Confectioner</span>
                </div>
              </div>

              {/* Key Metrics Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
                <div className="p-3 rounded-xl bg-[#FDF2F4] text-center border border-[#F3CBD2]">
                  <span className="block font-serif text-xl sm:text-2xl font-extrabold text-[#85223B]">420+</span>
                  <span className="text-[10px] font-bold text-stone-600 uppercase tracking-wider">Test Batches</span>
                </div>
                <div className="p-3 rounded-xl bg-[#FAF7F2] text-center border border-[#EEDFD5]">
                  <span className="block font-serif text-xl sm:text-2xl font-extrabold text-[#2C1810]">100%</span>
                  <span className="text-[10px] font-bold text-stone-600 uppercase tracking-wider">Real Fruit</span>
                </div>
                <div className="p-3 rounded-xl bg-[#F4EBE1] text-center border border-[#DECBBF]">
                  <span className="block font-serif text-xl sm:text-2xl font-extrabold text-[#2C1810]">&lt; 4°C</span>
                  <span className="text-[10px] font-bold text-stone-600 uppercase tracking-wider">Chilled Transit</span>
                </div>
                <div className="p-3 rounded-xl bg-[#FDF2F4] text-center border border-[#F3CBD2]">
                  <span className="block font-serif text-xl sm:text-2xl font-extrabold text-[#85223B]">0%</span>
                  <span className="text-[10px] font-bold text-stone-600 uppercase tracking-wider">Preservatives</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. THE 4 SACRED PILLARS OF FREZZO */}
      <section id="four-pillars" className="py-16 sm:py-20 bg-[#F4EBE1]/60 border-y border-[#EEDFD5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs uppercase font-extrabold tracking-[0.25em] text-[#85223B]">
              Our Craft Philosophy
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2C1810] mt-2 mb-4">
              The 4 Uncompromising Pillars
            </h2>
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-light">
              Every single dessert bearing the Frezzo seal is held to Miss. Chinnari’s 4 core culinary mandates.
            </p>
          </div>

          {/* Interactive Pillar Tabs */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left Nav Pills */}
            <div className="lg:col-span-4 flex flex-col gap-2.5">
              {pillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                const isActive = activePillar === idx;
                return (
                  <button
                    key={pillar.id}
                    onClick={() => setActivePillar(idx)}
                    className={`text-left p-4 rounded-2xl border transition-all flex items-center justify-between ${
                      isActive
                        ? 'bg-[#85223B] text-white border-[#85223B] shadow-md scale-[1.02]'
                        : 'bg-white text-stone-700 border-[#EEDFD5] hover:bg-stone-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                          isActive ? 'bg-white/20 text-white' : 'bg-[#FDF2F4] text-[#85223B]'
                        }`}
                      >
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <p className={`text-xs font-bold ${isActive ? 'text-white' : 'text-[#2C1810]'}`}>
                          {pillar.title}
                        </p>
                        <p className={`text-[11px] ${isActive ? 'text-stone-200' : 'text-stone-500'}`}>
                          {pillar.badge}
                        </p>
                      </div>
                    </div>
                    <ArrowRight className={`w-4 h-4 ${isActive ? 'text-white' : 'text-stone-400'}`} />
                  </button>
                );
              })}
            </div>

            {/* Right Pillar Showcase Card with Animation */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePillar}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35 }}
                  className="bg-white rounded-3xl p-6 sm:p-10 border border-[#EEDFD5] shadow-lg h-full flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <span className="px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-[#FDF2F4] text-[#85223B] border border-[#F3CBD2]">
                        {pillars[activePillar].badge}
                      </span>
                      <span className="text-xs font-serif italic text-stone-400">
                        Mandate 0{activePillar + 1} of 04
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C1810] mb-2">
                      {pillars[activePillar].title}
                    </h3>
                    <p className="text-xs font-semibold text-[#85223B] uppercase tracking-wider mb-4">
                      {pillars[activePillar].tagline}
                    </p>

                    <p className="text-sm sm:text-base text-stone-700 leading-relaxed mb-6">
                      {pillars[activePillar].description}
                    </p>

                    <div className="space-y-3 pt-2 border-t border-[#F4EBE1]">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#2C1810]">
                        The Frezzo Standard:
                      </p>
                      {pillars[activePillar].bullets.map((bullet, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-600">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-4 flex items-center justify-between text-xs text-stone-500">
                    <span className="italic">Inspected & Verified Daily by Miss. Chinnari</span>
                    <button
                      onClick={() => navigateTo('shop')}
                      className="font-bold text-[#85223B] hover:underline inline-flex items-center gap-1"
                    >
                      <span>Taste the Difference</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* 4. VISUAL STORY MOSAIC: INSIDE THE ARTISANAL ATELIER */}
      <section id="the-craft" className="py-16 sm:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Atelier Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-[#DECBBF] shadow-xl">
              <img
                src={craftImg}
                alt="Artisanal simmered milk malai brass kadai"
                className="w-full h-80 sm:h-96 lg:h-[460px] object-cover filter contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/80 via-transparent to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#E88296]">
                  Slow Embers & Brass Kritis
                </span>
                <h4 className="font-serif text-xl sm:text-2xl font-bold">
                  The Art of the Slow Churn
                </h4>
                <p className="text-xs text-stone-200 mt-1 max-w-md font-light">
                  Fresh buffalo milk simmers at 82°C. No boiling over, no rushed cooling. Only gentle patience yields the cloud-like malai ruffles.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Daily Atelier Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            <div>
              <span className="text-xs uppercase font-extrabold tracking-[0.25em] text-[#85223B]">
                Behind the Scenes
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#2C1810] mt-1">
                A Day in Miss. Chinnari’s Kitchen
              </h2>
              <p className="text-sm text-stone-600 mt-2">
                Unlike commercial factories operating automated canning lines, each batch at Frezzo follows an ancient morning rhythm.
              </p>
            </div>

            {/* Steps Timeline */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#EEDFD5] shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#DECBBF] flex items-center justify-center font-serif font-bold text-xs text-[#85223B] shrink-0">
                  06:00
                </div>
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-[#2C1810]">
                    Dairy Arrival & Purity Inspection
                  </h4>
                  <p className="text-xs text-stone-600 mt-0.5">
                    Fresh whole buffalo & cow milk from trusted ethical farms is tested for fat density and pristine sweetness.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#EEDFD5] shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-[#FDF2F4] border border-[#F3CBD2] flex items-center justify-center font-serif font-bold text-xs text-[#85223B] shrink-0">
                  09:30
                </div>
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-[#2C1810]">
                    The Slow Brass Simmer
                  </h4>
                  <p className="text-xs text-stone-600 mt-0.5">
                    Milk is slowly simmered in wide brass pans. The delicate malai blankets are gathered by hand with wooden ladles.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#EEDFD5] shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#DECBBF] flex items-center justify-center font-serif font-bold text-xs text-[#85223B] shrink-0">
                  12:00
                </div>
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-[#2C1810]">
                    Fruit Maceration & Layering
                  </h4>
                  <p className="text-xs text-stone-600 mt-0.5">
                    Mahabaleshwar mulberries and Ratnagiri mangoes are hand-cut and layered fresh with velvety cream into cold glass jars.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#EEDFD5] shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-[#FDF2F4] border border-[#F3CBD2] flex items-center justify-center font-serif font-bold text-xs text-[#85223B] shrink-0">
                  14:30
                </div>
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-[#2C1810]">
                    Sub-Zero Seal & Express Dispatch
                  </h4>
                  <p className="text-xs text-stone-600 mt-0.5">
                    Jars are hermetically sealed, cold-packed in thermal sleeves, and dispatched via chilled couriers straight to your door.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. JOURNEY TIMELINE / MILESTONES */}
      <section id="milestones" className="py-16 sm:py-24 bg-white border-t border-[#EEDFD5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase font-extrabold tracking-[0.25em] text-[#85223B]">
              The Story Unfolds
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#2C1810] mt-1 mb-3">
              Milestones Along the Journey
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              How a quiet weekend kitchen experiment transformed into India’s most cherished cold dessert brand.
            </p>
          </div>

          {/* Timeline Grid */}
          <div className="relative">
            {/* Center Line for Desktop */}
            <div className="hidden md:block absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-[#EEDFD5]"></div>

            <div className="space-y-12">
              {milestones.map((m, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <motion.div
                    key={m.year}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className={`relative flex flex-col md:flex-row items-center ${
                      isEven ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Content Box */}
                    <div className="w-full md:w-1/2 p-2 sm:p-4">
                      <div
                        className={`bg-[#FAF7F2] rounded-2xl p-6 sm:p-8 border border-[#EEDFD5] shadow-xs ${
                          isEven ? 'md:text-left' : 'md:text-left'
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-serif text-2xl font-extrabold text-[#85223B]">
                            {m.year}
                          </span>
                          <span className="text-xs px-2.5 py-0.5 rounded-full bg-white font-semibold text-stone-600 border border-[#EEDFD5]">
                            {m.badge}
                          </span>
                        </div>
                        <h4 className="font-serif text-lg sm:text-xl font-bold text-[#2C1810] mb-1">
                          {m.title}
                        </h4>
                        <p className="text-xs font-semibold text-[#85223B] uppercase tracking-wider mb-3">
                          {m.subtitle}
                        </p>
                        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                          {m.desc}
                        </p>
                      </div>
                    </div>

                    {/* Timeline Center Node */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#85223B] text-white items-center justify-center font-bold text-xs border-4 border-white shadow-md z-10">
                      <Star className="w-3.5 h-3.5 fill-white" />
                    </div>

                    {/* Empty Space for alignment */}
                    <div className="hidden md:block w-1/2"></div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 6. FOUNDER'S HEARTFELT LETTER WITH WAX SEAL */}
      <section id="founder-letter" className="py-16 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#FFFDF9] rounded-3xl p-8 sm:p-14 border-2 border-[#DECBBF] shadow-2xl relative overflow-hidden text-left"
        >
          {/* Subtle Vintage Watermark / Texture Accent */}
          <div className="absolute top-6 right-8 opacity-10 pointer-events-none">
            <Quote className="w-32 h-32 text-[#85223B]" />
          </div>

          {/* Letter Header */}
          <div className="border-b border-[#EEDFD5] pb-6 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#85223B]">
                A Personal Note From The Confectioner
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C1810] mt-1">
                Dear Dessert Lover,
              </h3>
            </div>
            <div className="text-xs text-stone-400 font-mono">
              From the Kitchen Atelier • Today
            </div>
          </div>

          {/* Letter Body */}
          <div className="space-y-5 text-stone-700 font-serif text-base sm:text-lg leading-relaxed italic">
            <p>
              Thank you for stopping by our dessert house.
            </p>
            <p>
              When I began Frezzo, people told me that Indian consumers only care about cheap price and indefinite shelf-life. They advised me to use vegetable oils, synthetic mango essence, and chemical gums to make our jars survive on warm shelves.
            </p>
            <p>
              I chose the harder road. Because I believe that when you open a cold jar of Frezzo Shahdood Malai after a long tiring day, you shouldn’t just taste sugar—you should feel the comforting hug of real cream and the lively tang of hill mulberries. You should feel cared for.
            </p>
            <p>
              Every jar leaving our atelier has been tasted, weighed, and sealed with profound respect for our dairy farmers and orchard growers. I hope you enjoy eating it as much as my team and I love churning it for you.
            </p>
          </div>

          {/* Letter Sign-off */}
          <div className="mt-10 pt-6 border-t border-[#EEDFD5] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <p className="font-serif text-2xl sm:text-3xl font-bold text-[#85223B]">
                Miss. Chinnari
              </p>
              <p className="text-xs font-sans text-stone-500 font-medium mt-0.5">
                Founder, Confectioner & Taste Guardian • FREZZO
              </p>
            </div>

            {/* Wax Seal Graphic */}
            <div className="flex items-center gap-3 bg-[#FAF7F2] px-4 py-2.5 rounded-2xl border border-[#DECBBF]">
              <div className="w-10 h-10 rounded-full bg-[#85223B] flex items-center justify-center text-white font-serif font-bold text-sm shadow-md ring-2 ring-[#FDF2F4]">
                FRZ
              </div>
              <div className="text-left text-xs">
                <p className="font-extrabold text-[#2C1810]">Purity Verified</p>
                <p className="text-[10px] text-stone-500">Miss. Chinnari Seal</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 7. CHEF'S TASTING RITUAL (HOW TO ENJOY FREZZO) */}
      <section className="py-14 sm:py-16 bg-[#FDF2F4] border-y border-[#F3CBD2]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs uppercase font-extrabold tracking-[0.25em] text-[#85223B]">
            The Savoring Ritual
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C1810] mt-1 mb-2">
            How Miss. Chinnari Recommends Enjoying Your Jar
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto mb-10">
            Follow these 3 simple culinary steps to experience the exact textural symphony we crafted in the kitchen.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-white rounded-2xl p-6 border border-[#EEDFD5] shadow-xs">
              <div className="w-9 h-9 rounded-xl bg-[#FAF7F2] text-[#85223B] flex items-center justify-center font-serif font-bold text-base mb-3 border border-[#EEDFD5]">
                1
              </div>
              <h4 className="font-bold text-sm text-[#2C1810] mb-1">
                Chill to 2°C – 4°C
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Never freeze! Place your jar in the coldest middle shelf of your refrigerator for at least 20 minutes before breaking the seal.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#EEDFD5] shadow-xs">
              <div className="w-9 h-9 rounded-xl bg-[#FAF7F2] text-[#85223B] flex items-center justify-center font-serif font-bold text-base mb-3 border border-[#EEDFD5]">
                2
              </div>
              <h4 className="font-bold text-sm text-[#2C1810] mb-1">
                Use a Chilled Spoon
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                A warm spoon warms the fragile dairy emulsion. Miss. Chinnari keeps a dessert spoon in the freezer for 5 minutes before indulging.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#EEDFD5] shadow-xs">
              <div className="w-9 h-9 rounded-xl bg-[#FAF7F2] text-[#85223B] flex items-center justify-center font-serif font-bold text-base mb-3 border border-[#EEDFD5]">
                3
              </div>
              <h4 className="font-bold text-sm text-[#2C1810] mb-1">
                The Vertical Scoop
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Do not stir or mix the jar! Plunge the spoon vertically down to the base to capture both the tart fruit and velvety malai in a single bite.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FREQUENTLY ASKED CONVERSATIONS WITH MISS. CHINNARI */}
      <section className="py-16 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase font-extrabold tracking-[0.25em] text-[#85223B]">
            Conversations with the Confectioner
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#2C1810] mt-1 mb-3">
            Questions Dessert Purists Ask
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            Miss. Chinnari answers honest questions about our recipes, ingredients, and storage.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#EEDFD5] shadow-2xs overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 hover:bg-stone-50 transition-colors"
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-[#2C1810]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-300 shrink-0 ${
                      isOpen ? 'bg-[#85223B] text-white rotate-180' : 'bg-[#FAF7F2] text-[#2C1810]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-[#F4EBE1]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* 9. BOTTOM CALL TO ACTION BANNER */}
      <section className="pb-16 sm:pb-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl bg-[#2C1810] text-[#FAF7F2] p-8 sm:p-14 text-center relative overflow-hidden shadow-2xl"
        >
          {/* Decorative Glow */}
          <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-[#E88296]/20 blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-[#85223B]/30 blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/10 text-[#E88296] text-xs font-bold uppercase tracking-widest border border-white/15">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Small Batch • Fresh Churn Today</span>
            </span>

            <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
              Ready to Taste What Real Malai Feels Like?
            </h3>

            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              Order your jar of Shahdood Malai, Sitaphal Chilled Cream, or Alphonso Mango Rabdi. Delivered in insulated sub-4°C chill packs right to your doorstep.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => navigateTo('shop')}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#E88296] hover:bg-[#df7388] text-[#2C1810] font-bold text-xs tracking-wider uppercase inline-flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5"
              >
                <span>EXPLORE ALL DESSERTS</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => navigateTo('product-detail', 'shahdood-malai')}
                className="w-full sm:w-auto px-6 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs tracking-wider uppercase border border-white/20 transition-colors"
              >
                <span>Order Miss. Chinnari’s Signature Jar</span>
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
