import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import ThreeDTiltCard from '../components/ThreeDTiltCard';
import { Music, Speaker, Users, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Counter = ({ from, to, duration = 2 }: { from: number; to: number; duration?: number }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * (to - from) + from));
        if (progress < 1) animationFrame = requestAnimationFrame(step);
      };
      animationFrame = requestAnimationFrame(step);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, from, to, duration]);

  return <span ref={nodeRef}>{count}</span>;
};

const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroTextY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const teamMembers = [
    { name: "THE FOUNDER", role: "Creative Director", img: "/images/_DSC0219.jpg" },
    { name: "HEAD OF VIBES", role: "Experience Manager", img: "/images/_DSC0248.jpg" },
    { name: "MUSIC CURATOR", role: "Sound Architect", img: "/images/ec.png" },
  ];

  const values = [
    { icon: Speaker, title: "AUTHENTIC SOUND", desc: "From the deep logs of Amapiano to the high energy of Afrobeats and Bashment." },
    { icon: Users, title: "SAFE SPACES", desc: "A sanctuary for culture, expression, and uninhibited movement." },
    { icon: Globe, title: "CULTURAL BRIDGE", desc: "Connecting the diaspora through the universal language of rhythm." },
  ];

  return (
    <div ref={containerRef} className="w-full bg-brand-black text-white overflow-hidden">
      <SEO
        title="Our Story"
        description="Room 254: Bringing the pulse of Afrobeats, Amapiano, and Bashment to Oxford. Discover our roots."
      />

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-brand-black z-10" />
          <img
            src="/images/_DSC9960.jpg"
            alt="Room 254 Vibe"
            className="w-full h-full object-cover opacity-50"
          />
        </div>

        <motion.div
          style={{ y: heroTextY, opacity: heroOpacity }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-5xl md:text-[8rem] font-display font-bold leading-none tracking-tighter text-white uppercase drop-shadow-2xl">
            ROOTS. <br /> RHYTHM. <br /> <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">SOUL.</span>
          </h1>
          <p className="mt-6 md:mt-8 text-sm md:text-xl text-amber-500 uppercase tracking-[0.2em] font-bold border-y border-amber-500/30 py-4 inline-block">
            The Heartbeat of the Culture
          </p>
        </motion.div>
      </section>

      {/* The Origin Story */}
      <section className="py-20 md:py-32 px-6 bg-brand-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 md:mb-8 uppercase">
              SHIFTING THE <br className="hidden md:block" /> <span className="text-amber-500">NARRATIVE.</span>
            </h2>
            <div className="space-y-6 text-gray-400 text-base md:text-lg leading-relaxed border-l-2 border-amber-500/20 pl-6">
              <p>
                Room 254 wasn't just built; it was felt. We noticed a silence in the city—a lack of spaces that truly celebrated the depth and energy of African and Caribbean music culture.
              </p>
              <p>
                We wanted to bring the heat of a Lagos night, the soul of a Kingston dancehall, and the hypnotic dust of an Amapiano session right here to Oxford.
              </p>
              <p>
                What started as a small gathering has evolved into a movement. We don't just throw events; we curate experiences where heritage meets hedonism.
              </p>
            </div>
          </motion.div>

          <ThreeDTiltCard intensity={10} className="w-full h-[400px] md:h-[600px]">
            <div className="relative w-full h-full rounded-sm overflow-hidden border border-white/10 shadow-2xl group">
              <img src="/images/_DSC9950.jpg" alt="The DJ" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-amber-500/10 mix-blend-overlay group-hover:bg-transparent transition-all duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black to-transparent">
                <p className="text-white font-display font-bold text-2xl uppercase tracking-widest">For The Culture</p>
              </div>
            </div>
          </ThreeDTiltCard>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-brand-dark border-y border-white/5 relative overflow-hidden">
        {/* Background Texture */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-amber-500 rounded-full blur-[150px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center divide-x divide-white/10">
            {[
              { label: "Vibes", value: 100, suffix: "%" },
              { label: "Events", value: 8, suffix: "" },
              { label: "Family", value: 1251, suffix: "+" },
              { label: "Energy", value: 10, suffix: "/10" },
            ].map((stat, i) => (
              <div key={i} className="pl-4">
                <div className="text-3xl md:text-7xl font-display font-bold text-white">
                  <Counter from={0} to={stat.value} duration={2.5} />
                  <span className="text-amber-500">{stat.suffix}</span>
                </div>
                <div className="text-[10px] md:text-sm text-gray-400 uppercase tracking-widest font-bold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DNA Values */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-6xl font-display font-bold uppercase mb-12 text-center">Our DNA</h2>
          <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-6 snap-x snap-mandatory no-scrollbar -mx-6 px-6 md:mx-0 md:px-0 pb-6 md:pb-0">
            {values.map((val, i) => (
              <div key={i} className="flex-shrink-0 w-[80vw] md:w-auto snap-center p-8 bg-zinc-900/50 border border-white/10 rounded-sm hover:border-amber-500/50 transition-colors duration-300">
                <val.icon className="text-amber-500 mb-6" size={32} />
                <h3 className="text-xl md:text-2xl font-display font-bold mb-4 uppercase">{val.title}</h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Visionaries */}
      <section className="py-20 bg-brand-dark px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-6xl font-display font-bold uppercase mb-12 flex items-center gap-4">
            The Visionaries <div className="h-px flex-1 bg-white/10"></div>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Group Image Feature */}
            <ThreeDTiltCard intensity={15} className="w-full h-[500px] md:h-[700px]">
              <div className="relative w-full h-full rounded-sm overflow-hidden border-4 border-white/5 shadow-2xl group">
                <img
                  src="/images/_DSC9928.jpg"
                  alt="The Room 254 Team"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                />
                {/* Neon Overlay Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-purple-500/20 mix-blend-overlay opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute bottom-6 left-6 right-6 border-t border-white/20 pt-4">

                </div>
              </div>
            </ThreeDTiltCard>

            {/* Text Content */}
            <div>
              <h3 className="text-4xl md:text-7xl font-display font-bold uppercase mb-6 leading-none">
                The Powerhouse <br /> <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">Trio.</span>
              </h3>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed border-l-2 border-amber-500/30 pl-6">
                United by a shared obsession with high-fidelity sound and authentic cultural expression. We aren't just organizers; we are lifelong students of the rhythm.
              </p>

              <div className="space-y-8">
                {[
                  { title: "THE FOUNDER", role: "Creative Director" },
                  { title: "THE VIBE", role: "Experience Manager" },
                  { title: "THE SOUND", role: "Musical Architect" }
                ].map((item, i) => (
                  <div key={i} className="group flex items-center gap-6">
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-amber-500 transition-colors">
                      <span className="text-amber-500 font-bold text-sm">0{i + 1}</span>
                    </div>
                    <div>
                      <h4 className="text-2xl font-display font-bold text-white uppercase leading-none mb-1">{item.title}</h4>
                      <p className="text-xs text-gray-500 uppercase tracking-widest font-bold group-hover:text-amber-500 transition-colors">{item.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 px-6 text-center relative">
        <div className="absolute inset-0 bg-[url('/images/_DSC9955.jpg')] bg-cover bg-center opacity-10 pointer-events-none" />
        <div className="relative z-10">
          <h2 className="text-4xl md:text-8xl font-display font-bold mb-8 uppercase text-white">
            Feel The <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">Energy?</span>
          </h2>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Link to="/events" className="inline-flex items-center gap-4 px-10 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold uppercase tracking-widest hover:brightness-110 transition-all shadow-lg shadow-orange-500/20">
              View Events <ArrowRight />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-4 px-10 py-4 border border-white/20 text-white font-bold uppercase tracking-widest hover:bg-white/10 transition-all">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;