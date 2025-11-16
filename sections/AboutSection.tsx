import Image from 'next/image';
import { JSX } from 'react';
import { Card, CardHeader, SectionHeader, TechIcon } from '@/components';
import bookImage from '@/assets/images/book-cover.png';
import mapImage from '@/assets/images/map.png';
import smileyMemoji from '@/assets/images/memoji-smile.png';
import {
  ChromeIcon,
  CssIcon,
  GithubIcon,
  HtmlIcon,
  JavaScriptIcon,
  ReactIcon,
} from '@/components/icons';

const toolBoxItems: { icon: React.ElementType; title: string }[] = [
  {
    icon: JavaScriptIcon,
    title: 'JavaScript',
  },
  {
    icon: HtmlIcon,
    title: 'HTML5',
  },
  {
    icon: CssIcon,
    title: 'CSS3',
  },
  {
    icon: ReactIcon,
    title: 'ReactJS',
  },
  {
    icon: ChromeIcon,
    title: 'Chrome',
  },
  {
    icon: GithubIcon,
    title: 'GitHub',
  },
];

const hobbies: { emoji: string; title: string }[] = [
  {
    emoji: '🎨',
    title: 'Painting',
  },
  {
    emoji: '📸',
    title: 'Photography',
  },
  {
    emoji: '🎮',
    title: 'Gaming',
  },
  {
    emoji: '🥾',
    title: 'Hiking',
  },
  {
    emoji: '🎵',
    title: 'Music',
  },
  {
    emoji: '🏋️‍♂️',
    title: 'Fitness',
  },
  {
    emoji: '📚',
    title: 'Reading',
  },
];

const AboutSection = (): JSX.Element => {
  return (
    <section id='about-section' className='py-20'>
      <div className='container mx-auto p-4 md:p-8'>
        <SectionHeader
          eyebrow='About Me'
          title='A Glimpse Into My World '
          description='Learn more about who I am, what I do and what inspires me.'
        />
        <div className='mt-20'>
          <Card>
            <div className='h-[320px] p-6'>
              <CardHeader
                title='My Reads'
                description='Explore the books shaping my perspectives.'
              />
              <div className='mx-auto mt-8 w-40'>
                <Image src={bookImage} alt='Book Cover' />
              </div>
            </div>
          </Card>

          <Card>
            <div className='p-6'>
              <CardHeader
                title='My ToolBox'
                description='Explore the technologies and tools I use to craft exceptional
                  digital experiences.'
              />
              <div>
                {toolBoxItems.map((item, index) => (
                  <div
                    key={index}
                    className='inline-flex items-center gap-4 rounded-lg px-3 py-2 outline-2 outline-white/10'
                  >
                    <TechIcon icon={item.icon} />
                    <span>{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          <Card>
            <div className='p-6'>
              <CardHeader
                title='Beyond the Code'
                description='Explore my interests and hobbies beyond the digital realm'
              />
              <div>
                {hobbies.map((hobby, index) => (
                  <div key={index}>
                    <span>{hobby.title}</span>
                    <span>{hobby.emoji}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          <Card>
            <div className='p-6'>
              <Image src={mapImage} alt='Map Image' />
              <Image src={smileyMemoji} alt='Smiley Memoji' />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
