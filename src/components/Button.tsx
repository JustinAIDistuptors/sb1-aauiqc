import React from 'react';

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({ 
  href, 
  onClick, 
  children, 
  className = '',
  type = 'button'
}) => {
  const baseClasses = 'inline-block bg-purple-600 text-white px-6 py-3 rounded-full font-semibold ' +
                     'transition-all duration-300 hover:transform hover:-translate-y-0.5 ' +
                     'hover:shadow-lg hover:shadow-purple-600/30 focus:outline-none focus:ring-2 ' +
                     'focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black';

  if (href) {
    return (
      <a href={href} className={`${baseClasses} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <button 
      type={type} 
      onClick={onClick} 
      className={`${baseClasses} ${className}`}
    >
      {children}
    </button>
  );
};