import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import '../globals.css';
import { Providers } from './providers';
import Header from '@/components/Header';
import Template from './template';
import BottomBar from '@/components/BottomBar';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '800'] });

export const metadata: Metadata = {
    title: "AishDev Portfolio",
    description:
      "Full Stack Developer & Life Enthusiast: I’m the guy who’s been diving into code for over 3 years, playing around with cool stuff like MERN and MEAN.",
    openGraph: {
      title: "AishDev Portfolio",
      siteName: "AishDev Portfolio",
      url: "https://sdeaishdev.vercel.app",
      type: "website",
      description:
        "Full Stack Developer & Life Enthusiast: I’m the guy who’s been diving into code for over 3 years, playing around with cool stuff like MERN and MEAN.",
      images: [
        {
          url: "https://res.cloudinary.com/dw9sg2gdi/image/upload/v1725391417/logo_xro4h6.png",
          alt: "Portfolio logo",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "AishDev Portfolio",
      description:
        "Full Stack Developer & Life Enthusiast: I’m the guy who’s been diving into code for over 3 years, playing around with cool stuff like MERN and MEAN.",
      images: [
        {
          url: "https://res.cloudinary.com/dw9sg2gdi/image/upload/v1725391417/logo_xro4h6.png",
          alt: "Portfolio logo",
        },
      ],
    },
  };

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={`${poppins.className} relative`}>
                <Providers>
                    <Header />
                    <Template>{children}</Template>
                    <BottomBar />
                </Providers>
            </body>
        </html>
    );
}
