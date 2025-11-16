import { JSX } from 'react';
import { StarIcon } from './icons';

const CardHeader = ({
  title,
  description,
}: {
  title: string;
  description: string;
}): JSX.Element => {
  return (
    <div className='flex flex-col'>
      <div className='flex items-center gap-2'>
        <StarIcon className='size-9 text-emerald-300' />
        <h3 className='font-serif text-3xl'>{title}</h3>
      </div>
      <p className='mt-2 text-sm text-white/60'>{description}</p>
    </div>
  );
};

export default CardHeader;
