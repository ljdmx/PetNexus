'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PawPrint } from 'lucide-react';
import { Button } from '../ui/Button';
import styles from './Navbar.module.css';

export const Navbar: React.FC = () => {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: '服务项目', href: '/services' },
        { name: '宠物档案', href: '/archive' },
        { name: '养护百科', href: '/knowledge' },
        { name: '关于我们', href: '/about' },
    ];

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
            <div className={`container ${styles.navContainer}`}>
                <Link href="/" className={styles.logo}>
                    <PawPrint size={32} strokeWidth={2.5} className={styles.logoIcon} />
                    <span>PetNexus</span>
                </Link>

                <div className={styles.links}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`${styles.link} ${pathname === link.href ? styles.active : ''}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link href="/#booking">
                        <Button variant="primary">立即预约</Button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};
