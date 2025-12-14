/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

export default function TypingAnimation({
  texts, speed = 100, deleteSpeed = 50, delay = 2000,
}) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(speed);

  useEffect(() => {
    const currentFullText = texts[currentTextIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < currentFullText.length) {
          setCurrentText(currentFullText.substring(0, currentText.length + 1));
          setTypingSpeed(speed);
        } else {
          // Finished typing, wait then start deleting
          setTypingSpeed(delay);
          setIsDeleting(true);
        }
      } else if (currentText.length > 0) {
        // Deleting
        setCurrentText(currentFullText.substring(0, currentText.length - 1));
        setTypingSpeed(deleteSpeed);
      } else {
        // Finished deleting, move to next text
        setIsDeleting(false);
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setTypingSpeed(speed);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTextIndex, texts, speed, deleteSpeed, delay, typingSpeed]);

  return (
    <span>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
}
