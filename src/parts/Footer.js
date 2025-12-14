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
                  className="inline-flex items-center space-x-2 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-gradient-to-r from-theme-purple to-dark-theme-purple text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 transform text-sm sm:text-base"
                  isExternal
                >
                  <span>💼</span>
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
