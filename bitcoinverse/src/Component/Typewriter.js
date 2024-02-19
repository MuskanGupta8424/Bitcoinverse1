import React, { useState, useEffect } from 'react';

const Typewriter = ({ text='' }) => {
  const [currentText, setCurrentText] = useState('');
  let fillTimer;
  let reverseTimer;
  let currentIndex = 0;

  const fillText = () => {
    fillTimer = setInterval(() => {
      setCurrentText((prevText) => {
        if (currentIndex >= text.length) {
          clearInterval(fillTimer);
          reverseText();
          return prevText;
        }
        return prevText + text[currentIndex++];
      });
    }, 250);
  };

//   const reverseText = () => {
//     reverseTimer = setInterval(() => {
//       setCurrentText((prevText) => {
//         if (currentIndex < 0) {
//           clearInterval(reverseTimer);
//           currentIndex = 0;
//           fillText();
//           return prevText.slice(0, -1);
//         }
//         currentIndex--;
//         return prevText.slice(0, -1);
//       });
//     }, 250);
//   };

const reverseText = () => {
    reverseTimer = setInterval(() => {
      setCurrentText((prevText) => {
        if (!text && currentIndex < 0) {
          clearInterval(reverseTimer);
          currentIndex = 0;
          fillText();
          return prevText.slice(0, -1);
        }
        currentIndex--;
        return prevText.slice(0, -1);
      });
    }, 250);
  };
  
  useEffect(() => {
    if (text && text.length > 0) {
      fillText();
    }

    return () => {
      clearInterval(fillTimer);
      clearInterval(reverseTimer);
    };
  }, [text]);

  return <span>{currentText}</span>;
};

export default Typewriter;
