import React from 'react';

export default function Page() {
  return (
      <>
{/*  Hero Section  */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12">
      <div className="space-y-2">
      <span className="text-primary font-mono text-xs tracking-widest uppercase">Center Hub</span>
      <h2 className="text-5xl font-bold font-space tracking-tighter text-white">Your Updates</h2>
      </div>
      <div className="flex items-center gap-3">
      <button className="px-6 py-2.5 rounded-xl text-sm font-medium border border-outline-variant/20 hover:bg-surface-container transition-all">Mark all as read</button>
      <button className="px-6 py-2.5 rounded-xl text-sm font-bold bg-gradient-to-r from-primary-container to-inverse-primary text-white shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all">Clear History</button>
      </div>
      </div>
      {/*  Filters Grid  */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-10">
      <button className="flex flex-col p-4 rounded-2xl bg-surface-container-high border-l-4 border-primary group hover:bg-surface-bright transition-all">
      <span className="text-xs text-outline group-hover:text-primary-container transition-colors mb-1">Total activity</span>
      <div className="flex justify-between items-baseline">
      <span className="text-xl font-space font-bold text-white">All</span>
      <span className="font-mono text-primary text-lg font-bold">12</span>
      </div></button>
      <button className="flex flex-col p-4 rounded-2xl bg-surface-container-low hover:bg-surface-container-high transition-all">
      <span className="text-xs text-outline mb-1">Performance</span>
      <div className="flex justify-between items-baseline">
      <span className="text-xl font-space font-bold text-on-surface-variant">Results</span>
      <span className="font-mono text-on-surface-variant text-lg">5</span>
      </div></button>
      <button className="flex flex-col p-4 rounded-2xl bg-surface-container-low hover:bg-surface-container-high transition-all">
      <span className="text-xs text-outline mb-1">Earnings</span>
      <div className="flex justify-between items-baseline">
      <span className="text-xl font-space font-bold text-on-surface-variant">Payments</span>
      <span className="font-mono text-on-surface-variant text-lg">3</span>
      </div></button>
      <button className="flex flex-col p-4 rounded-2xl bg-surface-container-low hover:bg-surface-container-high transition-all">
      <span className="text-xs text-outline mb-1">Updates</span>
      <div className="flex justify-between items-baseline">
      <span className="text-xl font-space font-bold text-on-surface-variant">System</span>
      <span className="font-mono text-on-surface-variant text-lg">2</span>
      </div></button>
      <button className="flex flex-col p-4 rounded-2xl bg-surface-container-low hover:bg-surface-container-high transition-all">
      <span className="text-xs text-outline mb-1">Special</span>
      <div className="flex justify-between items-baseline">
      <span className="text-xl font-space font-bold text-on-surface-variant">Promos</span>
      <span className="font-mono text-on-surface-variant text-lg">2</span>
      </div></button>
      </div>
      {/*  Notifications List  */}
      <div className="space-y-4">
      {/*  Notification Card 1: Unread (Brighter)  */}
      <div className="glass-card p-6 rounded-2xl flex items-start gap-6 border-l-2 border-primary-container relative group cursor-pointer hover:bg-surface-bright transition-all">
      <div className="absolute right-6 top-6 w-2 h-2 bg-primary rounded-full"></div>
      <div className="w-12 h-12 rounded-xl bg-primary-container/20 flex items-center justify-center shrink-0">
      <span className="material-symbols-outlined text-primary-container" style={{fontVariationSettings: "'FILL' 1"}}>emoji_events</span>
      </div>
      <div className="flex-1 space-y-1">
      <div className="flex justify-between items-center">
      <h3 className="text-white font-bold tracking-tight">Daily Quiz Results</h3>
      <span className="text-xs font-mono text-outline">2m ago</span>
      </div>
      <p className="text-on-surface-variant text-sm leading-relaxed">
                              You ranked <span className="text-primary font-bold">#12</span> of 342 players in the "Global History" arena. Great job!
                          </p>
      <div className="flex gap-4 pt-2">
      <button className="text-xs font-bold text-primary flex items-center gap-1 hover:underline">
                                  View detailed stats <span className="material-symbols-outlined text-[16px]">arrow_forward</span></button>
      </div>
      </div>
      </div>
      {/*  Notification Card 2: Payment  */}
      <div className="bg-surface-container-low p-6 rounded-2xl flex items-start gap-6 border border-outline-variant/5 group cursor-pointer hover:bg-surface-container transition-all">
      <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
      <span className="material-symbols-outlined text-secondary" style={{fontVariationSettings: "'FILL' 1"}}>account_balance</span>
      </div>
      <div className="flex-1 space-y-1">
      <div className="flex justify-between items-center">
      <h3 className="text-white font-bold tracking-tight">Withdrawal Approved!</h3>
      <span className="text-xs font-mono text-outline">1h ago</span>
      </div>
      <p className="text-on-surface-variant text-sm leading-relaxed">
                              Transaction complete: <span className="text-secondary font-mono font-bold">$50.00</span> has been successfully sent to your <span className="text-white">JazzCash</span> account.
                          </p>
      <div className="flex gap-4 pt-2">
      <button className="text-xs font-bold text-outline hover:text-white flex items-center gap-1">
                                  Download Receipt <span className="material-symbols-outlined text-[16px]">download</span></button>
      </div>
      </div>
      </div>
      {/*  Notification Card 3: Reminder (Urgent)  */}
      <div className="glass-card p-6 rounded-2xl flex items-start gap-6 border-l-2 border-tertiary relative group cursor-pointer hover:bg-surface-bright transition-all">
      <div className="absolute right-6 top-6 w-2 h-2 bg-tertiary rounded-full"></div>
      <div className="w-12 h-12 rounded-xl bg-tertiary/10 flex items-center justify-center shrink-0">
      <span className="material-symbols-outlined text-tertiary" style={{fontVariationSettings: "'FILL' 1"}}>timer</span>
      </div>
      <div className="flex-1 space-y-1">
      <div className="flex justify-between items-center">
      <h3 className="text-white font-bold tracking-tight">Action Required</h3>
      <span className="text-xs font-mono text-outline">3h ago</span>
      </div>
      <p className="text-on-surface-variant text-sm leading-relaxed">
                              The <span className="text-white italic">Weekly Championship</span> ends in <span className="text-tertiary font-mono font-bold">14 hours</span>! You're currently 45 points away from the top tier.
                          </p>
      <div className="flex gap-4 pt-2">
      <button className="bg-tertiary/20 text-tertiary-fixed text-xs px-4 py-1.5 rounded-full font-bold hover:bg-tertiary/30 transition-colors">
                                  Enter Arena Now</button>
      </div>
      </div>
      </div>
      {/*  Notification Card 4: Prize  */}
      <div className="bg-surface-container-low p-6 rounded-2xl flex items-start gap-6 border border-outline-variant/5 group cursor-pointer hover:bg-surface-container transition-all">
      <div className="w-12 h-12 rounded-xl bg-primary-container/20 flex items-center justify-center shrink-0">
      <span className="material-symbols-outlined text-primary" style={{fontVariationSettings: "'FILL' 1"}}>stars</span>
      </div>
      <div className="flex-1 space-y-1">
      <div className="flex justify-between items-center">
      <h3 className="text-white font-bold tracking-tight">Prize Disbursement</h3>
      <span className="text-xs font-mono text-outline">Yesterday</span>
      </div>
      <p className="text-on-surface-variant text-sm leading-relaxed">
                              Congratulations! You won <span className="text-primary font-mono font-bold">$75</span> in the Weekly Championship. Funds have been added to your wallet.
                          </p>
      </div>
      </div>
      </div>
      {/*  Pagination/Load More (Subtle)  */}
      <div className="mt-12 flex justify-center">
      <button className="flex items-center gap-2 text-outline hover:text-white transition-colors py-2 px-4 group">
      <span className="text-sm font-medium">Load previous notifications</span>
      <span className="material-symbols-outlined group-hover:translate-y-1 transition-transform">keyboard_double_arrow_down</span></button>
      </div>
</>
    )
  );
}
