import React from 'react';

export default function Page() {
  return (
      <>
{/*  TopNavBar Shell  */}
      
      {/*  Page Content  */}
      <div className="w-full pt-24 pb-12 px-8 flex gap-8">
      <div className="flex-1 space-y-10">
      {/*  Navigation Tabs  */}
      <div className="flex gap-8 border-b border-outline-variant/10">
      <button className="pb-4 text-sm font-bold text-primary-container border-b-2 border-primary-container transition-all">Daily</button>
      <button className="pb-4 text-sm font-medium text-outline hover:text-on-surface transition-all">Weekly</button>
      <button className="pb-4 text-sm font-medium text-outline hover:text-on-surface transition-all">Challenges</button>
      <button className="pb-4 text-sm font-medium text-outline hover:text-on-surface transition-all">All Quizzes</button>
      </div>
      {/*  Active Quizzes Section  */}
      <section>
      <div className="flex items-center justify-between mb-6">
      <h3 className="text-lg font-headline font-semibold flex items-center gap-2">
                                  Active Quizzes
                                  <span className="px-2 py-0.5 rounded bg-error/10 text-error text-[10px] font-bold tracking-tighter animate-pulse">LIVE NOW</span>
      </h3>
      </div>
      {/*  Hero Live Card  */}
      <div className="relative group overflow-hidden rounded-2xl bg-surface-container-low p-6 flex gap-6 border border-primary-container/10">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container/5 rounded-full blur-[80px] -mr-32 -mt-32"></div>
      <div className="w-48 h-32 rounded-xl overflow-hidden bg-surface-container-high relative">
      <img alt="Science Quiz" className="w-full h-full object-cover" data-alt="microscopic view of glowing colorful cells and DNA structures with cinematic blue and violet lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLvFwZCAtrBUwd-3jvSSEY-jd4SSuWlVqE20ZTvM6CPbUaUXqLBnIOGvTp3lmGXsp1FUz4MvEpnqoGfRVAx5R-KP2wo_lGU9SYZ7rzLxFm_eCS8aIA09R0BTWPIYpTkdQ7ak8w1LNo3ACNizU8LcLHPZoNogYc00KtQPGM3RYP6BlQyOVV9S9KS95_-OvQ7CrECFaMVruVgj8BczDh0EF7ufANP7pHfKZ8o7pp99Nnmfp2YC8OyS5E9u8VQPwUlI8dJJ3zWNleUg"/>
      <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 to-transparent"></div>
      <div className="absolute bottom-2 left-3 flex items-center gap-1">
      <span className="material-symbols-outlined text-xs text-secondary-container" style={{fontVariationSettings: "'FILL' 1"}}>group</span>
      <span className="text-[10px] font-mono font-bold text-white">342 Players</span>
      </div>
      </div>
      <div className="flex-1">
      <div className="flex justify-between items-start">
      <div>
      <p className="text-xs font-mono text-primary-fixed uppercase tracking-widest mb-1">Daily Category</p>
      <h4 className="text-2xl font-headline font-bold text-white leading-tight mb-4">Daily Science Quiz</h4>
      </div>
      <div className="text-right">
      <p className="text-xs text-outline mb-1 uppercase tracking-tighter">Current Prize Pool</p>
      <p className="text-2xl font-mono font-bold text-tertiary">$500.00</p>
      </div>
      </div>
      <div className="grid grid-cols-3 gap-4 border-t border-outline-variant/10 pt-4">
      <div>
      <p className="text-[10px] text-outline uppercase font-medium">Revenue Generated</p>
      <p className="text-sm font-mono font-bold text-white">$684.00</p>
      </div>
      <div>
      <p className="text-[10px] text-outline uppercase font-medium">Time Remaining</p>
      <p className="text-sm font-mono font-bold text-secondary-container">04:22:15</p>
      </div>
      <div className="flex justify-end items-center gap-3">
      <button className="p-2 rounded-lg bg-surface-variant hover:bg-surface-bright text-on-surface transition-all">
      <span className="material-symbols-outlined text-lg">bar_chart</span></button>
      <button className="px-4 py-2 rounded-lg bg-surface-container-highest hover:bg-surface-bright text-white text-xs font-bold transition-all border border-outline-variant/20">
                                              Monitor</button>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/*  Scheduled Quizzes Table  */}
      <section>
      <h3 className="text-lg font-headline font-semibold mb-6">Scheduled Quizzes</h3>
      <div className="bg-surface-container-lowest rounded-2xl overflow-hidden border border-outline-variant/5">
      <table className="w-full text-left border-collapse">
      <thead>
      <tr className="bg-surface-container-low">
      <th className="px-6 py-4 text-[10px] font-bold text-outline uppercase tracking-wider">Quiz Title</th>
      <th className="px-6 py-4 text-[10px] font-bold text-outline uppercase tracking-wider">Start Time</th>
      <th className="px-6 py-4 text-[10px] font-bold text-outline uppercase tracking-wider">Entry Fee</th>
      <th className="px-6 py-4 text-[10px] font-bold text-outline uppercase tracking-wider">Prize</th>
      <th className="px-6 py-4 text-[10px] font-bold text-outline uppercase tracking-wider">Status</th>
      <th className="px-6 py-4 text-right"></th>
      </tr>
      </thead>
      <tbody className="divide-y divide-outline-variant/5">
      <tr className="hover:bg-surface-container-low/40 transition-colors">
      <td className="px-6 py-4">
      <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded bg-surface-container-high flex items-center justify-center">
      <span className="material-symbols-outlined text-primary text-sm">history_edu</span>
      </div>
      <span className="text-sm font-medium">World Geography Blitz</span>
      </div>
      </td>
      <td className="px-6 py-4 text-xs font-mono text-outline">Mar 30, 10:00 AM</td>
      <td className="px-6 py-4 text-xs font-mono">$1.00</td>
      <td className="px-6 py-4 text-xs font-mono text-tertiary">$250</td>
      <td className="px-6 py-4">
      <span className="px-2 py-1 rounded-full bg-tertiary/10 text-tertiary text-[10px] font-bold">SCHEDULED</span>
      </td>
      <td className="px-6 py-4 text-right">
      <button className="material-symbols-outlined text-outline hover:text-on-surface">more_vert</button>
      </td>
      </tr>
      <tr className="hover:bg-surface-container-low/40 transition-colors">
      <td className="px-6 py-4">
      <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded bg-surface-container-high flex items-center justify-center">
      <span className="material-symbols-outlined text-primary text-sm">movie</span>
      </div>
      <span className="text-sm font-medium">Oscars Special Trivia</span>
      </div>
      </td>
      <td className="px-6 py-4 text-xs font-mono text-outline">Mar 31, 08:00 PM</td>
      <td className="px-6 py-4 text-xs font-mono">$5.00</td>
      <td className="px-6 py-4 text-xs font-mono text-tertiary">$1,000</td>
      <td className="px-6 py-4">
      <span className="px-2 py-1 rounded-full bg-tertiary/10 text-tertiary text-[10px] font-bold">SCHEDULED</span>
      </td>
      <td className="px-6 py-4 text-right">
      <button className="material-symbols-outlined text-outline hover:text-on-surface">more_vert</button>
      </td>
      </tr>
      </tbody>
      </table>
      </div>
      </section>
      </div>
      {/*  Create Daily Quiz Side Panel  */}
</>
    )
  );
}
