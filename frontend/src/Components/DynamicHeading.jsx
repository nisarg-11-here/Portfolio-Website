import React from "react";
import "./DynamicHeading.css"; // Import the CSS file for styling

const DynamicHeading = ({ text }) => {
  return (
    <div className="dynamic-heading">
      {text.split('').map((char, index) => (
        <span
          key={index}
          className={char === ' ' ? 'dynamic-space' : 'dynamic-char'}
        >
          {char}
        </span>
      ))}
    </div>
  );
};

export default DynamicHeading;
