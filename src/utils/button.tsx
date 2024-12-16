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
    color: isHovered ? bgColor : textColor,
    backgroundColor: isHovered ? "transparent" : bgColor, 
    border: `1px solid ${isHovered ? bgColor : borderColor}`, 
    padding: "clamp(8px, 2vw, 12px) clamp(12px, 3vw, 24px)", 
    fontSize: "clamp(14px, 1.5vw, 18px)", 
    borderRadius: "4px",
    cursor: "pointer",
    transition: "all 0.3s ease", 
  };

  return (
    <button
      className="universal_button"
      style={buttonStyles}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)} // Set hover state
      onMouseLeave={() => setIsHovered(false)} // Reset hover state
    >
      {text}
    </button>
  );
};

export default Button;
