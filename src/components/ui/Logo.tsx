import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export function Logo({ className, ...props }: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 240 60"
      className={cn("h-8 w-auto", className)}
      {...props}
    >
      <defs>
        <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="50%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      
      {/* Abstract Infinite/Circuit Cycle Icon */}
      <g filter="url(#glow)">
        <path d="M 20 30 C 20 15, 40 15, 45 30 C 50 45, 70 45, 70 30 C 70 15, 50 15, 45 30 C 40 45, 20 45, 20 30 Z" fill="none" stroke="url(#logo-gradient)" strokeWidth="4" />
        <circle cx="45" cy="30" r="4" fill="#f8fafc" />
      </g>
      
      {/* Text */}
      <text x="90" y="38" fontFamily="Inter, sans-serif" fontSize="24" fontWeight="800" fill="#f8fafc" letterSpacing="-0.5">
        CycleTech
        <tspan fill="url(#logo-gradient)"> AI</tspan>
      </text>
    </svg>
  );
}
