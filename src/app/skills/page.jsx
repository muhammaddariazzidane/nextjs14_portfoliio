import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import Image from 'next/image';

export default function page() {
  return (
    <div className="mt-7  place-items-center grid lg:grid-cols-7 md:grid-cols-4 sm:grid-cols-4 grid-cols-4 gap-x-2 gap-y-4">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="icon"
              className="rounded-full hover:bg-transparent"
              variant="ghost"
            >
              <Image src="/icons/html.svg" alt="/" width={500} height={500} />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>HTML 5</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="icon"
              className="rounded-full hover:bg-transparent"
              variant="ghost"
            >
              <Image src="/icons/Css.svg" alt="/" width={500} height={500} />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>CSS 3</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="icon"
              className="rounded-full hover:bg-transparent"
              variant="ghost"
            >
              <Image src="/icons/js.svg" alt="/" width={500} height={500} />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Javascript</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="icon"
              className="rounded-full hover:bg-transparent"
              variant="ghost"
            >
              <Image src="/icons/Php.svg" alt="/" width={500} height={500} />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>PHP</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="icon"
              className="rounded-full hover:bg-transparent"
              variant="ghost"
            >
              <Image src="/icons/Py.svg" alt="/" width={500} height={500} />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Python</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="icon"
              className="rounded-full hover:bg-transparent"
              variant="ghost"
            >
              <Image
                src="/icons/Bootstrap.svg"
                alt="/"
                width={500}
                height={500}
              />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Bootstrap 5</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="icon"
              className="rounded-full hover:bg-transparent"
              variant="ghost"
            >
              <Image
                src="/icons/tailwind.svg"
                alt="/"
                width={500}
                height={500}
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
              className="rounded-full hover:bg-transparent"
              variant="ghost"
            >
              <Image
                src="/icons/daisyui.svg"
                alt="/"
                width={500}
                height={500}
              />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Daisy UI</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="icon"
              className="rounded-full hover:bg-transparent"
              variant="ghost"
            >
              <Image
                src="/icons/chakraui.png"
                alt="/"
                width={500}
                height={500}
                className="rounded-full hover:bg-transparent"
              />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Chakra UI</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="icon"
              className="rounded-full hover:bg-transparent"
              variant="ghost"
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
            <p>Shadcn UI</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="icon"
              className="rounded-full hover:bg-transparent"
              variant="ghost"
            >
              <Image src="/icons/react.svg" alt="/" width={500} height={500} />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>React.js</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="icon"
              className="rounded-full hover:bg-transparent"
              variant="ghost"
            >
              <Image src="/icons/nextjs.png" alt="/" width={500} height={500} />
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
              className="rounded-full hover:bg-transparent"
              variant="ghost"
            >
              <Image
                src="/icons/expressjs.png"
                alt="/"
                width={500}
                height={500}
              />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Express.js</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="icon"
              className="rounded-full hover:bg-transparent"
              variant="ghost"
            >
              <Image src="/icons/hapijs.png" alt="/" width={500} height={500} />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Hapi</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="icon"
              className="rounded-full hover:bg-transparent"
              variant="ghost"
            >
              <Image src="/icons/flask.webp" alt="/" width={500} height={500} />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Flask</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="icon"
              className="rounded-full hover:bg-transparent"
              variant="ghost"
            >
              <Image
                src="/icons/laravel.svg"
                alt="/"
                width={500}
                height={500}
              />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Laravel</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="icon"
              className="rounded-full hover:bg-transparent"
              variant="ghost"
            >
              <Image src="/icons/ci.webp" alt="/" width={500} height={500} />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Codeigniter</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="icon"
              className="rounded-full hover:bg-transparent"
              variant="ghost"
            >
              <Image
                src="/icons/laravel.svg"
                alt="/"
                width={500}
                height={500}
              />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Laravel</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="icon"
              className="rounded-full hover:bg-transparent"
              variant="ghost"
            >
              <Image
                src="/icons/laravel.svg"
                alt="/"
                width={500}
                height={500}
              />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Laravel</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="icon"
              className="rounded-full hover:bg-transparent"
              variant="ghost"
            >
              <Image
                src="/icons/laravel.svg"
                alt="/"
                width={500}
                height={500}
              />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Laravel</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="icon"
              className="rounded-full hover:bg-transparent"
              variant="ghost"
            >
              <Image
                src="/icons/laravel.svg"
                alt="/"
                width={500}
                height={500}
              />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Laravel</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="icon"
              className="rounded-full hover:bg-transparent"
              variant="ghost"
            >
              <Image
                src="/icons/laravel.svg"
                alt="/"
                width={500}
                height={500}
              />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Laravel</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
