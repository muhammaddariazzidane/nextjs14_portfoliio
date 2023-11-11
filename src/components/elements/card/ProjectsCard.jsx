'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ProjectsCard(props) {
  const { project, handleDetailProject, loading, removeLoading } = props;

  return (
    <motion.div
      layoutId={project.id}
      className="w-full shadow cursor-pointer bg-white dark:bg-slate-900 relative rounded-xl border"
      key={project.id}
      onClick={() => handleDetailProject(project.id)}
    >
      <div className="overflow-hidden rounded-t-xl">
        <Image
          src={`/${project.image}`}
          width={400}
          height={400}
          alt={`${project.title}.png`}
          quality={100}
          loading="lazy"
          onLoadingComplete={() => removeLoading()}
          className={`transition-all duration-500 w-full scale-110 hover:scale-100 rounded-t-xl h-40 object-cover object-center ${
            loading ? 'blur-xl' : 'blur-0'
          }`}
        />
      </div>
      <div className="p-4">
        <h1 className="mb-2 text-base transition-colors duration-500 hover:text-indigo-500">
          {project.title}
        </h1>

        <div className="flex gap-2 items-center">
          {project.techStack?.map((item) => (
            <Image
              key={item.id}
              src={`/${item.tech}`}
              width={100}
              height={100}
              alt={item.tech}
              className={`w-6 h-6 object-contain ${
                loading ? 'blur-xl' : 'blur-0'
              }`}
              loading="lazy"
              onLoadingComplete={() => removeLoading()}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
