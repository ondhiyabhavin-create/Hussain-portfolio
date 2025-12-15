/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import React from "react";

import { Fade } from "react-awesome-reveal";

import TypingAnimation from "../components/TypingAnimation";
import { PersonalInfo } from "../json/personalData";
import MaintenanceImage from "../assets/images/hero/maintenance.svg";

export default function Hero() {
  return (
    <section id="home" className="hero flex flex-col lg:flex-row items-start lg:items-center py-8 sm:py-12 lg:py-16 xl:py-20 relative z-10" style={{ overflow: 'visible', scrollMarginTop: '5rem' }}>
      <div className="w-full lg:w-1/2 xl:pl-8 2xl:pl-12 px-4 sm:px-5 lg:px-0" style={{ overflow: 'visible' }}>
        <Fade direction="up" triggerOnce>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-theme-blue font-bold leading-tight mb-4 sm:mb-6">
            Welcome to{' '}
            <span className="text-theme-purple bg-gradient-to-r from-theme-purple to-dark-theme-purple bg-clip-text text-transparent">
              Ashfaq&apos;s
            </span>
            <br />
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">Portfolio</span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-600 font-light mb-6 sm:mb-8">
            {PersonalInfo.role.split('E‑Business Suite').map((part, index) => (
              index === 0 ? (
                <span key={`role-part-${part.slice(0, 10)}`}>
                  {part}
                  <span className="whitespace-nowrap">E‑Business Suite</span>
                </span>
              ) : (
                <span key={`role-part-${part.slice(0, 10)}`}>{part}</span>
              )
            ))}
          </p>
        </Fade>

        <Fade direction="up" delay={200} triggerOnce>
          <div className="mb-6 sm:mb-8 w-full">
            <div
              className="font-light text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl text-gray-600 leading-relaxed w-full"
              style={{
                overflow: 'visible',
                wordWrap: 'break-word',
                whiteSpace: 'normal',
                display: 'block',
                lineHeight: '1.6',
              }}
            >
              <TypingAnimation
                texts={PersonalInfo.taglines || [PersonalInfo.tagline]}
                speed={100}
                deleteSpeed={50}
                delay={3000}
              />
            </div>
          </div>
        </Fade>
      </div>
      <div className="flex pt-16 sm:pt-5 w-full lg:w-1/2 justify-center items-center order-first lg:order-last px-4 sm:px-0">
        <Fade direction="up" delay={300} triggerOnce>
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl relative">
            <div className="relative animate-float">
              <img
                src={MaintenanceImage}
                alt="Database Consultant"
                className="w-full h-auto object-contain transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}
