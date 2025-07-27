import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Inter } from 'next/font/google';
import Starfield from '@/components/starfield';
import RocketShip from '@/components/rocket-ship';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'Vinish V | Professional Portfolio',
  description: 'Electronics and Communication Engineering student with practical experience in computer vision and full-stack web development.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-body antialiased`}>
        <Starfield />
        <RocketShip />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
