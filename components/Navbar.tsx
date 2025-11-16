import Link from 'next/link';
import { JSX } from 'react';

export default function Navbar(): JSX.Element {
  return (
    <nav className='absolute top-3 left-1/2 z-50 -translate-x-1/2'>
      <ul className='flex items-center justify-center gap-1 rounded-full border border-white/15 bg-white/10 p-0.5 backdrop-blur'>
        <li className='nav-item'>
          <Link href='#'>Home</Link>
        </li>
        <li className='nav-item'>
          <Link href='#'>Projects</Link>
        </li>
        <li className='nav-item'>
          <Link href='#'>About</Link>
        </li>
        <li className='nav-item | bg-white text-gray-900 hover:bg-white/70'>
          <Link href='#'>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
