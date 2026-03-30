import React from "react";

export default function Page() {
  return (
    <>
      <section className="hero-gradient rounded-3xl p-8 lg:p-12 mb-10 shadow-[0_20px_60px_-15px_rgba(108,62,255,0.5)] relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none"></div>
        <div className="relative z-10 flex-1">
          <div className="flex items-center gap-3 mb-4">
            <span className="flex items-center gap-1.5 bg-error text-on-error px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              LIVE
            </span>
            <span className="text-primary-fixed text-sm font-medium">
              Saturday, March 29, 2025
            </span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-headline font-black text-white leading-tight mb-2">
            Daily Quiz Challenge
          </h1>
          <p className="text-primary-fixed/80 text-lg">
            Master the universe of knowledge and claim your spot on the throne.
          </p>
        </div>
        <div className="relative z-10 flex flex-col items-center md:items-end text-center md:text-right">
          <div className="mb-4">
            <div className="text-sm font-headline uppercase tracking-[0.2em] text-primary-fixed/70">
              Total Prize Pool
            </div>
            <div className="text-5xl lg:text-7xl font-mono font-bold text-tertiary drop-shadow-lg">
              $500
            </div>
          </div>
          <div className="bg-black/20 backdrop-blur-md rounded-2xl px-6 py-3 flex items-center gap-6 border border-white/10">
            <div>
              <div className="text-[10px] uppercase text-primary-fixed/60">
                Entry Fee
              </div>
              <div className="text-xl font-mono text-white">$2</div>
            </div>
            <div className="h-8 w-[1px] bg-white/10"></div>
            <div>
              <div className="text-[10px] uppercase text-primary-fixed/60">
                Players Joined
              </div>
              <div className="text-xl font-mono text-white">342</div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 p-8 hidden md:block opacity-20">
          <span className="font-mono text-8xl font-black text-white">
            06:24:11
          </span>
        </div>
      </section>
    </>
  );
}
