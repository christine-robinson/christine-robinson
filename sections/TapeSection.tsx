import { JSX } from 'react';
import { StarIcon } from '@/components/icons';

const words: string[] = [
  'Performant',
  'Accessible',
  'Secure',
  'Interactive',
  'Scalable',
  'Use Friendly',
  'Responsible',
  'Maintainable',
  'Search Optimized',
  'Usable',
  'Reliable',
];

const TapeSection = (): JSX.Element => {
  return (
    <section id='tape-section' className='overflow-x-clip py-16 lg:py-24'>
      <div className='-mx-1 -rotate-3 bg-gradient-to-r from-emerald-300 to-sky-400'>
        <div className='flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]'>
          <div className='flex flex-none gap-4 py-3'>
            {words.map((word, index) => (
              <div
                key={index}
                className='inline-flex items-center gap-4 text-gray-900'
              >
                <span className='text-sm font-extrabold uppercase'>{word}</span>
                <StarIcon className='size-6 -rotate-12' />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TapeSection;
