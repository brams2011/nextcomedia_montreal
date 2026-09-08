import React from 'react';
import { Lang } from '../types';

interface BrandLogoProps {
  lang?: Lang;
  dark?: boolean;
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  showDescriptor?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  dark = false,
  size = 'md',
  showTagline = true,
  showDescriptor = false,
}) => {
  const emblemSizes = {
    sm: 'w-8 h-8',
    md: 'w-11 h-11',
    lg: 'w-14 h-14',
  };

  const textSizes = {
    sm: 'text-lg sm:text-xl',
    md: 'text-xl sm:text-2xl',
    lg: 'text-2xl sm:text-3xl',
  };

  const taglineSizes = {
    sm: 'text-[8px] tracking-[0.18em]',
    md: 'text-[9.5px] tracking-[0.22em]',
    lg: 'text-[11px] tracking-[0.24em]',
  };

  const idPrefix = `nextco-${dark ? 'dark' : 'light'}-${size}`;

  return (
    <div className="flex items-center gap-3 group cursor-pointer select-none">
      {/* 3D Circular Orbit & N Emblem */}
      <div className={`${emblemSizes[size]} shrink-0 group-hover:scale-105 transition-transform duration-200 drop-shadow-sm flex items-center justify-center`}>
        <svg viewBox="0 0 120 120" className="w-full h-full" fill="none">
          <defs>
            {/* Orbit Crescent Gradient */}
            <linearGradient id={`${idPrefix}-orbit`} x1="0%" y1="100%" x2="100%" y2="0%">
              {dark ? (
                <>
                  <stop offset="0%" stopColor="#00f0ff" />
                  <stop offset="50%" stopColor="#38bdf8" />
                  <stop offset="100%" stopColor="#2563eb" />
                </>
              ) : (
                <>
                  <stop offset="0%" stopColor="#00d4ff" />
                  <stop offset="40%" stopColor="#0284c7" />
                  <stop offset="100%" stopColor="#1d4ed8" />
                </>
              )}
            </linearGradient>

            {/* 3D Blue Ribbon Body Gradient */}
            <linearGradient id={`${idPrefix}-blue-body`} x1="0%" y1="100%" x2="50%" y2="0%">
              {dark ? (
                <>
                  <stop offset="0%" stopColor="#1e40af" />
                  <stop offset="35%" stopColor="#2563eb" />
                  <stop offset="70%" stopColor="#38bdf8" />
                  <stop offset="100%" stopColor="#00f0ff" />
                </>
              ) : (
                <>
                  <stop offset="0%" stopColor="#1e3a8a" />
                  <stop offset="35%" stopColor="#2563eb" />
                  <stop offset="70%" stopColor="#38bdf8" />
                  <stop offset="100%" stopColor="#0284c7" />
                </>
              )}
            </linearGradient>

            {/* Tubular Specular Highlight */}
            <linearGradient id={`${idPrefix}-blue-spec`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
              <stop offset="35%" stopColor="#e0f2fe" stopOpacity="0.75" />
              <stop offset="75%" stopColor="#38bdf8" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0" />
            </linearGradient>

            {/* Purple Ascending Pillar Gradient */}
            <linearGradient id={`${idPrefix}-purple-body`} x1="0%" y1="100%" x2="100%" y2="0%">
              {dark ? (
                <>
                  <stop offset="0%" stopColor="#581c87" />
                  <stop offset="30%" stopColor="#7c3aed" />
                  <stop offset="75%" stopColor="#c084fc" />
                  <stop offset="100%" stopColor="#f0abfc" />
                </>
              ) : (
                <>
                  <stop offset="0%" stopColor="#4c1d95" />
                  <stop offset="30%" stopColor="#7c3aed" />
                  <stop offset="75%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#d8b4fe" />
                </>
              )}
            </linearGradient>

            {/* Purple Pillar Specular Line */}
            <linearGradient id={`${idPrefix}-purple-spec`} x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7c3aed" stopOpacity="0" />
              <stop offset="60%" stopColor="#ffffff" stopOpacity={dark ? '0.85' : '0.7'} />
              <stop offset="100%" stopColor="#f5d0fe" stopOpacity="0.95" />
            </linearGradient>

            {/* 3D Depth Shadow */}
            <filter id={`${idPrefix}-shadow`} x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow 
                dx="0" 
                dy="3.5" 
                stdDeviation="3" 
                floodColor={dark ? '#00f0ff' : '#0b1329'} 
                floodOpacity={dark ? '0.2' : '0.25'} 
              />
            </filter>
          </defs>

          {/* Background Orbit Crescents */}
          <g opacity="0.95">
            <path 
              d="M 36 28 C 54 13 82 17 96 34 C 104 46 104 60 98 72" 
              stroke={`url(#${idPrefix}-orbit)`} 
              strokeWidth="6.5" 
              strokeLinecap="round" 
            />
            <path 
              d="M 22 56 C 18 70 24 84 36 93 C 52 104 76 103 92 90" 
              stroke={`url(#${idPrefix}-orbit)`} 
              strokeWidth="6.5" 
              strokeLinecap="round" 
            />
          </g>

          {/* 3D Letter N Body */}
          <g filter={`url(#${idPrefix}-shadow)`}>
            {/* Main Blue Tube */}
            <path 
              d="M 30 72 L 48 30 C 50 25 56 25 58 30 L 68 74" 
              stroke={`url(#${idPrefix}-blue-body)`} 
              strokeWidth="17" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
            />
            {/* Specular Highlight along Tube Ridge */}
            <path 
              d="M 30 72 L 48 30 C 50 25 56 25 58 30 L 68 74" 
              stroke={`url(#${idPrefix}-blue-spec)`} 
              strokeWidth="5" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
            />
            {/* Ascending Purple Pillar */}
            <line 
              x1="66" 
              y1="74" 
              x2="88" 
              y2="22" 
              stroke={`url(#${idPrefix}-purple-body)`} 
              strokeWidth="17" 
              strokeLinecap="round" 
            />
            {/* Specular on Purple Pillar */}
            <line 
              x1="66" 
              y1="74" 
              x2="88" 
              y2="22" 
              stroke={`url(#${idPrefix}-purple-spec)`} 
              strokeWidth="4.5" 
              strokeLinecap="round" 
            />
          </g>
        </svg>
      </div>

      {/* Wordmark & Official Tagline Lockup */}
      <div className="flex flex-col">
        <div className={`font-extrabold ${textSizes[size]} tracking-tight leading-none`}>
          <span className={dark ? 'text-white' : 'text-slate-900'}>Nextco</span>
          <span className={`text-transparent bg-clip-text ${
            dark 
              ? 'bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400' 
              : 'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600'
          }`}>
            media
          </span>
        </div>

        {showTagline && (
          <div className={`${taglineSizes[size]} font-bold uppercase mt-1 leading-none ${
            dark ? 'text-slate-400' : 'text-slate-500'
          }`}>
            COMMUNIQUER <span className={dark ? 'text-sky-400 font-extrabold' : 'text-blue-600 font-extrabold'}>•</span> CONVERTIR <span className={dark ? 'text-purple-400 font-extrabold' : 'text-purple-600 font-extrabold'}>•</span> GRANDIR
          </div>
        )}

        {showDescriptor && (
          <span className={`text-[11px] font-medium tracking-normal mt-1 leading-none ${
            dark ? 'text-slate-400' : 'text-slate-500'
          }`}>
            Génération de leads • Assurance Québec
          </span>
        )}
      </div>
    </div>
  );
};
