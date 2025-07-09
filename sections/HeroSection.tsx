import { JSX } from 'react';
import Image from 'next/image';
import memojiImage from '@/assets/images/memoji-computer.png';
import arrowDownIcon from '@/assets/icons/arrow-down.svg';

export default function HeroSection(): JSX.Element {
  return (
    <section id="hero" className="container mx-auto py-32">
      <div className="flex flex-col items-center">
        <Image
          src={memojiImage}
          className="size-[100px]"
          alt="Person peeking behind laptop"
        />
        <div className="flex items-center gap-4 rounded-lg border border-gray-800 bg-gray-950 px-4 py-1.5">
          <span className="size-2.5 rounded-full bg-green-500"></span>
          <p className="text-sm font-medium">Available for new projects!</p>
        </div>
      </div>
      <h1 className="mt-8 text-center font-serif text-3xl tracking-wide">
        Building Exceptional User Experiences
      </h1>
      <p className="mt-4 text-center text-white/60">
        I specialize in transforming designs into functional, high-performing
        web applications. Let's discuss your next project.
      </p>
      <div className="mt-8 flex flex-col items-center gap-4">
        <button className="flex h-12 items-center gap-2 rounded-xl border border-white/15 px-6">
          <span className="font-semibold">Explore My Work</span>
          <Image src={arrowDownIcon} alt="Arrow down" className="size-4" />
        </button>
        <button className="flex h-12 items-center gap-2 rounded-xl border border-white bg-white px-4 text-gray-900">
          <span>👋</span> <span className="font-semibold">Let's Connect</span>
        </button>
      </div>
    </section>
  );
}
