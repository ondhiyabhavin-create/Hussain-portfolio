/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';

import { Fade, Zoom } from 'react-awesome-reveal';

import NotFound from '../assets/images/NotFound.png';

import Button from '../elements/Button';

export default function ServiceDetail({ data }) {
  if (data === null) {
    return (
      <section className="container mx-auto py-16 sm:py-20">
        <Fade bottom triggerOnce>
          <div className="flex flex-col w-full justify-center">
            <div className="flex w-full justify-center">
              <img src={NotFound} alt="Not Found" className="sm:w-3/4 xl:w-5/12 mt-5" />
            </div>
            <h1 className="text-theme-blue text-2xl text-center mt-5">
              Service Not Found
            </h1>
            <div className="flex justify-center">
              <Button href="/#services" type="link" className="flex w-30 h-10 px-5 mt-5 bg-theme-blue text-white items-center rounded transform transition duration-500 hover:bg-gray-900">
                Go Back
              </Button>
            </div>
          </div>
        </Fade>
      </section>
    );
  }

  return (
    <section className="container mx-auto py-12 sm:py-16 md:py-20">
      <Fade bottom triggerOnce>
        <Button type="link" href="/#services" className="flex w-40 h-8 text-lg items-center ml-6 sm:ml-20 mt-8 font-light text-gray-400 hover:underline">
          <svg className="w-5 h-5 text-gray-400 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Services
        </Button>
      </Fade>

      {data.map((item) => (
        <div key={item.id} className="flex flex-col mt-8 justify-center">
          <Fade bottom triggerOnce>
            <h1 className="text-4xl sm:text-5xl md:text-6xl text-theme-blue text-center font-bold mb-4">
              {item.title}
            </h1>
            <p className="font-light text-xl sm:text-2xl text-gray-400 text-center mb-10">
              {item.description}
            </p>
          </Fade>

          <Fade bottom delay={200} triggerOnce>
            <div className="flex justify-center mb-12 sm:mb-16">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="flex w-4/5 sm:w-3/4 md:w-2/3 lg:w-1/2 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Fade>

          <Fade bottom delay={300} triggerOnce>
            <div className="flex flex-col mt-8 mb-12 mx-4 sm:mx-8 md:mx-16 xl:mx-28">
              <h2 className="text-2xl sm:text-3xl md:text-4xl text-theme-blue font-bold mb-6">
                Service Overview
              </h2>
              <p className="font-light text-base sm:text-lg md:text-xl text-gray-600 text-justify leading-relaxed">
                {item.detailedDescription || item.description}
              </p>
            </div>
          </Fade>

          {item.features && item.features.length > 0 && (
            <Fade bottom delay={400} triggerOnce>
              <div className="flex flex-col mx-4 sm:mx-8 md:mx-16 xl:mx-28 mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl text-theme-blue font-bold mb-6">
                  Key Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {item.features.map((feature) => (
                    <Zoom key={feature} delay={500} triggerOnce>
                      <div className="flex items-start space-x-3 p-4 sm:p-5 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                        <div className="w-6 h-6 sm:w-7 sm:h-7 bg-gradient-to-r from-theme-purple to-dark-theme-purple rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="font-medium text-sm sm:text-base text-gray-700">{feature}</p>
                      </div>
                    </Zoom>
                  ))}
                </div>
              </div>
            </Fade>
          )}

          {item.technologies && item.technologies.length > 0 && (
            <Fade bottom delay={600} triggerOnce>
              <div className="flex flex-col mx-4 sm:mx-8 md:mx-16 xl:mx-28 mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl text-theme-blue font-bold mb-6">
                  Technologies & Tools
                </h2>
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  {item.technologies.map((tech) => (
                    <Zoom key={tech} delay={700} triggerOnce>
                      <div className="px-4 sm:px-6 py-2 sm:py-3 text-theme-purple border-2 border-theme-purple rounded-full shadow-lg hover:bg-theme-purple hover:text-white transition-all duration-300 transform hover:scale-105 font-medium text-sm sm:text-base">
                        {tech}
                      </div>
                    </Zoom>
                  ))}
                </div>
              </div>
            </Fade>
          )}

          <Fade bottom delay={800} triggerOnce>
            <div className="flex justify-center mx-4 sm:mx-8 md:mx-16 xl:mx-28 mb-12">
              <Button
                href="#contact"
                type="link"
                className="group flex items-center justify-center px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 text-white text-base sm:text-lg bg-gradient-to-r from-theme-purple to-dark-theme-purple rounded-lg shadow-2xl hover:shadow-theme-purple/50 hover:scale-110 transition-all duration-300 transform font-semibold"
                onClick={(e) => {
                  e.preventDefault();
                  if (window.location.pathname === '/') {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    window.location.href = '/#contact';
                  }
                }}
              >
                Get Started
                <svg
                  className="ml-2 w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:translate-x-1 transition-transform duration-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Button>
            </div>
          </Fade>
        </div>
      ))}
    </section>
  );
}
