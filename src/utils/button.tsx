import React, { useState } from "react";

interface ButtonProps {
  text: string;
  textColor?: string;
  bgColor?: string;
  onClick: () => void;
  borderColor?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  textColor = "#ffffff",
  bgColor = "#007bff",
  borderColor = "#007bff",
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false); // Track hover state

  const buttonStyles: React.CSSProperties = {
    color: isHovered ? bgColor : textColor, // Change text color on hover
    backgroundColor: isHovered ? "transparent" : bgColor, // Change bg to transparent on hover
    border: `1px solid ${isHovered ? bgColor : borderColor}`, // Border color changes on hover
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "2px",
    cursor: "pointer",
    transition: "all 0.3s ease", // Smooth transition for hover effect
  };

  return (
    <button
      className="unversal_button"
      style={buttonStyles}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)} 
    >
      {text}
    </button>
  );
};

export default Button;
