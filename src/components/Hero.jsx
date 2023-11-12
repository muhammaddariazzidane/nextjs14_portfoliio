/* eslint-disable react/no-unescaped-entities */
'use client';

import {
  ArrowRight,
  Download,
  Files,
  GithubIcon,
  Linkedin,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip';
import LinkedinBtn from './elements/button/social/LinkedinBtn';
import GithubBtn from './elements/button/social/GithubBtn';
import Marquee from 'react-fast-marquee';
import CredentialCard from './elements/card/CredentialCard';
import WorksCard from './elements/card/WorksCard';
import { useLoadingStore } from '@/store/useLoadingStore';

export default function Hero() {
  const { loading, removeLoading } = useLoadingStore();

  return (
    <>
      <div className="flex w-full flex-wrap md:flex-nowrap items-center p-2 justify-center gap-8">
        <div className="shadow-md max-w-[14rem] md:max-w-lg sm:max-w-lg lg:max-w-lg bg-white dark:bg-slate-900 w-full  lg:max-h-48 md:max-h-48  md:flex-nowrap flex-wrap  flex relative items-center justify-center lg:p-5 md:p-5 sm:p-3 p-1 rounded-md ">
          <div className="max-w-[10rem] bg-gradient-to-b from-indigo-400 to-sky-700 overflow-hidden lg:mt-0 mt-3 h-full w-full rounded-tl-2xl rounded-br-2xl">
            <Image
              src="/foto.png"
              alt="foto.png"
              className={`h-full object-cover  hover:scale-110 transition-all duration-500 ${
                loading ? 'blur-xl' : 'blur-0'
              }`}
              width={250}
              height={0}
              loading="lazy"
              quality={100}
              onLoadingComplete={() => removeLoading()}
            />
          </div>
          <div className="lg:p-8 p-4">
            <h1 className="opacity-80 text-sm lg:text-base  sm:text-xs">
              A Front-end Web Developer
            </h1>
            <h1 className="font-semibold text-lg lg:text-xl sm:text-base lg:mb-1 ">
              Muhammad Dariaz Zidane
            </h1>
            <p className="text-sm sm:text-xs">
              I'am a Web Developer bassed in Karawang
            </p>
          </div>
          <Link href={'/'} className="absolute bottom-4 right-4">
            <ArrowRight />
          </Link>
        </div>
        <div className="flex w-full flex-col gap-5">
          <div className=" w-full bg-white text-black dark:text-white dark:bg-slate-900 shadow-md rounded-full text-sm items-center">
            <Marquee
              autoFill={true}
              pauseOnHover={true}
              speed={30}
              className="rounded-full p-1 font-medium tracking-wide"
            >
              I'm Available for Freelance Work .
            </Marquee>
          </div>
          <div className="flex w-full max-h-48 justify-center gap-4 lg:gap-7">
            <CredentialCard />
            <WorksCard />
          </div>
        </div>
      </div>
      <div className="mt-4 w-full flex flex-wrap justify-between gap-4 p-2">
        <div className="sm:max-w-[20%] bg-white dark:bg-slate-900 shadow-md overflow-hidden md:max-w-[20%] lg:max-w-[20%] w-full  p-5 relative rounded-md">
          <div className="max-h-12 h-full  flex items-center justify-center gap-3">
            <div className="p-2 rounded-full bg-red-700 text-white ">
              <Files />
            </div>
          </div>
          <div className="mt-2">
            <p className=" text-xs opacity-80">My CV</p>
            <div className="flex justify-between">
              <h1 className="text-base font-semibold">Download</h1>
              <Link href={'/'} className="">
                <Download />{' '}
              </Link>
            </div>
          </div>
        </div>
        <div className="sm:max-w-[50%] bg-white dark:bg-slate-900 shadow-md overflow-hidden md:max-w-[50%] lg:max-w-[51%] w-full  p-5 relative rounded-md">
          <div className="max-h-12 h-full  flex items-center justify-center gap-3">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button size="icon" className="rounded-full" variant="ghost">
                    <Image
                      src="/icons/nextjs.png"
                      alt="/"
                      width={100}
                      height={100}
                    />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Next.js</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    size="icon"
                    className="hover:bg-transparent"
                    variant="ghost"
                  >
                    <Image
                      src="/icons/Tailwind.svg"
                      alt="/"
                      width={100}
                      height={100}
                    />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Tailwind CSS</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    size="icon"
                    className="hover:bg-transparent"
                    variant="ghost"
                  >
                    <Image
                      src="/icons/zustand.png"
                      alt="/"
                      width={100}
                      height={100}
                    />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Zustand</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    size="icon"
                    className="hover:bg-transparent"
                    variant="ghost"
                  >
                    <Image
                      src="/icons/mongodb.png"
                      alt="/"
                      width={100}
                      height={100}
                    />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Mongo DB</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="hover:bg-transparent"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 256"
                      className="h-8 w-8 rounded-sm text-white "
                    >
                      <rect width="256" height="256" fill="black"></rect>
                      <line
                        x1="208"
                        y1="128"
                        x2="128"
                        y2="208"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"
                      ></line>
                      <line
                        x1="192"
                        y1="40"
                        x2="40"
                        y2="192"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"
                      ></line>
                    </svg>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Shadcn-UI</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div className="mt-2">
            <p className=" text-xs opacity-80">Skills</p>
            <div className="flex justify-between">
              <h1 className="text-base font-semibold">Tech Stack</h1>
              <Link href={'/skills'}>
                <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
        <div className="sm:max-w-[20%] bg-white dark:bg-slate-900 shadow-md overflow-hidden md:max-w-[20%] lg:max-w-[20%] w-full  p-5 relative rounded-md">
          <div className="max-h-12 h-full  flex items-center justify-center gap-3">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <LinkedinBtn
                    Button={Button}
                    Link={Link}
                    Linkedin={Linkedin}
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Linkedin</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <GithubBtn
                    Button={Button}
                    Link={Link}
                    GithubIcon={GithubIcon}
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Github</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div className="mt-2">
            <p className=" text-xs opacity-80">Start with Me</p>
            <div className="flex justify-between">
              <h1 className="text-base font-semibold">Profiles</h1>
              <Link href={'/about'}>
                <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
