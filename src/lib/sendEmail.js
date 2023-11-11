/* eslint-disable no-useless-catch */
import emailjs from '@emailjs/browser';

export const sendEmail = async (form) => {
  try {
    const response = await emailjs.sendForm(
      'service_6u110tj',
      'template_falaicl',
      form,
      'XcyOUH1BWPdrIecAe'
    );
    return response;
  } catch (error) {
    throw error;
  }
};
