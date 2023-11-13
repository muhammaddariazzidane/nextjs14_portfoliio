import ExperienceCard from '@/components/elements/card/ExperienceCard';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import skills from '@/services/skills';
import { SiExpress } from 'react-icons/si';

export default function page() {
  return (
    <>
      <h1 className="mt-5 mb-5 font-semibold lg:text-lg text-base">
        My Skills & Experience
      </h1>
      <div className="flex justify-center flex-wrap lg:flex-nowrap md:flex-nowrap sm:flex-nowrap gap-6  mt-6">
        <div className=" w-full lg:max-w-[1/2] lg:border-none md:border-none sm:border-none border-b h-full">
          <div className="grid lg:grid-cols-7 md:grid-cols-6 sm:grid-cols-5 grid-cols-6 gap-6 mb-5">
            {skills?.map((item) => (
              <Button
                key={item.id}
                size="icon"
                className={`hover:bg-transparent my-1 ${
                  item.title === 'Adonis.js'
                    ? 'bg-white hover:bg-white rounded-full'
                    : null
                }`}
                variant="ghost"
              >
                {item.title === 'Shadcn UI' ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    className="h-8 w-8 rounded-sm text-white"
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
                ) : item.title === 'Express.js' ? (
                  <>
                    <SiExpress size={36} />
                  </>
                ) : (
                  <Image
                    src={`/${item.image}`}
                    alt="/"
                    width={500}
                    height={500}
                    quality={100}
                    loading="lazy"
                    className={`${
                      item.title === 'Chakra UI' ? 'rounded-full' : null
                    }`}
                  />
                )}
              </Button>
            ))}
          </div>
        </div>
        <div className="w-full lg:max-w-[1/2] ">
          <ExperienceCard />
        </div>
      </div>
    </>
  );
}
