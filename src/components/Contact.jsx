/* eslint-disable react/no-unescaped-entities */
import ContactForm from './elements/form/ContactForm';
import ContactInfo from './elements/ContactInfo';
import SocialInfo from './elements/SocialInfo';

export default function Contact() {
  return (
    <>
      <div className="lg:w-[35%] p-3 w-full">
        <h1 className="mb-3">Contact Info</h1>
        <ContactInfo />
        <h1 className="my-5">Social Info</h1>
        <SocialInfo />
      </div>
      <div className="lg:w-[65%] mt-3 lg:mt-0 md:mt-0 sm:mt-0 w-full">
        <div className="p-4 rounded-md min-h-[6rem] bg-white shadow dark:bg-slate-900 w-full">
          <h1 className="lg:text-2xl text-base">
            Let's work <span className="text-indigo-500">together</span>
          </h1>
          <ContactForm />
        </div>
      </div>
    </>
  );
}
