import React, { useState, useEffect, Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Instagram, Facebook, Twitter } from 'lucide-react';

import Logo from './components/Logo';
import CookieConsent from './components/CookieConsent';
import LoadingSpinner from './components/LoadingSpinner';
import Home from './pages/Home';

const Events = lazy(() => import('./pages/Events'));
const About = lazy(() => import('./pages/About'));
const Locations = lazy(() => import('./pages/Locations'));
const Contact = lazy(() => import('./pages/Contact'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const CookiePolicy = lazy(() => import('./pages/CookiePolicy'));
const Accessibility = lazy(() => import('./pages/Accessibility'));

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    // Passive listener improves scroll performance by not blocking the main thread
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Events', path: '/events' },
    { name: 'About', path: '/about' },
    { name: 'Locations', path: '/locations' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b will-change-transform ${scrolled
        ? 'bg-black/80 backdrop-blur-md py-4 border-white/10'
        : 'bg-transparent py-6 border-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-white z-50 relative group">
          <Logo className="h-10 w-auto group-hover:text-amber-500 transition-colors duration-300" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className="relative group py-2"
              >
                <span className={`text-sm font-bold uppercase tracking-widest transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-400 hover:text-amber-500'
                  }`}>
                  {item.name}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className={`absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${isActive ? 'hidden' : 'block'}`} />
              </Link>
            );
          })}

          <Link
            to="/events"
            className="ml-4 px-6 py-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all duration-300 rounded-sm shadow-lg shadow-orange-500/20"
          >
            Tickets
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white z-[60] relative focus:outline-none w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
          aria-label="Toggle Menu"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={24} className="text-amber-500" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center md:hidden"
            >
              {/* Background Accents */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 blur-[150px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-accent/5 blur-[150px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

              <div className="flex flex-col gap-6 text-center w-full px-12 z-10">
                <div className="mb-8">
                  <Logo className="h-16 w-auto mx-auto text-amber-500" />
                  <div className="h-px w-24 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mx-auto mt-4" />
                </div>

                {[{ name: 'Home', path: '/' }, ...navLinks].map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ delay: index * 0.05 + 0.2, duration: 0.4 }}
                  >
                    <Link
                      to={item.path}
                      className={`relative group inline-block text-4xl font-display font-bold uppercase transition-colors tracking-tighter ${location.pathname === item.path ? 'text-amber-500' : 'text-white'
                        }`}
                    >
                      {item.name}
                      {location.pathname === item.path && (
                        <motion.div
                          layoutId="mobile-indicator"
                          className="absolute -left-6 top-1/2 -translate-y-1/2 w-2 h-2 bg-amber-500 rounded-full"
                        />
                      )}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  className="mt-12"
                >
                  <Link
                    to="/events"
                    className="block px-10 py-5 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold uppercase tracking-[0.2em] text-sm shadow-2xl shadow-orange-500/20 active:scale-95 transition-transform"
                  >
                    Explore Events
                  </Link>
                </motion.div>

                <div className="mt-16 flex justify-center gap-8 opacity-50">
                  {[Instagram, Facebook, Twitter].map((Icon, i) => (
                    <a key={i} href="#" className="text-white hover:text-amber-500 transition-colors">
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-12 px-6 border-t border-gray-900 relative overflow-hidden">
      {/* Decorative Background Element - GPU Accelerated */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-amber-500/5 blur-[100px] rounded-full pointer-events-none transform-gpu" />

      <div className="max-w-7xl mx-auto relative z-10">


        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">
          {/* Brand Column */}
          <div className="md:col-span-4 flex flex-col items-start">
            <Logo className="h-24 w-auto mb-6 text-white" />
            <p className="text-gray-500 leading-relaxed mb-6 max-w-sm">
              Redefining nightlife culture. Room 254 creates immersive, rhythm-driven experiences in unique spaces across the UK.
            </p>
          </div>

          {/* Sitemaps */}
          <div className="md:col-span-2 md:col-start-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-amber-500 mb-6">Explore</h4>
            <ul className="space-y-4">
              {['Events', 'About', 'Locations', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase()}`} className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block uppercase text-sm tracking-wide">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-widest text-amber-500 mb-6">Legal</h4>
            <ul className="space-y-4">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block uppercase text-sm tracking-wide">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block uppercase text-sm tracking-wide">
                Terms of Service
              </Link>
              <Link to="/cookie-policy" className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block uppercase text-sm tracking-wide">
                Cookie Policy
              </Link>
              <Link to="/accessibility" className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block uppercase text-sm tracking-wide">
                Accessibility
              </Link>
            </ul>
          </div>

          {/* Socials & Contact */}
          <div className="md:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-widest text-amber-500 mb-6">Connect</h4>
            <p className="text-gray-400 mb-2">hello@room254.events</p>
            <p className="text-gray-400 mb-6">+44 (0) 1865 123 456</p>

            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 border border-gray-800 rounded-full flex items-center justify-center hover:bg-amber-500 hover:border-amber-500 hover:text-white transition-all duration-300 text-gray-400">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-900 text-xs text-gray-600 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} ROOM 254 EVENTS LTD.</p>
          <p className="mt-2 md:mt-0">DESIGNED FOR THE CULTURE.</p>
        </div>

        {/* Big Watermark */}
        <div className="absolute -bottom-24 -right-10 pointer-events-none opacity-5 select-none overflow-hidden">
          <span className="text-[12rem] md:text-[20rem] font-display font-bold leading-none text-white whitespace-nowrap transform-gpu">
            254
          </span>
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-brand-black text-white font-sans selection:bg-brand-accent selection:text-white">
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/events" element={<Events />} />
                <Route path="/about" element={<About />} />
                <Route path="/locations" element={<Locations />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route path="/cookie-policy" element={<CookiePolicy />} />
                <Route path="/accessibility" element={<Accessibility />} />
              </Routes>
            </Suspense>
          </AnimatePresence>
        </main>
        <Footer />
        <CookieConsent />
      </div>
    </Router>
  );
};

export default App;