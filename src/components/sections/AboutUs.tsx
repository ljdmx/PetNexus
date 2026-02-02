'use client';

import React from 'react';
import { Mail, Phone, MapPin, Clock, Instagram, Twitter, Facebook } from 'lucide-react';
import { AnimateIn } from '../ui/AnimateIn';
import styles from './AboutUs.module.css';

const team = [
    {
        name: "陈明远",
        role: "首席主治医生 / 院长",
        desc: "拥有 15 年临床经验，毕业于中国农业大学动物医学系。专注于小动物内科与疑难杂症诊疗。",
        avatar: "/team-vet.png"
    },
    {
        name: "莉莉 (Lily)",
        role: "资深宠物美容师",
        desc: "拥有国际宠物美容师资格证，倡导“无压力洗护”，是 3000+ 宠物家长的信任之选。",
        avatar: "/team-groomer.png"
    },
    {
        name: "王建国",
        role: "首席行为训练师",
        desc: "CPDT-KA 认证训练师。擅长通过正向加强手段解决犬只社交恐惧与分离焦虑。",
        avatar: "/team-trainer.png"
    }
];

export const AboutUs: React.FC = () => {
    return (
        <section className={`${styles.section} section-padding`}>
            <div className="container">
                <AnimateIn>
                    <div className={styles.hero}>
                        <h1 className={styles.title}>关于 PetNexus</h1>
                        <p className={styles.mission}>
                            “我们致力于通过科学、温情与专业的技术，为每一份跨越物种的爱提供最坚实的守护。我们的使命是提升全球宠物的生活品质与家长的幸福感。”
                        </p>
                    </div>
                </AnimateIn>

                <div className={styles.teamSection}>
                    <AnimateIn>
                        <h2 style={{ textAlign: 'center', marginBottom: '60px', color: 'var(--color-brand-primary)', fontSize: '2.5rem', fontWeight: 800 }}>
                            精英专家团队
                        </h2>
                    </AnimateIn>
                    <div className={styles.teamGrid}>
                        {team.map((member, index) => (
                            <AnimateIn key={index} delay={index * 0.1}>
                                <div className={styles.teamCard}>
                                    <div className={styles.teamAvatar}>
                                        <img src={member.avatar} alt={member.name} />
                                    </div>
                                    <span className={styles.teamRole}>{member.role}</span>
                                    <h3 className={styles.teamName}>{member.name}</h3>
                                    <p className={styles.teamDesc}>{member.desc}</p>
                                </div>
                            </AnimateIn>
                        ))}
                    </div>
                </div>

                <div className={styles.contactSection}>
                    <div className={styles.contactGrid}>
                        <AnimateIn direction="right">
                            <div className={styles.contactInfo}>
                                <h3>联系与到店信息</h3>
                                <div className={styles.contactList}>
                                    <div className={styles.contactItem}>
                                        <div className={styles.contactIcon}><MapPin size={24} /></div>
                                        <div className={styles.contactText}>
                                            <h4>门店地址</h4>
                                            <p>北京市朝阳区艺术园区蓝天路 88 号 PetNexus 旗舰中心</p>
                                        </div>
                                    </div>
                                    <div className={styles.contactItem}>
                                        <div className={styles.contactIcon}><Phone size={24} /></div>
                                        <div className={styles.contactText}>
                                            <h4>服务热线</h4>
                                            <p>400-888-PETS (7387) / 010-67891234</p>
                                        </div>
                                    </div>
                                    <div className={styles.contactItem}>
                                        <div className={styles.contactIcon}><Clock size={24} /></div>
                                        <div className={styles.contactText}>
                                            <h4>营业时间</h4>
                                            <p>周一至周日 09:00 - 21:00 (急诊中心 24h 开放)</p>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '20px', marginTop: '40px' }}>
                                    <Instagram size={24} style={{ color: 'var(--color-brand-primary)', cursor: 'pointer' }} />
                                    <Twitter size={24} style={{ color: 'var(--color-brand-primary)', cursor: 'pointer' }} />
                                    <Facebook size={24} style={{ color: 'var(--color-brand-primary)', cursor: 'pointer' }} />
                                </div>
                            </div>
                        </AnimateIn>

                        <AnimateIn direction="left">
                            <div className={styles.mapPlaceholder}>
                                <img src="/about-store.png" alt="PetNexus Flagship Store" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                        </AnimateIn>
                    </div>
                </div>
            </div>
        </section>
    );
};
