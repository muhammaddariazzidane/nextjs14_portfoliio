import ProfileCard from './elements/card/ProfileCard';
import experience from '@/services/experience';
import educations from '@/services/educations';
import Link from 'next/link';

export default function About() {
  return (
    <>
      <ProfileCard />
      <div className="w-full  py-4 lg:px-10 md:px-8 sm:px-6">
        <div className="mb-8 border-b">
          <h1 className="font-semibold lg:text-xl md:text-lg text-base">
            About Me
          </h1>
          <div className="my-4 flex flex-col space-y-3 lg:text-base md:text-base text-sm">
            <p>
              I am a student in the Diploma 3 (D3) program currently pursuing my
              degree at Bina Sarana Informatika University in Karawang, West
              Java. I have a strong background in web development, with
              expertise in using platforms such as Laravel, CodeIgniter, and
              ReactJS to create versatile and user-friendly web applications.
            </p>
            <p>
              With a high level of enthusiasm for learning, I continually seek
              challenging and inspirational projects to enhance my skills in web
              development. I stay updated with industry advancements and
              continuously deepen my knowledge through online learning platforms
              and sources like YouTube.
            </p>
            <p>
              Additionally, I am currently engaged in a certified independent
              study program with Dicoding Indonesia, reflecting my commitment to
              excel in the field of web development
            </p>
          </div>
        </div>

        <div className="flex justify-center flex-wrap lg:flex-nowrap  gap-3">
          <div className="max-h-full h-full w-full bg-white shadow-md dark:bg-slate-950 dark:border rounded-md p-4">
            <h1>Exprerience</h1>
            {experience?.slice(0, 2).map((item) => (
              <div key={item.id} className="mt-2">
                <p className="text-sm opacity-80 mt-3">{item.period}</p>
                <Link href={'/skills'}>
                  <h2 className="text-base my-1 text-indigo-600 dark:text-indigo-500">
                    {item.title}
                  </h2>
                </Link>
                <h3 className="opacity-80 text-sm">{item.company}</h3>
              </div>
            ))}
          </div>
          <div className="max-h-full h-full w-full bg-white shadow-md dark:bg-slate-950 dark:border rounded-md p-4">
            <h1>Education</h1>
            {educations?.slice(0, 2).map((item) => (
              <div key={item.id} className="mt-2">
                <p className="text-sm opacity-80 mt-3">{item.period}</p>
                <h2 className="text-base my-1 text-indigo-600 dark:text-indigo-500">
                  {item.title}
                </h2>
                <h3 className="opacity-80 text-sm">{item.company}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
