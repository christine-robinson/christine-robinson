import { JSX, PropsWithChildren } from 'react';

const Card = ({ children }: PropsWithChildren): JSX.Element => {
  return (
    <div className='relative z-0 overflow-hidden rounded-3xl border-2 border-white/20 bg-gray-800'>
      <div className='grain-image | absolute inset-0 -z-10 opacity-5'></div>
      {children}
    </div>
  );
};

export default Card;
