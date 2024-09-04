import Socials from '@/components/Socials';
import { LampContainer } from '@/components/UI/Lamp';
import { about } from '@/utils/data';
import { Link } from '@nextui-org/react';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "AishDev Portfolio | Contact",
  openGraph: {
    title: "AishDev Portfolio | Contact",
    url: "https://sdeaishdev.vercel.app",
    images: [
      {
        url: "https://res.cloudinary.com/dw9sg2gdi/image/upload/v1725391417/logo_xro4h6.png",
        alt: "portfolio-logo",
      },
    ],
  },
  twitter: {
    title: "AishDev Portfolio | Contact",
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
        <>
            <LampContainer>
                <div className='container text-center'>
                    <h2 className='text-sm md:text-lg mb-4'>Contact me at</h2>
                    <Link
                        href={`mailto:${about.details.email}`}
                        className='text-2xl md:text-4xl lg:text-7xl font-semibold text-gray-200 underline lg:mb-6'
                    >
                        {about.details.email}
                    </Link>
                    <Socials emailShow={false} />
                </div>
            </LampContainer>
        </>
    );
};

export default Page;
