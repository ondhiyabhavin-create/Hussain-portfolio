/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import React from 'react';

import { Fade } from 'react-awesome-reveal';

import Button from '../../elements/Button';
import { PersonalInfo } from '../../json/personalPortfolioData';

export default function HeroPersonal() {
  return (
    <section className="hero">
      <div className="w-full lg:w-1/2 xl:pl-12 sm:pr-2 mt-8">
        <Fade direction="up" triggerOnce>
          <h1 className="text-5xl sm:text-6xl text-theme-blue font-bold leading-tight mb-5">
            Hi, I&apos;m{' '}
            <span className="text-theme-purple">{PersonalInfo.name}</span>
            <br />
            {PersonalInfo.role}
          </h1>
        </Fade>

        <Fade direction="up" delay={200} triggerOnce>
          <p className="font-light text-xl text-gray-400 leading-relaxed mb-8">
            {PersonalInfo.tagline}
          </p>
        </Fade>

        <Fade direction="up" delay={400} triggerOnce>
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button
              href="#projects"
              type="link"
              className="flex w-71 h-18 items-center px-14 py-5 text-white text-xl bg-theme-purple rounded-lg shadow-2xl hover:bg-dark-theme-purple transition duration-200"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('projects');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              View Projects
              <svg
                className="ml-2 w-7 h-7 text-white animate-bounce-x"
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
            <Button
              href="#contact"
              type="link"
              className="flex w-71 h-18 items-center px-14 py-5 text-theme-purple text-xl bg-transparent border-2 border-theme-purple rounded-lg hover:bg-theme-purple hover:text-white transition duration-200"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Contact Me
            </Button>
          </div>
        </Fade>
      </div>
      <div className="flex pt-5 md:w-fit w-full justify-center items-center order-first md:order-first lg:order-last lg:w-1/2">
        <Fade direction="up" triggerOnce>
          <div className="w-full max-w-md">
            <div className="bg-gradient-to-br from-theme-purple to-dark-theme-purple rounded-2xl p-8 shadow-2xl">
              <div className="bg-white rounded-lg p-6">
                <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full mb-4 flex items-center justify-center text-6xl">
                  👨‍💻
                </div>
                <h3 className="text-center text-2xl font-bold text-theme-blue mb-2">
                  {PersonalInfo.name}
                </h3>
                <p className="text-center text-gray-600">{PersonalInfo.role}</p>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}
