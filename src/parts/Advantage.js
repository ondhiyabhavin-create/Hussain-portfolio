/* eslint-disable linebreak-style */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';

import { Fade } from 'react-awesome-reveal';
import { PersonalInfo } from '../json/personalData';

export default function Advantage() {
  const stats = [
    { label: 'Years Experience', value: PersonalInfo.yearsOfExperience, icon: '📅' },
    { label: 'VLDB Systems', value: '250TB+', icon: '💾' },
    { label: 'Projects Completed', value: '50+', icon: '🚀' },
    { label: 'Certifications', value: '6+', icon: '🏆' },
  ];

  const highlights = [
    {
      icon: '🔒',
      title: 'Security & Compliance',
      description: 'Expert in GDPR, ISO, SOX, HIPAA compliance with TDE and Vault implementations',
    },
    {
      icon: '⚡',
      title: 'Performance Optimization',
      description: 'Achieved 40% query performance improvements through systematic tuning and optimization',
    },
    {
      icon: '🔄',
      title: 'High Availability',
      description: 'Designed and implemented RAC, Data Guard, and GoldenGate solutions for zero downtime',
    },
    {
      icon: '☁️',
      title: 'Cloud Migration',
      description: 'Successfully migrated enterprise systems to OCI and Azure with minimal disruption',
    },
  ];

  return (
    <div id="about" className="bg-gradient-to-b from-white to-gray-50 py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32">
      <div className="container mx-auto px-4 sm:px-5 md:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <Fade bottom triggerOnce>
          <div className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16">
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-light-theme-purple text-theme-purple rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
              About Me
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-8xl text-theme-blue font-bold mb-4 sm:mb-6">
              Professional Overview
            </h1>
            <p className="font-light text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl lg:max-w-4xl mx-auto px-4 sm:px-0">
              {PersonalInfo.bio}
            </p>
          </div>
        </Fade>

        <Fade direction="up" triggerOnce>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 md:gap-6 max-w-5xl lg:max-w-6xl mx-auto mb-12 sm:mb-16 md:mb-20">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-2xl shadow-xl p-4 sm:p-5 md:p-6 border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 transform text-center"
              >
                <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">{stat.icon}</div>
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-theme-purple mb-1 sm:mb-2">{stat.value}</p>
                <p className="text-xs sm:text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </Fade>

        <Fade direction="up" delay={200} triggerOnce>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 md:gap-8 max-w-5xl lg:max-w-6xl mx-auto mb-12 sm:mb-16 md:mb-20">
            {highlights.map((highlight) => (
              <div
                key={highlight.title}
                className="bg-white rounded-2xl shadow-xl p-6 sm:p-7 md:p-8 border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">{highlight.icon}</div>
                <h3 className="text-xl sm:text-2xl font-bold text-theme-blue mb-2 sm:mb-3">{highlight.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{highlight.description}</p>
              </div>
            ))}
          </div>
        </Fade>

        <Fade direction="up" delay={400} triggerOnce>
          <div className="max-w-4xl lg:max-w-5xl mx-auto px-4 sm:px-0">
            <div className="bg-gradient-to-r from-theme-purple to-dark-theme-purple rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-12 text-white shadow-2xl">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-center">My Approach</h3>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-center mb-6 sm:mb-8 opacity-95 px-2 sm:px-0">
                I specialize in designing, securing, and optimizing mission-critical database
                systems at scale. My approach focuses on high availability, disaster recovery,
                security compliance, and performance optimization. With expertise in managing VLDB
                systems up to 250TB, I ensure robust, secure, and highly available database
                infrastructures for government and enterprise environments.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mt-6 sm:mt-8 md:mt-10">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-5 md:p-6 text-center">
                  <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">🎯</div>
                  <h4 className="font-bold text-base sm:text-lg mb-1 sm:mb-2">Mission-Critical</h4>
                  <p className="text-xs sm:text-sm opacity-90">Zero-downtime solutions</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-5 md:p-6 text-center">
                  <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">🛡️</div>
                  <h4 className="font-bold text-base sm:text-lg mb-1 sm:mb-2">Security First</h4>
                  <p className="text-xs sm:text-sm opacity-90">Compliance & encryption</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-5 md:p-6 text-center">
                  <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">⚡</div>
                  <h4 className="font-bold text-base sm:text-lg mb-1 sm:mb-2">Performance</h4>
                  <p className="text-xs sm:text-sm opacity-90">Optimized & scalable</p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
