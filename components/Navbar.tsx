import { JSX } from 'react';

export default function Navbar(): JSX.Element {
  return (
    <nav className='absolute top-3 left-1/2 -translate-x-1/2'>
      <ul className='flex items-center justify-center gap-1 rounded-full border border-white/15 bg-white/10 p-0.5 backdrop-blur'>
        <li className='nav-item'>
          <a href='#'>Home</a>
        </li>
        <li className='nav-item'>
          <a href='#'>Projects</a>
        </li>
        <li className='nav-item'>
          <a href='#'>About</a>
        </li>
        <li className='nav-item bg-white text-gray-900 hover:bg-white/70'>
          <a href='#'>Contact</a>
        </li>
      </ul>
    </nav>
  );
}
