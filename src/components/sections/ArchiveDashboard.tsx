'use client';

import React from 'react';
import {
    History,
    Activity,
    HeartPulse,
    Calendar as CalendarIcon,
    Stethoscope,
    Bath,
    GraduationCap,
    ChevronRight,
    TrendingUp,
    FileText
} from 'lucide-react';
import { AnimateIn } from '../ui/AnimateIn';
import { PetArchive as PassportUI } from './PetArchive';
import { motion } from 'framer-motion';
import styles from './ArchiveDashboard.module.css';
import { useState } from 'react';
import { petProfiles } from '@/data/pets';

export const ArchiveDashboard: React.FC = () => {
    const [activePet, setActivePet] = useState(petProfiles[0]);

    return (
        <div className={`${styles.section} section-padding`}>
            <div className="container">
                <AnimateIn>
                    <div className={styles.header}>
                        <div className={styles.profileInfo}>
                            <div className={styles.avatar}>
                                <img src={activePet.photo} alt={activePet.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div className={styles.name}>
                                <h1>{activePet.name}</h1>
                                <p>{activePet.species} | {activePet.gender} | {activePet.age}</p>
                            </div>
                        </div>

                        {/* Pet Selector */}
                        <div className={styles.petSelector}>
                            {petProfiles.map(pet => (
                                <motion.div
                                    key={pet.id}
                                    className={`${styles.petThumb} ${activePet.id === pet.id ? styles.petThumbActive : ''}`}
                                    onClick={() => setActivePet(pet)}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <img src={pet.photo} alt={pet.name} />
                                    {activePet.id === pet.id && <div className={styles.activeIndicator} />}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </AnimateIn>

                <div className={styles.dashboardGrid}>
                    <div className={styles.mainContent}>
                        {/* Health & Growth Chart Placeholder */}
                        <AnimateIn delay={0.1}>
                            <div className={styles.activityCard}>
                                <h3 className={styles.cardTitle}>
                                    <TrendingUp size={24} />
                                    健康曲线 (近 30 天)
                                </h3>
                                <div style={{ height: 260, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fbfcfb', border: '1px dashed rgba(82, 121, 111, 0.2)', borderRadius: '24px', color: 'var(--color-text-muted)' }}>
                                    📈 实时监控数据链路已为您开启...
                                </div>
                            </div>
                        </AnimateIn>

                        {/* Recent Activities */}
                        <AnimateIn delay={0.2} key={`activities-${activePet.id}`}>
                            <div className={styles.activityCard}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 }}>
                                    <h3 className={styles.cardTitle} style={{ marginBottom: 0 }}>
                                        <History size={24} />
                                        服务历史记录
                                    </h3>
                                    <span style={{ fontSize: '0.9rem', color: 'var(--color-brand-primary)', cursor: 'pointer', fontWeight: 800 }}>查看全部档案</span>
                                </div>
                                <div className={styles.activityList}>
                                    {activePet.activities.map((act, i) => (
                                        <div key={i} className={styles.activityItem}>
                                            <div className={styles.activityIcon}>{act.icon}</div>
                                            <div className={styles.activityInfo}>
                                                <h4>{act.title}</h4>
                                                <p>{act.desc}</p>
                                            </div>
                                            <div className={styles.activityDate}>{act.date}</div>
                                            <ChevronRight size={18} style={{ opacity: 0.3 }} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </AnimateIn>
                    </div>

                    <div className={styles.sidebar}>
                        {/* Digital Passport - Dynamic */}
                        <AnimateIn delay={0.3} key={`passport-${activePet.id}`}>
                            <PassportUI pet={{
                                name: activePet.name,
                                breed: activePet.breed,
                                age: activePet.age,
                                weight: activePet.weight,
                                photo: activePet.photo,
                                upcoming: activePet.upcoming
                            }} />
                        </AnimateIn>

                        {/* Health Stats */}
                        <AnimateIn delay={0.4} key={`stats-${activePet.id}`}>
                            <div className={styles.activityCard}>
                                <h3 className={styles.cardTitle}>
                                    <HeartPulse size={24} />
                                    实时健康看板
                                </h3>
                                <div className={styles.statsGrid}>
                                    {activePet.health.map((stat, i) => (
                                        <motion.div
                                            key={i}
                                            className={styles.statCard}
                                            whileHover={{ y: -5, scale: 1.02 }}
                                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                        >
                                            <div className={styles.statHeader}>
                                                <div className={styles.statIcon} style={{ color: stat.color }}>{stat.icon}</div>
                                                <div className={styles.statusPill}>
                                                    <span className={styles.statusDot} style={{ background: stat.color, boxShadow: `0 0 10px ${stat.color}` }}></span>
                                                    {stat.status}
                                                </div>
                                            </div>
                                            <div className={styles.statBody}>
                                                <span className={styles.statValue}>{stat.value}</span>
                                                <span className={styles.statUnit}>{stat.unit}</span>
                                            </div>
                                            <span className={styles.statLabel}>{stat.label}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </AnimateIn>

                        {/* Download Documents */}
                        <AnimateIn delay={0.5}>
                            <div className={styles.activityCard}>
                                <h3 className={styles.cardTitle}>
                                    <FileText size={24} />
                                    数字化诊疗文件
                                </h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                                    {[
                                        { name: '年度全项体检报告集.pdf', type: 'PDF' },
                                        { name: '核心疫苗接种数字存证.jpg', type: 'IMG' }
                                    ].map((doc, idx) => (
                                        <div key={idx} className={styles.docItem}>
                                            <div className={styles.docInfo}>
                                                <span className={styles.docName}>{doc.name}</span>
                                                <span className={styles.docType}>{doc.type}</span>
                                            </div>
                                            <ChevronRight size={16} opacity={0.4} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </AnimateIn>
                    </div>
                </div>
            </div>
        </div>
    );
};
