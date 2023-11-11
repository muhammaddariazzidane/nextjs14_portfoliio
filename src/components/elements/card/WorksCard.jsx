import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function WorksCard() {
  return (
    <div className="w-full bg-white dark:bg-slate-900 shadow-md overflow-hidden  p-5  relative rounded-md">
      <div className="absolute top-4 left-0 right-0 uppercase font-semibold text-base lg:text-xl text-center">
        <h1 className="text-transparent bg-gradient-to-b from-gray-800 dark:from-white to-white dark:to-gray-800 bg-clip-text">
          My Works
        </h1>
      </div>
      <div className="max-h-20 h-full  relative z-10   rounded-md">
        <Image
          src="/thumb_projects.png"
          alt="foto.png"
          className="h-full object-contain  rounded-md p-2 transition-all duration-500"
          width={250}
          height={0}
        />
      </div>
      <div className="mt-2">
        <p className=" text-xs opacity-80">Showcase</p>
        <div className="flex justify-between">
          <h1 className="text-base font-semibold">Portfolios</h1>
          <Link href={'/'}>
            <ArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
