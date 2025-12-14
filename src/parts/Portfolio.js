/* eslint-disable linebreak-style */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */

import React from 'react';

import { Fade } from 'react-awesome-reveal';

export default function Portfolio({ data }) {
  return (
    <section id="projects" className="bg-white py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32">
      <div className="container mx-auto flex flex-col items-center px-4 sm:px-5 md:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <Fade direction="right" triggerOnce>
          <div className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16">
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-light-theme-purple text-theme-purple rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
              Portfolio
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-8xl text-theme-blue font-bold mb-4 sm:mb-6">
              Featured Projects
            </h1>
            <p className="font-light text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl lg:max-w-3xl mx-auto px-4 sm:px-0">
              Highlighted projects showcasing problem-solving, technical expertise,
              and measurable impact
            </p>
          </div>
        </Fade>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8 max-w-6xl lg:max-w-7xl w-full">
          {data.map((item, index) => (
            <Fade direction="up" delay={index * 150} triggerOnce key={item.id}>
              <div className="group bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 transform">
                <div className="relative overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                    <span className="px-2 sm:px-3 py-1 bg-theme-purple text-white rounded-full text-xs font-semibold shadow-lg">
                      {item.type}
                    </span>
                  </div>
                </div>
                <div className="p-6 sm:p-7 md:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-theme-blue mb-2 sm:mb-3">{item.title}</h3>
                  {item.problem && (
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-gray-500 mb-2">Challenge:</p>
                      <p className="text-gray-700 leading-relaxed">{item.problem}</p>
                    </div>
                  )}
                  {item.responsibility && item.responsibility.length > 0 && (
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-gray-500 mb-2">Tech Stack:</p>
                      <div className="flex flex-wrap gap-2">
                        {item.responsibility.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-light-theme-purple text-theme-purple rounded-lg text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  {item.outcome && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-sm font-semibold text-theme-purple mb-2">Result:</p>
                      <p className="text-gray-700 text-sm leading-relaxed">{item.outcome}</p>
                    </div>
                  )}
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}
