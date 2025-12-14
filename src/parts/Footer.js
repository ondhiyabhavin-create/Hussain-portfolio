/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from "react";

import { Fade } from 'react-awesome-reveal';

import BrandIcon from "./BrandIcon";
import Button from "../elements/Button";
import { PersonalInfo } from "../json/personalData";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 border-t-2 border-gray-200 py-12 sm:py-14 md:py-16">
      <div className="container mx-auto px-4 sm:px-5 md:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 max-w-5xl lg:max-w-6xl mx-auto mb-8 sm:mb-10 md:mb-12">
          <Fade direction="up" triggerOnce>
            <div>
              <BrandIcon />
              <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-xs sm:max-w-sm">
                {PersonalInfo.tagline}
              </p>
              <div className="mt-4 sm:mt-6 flex items-center space-x-2">
                <span className="text-xl sm:text-2xl">👨‍💻</span>
                <span className="text-sm sm:text-base text-gray-600 font-medium">{PersonalInfo.yearsOfExperience} Years Experience</span>
              </div>
            </div>
          </Fade>

          <Fade direction="up" delay={200} triggerOnce>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-theme-blue mb-4 sm:mb-6">Contact</h2>
              <div className="space-y-3 sm:space-y-4">
                <a
                  href={`mailto:${PersonalInfo.email}`}
                  className="flex items-center space-x-2 sm:space-x-3 text-sm sm:text-base md:text-lg text-gray-600 hover:text-theme-purple transition-colors group"
                >
                  <span className="text-lg sm:text-xl">📧</span>
                  <span className="group-hover:underline break-all">{PersonalInfo.email}</span>
                </a>
                {PersonalInfo.phone && (
                  <a
                    href={`tel:${PersonalInfo.phone}`}
                    className="flex items-center space-x-2 sm:space-x-3 text-sm sm:text-base md:text-lg text-gray-600 hover:text-theme-purple transition-colors group"
                  >
                    <span className="text-lg sm:text-xl">📞</span>
                    <span className="group-hover:underline">{PersonalInfo.phone}</span>
                  </a>
                )}
                <div className="flex items-center space-x-2 sm:space-x-3 text-sm sm:text-base md:text-lg text-gray-600">
                  <span className="text-lg sm:text-xl">📍</span>
                  <span>{PersonalInfo.location}</span>
                </div>
              </div>
            </div>
          </Fade>

          <Fade direction="up" delay={400} triggerOnce>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-theme-blue mb-4 sm:mb-6">Connect</h2>
              {PersonalInfo.linkedin && (
                <Button
                  href={PersonalInfo.linkedin}
                  type="link"
                  target="_blank"
                  className="inline-flex items-center space-x-2 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-[#0077b5] text-white rounded-lg hover:bg-[#005885] hover:shadow-lg hover:scale-105 transition-all duration-300 transform text-sm sm:text-base"
                  isExternal
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <span>LinkedIn</span>
                </Button>
              )}
              <div className="mt-6 sm:mt-8">
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">Available for:</p>
                <div className="space-y-1.5 sm:space-y-2">
                  <div className="flex items-center space-x-2 text-sm sm:text-base text-gray-600">
                    <span className="text-theme-purple">✓</span>
                    <span>Database Consulting</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm sm:text-base text-gray-600">
                    <span className="text-theme-purple">✓</span>
                    <span>Project Collaboration</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm sm:text-base text-gray-600">
                    <span className="text-theme-purple">✓</span>
                    <span>Technical Advisory</span>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>

        <Fade direction="up" delay={600} triggerOnce>
          <div className="border-t border-gray-300 pt-6 sm:pt-8 text-center">
            <p className="text-sm sm:text-base md:text-lg text-gray-600">
              © 2025 <span className="font-semibold text-theme-blue">{PersonalInfo.name}</span>. All rights reserved.
            </p>
            <p className="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-2">
              Built with passion for database excellence
            </p>
          </div>
        </Fade>
      </div>
    </footer>
  );
}
