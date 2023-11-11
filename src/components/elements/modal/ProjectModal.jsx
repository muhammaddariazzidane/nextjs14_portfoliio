import { Button } from '@/components/ui/button';
import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink, GithubIcon, X } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import GithubBtn from '@/components/elements/button/social/GithubBtn';
import Link from 'next/link';

export default function ProjectModal(props) {
  const { selectedProject, removeSelectedId, loading, removeLoading } = props;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed z-50 inset-0 flex items-center justify-center backdrop-blur-sm"
      >
        <div className="mx-4">
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            layoutId={selectedProject.id}
            className={`${
              selectedProject.description.length > 260 ? 'max-w-xl' : 'max-w-lg'
            } w-full bg-white border shadow dark:bg-gray-900 mx-auto rounded-lg p-5`}
          >
            <Image
              src={`/${selectedProject.image}`}
              alt={`${selectedProject.title}.png`}
              width={300}
              height={300}
              quality={100}
              className={`w-full mb-2 ${loading ? 'blur-xl' : 'blur-0'}`}
              loading="lazy"
              onLoadingComplete={() => removeLoading(false)}
            />
            <h1 className="text-base mb-2">{selectedProject.title}</h1>
            <div className="flex gap-2 mb-2 items-center">
              {selectedProject.techStack?.map((item) => (
                <Image
                  key={item.id}
                  src={`/${item.tech}`}
                  width={100}
                  height={100}
                  alt={item.tech}
                  className="w-7 h-7 object-contain"
                  loading="lazy"
                />
              ))}
            </div>
            <p className="text-sm mb-4">{selectedProject.description}</p>
            <div className="flex justify-between items-center">
              <Button
                onClick={() => removeSelectedId()}
                variant="outline"
                size="icon"
                className="rounded-full"
              >
                <X />
              </Button>
              <div className="flex gap-2 items-center">
                <GithubBtn
                  Button={Button}
                  Link={Link}
                  GithubIcon={GithubIcon}
                />
                <Link href={selectedProject.demo} target="_blank">
                  <Button
                    size="icon"
                    variant="ghost"
                    className="rounded-full bg-blue-600 text-white hover:text-white transition-colors duration-500 hover:bg-blue-700"
                  >
                    <ExternalLink />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
