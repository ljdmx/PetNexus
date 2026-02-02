'use client';

import React from 'react';
import Link from 'next/link';
import { PawPrint, Instagram, Twitter, Facebook, Mail } from 'lucide-react';
import { Button } from '../ui/Button';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.brandInfo}>
                        <Link href="/" className={styles.logo}>
                            <PawPrint size={32} strokeWidth={2.5} />
                            <span>PetNexus</span>
                        </Link>
                        <p className={styles.brandDesc}>
                            温暖守护，让爱更有温度。我们致力于为每一位宠物提供最专业的健康管理与全方位的周到护理。
                        </p>
                        <div className={styles.socials}>
                            <Instagram size={20} />
                            <Twitter size={20} />
                            <Facebook size={20} />
                        </div>
                    </div>

                    <div className={styles.column}>
                        <h4>快速链接</h4>
                        <ul className={styles.list}>
                            <li className={styles.item}><Link href="/services">服务项目</Link></li>
                            <li className={styles.item}><Link href="/archive">宠物档案</Link></li>
                            <li className={styles.item}><Link href="/knowledge">养护百科</Link></li>
                            <li className={styles.item}><Link href="/about">关于我们</Link></li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h4>核心服务</h4>
                        <ul className={styles.list}>
                            <li className={styles.item}><Link href="/services">专业医疗体检</Link></li>
                            <li className={styles.item}><Link href="/services">高端洗护美容</Link></li>
                            <li className={styles.item}><Link href="/services">行为训练课程</Link></li>
                            <li className={styles.item}><Link href="/archive">数字健康档案</Link></li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h4>订阅动态</h4>
                        <div className={styles.newsletter}>
                            <p>获取最新的养宠贴士与优惠活动。</p>
                            <div className={styles.inputGroup}>
                                <input type="email" placeholder="输入您的邮箱" className={styles.input} />
                                <Button variant="primary" style={{ padding: '10px 20px' }}>订阅</Button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>© 2026 PetNexus 宠物科技. All rights reserved.</p>
                    <div style={{ display: 'flex', gap: '32px' }}>
                        <span style={{ cursor: 'pointer' }}>隐私政策</span>
                        <span style={{ cursor: 'pointer' }}>服务条款</span>
                        <span style={{ cursor: 'pointer' }}>联系我们</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};
