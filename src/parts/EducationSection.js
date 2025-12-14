/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import React from 'react';

import { Fade } from 'react-awesome-reveal';
import { PersonalInfo } from '../json/personalData';

export default function EducationSection() {
  const education = PersonalInfo.education || [];
  const certifications = [
    {
      name: 'Oracle OCP/OCA',
      issuer: 'Oracle Corporation',
      icon: '🏆',
      description: 'Oracle Certified Professional/Associate in Database Administration',
      year: 'Multiple Years',
    },
    {
      name: 'GoldenGate',
      issuer: 'Oracle Corporation',
      icon: '🔄',
      description: 'Oracle GoldenGate for real-time data replication and integration',
      year: 'Certified',
    },
    {
      name: 'RAC',
      issuer: 'Oracle Corporation',
      icon: '⚡',
      description: 'Oracle Real Application Clusters for high availability',
      year: 'Certified',
    },
    {
      name: 'WebLogic',
      issuer: 'Oracle Corporation',
      icon: '🌐',
      description: 'Oracle WebLogic Server administration and deployment',
      year: 'Certified',
    },
    {
      name: 'VMware',
      issuer: 'VMware',
      icon: '💻',
      description: 'VMware virtualization and infrastructure management',
      year: 'Certified',
    },
    {
      name: 'SQL Server',
      issuer: 'Microsoft',
      icon: '💾',
      description: 'Microsoft SQL Server administration and optimization',
      year: 'Certified',
    },
  ];

  return (
    <section id="education" className="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32">
      <div className="container mx-auto flex flex-col items-center px-4 sm:px-5 md:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <Fade direction="right" triggerOnce>
          <div className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16">
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-light-theme-purple text-theme-purple rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
              Credentials
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-8xl text-theme-blue font-bold mb-4 sm:mb-6">
              Education & Certifications
            </h1>
            <p className="font-light text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl lg:max-w-3xl mx-auto px-4 sm:px-0">
              Academic qualifications and professional certifications in database technologies
            </p>
          </div>
        </Fade>

        {/* Education Section */}
        {education.length > 0 && (
          <div className="w-full max-w-6xl mb-12 sm:mb-14 md:mb-16">
            <Fade direction="down" triggerOnce>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-theme-blue mb-6 sm:mb-8 text-center">
                EDUCATION
              </h2>
            </Fade>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-7 md:gap-8">
              {education.map((edu, index) => (
                <Fade direction="up" delay={index * 100} triggerOnce key={edu.degree}>
                  <div className="group bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-7 md:p-8 border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 transform relative overflow-hidden flex flex-col h-full min-h-[200px]">
                    <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-theme-purple to-dark-theme-purple opacity-10 rounded-full -mr-10 -mt-10 sm:-mr-12 sm:-mt-12" />
                    <div className="relative flex flex-col h-full">
                      <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">🎓</div>
                      <h3 className="text-xl sm:text-2xl font-bold text-theme-blue mb-2 sm:mb-3 leading-tight">
                        {edu.degree}
                      </h3>
                      <p className="text-theme-purple font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
                        {edu.field}
                      </p>
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4 flex-grow">
                        {edu.university}
                      </p>
                      <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-light-theme-purple text-theme-purple rounded-full text-xs sm:text-sm font-medium">
                        {edu.type}
                      </span>
                    </div>
                  </div>
                </Fade>
              ))}
            </div>
          </div>
        )}

        {/* Certifications Section */}
        <div className="w-full max-w-6xl mb-12 sm:mb-14 md:mb-16">
          <Fade direction="down" triggerOnce>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-theme-blue mb-6 sm:mb-8 text-center">
              CERTIFICATIONS
            </h2>
          </Fade>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
            {certifications.map((cert, index) => (
              <Fade direction="up" delay={index * 100} triggerOnce key={cert.name}>
                <div className="group bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-7 md:p-8 border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 transform relative overflow-hidden flex flex-col h-full min-h-[200px]">
                  <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-theme-purple to-dark-theme-purple opacity-10 rounded-full -mr-10 -mt-10 sm:-mr-12 sm:-mt-12" />
                  <div className="relative flex flex-col h-full">
                    <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">{cert.icon}</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-theme-blue mb-1 sm:mb-2">{cert.name}</h3>
                    <p className="text-theme-purple font-semibold mb-2 sm:mb-3 text-sm sm:text-base">{cert.issuer}</p>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 flex-grow">{cert.description}</p>
                    <span className="inline-block px-2 sm:px-3 py-1 bg-light-theme-purple text-theme-purple rounded-full text-xs font-medium">
                      {cert.year}
                    </span>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>

        <Fade direction="up" delay={600} triggerOnce>
          <div className="max-w-4xl lg:max-w-5xl w-full px-4 sm:px-0">
            <div className="bg-gradient-to-r from-theme-blue to-theme-purple rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-12 text-white shadow-2xl">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center">Continuous Learning</h3>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-center opacity-95 mb-6 sm:mb-8 px-2 sm:px-0">
                I stay current with the latest database technologies through continuous learning,
                hands-on practice, and maintaining industry certifications. My commitment to
                professional development ensures I can deliver cutting-edge solutions for
                mission-critical systems.
              </p>
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                <span className="px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-white/20 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium">
                  Oracle 21c Latest Features
                </span>
                <span className="px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-white/20 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium">
                  Cloud-Native Architectures
                </span>
                <span className="px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-white/20 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium">
                  DevOps Best Practices
                </span>
                <span className="px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-white/20 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium">
                  Security Standards
                </span>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}
