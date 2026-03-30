import React from 'react';

export default function Page() {
  return (
      <>
{/*  Abstract Background Glows  */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-container/5 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary-container/5 rounded-full blur-[100px] -z-10"></div>
      <div className="w-full max-w-4xl space-y-12">
      {/*  Question Section  */}
      <div className="text-center space-y-6">
      <div className="inline-flex items-center px-4 py-1 rounded-full bg-primary-container/10 border border-primary-container/20">
      <span className="text-primary font-mono font-bold text-sm tracking-tighter">Q7</span>
      </div>
      <h1 className="text-4xl md:text-5xl font-black font-headline text-on-surface leading-tight tracking-tight max-w-3xl mx-auto">
                          Which planet in our solar system has the most number of known moons?
                      </h1>
      </div>
      {/*  Answers Grid  */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/*  Option 1  */}
      <button className="group relative p-6 text-left rounded-2xl bg-surface-container-low border border-outline-variant/10 hover:border-primary/40 hover:bg-surface-container-high transition-all duration-300">
      <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-xl bg-surface-variant flex items-center justify-center text-outline font-headline font-black text-xl group-hover:text-primary transition-colors">A</div>
      <span className="text-xl font-bold font-headline text-on-surface">Mars</span>
      </div></button>
      {/*  Option 2: SELECTED  */}
      <button className="group relative p-6 text-left rounded-2xl bg-primary-container border-2 border-primary shadow-[0_0_30px_rgba(108,62,255,0.3)] transition-all duration-300">
      <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-white font-headline font-black text-xl">B</div>
      <span className="text-xl font-bold font-headline text-white">Saturn</span>
      </div>
      <div className="absolute top-4 right-4">
      <span className="material-symbols-outlined text-white" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
      </div></button>
      {/*  Option 3  */}
      <button className="group relative p-6 text-left rounded-2xl bg-surface-container-low border border-outline-variant/10 hover:border-primary/40 hover:bg-surface-container-high transition-all duration-300">
      <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-xl bg-surface-variant flex items-center justify-center text-outline font-headline font-black text-xl group-hover:text-primary transition-colors">C</div>
      <span className="text-xl font-bold font-headline text-on-surface">Jupiter</span>
      </div></button>
      {/*  Option 4  */}
      <button className="group relative p-6 text-left rounded-2xl bg-surface-container-low border border-outline-variant/10 hover:border-primary/40 hover:bg-surface-container-high transition-all duration-300">
      <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-xl bg-surface-variant flex items-center justify-center text-outline font-headline font-black text-xl group-hover:text-primary transition-colors">D</div>
      <span className="text-xl font-bold font-headline text-on-surface">Neptune</span>
      </div></button>
      </div>
      </div>
</>
    )
  );
}
