'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { sendEmail } from '@/lib/sendEmail';
import { useRef, useState } from 'react';
import { useToast } from '@/components/ui/use-toast';

export default function ContactForm() {
  const [process, setProcess] = useState(false);
  const { toast } = useToast();
  const form = useRef();

  const handleSendMessage = (e) => {
    e.preventDefault();
    setProcess(true);
    sendEmail(form.current)
      .then(() => {
        form.current.reset();
        toast({
          variant: 'success',
          description: 'Your message has been sent.',
        });
      })
      .catch((error) => {
        setProcess(false);
        toast({
          variant: 'destructive',
          description: 'Error, somenthing wrong !!!',
        });
      })
      .finally(() => {
        setProcess(false);
      });
  };
  return (
    <form
      ref={form}
      className="mt-3 flex flex-col space-y-3"
      onSubmit={handleSendMessage}
    >
      <Input
        type="text"
        placeholder="Your Name"
        name="client_name"
        autoComplete="off"
      />
      <Input
        type="email"
        placeholder="Your Email"
        name="email_name"
        autoComplete="off"
      />
      <Textarea
        placeholder="Your Message"
        className="h-36"
        autoComplete="off"
        name="message"
      ></Textarea>
      <Button
        disabled={process}
        className="bg-indigo-600 text-white dark:text-white hover:bg-indigo-700 transition-colors duration-500"
      >
        {process ? 'Sending...' : ' Send Message'}
      </Button>
    </form>
  );
}
