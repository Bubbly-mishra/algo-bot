import React from 'react';

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return <input {...props} className="input" />;
};

export default Input;
