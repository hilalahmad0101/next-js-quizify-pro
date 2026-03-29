import React from 'react';

export default function Page() {
  return (
    <div className="w-full">
      
{/*  Header Section  */}
<div className="mb-10">
<h1 className="font-headline text-4xl md:text-5xl font-black tracking-tight text-white mb-2 italic">CHALLENGE ARENA</h1>
<p className="text-on-surface-variant max-w-2xl font-light">Stake your tokens and challenge the world's best. Create custom duels or join active lobbies.</p>
</div>
{/*  TOP ROW: Game Modes  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
<div className="glass-card rounded-2xl p-6 relative overflow-hidden group cursor-pointer border-l-4 border-primary">
<div className="relative z-10">
<div className="bg-primary/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
<span className="material-symbols-outlined text-primary" style={{fontVariationSettings: ''FILL' 1'}}>person_play</span>
</div>
<h3 className="font-headline text-xl font-bold text-white mb-1">1v1 Duel</h3>
<p className="text-on-surface-variant text-sm">Direct combat against a friend or foe.</p>
</div>
<div className="absolute -right-4 -bottom-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-[120px]">swords</span>
</div>
</div>
<div className="glass-card rounded-2xl p-6 relative overflow-hidden group cursor-pointer border-l-4 border-secondary">
<div className="relative z-10">
<div className="bg-secondary/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
<span className="material-symbols-outlined text-secondary" style={{fontVariationSettings: ''FILL' 1'}}>group</span>
</div>
<h3 className="font-headline text-xl font-bold text-white mb-1">Group Battle</h3>
<p className="text-on-surface-variant text-sm">Last one standing wins the jackpot.</p>
</div>
<div className="absolute -right-4 -bottom-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-[120px]">groups</span>
</div>
</div>
<div className="glass-card rounded-2xl p-6 relative overflow-hidden group cursor-pointer border-l-4 border-tertiary">
<div className="relative z-10">
<div className="bg-tertiary/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
<span className="material-symbols-outlined text-tertiary" style={{fontVariationSettings: ''FILL' 1'}}>shuffle</span>
</div>
<h3 className="font-headline text-xl font-bold text-white mb-1">Random Match</h3>
<p className="text-on-surface-variant text-sm">Instant pairing with equal rank peers.</p>
</div>
<div className="absolute -right-4 -bottom-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-[120px]">electric_bolt</span>
</div>
</div>
</div>
{/*  MIDDLE: Challenge Form Card  */}
<section className="mb-12">
<div className="bg-surface-container rounded-3xl p-8 border border-outline-variant/20 shadow-xl">
<div className="flex items-center gap-3 mb-8">
<span className="material-symbols-outlined text-primary-container text-3xl">add_circle</span>
<h2 className="font-headline text-2xl font-bold text-white uppercase tracking-wider">Create a New Challenge</h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
<div className="space-y-6">
<div>
<label className="block text-xs font-headline font-bold text-[#A0A0C0] uppercase mb-3 tracking-widest">Select Category</label>
<select className="w-full bg-surface-container-high border-none rounded-xl p-4 text-on-surface focus:ring-2 focus:ring-primary-container transition-all">
<option>Web3 &amp; Crypto</option>
<option>Modern Pop Culture</option>
<option>Quantum Physics</option>
<option>Ancient Civilizations</option>
<option>Digital Marketing</option>
</select>
</div>
<div>
<label className="block text-xs font-headline font-bold text-[#A0A0C0] uppercase mb-3 tracking-widest">Number of Questions</label>
<div className="flex gap-3">
<button className="px-5 py-2 rounded-full border border-primary-container bg-primary-container text-white text-sm font-bold">10 Qs</a>
<button className="px-5 py-2 rounded-full border border-outline-variant text-[#A0A0C0] text-sm hover:border-primary transition-colors">25 Qs</a>
<button className="px-5 py-2 rounded-full border border-outline-variant text-[#A0A0C0] text-sm hover:border-primary transition-colors">50 Qs</a>
</div>
</div>
<div>
<label className="block text-xs font-headline font-bold text-[#A0A0C0] uppercase mb-3 tracking-widest">Time per Question</label>
<div className="flex gap-3">
<button className="px-5 py-2 rounded-full border border-outline-variant text-[#A0A0C0] text-sm hover:border-primary transition-colors">15s</a>
<button className="px-5 py-2 rounded-full border border-primary-container bg-primary-container text-white text-sm font-bold">30s</a>
<button className="px-5 py-2 rounded-full border border-outline-variant text-[#A0A0C0] text-sm hover:border-primary transition-colors">60s</a>
</div>
</div>
</div>
<div className="space-y-6">
<div>
<label className="block text-xs font-headline font-bold text-[#A0A0C0] uppercase mb-3 tracking-widest">Entry Fee (Token Credits)</label>
<div className="relative">
<input className="w-full bg-surface-container-high border-none rounded-xl p-4 pl-12 text-on-surface font-headline text-lg focus:ring-2 focus:ring-primary-container" placeholder="0.00" type="number"/>
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-tertiary">monetization_on</span>
<div className="absolute right-4 top-1/2 -translate-y-1/2 font-headline font-bold text-tertiary">TOKEN</div>
</div>
</div>
<div>
<label className="block text-xs font-headline font-bold text-[#A0A0C0] uppercase mb-3 tracking-widest">Invite Opponent (Username or ID)</label>
<div className="relative">
<input className="w-full bg-surface-container-high border-none rounded-xl p-4 pl-12 text-on-surface focus:ring-2 focus:ring-primary-container" placeholder="e.g. @quizmaster_99" type="text"/>
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary">person_add</span>
</div>
</div>
<button className="w-full h-16 bg-gradient-to-r from-primary-container to-[#4F29CC] rounded-xl text-white font-headline font-black text-lg tracking-widest shadow-[0_4px_20px_rgba(108,62,255,0.4)] hover:brightness-110 active:scale-95 transition-all mt-4">
                            DEPLOY CHALLENGE
                        </a>
</div>
</div>
</div>

    </div>
  );
}
