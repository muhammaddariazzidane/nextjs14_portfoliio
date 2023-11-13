'use client';

import dynamic from 'next/dynamic';
const ModeToggle = dynamic(() =>
  import('@/components/elements/button/ModeToggle')
);
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const pathname = usePathname();

  return (
    <>
      <div
        className={`w-full sticky top-0 left-0 right-0 backdrop-blur-md z-50 border-b`}
      >
        <div className="flex py-2 items-center justify-between mx-auto max-w-5xl  px-5">
          <div>
            <a href="/" className="text-primary">
              <h1 className="lg:text-lg text-base font-semibold tracking-tight">
                Muhammad Dariaz Zidane{' '}
              </h1>
            </a>
          </div>
          <div className="w-full max-w-md font-medium space-x-12 hidden lg:flex md:flex sm:flex justify-center items-center">
            <Link href={'/'}>
              <h1
                className={`transition-colors hover:text-foreground/80 text-foreground/90 
                ${
                  pathname === '/'
                    ? 'text-indigo-500 hover:text-indigo-400'
                    : 'hover:text-foreground/80 text-foreground/90'
                }`}
              >
                Home
              </h1>
            </Link>
            <Link href={'/about'}>
              <h1
                className={`transition-colors ${
                  pathname === '/about'
                    ? 'text-indigo-500 hover:text-indigo-400'
                    : 'hover:text-foreground/80 text-foreground/90'
                }`}
              >
                About
              </h1>
            </Link>
            <Link href={'/works'}>
              <h1
                className={`transition-colors ${
                  pathname === '/works'
                    ? 'text-indigo-500 hover:text-indigo-400'
                    : 'hover:text-foreground/80 text-foreground/90'
                }`}
              >
                Works
              </h1>
            </Link>
            <Link href={'/contact'}>
              <h1
                className={`transition-colors ${
                  pathname === '/contact'
                    ? 'text-indigo-500 hover:text-indigo-400'
                    : 'hover:text-foreground/80 text-foreground/90'
                }`}
              >
                Contact
              </h1>
            </Link>
          </div>

          <div className="flex">
            <ModeToggle />
            <Button
              onClick={toggleMenu}
              variant="ghost"
              className="focus-visible:ring-offset-0  focus-visible:ring-0 lg:hidden md:hidden sm:hidden inline-flex"
              size="icon"
            >
              {isOpen ? <X /> : <Menu />}
            </Button>
          </div>
          {/*  */}
        </div>
      </div>
      <div
        className={`w-full lg:hidden md:hidden sm:hidden transition-all duration-500 ${
          isOpen ? 'translate-y-0' : '-translate-y-[110%] opacity-0'
        }  z-30 min-h-[16rem] h-full fixed backdrop-blur-md top-14 left-0 right-0 border-b `}
      >
        <div className="py-4 w-full flex flex-col space-y-6 px-5 ">
          <Link onClick={() => setIsOpen(false)} href={'/'}>
            <h1
              className={`transition-colors ${
                pathname === '/'
                  ? 'text-indigo-500 hover:text-indigo-400'
                  : 'hover:text-foreground/80 text-foreground'
              }`}
            >
              Home
            </h1>
          </Link>
          <Link onClick={() => setIsOpen(false)} href={'/about'}>
            <h1
              className={`transition-colors ${
                pathname === '/about'
                  ? 'text-indigo-500 hover:text-indigo-400'
                  : 'hover:text-foreground/80 text-foreground'
              }`}
            >
              About
            </h1>
          </Link>
          <Link onClick={() => setIsOpen(false)} href={'/works'}>
            <h1
              className={`transition-colors ${
                pathname === '/works'
                  ? 'text-indigo-500 hover:text-indigo-400'
                  : 'hover:text-foreground/80 text-foreground'
              }`}
            >
              Works
            </h1>
          </Link>
          <Link onClick={() => setIsOpen(false)} href={'/contact'}>
            <h1
              className={`transition-colors ${
                pathname === '/contact'
                  ? 'text-indigo-500 hover:text-indigo-400'
                  : 'hover:text-foreground/80 text-foreground'
              }`}
            >
              Contact
            </h1>
          </Link>
        </div>
      </div>
    </>
  );
}
