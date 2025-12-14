/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import React from "react";

import { Fade } from "react-awesome-reveal";

import Button from "../elements/Button";
import { PersonalInfo } from "../json/personalData";

export default function Hero() {
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero flex flex-col lg:flex-row items-center py-8 sm:py-12 lg:py-16 xl:py-20 pt-20 sm:pt-24 md:pt-28 lg:pt-32">
      <div className="w-full lg:w-1/2 xl:pl-8 2xl:pl-12 px-4 sm:px-5 lg:px-0">
        <Fade direction="up" triggerOnce>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-theme-blue font-bold leading-tight mb-4 sm:mb-6">
            Hi, I&apos;m{' '}
            <span className="text-theme-purple bg-gradient-to-r from-theme-purple to-dark-theme-purple bg-clip-text text-transparent">
              {PersonalInfo.name.split(' ')[0]}
            </span>
            <br />
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">{PersonalInfo.role}</span>
          </h1>
        </Fade>

        <Fade direction="up" delay={200} triggerOnce>
          <p className="font-light text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl text-gray-600 leading-relaxed mb-6 sm:mb-8 max-w-2xl">
            {PersonalInfo.tagline}
          </p>
        </Fade>

        <Fade direction="up" delay={300} triggerOnce>
          <div className="flex flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-12">
            <div className="flex items-center space-x-2 px-3 sm:px-4 py-2 bg-white rounded-lg shadow-md">
              <span className="text-xl sm:text-2xl">📊</span>
              <div>
                <p className="text-xs sm:text-sm text-gray-500">Experience</p>
                <p className="text-base sm:text-lg font-bold text-theme-purple">{PersonalInfo.yearsOfExperience}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 px-3 sm:px-4 py-2 bg-white rounded-lg shadow-md">
              <span className="text-xl sm:text-2xl">📍</span>
              <div>
                <p className="text-xs sm:text-sm text-gray-500">Location</p>
                <p className="text-base sm:text-lg font-bold text-theme-blue">{PersonalInfo.location}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 px-3 sm:px-4 py-2 bg-white rounded-lg shadow-md">
              <span className="text-xl sm:text-2xl">💼</span>
              <div>
                <p className="text-xs sm:text-sm text-gray-500">Available</p>
                <p className="text-base sm:text-lg font-bold text-green-600">For Projects</p>
              </div>
            </div>
          </div>
        </Fade>

        <Fade direction="up" delay={400} triggerOnce>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 lg:mb-16">
            <Button
              href="#projects"
              type="link"
              className="group flex items-center justify-center px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 text-white text-base sm:text-lg bg-gradient-to-r from-theme-purple to-dark-theme-purple rounded-lg shadow-2xl hover:shadow-theme-purple/50 hover:scale-105 transition-all duration-300 transform"
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo('projects');
              }}
            >
              View Projects
              <svg
                className="ml-2 w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:translate-x-1 transition-transform"
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
              className="flex items-center justify-center px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 text-theme-purple text-base sm:text-lg bg-white border-2 border-theme-purple rounded-lg hover:bg-theme-purple hover:text-white hover:scale-105 transition-all duration-300 transform shadow-lg"
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo('contact');
              }}
            >
              Contact Me
            </Button>
          </div>
        </Fade>
      </div>
      <div className="flex pt-0 sm:pt-5 w-full lg:w-1/2 justify-center items-center order-first lg:order-last px-4 sm:px-0">
        <Fade direction="up" delay={500} triggerOnce>
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl relative">
            <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-theme-purple to-dark-theme-purple rounded-3xl blur-2xl opacity-20 animate-pulse" />
            <div className="relative bg-gradient-to-br from-theme-purple via-theme-purple to-dark-theme-purple rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl">
                <div className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 mx-auto bg-gradient-to-br from-theme-purple to-dark-theme-purple rounded-full mb-4 sm:mb-6 flex items-center justify-center text-5xl sm:text-6xl lg:text-7xl shadow-lg">
                  🗄️
                </div>
                <h3 className="text-center text-xl sm:text-2xl lg:text-3xl font-bold text-theme-blue mb-2 sm:mb-3">
                  {PersonalInfo.name}
                </h3>
                <p className="text-center text-gray-600 text-sm sm:text-base lg:text-lg mb-3 sm:mb-4">{PersonalInfo.role}</p>
                <div className="flex justify-center space-x-3 sm:space-x-4 mt-4 sm:mt-6">
                  <div className="text-center">
                    <p className="text-xl sm:text-2xl font-bold text-theme-purple">{PersonalInfo.yearsOfExperience}</p>
                    <p className="text-xs text-gray-500">Years Exp</p>
                  </div>
                  <div className="w-px bg-gray-300" />
                  <div className="text-center">
                    <p className="text-xl sm:text-2xl font-bold text-theme-purple">250TB+</p>
                    <p className="text-xs text-gray-500">VLDB Managed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}
