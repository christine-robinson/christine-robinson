import Image from 'next/image';
import Link from 'next/link';
import darkSaasLandingPage from '@/assets/images/dark-saas-landing-page.png';
import lightSaasLandingPage from '@/assets/images/light-saas-landing-page.png';
import aiStartupLandingPage from '@/assets/images/ai-startup-landing-page.png';
import { JSX } from 'react';
import { Card, SectionHeader } from '@/components';
import { ArrowUpRightIcon, CheckCircleIcon } from '@/components/icons';

const portfolioProjects = [
  {
    company: 'Acme Corp',
    year: '2022',
    title: 'Dark Saas Landing Page',
    results: [
      { title: 'Enhanced user experience by 40%' },
      { title: 'Improved site speed by 50%' },
      { title: 'Increased mobile traffic by 35%' },
    ],
    link: 'https://youtu.be/4k7IdSLxh6w',
    image: darkSaasLandingPage,
  },
  {
    company: 'Innovative Co',
    year: '2021',
    title: 'Light Saas Landing Page',
    results: [
      { title: 'Boosted sales by 20%' },
      { title: 'Expanded customer reach by 35%' },
      { title: 'Increased brand awareness by 15%' },
    ],
    link: 'https://youtu.be/7hi5zwO75yc',
    image: lightSaasLandingPage,
  },
  {
    company: 'Quantum Dynamics',
    year: '2023',
    title: 'AI Startup Landing Page',
    results: [
      { title: 'Enhanced user experience by 40%' },
      { title: 'Improved site speed by 50%' },
      { title: 'Increased mobile traffic by 35%' },
    ],
    link: 'https://youtu.be/Z7I5uSRHMHg',
    image: aiStartupLandingPage,
  },
];

const ProjectSection = (): JSX.Element => {
  return (
    <section id='projects-section' className='pb-16 lg:py-24'>
      <div className='container mx-auto p-4 md:p-8'>
        <SectionHeader
          eyebrow='Real-world Results'
          title='Featured Projects'
          description='See how I transformed concepts into engaging digital experiences.'
        />

        <div className='mt-10 flex flex-col gap-20 md:mt-20'>
          {portfolioProjects.map((project, index) => (
            <Card key={index}>
              <div className='px-8 pt-8 md:px-10 md:pt-12 lg:px-20 lg:pt-16'>
                <div className='lg:grid lg:grid-cols-2 lg:gap-16'>
                  <div className='lg:pb-16'>
                    <div className='inline-flex gap-2 bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-sm font-bold tracking-widest text-transparent uppercase'>
                      <span>{project.company}</span>
                      <span>&bull;</span>
                      <span>{project.year}</span>
                    </div>
                    <h3 className='mt-2 font-serif text-2xl md:mt-5 md:text-4xl'>
                      {project.title}
                    </h3>
                    <hr className='mt-4 border-t-2 border-white/5 md:mt-5' />
                    <ul className='mt-4 flex flex-col gap-4 md:mt-5'>
                      {project.results.map((result, index) => (
                        <li
                          key={index}
                          className='flex gap-2 text-sm text-white/50 md:text-base'
                        >
                          <CheckCircleIcon className='size-5 md:size-6' />
                          <span>{result.title}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={project.link}
                      target='_blank'
                      className='mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-white px-6 font-semibold text-gray-950 md:w-auto'
                    >
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className='size-4' />
                    </Link>
                  </div>
                  <div className='lg:relative'>
                    <Image
                      src={project.image}
                      alt={project.title}
                      className='mt-8 -mb-4 md:-mb-0 lg:absolute lg:mt-0 lg:h-full lg:w-auto lg:max-w-none'
                    />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
