import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'online' | 'accent' | 'neutral' | 'outline' | 'speed';
  pulse?: boolean;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'neutral',
  pulse = false,
  className = '',
}) => {
  const variantStyles = {
    online: 'bg-[#EFF8E7] text-[#4D8500] border border-[#CFE8B5]',
    accent: 'bg-[#EFF8E7] text-[#4D8500] border border-[#CFE8B5]',
    neutral: 'bg-[#F8F8F8] text-[#000000] border border-[#E5E5E5]',
    outline: 'bg-transparent text-[#000000] border border-[#E5E5E5]',
    speed: 'bg-[#EFF8E7] text-[#000000] border border-[#CFE8B5]',
  };

  return (
    <span
      className={twMerge(
        clsx(
          'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider select-none',
          variantStyles[variant],
          className
        )
      )}
    >
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6DBE07] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#6DBE07]"></span>
        </span>
      )}
      {children}
    </span>
  );
};
