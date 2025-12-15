/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import React, { useState } from 'react';

import { Fade } from 'react-awesome-reveal';

import { Form } from '../../elements/Form';
import Button from '../../elements/Button';
import { PersonalInfo } from '../../json/personalPortfolioData';

export default function ContactPersonal() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send email via EmailJS or API)
    // TODO: Integrate with email service (EmailJS, Formspree, etc.)
    // eslint-disable-next-line no-console
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: '',
    });
    // eslint-disable-next-line no-alert
    alert('Thank you for your message! I\'ll get back to you soon.');
  };

  return (
    <section id="contact" className="container mx-auto flex flex-col items-center mt-20 px-5">
      <Fade direction="right" triggerOnce>
        <h1 className="text-5xl text-theme-blue text-center font-bold mb-4">Get In Touch</h1>
      </Fade>
      <Fade direction="left" triggerOnce>
        <p className="font-light text-lg text-gray-400 text-center mb-12 max-w-3xl">
          Have a project in mind? Let&apos;s work together to bring your ideas to life.
        </p>
      </Fade>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl w-full">
        <Fade direction="up" triggerOnce>
          <div>
            <h2 className="text-3xl font-bold text-theme-blue mb-6">Let&apos;s work together</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities
              to be part of your vision. Feel free to reach out through the form or connect with
              me on social media.
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-theme-purple mr-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href={`mailto:${PersonalInfo.email}`}
                  className="text-gray-600 hover:text-theme-purple transition-colors"
                >
                  {PersonalInfo.email}
                </a>
              </div>

              <div className="flex items-center space-x-4 mt-6">
                <Button
                  href={PersonalInfo.github}
                  type="link"
                  isExternal
                  className="flex items-center px-4 py-2 text-theme-purple border border-theme-purple rounded-lg hover:bg-theme-purple hover:text-white transition duration-200"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </Button>
                <Button
                  href={PersonalInfo.linkedin}
                  type="link"
                  isExternal
                  className="flex items-center px-4 py-2 text-theme-purple border border-theme-purple rounded-lg hover:bg-theme-purple hover:text-white transition duration-200"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </Button>
              </div>
            </div>
          </div>
        </Fade>

        <Fade direction="up" delay={200} triggerOnce>
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
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
            <Form
              name="message"
              value={formData.message}
              onChange={handleChange}
              type="textarea"
              placeholder="Your Message"
            />
            <Button
              type="submit"
              className="w-full px-6 py-4 text-white text-lg bg-theme-purple rounded-lg hover:bg-dark-theme-purple transition duration-200 font-medium"
            >
              Send Message
            </Button>
          </form>
        </Fade>
      </div>
    </section>
  );
}


