/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

import { Fade } from 'react-awesome-reveal';
import { Transition } from '@headlessui/react';
import { useLocation } from 'react-router-dom';

import Button from '../elements/Button';
import BrandIcon from './BrandIcon';

export default function Header() {
  const [isCollapse, setIsCollapse] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();
  const path = location.pathname;

  // Detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'education', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 200;

      // Check if at top of page
      if (window.scrollY < 100) {
        setActiveSection('home');
        return;
      }

      // Find active section
      for (let i = sections.length - 1; i >= 0; i -= 1) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    if (path === '/') {
      window.addEventListener('scroll', handleScroll);
      handleScroll();
      return () => window.removeEventListener('scroll', handleScroll);
    }
    return () => {};
  }, [path]);

  const navItems = [
    {
      name: 'Home', href: '/', id: 'home',
    },
    {
      name: 'About', href: '/#about', id: 'about',
    },
    {
      name: 'Skills', href: '/#skills', id: 'skills',
    },
    {
      name: 'Education', href: '/#education', id: 'education',
    },
    {
      name: 'Project', href: '/#projects', id: 'projects',
    },
    {
      name: 'Experience', href: '/#experience', id: 'experience',
    },
  ];

  const handleNavClick = (e, item) => {
    e.preventDefault();
    setIsCollapse(false);
    if (path !== '/') {
      window.location.href = item.href;
    } else {
      const element = document.getElementById(item.id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="header fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50">
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 py-2 sm:py-3 lg:py-4">
        <BrandIcon />

        <button
          type="button"
          className="lg:hidden p-2 rounded-lg text-theme-blue hover:bg-gray-100 focus:outline-none transition-colors"
          onClick={() => setIsCollapse(!isCollapse)}
        >
          <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isCollapse ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 ml-auto">
        {navItems.map((item) => {
          const isActive = path === '/' && activeSection === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={(e) => handleNavClick(e, item)}
              className={`px-3 xl:px-4 2xl:px-5 py-2 rounded-full font-medium text-xs xl:text-sm transition-all duration-300 ${
                isActive
                  ? 'bg-gradient-to-r from-theme-purple to-dark-theme-purple text-white shadow-md'
                  : 'text-gray-700 hover:text-theme-purple'
              }`}
            >
              {item.name}
            </button>
          );
        })}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            if (path !== '/') {
              window.location.href = '/#contact';
            } else {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className={`ml-1 xl:ml-2 px-4 xl:px-5 2xl:px-6 py-2 rounded-full font-medium text-xs xl:text-sm transition-all duration-300 ${
            path === '/' && activeSection === 'contact'
              ? 'bg-gradient-to-r from-theme-purple to-dark-theme-purple text-white shadow-md'
              : 'text-gray-700 hover:text-theme-purple'
          }`}
        >
          Contact
        </button>
      </nav>

      <Transition
        show={isCollapse}
        enter="transition ease-out duration-300"
        enterFrom="opacity-0 -translate-y-2"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-200"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-2"
      >
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-md shadow-xl border-b border-gray-200">
          <nav className="container mx-auto px-4 py-4">
            <ul className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const isActive = path === '/' && activeSection === item.id;
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={(e) => handleNavClick(e, item)}
                      className={`w-full px-4 py-3 rounded-lg font-medium text-base transition-all duration-300 ${
                        isActive
                          ? 'bg-gradient-to-r from-theme-purple to-dark-theme-purple text-white shadow-md'
                          : 'text-gray-700 hover:text-theme-purple hover:bg-gray-50'
                      }`}
                    >
                      {item.name}
                    </button>
                  </li>
                );
              })}
              <li className="pt-1">
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsCollapse(false);
                    if (path !== '/') {
                      window.location.href = '/#contact';
                    } else {
                      const element = document.getElementById('contact');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className={`w-full px-4 py-3 rounded-lg font-medium text-base transition-all duration-300 ${
                    path === '/' && activeSection === 'contact'
                      ? 'bg-gradient-to-r from-theme-purple to-dark-theme-purple text-white shadow-md'
                      : 'text-gray-700 hover:text-theme-purple hover:bg-gray-50'
                  }`}
                >
                  Contact
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </Transition>
    </header>
  );
}
