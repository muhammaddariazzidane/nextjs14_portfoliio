import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function CredentialCard() {
  return (
    <div className="w-full bg-white dark:bg-slate-900 shadow-md overflow-hidden  p-5 rounded-md">
      <div className="max-h-20 h-full rounded-md">
        <Image
          src="/certificate/react-expert.png"
          alt="certificate_thumb.png"
          className="h-full object-contain z-50 rounded-md p-2 transition-all duration-500"
          width={500}
          height={500}
          quality={100}
          loading="lazy"
        />
      </div>
      <div className="mt-2">
        <p className="text-xs opacity-80">Certification</p>
        <div className="flex justify-between">
          <h1 className="text-base font-semibold">Credentials</h1>
          <Link href={'/credentials'}>
            <ArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
