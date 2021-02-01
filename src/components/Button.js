import React from "react";
import "../styles/Button.css";
import { Link } from "react-router-dom";

const STYLES = ['btn--primary', 'btn--outline', 'btn--main--outline'];

const SIZES = ['btn--medium', 'btn--main--medium', 'btn--large', 'btn--main--large'];

export const Button = ({
  link,
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to={link} className='btn-mobile' >
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
