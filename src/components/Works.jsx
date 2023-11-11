'use client';

import { useProjectStore } from '@/store/useProjectStore';
import { useLoadingStore } from '@/store/useLoadingStore';
import ProjectsCard from './elements/card/ProjectsCard';
import ProjectModal from './elements/modal/ProjectModal';

export default function Works({ projects }) {
  const { selectedId, setSelectedId, removeSelectedId } = useProjectStore();
  const { loading, removeLoading } = useLoadingStore();
  const selectedProject = projects.find((project) => project.id === selectedId);

  const handleDetailProject = (id) => {
    setSelectedId(id);
  };

  return (
    <>
      {projects?.map((project) => (
        <ProjectsCard
          handleDetailProject={handleDetailProject}
          key={project.id}
          project={project}
          loading={loading}
          removeLoading={removeLoading}
        />
      ))}
      {selectedProject && (
        <ProjectModal
          selectedProject={selectedProject}
          removeSelectedId={removeSelectedId}
          loading={loading}
          removeLoading={removeLoading}
        />
      )}
    </>
  );
}
