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

  // Detect active section on scroll with smooth transitions
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const sections = ['home', 'about', 'skills', 'education', 'projects', 'experience', 'contact'];
          const scrollPosition = window.scrollY + 250; // Increased offset for better detection

          // Check if at top of page
          if (window.scrollY < 150) {
            setActiveSection('home');
            ticking = false;
            return;
          }

          // Find active section
          for (let i = sections.length - 1; i >= 0; i -= 1) {
            const section = document.getElementById(sections[i]);
            if (section) {
              const sectionTop = section.offsetTop;
              const sectionHeight = section.offsetHeight;
              const sectionBottom = sectionTop + sectionHeight;

              if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                setActiveSection(sections[i]);
                ticking = false;
                return;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    if (path === '/') {
      window.addEventListener('scroll', handleScroll, { passive: true });
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
        // Smooth scroll with offset for fixed header
        const headerHeight = 80;
        const elementPosition = element.getBoundingClientRect().top
          + window.pageYOffset;
        const offsetPosition = elementPosition - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <header className="header fixed top-0 left-0 right-0 z-50 bg-white shadow-lg border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 py-2 sm:py-3 lg:py-4 relative z-50">
        <BrandIcon />

        <button
          type="button"
          className="lg:hidden relative z-50 p-2 rounded-lg text-theme-blue hover:bg-gray-100 focus:outline-none transition-all duration-300 transform hover:scale-110 cursor-pointer"
          onClick={() => setIsCollapse(!isCollapse)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6 relative z-50" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {isCollapse ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
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
              className={`relative px-3 xl:px-4 2xl:px-5 py-2 rounded-full font-medium text-xs xl:text-sm transition-all duration-500 ease-in-out transform hover:scale-110 cursor-pointer ${
                isActive
                  ? 'bg-gradient-to-r from-theme-purple to-dark-theme-purple text-white shadow-lg scale-105'
                  : 'text-gray-700 hover:text-theme-purple hover:bg-gray-100'
              }`}
            >
              <span className="relative z-10">{item.name}</span>
              {isActive && (
                <span className="absolute inset-0 bg-gradient-to-r from-theme-purple to-dark-theme-purple rounded-full animate-pulse opacity-75" />
              )}
            </button>
          );
        })}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            setIsCollapse(false);
            if (path !== '/') {
              window.location.href = '/#contact';
            } else {
              const element = document.getElementById('contact');
              if (element) {
                const headerHeight = 80;
                const elementPosition = element.getBoundingClientRect().top
                  + window.pageYOffset;
                const offsetPosition = elementPosition - headerHeight;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth',
                });
              }
            }
          }}
          className={`relative ml-1 xl:ml-2 px-4 xl:px-5 2xl:px-6 py-2 rounded-full font-medium text-xs xl:text-sm transition-all duration-500 ease-in-out transform hover:scale-110 cursor-pointer ${
            path === '/' && activeSection === 'contact'
              ? 'bg-gradient-to-r from-theme-purple to-dark-theme-purple text-white shadow-lg scale-105'
              : 'text-gray-700 hover:text-theme-purple hover:bg-gray-100'
          }`}
        >
          <span className="relative z-10">Contact</span>
          {path === '/' && activeSection === 'contact' && (
            <span className="absolute inset-0 bg-gradient-to-r from-theme-purple to-dark-theme-purple rounded-full animate-pulse opacity-75" />
          )}
        </button>
      </nav>

      <Transition
        show={isCollapse}
        enter="transition ease-out duration-300 transform"
        enterFrom="opacity-0 -translate-y-4 scale-95"
        enterTo="opacity-100 translate-y-0 scale-100"
        leave="transition ease-in duration-200 transform"
        leaveFrom="opacity-100 translate-y-0 scale-100"
        leaveTo="opacity-0 -translate-y-4 scale-95"
      >
        <div className="lg:hidden fixed top-0 left-0 right-0 bottom-0 bg-white z-40 pt-16 sm:pt-20 shadow-2xl overflow-y-auto">
          <nav className="container mx-auto px-4 sm:px-6 py-6">
            <ul className="flex flex-col space-y-3">
              {navItems.map((item) => {
                const isActive = path === '/' && activeSection === item.id;
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={(e) => handleNavClick(e, item)}
                      className={`relative w-full px-5 py-3.5 rounded-xl font-semibold text-base transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-md cursor-pointer ${
                        isActive
                          ? 'bg-gradient-to-r from-theme-purple to-dark-theme-purple text-white shadow-lg scale-105'
                          : 'text-gray-800 hover:text-theme-purple hover:bg-gray-100 border border-gray-200'
                      }`}
                    >
                      <span className="relative z-10">{item.name}</span>
                      {isActive && (
                        <span className="absolute inset-0 bg-gradient-to-r from-theme-purple to-dark-theme-purple rounded-xl animate-pulse opacity-75" />
                      )}
                    </button>
                  </li>
                );
              })}
              <li className="pt-2">
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsCollapse(false);
                    if (path !== '/') {
                      window.location.href = '/#contact';
                    } else {
                      const element = document.getElementById('contact');
                      if (element) {
                        const headerHeight = 80;
                        const elementPosition = element.getBoundingClientRect().top
                          + window.pageYOffset;
                        const offsetPosition = elementPosition - headerHeight;
                        window.scrollTo({
                          top: offsetPosition,
                          behavior: 'smooth',
                        });
                      }
                    }
                  }}
                  className={`relative w-full px-5 py-3.5 rounded-xl font-semibold text-base transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-md cursor-pointer ${
                    path === '/' && activeSection === 'contact'
                      ? 'bg-gradient-to-r from-theme-purple to-dark-theme-purple text-white shadow-lg scale-105'
                      : 'text-gray-800 hover:text-theme-purple hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  <span className="relative z-10">Contact</span>
                  {path === '/' && activeSection === 'contact' && (
                    <span className="absolute inset-0 bg-gradient-to-r from-theme-purple to-dark-theme-purple rounded-xl animate-pulse opacity-75" />
                  )}
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </Transition>
    </header>
  );
}
