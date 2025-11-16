import { JSX } from 'react';
import { Navbar } from '@/components';
import {
  AboutSection,
  HeroSection,
  ProjectSection,
  TapeSection,
  TestimonialsSection,
} from '@/sections';

const Home = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProjectSection />
      <TapeSection />
      <TestimonialsSection />
      <AboutSection />
    </>
  );
};

export default Home;
