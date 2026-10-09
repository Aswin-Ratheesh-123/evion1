import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'glass' | 'interactive';
  className?: string;
  glow?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  className = '',
  glow = false,
  ...props
}) => {
  const variantStyles = {
    default: 'bg-[#FFFFFF] text-[#000000] border border-[#E5E5E5] shadow-sm',
    elevated: 'bg-[#FFFFFF] text-[#000000] border border-[#E5E5E5] shadow-lg',
    glass: 'bg-[#FFFFFF]/90 backdrop-blur-xl text-[#000000] border border-[#E5E5E5] shadow-md',
    interactive: 'bg-[#FFFFFF] text-[#000000] border border-[#E5E5E5] hover:border-[#6DBE07] hover:shadow-[0_10px_30px_rgba(109,190,7,0.12)] transition-all duration-300',
  };

  return (
    <div
      className={twMerge(
        clsx(
          'rounded-3xl p-6 relative overflow-hidden',
          variantStyles[variant],
          glow && 'hover:border-[#6DBE07] hover:shadow-[0_10px_30px_rgba(109,190,7,0.12)] transition-all duration-300',
          className
        )
      )}
      {...props}
    >
      {children}
    </div>
  );
};
