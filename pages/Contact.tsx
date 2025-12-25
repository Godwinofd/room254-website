import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, MapPin, Instagram, MessageSquare } from 'lucide-react';
import SEO from '../components/SEO';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-amber-500 selection:text-white pt-32 pb-20 px-6 relative overflow-hidden flex flex-col justify-center">
      <SEO
        title="Contact"
        description="Direct line to Room 254. Bookings, press, and general inquiries."
      />

      {/* Abstract Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left: The "Direct Line" Context */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-8xl font-display font-bold uppercase leading-[0.9] mb-12 tracking-tighter">
              Start The <br />
              <span className="text-gray-700">Conversation</span>
            </h1>

            <div className="space-y-12 max-w-sm">
              <div className="group">
                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 group-hover:text-amber-500 transition-colors">Bookings & Talent</h3>
                <a href="mailto:bookings@room254.events" className="text-2xl md:text-3xl font-display font-bold text-white hover:text-amber-500 transition-colors flex items-center gap-2">
                  bookings@room254.events <ArrowUpRight size={18} className="opacity-50" />
                </a>
              </div>

              <div className="group">
                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 group-hover:text-amber-500 transition-colors">Press & Media</h3>
                <a href="mailto:press@room254.events" className="text-2xl md:text-3xl font-display font-bold text-white hover:text-amber-500 transition-colors flex items-center gap-2">
                  press@room254.events <ArrowUpRight size={18} className="opacity-50" />
                </a>
              </div>

              <div className="group">
                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 group-hover:text-amber-500 transition-colors">HQ Location</h3>
                <p className="text-xl text-gray-300">
                  Magdalen Rd, Oxford, UK
                </p>
              </div>
            </div>

            <div className="mt-20 flex gap-6">
              <a href="#" className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all duration-300">
                <MessageSquare size={20} />
              </a>
            </div>
          </motion.div>

          {/* Right: Minimal Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-sm backdrop-blur-sm"
          >
            <h2 className="text-xl font-display font-bold uppercase mb-8 flex items-center gap-3">
              <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
              Direct Message
            </h2>

            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-6">
                <div className="group relative">
                  <input
                    type="text"
                    required
                    className="peer w-full bg-transparent border-b border-gray-700 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors placeholder-transparent"
                    placeholder="Name"
                    id="name"
                  />
                  <label htmlFor="name" className="absolute left-0 top-3 text-gray-500 text-sm peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-amber-500 transition-all cursor-text font-bold uppercase tracking-wide">
                    Name
                  </label>
                </div>
                <div className="group relative">
                  <input
                    type="email"
                    required
                    className="peer w-full bg-transparent border-b border-gray-700 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors placeholder-transparent"
                    placeholder="Email"
                    id="email"
                  />
                  <label htmlFor="email" className="absolute left-0 top-3 text-gray-500 text-sm peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-amber-500 transition-all cursor-text font-bold uppercase tracking-wide">
                    Email
                  </label>
                </div>
              </div>

              <div className="group relative">
                <select className="w-full bg-transparent border-b border-gray-700 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors appearance-none cursor-pointer uppercase text-sm tracking-wide font-bold">
                  <option className="bg-black text-gray-500">Select Topic</option>
                  <option className="bg-black">Event Inquiry</option>
                  <option className="bg-black">Lost Property</option>
                  <option className="bg-black">Artist Submission</option>
                  <option className="bg-black">Private Hire</option>
                </select>
              </div>

              <div className="group relative">
                <textarea
                  rows={4}
                  className="peer w-full bg-transparent border-b border-gray-700 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors placeholder-transparent resize-none"
                  placeholder="Message"
                  id="message"
                />
                <label htmlFor="message" className="absolute left-0 top-3 text-gray-500 text-sm peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-amber-500 transition-all cursor-text font-bold uppercase tracking-wide">
                  Message
                </label>
              </div>

              <button className="w-full bg-white text-black py-4 font-bold uppercase tracking-widest hover:bg-amber-500 hover:text-white transition-all duration-300">
                GET IN TOUCH
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;