import { JSX } from 'react';
import { Navbar } from '@/components';
import { HeroSection } from '@/sections';

export default function Home(): JSX.Element {
  return (
    <>
      <Navbar />
      <HeroSection />
    </>
  );
}
