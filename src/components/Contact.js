import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import SuccessAlert from './SuccessAlert';
const Contact = ()=>{
    const form = useRef();
    const [isSuccess,setIsSuccess] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_jb2fus7', 'template_mi0tleb', form.current, {
            publicKey: 'JAIUUbDOayD7QvY9Z',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              setIsSuccess(true);
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
    return(
        <section className="bg-white dark:bg-gray-900">
  <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md flex-grow">
      {isSuccess && (<div className='py-2'>
        <SuccessAlert/>
      </div>)}
      <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact</h2>
      <p className="mb-4 lg:mb-8 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Looking forward to hearing from you.</p>
      <form ref = {form} onSubmit={sendEmail} className="space-y-8">
          <div>
            <input type="text" name="user_name" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Full Name" required/>
          </div>
          <div>
            <input type="email" name="user_email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@gmail.com" required/>
          </div>
          <div className="sm:col-span-2">
            <textarea id="message" name="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
              <button type="submit" value="Send" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 cursor-pointer">Send Message</button>
      </form>
  </div>
</section>
    )
}
export default Contact;