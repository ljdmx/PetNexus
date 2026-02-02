import React from 'react';
import { BookOpen, Dog, Apple, ArrowRight } from 'lucide-react';
import styles from './KnowledgeBase.module.css';

const articles = [
    {
        tag: '健康科普',
        title: '春季宠物皮肤病预防指南',
        excerpt: '随着气温回升，寄生虫进入活跃期。本指南为您解析如何通过日常饮食与洗护降低过敏风险...',
        date: '2026-03-15',
        icon: <BookOpen size={20} className={styles.articleIcon} />
    },
    {
        tag: '行为训练',
        title: '幼犬如厕训练的三个核心动作',
        excerpt: '如何让刚到家的小家伙学会定点排便？科学的正向激励法比责备更有效，只需三个步骤...',
        date: '2026-03-12',
        icon: <Dog size={20} className={styles.articleIcon} />
    },
    {
        tag: '营养计划',
        title: '老年犬饮食调整的五大注意事项',
        excerpt: '当您的爱宠步入老年，其代谢水平与关节健康对营养的需求发生了显著变化...',
        date: '2026-03-10',
        icon: <Apple size={20} className={styles.articleIcon} />
    }
];

export const KnowledgeBase: React.FC = () => {
    return (
        <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-base)' }}>
            <div className="container">
                <h2 style={{ textAlign: 'center', marginBottom: '48px', color: 'var(--color-brand-primary)', fontWeight: 800 }}>
                    爱宠养护百科
                </h2>
                <div className={styles.knowledgeGrid}>
                    {articles.map((article, index) => (
                        <div key={index} className={styles.article}>
                            <div className={styles.articleHeader}>
                                <span className={styles.tag}>{article.tag}</span>
                                {article.icon}
                            </div>
                            <h3 className={styles.articleTitle}>{article.title}</h3>
                            <p className={styles.excerpt}>{article.excerpt}</p>
                            <div className={styles.footer}>
                                <span className={styles.date}>{article.date}</span>
                                <span className={styles.readMore}>
                                    阅读全文 <ArrowRight size={16} style={{ marginLeft: 4 }} />
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
