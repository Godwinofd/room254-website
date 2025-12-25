import React from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import SEO from '../components/SEO';

const Accessibility: React.FC = () => {
    return (
        <div className="pt-32 pb-20 px-6 min-h-screen bg-black text-gray-300 relative">
            <SEO title="Accessibility" description="Room 254 Events Accessibility Statement." />

            {/* Close Button */}
            <Link to="/" className="fixed top-8 right-8 z-50 p-3 bg-white/10 rounded-full text-white hover:bg-white hover:text-black transition-all duration-300">
                <X size={24} />
            </Link>

            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 bg-gradient-to-r from-amber-500 to-amber-700 bg-clip-text text-transparent w-fit">
                    ACCESSIBILITY
                </h1>
                <p className="text-sm text-gray-500 mb-12 uppercase tracking-widest">Commitment to Inclusivity</p>

                <div className="space-y-12 leading-relaxed">
                    <section>
                        <h2 className="text-xl font-bold text-white uppercase tracking-wide mb-4">Our Mission</h2>
                        <p>
                            Room 254 is dedicated to creating inclusive events where everyone feels welcome and safe. We strive to ensure our events and our digital platforms are accessible to individuals of all abilities.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white uppercase tracking-wide mb-4">Venue Accessibility</h2>
                        <p className="mb-4">We work closely with our venue partners to ensure accessibility standards are met. This includes:</p>
                        <ul className="list-disc pl-6 space-y-2 marker:text-amber-500">
                            <li>Wheelchair accessible entry and viewing areas.</li>
                            <li>Accessible restrooms.</li>
                            <li>Free carer tickets for attendees who require assistance.</li>
                        </ul>
                        <p className="mt-4">
                            For specific venue information, please check the event page or contact us directly.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white uppercase tracking-wide mb-4">Digital Accessibility</h2>
                        <p>
                            We are actively working to improve the accessibility of our website. We aim to adhere to WCAG 2.1 guidelines to ensure our content is accessible to screen readers and other assistive technologies.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white uppercase tracking-wide mb-4">Contact Us</h2>
                        <p>
                            If you have specific accessibility requirements or feedback, please email us at <a href="mailto:hello@room254.events" className="text-amber-500 hover:text-white transition-colors">hello@room254.events</a> so we can assist you.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Accessibility;
