'use client';

import React from 'react';
import { CheckCircle2, Stethoscope, Bath, GraduationCap, Heart, Clock, Award } from 'lucide-react';
import { AnimateIn } from '../ui/AnimateIn';
import { Button } from '../ui/Button';
import styles from './ServiceDetailList.module.css';

const services = [
    {
        title: "专业医疗体检",
        description: "我们的医疗团队由资深兽医师组成，配备先进的诊断设备。从日常疫苗接种到复杂的手术治疗，我们始终以最严谨的态度对待每一份生命。",
        features: ["全项生化检查", "数字化DR影像", "进口疫苗接种", "24h紧急诊疗"],
        price: "¥199",
        unit: "起 / 次",
        icon: <Stethoscope size={48} />,
        image: "/service-medical.png"
    },
    {
        title: "高端洗护美容",
        description: "不仅仅是清洁，更是一场身心的放松。我们使用纯天然植物洗护用品，根据宠物背毛特质提供个性化的修剪方案，让爱宠焕发自然魅力。",
        features: ["碳酸泉SPA", "手工立体修剪", "耳道/甲沟清理", "口腔健康护理"],
        price: "¥128",
        unit: "起 / 次",
        icon: <Bath size={48} />,
        image: "/service-grooming.png"
    },
    {
        title: "行为训练课程",
        description: "通过科学的正向引导法，纠正宠物的拆家、吠叫、胆怯等行为问题。帮助家长建立与宠物的深层信任连接，让沟通变得简单有效。",
        features: ["社交技能培养", "定点排便训练", "随行服从课程", "压力缓解方案"],
        price: "¥2500",
        unit: "起 / 课程",
        icon: <GraduationCap size={48} />,
        image: "/service-training.png"
    }
];

const processSteps = [
    { number: "01", title: "预约咨询", desc: "在线或电话预约，初步了解宠物需求" },
    { number: "02", title: "到店评估", desc: "专业顾问现场评估宠物状态与需求" },
    { number: "03", title: "实施服务", desc: "资深技师/医生严格按照标准流程作业" },
    { number: "04", title: "后续回访", desc: "提供养护建议并持续跟进宠物状态" }
];

export const ServiceDetailList: React.FC = () => {
    return (
        <section className={`${styles.section} section-padding`}>
            <div className="container">
                <AnimateIn>
                    <div className={styles.header}>
                        <h1 className={styles.title}>全方位的专业服务</h1>
                        <p className={styles.subtitle}>
                            PetNexus 致力于提供一站式、高标准的宠物生活解决方案。我们坚持“专业、科学、透明”的服务准则。
                        </p>
                    </div>
                </AnimateIn>

                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <AnimateIn key={index} delay={index * 0.1}>
                            <div className={styles.serviceItem}>
                                <div className={styles.serviceContent}>
                                    <div style={{ color: 'var(--color-brand-primary)', marginBottom: 20 }}>
                                        {service.icon}
                                    </div>
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>
                                    <div className={styles.features}>
                                        {service.features.map((feat, i) => (
                                            <div key={i} className={styles.feature}>
                                                <CheckCircle2 size={18} className={styles.featureIcon} />
                                                <span>{feat}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className={styles.pricing}>
                                        <span className={styles.price}>{service.price}</span>
                                        <span className={styles.priceUnit}>{service.unit}</span>
                                    </div>
                                    <Button variant="primary">立即预约</Button>
                                </div>
                                <div className={styles.serviceImage}>
                                    <img src={service.image} alt={service.title} style={{ width: '100%', borderRadius: 'var(--radius-md)' }} />
                                </div>
                            </div>
                        </AnimateIn>
                    ))}
                </div>

                <div className={styles.processSection}>
                    <AnimateIn>
                        <h2 className={styles.processTitle}>标准服务流程</h2>
                    </AnimateIn>
                    <div className={styles.processGrid}>
                        {processSteps.map((step, index) => (
                            <AnimateIn key={index} delay={0.2 + index * 0.1}>
                                <div className={styles.processStep}>
                                    <div className={styles.stepNumber}>{step.number}</div>
                                    <div className={styles.stepInfo}>
                                        <h4>{step.title}</h4>
                                        <p>{step.desc}</p>
                                    </div>
                                </div>
                            </AnimateIn>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
