/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';

import Button from '../../elements/Button';
import { PersonalInfo } from '../../json/personalPortfolioData';

export default function FooterPersonal() {
  return (
    <div className="bg-gray-50 border-t border-gray-200 pb-6">
      <div className="container flex-col mx-auto">
        <div className="flex flex-col sm:flex-row mt-8 justify-center">
          <div className="w-1/3 flex-col ml-16 mr-8">
            <Button className="" type="link" href="/personal">
              <p className="text-theme-blue text-4xl font-medium mb-4">
                {PersonalInfo.name.split(' ')[0]}
                <span className="text-theme-purple">.dev</span>
              </p>
            </Button>
            <p className="w-full text-lg text-gray-400 font-light">
              {PersonalInfo.tagline}
            </p>
          </div>
          <div className="w-1/3 mt-0 ml-16 mr-0 sm:ml-0 sm:mr-5">
            <h1 className="text-lg text-theme-blue pt-4 pb-2">Email</h1>
            <a
              href={`mailto:${PersonalInfo.email}`}
              className="text-lg text-gray-400 font-light hover:text-theme-purple transition-colors"
            >
              {PersonalInfo.email}
            </a>
          </div>
          <div className="w-1/3 ml-16 sm:ml-0 mt-0">
            <h1 className="text-lg text-theme-blue pt-4 pb-2">Social</h1>
            <Button
              href={PersonalInfo.github}
              type="link"
              target="_blank"
              className="flex text-lg text-gray-400 font-light hover:underline hover:text-theme-purple transition-colors mb-2"
              isExternal
            >
              GitHub
            </Button>
            <Button
              href={PersonalInfo.linkedin}
              type="link"
              target="_blank"
              className="flex text-lg text-gray-400 font-light hover:underline hover:text-theme-purple transition-colors"
              isExternal
            >
              LinkedIn
            </Button>
          </div>
        </div>
        <div className="flex-col text-center mt-7">
          <p className="text-lg text-gray-400 font-light">
            Copyright 2025 - All rights reserved - {PersonalInfo.name}
          </p>
        </div>
      </div>
    </div>
  );
}


