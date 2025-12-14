/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import React, { useState } from 'react';

import { Transition } from '@headlessui/react';
import { useLocation } from 'react-router-dom';

import Button from '../../elements/Button';
import { PersonalInfo } from '../../json/personalPortfolioData';

export default function HeaderPersonal() {
  const [isCollapse, setIsCollapse] = useState(false);
  const location = useLocation();
  const path = location.pathname;

  const navLinks = [
    { href: '/personal', label: 'Home' },
    { href: '/personal#about', label: 'About' },
    { href: '/personal#skills', label: 'Skills' },
    { href: '/personal#experience', label: 'Experience' },
    { href: '/personal#projects', label: 'Projects' },
    { href: '/personal#contact', label: 'Contact' },
  ];

  const handleNavClick = (e, href) => {
    if (href.includes('#')) {
      e.preventDefault();
      const hash = href.split('#')[1];
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setIsCollapse(false);
    } else {
      setIsCollapse(false);
      // Let NavLink handle the navigation
    }
  };

  return (
    <header className="header">
      <div className="flex justify-between px-4 lg:px-0">
        <Button className="" type="link" href="/personal">
          <p className="text-theme-blue text-4xl font-medium">
            {PersonalInfo.name.split(' ')[0]}
            <span className="text-theme-purple">.dev</span>
          </p>
        </Button>

        <button
          type="button"
          className="block text-theme-blue lg:hidden focus:outline-none"
          onClick={() => setIsCollapse(!isCollapse)}
        >
          <svg
            className="w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              className={isCollapse ? 'hidden' : 'block'}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
            <path
              className={!isCollapse ? 'hidden' : 'block'}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <ul className="hidden text-theme-blue tracking-widest items-center lg:flex flex-row mt-0">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Button
              className={`${path === link.href || (path === '/personal' && link.href === '/personal') ? 'active-link' : ''} font-medium text-lg px-5 no-underline hover:underline`}
              type="link"
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </Button>
          </li>
        ))}
        <li>
          <Button
            className="font-medium text-lg mx-auto ml-3 px-6 py-2 bg-theme-purple text-white rounded-full border-2 border-theme-purple hover:bg-dark-theme-purple border-purple-800 transition duration-200"
            type="link"
            href="/personal#contact"
            onClick={(e) => handleNavClick(e, '/personal#contact')}
          >
            Let&apos;s Talk
          </Button>
        </li>
      </ul>

      <Transition
        show={isCollapse}
        enter="transition-opacity duration-400"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-400"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="transition duration-300 ease-in data-[closed]:opacity-0">
          <ul className="z-50 flex flex-col text-theme-blue tracking-widest my-6 absolute bg-white w-full border-b-2 border-gray-300 lg:hidden">
            {navLinks.map((link) => (
              <li key={link.href} className="py-2 bg-white">
                <Button
                  className={`${path === link.href || (path === '/personal' && link.href === '/personal') ? 'active-link' : ''} font-medium px-10 no-underline hover:underline`}
                  type="link"
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </Button>
              </li>
            ))}
            <li className="mx-auto my-9 bg-white">
              <Button
                className="font-bold mx-auto px-5 py-2 bg-theme-purple text-white rounded-full border-2 border-theme-purple hover:bg-dark-theme-purple border-purple-800 transition duration-200"
                type="link"
                href="/personal#contact"
                onClick={(e) => handleNavClick(e, '/personal#contact')}
              >
                Let&apos;s Talk
              </Button>
            </li>
          </ul>
        </div>
      </Transition>
    </header>
  );
}
