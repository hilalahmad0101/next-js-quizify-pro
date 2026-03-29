import React from 'react';

export default function Page() {
  return (
    <div className="w-full">
      
{/*  Hero Card  */}
<section className="relative w-full rounded-[2rem] overflow-hidden mb-12 shadow-2xl">
<div className="absolute inset-0 bg-gradient-to-r from-[#0A0A14] via-[#0A0A14]/40 to-transparent z-10"></div>
<img alt="Championship background" className="absolute inset-0 w-full h-full object-cover" data-alt="Abstract vibrant purple and gold energetic light streaks on a dark background, representing high-stakes competition and digital arena vibes" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBG1smlvz1oMf_fvwjx8k5X6pvb7MhEZeSb6ApXc0ErLpUei_8agCMViKvV9rEGDcpdSKsWTEMsA_ytCY41PCGyqDf2dtkUl_sVuxQOCoftL2LvPuwKqY7ExFT3ltZLjo0Ha4boXUrZYNYRXns7YxvmJa9qNlqf-hEuO0zqoG_qJ8vLj0DiIN5IkmCKrKLqXqWGwAXg4Pk0JbwcbXVqOG8RcRsrHW9sVzsqIoJrVTxO6mf00TmnkX-ZIm52Tl2v_7Saj3IHSrSuPw"/>
<div className="relative z-20 p-8 lg:p-12 flex flex-col lg:flex-row justify-between items-end lg:items-center gap-8">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-container/20 border border-primary/30 text-primary font-headline text-xs font-bold uppercase tracking-widest mb-6">
<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        LIVE CHAMPIONSHIP
                    </div>
<h1 className="font-headline font-black text-5xl lg:text-7xl text-white mb-4 leading-none italic uppercase">
                        $5,000 <span className="text-tertiary">PRIZE POOL</span>
</h1>
<div className="flex flex-wrap gap-6 text-[#A0A0C0] font-headline font-medium tracking-tight">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary">calendar_today</span>
                            Mar 24-30, 2025
                        </div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary">groups</span>
                            1,204 Players Joined
                        </div>
</div>
</div>
<div className="glass-panel p-6 rounded-3xl min-w-[280px]">
<p className="text-center font-headline text-xs text-[#A0A0C0] uppercase tracking-widest mb-3">Closes in</p>
<div className="flex justify-center gap-4 font-mono text-3xl font-bold text-white">
<div className="text-center">
<p>03</p>
<span className="text-[10px] text-[#A0A0C0] uppercase">Days</span>
</div>
<span className="text-primary">:</span>
<div className="text-center">
<p>14</p>
<span className="text-[10px] text-[#A0A0C0] uppercase">Hrs</span>
</div>
<span className="text-primary">:</span>
<div className="text-center">
<p>22</p>
<span className="text-[10px] text-[#A0A0C0] uppercase">Min</span>
</div>
</div>
</div>
</div>

    </div>
  );
}
