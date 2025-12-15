/* eslint-disable linebreak-style */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';

import { Fade, Zoom } from 'react-awesome-reveal';
import Button from '../elements/Button';
import { PersonalInfo } from '../json/personalData';
import AboutImage from '../assets/images/about/about.jpeg';

export default function Advantage() {
  const personalDetails = PersonalInfo.personalDetails || {};
  const skillsWithPercentages = PersonalInfo.skillsWithPercentages || [];

  const personalInfoLeft = [
    { label: 'Birthday', value: personalDetails.birthday, icon: '🎂' },
    { label: 'Website', value: personalDetails.website || 'N/A', icon: '🌐' },
    { label: 'Degree', value: personalDetails.degree, icon: '🎓' },
    { label: 'City', value: personalDetails.city, icon: '📍' },
  ];

  const personalInfoRight = [
    { label: 'Email', value: personalDetails.email, icon: '✉️' },
    { label: 'Phone', value: personalDetails.phone, icon: '📱' },
    { label: 'Freelance', value: personalDetails.freelance, icon: '💼' },
  ];

  const personalDetailsInfo = [
    { label: 'Date of birth', value: personalDetails.birthday || 'Not specified' },
    { label: 'Nationality', value: personalDetails.nationality || 'Not specified' },
    { label: 'Marital status', value: personalDetails.maritalStatus || 'Not specified' },
  ];

  const languages = personalDetails.languages || [];

  return (
    <div id="about" className="bg-gradient-to-b from-white to-gray-50 py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-5 md:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <Fade direction="down" triggerOnce>
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-theme-blue font-bold mb-4 sm:mb-6 relative inline-block">
              About Me
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-theme-purple to-dark-theme-purple transform -translate-y-2" />
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-theme-blue font-bold mb-4 sm:mb-6">
              I&apos;m Ashfaq ||{' '}
              <span className="text-theme-purple">
                {PersonalInfo.role.split('E‑Business Suite').map((part, index) => (
                  index === 0 ? (
                    <span key={`role-about-${part.slice(0, 10)}`}>
                      {part}
                      <span className="whitespace-nowrap">E‑Business Suite</span>
                    </span>
                  ) : (
                    <span key={`role-about-${part.slice(0, 10)}`}>{part}</span>
                  )
                ))}
              </span>
            </h2>
          </div>
        </Fade>

        {/* Image and Bio Section */}
        <div className="max-w-6xl mx-auto mb-8 sm:mb-10 md:mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            <Fade direction="right" triggerOnce>
              <div className="flex justify-center lg:justify-start order-2 lg:order-1">
                <div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-theme-purple to-dark-theme-purple rounded-2xl sm:rounded-3xl blur opacity-30 group-hover:opacity-40 transition-opacity duration-300" />
                  <div className="relative bg-white rounded-2xl sm:rounded-3xl p-2 sm:p-3 shadow-xl border-2 border-theme-purple/30 group-hover:border-theme-purple/50 transition-all duration-300">
                    <div className="relative rounded-xl sm:rounded-2xl overflow-hidden">
                      <img
                        src={AboutImage}
                        alt="Ashfaq"
                        className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
            <Fade direction="left" triggerOnce>
              <div className="order-1 lg:order-2">
                <p className="font-light text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
                  {PersonalInfo.bio}
                </p>
              </div>
            </Fade>
          </div>
        </div>

        {/* Main Content Grid: Personal Details + Skills */}
        <div className="max-w-6xl mx-auto mb-8 sm:mb-10 md:mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Personal Details Section */}
            <Fade direction="right" delay={100} triggerOnce>
              <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 h-full">
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  {/* Left Column */}
                  <div className="space-y-4 sm:space-y-6">
                    {personalInfoLeft.map((item, index) => {
                      const isWebsite = item.label === 'Website' && item.value && item.value !== 'N/A' && item.value.startsWith('http');
                      return (
                        <Zoom key={index} delay={150 + index * 50} triggerOnce>
                          <div className="flex flex-col h-full min-h-[80px] sm:min-h-[90px] justify-center p-3 sm:p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300 border border-gray-100 overflow-hidden">
                            <div className="flex items-center mb-2">
                              <span className="text-xl sm:text-2xl mr-2 transform hover:scale-110 transition-transform duration-300">
                                {item.icon}
                              </span>
                              <h3 className="font-bold text-theme-blue text-sm sm:text-base">{item.label}:</h3>
                            </div>
                            {isWebsite ? (
                              <a
                                href={item.value}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-theme-purple hover:text-dark-theme-purple text-sm sm:text-base pl-7 sm:pl-8 hover:underline transition-colors duration-300 font-medium"
                              >
                                Portfolio
                              </a>
                            ) : (
                              <p className="text-gray-600 text-sm sm:text-base break-words pl-7 sm:pl-8">
                                {item.value}
                              </p>
                            )}
                          </div>
                        </Zoom>
                      );
                    })}
                  </div>

                  {/* Right Column */}
                  <div className="space-y-4 sm:space-y-6">
                    {personalInfoRight.map((item, index) => {
                      const isEmail = item.label === 'Email' && item.value;
                      return (
                        <Zoom key={index} delay={150 + index * 50} triggerOnce>
                          <div className="flex flex-col h-full min-h-[80px] sm:min-h-[90px] justify-center p-3 sm:p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300 border border-gray-100 overflow-hidden">
                            <div className="flex items-center mb-2">
                              <span className="text-xl sm:text-2xl mr-2 transform hover:scale-110 transition-transform duration-300">
                                {item.icon}
                              </span>
                              <h3 className="font-bold text-theme-blue text-sm sm:text-base">{item.label}:</h3>
                            </div>
                            {isEmail ? (
                              <a
                                href={`mailto:${item.value}`}
                                className="text-gray-600 hover:text-theme-purple text-sm sm:text-base whitespace-nowrap pl-6 sm:pl-7 hover:underline transition-colors duration-300"
                                title={item.value}
                              >
                                ashfaq
                              </a>
                            ) : (
                              <p className="text-gray-600 text-sm sm:text-base break-words pl-7 sm:pl-8">
                                {item.value}
                              </p>
                            )}
                          </div>
                        </Zoom>
                      );
                    })}
                  </div>
                </div>

                {/* Hire Me and Download CV Buttons */}
                <Fade direction="up" delay={400} triggerOnce>
                  <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <Button
                      href="#contact"
                      type="link"
                      className="group w-full flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-white text-base sm:text-lg bg-gradient-to-r from-theme-purple to-dark-theme-purple rounded-lg shadow-lg hover:shadow-theme-purple/50 hover:scale-105 transition-all duration-300 transform font-semibold"
                      onClick={(e) => {
                        e.preventDefault();
                        const element = document.getElementById('contact');
                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      Hire Me
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
                    <a
                      href="/cv.pdf"
                      download
                      className="group w-full flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-theme-purple text-base sm:text-lg bg-white border-2 border-theme-purple rounded-lg shadow-lg hover:bg-theme-purple hover:text-white hover:scale-105 transition-all duration-300 transform font-semibold"
                    >
                      Download CV
                      <svg
                        className="ml-2 w-5 h-5 sm:w-6 sm:h-6 text-theme-purple group-hover:text-white transition-colors duration-300"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </a>
                  </div>
                </Fade>
              </div>
            </Fade>

            {/* Skills Section */}
            <Fade direction="left" delay={200} triggerOnce>
              <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 h-full">
                <h2 className="text-2xl sm:text-3xl font-bold text-theme-blue mb-6 sm:mb-8">Skills</h2>
                <div className="space-y-5 sm:space-y-6">
                  {skillsWithPercentages.map((skill, index) => (
                    <Fade key={index} direction="left" delay={300 + index * 100} triggerOnce>
                      <div className="group">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold text-theme-blue text-sm sm:text-base group-hover:text-theme-purple transition-colors duration-300">
                            {skill.name}
                          </span>
                          <span className="text-theme-purple font-bold text-sm sm:text-base">
                            {skill.percentage}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3 sm:h-4 overflow-hidden shadow-inner">
                          <div
                            className="bg-gradient-to-r from-theme-purple to-dark-theme-purple h-full rounded-full transition-all duration-1000 ease-out transform group-hover:scale-105"
                            style={{ width: `${skill.percentage}%` }}
                          />
                        </div>
                      </div>
                    </Fade>
                  ))}
                </div>
              </div>
            </Fade>
          </div>
        </div>

        {/* Personal Details and Languages Section */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Personal Details */}
            <Fade direction="right" delay={500} triggerOnce>
              <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300">
                <h2 className="text-2xl sm:text-3xl font-bold text-theme-blue mb-6 sm:mb-8">PERSONAL DETAILS</h2>
                <div className="space-y-4 sm:space-y-5">
                  {personalDetailsInfo.map((item, index) => (
                    <Zoom key={item.label} delay={550 + index * 50} triggerOnce>
                      <div className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300 border border-gray-100">
                        <span className="text-theme-purple font-bold text-sm sm:text-base min-w-[100px] sm:min-w-[120px]">
                          {item.label}:
                        </span>
                        <span className="text-gray-600 text-sm sm:text-base flex-grow">
                          {item.value}
                        </span>
                      </div>
                    </Zoom>
                  ))}
                </div>
              </div>
            </Fade>

            {/* Languages */}
            <Fade direction="left" delay={600} triggerOnce>
              <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300">
                <h2 className="text-2xl sm:text-3xl font-bold text-theme-blue mb-6 sm:mb-8">LANGUAGES KNOWN</h2>
                <div className="space-y-4 sm:space-y-5">
                  {languages.map((language, index) => (
                    <Zoom key={language} delay={650 + index * 50} triggerOnce>
                      <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300 border border-gray-100">
                        <div className="w-2 h-2 bg-theme-purple rounded-full" />
                        <span className="text-gray-600 text-sm sm:text-base font-medium">
                          {language}
                        </span>
                      </div>
                    </Zoom>
                  ))}
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}
