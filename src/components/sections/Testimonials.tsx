'use client';

import React from 'react';
import { Star } from 'lucide-react';
import { AnimateIn } from '../ui/AnimateIn';
import styles from './Testimonials.module.css';

const testimonials = [
    {
        quote: "这里的洗护服务非常细致，我的金毛每次回来都香喷喷且情绪很放松。医生也非常专业，讲解非常耐心。",
        author: "张女士",
        pet: "金毛 · 可乐",
        initials: "张"
    },
    {
        quote: "作为一名新手猫爸，宠物百科帮了我很大的忙。预约系统也非常方便，再也不用现场排队等待了。",
        author: "李先生",
        pet: "布偶猫 · 糯米",
        initials: "李"
    },
    {
        quote: "狗狗在这里接受了三个月的行为训练，现在变得非常听话。非常感谢训练师的辛勤付出！",
        author: "赵女士",
        pet: "柯基 · 豆包",
        initials: "赵"
    }
];

export const Testimonials: React.FC = () => {
    return (
        <section className={`${styles.testimonials} section-padding`}>
            <div className="container">
                <AnimateIn>
                    <div className={styles.header}>
                        <h2 className={styles.title}>宠物家长的心声</h2>
                        <p className={styles.subtitle}>
                            已有超过 10,000 位宠物家长在 PetNexus 开启了更美好的养宠生活。
                        </p>
                    </div>
                </AnimateIn>

                <div className={styles.grid}>
                    {testimonials.map((item, index) => (
                        <AnimateIn key={index} delay={index * 0.1}>
                            <div className={styles.testimonialCard}>
                                <div className={styles.stars}>
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} fill="currentColor" />
                                    ))}
                                </div>
                                <p className={styles.quote}>{item.quote}</p>
                                <div className={styles.author}>
                                    <div className={styles.avatar}>{item.initials}</div>
                                    <div className={styles.authorInfo}>
                                        <h4>{item.author}</h4>
                                        <p>{item.pet}</p>
                                    </div>
                                </div>
                            </div>
                        </AnimateIn>
                    ))}
                </div>
            </div>
        </section>
    );
};
