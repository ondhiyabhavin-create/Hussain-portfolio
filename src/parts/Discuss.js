/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
/* eslint-disable no-console */

import React, { useState } from 'react';

import { Fade } from 'react-awesome-reveal';
import * as emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Button from '../elements/Button';
import { PersonalInfo } from '../json/personalData';
import { Form } from '../elements/Form';

export default function Discuss() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Limit message to 500 characters
    if (name === 'message' && value.length > 500) {
      return;
    }
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);

    // EmailJS Configuration
    // TODO: Replace these with your EmailJS credentials
    // Get them from: https://www.emailjs.com/
    const serviceID = 'YOUR_SERVICE_ID'; // e.g., 'service_h4gtndg'
    const templateID = 'YOUR_TEMPLATE_ID'; // e.g., 'template_a9tvs7a'
    const publicKey = 'YOUR_PUBLIC_KEY'; // e.g., 'user_csqIxzN5mKsl1yw4ffJzV'

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_name: PersonalInfo.name,
      message: formData.message,
      reply_to: formData.email,
    };

    // Check if EmailJS is configured
    if (serviceID === 'YOUR_SERVICE_ID' || templateID === 'YOUR_TEMPLATE_ID' || publicKey === 'YOUR_PUBLIC_KEY') {
      console.log('EmailJS not configured. Email would be sent with these parameters:', templateParams);
      toast.warning('Email service not configured. Please set up EmailJS credentials.');
      setIsSubmitting(false);
      return;
    }

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        toast.success('Message sent successfully! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        toast.error('Failed to send message. Please try again or contact me directly.');
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="bg-gradient-to-b from-white to-gray-50 py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32">
      <div className="container mx-auto px-4 sm:px-5 md:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <Fade direction="up" triggerOnce>
          <div className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16">
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-light-theme-purple text-theme-purple rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
              Get In Touch
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-8xl text-theme-blue font-bold mb-4 sm:mb-6">
              Let&apos;s Work Together
            </h1>
            <p className="font-light text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl lg:max-w-3xl mx-auto px-4 sm:px-0">
              Have a project in mind? I&apos;m always open to discussing new opportunities
              and helping you achieve your database infrastructure goals.
            </p>
          </div>
        </Fade>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 max-w-5xl lg:max-w-6xl mx-auto">
          <Fade direction="left" triggerOnce>
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-theme-blue mb-6 sm:mb-8">Contact Information</h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Feel free to reach out through any of these channels. I typically respond
                within 24 hours and am available for both short-term projects and long-term
                consulting engagements.
              </p>

              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4 p-4 sm:p-5 md:p-6 bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-gradient-to-br from-theme-purple to-dark-theme-purple rounded-lg sm:rounded-xl flex items-center justify-center text-white text-lg sm:text-xl flex-shrink-0">
                    📧
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-theme-blue mb-1 text-sm sm:text-base">Email</h3>
                    <a
                      href={`mailto:${PersonalInfo.email}`}
                      className="text-gray-600 hover:text-theme-purple transition-colors text-sm sm:text-base break-all"
                    >
                      {PersonalInfo.email}
                    </a>
                  </div>
                </div>

                {PersonalInfo.phone && (
                  <div className="flex items-start space-x-3 sm:space-x-4 p-4 sm:p-5 md:p-6 bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-gradient-to-br from-theme-purple to-dark-theme-purple rounded-lg sm:rounded-xl flex items-center justify-center text-white text-lg sm:text-xl flex-shrink-0">
                      📞
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-bold text-theme-blue mb-1 text-sm sm:text-base">Phone</h3>
                      <a
                        href={`tel:${PersonalInfo.phone}`}
                        className="text-gray-600 hover:text-theme-purple transition-colors text-sm sm:text-base"
                      >
                        {PersonalInfo.phone}
                      </a>
                    </div>
                  </div>
                )}

                <div className="flex items-start space-x-3 sm:space-x-4 p-4 sm:p-5 md:p-6 bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-gradient-to-br from-theme-purple to-dark-theme-purple rounded-lg sm:rounded-xl flex items-center justify-center text-white text-lg sm:text-xl flex-shrink-0">
                    📍
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-theme-blue mb-1 text-sm sm:text-base">Location</h3>
                    <p className="text-gray-600 text-sm sm:text-base">{PersonalInfo.location}</p>
                  </div>
                </div>

                {PersonalInfo.linkedin && (
                  <div className="flex items-start space-x-3 sm:space-x-4 p-4 sm:p-5 md:p-6 bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-gradient-to-br from-theme-purple to-dark-theme-purple rounded-lg sm:rounded-xl flex items-center justify-center text-white text-lg sm:text-xl flex-shrink-0">
                      💼
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-bold text-theme-blue mb-1 text-sm sm:text-base">LinkedIn</h3>
                      <a
                        href={PersonalInfo.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-theme-purple transition-colors text-sm sm:text-base"
                      >
                        Connect with me
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Fade>

          <Fade direction="right" triggerOnce>
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-5 sm:p-6 md:p-8 lg:p-10 border border-gray-100">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-theme-blue mb-4 sm:mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="w-full">
                <div className="space-y-4">
                  <Form
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    type="text"
                    placeholder="Your Name"
                  />
                  <Form
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="Your Email"
                    errorResponse="Please enter a valid email address"
                  />
                  <div>
                    <Form
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      type="textarea"
                      placeholder="Your Message"
                    />
                    <div className="mx-2 lg:mx-5 -mt-2 mb-4">
                      <p
                        className={`text-xs text-right ${
                          formData.message.length > 450
                            ? 'text-orange-500'
                            : 'text-gray-400'
                        }`}
                      >
                        {formData.message.length}/500 characters
                      </p>
                    </div>
                  </div>
                  <div className="mx-2 lg:mx-5 pt-2">
                    <Button
                      type="submit"
                      disabled={
                        isSubmitting
                        || !formData.name
                        || !formData.email
                        || !formData.message
                      }
                      className="w-full px-8 py-4 text-white text-lg bg-gradient-to-r from-theme-purple to-dark-theme-purple rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 transform font-semibold disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        'Send Message'
                      )}
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </Fade>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </section>
  );
}
