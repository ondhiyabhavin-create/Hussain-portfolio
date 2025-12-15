/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from "react";
import { useLocation } from "react-router-dom";

export default function BrandIcon() {
  const location = useLocation();
  const path = location.pathname;

  const handleClick = (e) => {
    e.preventDefault();
    if (path !== '/') {
      window.location.href = '/#home';
    } else {
      const element = document.getElementById('home');
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
      } else {
        // If home section not found, scroll to top
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="cursor-pointer transition-all duration-300 transform hover:scale-105 focus:outline-none"
      aria-label="Go to home"
    >
      <p className="text-theme-blue text-4xl font-medium">
        Ashfaq
        <span className="text-theme-purple">.dev</span>
      </p>
    </button>
  );
}
