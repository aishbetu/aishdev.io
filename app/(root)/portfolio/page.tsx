import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/utils/data';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "AishDev Portfolio | Portfolio",
    openGraph: {
      title: "AishDev Portfolio | Portfolio",
      url: "https://sdeaishdev.vercel.app/portfolio",
      images: [
        {
          url: "https://res.cloudinary.com/dw9sg2gdi/image/upload/v1725391417/logo_xro4h6.png",
          alt: "portfolio-logo",
        },
      ],
    },
    twitter: {
      title: "AishDev Portfolio | Portfolio",
      images: [
        {
          url: "https://res.cloudinary.com/dw9sg2gdi/image/upload/v1725391417/logo_xro4h6.png",
          alt: "portfolio-logo",
        },
      ],
    },
  };

const Page = () => {
    return (
        <main
            className={
                'relative h-full py-6 flex items-center bg-white dark:bg-black justify-center w-full group'
            }
        >
            <div className='absolute inset-0 bg-dot-thick-neutral-300 dark:bg-dot-thick-neutral-800 pointer-events-none' />
            <div className='z-20 container'>
                <h1 className='uppercase text-4xl md:text-5xl lg:text-7xl text-center font-bold mb-4'>
                    My <span className='text-[#FF4B2B]'>Works</span>
                </h1>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                    {projects.reverse().map((project) => (
                        <ProjectCard key={project.projectName} data={project} />
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Page;
