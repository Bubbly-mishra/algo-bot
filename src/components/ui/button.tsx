import React from 'react';

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  return <button {...props} className="button" />;
};

export default Button;
