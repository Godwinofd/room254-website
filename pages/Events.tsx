import React, { useState } from 'react';
import { motion } from 'framer-motion';
import OptimizedImage from '../components/OptimizedImage';
import ThreeDTiltCard from '../components/ThreeDTiltCard';
import { ArrowRight, Lock, Mail, Instagram, Clock, MapPin } from 'lucide-react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

const Events: React.FC = () => {
  const [email, setEmail] = useState('');

  // Curated Archive Images
  const archiveImages = [
    { src: "/images/_DSC0296.jpg", alt: "Club Vibes", span: "col-span-1 md:col-span-2 row-span-2" },
    { src: "/images/_DSC9950.jpg", alt: "Live Performance", span: "col-span-1 row-span-1" },
    { src: "/images/_DSC0351.jpg", alt: "The Crowd", span: "col-span-1 row-span-1" },
    { src: "/images/_DSC0307.jpg", alt: "Culture", span: "col-span-1 md:col-span-2 row-span-1" },
    { src: "/images/_DSC0272.jpg", alt: "Venue Atmosphere", span: "col-span-1 row-span-1" }, // Fixed missing image reference
    { src: "/images/_DSC9960.jpg", alt: "Intimate Sessions", span: "col-span-1 row-span-1" },
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-amber-500 selection:text-white">
      <SEO
        title="Events"
        description="The next chapter of Room 254 is loading. Sign up for priority access to our upcoming secret location events."
      />

      {/* Cinematic Hero - "The Calm Before" */}
      <section className="relative h-[80vh] flex flex-col items-center justify-center overflow-hidden">
        {/* Background - Reusing existing video for atmosphere */}
        <div className="absolute inset-0 z-0">
          <video
            src="/videos/newhero.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-40 grayscale blur-sm scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black" />
          {/* Grid Overlay for Technical Feel */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6 text-amber-500 font-bold tracking-[0.3em] text-xs md:text-sm uppercase">
              <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
              System Status: Standby
              <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
            </div>

            <h1 className="text-6xl md:text-9xl font-display font-bold uppercase tracking-tighter mb-8 leading-[0.9]">
              Next Chapter <br className="hidden md:block" />
              <span className="text-gray-600">Loading...</span>
            </h1>

            <p className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
              We are currently curating the next season of experiences. <br />
              Strictly culture.
            </p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-12 flex flex-col items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-600"
        >
          <span>Visual Evidence</span>
          <div className="w-px h-12 bg-gradient-to-b from-amber-500 to-transparent" />
        </motion.div>
      </section>


      {/* Priority Access Section (The "Pivot") */}
      <section className="py-20 px-6 border-t border-white/10 relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="bg-brand-dark/50 border border-white/10 rounded-2xl p-8 md:p-16 backdrop-blur-md relative overflow-hidden group">
            {/* Ambient Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-amber-500/20 transition-all duration-700" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center mb-6 border border-amber-500/20 text-amber-500">
                  <Lock size={24} />
                </div>
                <h2 className="text-3xl md:text-5xl font-display font-bold uppercase mb-4">
                  The Guestlist
                </h2>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  Our next events will be limited capacity. Sign up to receive the ticket link 24 hours before public release.
                </p>

                <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="flex flex-col md:flex-row gap-4">
                    <input
                      type="email"
                      placeholder="ENTER EMAIL ADDRESS"
                      className="bg-black/50 border border-white/10 text-white px-6 py-4 w-full focus:outline-none focus:border-amber-500 transition-colors uppercase text-sm tracking-wide rounded-sm"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <button className="bg-amber-500 text-white px-8 py-4 font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all rounded-sm whitespace-nowrap">
                      Request Access
                    </button>
                  </div>
                  <p className="text-xs text-gray-600 uppercase tracking-widest flex items-center gap-2">
                    <Lock size={10} />
                    Secure Encrypted List
                  </p>
                </form>
              </div>

              {/* Visual Counter / Art */}
              <div className="border-l border-white/5 pl-0 md:pl-12 flex flex-col justify-center items-center md:items-start text-center md:text-left">
                <span className="text-7xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-800 opacity-50">
                  NEW SEASON
                </span>
                <span className="text-amber-500 font-bold uppercase tracking-[0.5em] text-sm mt-2">
                  Coming Soon
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Archive ("Visual Evidence") */}
      <section className="py-20 px-6 bg-brand-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <h3 className="text-5xl md:text-6xl font-display font-bold uppercase tracking-tighter text-white">
              PAST <span className="text-gray-600">OPERATIONS</span>
            </h3>
            <p className="text-gray-500 text-sm uppercase tracking-widest mt-4 md:mt-0">
              / Selected Archives 2024-2025
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-4 h-[120vh] md:h-[800px]">
            {archiveImages.map((img, i) => (
              <div key={i} className={`relative group overflow-hidden rounded-sm ${img.span}`}>
                <ThreeDTiltCard intensity={10} className="w-full h-full">
                  <div className="w-full h-full relative overflow-hidden border border-white/5 group-hover:border-amber-500/50 transition-colors duration-500">
                    <OptimizedImage
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-black/80 backdrop-blur px-6 py-3 border border-amber-500/30 rounded-full">
                        <span className="text-amber-500 font-bold uppercase tracking-widest text-xs">
                          {img.alt}
                        </span>
                      </div>
                    </div>
                  </div>
                </ThreeDTiltCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Simple */}
      <section className="py-20 border-t border-white/5 text-center">
        <h4 className="text-gray-500 font-display font-bold uppercase text-xl mb-8">Stay Connected</h4>
        <div className="flex justify-center gap-8">
          <a href="#" className="flex items-center gap-2 text-white hover:text-amber-500 transition-colors uppercase font-bold tracking-widest text-sm group">
            <Instagram size={18} className="group-hover:scale-110 transition-transform" />
            <span>Instagram</span>
          </a>
          <a href="#" className="flex items-center gap-2 text-white hover:text-amber-500 transition-colors uppercase font-bold tracking-widest text-sm group">
            <Mail size={18} className="group-hover:scale-110 transition-transform" />
            <span>Email Us</span>
          </a>
        </div>
      </section>

    </div>
  );
};

export default Events;