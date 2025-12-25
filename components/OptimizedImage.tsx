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
    const imgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (priority) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            { rootMargin: '200px' } // Start loading 200px before it enters viewport
        );

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => observer.disconnect();
    }, [priority]);

    return (
        <div ref={imgRef} className={`relative overflow-hidden bg-white/5 ${className}`}>
            {isInView && (
                <>
                    <img
                        src={src}
                        alt={alt}
                        onLoad={() => setIsLoaded(true)}
                        className={`w-full h-full object-cover transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'
                            }`}
                        loading={priority ? "eager" : "lazy"}
                    />
                    <AnimatePresence>
                        {!isLoaded && (
                            <motion.div
                                initial={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 bg-white/5 animate-pulse"
                            />
                        )}
                    </AnimatePresence>
                </>
            )}
        </div>
    );
};

export default OptimizedImage;
