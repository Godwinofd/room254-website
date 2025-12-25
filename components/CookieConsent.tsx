import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cookie } from 'lucide-react';
import { Link } from 'react-router-dom';

const CookieConsent: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already consented
        const consent = localStorage.getItem('room254_cookie_consent');
        if (!consent) {
            // Delay showing the banner slightly for better UX
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('room254_cookie_consent', 'accepted');
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem('room254_cookie_consent', 'declined');
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 max-w-sm w-[calc(100%-3rem)]"
                >
                    <div className="bg-black/90 backdrop-blur-md border border-white/10 p-6 rounded-lg shadow-2xl relative overflow-hidden group">
                        {/* Ambient Glow */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-[40px] pointer-events-none" />

                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-amber-500/10 rounded text-amber-500">
                                    <Cookie size={20} />
                                </div>
                                <h3 className="text-white font-display font-bold uppercase tracking-wide">Privacy Settings</h3>
                            </div>

                            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                                We use cookies to enhance your experience and analyze our traffic. By continuing to visit this site you agree to our use of cookies.
                            </p>

                            <div className="flex gap-3">
                                <button
                                    onClick={handleAccept}
                                    className="flex-1 bg-amber-500 text-black py-3 px-4 font-bold uppercase text-xs tracking-widest hover:bg-white transition-colors rounded-sm"
                                >
                                    Accept
                                </button>
                                <button
                                    onClick={handleDecline}
                                    className="flex-1 bg-transparent border border-white/20 text-white py-3 px-4 font-bold uppercase text-xs tracking-widest hover:bg-white/10 transition-colors rounded-sm"
                                >
                                    Decline
                                </button>
                            </div>

                            <div className="mt-4 text-center">
                                <Link to="/privacy-policy" className="text-xs text-gray-500 hover:text-white underline decoration-gray-700 hover:decoration-white transition-all uppercase tracking-wide">
                                    Read Policy
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CookieConsent;
