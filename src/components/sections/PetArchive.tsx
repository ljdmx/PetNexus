'use client';

import { Calendar, Loader2 } from 'lucide-react';
import { AnimateIn } from '../ui/AnimateIn';
import { motion } from 'framer-motion';
import styles from './PetArchive.module.css';

interface Pet {
    name: string;
    breed: string;
    age: string;
    weight: string;
    photo: string;
    upcoming: string;
}

interface PetArchiveProps {
    pet: Pet;
}

export const PetArchive: React.FC<PetArchiveProps> = ({ pet }) => {
    return (
        <section className={styles.archiveSection}>
            <div className="container">
                <AnimateIn>
                    <div className={styles.passport}>
                        <div className={styles.accentStripe} />

                        <div className={styles.passportHeader}>
                            <div className={styles.headerTitle}>
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                    className={styles.syncIcon}
                                >
                                    <Loader2 size={14} />
                                </motion.div>
                                <span className={styles.headerLabel}>PET PASSPORT</span>
                            </div>
                            <div className={styles.syncStatus}>
                                <span>数字健康档案云同步</span>
                            </div>
                        </div>

                        <div className={styles.passportBody}>
                            <div className={styles.mainInfo}>
                                <div className={styles.photoContainer}>
                                    <div className={styles.photoInner}>
                                        <img src={pet.photo} alt={pet.name} className={styles.petPhoto} />
                                    </div>
                                </div>

                                <div className={styles.details}>
                                    <div className={styles.field}>
                                        <label>NAME / 昵称</label>
                                        <div className={styles.value}>{pet.name}</div>
                                    </div>

                                    <div className={styles.field}>
                                        <label>BREED / 品种</label>
                                        <div className={styles.value}>{pet.breed}</div>
                                    </div>

                                    <div className={styles.statsRow}>
                                        <div className={styles.smallField}>
                                            <label>AGE / 年龄</label>
                                            <div className={styles.smallValue}>{pet.age}</div>
                                        </div>
                                        <div className={styles.smallField}>
                                            <label>WEIGHT / 体重</label>
                                            <div className={styles.smallValue}>{pet.weight}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.footerInfo}>
                                <div className={styles.upcomingField}>
                                    <Calendar size={14} className={styles.footerIcon} />
                                    <div className={styles.footerContent}>
                                        <label>UPCOMING / 下次追踪</label>
                                        <div className={styles.footerValue}>{pet.upcoming}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimateIn>
            </div>
        </section>
    );
};
