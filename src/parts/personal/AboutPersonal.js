/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import React from 'react';

import { Fade } from 'react-awesome-reveal';

import { PersonalInfo } from '../../json/personalPortfolioData';

export default function AboutPersonal() {
  return (
    <section id="about" className="container mx-auto flex flex-col items-center mt-20 px-5">
      <Fade direction="right" triggerOnce>
        <h1 className="text-5xl text-theme-blue text-center font-bold mb-4">About Me</h1>
      </Fade>
      <Fade direction="left" triggerOnce>
        <p className="font-light text-lg text-gray-400 text-center mb-12 max-w-3xl">
          {PersonalInfo.bio}
        </p>
      </Fade>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
        <Fade direction="up" triggerOnce>
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-theme-blue mb-4">Experience</h3>
            <p className="text-4xl font-bold text-theme-purple mb-2">
              {PersonalInfo.yearsOfExperience}
            </p>
            <p className="text-gray-600">Years of professional experience</p>
          </div>
        </Fade>

        <Fade direction="up" delay={200} triggerOnce>
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-theme-blue mb-4">Focus Areas</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <span className="text-theme-purple mr-2">✓</span>
                Backend & System Design
              </li>
              <li className="flex items-center">
                <span className="text-theme-purple mr-2">✓</span>
                Scalable Architectures
              </li>
              <li className="flex items-center">
                <span className="text-theme-purple mr-2">✓</span>
                Automation & Performance
              </li>
            </ul>
          </div>
        </Fade>
      </div>

      <Fade direction="up" delay={400} triggerOnce>
        <div className="mt-12 max-w-3xl w-full">
          <h3 className="text-2xl font-bold text-theme-blue mb-6 text-center">
            My Approach
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed text-center">
            I believe in writing clean, maintainable code that scales. My philosophy centers
            around building robust systems that can handle growth, implementing automation to
            reduce manual work, and continuously optimizing for performance. Every project is
            an opportunity to solve complex problems with elegant solutions.
          </p>
        </div>
      </Fade>
    </section>
  );
}


