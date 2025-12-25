import React from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import SEO from '../components/SEO';

const TermsOfService: React.FC = () => {
    return (
        <div className="pt-32 pb-20 px-6 min-h-screen bg-black text-gray-300 relative">
            <SEO title="Terms of Service" description="Room 254 Events Terms of Service." />

            {/* Close Button */}
            <Link to="/" className="fixed top-8 right-8 z-50 p-3 bg-white/10 rounded-full text-white hover:bg-white hover:text-black transition-all duration-300">
                <X size={24} />
            </Link>

            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 bg-gradient-to-r from-amber-500 to-amber-700 bg-clip-text text-transparent w-fit">
                    TERMS OF SERVICE
                </h1>
                <p className="text-sm text-gray-500 mb-12 uppercase tracking-widest">Last Updated: December 25, 2025</p>

                <div className="space-y-12 leading-relaxed">
                    <section>
                        <h2 className="text-xl font-bold text-white uppercase tracking-wide mb-4">1. Acceptance of Terms</h2>
                        <p>
                            By accessing the Room 254 Events website or purchasing tickets to our events, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white uppercase tracking-wide mb-4">2. Event Entry</h2>
                        <ul className="list-disc pl-6 space-y-2 marker:text-amber-500">
                            <li>All events are strictly 18+. Valid physical photo ID (Passport or Driving License) is required for entry.</li>
                            <li>Management reserves the right to refuse entry.</li>
                            <li>Last entry times are strictly enforced. Please check your ticket for specific timings.</li>
                            <li>Start times are subject to change.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white uppercase tracking-wide mb-4">3. Ticket Policy</h2>
                        <p>
                            Tickets are non-refundable unless an event is cancelled or rescheduled. Tickets are transferable through our official resale partners. We are not responsible for tickets purchased from unauthorized third-party sources.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white uppercase tracking-wide mb-4">4. Code of Conduct</h2>
                        <p>
                            Room 254 is a space for everyone. We have a zero-tolerance policy for harassment, discrimination, or aggressive behavior. Anyone found violating this policy will be ejected from the venue and banned from future events.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white uppercase tracking-wide mb-4">5. Liability</h2>
                        <p>
                            Room 254 Events Ltd accepts no responsibility for any personal property that is lost, stolen, or damaged at our events. Please look after your belongings.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white uppercase tracking-wide mb-4">6. Changes to Terms</h2>
                        <p>
                            We reserve the right to modify these terms at any time. Continued use of our services constitutes acceptance of the modified terms.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;
