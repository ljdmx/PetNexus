'use client';

import React, { useState } from 'react';
import { Search, BookOpen, Dog, Apple, ArrowRight, Clock, Heart, ShieldCheck } from 'lucide-react';
import { AnimateIn } from '../ui/AnimateIn';
import { Button } from '../ui/Button';
import styles from './KnowledgeBaseList.module.css';

const categories = ["所有文章", "健康科普", "行为训练", "营养计划", "品牌故事", "医疗政策"];

const allArticles = [
    {
        tag: '健康科普',
        title: '春季宠物皮肤病预防指南',
        excerpt: '随着气温回升，寄生虫进入活跃期。本指南为您解析如何通过日常饮食与洗护降低过敏风险...',
        date: '2026-03-15',
        author: '陈医生',
        icon: <BookOpen size={20} />
    },
    {
        tag: '行为训练',
        title: '幼犬如厕训练的三个核心动作',
        excerpt: '如何让刚到家的小家伙学会定点排便？科学的正向激励法比责备更有效，只需三个步骤...',
        date: '2026-03-12',
        author: '李教练',
        icon: <Dog size={20} />
    },
    {
        tag: '营养计划',
        title: '老年犬饮食调整的五大注意事项',
        excerpt: '当您的爱宠步入老年，其代谢水平与关节健康对营养的需求发生了显著变化...',
        date: '2026-03-10',
        author: '营养师王悦',
        icon: <Apple size={20} />
    },
    {
        tag: '健康科普',
        title: '猫咪口腔健康的日常护理',
        excerpt: '牙龈炎是猫咪常见的健康问题。本文教你如何从幼年期开始培养刷牙习惯，预防牙周疾病。',
        date: '2026-03-05',
        author: '陈医生',
        icon: <Heart size={20} />
    },
    {
        tag: '医疗政策',
        title: '2026 年度宠物狂犬病疫苗接种新规解读',
        excerpt: '根据最新城市管理条例，宠物狂犬疫苗接种周期与电子标签同步规则有了重要调整...',
        date: '2026-03-01',
        author: '管理办',
        icon: <ShieldCheck size={20} />
    }
];

export const KnowledgeBaseList: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState("所有文章");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredArticles = allArticles.filter(art => {
        const matchesCategory = activeCategory === "所有文章" || art.tag === activeCategory;
        const matchesSearch = art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            art.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <section className={`${styles.section} section-padding`}>
            <div className="container">
                <AnimateIn>
                    <div className={styles.header}>
                        <h1 className={styles.title}>爱宠养护百科</h1>
                        <div className={styles.searchContainer}>
                            <input
                                type="text"
                                placeholder="搜索养护知识、医疗指南..."
                                className={styles.searchInput}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <Search className={styles.searchIcon} size={24} />
                        </div>
                        <div className={styles.categories}>
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    className={`${styles.categoryBtn} ${activeCategory === cat ? styles.categoryActive : ''}`}
                                    onClick={() => setActiveCategory(cat)}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </AnimateIn>

                {/* Featured Article - only show when in 'All' or specific relevant category */}
                {activeCategory === "所有文章" && searchQuery === "" && (
                    <AnimateIn delay={0.2}>
                        <div className={styles.featured}>
                            <div className={styles.featuredImage}>
                                <img src="/knowledge-featured.png" alt="Featured Article" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div className={styles.featuredContent}>
                                <span style={{ display: 'inline-block', padding: '4px 12px', background: 'rgba(82,121,111,0.1)', color: 'var(--color-brand-primary)', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 700, marginBottom: 16 }}>
                                    本周推荐
                                </span>
                                <h2>如何构建宠物的终身健康管理档案？</h2>
                                <p>从出生那一刻起，每一份疫苗记录、每一次体检报告都是爱宠生命的注脚。科学的档案管理能帮助兽医更精准地判断病因。</p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: 24 }}>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                                        <Clock size={16} /> 10 分钟阅读
                                    </span>
                                    <span>陈医生 · 资深兽医专家</span>
                                </div>
                                <Button variant="primary">立即阅读全文</Button>
                            </div>
                        </div>
                    </AnimateIn>
                )}

                <div className={styles.grid}>
                    {filteredArticles.map((article, index) => (
                        <AnimateIn key={index} delay={index * 0.05}>
                            <div style={{ backgroundColor: 'white', padding: '32px', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)', transition: 'var(--transition-premium)', cursor: 'pointer', height: '100%', display: 'flex', flexDirection: 'column' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                                    <span style={{ padding: '4px 12px', background: 'var(--color-bg-base)', color: 'var(--color-brand-primary)', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 700 }}>
                                        {article.tag}
                                    </span>
                                    <div style={{ opacity: 0.3 }}>{article.icon}</div>
                                </div>
                                <h3 style={{ fontSize: '1.25rem', color: 'var(--color-brand-primary)', marginBottom: 12, fontWeight: 800 }}>{article.title}</h3>
                                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: 20, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                    {article.excerpt}
                                </p>
                                <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 20, borderTop: '1px solid rgba(0,0,0,0.05)' }}>
                                    <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>{article.author} · {article.date}</span>
                                    <div style={{ display: 'flex', alignItems: 'center', color: 'var(--color-brand-primary)', fontWeight: 700, fontSize: '0.9rem' }}>
                                        阅读 <ArrowRight size={14} style={{ marginLeft: 4 }} />
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
