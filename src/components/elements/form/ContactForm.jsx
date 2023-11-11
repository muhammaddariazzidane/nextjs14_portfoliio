'use client';

import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { sendEmail } from '@/lib/sendEmail';
import { useRef } from 'react';
import { useToast } from '@/components/ui/use-toast';

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const form = useRef();
  const { toast } = useToast();
  const handleSendMessage = () => {
    sendEmail(form.current)
      .then(() => {
        form.current.reset();
        toast({
          variant: 'success',
          description: 'Your message has been sent.',
        });
      })
      .catch((error) => {
        toast({
          variant: 'destructive',
          description: 'Your message has been sent.',
        });
      });
  };
  return (
    <form
      ref={form}
      className="mt-3 flex flex-col space-y-3"
      onSubmit={handleSubmit(handleSendMessage)}
    >
      <Input
        type="text"
        placeholder="Your Name"
        name="client_name"
        {...register('client_name', {
          required: true,
        })}
        autoComplete="off"
      />
      <Input
        type="email"
        placeholder="Your Email"
        {...register('email_name', {
          required: true,
        })}
        name="email_name"
        autoComplete="off"
      />
      <Textarea
        placeholder="Your Message"
        className="h-36"
        autoComplete="off"
        {...register('message', {
          required: true,
        })}
        name="message"
      ></Textarea>
      <Button className="bg-indigo-600 text-white dark:text-white hover:bg-indigo-700 transition-colors duration-500">
        Send Message
      </Button>
    </form>
  );
}
