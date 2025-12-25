import React from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner: React.FC = () => {
    return (
        <div className="flex items-center justify-center w-full h-full min-h-[50vh]">
            <div className="relative w-16 h-16">
                <motion.div
                    className="absolute inset-0 border-4 border-amber-500/20 rounded-full"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute inset-0 border-t-4 border-amber-500 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
            </div>
        </div>
    );
};

export default LoadingSpinner;
