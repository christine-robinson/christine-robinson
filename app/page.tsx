import { JSX } from 'react';
import { Navbar } from '@/components';
import { HeroSection } from '@/sections';

const Home = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <HeroSection />
    </>
  );
};

export default Home;
