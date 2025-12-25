import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface OptimizedImageProps {
    src: string;
    alt: string;
    className?: string;
    priority?: boolean;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({ src, alt, className = "", priority = false }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(priority);
    const [error, setError] = useState(false);
    const imgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (priority) {
            setIsInView(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            { rootMargin: '2000px' } // Extreme pre-loading
        );

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        // Safety timeout: If image doesn't load in 3 seconds, try to show it anyway
        const safetyTimeout = setTimeout(() => {
            setIsInView(true);
        }, 3000);

        return () => {
            observer.disconnect();
            clearTimeout(safetyTimeout);
        };
    }, [priority]);

    if (error) {
        return (
            <div className={`bg-zinc-900 border border-white/5 flex items-center justify-center p-4 ${className}`}>
                <span className="text-[10px] text-gray-700 uppercase tracking-widest font-bold">Media Unavailable</span>
            </div>
        );
    }

    return (
        <div ref={imgRef} className={`relative overflow-hidden bg-brand-black/50 ${className}`}>
            {isInView && (
                <>
                    <img
                        src={src}
                        alt={alt}
                        onLoad={() => setIsLoaded(true)}
                        onError={() => setError(true)}
                        className={`w-full h-full object-cover transition-opacity duration-1000 will-change-opacity ${isLoaded ? 'opacity-100' : 'opacity-0'
                            }`}
                        loading={priority ? "eager" : "lazy"}
                    />
                    <AnimatePresence>
                        {!isLoaded && !error && (
                            <motion.div
                                initial={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 bg-brand-black/50 backdrop-blur-sm animate-pulse"
                            />
                        )}
                    </AnimatePresence>
                </>
            )}
        </div>
    );
};

export default OptimizedImage;
