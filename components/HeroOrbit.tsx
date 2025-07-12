import { JSX } from 'react';
import { StarIcon, SparkleIcon } from '@/components/icons';

const HeroOrbit = (): JSX.Element => {
  return (
    <>
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
    </>
  );
};

export default HeroOrbit;
