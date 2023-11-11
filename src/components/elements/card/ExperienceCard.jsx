import experiences from '@/services/experience';

export default function ExperienceCard() {
  return (
    <div className="mb-3">
      <h1 className="font-semibold  lg:text-xl md:text-lg text-base">
        Experience
      </h1>
      {experiences?.map((experience) => (
        <div className="mb-4 border-b" key={experience.id}>
          <h2 className="mt-2 text-sm opacity-80">{experience.period}</h2>
          <h3 className="text-base my-2 text-indigo-600 dark:text-indigo-500">
            {experience.title}
          </h3>
          <h4 className="opacity-80 text-sm">{experience.company}</h4>
          <div className="my-4 flex flex-col space-y-3 lg:text-base md:text-base text-sm">
            <p>{experience.description}</p>
            <ul role="list" className="marker:text-indigo-500 list-disc ml-4">
              {experience.list_skills?.map((item) => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
