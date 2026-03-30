import React from 'react';

export default function Page() {
  return (
      <>
<div className="max-w-7xl mx-auto space-y-8">
      {/*  1. Top Balance Card  */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#6C3EFF] to-[#4F29CC] p-8 shadow-2xl shadow-primary/20">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
      <div>
      <p className="text-white/70 font-medium mb-1">Current Balance</p>
      <h1 className="text-5xl font-mono font-bold text-white flex items-center gap-3">
      <span className="text-4xl">💰</span> $124.50
                              </h1>
      </div>
      <div className="flex gap-12 text-right">
      <div>
      <p className="text-white/60 text-xs uppercase tracking-widest mb-1">Total Deposited</p>
      <p className="text-2xl font-mono font-bold text-white">$890.00</p>
      </div>
      <div className="border-l border-white/20 pl-12">
      <p className="text-white/60 text-xs uppercase tracking-widest mb-1">Total Withdrawn</p>
      <p className="text-2xl font-mono font-bold text-white">$650.00</p>
      </div>
      </div>
      </div>
</>
    )
  );
}
