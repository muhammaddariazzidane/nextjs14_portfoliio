import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { GithubIcon, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';
import GithubBtn from '@/components/elements/button/social/GithubBtn';
import InstagramBtn from '@/components/elements/button/social/InstagramBtn';
import LinkedinBtn from '@/components/elements/button/social/LinkedinBtn';

export default function SocialInfo() {
  return (
    <div className="flex space-x-5 ">
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
            <GithubBtn Button={Button} Link={Link} GithubIcon={GithubIcon} />
          </TooltipTrigger>
          <TooltipContent>
            <p>Github</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <LinkedinBtn Button={Button} Link={Link} Linkedin={Linkedin} />
          </TooltipTrigger>
          <TooltipContent>
            <p>Linkedin</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
