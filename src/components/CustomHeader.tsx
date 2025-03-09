import React from 'react';

interface CustomHeaderProps {
  title: string;
  description: string;
}

export const CustomHeader: React.FC<CustomHeaderProps> = ({
  title,
  description,
}) => {
  return (
    <div className="text-left">
      <h2 className="font-mono text-2xl bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">{title}</h2>
      <p className="text-lg text-gray-400 mt-5">{description}</p>
    </div>
  );
};
