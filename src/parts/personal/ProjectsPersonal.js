/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import React from 'react';

import { Fade } from 'react-awesome-reveal';

import Button from '../../elements/Button';
import { Projects } from '../../json/personalPortfolioData';

export default function ProjectsPersonal() {
  return (
    <section id="projects" className="container mx-auto flex flex-col items-center mt-20 px-5">
      <Fade direction="right" triggerOnce>
        <h1 className="text-5xl text-theme-blue text-center font-bold mb-4">Projects</h1>
      </Fade>
      <Fade direction="left" triggerOnce>
        <p className="font-light text-lg text-gray-400 text-center mb-12 max-w-3xl">
          Highlighted projects showcasing problem-solving, technical expertise, and impact
        </p>
      </Fade>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
        {Projects.map((project, index) => (
          <Fade direction="up" delay={index * 100} triggerOnce key={project.id}>
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-theme-blue mb-3">{project.title}</h3>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-500 mb-2">Problem Statement:</h4>
                <p className="text-gray-600">{project.problem}</p>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-500 mb-2">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-light-theme-purple text-theme-purple rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-500 mb-2">Outcome / Impact:</h4>
                <p className="text-gray-600">{project.outcome}</p>
              </div>

              <div className="flex gap-4">
                {project.github && (
                  <Button
                    href={project.github}
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
                )}
                {project.demo && (
                  <Button
                    href={project.demo}
                    type="link"
                    isExternal
                    className="flex items-center px-4 py-2 text-white bg-theme-purple rounded-lg hover:bg-dark-theme-purple transition duration-200"
                  >
                    Live Demo
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </Button>
                )}
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </section>
  );
}
