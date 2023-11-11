import Works from '@/components/Works';
import projects from '@/services/projects';

export default function page() {
  return (
    <>
      <div className="flex mt-4 items-center justify-between max-h-6">
        <h1 className="mt-7 mb-5 font-semibold lg:text-lg text-base">
          Recent Works
        </h1>
      </div>

      <div className=" mt-8 w-full grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 px-8 sm:px-0 md:px-0 lg:px-0 sm:grid-cols-2 gap-8">
        <Works projects={projects} />
      </div>
    </>
  );
}
