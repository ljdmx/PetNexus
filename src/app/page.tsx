'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Hero } from '@/components/sections/Hero';
import { TrustBar } from '@/components/sections/TrustBar';
import { Services } from '@/components/sections/Services';
import { BookingSystem } from '@/components/sections/BookingSystem';
import { PetArchive } from '@/components/sections/PetArchive';
import { KnowledgeBase } from '@/components/sections/KnowledgeBase';
import { Testimonials } from '@/components/sections/Testimonials';
import { petProfiles } from '@/data/pets';

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <Services />
      <Testimonials />
      <div style={{ backgroundColor: 'var(--color-bg-base)' }}>
        <BookingSystem />
      </div>

      <section className="section-padding" style={{ paddingBottom: 80, background: 'var(--color-bg-subtle)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 style={{ fontSize: '2.5rem', color: '#2d453e', marginBottom: 16, fontWeight: 800 }}>首席宠物大使</h2>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem' }}>PetNexus 荣耀大家庭成员，守护每一份纯粹의爱</p>
            </motion.div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
            gap: '32px',
            alignItems: 'stretch'
          }}>
            {petProfiles.slice(0, 3).map((pet, idx) => (
              <motion.div
                key={pet.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                style={{ height: '100%' } as any}
              >
                <PetArchive pet={{
                  name: pet.name,
                  breed: pet.breed,
                  age: pet.age,
                  weight: pet.weight,
                  photo: pet.photo,
                  upcoming: pet.upcoming
                }} />
              </motion.div>
            ))}
          </div>

          {/* Expanded Family Indicator */}
          <div style={{ textAlign: 'center', marginTop: 80 }}>
            <Link href="/archive" style={{ textDecoration: 'none' }}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 16,
                  padding: '16px 32px',
                  background: 'white',
                  borderRadius: '100px',
                  boxShadow: 'var(--shadow-md)',
                  cursor: 'pointer'
                } as any}
                whileHover={{ scale: 1.05 }}
              >
                <span style={{ fontWeight: 800, color: '#2d453e' }}>查看全部大使家族 ({petProfiles.length})</span>
                <div style={{ display: 'flex', marginLeft: 8 }}>
                  {petProfiles.map((p, i) => (
                    <img
                      key={p.id}
                      src={p.photo}
                      alt={p.name}
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: '50%',
                        border: '2px solid white',
                        marginLeft: i > 0 ? -12 : 0,
                        objectFit: 'cover',
                        zIndex: petProfiles.length - i
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>

      <KnowledgeBase />
    </main>
  );
}
