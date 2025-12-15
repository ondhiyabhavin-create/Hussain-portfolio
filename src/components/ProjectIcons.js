/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';

// E-Commerce Platform SVG Icon
export const ECommerceIcon = ({ className = 'w-full h-full' }) => (
  <svg
    className={className}
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="200" height="200" rx="20" fill="#8B5CF6" fillOpacity="0.1" />
    <path
      d="M60 80L100 50L140 80V150H60V80Z"
      stroke="#8B5CF6"
      strokeWidth="8"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <circle cx="80" cy="120" r="8" fill="#8B5CF6" />
    <circle cx="120" cy="120" r="8" fill="#8B5CF6" />
    <path
      d="M70 140L130 140"
      stroke="#8B5CF6"
      strokeWidth="6"
      strokeLinecap="round"
    />
    <path
      d="M50 60L100 30L150 60"
      stroke="#8B5CF6"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

ECommerceIcon.propTypes = {
  className: PropTypes.string,
};

ECommerceIcon.defaultProps = {
  className: 'w-full h-full',
};

// Real-Time Analytics Dashboard SVG Icon
export const AnalyticsIcon = ({ className = 'w-full h-full' }) => (
  <svg
    className={className}
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="200" height="200" rx="20" fill="#6366F1" fillOpacity="0.1" />
    <rect x="40" y="120" width="20" height="50" rx="4" fill="#6366F1" />
    <rect x="70" y="100" width="20" height="70" rx="4" fill="#6366F1" />
    <rect x="100" y="80" width="20" height="90" rx="4" fill="#6366F1" />
    <rect x="130" y="60" width="20" height="110" rx="4" fill="#6366F1" />
    <path
      d="M50 130L80 110L110 90L140 70"
      stroke="#6366F1"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <circle cx="50" cy="130" r="6" fill="#6366F1" />
    <circle cx="80" cy="110" r="6" fill="#6366F1" />
    <circle cx="110" cy="90" r="6" fill="#6366F1" />
    <circle cx="140" cy="70" r="6" fill="#6366F1" />
  </svg>
);

AnalyticsIcon.propTypes = {
  className: PropTypes.string,
};

AnalyticsIcon.defaultProps = {
  className: 'w-full h-full',
};

// Microservices Architecture SVG Icon
export const MicroservicesIcon = ({ className = 'w-full h-full' }) => (
  <svg
    className={className}
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="200" height="200" rx="20" fill="#10B981" fillOpacity="0.1" />
    <rect x="40" y="60" width="50" height="50" rx="8" fill="#10B981" fillOpacity="0.2" stroke="#10B981" strokeWidth="4" />
    <rect x="110" y="60" width="50" height="50" rx="8" fill="#10B981" fillOpacity="0.2" stroke="#10B981" strokeWidth="4" />
    <rect x="40" y="130" width="50" height="50" rx="8" fill="#10B981" fillOpacity="0.2" stroke="#10B981" strokeWidth="4" />
    <rect x="110" y="130" width="50" height="50" rx="8" fill="#10B981" fillOpacity="0.2" stroke="#10B981" strokeWidth="4" />
    <path
      d="M90 85L110 85"
      stroke="#10B981"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <path
      d="M90 155L110 155"
      stroke="#10B981"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <path
      d="M65 110L65 130"
      stroke="#10B981"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <path
      d="M135 110L135 130"
      stroke="#10B981"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <circle cx="65" cy="85" r="4" fill="#10B981" />
    <circle cx="135" cy="85" r="4" fill="#10B981" />
    <circle cx="65" cy="155" r="4" fill="#10B981" />
    <circle cx="135" cy="155" r="4" fill="#10B981" />
  </svg>
);

MicroservicesIcon.propTypes = {
  className: PropTypes.string,
};

MicroservicesIcon.defaultProps = {
  className: 'w-full h-full',
};

// AI-Powered Recommendation Engine SVG Icon
export const AIIcon = ({ className = 'w-full h-full' }) => (
  <svg
    className={className}
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="200" height="200" rx="20" fill="#F59E0B" fillOpacity="0.1" />
    <circle cx="100" cy="100" r="40" stroke="#F59E0B" strokeWidth="6" fill="none" />
    <circle cx="85" cy="90" r="6" fill="#F59E0B" />
    <circle cx="115" cy="90" r="6" fill="#F59E0B" />
    <path
      d="M85 115Q100 125 115 115"
      stroke="#F59E0B"
      strokeWidth="6"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M60 60L80 50L100 60L120 50L140 60"
      stroke="#F59E0B"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M60 140L80 150L100 140L120 150L140 140"
      stroke="#F59E0B"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <circle cx="70" cy="55" r="3" fill="#F59E0B" />
    <circle cx="130" cy="55" r="3" fill="#F59E0B" />
    <circle cx="70" cy="145" r="3" fill="#F59E0B" />
    <circle cx="130" cy="145" r="3" fill="#F59E0B" />
  </svg>
);

AIIcon.propTypes = {
  className: PropTypes.string,
};

AIIcon.defaultProps = {
  className: 'w-full h-full',
};

// Cloud Migration Project SVG Icon
export const CloudIcon = ({ className = 'w-full h-full' }) => (
  <svg
    className={className}
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="200" height="200" rx="20" fill="#3B82F6" fillOpacity="0.1" />
    <path
      d="M60 100C60 85 72 73 87 73C90 65 98 60 107 60C120 60 130 70 130 83C138 85 145 92 145 100C145 110 137 118 127 118H73C63 118 55 110 55 100C55 90 63 82 73 82C75 82 77 83 78 84C76 78 72 73 67 73C62 73 58 77 58 82C58 87 62 91 67 91C68 91 69 91 70 90C68 95 65 98 60 100Z"
      fill="#3B82F6"
      fillOpacity="0.3"
      stroke="#3B82F6"
      strokeWidth="6"
    />
    <path
      d="M50 120L150 120"
      stroke="#3B82F6"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <path
      d="M70 140L130 140"
      stroke="#3B82F6"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <circle cx="80" cy="130" r="4" fill="#3B82F6" />
    <circle cx="100" cy="130" r="4" fill="#3B82F6" />
    <circle cx="120" cy="130" r="4" fill="#3B82F6" />
    <path
      d="M40 80L50 70L60 80L70 70L80 80"
      stroke="#3B82F6"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

CloudIcon.propTypes = {
  className: PropTypes.string,
};

CloudIcon.defaultProps = {
  className: 'w-full h-full',
};

// API Gateway & Rate Limiting SVG Icon
export const APIGatewayIcon = ({ className = 'w-full h-full' }) => (
  <svg
    className={className}
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="200" height="200" rx="20" fill="#EF4444" fillOpacity="0.1" />
    <rect x="50" y="70" width="100" height="60" rx="8" fill="#EF4444" fillOpacity="0.2" stroke="#EF4444" strokeWidth="6" />
    <path
      d="M70 100L90 100L110 100"
      stroke="#EF4444"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <path
      d="M80 85L100 85"
      stroke="#EF4444"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M80 115L100 115"
      stroke="#EF4444"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M40 100L50 100"
      stroke="#EF4444"
      strokeWidth="6"
      strokeLinecap="round"
    />
    <path
      d="M150 100L160 100"
      stroke="#EF4444"
      strokeWidth="6"
      strokeLinecap="round"
    />
    <circle cx="35" cy="100" r="8" fill="#EF4444" />
    <circle cx="165" cy="100" r="8" fill="#EF4444" />
    <path
      d="M100 50L100 70"
      stroke="#EF4444"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <path
      d="M100 130L100 150"
      stroke="#EF4444"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <circle cx="100" cy="45" r="6" fill="#EF4444" />
    <circle cx="100" cy="155" r="6" fill="#EF4444" />
  </svg>
);

APIGatewayIcon.propTypes = {
  className: PropTypes.string,
};

APIGatewayIcon.defaultProps = {
  className: 'w-full h-full',
};

// Oracle Data Guard DR Implementation SVG Icon
export const DataGuardIcon = ({ className = 'w-full h-full' }) => (
  <svg
    className={className}
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="200" height="200" rx="20" fill="#059669" fillOpacity="0.1" />
    <rect x="50" y="60" width="100" height="80" rx="8" fill="#059669" fillOpacity="0.2" stroke="#059669" strokeWidth="6" />
    <path
      d="M70 90L130 90"
      stroke="#059669"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <path
      d="M70 110L130 110"
      stroke="#059669"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <circle cx="100" cy="100" r="12" fill="#059669" />
    <path
      d="M50 50L100 30L150 50"
      stroke="#059669"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M50 150L100 170L150 150"
      stroke="#059669"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

DataGuardIcon.propTypes = {
  className: PropTypes.string,
};

DataGuardIcon.defaultProps = {
  className: 'w-full h-full',
};

// Oracle RAC ASM SVG Icon
export const RACIcon = ({ className = 'w-full h-full' }) => (
  <svg
    className={className}
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="200" height="200" rx="20" fill="#DC2626" fillOpacity="0.1" />
    <circle cx="80" cy="80" r="25" fill="#DC2626" fillOpacity="0.2" stroke="#DC2626" strokeWidth="6" />
    <circle cx="120" cy="80" r="25" fill="#DC2626" fillOpacity="0.2" stroke="#DC2626" strokeWidth="6" />
    <circle cx="80" cy="120" r="25" fill="#DC2626" fillOpacity="0.2" stroke="#DC2626" strokeWidth="6" />
    <circle cx="120" cy="120" r="25" fill="#DC2626" fillOpacity="0.2" stroke="#DC2626" strokeWidth="6" />
    <path
      d="M105 80L115 80"
      stroke="#DC2626"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <path
      d="M105 120L115 120"
      stroke="#DC2626"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <path
      d="M80 105L80 115"
      stroke="#DC2626"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <path
      d="M120 105L120 115"
      stroke="#DC2626"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <circle cx="100" cy="100" r="8" fill="#DC2626" />
  </svg>
);

RACIcon.propTypes = {
  className: PropTypes.string,
};

RACIcon.defaultProps = {
  className: 'w-full h-full',
};

// Performance Tuning & Optimization SVG Icon
export const PerformanceIcon = ({ className = 'w-full h-full' }) => (
  <svg
    className={className}
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="200" height="200" rx="20" fill="#7C3AED" fillOpacity="0.1" />
    <path
      d="M50 150L70 120L90 130L110 80L130 100L150 60"
      stroke="#7C3AED"
      strokeWidth="8"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <circle cx="70" cy="120" r="8" fill="#7C3AED" />
    <circle cx="90" cy="130" r="8" fill="#7C3AED" />
    <circle cx="110" cy="80" r="8" fill="#7C3AED" />
    <circle cx="130" cy="100" r="8" fill="#7C3AED" />
    <circle cx="150" cy="60" r="8" fill="#7C3AED" />
    <path
      d="M50 150L50 170"
      stroke="#7C3AED"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <path
      d="M50 170L170 170"
      stroke="#7C3AED"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <path
      d="M170 170L170 50"
      stroke="#7C3AED"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <path
      d="M45 60L50 50L55 60"
      stroke="#7C3AED"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

PerformanceIcon.propTypes = {
  className: PropTypes.string,
};

PerformanceIcon.defaultProps = {
  className: 'w-full h-full',
};

// Map project titles to icons
export const getProjectIcon = (title) => {
  const iconMap = {
    'E-Commerce Platform': ECommerceIcon,
    'Real-Time Analytics Dashboard': AnalyticsIcon,
    'Microservices Architecture': MicroservicesIcon,
    'AI-Powered Recommendation Engine': AIIcon,
    'Cloud Migration Project': CloudIcon,
    'API Gateway & Rate Limiting': APIGatewayIcon,
    'Oracle Data Guard DR Implementation': DataGuardIcon,
    'Implementation Oracle RAC ASM': RACIcon,
    'Performance Tuning & Optimization': PerformanceIcon,
  };

  return iconMap[title] || ECommerceIcon;
};
