import type { Metadata } from 'next';
import { Inter, Calistoga } from 'next/font/google';
import './globals.css';
import { NextFontWithVariable } from 'next/dist/compiled/@next/font';

const inter: NextFontWithVariable = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});
const calistoga: NextFontWithVariable = Calistoga({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'Christine Robinson S',
  description: 'Portfolio Web Application for Christine Robinson',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-gray-900 text-white ${inter.variable} ${calistoga.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
