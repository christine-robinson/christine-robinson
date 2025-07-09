import { JSX } from 'react';
import Image from 'next/image';
import memojiImage from '@/assets/images/memoji-computer.png';
import arrowDownIcon from '@/assets/icons/arrow-down.svg';
import grainImage from '@/assets/images/grain.jpg';
import starIcon from '@/assets/icons/star.svg';
import HeroOrbit from '@/components/HeroOrbit';

export default function HeroSection(): JSX.Element {
  return (
    <section
      id='hero'
      className='relative z-0 container mx-auto overflow-x-clip py-32 md:py-48 lg:py-60'
    >
      <div
        className='absolute inset-0 -z-30 opacity-5'
        style={{ backgroundImage: `url(${grainImage.src})` }}
      ></div>
      <div className='hero-ring size-[620px]'></div>
      <div className='hero-ring size-[820px]'></div>
      <div className='hero-ring size-[1020px]'></div>
      <div className='hero-ring size-[1220px]'></div>
      <HeroOrbit size={800} rotation={-72}>
        <svg
          className='size-28 text-emerald-300'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z'
            fill='currentColor'
          />
        </svg>
      </HeroOrbit>
      <HeroOrbit size={550} rotation={20}>
        <svg
          className='size-12 text-emerald-300'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z'
            fill='currentColor'
          />
        </svg>
      </HeroOrbit>
      <HeroOrbit size={590} rotation={98}>
        <svg
          className='size-8 text-emerald-300'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z'
            fill='currentColor'
          />
        </svg>
      </HeroOrbit>
      <HeroOrbit size={430} rotation={-14}>
        <svg
          className='size-8 text-emerald-300/20'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M1 12L10.1667 10.1667L12 1L13.8333 10.1667L23 12L13.8333 13.8333L12 23L10.1667 13.8333L1 12Z'
            fill='currentColor'
          />
        </svg>
      </HeroOrbit>
      <HeroOrbit size={440} rotation={79}>
        <svg
          className='size-5 text-emerald-300/20'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M1 12L10.1667 10.1667L12 1L13.8333 10.1667L23 12L13.8333 13.8333L12 23L10.1667 13.8333L1 12Z'
            fill='currentColor'
          />
        </svg>
      </HeroOrbit>
      <HeroOrbit size={530} rotation={178}>
        <svg
          className='size-10 text-emerald-300/20'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M1 12L10.1667 10.1667L12 1L13.8333 10.1667L23 12L13.8333 13.8333L12 23L10.1667 13.8333L1 12Z'
            fill='currentColor'
          />
        </svg>
      </HeroOrbit>
      <HeroOrbit size={710} rotation={144}>
        <svg
          className='size-14 text-emerald-300/20'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M1 12L10.1667 10.1667L12 1L13.8333 10.1667L23 12L13.8333 13.8333L12 23L10.1667 13.8333L1 12Z'
            fill='currentColor'
          />
        </svg>
      </HeroOrbit>
      <HeroOrbit size={720} rotation={85}>
        <span className='inline-block size-3 rounded-full bg-emerald-300/20'></span>
      </HeroOrbit>
      <HeroOrbit size={520} rotation={-41}>
        <span className='inline-block size-2 rounded-full bg-emerald-300/20'></span>
      </HeroOrbit>
      <HeroOrbit size={650} rotation={-5}>
        <span className='inline-block size-2 rounded-full bg-emerald-300/20'></span>
      </HeroOrbit>
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
          I specialize in transforming designs into functional, high-performing
          web applications. Let's discuss your next project.
        </p>
      </div>
      <div className='mt-8 flex flex-col items-center gap-4 md:flex-row md:justify-center'>
        <button className='flex h-12 items-center gap-2 rounded-xl border border-white/15 px-6'>
          <span className='font-semibold'>Explore My Work</span>
          <Image src={arrowDownIcon} alt='Arrow down' className='size-4' />
        </button>
        <button className='flex h-12 items-center gap-2 rounded-xl border border-white bg-white px-4 text-gray-900'>
          <span>👋</span> <span className='font-semibold'>Let's Connect</span>
        </button>
      </div>
    </section>
  );
}
