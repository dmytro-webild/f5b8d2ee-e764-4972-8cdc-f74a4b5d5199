import React from "react";

export default function RenexaLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      <div className="relative flex items-center justify-center size-9 rounded-xl bg-gradient-to-br from-[#c89bff] via-[#a855f7] to-[#65417c] p-2 shadow-lg shadow-purple-500/25 ring-1 ring-white/20">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-[#050012]"
        >
          <path
            d="M6 4H14C16.2091 4 18 5.79086 18 8C18 10.2091 16.2091 12 14 12H6V4Z"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 12H13.5L18 20"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="8" r="1.5" fill="currentColor" />
        </svg>
      </div>
      <span className="text-xl font-bold tracking-tight text-white font-sans">
        Renexa<span className="text-[#c89bff]">.</span>
      </span>
    </div>
  );
}
