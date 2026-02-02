'use client';

import React from 'react';
import { Card } from '../ui/Card';
import { Stethoscope, Bath, GraduationCap } from 'lucide-react';
import { AnimateIn } from '../ui/AnimateIn';
import styles from './Services.module.css';

const servicesData = [
    {
        title: '专业医疗体检',
        description: '由资深兽医团队提供的全面健康检查与精准诊疗服务，全心守护宠物健康。',
        icon: <Stethoscope size={32} strokeWidth={1.5} />
    },
    {
        title: '高端洗护美容',
        description: '采用进口天然洗护用品，专业技师手工修剪，让您的爱宠焕发自然光彩。',
        icon: <Bath size={32} strokeWidth={1.5} />
    },
    {
        title: '行为训练课程',
        description: '科学的正面正向诱导训练，帮助宠物建立良好生活习惯，让沟通更简单。',
        icon: <GraduationCap size={32} strokeWidth={1.5} />
    }
];

export const Services: React.FC = () => {
    return (
        <section className={`${styles.services} section-padding`}>
            <div className="container">
                <AnimateIn>
                    <div className={styles.header}>
                        <h2 className={styles.title}>核心服务</h2>
                        <p className={styles.subtitle}>
                            我们不仅提供服务，更提供一份承诺。全方位覆盖宠物的健康与生活需求。
                        </p>
                    </div>
                </AnimateIn>

                <div className={styles.grid}>
                    {servicesData.map((service, index) => (
                        <AnimateIn key={index} delay={index * 0.1}>
                            <Card
                                title={service.title}
                                description={service.description}
                                icon={service.icon}
                            />
                        </AnimateIn>
                    ))}
                </div>
            </div>
        </section>
    );
};
