/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';

import { Fade } from 'react-awesome-reveal';

export default function Service({ data }) {
  const serviceFeatures = [
    '24/7 Support Available',
    'Enterprise-Grade Solutions',
    'Proven Track Record',
    'Security Compliant',
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32">
      <div className="container mx-auto px-4 sm:px-5 md:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <Fade direction="right" triggerOnce>
          <div className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16">
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-light-theme-purple text-theme-purple rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
              Services
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-8xl text-theme-blue font-bold mb-4 sm:mb-6">
              What I Can Help You With
            </h1>
            <p className="font-light text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl lg:max-w-3xl mx-auto px-4 sm:px-0">
              Comprehensive database consulting services for enterprise and government environments
            </p>
          </div>
        </Fade>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8 max-w-6xl lg:max-w-7xl mx-auto mb-12 sm:mb-14 md:mb-16">
          {data.map((item, index) => (
            <Fade direction={item.animation} delay={index * 150} triggerOnce key={item.title}>
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-theme-purple to-dark-theme-purple rounded-2xl sm:rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-300" />
                <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-gray-100 p-6 sm:p-7 md:p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <div className="mb-4 sm:mb-6">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-40 sm:h-44 md:h-48 object-cover rounded-xl sm:rounded-2xl mb-4 sm:mb-6 group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-theme-blue mb-3 sm:mb-4 text-center">
                    {item.title}
                  </h2>
                  {item.description && (
                    <p className="text-sm sm:text-base text-gray-600 text-center leading-relaxed mb-4 sm:mb-6">
                      {item.description}
                    </p>
                  )}
                  <div className="flex justify-center">
                    <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-theme-purple to-dark-theme-purple text-white rounded-full text-xs sm:text-sm font-semibold">
                      Learn More →
                    </span>
                  </div>
                </div>
              </div>
            </Fade>
          ))}
        </div>

        <Fade direction="up" delay={600} triggerOnce>
          <div className="max-w-4xl lg:max-w-5xl mx-auto px-4 sm:px-0">
            <div className="bg-gradient-to-r from-theme-blue to-theme-purple rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-12 text-white shadow-2xl">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Why Choose My Services?</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
                {serviceFeatures.map((feature) => (
                  <div key={feature} className="text-center">
                    <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">✓</div>
                    <p className="text-xs sm:text-sm font-medium opacity-95">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
