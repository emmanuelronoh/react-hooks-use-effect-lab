// src/components/Question.js

import React, { useEffect, useState } from 'react';

const Question = ({ question, onAnswered }) => {
  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    const timerId = setTimeout(() => {
      onAnswered(false);
    }, 10000); // Call onAnswered after 10 seconds

    return () => {
      clearTimeout(timerId); // Cleanup on unmount
    };
  }, [onAnswered]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(intervalId);
          return 0;
        }
        return prev - 1;
      });
    }, 1000); // Decrement every second

    return () => {
      clearInterval(intervalId); // Cleanup on unmount
    };
  }, []);

  return (
    <div>
      {timeLeft} seconds remaining
    </div>
  );
};

export default Question;
