import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/providers/ThemeProvider';
import Navbar from '@/components/Navbar';
import NextTopLoader from 'nextjs-toploader';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Muhammad Dariaz Zidane',
  description: 'Website Portfolio Muhammad Dariaz Zidane',
  manifest: '/manifest.json',
  icons: {
    apple: './favicon.ico',
  },
  generator: 'muhammaddariazzidane.vercel.app',
  applicationName: 'Muhammad Dariaz Zidane',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Muhammad Dariaz Zidane',
    'Website Portfolio Muhammad Dariaz Zidane',
    'Zidane Karawang',
    'Muhammad Dariaz Zidane Front-end Web Developer',
  ],
  authors: [
    { name: 'Muhammad Dariaz Zidane' },
    { name: 'Muhammad Dariaz Zidane', url: 'muhammaddariazzidane.vercel.app' },
  ],
  creator: 'Muhammad Dariaz Zidane',
  publisher: 'Muhammad Dariaz Zidane',
  formatDetection: {
    email: 'dariazzidane@gmail.com',
    address: 'Karawang, Indonesia',
    telephone: '081410796285',
  },
  openGraph: {
    title: 'Muhammad Dariaz Zidane',
    description: 'Website Portfolio Muhammad Dariaz Zidane',
    url: 'muhammaddariazzidane.vercel.app',
    siteName: 'Muhammad Dariaz Zidane',
    images: [
      {
        url: 'muhammaddariazzidane.vercel.app/foto.png',
        width: 800,
        height: 600,
        alt: 'My Profile',
      },
    ],
    locale: 'ID',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="aF4ihEsE4A8bNCGHuOXXJ6yJ2WagzEJiq0Bu-VV_ICs"
        />
      </head>
      <body className={inter.className}>
        <NextTopLoader />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="max-w-5xl w-full mx-auto px-5 ">
            {children}
            <Toaster />
          </main>
          <div className="mx-auto ma-w-3xl mt-16 text-center">
            <h1 className=" font-semibold text-primary">Zidane</h1>
            <p className="text-sm my-3">
              © All rights reserved by
              <span className="text-blue-600"> Muhammad Dariaz Zidane</span>
            </p>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
