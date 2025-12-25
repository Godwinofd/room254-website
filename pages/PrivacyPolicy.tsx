import React from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import SEO from '../components/SEO';

const PrivacyPolicy: React.FC = () => {
    return (
        <div className="pt-32 pb-20 px-6 min-h-screen bg-black text-gray-300 relative">
            <SEO title="Privacy Policy" description="Room 254 Events Privacy Policy." />

            {/* Close Button */}
            <Link to="/" className="fixed top-8 right-8 z-50 p-3 bg-white/10 rounded-full text-white hover:bg-white hover:text-black transition-all duration-300">
                <X size={24} />
            </Link>

            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 bg-gradient-to-r from-amber-500 to-amber-700 bg-clip-text text-transparent w-fit">
                    PRIVACY POLICY
                </h1>
                <p className="text-sm text-gray-500 mb-12 uppercase tracking-widest">Last Updated: December 25, 2025</p>

                <div className="space-y-12 leading-relaxed">
                    <section>
                        <h2 className="text-xl font-bold text-white uppercase tracking-wide mb-4">1. Introduction</h2>
                        <p>
                            Room 254 Events Ltd ("we", "our", "us") is committed to protecting your privacy. This policy details how we collect, use, and safeguard your personal information when you visit our website or attend our events. By accessing our services, you consent to the practices described in this policy.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white uppercase tracking-wide mb-4">2. Data Collection</h2>
                        <p className="mb-4">We collect information that you strictly provide to us directly, such as when you:</p>
                        <ul className="list-disc pl-6 space-y-2 marker:text-amber-500">
                            <li>Sign up for our newsletter or guestlist.</li>
                            <li>Purchase tickets through our third-party partners.</li>
                            <li>Contact us via email or our contact form.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white uppercase tracking-wide mb-4">3. Use of Information</h2>
                        <p>
                            We use your data strictly to deliver the services you have requested. This includes sending you event updates, processing ticket orders, and responding to your inquiries. We do not sell your personal data to third parties.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white uppercase tracking-wide mb-4">4. Photography & Filming</h2>
                        <p>
                            Please be aware that photography and filming take place at all Room 254 events. By entering our venues, you consent to being photographed and filmed. This content may be used for marketing and promotional purposes on our website and social media channels. If you have specific concerns, please contact our team on-site.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white uppercase tracking-wide mb-4">5. Cookies</h2>
                        <p>
                            Our website uses cookies to improve user experience and analyze site traffic. You can choose to accept or decline cookies through our cookie consent banner. Essential cookies may be required for the site to function correctly.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white uppercase tracking-wide mb-4">6. Contact Us</h2>
                        <p>
                            If you have any questions regarding this policy, please contact us at <a href="mailto:hello@room254.events" className="text-amber-500 hover:text-white transition-colors">hello@room254.events</a>.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
