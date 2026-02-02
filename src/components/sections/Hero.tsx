'use client';

import React from 'react';
import { Button } from '../ui/Button';
import { AnimateIn } from '../ui/AnimateIn';
import { ShieldCheck } from 'lucide-react';
import styles from './Hero.module.css';

export const Hero: React.FC = () => {
    return (
        <section className={styles.hero}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.content}>
                        <AnimateIn delay={0.1}>
                            <div className={styles.badge}>
                                <span role="img" aria-label="paw">🐾</span>
                                <span>10,000+ 宠物家长的共同信任之选</span>
                            </div>
                        </AnimateIn>

                        <AnimateIn delay={0.2}>
                            <h1 className={styles.title}>
                                温暖守护，<br />
                                <span>让爱更有温度。</span>
                            </h1>
                        </AnimateIn>

                        <AnimateIn delay={0.3}>
                            <p className={styles.description}>
                                PetNexus 不仅仅是一个宠物店。我们是一个致力于通过科学护理、专业医疗和充满爱心的陪伴，全面提升宠物生活品质的温暖社区。
                            </p>
                        </AnimateIn>

                        <AnimateIn delay={0.4}>
                            <div className={styles.actions}>
                                <Button variant="primary" style={{ padding: '16px 40px', fontSize: '1.1rem' }}>
                                    立即预约服务
                                </Button>
                                <Button variant="secondary" style={{ padding: '16px 40px', fontSize: '1.1rem' }}>
                                    探索所有项目
                                </Button>
                            </div>
                        </AnimateIn>
                    </div>

                    <div className={styles.imageContainer}>
                        <AnimateIn delay={0.5} direction="left">
                            <div style={{ position: 'relative' }}>
                                <img
                                    src="/hero-pets.png"
                                    alt="Happy golden retriever and grey cat"
                                    className={styles.mainImage}
                                />
                                <div className={`${styles.decorativeCard} glass`}>
                                    <div className={styles.stat}>
                                        <div className={styles.statIcon}>
                                            <ShieldCheck size={24} />
                                        </div>
                                        <div className={styles.statText}>
                                            <h4>专业背书</h4>
                                            <p>金牌兽医团队驻场</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimateIn>
                    </div>
                </div>
            </div>
        </section>
    );
};
