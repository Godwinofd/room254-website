import React from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import SEO from '../components/SEO';

const CookiePolicy: React.FC = () => {
    return (
        <div className="pt-32 pb-20 px-6 min-h-screen bg-black text-gray-300 relative">
            <SEO title="Cookie Policy" description="Room 254 Events Cookie Policy." />

            {/* Close Button */}
            <Link to="/" className="fixed top-8 right-8 z-50 p-3 bg-white/10 rounded-full text-white hover:bg-white hover:text-black transition-all duration-300">
                <X size={24} />
            </Link>

            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 bg-gradient-to-r from-amber-500 to-amber-700 bg-clip-text text-transparent w-fit">
                    COOKIE POLICY
                </h1>
                <p className="text-sm text-gray-500 mb-12 uppercase tracking-widest">Last Updated: December 25, 2025</p>

                <div className="space-y-12 leading-relaxed">
                    <section>
                        <h2 className="text-xl font-bold text-white uppercase tracking-wide mb-4">1. What Are Cookies?</h2>
                        <p>
                            Cookies are small text files that are stored on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to the owners of the site.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white uppercase tracking-wide mb-4">2. How We Use Cookies</h2>
                        <p className="mb-4">We use cookies for the following purposes:</p>
                        <ul className="list-disc pl-6 space-y-2 marker:text-amber-500">
                            <li><strong>Essential Cookies:</strong> These are necessary for the website to function properly. Without these, certain features (like ticket purchasing) may not be available.</li>
                            <li><strong>Analytics Cookies:</strong> We use these to understand how visitors interact with our website, helping us improve the user experience.</li>
                            <li><strong>Marketing Cookies:</strong> These allows us to deliver relevant advertisements and track the effectiveness of our campaigns.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white uppercase tracking-wide mb-4">3. Managing Preferences</h2>
                        <p>
                            You can control and manage cookies through your browser settings. You can also accept or decline non-essential cookies via our consent banner when you first visit the site.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default CookiePolicy;
