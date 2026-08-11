import React from 'react';
import NewArrivalsSection from './HomePage/sections/NewArrivals';
import BestSellersSection from './HomePage/sections/BestSellers';
import AboutSection from './HomePage/sections/About';
import ContactSection from './HomePage/sections/Contact';

export default function HomePage(): React.JSX.Element {
  return (
    <>
      <NewArrivalsSection />

      <BestSellersSection />

      <AboutSection />

      <ContactSection />
    </>
  );
}