/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import React from 'react';

import { Fade } from 'react-awesome-reveal';

import { Skills } from '../json/personalData';

export default function SkillsSection() {
  const skillCategories = [
    {
      title: 'Oracle Database',
      icon: '🗄️',
      skills: Skills.oracle,
      description: 'Expert in Oracle database administration, RAC, ASM, and high availability',
      gradient: 'from-purple-500 to-purple-700',
    },
    {
      title: 'SQL Server',
      icon: '💾',
      skills: Skills.sqlServer,
      description: 'SQL Server administration, Azure SQL, and high availability solutions',
      gradient: 'from-blue-500 to-blue-700',
    },
    {
      title: 'Middleware',
      icon: '🔧',
      skills: Skills.middleware,
      description: 'WebLogic administration , Deployment and Oracle Apps DBA expertise',
      gradient: 'from-green-500 to-green-700',
    },
    {
      title: 'Cloud Platforms',
      icon: '☁️',
      skills: Skills.cloud,
      description: 'OCI, AWS, Azure SQL, and cloud migration strategies',
      gradient: 'from-indigo-500 to-indigo-700',
    },
    {
      title: 'DevOps & Automation',
      icon: '🔄',
      skills: Skills.devops,
      description: 'CI/CD pipelines, infrastructure as code, and automation',
      gradient: 'from-pink-500 to-pink-700',
    },
    {
      title: 'Security & Compliance',
      icon: '🛡️',
      skills: Skills.security,
      description: 'TDE, Vault, and compliance with GDPR, ISO, SOX, HIPAA',
      gradient: 'from-red-500 to-red-700',
    },
    {
      title: 'Oracle EBS Suite',
      icon: '📊',
      skills: Skills.oracleEBS,
      description: 'Oracle E-Business Suite installation, patching, cloning, and performance optimization',
      gradient: 'from-orange-500 to-orange-700',
    },
    {
      title: 'Oracle Exadata',
      icon: '⚡',
      skills: Skills.oracleExadata,
      description: 'Oracle Exadata database machine administration, storage cells, and performance tuning',
      gradient: 'from-yellow-500 to-yellow-700',
    },
    {
      title: 'Linux Administration',
      icon: '💻',
      skills: Skills.oracleLinux,
      description: 'Oracle Linux system administration, kernel tuning, and security hardening',
      gradient: 'from-cyan-500 to-cyan-700',
    },
  ];

  return (
    <section id="skills" className="bg-white py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32">
      <div className="container mx-auto flex flex-col items-center px-4 sm:px-5 md:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <Fade direction="right" triggerOnce>
          <div className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16">
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-light-theme-purple text-theme-purple rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
              Technical Expertise
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-8xl text-theme-blue font-bold mb-4 sm:mb-6">
              Skills & Tech Stack
            </h1>
            <p className="font-light text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl lg:max-w-3xl mx-auto px-4 sm:px-0">
              Technologies and tools I work with to build scalable, secure,
              and highly available database systems
            </p>
          </div>
        </Fade>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8 max-w-6xl lg:max-w-7xl w-full">
          {skillCategories.map((category, index) => (
            <Fade direction="up" delay={index * 100} triggerOnce key={category.title}>
              <div className="group bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-7 md:p-8 border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 transform relative overflow-hidden flex flex-col h-full min-h-[320px] sm:min-h-[360px] md:min-h-[400px]">
                <div className={`absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br ${category.gradient} opacity-10 rounded-full -mr-12 -mt-12 sm:-mr-16 sm:-mt-16`} />
                <div className="relative flex flex-col h-full">
                  <div className="text-4xl sm:text-5xl mb-3 sm:mb-4 flex-shrink-0">{category.icon}</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-theme-blue mb-2 sm:mb-3 flex-shrink-0">{category.title}</h3>
                  <p className="text-gray-600 mb-4 sm:mb-6 text-xs sm:text-sm leading-relaxed flex-grow min-h-[40px]">{category.description}</p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto">
                    {category.skills.map((skill) => (
                      <div
                        key={skill}
                        className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-light-theme-purple to-white border border-light-theme-purple rounded-lg text-theme-blue font-medium text-xs sm:text-sm hover:scale-105 transition-transform shadow-sm"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Fade>
          ))}
        </div>

        <Fade direction="up" delay={600} triggerOnce>
          <div className="mt-12 sm:mt-16 md:mt-20 max-w-5xl lg:max-w-6xl xl:max-w-7xl w-full px-4 sm:px-0">
            <div className="bg-gradient-to-r from-theme-purple to-dark-theme-purple rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-12 text-white shadow-2xl">
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-center">Core Competencies</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 sm:p-7 md:p-8 flex flex-col h-full">
                  <h4 className="font-bold text-base sm:text-lg mb-2 sm:mb-3">Database Administration</h4>
                  <p className="text-xs sm:text-sm opacity-90 flex-grow">
                    Oracle Databases, SQL Server, performance tuning, backup & recovery
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 sm:p-7 md:p-8 flex flex-col h-full">
                  <h4 className="font-bold text-base sm:text-lg mb-2 sm:mb-3">High Availability</h4>
                  <p className="text-xs sm:text-sm opacity-90 flex-grow">
                    RAC, Data Guard, GoldenGate, Always On, clustering solutions
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 sm:p-7 md:p-8 flex flex-col h-full">
                  <h4 className="font-bold text-base sm:text-lg mb-2 sm:mb-3">Cloud & DevOps</h4>
                  <p className="text-xs sm:text-sm opacity-90 flex-grow">
                    OCI, Azure, Jenkins, GitLab CI, Ansible, Terraform automation
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 sm:p-7 md:p-8 flex flex-col h-full">
                  <h4 className="font-bold text-base sm:text-lg mb-2 sm:mb-3">Security & Compliance</h4>
                  <p className="text-xs sm:text-sm opacity-90 flex-grow">
                    TDE, Vault, GDPR, ISO, SOX, HIPAA compliance implementation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}
