'use client';

import GithubBtn from '@/components/elements/button/social/GithubBtn';
import InstagramBtn from '@/components/elements/button/social/InstagramBtn';
import LinkedinBtn from '@/components/elements/button/social/LinkedinBtn';
import TiktokBtn from '@/components/elements/button/social/TiktokBtn';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { GithubIcon, Instagram, Linkedin } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { useLoadingStore } from '@/store/useLoadingStore';

export default function ProfileCard() {
  const { loading, removeLoading } = useLoadingStore();
  return (
    <div className=" min-h-[27rem] lg:w-[40%] md:w-[24rem] sm:w-1/2 w-[16rem] bg-white dark:bg-slate-950 dark:border shadow-md p-4 rounded-xl ">
      <div className="mx-auto  max-w-[15rem]  h-full w-full  rounded-xl bg-gradient-to-b from-indigo-400 to-sky-700 overflow-hidden">
        <Image
          src="/foto.png"
          alt="foto.png"
          className={`h-full object-cover hover:scale-110 transition-all duration-500 ${
            loading ? 'blur-xl' : 'blur-0'
          }`}
          width={250}
          height={0}
          loading="lazy"
          quality={100}
          onLoadingComplete={() => removeLoading()}
        />
      </div>
      <h1 className="text-center text-base lg:text-lg md:text-lg sm:text-lg mt-3">
        Muhammad Dariaz Zidane
      </h1>
      <p className="text-sm opacity-80 text-center mt-1">@dzm416</p>
      <div className="flex justify-center space-x-4 my-6">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <InstagramBtn Button={Button} Link={Link} Instagram={Instagram} />
            </TooltipTrigger>
            <TooltipContent>
              <p>Instagram</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <LinkedinBtn Button={Button} Link={Link} Linkedin={Linkedin} />
            </TooltipTrigger>
            <TooltipContent>
              <p>Instagram</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <GithubBtn Button={Button} Link={Link} GithubIcon={GithubIcon} />
            </TooltipTrigger>
            <TooltipContent>
              <p>Github</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <TiktokBtn Button={Button} Link={Link} Icon={FaTiktok} />
            </TooltipTrigger>
            <TooltipContent>
              <p>Tiktok</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <Button className="w-full my-1 rounded-xl bg-indigo-600 text-white dark:text-white hover:bg-indigo-700 transition-colors duration-500">
        <Link href={'contact'}>Contact Me</Link>
      </Button>
    </div>
  );
}
