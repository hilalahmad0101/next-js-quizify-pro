import React from 'react';

export default function Page() {
  return (
    <div className="w-full">
      
{/*  Hero Section: Score Ring  */}
<section className="flex flex-col items-center mb-16 relative">
<div className="absolute -top-12 left-1/2 -translate-x-1/2 w-64 h-64 bg-primary-container/20 blur-[80px] rounded-full"></div>
<div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
{/*  SVG Progress Ring  */}
<svg className="w-full h-full transform -rotate-90">
<circle className="text-surface-variant" cx="50%" cy="50%" fill="transparent" r="45%" stroke="currentColor" stroke-width="8"></circle>
<circle className="text-primary-container" cx="50%" cy="50%" fill="transparent" r="45%" stroke="currentColor" stroke-dasharray="282.7" stroke-dashoffset="42.4" stroke-width="8" style={{strokeDasharray: '283', strokeDashoffset: '42.45'}}></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-5xl md:text-7xl font-headline font-black text-white tracking-tighter">850</span>
<span className="text-primary font-mono text-sm tracking-widest mt-1">/ 1000 POINTS</span>
</div>
{/*  Floating Badge  */}
<div className="absolute -bottom-4 bg-secondary-container text-on-secondary-container px-6 py-2 rounded-full font-headline font-black text-sm tracking-widest shadow-lg transform hover:scale-105 transition-transform cursor-default">
                    LEVEL UP!
                </div>
</div>
<div className="mt-12 text-center">
<h1 className="text-4xl md:text-5xl font-headline font-black text-white mb-2 italic">MASTERFUL PERFORMANCE!</h1>
<p className="text-on-surface-variant font-medium tracking-wide">You outperformed 88% of players in the Logic Arena</p>
</div>

    </div>
  );
}
