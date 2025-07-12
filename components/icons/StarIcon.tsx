import { JSX, SVGProps } from 'react';

const StarIcon = (props: SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='currentColor'
      xmlns='http://www.w3.org/2000/svg'
      {...props} // ✅ Correct JSX prop spreading
    >
      <path d='M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z' />
    </svg>
  );
};

export default StarIcon;
