import ExperienceCard from './elements/card/ExperienceCard';
import ProfileCard from './elements/card/ProfileCard';

export default function About() {
  return (
    <>
      <ProfileCard />
      <div className="w-full  py-4 px-10">
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
        <ExperienceCard />
      </div>
    </>
  );
}
