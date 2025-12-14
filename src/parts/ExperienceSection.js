/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import React from 'react';

import { Fade } from 'react-awesome-reveal';

import { Experience } from '../json/personalData';

export default function ExperienceSection() {
  return (
    <section id="experience" className="bg-gradient-to-b from-white to-gray-50 py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32">
      <div className="container mx-auto flex flex-col items-center px-4 sm:px-5 md:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <Fade direction="right" triggerOnce>
          <div className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16">
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-light-theme-purple text-theme-purple rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
              Career Journey
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-8xl text-theme-blue font-bold mb-4 sm:mb-6">
              Professional Experience
            </h1>
            <p className="font-light text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl lg:max-w-3xl mx-auto px-4 sm:px-0">
              My professional journey managing mission-critical database systems in government
              and enterprise environments
            </p>
          </div>
        </Fade>

        <div className="max-w-5xl lg:max-w-6xl w-full">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 sm:left-10 md:left-12 top-0 bottom-0 w-0.5 sm:w-1 bg-gradient-to-b from-theme-purple via-theme-purple to-dark-theme-purple opacity-30 hidden md:block rounded-full" />

            {Experience.map((exp, index) => (
              <Fade direction="up" delay={index * 200} triggerOnce key={exp.id}>
                <div className="relative mb-12 sm:mb-14 md:mb-16 lg:mb-20">
                  {/* Timeline dot */}
                  <div className="absolute left-6 sm:left-7 md:left-8 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-gradient-to-br from-theme-purple to-dark-theme-purple rounded-full border-3 sm:border-4 border-white shadow-xl hidden md:flex items-center justify-center">
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-white rounded-full" />
                  </div>

                  <div className="ml-0 md:ml-20 lg:ml-24 bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 border border-gray-100 hover:shadow-theme-purple/20 hover:-translate-y-1 transition-all duration-300 transform relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-1.5 sm:h-2 bg-gradient-to-r from-theme-purple to-dark-theme-purple" />
                    <div className="relative">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 sm:mb-5 md:mb-6">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 sm:space-x-3 mb-2 sm:mb-3">
                            <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-gradient-to-br from-theme-purple to-dark-theme-purple rounded-lg sm:rounded-xl flex items-center justify-center text-white text-lg sm:text-xl font-bold shadow-lg">
                              {index + 1}
                            </div>
                            <div>
                              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-theme-blue mb-1">
                                {exp.role}
                              </h3>
                              <p className="text-lg sm:text-xl md:text-2xl text-theme-purple font-semibold">{exp.company}</p>
                            </div>
                          </div>
                        </div>
                        <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-light-theme-purple text-theme-purple rounded-full text-xs sm:text-sm font-semibold mt-3 sm:mt-4 md:mt-0">
                          {exp.period}
                        </span>
                      </div>

                      <div className="mt-6 sm:mt-8">
                        <h4 className="text-lg sm:text-xl font-bold text-theme-blue mb-3 sm:mb-4 flex items-center">
                          <span className="mr-2">📋</span>
                          Key Responsibilities
                        </h4>
                        <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                          {exp.responsibilities.map((resp) => (
                            <li
                              key={`${exp.id}-resp-${resp.substring(0, 20)}`}
                              className="flex items-start text-gray-700 group/item"
                            >
                              <span className="text-theme-purple mr-2 sm:mr-3 mt-1 text-lg sm:text-xl group-hover/item:scale-125 transition-transform">
                                ▶
                              </span>
                              <span className="text-sm sm:text-base leading-relaxed">{resp}</span>
                            </li>
                          ))}
                        </ul>

                        {exp.achievements && exp.achievements.length > 0 && (
                          <div className="bg-gradient-to-r from-light-theme-purple to-white rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-light-theme-purple">
                            <h4 className="text-lg sm:text-xl font-bold text-theme-blue mb-3 sm:mb-4 flex items-center">
                              <span className="mr-2">🏆</span>
                              Key Achievements
                            </h4>
                            <ul className="space-y-2 sm:space-y-3">
                              {exp.achievements.map((ach) => (
                                <li
                                  key={`${exp.id}-ach-${ach.substring(0, 20)}`}
                                  className="flex items-start text-gray-700"
                                >
                                  <span className="text-theme-purple mr-2 sm:mr-3 mt-1 text-lg sm:text-xl">✓</span>
                                  <span className="text-sm sm:text-base leading-relaxed font-medium">{ach}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
