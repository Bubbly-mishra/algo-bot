import React from 'react';

export const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="card">{children}</div>;
};

export const CardHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="card-header">{children}</div>;
};

export const CardTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <h2 className="card-title">{children}</h2>;
};

export const CardContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="card-content">{children}</div>;
};

export default Card; // If you want to still export Card as default
