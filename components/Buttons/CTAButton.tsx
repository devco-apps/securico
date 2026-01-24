"use client";
import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const CTAButton = ({
  children,
  onClick,
  className,
  ...props
}: Props) => {
  return (
    <button
      className={`
        relative inline-flex h-12 overflow-hidden rounded-md p-[3px] 
        transform-gpu transition-all duration-300 ease-out
        hover:scale-105 hover:shadow-2xl
        active:scale-95 active:shadow-lg
        focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50
        shadow-xl shadow-red-500/40
        ${className}
      `}
      onClick={onClick}
      {...props}
    >
      {/* Animated border with enhanced 3D effect */}
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FF8A70_0%,#FF4500_50%,#FF8A70_100%)]" />

      {/* 3D inner layer with depth */}
      <span className="relative inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-gradient-to-br from-red-500 via-red-600 to-red-700 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl">
        {/* Top highlight for 3D effect */}
        <span className="absolute inset-0 rounded-md bg-gradient-to-t from-transparent to-white/15" />

        {/* Bottom shadow for 3D effect */}
        <span className="absolute inset-0 rounded-md bg-gradient-to-b from-transparent to-black/25" />

        {/* Content */}
        <span className="relative z-10">{children}</span>
      </span>
    </button>
  );
};

export default CTAButton;
