'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface AnimateInProps {
    children: React.ReactNode;
    delay?: number;
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
    fullWidth?: boolean;
}

export const AnimateIn: React.FC<AnimateInProps> = ({
    children,
    delay = 0,
    direction = 'up',
    fullWidth = false
}) => {
    const variants = {
        hidden: {
            opacity: 0,
            y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
            x: direction === 'left' ? 30 : direction === 'right' ? -30 : 0,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                duration: 0.8,
                delay,
                ease: [0.16, 1, 0.3, 1] as any
            }
        }
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={variants}
            style={{ width: fullWidth ? '100%' : 'auto' } as any}
        >
            {children}
        </motion.div>
    );
};
