import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Music, Users, MapPin, ArrowUpRight, Mail } from 'lucide-react';
import OptimizedImage from '../components/OptimizedImage';
import ThreeDTiltCard from '../components/ThreeDTiltCard';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import SEO from '../components/SEO';

interface ExpertiseItem {
  title: string;
  image: string;
  desc: string;
}

const ExpertiseCard: React.FC<{ item: ExpertiseItem; index: number }> = ({ item, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group flex-shrink-0 w-[85vw] md:w-auto snap-center will-change-transform"
    >
      <ThreeDTiltCard intensity={8} className="h-[450px] md:h-[600px] w-full">
        <div className="relative h-full w-full overflow-hidden rounded-sm border border-white/10 group-hover:border-amber-500/50 transition-colors duration-500 bg-brand-dark transform-gpu">
          <motion.div
            style={{ y }}
            className="absolute inset-0 h-[120%] -top-[10%] w-full will-change-transform"
          >
            <OptimizedImage
              src={item.image}
              alt={`${item.title} - Room 254 Services`}
              className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-transform duration-700"
            />
          </motion.div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 z-10" />

          {/* Neon Hover Glow */}
          <div className="absolute inset-0 bg-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay z-10" />

          <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 z-20">
            <div className="h-0.5 bg-gradient-to-r from-amber-500 to-orange-600 mb-4 md:mb-6 w-0 group-hover:w-16 transition-all duration-500 ease-out" />
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2 md:mb-4 uppercase leading-none tracking-wide group-hover:text-amber-500 transition-colors duration-300">
              {item.title}
            </h3>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed max-w-xs md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 transform md:translate-y-4 md:group-hover:translate-y-0">
              {item.desc}
            </p>
          </div>
        </div>
      </ThreeDTiltCard>
    </motion.div>
  );
};

const Home: React.FC = () => {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], [0, 400]);

  const expertiseItems: ExpertiseItem[] = [
    {
      title: "THE RAVE",
      image: "/images/_DSC0296.jpg",
      desc: "High-energy, rhythm-driven club nights where the bass hits your chest and the vibe is unmatched."
    },
    {
      title: "THE STAGE",
      image: "/images/_DSC9950.jpg",
      desc: "Spotlighting the next generation of talent. Live performances that blur the line between artist and crowd."
    },
    {
      title: "THE DAY PARTY",
      image: "/images/_DSC0351.jpg",
      desc: "Sun-soaked vibes, open-air rhythms, and the best food and drink. The perfect daytime flex."
    },
    {
      title: "THE CULTURE",
      image: "/images/_DSC9928.jpg",
      desc: "More than just a party. We celebrate our heritage through music, art, and community connection."
    },
    {
      title: "THE STUDIO",
      image: "/images/_DSC9960.jpg",
      desc: "Curating bespoke content and intimate sessions. Capturing the essence of the movement."
    },
    {
      title: "THE TAKEOVER",
      image: "/images/_DSC0272.jpg",
      desc: "Pop-up events in unexpected spaces. We bring the Room 254 energy to warehouses, rooftops, and beyond."
    }
  ];

  const serviceList = [
    "VENUE SOURCING",
    "SUSTAINABLE SOLUTIONS",
    "CREATIVE DESIGN",
    "BRAND INTEGRATION",
    "EXPERT NEGOTIATION",
    "GROUP LOGISTICS",
    "CONTENT PRODUCTION",
    "POST-EVENT INSIGHT",
    "GUEST REGISTRATION",
    "BUDGET MANAGEMENT"
  ];

  return (
    <div className="w-full">
      <SEO
        title="Home"
        description="The ultimate Afrobeats, Amapiano, and Bashment experience. Based in Oxford, expanding to Reading, Birmingham, Bristol, and Northampton."
        keywords="Afrobeats Oxford, Amapiano Reading, Birmingham nightlife, Bristol events, Northampton clubs, Room 254"
      />

      {/* Hero Section */}
      <section className="relative h-[100svh] w-full overflow-hidden flex flex-col items-center justify-center bg-black">
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0 z-0 will-change-transform"
        >
          <video
            src="/videos/newhero.mp4"
            autoPlay
            muted
            loop
            playsInline
            poster="/images/_DSC9960.jpg"
            className="absolute inset-0 w-full h-full object-cover opacity-60 pointer-events-none brightness-75 contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-brand-black transform-gpu" />
        </motion.div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.3,
                  delayChildren: 0.5
                }
              }
            }}
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
                visible: {
                  opacity: 1,
                  scale: 1,
                  filter: "blur(0px)",
                  transition: { duration: 1.2, ease: "easeOut" }
                }
              }}
              className="flex justify-center mb-6"
            >
              <Logo className="h-32 md:h-64 w-auto text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
            </motion.div>

            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: "easeOut" }
                }
              }}
              className="text-5xl md:text-8xl font-display font-bold text-white uppercase tracking-tighter mb-8 leading-none drop-shadow-2xl"
            >
              THE ROOM <br className="md:hidden" /> OF CULTURE
            </motion.h1>
          </motion.div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            <Link to="/events" className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold uppercase tracking-widest hover:brightness-110 transition-all duration-300 transform hover:scale-105 border border-transparent shadow-lg shadow-orange-500/20">
              Explore Events
            </Link>
            <Link to="/about" className="w-full md:w-auto px-8 py-4 border border-white/30 text-white font-bold uppercase tracking-widest hover:bg-white/10 transition-colors backdrop-blur-sm">
              Our Story
            </Link>
          </div>
        </div>

        {/* Scrolling Ticker at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-r from-red-700 via-yellow-600 to-green-700 overflow-hidden py-3 backdrop-blur-md">
          <motion.div
            className="flex whitespace-nowrap will-change-transform"
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          >
            {[...Array(10)].map((_, i) => (
              <span key={i} className="text-white font-display font-bold uppercase tracking-widest mx-4 text-xs flex items-center gap-8">
                ROOM 254 <span className="w-1 h-1 bg-black rounded-full" />
                NEXXT EVENT COMING SOON <span className="w-1 h-1 bg-black rounded-full" />
                OXFORD <span className="w-1 h-1 bg-black rounded-full" />
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 md:py-32 px-6 md:px-20 bg-brand-black text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-0.5 w-12 bg-amber-600"></div>
              <span className="text-amber-600 font-bold uppercase tracking-widest text-xs">Our Philosophy</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-[0.9] tracking-tighter">
              ELEVATING <br className="hidden md:block" />
              EVERY MOMENT <br className="hidden md:block" />
              INTO SOMETHING <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">REMARKABLE</span>
            </h2>

            <p className="text-gray-400 text-base md:text-xl leading-relaxed mb-8 max-w-lg border-l-2 border-amber-500/30 pl-6">
              Room 254 isn't just a venue; it's a movement. We bring rhythm-driven, culture-focused music to smaller cities hungry for something real.
            </p>

            <Link to="/about" className="group inline-flex items-center gap-4 px-6 py-3 border border-white/20 hover:border-amber-500 transition-all duration-300">
              <span className="font-bold uppercase tracking-widest text-xs group-hover:text-amber-500 transition-colors">Read Our Story</span>
              <ArrowRight size={16} className="group-hover:text-amber-500 transition-colors" />
            </Link>
          </motion.div>

          <div className="relative h-[600px] w-full hidden md:block group cursor-pointer">
            {/* Base Layer - Crowd (The "Soul") */}
            <motion.div
              className="absolute top-0 right-0 w-3/4 h-3/4 z-0 grayscale transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100 opacity-60"
              whileHover={{ scale: 1.02 }}
            >
              <OptimizedImage
                src="/images/_DSC9905.jpg"
                alt="Room 254 Authentic Crowd"
                className="w-full h-full object-cover rounded-sm"
              />
            </motion.div>

            {/* Accent Layer - The Trio (The "Face") */}
            <ThreeDTiltCard intensity={15} className="absolute top-20 left-10 w-2/3 h-[400px] z-10 transition-all duration-700 ease-in-out group-hover:opacity-10 group-hover:blur-sm">
              <div className="w-full h-full border-4 border-black shadow-2xl overflow-hidden relative group">
                <OptimizedImage
                  src="/images/_DSC0367.jpg"
                  alt="Live Event Energy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-amber-500/20 mix-blend-overlay" />
              </div>
            </ThreeDTiltCard>
          </div>

          {/* Mobile View - Simplified Stack */}
          <div className="block md:hidden relative h-[400px]">
            <ThreeDTiltCard intensity={10} className="w-full h-full">
              <div className="w-full h-full rounded-sm overflow-hidden relative border border-white/10">
                <OptimizedImage
                  src="/images/_DSC9928.jpg"
                  alt="Live Event Energy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
              </div>
            </ThreeDTiltCard>
          </div>
        </div>
      </section>

      {/* Event Expertise - Optimized for Mobile Length */}
      <section className="py-20 px-6 bg-brand-black relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-20">
            <h2 className="text-4xl md:text-7xl font-display font-bold uppercase tracking-tighter leading-none mb-4 md:mb-0">
              WHAT <br /><span className="text-gray-500">WE DO</span>
            </h2>
          </div>

          {/* Horizontal Slider on Mobile, Grid on Desktop */}
          <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 snap-x snap-mandatory no-scrollbar -mx-6 px-6 md:mx-0 md:px-0 pb-8 md:pb-0">
            {expertiseItems.map((item, index) => (
              <ExpertiseCard key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>



      {/* Features Grid - Optimized for Mobile */}
      <section className="py-20 md:py-32 bg-brand-black px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 md:mb-20">
            <h3 className="text-4xl md:text-7xl font-display font-bold mb-4 md:mb-6 tracking-tighter uppercase">
              THE <span className="text-amber-500">EXPERIENCE</span>
            </h3>
          </div>

          <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-6 snap-x snap-mandatory no-scrollbar -mx-6 px-6 md:mx-0 md:px-0 pb-8 md:pb-0">
            {[
              { title: 'NEW SOUND', icon: Music, desc: "A curated mix of genres bringing a fresh vibe to the city." },
              { title: 'COMMUNITY', icon: Users, desc: "Creating spaces where people can feel authentic." },
              { title: 'LOCATIONS', icon: MapPin, desc: "Expanding our footprint across the UK's vibrant cities." },
            ].map((item, index) => (
              <div key={index} className="flex-shrink-0 w-[80vw] md:w-auto snap-center h-full">
                <div className="relative h-full p-8 rounded-xl border border-gray-800 bg-brand-dark/50 backdrop-blur-sm group overflow-hidden transition-all duration-500 hover:border-amber-500/50">
                  <item.icon className="absolute -bottom-8 -right-8 w-32 h-32 text-white/5 transition-all" />
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-black border border-gray-800 flex items-center justify-center mb-6">
                      <item.icon className="w-8 h-8 text-gray-400 group-hover:text-amber-500 transition-colors" />
                    </div>
                    <h4 className="text-2xl font-display font-bold mb-4 text-white uppercase">{item.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SIGN UP SECTION - Compact */}
      <section className="py-16 md:py-24 px-6 bg-brand-dark border-t border-white/5 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 text-amber-500 border border-white/10">
            <Mail size={24} />
          </div>
          <h2 className="text-3xl md:text-7xl font-display font-bold uppercase mb-4">
            Don't Miss The Drop
          </h2>
          <p className="text-gray-400 text-sm md:text-xl mb-8 max-w-2xl mx-auto">
            Sign up for priority access and secret location reveals.
          </p>

          <form className="flex flex-col md:flex-row gap-4 justify-center max-w-lg mx-auto">
            <input
              type="email"
              placeholder="ENTER YOUR EMAIL"
              className="bg-white/5 border border-white/10 text-white px-6 py-4 focus:outline-none focus:border-amber-500 transition-all uppercase text-sm"
            />
            <button type="submit" className="bg-amber-500 text-white px-8 py-4 font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
              Join
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;