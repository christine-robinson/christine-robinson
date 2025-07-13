import { JSX } from 'react';
import Image from 'next/image';
import memojiImage from '@/assets/images/memoji-computer.png';
import { Navbar } from '@/components';
import { ArrowDownIcon, StarIcon, SparkleIcon } from '@/components/icons';

const HeroSection = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <section id='hero' className='py-32 md:py-48 lg:py-60'>
        <div className='absolute inset-0 overflow-x-clip [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]'>
          <div className='grain-image absolute inset-0 -z-30 opacity-5'></div>

          <div className='hero-ring size-[620px]'></div>
          <div className='hero-ring size-[820px]'></div>
          <div className='hero-ring size-[1020px]'></div>
          <div className='hero-ring size-[1220px]'></div>

          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <div className='flex size-[800px] rotate-[-72deg] items-start justify-start'>
              <div className='inline-flex rotate-[72deg]'>
                <StarIcon className='size-28 text-emerald-300' />
              </div>
            </div>
          </div>
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <div className='flex size-[550px] rotate-[20deg] items-start justify-start'>
              <div className='inline-flex rotate-[-20deg]'>
                <StarIcon className='size-12 text-emerald-300' />
              </div>
            </div>
          </div>
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <div className='flex size-[590px] rotate-[98deg] items-start justify-start'>
              <div className='inline-flex rotate-[-98deg]'>
                <StarIcon className='size-8 text-emerald-300' />
              </div>
            </div>
          </div>

          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <div className='flex size-[430px] rotate-[-14deg] items-start justify-start'>
              <div className='inline-flex rotate-[14deg]'>
                <SparkleIcon className='size-8 text-emerald-300/20' />
              </div>
            </div>
          </div>
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <div className='flex size-[440px] rotate-[79deg] items-start justify-start'>
              <div className='inline-flex rotate-[-79deg]'>
                <SparkleIcon className='size-5 text-emerald-300/20' />
              </div>
            </div>
          </div>
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <div className='flex size-[530px] rotate-[178deg] items-start justify-start'>
              <div className='inline-flex rotate-[-178deg]'>
                <SparkleIcon className='size-10 text-emerald-300/20' />
              </div>
            </div>
          </div>
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <div className='flex size-[710px] rotate-[144deg] items-start justify-start'>
              <div className='inline-flex rotate-[-144deg]'>
                <SparkleIcon className='size-14 text-emerald-300/20' />
              </div>
            </div>
          </div>

          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <div className='flex size-[720px] rotate-[85deg] items-start justify-start'>
              <div className='inline-flex rotate-[-85deg]'>
                <span className='inline-block size-3 rounded-full bg-emerald-300/20'></span>
              </div>
            </div>
          </div>
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <div className='flex size-[520px] rotate-[-41deg] items-start justify-start'>
              <div className='inline-flex rotate-[41deg]'>
                <span className='inline-block size-2 rounded-full bg-emerald-300/20'></span>
              </div>
            </div>
          </div>
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <div className='flex size-[650px] rotate-[-5deg] items-start justify-start'>
              <div className='inline-flex rotate-[5deg]'>
                <span className='inline-block size-2 rounded-full bg-emerald-300/20'></span>
              </div>
            </div>
          </div>
        </div>

        <div className='z-0 container mx-auto'>
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
              <span>👋</span>{' '}
              <span className='font-semibold'>Let's Connect</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
