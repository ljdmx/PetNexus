import React from 'react';

export const TrustBar: React.FC = () => {
    const brands = [
        { name: 'AAHA Accredited', icon: '🏆' },
        { name: 'Pet Insurance Partner', icon: '🛡️' },
        { name: 'Global Pet Care Assoc', icon: '🌐' },
        { name: 'Eco-Pet Certified', icon: '🌿' }
    ];

    return (
        <div style={{ backgroundColor: '#fff', borderTop: '1px solid rgba(0,0,0,0.05)', borderBottom: '1px solid rgba(0,0,0,0.05)', padding: '30px 0' }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', gap: '40px' }}>
                {brands.map(brand => (
                    <div key={brand.name} style={{ display: 'flex', alignItems: 'center', gap: '12px', opacity: 0.6, filter: 'grayscale(100%)' }}>
                        <span style={{ fontSize: '1.5rem' }}>{brand.icon}</span>
                        <span style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--color-brand-primary)' }}>{brand.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};
