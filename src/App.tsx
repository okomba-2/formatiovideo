import React, { useState } from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { Showreel } from './components/Showreel.tsx';
import { WorkflowSection } from './components/WorkflowSection.tsx';
import { Curriculum } from './components/Curriculum.tsx';
import { ComparisonSection } from './components/ComparisonSection.tsx';
import { Testimonials } from './components/Testimonials.tsx';
import { Pricing } from './components/Pricing.tsx';
import { FAQ } from './components/FAQ.tsx';
import { Footer } from './components/Footer.tsx';
import { EnrollModal } from './components/EnrollModal.tsx';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('pro');

  const handleOpenEnroll = (plan: string = 'pro') => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const handleScrollToShowreel = () => {
    const el = document.getElementById('showreel');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#08090D] text-slate-100 flex flex-col font-['Plus_Jakarta_Sans']">
      <Header onOpenEnroll={handleOpenEnroll} />

      <main className="flex-1">
        <Hero
          onOpenEnroll={handleOpenEnroll}
          onScrollToShowreel={handleScrollToShowreel}
        />
        <Showreel />
        <WorkflowSection />
        <Curriculum />
        <ComparisonSection />
        <Testimonials />
        <Pricing onOpenEnroll={handleOpenEnroll} />
        <FAQ />
      </main>

      <Footer />

      <EnrollModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultPlan={selectedPlan}
      />
    </div>
  );
}
