/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import React from 'react';

import { Fade } from 'react-awesome-reveal';

import { Skills } from '../../json/personalPortfolioData';

export default function SkillsPersonal() {
  const skillCategories = [
    { title: 'Frontend', skills: Skills.frontend, color: 'blue' },
    { title: 'Backend', skills: Skills.backend, color: 'green' },
    { title: 'Databases', skills: Skills.databases, color: 'purple' },
    { title: 'Cloud / DevOps', skills: Skills.cloud, color: 'indigo' },
    { title: 'Other', skills: Skills.other, color: 'pink' },
  ];

  return (
    <section id="skills" className="container mx-auto flex flex-col items-center mt-20 px-5">
      <Fade direction="right" triggerOnce>
        <h1 className="text-5xl text-theme-blue text-center font-bold mb-4">Skills & Tech Stack</h1>
      </Fade>
      <Fade direction="left" triggerOnce>
        <p className="font-light text-lg text-gray-400 text-center mb-12 max-w-3xl">
          Technologies and tools I work with to build scalable, efficient solutions
        </p>
      </Fade>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
        {skillCategories.map((category, index) => (
          <Fade direction="up" delay={index * 100} triggerOnce key={category.title}>
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-theme-blue mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center px-4 py-2 bg-light-theme-purple rounded-full text-theme-blue font-medium"
                  >
                    <span className="mr-2 text-xl">{skill.icon}</span>
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </section>
  );
}


