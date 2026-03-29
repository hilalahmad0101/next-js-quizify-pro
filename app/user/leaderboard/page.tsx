import React from 'react';

export default function Page() {
  return (
    <div className="w-full">
      
{/*  Page Header & Tab Row  */}
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<h1 className="text-4xl font-headline font-bold text-white tracking-tight">Arena Leaderboard</h1>
<p className="text-[#A0A0C0] mt-1 font-body">Competing for the ultimate $5,000 monthly pool.</p>
</div>
<div className="flex p-1 bg-surface-container-low rounded-xl">
<button className="px-5 py-2 text-sm font-medium text-[#A0A0C0] hover:text-white transition-colors">Daily</a>
<button className="px-5 py-2 text-sm font-bold text-white bg-surface-container-high rounded-lg shadow-sm">Weekly</a>
<button className="px-5 py-2 text-sm font-medium text-[#A0A0C0] hover:text-white transition-colors">Monthly</a>
<button className="px-5 py-2 text-sm font-medium text-[#A0A0C0] hover:text-white transition-colors">All Time</a>
<button className="px-5 py-2 text-sm font-medium text-[#A0A0C0] hover:text-white transition-colors flex items-center space-x-2">
<span>By Category</span>
<span className="material-symbols-outlined text-xs" data-icon="keyboard_arrow_down">keyboard_arrow_down</span>
</a>
</div>
</div>
{/*  Podium Section  */}
<div className="grid grid-cols-1 md:grid-cols-3 items-end gap-6 pt-12">
{/*  2nd Place  */}
<div className="order-2 md:order-1 flex flex-col items-center">
<div className="relative mb-4 group">
<div className="absolute inset-0 bg-white/10 blur-2xl rounded-full scale-110 opacity-50"></div>
<img alt="Sara R" className="w-24 h-24 rounded-full border-4 border-[#C0C0C0] relative z-10" data-alt="portrait of a young smiling woman with long brown hair high fashion studio photography colorful background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgfuwUdxXl22tAu3v9Gi9eeBcHk-bhKZjjXiA-CdXPPfMXnQH_pvUT4xq04Vg_RNGXv6MpUnCUP_B7ofZOpGoLGKspu7FF3tSWmGNBNvQheI1gBXEkSySOMSEQGAz888Y5xSoV3t89bIIzYJrFCkCrsb2ajmU-uyhUZzMkCiSH0d39eKFZCoNc2nLzo8bSj4y57fjRPJ8nLtk4PUDy3oC6FVIUS87Q9UI3an87Bh2FkfW0svMDUZ2e2biezAMGCrNUUvoxMqZ9Gw"/>
<div className="absolute -bottom-2 -right-2 bg-[#C0C0C0] text-[#12121D] font-bold px-2 rounded-full text-xs py-0.5 z-20">2nd</div>
</div>
<div className="text-center">
<h3 className="font-headline font-bold text-lg text-white">sara_r</h3>
<p className="font-mono text-silver font-bold text-[#A0A0C0]">$280.00</p>
</div>
</div>
{/*  1st Place  */}
<div className="order-1 md:order-2 flex flex-col items-center">
<div className="relative mb-6 group">
<div className="absolute -top-10 left-1/2 -translate-x-1/2 text-tertiary animate-pulse">
<span className="material-symbols-outlined text-5xl" data-icon="crown" style={{fontVariationSettings: ''FILL' 1'}}>crown</span>
</div>
<div className="absolute inset-0 bg-tertiary/20 blur-3xl rounded-full scale-150 opacity-60"></div>
<img alt="Ahmed Quiz" className="w-32 h-32 rounded-full border-4 border-tertiary relative z-10 shadow-[0_0_30px_rgba(233,196,0,0.4)]" data-alt="professional male portrait with confident expression clean background soft cinematic lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpGaWJdNr8lqekQWRJa5RxLH06MNXCjOsRLDSIAI3pjK9z_TLfSmUAulk2exDLqPIzvmPkrHDKg3a6KnBmzBKW8q_4GJEzxD7bXg8vWmcF7BrP42OVMmUszfefenR0PEIw__y2H84FFyeaQczHtmiwNImSb2dudSwAAcn6mIJ3Paun-ipA6squMHoMCZMjB-oaehXYWhWvyja5-KmYrAUXw6-g0-brgpK_sBfSVt7xt_r2wKlXOJuqTjfWuwGi4I9A9prrMbTodQ"/>
<div className="absolute -bottom-3 -right-3 bg-tertiary text-on-tertiary font-bold px-4 rounded-full text-sm py-1 z-20 shadow-lg">1st</div>
</div>
<div className="text-center">
<h3 className="font-headline font-extrabold text-2xl text-white tracking-tighter">ahmed_quiz</h3>
<div className="flex items-center justify-center space-x-2 mt-1">
<span className="font-mono text-tertiary font-bold text-xl">$340.00</span>
<span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold rounded uppercase tracking-widest">You</span>
</div>
</div>
</div>
{/*  3rd Place  */}
<div className="order-3 flex flex-col items-center">
<div className="relative mb-4 group">
<div className="absolute inset-0 bg-[#CD7F32]/10 blur-2xl rounded-full scale-110 opacity-50"></div>
<img alt="Zara Ace" className="w-24 h-24 rounded-full border-4 border-[#CD7F32] relative z-10" data-alt="close up of a stylish woman with neutral expression artistic lighting dark background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPD_jyw52_lEUCLuVBLv9RxN6_zhA6P1gF48aeq3jEK9B7F3cgQfkcfZQVr3gywatYVhZ5df9iAuC-Waf15VgCizPaKrEE-lTqqndKpOPHNnrc1o1so4Otoqul39c4OXXZaMaH95GYLYrcrjoIej14uII2IWtuw3zuMqfAW_PNo6AW8QoCkvio9er3b5k6j2W3OI8NFYcRZfgkx075zI0qzlrgT5teVzvKc9V8JkQGeES5cTEMuUE3rF42WmVfhoBqQH33yC9TYQ"/>
<div className="absolute -bottom-2 -right-2 bg-[#CD7F32] text-white font-bold px-2 rounded-full text-xs py-0.5 z-20">3rd</div>
</div>
<div className="text-center">
<h3 className="font-headline font-bold text-lg text-white">zara_ace</h3>
<p className="font-mono text-[#CD7F32] font-bold">$210.00</p>
</div>
</div>
</div>
{/*  Full Leaderboard Table  */}
<div className="bg-surface-container-low rounded-[24px] overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-high/50 text-[#A0A0C0] text-[11px] uppercase tracking-[0.2em] font-bold">
<th className="px-8 py-5">Rank</th>
<th className="px-6 py-5">Player</th>
<th className="px-6 py-5">Country</th>
<th className="px-6 py-5">Quizzes</th>
<th className="px-6 py-5">Win Rate</th>
<th className="px-6 py-5">Winnings</th>
<th className="px-6 py-5 text-right">Badge</th>
</tr>
</thead>
<tbody className="text-sm font-medium text-white divide-y divide-[#484456]/10">
{/*  Highlighted User Row  */}
<tr className="bg-primary/5 border-l-4 border-primary">
<td className="px-8 py-5">
<span className="font-mono font-bold text-primary">#1</span>
</td>
<td className="px-6 py-5">
<div className="flex items-center space-x-3">
<div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">AQ</div>
<span>ahmed_quiz (YOU)</span>
</div>
</td>
<td className="px-6 py-5 text-[#A0A0C0]">United Arab Emirates</td>
<td className="px-6 py-5 font-mono">142</td>
<td className="px-6 py-5">
<div className="flex items-center space-x-2">
<span className="text-secondary">94%</span>
<div className="w-12 h-1 bg-surface-variant rounded-full">
<div className="h-full bg-secondary w-[94%] rounded-full"></div>
</div>
</div>
</td>
<td className="px-6 py-5 font-mono text-tertiary">$340.00</td>
<td className="px-6 py-5 text-right">
<span className="px-2 py-1 bg-tertiary/10 text-tertiary text-[10px] rounded font-bold border border-tertiary/20">ELITE MASTERY</span>
</td>
</tr>
{/*  Other Rows  */}
<tr className="hover:bg-white/[0.02] transition-colors">
<td className="px-8 py-5">
<span className="font-mono text-[#A0A0C0]">#2</span>
</td>
<td className="px-6 py-5">
<div className="flex items-center space-x-3">
<div className="w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center text-xs font-bold">SR</div>
<span>sara_r</span>
</div>
</td>
<td className="px-6 py-5 text-[#A0A0C0]">United Kingdom</td>
<td className="px-6 py-5 font-mono">118</td>
<td className="px-6 py-5">
<div className="flex items-center space-x-2">
<span>89%</span>
<div className="w-12 h-1 bg-surface-variant rounded-full">
<div className="h-full bg-white w-[89%] rounded-full"></div>
</div>
</div>
</td>
<td className="px-6 py-5 font-mono">$280.00</td>
<td className="px-6 py-5 text-right">
<span className="px-2 py-1 bg-white/5 text-white/60 text-[10px] rounded font-bold border border-white/10">STREAK KING</span>
</td>
</tr>
<tr className="hover:bg-white/[0.02] transition-colors">
<td className="px-8 py-5">
<span className="font-mono text-[#A0A0C0]">#3</span>
</td>
<td className="px-6 py-5">
<div className="flex items-center space-x-3">
<div className="w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center text-xs font-bold">ZA</div>
<span>zara_ace</span>
</div>
</td>
<td className="px-6 py-5 text-[#A0A0C0]">Canada</td>
<td className="px-6 py-5 font-mono">205</td>
<td className="px-6 py-5">
<div className="flex items-center space-x-2">
<span>82%</span>
<div className="w-12 h-1 bg-surface-variant rounded-full">
<div className="h-full bg-white w-[82%] rounded-full"></div>
</div>
</div>
</td>
<td className="px-6 py-5 font-mono">$210.00</td>
<td className="px-6 py-5 text-right">
<span className="px-2 py-1 bg-white/5 text-white/60 text-[10px] rounded font-bold border border-white/10">VETERAN</span>
</td>
</tr>
<tr className="hover:bg-white/[0.02] transition-colors">
<td className="px-8 py-5">
<span className="font-mono text-[#A0A0C0]">#4</span>
</td>
<td className="px-6 py-5">
<div className="flex items-center space-x-3">
<div className="w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center text-xs font-bold">MK</div>
<span>marcus_k</span>
</div>
</td>
<td className="px-6 py-5 text-[#A0A0C0]">Germany</td>
<td className="px-6 py-5 font-mono">92</td>
<td className="px-6 py-5">
<div className="flex items-center space-x-2">
<span>78%</span>
<div className="w-12 h-1 bg-surface-variant rounded-full">
<div className="h-full bg-white w-[78%] rounded-full"></div>
</div>
</div>
</td>
<td className="px-6 py-5 font-mono">$195.00</td>
<td className="px-6 py-5 text-right">
<span className="px-2 py-1 bg-white/5 text-white/60 text-[10px] rounded font-bold border border-white/10">RISING STAR</span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
{/*  Bottom Floating Widget  */}
<div className="sticky bottom-8 left-0 right-0 z-20">
<div className="glass-panel max-w-2xl mx-auto p-5 rounded-2xl shadow-2xl flex items-center justify-between gap-8">
<div className="flex items-center space-x-4">
<div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
<span className="material-symbols-outlined text-white" data-icon="military_tech">military_tech</span>
</div>
<div className="flex flex-col">
<span className="text-white font-bold text-lg">Your rank: #1</span>
<span className="text-[#A0A0C0] text-sm">Next milestone: <span className="text-tertiary font-bold">$500</span> to reach Legend tier</span>
</div>
</div>
<div className="flex-1 max-w-xs space-y-2">
<div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-[#A0A0C0]">
<span>Progress</span>
<span className="text-white">68%</span>
</div>
<div className="h-2 w-full bg-surface-variant rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-primary to-secondary w-[68%] rounded-full"></div>
</div>
</div>
<button className="bg-white text-[#12121D] px-5 py-2.5 rounded-xl font-bold text-sm hover:scale-105 transition-transform active:scale-95">
                        Claim Rewards
                    </a>
</div>
</div>

    </div>
  );
}
