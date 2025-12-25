import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Lock, Signal, ArrowRight, Crosshair } from 'lucide-react';
import ThreeDTiltCard from '../components/ThreeDTiltCard';
import SEO from '../components/SEO';

const Locations: React.FC = () => {
  const expansionCities = [
    { city: "Reading", status: "SIGNAL INCOMING", eta: "Q2 2025" },
    { city: "Birmingham", status: "LOCKED", eta: "Q3 2025" },
    { city: "Bristol", status: "LOCKED", eta: "Q4 2025" },
    { city: "Northampton", status: "PLANNED", eta: "2026" },
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-amber-500 selection:text-white pt-32 pb-20 px-6 relative overflow-hidden">
      <SEO
        title="Locations"
        description="Oxford is our HQ. The expansion has begun. See where Room 254 is heading next."
      />

      {/* Background Grid - Technical Feel */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20 border-b border-gray-800 pb-10 flex flex-col md:flex-row justify-between items-end gap-8"
        >
          <div>
            <div className="flex items-center gap-3 mb-4 text-amber-500 font-bold tracking-[0.3em] text-xs uppercase animate-pulse">
              <Crosshair size={14} />
              Operational Zones
            </div>
            <h1 className="text-5xl md:text-8xl font-display font-bold uppercase leading-none">
              Our <span className="text-gray-700">Footprint</span>
            </h1>
          </div>
        </motion.div>


        {/* The Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Main Feature: Oxford (Active) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <ThreeDTiltCard intensity={10} className="w-full">
                <div className="relative h-[600px] w-full rounded-sm border-2 border-amber-500/50 overflow-hidden group">
                  <img
                    src="/images/_DSC9935.jpg"
                    alt="Oxford HQ"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />

                  {/* Active Beacon */}
                  <div className="absolute top-8 left-8 flex items-center gap-3 bg-black/50 backdrop-blur-md border border-amber-500/30 px-4 py-2 rounded-full">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                    <div className="flex items-center gap-2 mb-2 text-gray-400 font-mono text-xs uppercase tracking-widest">
                      <MapPin size={14} />
                      <span>Coordinates: 51.7520° N, 1.2577° W</span>
                    </div>
                    <h2 className="text-6xl md:text-7xl font-display font-bold text-white mb-6 uppercase">
                      Oxford <span className="text-amber-500 text-2xl align-top">HQ</span>
                    </h2>
                    <p className="text-gray-300 text-lg max-w-md border-l-2 border-amber-500 pl-6 mb-8">
                      Where it all started. The testing ground for new frequencies and the heartbeat of our movement.
                    </p>

                    <a href="#/events" className="inline-flex items-center gap-3 bg-amber-500 text-black px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-white transition-colors">
                      View Local Events <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </ThreeDTiltCard>
            </motion.div>
          </div>

          {/* Side Column: Expansion Targets */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <h3 className="text-xl font-display font-bold uppercase text-gray-500 mb-2">Expansion Targets</h3>

            {expansionCities.map((item, idx) => (
              <motion.div
                key={item.city}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + (idx * 0.1) }}
                className="relative p-8 border border-white/10 bg-white/5 overflow-hidden group hover:border-white/20 transition-all duration-300"
              >
                {/* Pattern Overlay */}
                <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

                <div className="flex justify-between items-start mb-6 relative z-10">
                  <h4 className="text-4xl font-display font-bold text-gray-300 group-hover:text-white transition-colors uppercase">
                    {item.city}
                  </h4>
                  <div className="bg-black/40 border border-white/10 p-2 rounded text-gray-500">
                    <Lock size={16} />
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-gray-500 relative z-10">
                  <div className="flex items-center gap-2">
                    <Signal size={14} className={idx === 0 ? "text-amber-500/50 animate-pulse" : "text-gray-700"} />
                    <span className={idx === 0 ? "text-amber-500/50" : ""}>{item.status}</span>
                  </div>
                  <span>ETA: {item.eta}</span>
                </div>
              </motion.div>
            ))}

            {/* CTA: Request City */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-auto pt-8 border-t border-gray-800 text-center md:text-left"
            >
              <p className="text-gray-400 text-sm mb-4">Don't see your city? We show up where the demand is.</p>
              <button className="text-white hover:text-amber-500 font-bold uppercase tracking-widest text-xs border-b border-amber-500 pb-1 transition-colors">
                Submit Location Request
              </button>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Locations;