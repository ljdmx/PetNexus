'use client';

import React, { useState } from 'react';
import { Stethoscope, Bath, Sparkles, GraduationCap, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/Button';
import styles from './BookingSystem.module.css';

import { motion, AnimatePresence } from 'framer-motion';

const steps = [
    { id: 1, label: '服务' },
    { id: 2, label: '宠物' },
    { id: 3, label: '时间' }
];

const serviceTypes = [
    { id: 'medical', label: '专业医疗体检', sub: '由资深兽医执行', icon: <Stethoscope size={32} /> },
    { id: 'grooming', label: '基础洗护理', sub: '标准洁净流程', icon: <Bath size={32} /> },
    { id: 'spa', label: '顶级宠物美容', sub: '个性化剪裁方案', icon: <Sparkles size={32} /> },
    { id: 'training', label: '行为纠偏训练', sub: '科学正向引导', icon: <GraduationCap size={32} /> }
];

export const BookingSystem: React.FC = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [direction, setDirection] = useState(1);
    const [formData, setFormData] = useState({
        service: '',
        petName: '',
        petType: 'dog',
        date: '',
        time: ''
    });

    const handleNext = () => {
        setDirection(1);
        setCurrentStep(prev => Math.min(prev + 1, 3));
    };

    const handlePrev = () => {
        setDirection(-1);
        setCurrentStep(prev => Math.max(prev - 1, 1));
    };

    const variants = {
        enter: (dir: number) => ({
            x: dir > 0 ? 50 : -50,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (dir: number) => ({
            zIndex: 0,
            x: dir < 0 ? 50 : -50,
            opacity: 0
        })
    };

    const renderStepContent = () => {
        switch (currentStep) {
            case 1:
                return (
                    <motion.div
                        key="step1"
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                        className={styles.stepContent}
                    >
                        <div className={styles.categoryTitle}>
                            <h3>请选择您需要的服务类型</h3>
                            <p>我们将为您匹配最专业的服务人员</p>
                        </div>
                        <div className={styles.serviceOptions}>
                            {serviceTypes.map(type => (
                                <div
                                    key={type.id}
                                    className={`${styles.serviceOption} ${formData.service === type.id ? styles.serviceOptionSelected : ''}`}
                                    onClick={() => setFormData({ ...formData, service: type.id })}
                                >
                                    <div className={styles.serviceIcon}>{type.icon}</div>
                                    <div className={styles.serviceInfo}>
                                        <span className={styles.serviceLabel}>{type.label}</span>
                                        <span className={styles.serviceSub}>{type.sub}</span>
                                    </div>
                                    {formData.service === type.id && (
                                        <CheckCircle2 size={24} className={styles.selectedTick} />
                                    )}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                );
            case 2:
                return (
                    <motion.div
                        key="step2"
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                        className={styles.stepContent}
                    >
                        <div className={styles.categoryTitle}>
                            <h3>宠物档案信息</h3>
                            <p>完善的信息有助于我们提供针对性方案</p>
                        </div>
                        <div className={styles.formGrid}>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>宠物昵称</label>
                                <input
                                    type="text"
                                    className={styles.input}
                                    placeholder="输入如：可乐"
                                    value={formData.petName}
                                    onChange={(e) => setFormData({ ...formData, petName: e.target.value })}
                                />
                            </div>
                            <div className={styles.grid}>
                                <div className={styles.formGroup}>
                                    <label className={styles.label}>宠物种类</label>
                                    <select
                                        className={styles.select}
                                        value={formData.petType}
                                        onChange={(e) => setFormData({ ...formData, petType: e.target.value })}
                                    >
                                        <option value="dog">狗狗</option>
                                        <option value="cat">猫咪</option>
                                        <option value="other">其他</option>
                                    </select>
                                </div>
                                <div className={styles.formGroup}>
                                    <label className={styles.label}>宠物年龄</label>
                                    <input type="text" className={styles.input} placeholder="例如：2.5 岁" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                );
            case 3:
                return (
                    <motion.div
                        key="step3"
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                        className={styles.stepContent}
                    >
                        <div className={styles.categoryTitle}>
                            <h3>确认预约档期</h3>
                            <p>请选择最方便的到店或服务时间</p>
                        </div>
                        <div className={styles.formGrid}>
                            <div className={styles.grid}>
                                <div className={styles.formGroup}>
                                    <label className={styles.label}>预约日期</label>
                                    <input
                                        type="date"
                                        className={styles.input}
                                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <label className={styles.label}>预约时间段</label>
                                    <select
                                        className={styles.select}
                                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                                    >
                                        <option value="09:00">09:00 - 10:30</option>
                                        <option value="11:00">11:00 - 12:30</option>
                                        <option value="14:00">14:00 - 15:30</option>
                                        <option value="16:00">16:00 - 17:30</option>
                                    </select>
                                </div>
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>特别备注</label>
                                <textarea className={styles.input} placeholder="是否有过敏史、胆小或攻击倾向？请告知我们..." rows={3} />
                            </div>
                        </div>
                    </motion.div>
                );
            default:
                return null;
        }
    };

    return (
        <section className={styles.bookingSection} id="booking">
            <div className="container">
                <div className={styles.bookingCard}>
                    <div className={styles.cardHeader}>
                        <div className={styles.indicatorStrip} />
                        <div className={styles.stepIndicator}>
                            {steps.map(step => (
                                <div
                                    key={step.id}
                                    className={`${styles.step} ${currentStep >= step.id ? styles.stepActive : ''} ${currentStep > step.id ? styles.stepCompleted : ''}`}
                                >
                                    <div className={styles.stepNumber}>
                                        {currentStep > step.id ? <CheckCircle2 size={16} /> : step.id}
                                    </div>
                                    <span className={styles.stepLabel}>{step.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.formWrapper}>
                        <AnimatePresence mode="wait" initial={false} custom={direction}>
                            {renderStepContent()}
                        </AnimatePresence>
                    </div>

                    <div className={styles.actions}>
                        <Button
                            variant="ghost"
                            onClick={handlePrev}
                            disabled={currentStep === 1}
                            className={currentStep === 1 ? styles.hidden : ''}
                        >
                            <ChevronLeft size={18} style={{ marginRight: 8 }} /> 返回
                        </Button>
                        <Button
                            variant="primary"
                            onClick={currentStep === 3 ? () => alert('预约请求已发送！我们的专业顾问将尽快与您联系。') : handleNext}
                            style={{ minWidth: 160 }}
                        >
                            {currentStep === 3 ? '完成预约' : '下一步'} <ChevronRight size={18} style={{ marginLeft: 8 }} />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};
