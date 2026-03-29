import React from 'react';

export default function Page() {
  return (
    <div className="w-full">
      
{/*  Hero Stats Row  */}
<div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
<div className="glass-card p-6 rounded-2xl flex flex-col justify-between">
<div>
<span className="text-on-surface-variant text-xs font-bold tracking-widest uppercase mb-1 block">Total Winnings</span>
<h2 className="text-3xl font-headline font-bold text-white mb-1">$1,240.00</h2>
<span className="text-secondary-fixed text-sm font-medium flex items-center gap-1">
<span className="material-symbols-outlined text-xs" data-icon="trending_up">trending_up</span>
                        +$45.00 today
                    </span>
</div>
</div>
<div className="glass-card p-6 rounded-2xl flex flex-col justify-between">
<div>
<span className="text-on-surface-variant text-xs font-bold tracking-widest uppercase mb-1 block">Quizzes Played</span>
<h2 className="text-3xl font-headline font-bold text-white mb-1">342</h2>
<span className="text-on-surface-variant text-sm font-medium">Global Ranking: #1,402</span>
</div>
</div>
<div className="glass-card p-6 rounded-2xl flex items-center justify-between">
<div>
<span className="text-on-surface-variant text-xs font-bold tracking-widest uppercase mb-1 block">Win Rate</span>
<h2 className="text-3xl font-headline font-bold text-white">68%</h2>
</div>
<div className="relative w-16 h-16">
<svg className="w-full h-full transform -rotate-90">
<circle className="text-surface-variant" cx="32" cy="32" fill="transparent" r="28" stroke="currentColor" stroke-width="4"></circle>
<circle className="text-primary-container" cx="32" cy="32" fill="transparent" r="28" stroke="currentColor" stroke-dasharray="175.9" stroke-dashoffset="56.3" stroke-width="4"></circle>
</svg>
<div className="absolute inset-0 flex items-center justify-center">
<span className="material-symbols-outlined text-primary-fixed text-xs" data-icon="analytics" data-weight="fill" style={{fontVariationSettings: ''FILL' 1'}}>analytics</span>
</div>
</div>
</div>
<div className="glass-card p-6 rounded-2xl flex flex-col justify-between">
<div>
<span className="text-on-surface-variant text-xs font-bold tracking-widest uppercase mb-1 block">Current Streak</span>
<h2 className="text-3xl font-headline font-bold text-white mb-1">7 Days <span className="text-xl">🔥</span></h2>
<span className="text-on-surface-variant text-sm font-medium">Keep it up, Alchemist!</span>
</div>
</div>
</div>
{/*  Live Quiz Banner  */}
<div className="relative overflow-hidden rounded-3xl mb-12 bg-gradient-to-r from-primary-container to-[#8B61FF] p-10 flex flex-col md:flex-row items-center justify-between shadow-[0_20px_50px_rgba(108,62,255,0.3)]">
<div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
<div className="relative z-10 space-y-4">
<div className="inline-flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full text-xs font-bold text-white backdrop-blur-md">
<span className="material-symbols-outlined text-sm animate-pulse" data-icon="sensors">sensors</span>
                    LIVE NOW
                </div>
<h3 className="text-4xl font-headline font-extrabold text-white tracking-tight">Daily Quiz is Active!</h3>
<p className="text-on-primary-container max-w-md opacity-90">Harness your knowledge of the Arcane and Modern Science to claim today's jackpot prize. Entry is limited.</p>
<div className="flex items-center gap-8 pt-2">
<div>
<p className="text-xs text-on-primary-container/70 uppercase tracking-widest font-bold">Prize Pool</p>
<p className="text-2xl font-mono font-bold text-tertiary">$500</p>
</div>
<div>
<p className="text-xs text-on-primary-container/70 uppercase tracking-widest font-bold">Entry Fee</p>
<p className="text-2xl font-mono font-bold text-white">$2</p>
</div>
</div>
</div>
<div className="relative z-10 mt-8 md:mt-0 text-center">
<p className="text-on-primary-container/80 text-sm font-bold uppercase tracking-widest mb-2">Closes In</p>
<div className="bg-surface-container-lowest/40 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
<span className="text-5xl font-mono font-bold text-tertiary-fixed tabular-nums tracking-tighter">06:24:11</span>
</div>
<button className="mt-6 w-full bg-white text-primary-container py-4 rounded-xl font-bold text-lg hover:bg-secondary-fixed hover:text-on-secondary transition-all active:scale-95">
                    Enter Arena
                </a>
</div>
</div>
{/*  Middle Row: Recommended & Leaderboard  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
{/*  Recommended Quizzes  */}
<div className="lg:col-span-8 space-y-6">
<div className="flex items-center justify-between">
<h4 className="text-2xl font-headline font-bold text-white">Recommended Quizzes</h4>
<a className="text-primary-fixed text-sm font-bold hover:underline underline-offset-4" href="#">View All Marketplace</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
{/*  Quiz Card 1  */}
<div className="glass-card rounded-2xl overflow-hidden flex flex-col group cursor-pointer hover:shadow-[0_0_30px_rgba(108,62,255,0.15)] transition-all">
<div className="h-32 bg-surface-container overflow-hidden">
<img alt="Science" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-alt="close-up of colorful chemical reactions in glass laboratory flasks with ethereal smoke and purple lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1hxlkYImUaxuEtMqx5kzrEqYf2cmDdKP69PYPQvOAyM8yqNXTOJq_-kpg47JpYiqfzRdpJgBcK3BOPRH7B7PMNo1F9ueSkXtIj5VysKVkXoM0sO41kSlRbu4mlCViP1i2c_6zraePWcdk6u3vLlqIowB4bm52cU-6TpFpddcCBBgiORPD-YPwjrMPm4Q6eFkgjusHNNFgpHik221HIfrnbsrJeQoByJCCod6EkD-TeihPO2ThWYJJkCRCo2_xNRk-y9nZHkLcgg"/>
</div>
<div className="p-5 flex-1 flex flex-col justify-between">
<div>
<h5 className="text-white font-bold mb-1">Science Daily</h5>
<p className="text-on-surface-variant text-xs mb-4">Physics, Chem, Biology</p>
</div>
<div className="flex items-center justify-between pt-4 border-t border-outline-variant/20">
<div className="text-tertiary-fixed font-mono font-bold">$10.00</div>
<button className="bg-primary-container/20 text-primary-fixed p-2 rounded-lg group-hover:bg-primary-container group-hover:text-white transition-colors">
<span className="material-symbols-outlined text-sm" data-icon="play_arrow" data-weight="fill" style={{fontVariationSettings: ''FILL' 1'}}>play_arrow</span>
</a>
</div>
</div>
</div>
{/*  Quiz Card 2  */}
<div className="glass-card rounded-2xl overflow-hidden flex flex-col group cursor-pointer hover:shadow-[0_0_30px_rgba(108,62,255,0.15)] transition-all">
<div className="h-32 bg-surface-container overflow-hidden">
<img alt="Tech" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-alt="High-tech glowing circuit board patterns with neon violet and blue light trails across a dark digital surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwhoG2_ZRUtmH64hfa9JNDuaznIa2Rj8f9KdAiaH8itGSTYMRCNmLjwg9XcxLDVTt1nF9RbhAdF4OOmg1aUbnO_8gK6vuDjWQanJuglRQz-hJyaT_b_nHpPpV948cHuUWpmsEtqB_5qSDJ-H0bsWz2SPjtOhfri0omdRuTYRpcM9tnhcFpxgrPbsZCLKFg2Xd09R9Lhb2RtHbvE59v9o77j8kxXfG-0eknatRcfWYvpoXseeb_4Op7bxGPUzPo5QAZJ_INSfEbsQ"/>
</div>
<div className="p-5 flex-1 flex flex-col justify-between">
<div>
<h5 className="text-white font-bold mb-1">Weekly Tech</h5>
<p className="text-on-surface-variant text-xs mb-4">Web3, AI, Gadgets</p>
</div>
<div className="flex items-center justify-between pt-4 border-t border-outline-variant/20">
<div className="text-tertiary-fixed font-mono font-bold">$25.00</div>
<button className="bg-primary-container/20 text-primary-fixed p-2 rounded-lg group-hover:bg-primary-container group-hover:text-white transition-colors">
<span className="material-symbols-outlined text-sm" data-icon="play_arrow" data-weight="fill" style={{fontVariationSettings: ''FILL' 1'}}>play_arrow</span>
</a>
</div>
</div>
</div>
{/*  Quiz Card 3  */}
<div className="glass-card rounded-2xl overflow-hidden flex flex-col group cursor-pointer hover:shadow-[0_0_30px_rgba(108,62,255,0.15)] transition-all">
<div className="h-32 bg-surface-container overflow-hidden">
<img alt="History" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-alt="Ancient marble statue head dramatically lit against a deep black background with soft grain texture and golden highlights" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSA7TJBbEnTSY8EjmcgthJSd76X7zi78KIN9KXF0zouRPGyzp1I9sADOiVMJC4da4vm0Z68-h8gOOc5iGB6sqeyAJmSnVvRsaVVTr_m9AlZ2VPV0v4wK5-7Q3S46RnprxQKGZkZ4PksT-lRdjjflwIz8HFBeOZy_gYy-3UrNC5OvJxnDDm1rN_4rL1-x1J8NDE2dAdxQFfZ7nMOZxT3z0MvlO0UDVOD8rzX3A3xZNHGT3pc2sDU01J6XcP_tDgVKhKMuaejvRSNQ"/>
</div>
<div className="p-5 flex-1 flex flex-col justify-between">
<div>
<h5 className="text-white font-bold mb-1">History Challenge</h5>
<p className="text-on-surface-variant text-xs mb-4">Renaissance, Rome</p>
</div>
<div className="flex items-center justify-between pt-4 border-t border-outline-variant/20">
<div className="text-tertiary-fixed font-mono font-bold">$15.00</div>
<button className="bg-primary-container/20 text-primary-fixed p-2 rounded-lg group-hover:bg-primary-container group-hover:text-white transition-colors">
<span className="material-symbols-outlined text-sm" data-icon="play_arrow" data-weight="fill" style={{fontVariationSettings: ''FILL' 1'}}>play_arrow</span>
</a>
</div>
</div>
</div>
</div>
</div>
{/*  Leaderboard  */}
<div className="lg:col-span-4 flex flex-col">
<div className="flex items-center justify-between mb-6">
<h4 className="text-2xl font-headline font-bold text-white">This Week's Leaders 🏆</h4>
</div>
<div className="glass-card rounded-2xl p-2 flex-1 space-y-1">
{/*  Leader 1 (User)  */}
<div className="bg-primary-container/20 border border-primary-container/30 p-3 rounded-xl flex items-center justify-between group">
<div className="flex items-center gap-4">
<span className="font-mono text-primary-fixed font-bold text-lg w-4">1</span>
<div className="w-10 h-10 rounded-full border-2 border-primary-fixed overflow-hidden">
<img alt="ahmed_quiz" data-alt="digital avatar of a person with dark hair and headphones against a gradient purple background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-wTMoxGaZFjshUPidjTIaP-BeV894z9lVggeAEI7YyoZv_nw54KFZBzekg2yZ6wxUQppAwmLpZHCL5akZlcteT2Gb1bbek3rMA_2mdNUwr5v7DzakJkCLUtEt73Yc8NcOTWWztUx89rIw7hXVHPCJ27VLhXm-Pp3wTcxyOqdSYIg8BJocQ3JiM-DW6VVok9DdDUX3dkieZhUk-4mGyUDJ18hskm3y9PNoi5_2gt5V2JwpEXMJxRtB57JsuO_yX5dG_effyf8FsA"/>
</div>
<div>
<p className="text-white font-bold text-sm">ahmed_quiz</p>
<p className="text-primary-fixed text-[10px] uppercase font-bold">YOU</p>
</div>
</div>
<div className="text-right">
<p className="text-white font-mono font-bold text-sm">12,490 pts</p>
<p className="text-secondary-fixed text-[10px] font-bold">+1.2k</p>
</div>
</div>
{/*  Leader 2  */}
<div className="p-3 rounded-xl flex items-center justify-between hover:bg-surface-container-high transition-colors cursor-default">
<div className="flex items-center gap-4">
<span className="font-mono text-outline font-bold text-lg w-4">2</span>
<div className="w-10 h-10 rounded-full bg-surface-container-highest overflow-hidden">
<img alt="sarah_master" data-alt="digital avatar of a woman with long red hair and a professional look" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAhlDuTN3cnZRDR98feCcBr_tnwiBwL3KAewzFgAg4nbeEV0XPXYIKVAWfiBh829E0ZJCrYCZshsa0Y-N4GzkvDNYdEyQ3NpKi6nm-6yKIMv_ULBcJsrz-7JPk_ligBBsVo5hvewR1JLVU0xBa-Jy-gq8H-VBM314HWQfQXDTujtcPeSgekIA-pFeYsPs5gP1A_OBA_Kiu33wN5DzTYr1pvIKHftVji-cZqltTtQ2ygLY0f0mQelbCX8vvOR6smOGl4NrY6ZVHxQ"/>
</div>
<div>
<p className="text-white font-bold text-sm">sarah_master</p>
<p className="text-outline text-[10px] uppercase font-bold">LEGEND</p>
</div>
</div>
<div className="text-right">
<p className="text-white font-mono font-bold text-sm">11,820 pts</p>
</div>
</div>
{/*  Leader 3  */}
<div className="p-3 rounded-xl flex items-center justify-between hover:bg-surface-container-high transition-colors cursor-default">
<div className="flex items-center gap-4">
<span className="font-mono text-outline font-bold text-lg w-4">3</span>
<div className="w-10 h-10 rounded-full bg-surface-container-highest overflow-hidden">
<img alt="leo_lion" data-alt="digital avatar of a person with a beard and a yellow cap" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_tv6bmrobWtxXouo0gsT2mDZoZ4ZfRcp4HR4elpODWjnwqHz7W0pAfMsJJ8cj4sjKH8jy1wjc5JK62t1D29TTnUMnwZWKATVAAh8lZSd9bof5YDQ3x2chch2mHtRJY3ef8B8uJdNP_ivc10Wp9kAV-CXR4O5z0Zq2ZGluOud-xGd2EBUsNuMf7U7lpUmaNY2XkafhovEL3QSgiZi_vL-UGadOx0ZxeH0Bi5JmnKTcanhhkU5rTQ9YqKVyL2Uyi-hnpd7PqRKhMw"/>
</div>
<div>
<p className="text-white font-bold text-sm">leo_lion</p>
<p className="text-outline text-[10px] uppercase font-bold">PRO</p>
</div>
</div>
<div className="text-right">
<p className="text-white font-mono font-bold text-sm">11,105 pts</p>
</div>
</div>
{/*  Leader 4  */}
<div className="p-3 rounded-xl flex items-center justify-between hover:bg-surface-container-high transition-colors cursor-default">
<div className="flex items-center gap-4">
<span className="font-mono text-outline font-bold text-lg w-4">4</span>
<div className="w-10 h-10 rounded-full bg-surface-container-highest overflow-hidden">
<img alt="elena_q" data-alt="digital avatar of a woman with short blue hair and artistic glasses" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbr_oETInfyIwV8dhODahSKqmA_jGZYfIIxltgV0T_pvuBN4ACydQbt5d0MjsL6Ct47X57uweZVATCmTNN8Y5LPQk2AoQflI_4KMBASuve3zV5uWFepU82_a2uG01EM78tSQE0Axgk_94coy6wXFn6Z6D_NeyiFQegLZfNr2cAXcD0QFrshp0y-DLyplJZbuOUdyEFazwGf-3y9UMZ6p9gr7hejyGT0f9XashyE62gIrCTNh99GyB9dFA_xjTSQCpPLAJuAd9iNg"/>
</div>
<div>
<p className="text-white font-bold text-sm">elena_q</p>
<p className="text-outline text-[10px] uppercase font-bold">VETERAN</p>
</div>
</div>
<div className="text-right">
<p className="text-white font-mono font-bold text-sm">10,940 pts</p>
</div>
</div>
{/*  Leader 5  */}
<div className="p-3 rounded-xl flex items-center justify-between hover:bg-surface-container-high transition-colors cursor-default">
<div className="flex items-center gap-4">
<span className="font-mono text-outline font-bold text-lg w-4">5</span>
<div className="w-10 h-10 rounded-full bg-surface-container-highest overflow-hidden">
<img alt="mike_smith" data-alt="digital avatar of a man with blonde hair and a sporty jacket" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGzI2eLy6JsqtyIEI9G0BvDG6NsvKyCdIJxgvsEA-0bygWAYGodJnJAoZyAG-on0YKACZGU3R_FB39nKGvC3jOSxE68v4JQ5EBBpg0yQtbG6MvGiBBrwr3v9Uz8pss4UU5c-CY6Rtdlnb5-pnV8trAjK3Gz5t2KgkL60Nmg57rkR_QjhMug_VHrctf3SAui9H53KWK86vdsDZfUoILkAJsyC-iySovRrCMItRhMdFTfLf8q8dOcSHYl94M5ecpczGbw12WWhvfwg"/>
</div>
<div>
<p className="text-white font-bold text-sm">mike_smith</p>
<p className="text-outline text-[10px] uppercase font-bold">PRO</p>
</div>
</div>
<div className="text-right">
<p className="text-white font-mono font-bold text-sm">10,200 pts</p>
</div>
</div>
</div>
</div>
</div>
{/*  Recent Activity Table  */}
<div className="space-y-6">
<div className="flex items-center justify-between">
<h4 className="text-2xl font-headline font-bold text-white">Your Recent Quizzes</h4>
<div className="flex gap-2">
<button className="px-4 py-2 bg-surface-container-high rounded-lg text-sm font-bold text-on-surface hover:text-white transition-colors">Export PDF</a>
<button className="px-4 py-2 bg-surface-container-high rounded-lg text-sm font-bold text-on-surface hover:text-white transition-colors">Filter</a>
</div>
</div>
<div className="glass-card rounded-2xl overflow-hidden overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low/50">
<th className="px-6 py-4 text-xs font-bold text-outline tracking-widest uppercase">Quiz Name</th>
<th className="px-6 py-4 text-xs font-bold text-outline tracking-widest uppercase">Category</th>
<th className="px-6 py-4 text-xs font-bold text-outline tracking-widest uppercase">Score</th>
<th className="px-6 py-4 text-xs font-bold text-outline tracking-widest uppercase text-center">Result</th>
<th className="px-6 py-4 text-xs font-bold text-outline tracking-widest uppercase text-right">Prize</th>
<th className="px-6 py-4 text-xs font-bold text-outline tracking-widest uppercase text-right">Date</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/10">
<tr className="hover:bg-white/5 transition-colors group cursor-default">
<td className="px-6 py-4 text-white font-bold">Science Grandmaster</td>
<td className="px-6 py-4 text-on-surface-variant text-sm">Science</td>
<td className="px-6 py-4"><span className="font-mono text-primary-fixed">98/100</span></td>
<td className="px-6 py-4 text-center">
<span className="bg-secondary/10 text-secondary-fixed px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-secondary/20">Win</span>
</td>
<td className="px-6 py-4 text-right font-mono text-tertiary-fixed font-bold">$12.00</td>
<td className="px-6 py-4 text-right text-on-surface-variant text-sm">Today, 10:45</td>
</tr>
<tr className="hover:bg-white/5 transition-colors group cursor-default">
<td className="px-6 py-4 text-white font-bold">Medieval Ages Trivia</td>
<td className="px-6 py-4 text-on-surface-variant text-sm">History</td>
<td className="px-6 py-4"><span className="font-mono text-primary-fixed">45/100</span></td>
<td className="px-6 py-4 text-center">
<span className="bg-error/10 text-error px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-error/20">Loss</span>
</td>
<td className="px-6 py-4 text-right font-mono text-outline font-bold">$0.00</td>
<td className="px-6 py-4 text-right text-on-surface-variant text-sm">Yesterday</td>
</tr>
<tr className="hover:bg-white/5 transition-colors group cursor-default">
<td className="px-6 py-4 text-white font-bold">Cinematic Universe</td>
<td className="px-6 py-4 text-on-surface-variant text-sm">Movie</td>
<td className="px-6 py-4"><span className="font-mono text-primary-fixed">82/100</span></td>
<td className="px-6 py-4 text-center">
<span className="bg-secondary/10 text-secondary-fixed px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-secondary/20">Win</span>
</td>
<td className="px-6 py-4 text-right font-mono text-tertiary-fixed font-bold">$5.00</td>
<td className="px-6 py-4 text-right text-on-surface-variant text-sm">Nov 14</td>
</tr>
<tr className="hover:bg-white/5 transition-colors group cursor-default">
<td className="px-6 py-4 text-white font-bold">Global Capitals</td>
<td className="px-6 py-4 text-on-surface-variant text-sm">Geography</td>
<td className="px-6 py-4"><span className="font-mono text-primary-fixed">76/100</span></td>
<td className="px-6 py-4 text-center">
<span className="bg-secondary/10 text-secondary-fixed px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-secondary/20">Win</span>
</td>
<td className="px-6 py-4 text-right font-mono text-tertiary-fixed font-bold">$2.50</td>
<td className="px-6 py-4 text-right text-on-surface-variant text-sm">Nov 13</td>
</tr>
<tr className="hover:bg-white/5 transition-colors group cursor-default">
<td className="px-6 py-4 text-white font-bold">World Cup Legends</td>
<td className="px-6 py-4 text-on-surface-variant text-sm">Sports</td>
<td className="px-6 py-4"><span className="font-mono text-primary-fixed">92/100</span></td>
<td className="px-6 py-4 text-center">
<span className="bg-secondary/10 text-secondary-fixed px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-secondary/20">Win</span>
</td>
<td className="px-6 py-4 text-right font-mono text-tertiary-fixed font-bold">$15.00</td>
<td className="px-6 py-4 text-right text-on-surface-variant text-sm">Nov 12</td>
</tr>
<tr className="hover:bg-white/5 transition-colors group cursor-default">
<td className="px-6 py-4 text-white font-bold">Modern Web Dev</td>
<td className="px-6 py-4 text-on-surface-variant text-sm">Tech</td>
<td className="px-6 py-4"><span className="font-mono text-primary-fixed">88/100</span></td>
<td className="px-6 py-4 text-center">
<span className="bg-secondary/10 text-secondary-fixed px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-secondary/20">Win</span>
</td>
<td className="px-6 py-4 text-right font-mono text-tertiary-fixed font-bold">$10.00</td>
<td className="px-6 py-4 text-right text-on-surface-variant text-sm">Nov 12</td>
</tr>
<tr className="hover:bg-white/5 transition-colors group cursor-default">
<td className="px-6 py-4 text-white font-bold">Classical Era Music</td>
<td className="px-6 py-4 text-on-surface-variant text-sm">Music</td>
<td className="px-6 py-4"><span className="font-mono text-primary-fixed">31/100</span></td>
<td className="px-6 py-4 text-center">
<span className="bg-error/10 text-error px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-error/20">Loss</span>
</td>
<td className="px-6 py-4 text-right font-mono text-outline font-bold">$0.00</td>
<td className="px-6 py-4 text-right text-on-surface-variant text-sm">Nov 11</td>
</tr>
<tr className="hover:bg-white/5 transition-colors group cursor-default">
<td className="px-6 py-4 text-white font-bold">Street Food Mastery</td>
<td className="px-6 py-4 text-on-surface-variant text-sm">Food</td>
<td className="px-6 py-4"><span className="font-mono text-primary-fixed">95/100</span></td>
<td className="px-6 py-4 text-center">
<span className="bg-secondary/10 text-secondary-fixed px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-secondary/20">Win</span>
</td>
<td className="px-6 py-4 text-right font-mono text-tertiary-fixed font-bold">$4.50</td>
<td className="px-6 py-4 text-right text-on-surface-variant text-sm">Nov 10</td>
</tr>
</tbody>
</table>
</div>
</div>
{/*  Footer Spacer  */}
<div className="h-16"></div>

    </div>
  );
}
