/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import React from 'react';

import { Fade } from 'react-awesome-reveal';

import { Experience } from '../../json/personalPortfolioData';

export default function ExperiencePersonal() {
  return (
    <section id="experience" className="container mx-auto flex flex-col items-center mt-20 px-5">
      <Fade direction="right" triggerOnce>
        <h1 className="text-5xl text-theme-blue text-center font-bold mb-4">Experience</h1>
      </Fade>
      <Fade direction="left" triggerOnce>
        <p className="font-light text-lg text-gray-400 text-center mb-12 max-w-3xl">
          My professional journey building scalable systems and leading technical teams
        </p>
      </Fade>

      <div className="max-w-4xl w-full">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-theme-purple opacity-20 hidden md:block" />

          {Experience.map((exp, index) => (
            <Fade direction="up" delay={index * 200} triggerOnce key={exp.id}>
              <div className="relative mb-12 md:mb-16">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-theme-purple rounded-full border-4 border-white shadow-lg hidden md:block" />

                <div className="ml-0 md:ml-20 bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-theme-blue mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-xl text-theme-purple font-semibold">{exp.company}</p>
                    </div>
                    <span className="text-gray-500 font-medium mt-2 md:mt-0">{exp.period}</span>
                  </div>

                  <div className="mt-6">
                    <h4 className="text-lg font-semibold text-theme-blue mb-3">
                      Key Responsibilities:
                    </h4>
                    <ul className="space-y-2 mb-6">
                      {exp.responsibilities.map((resp) => (
                        <li key={`${exp.id}-resp-${resp.substring(0, 20)}`} className="flex items-start text-gray-600">
                          <span className="text-theme-purple mr-2 mt-1">•</span>
                          {resp}
                        </li>
                      ))}
                    </ul>

                    {exp.achievements && exp.achievements.length > 0 && (
                      <>
                        <h4 className="text-lg font-semibold text-theme-blue mb-3">
                          Key Achievements:
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((ach) => (
                            <li key={`${exp.id}-ach-${ach.substring(0, 20)}`} className="flex items-start text-gray-600">
                              <span className="text-theme-purple mr-2 mt-1">✓</span>
                              {ach}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}
