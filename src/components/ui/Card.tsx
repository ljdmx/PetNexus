import React from 'react';
import styles from './Card.module.css';

interface CardProps {
    title: string;
    description: string;
    icon?: React.ReactNode;
    image?: string;
    className?: string;
}

export const Card: React.FC<CardProps> = ({ title, description, icon, image, className = '' }) => {
    return (
        <div className={`${styles.card} ${className}`}>
            {image && (
                <div className={styles.imageContainer}>
                    <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
            )}
            {icon && <div className={styles.icon}>{icon}</div>}
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.content}>{description}</p>
        </div>
    );
};
