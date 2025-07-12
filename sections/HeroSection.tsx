import { JSX } from 'react';
import Image from 'next/image';
import memojiImage from '@/assets/images/memoji-computer.png';
import { ArrowDownIcon } from '@/components/icons';
import { HeroOrbit } from '@/components';

const HeroSection = (): JSX.Element => {
  return (
    <section id='hero' className='overflow-x-clip py-32 md:py-48 lg:py-60'>
      <div className='grain-image absolute inset-0 -z-30 opacity-5'></div>

      <div className='hero-ring size-[620px]'></div>
      <div className='hero-ring size-[820px]'></div>
      <div className='hero-ring size-[1020px]'></div>
      <div className='hero-ring size-[1220px]'></div>

      <HeroOrbit />

      <div className='relative z-0 container mx-auto'>
        <div className='flex flex-col items-center'>
          <Image
            src={memojiImage}
            className='size-[100px]'
            alt='Person peeking behind laptop'
          />
          <div className='flex items-center gap-4 rounded-lg border border-gray-800 bg-gray-950 px-4 py-1.5'>
            <span className='size-2.5 rounded-full bg-green-500'></span>
            <p className='text-sm font-medium'>Available for new projects!</p>
          </div>
        </div>
        <div className='mx-auto max-w-lg'>
          <h1 className='mt-8 text-center font-serif text-3xl tracking-wide md:text-5xl'>
            Building Exceptional User Experiences
          </h1>
          <p className='mt-4 text-center text-white/60 md:text-lg'>
            I specialize in transforming designs into functional,
            high-performing web applications. Let's discuss your next project.
          </p>
        </div>
        <div className='mt-8 flex flex-col items-center gap-4 md:flex-row md:justify-center'>
          <button className='flex h-12 items-center gap-2 rounded-xl border border-white/15 px-6'>
            <span className='font-semibold'>Explore My Work</span>
            <ArrowDownIcon className='size-4' />
          </button>
          <button className='flex h-12 items-center gap-2 rounded-xl border border-white bg-white px-4 text-gray-900'>
            <span>👋</span> <span className='font-semibold'>Let's Connect</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
