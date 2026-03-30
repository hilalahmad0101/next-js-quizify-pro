import React from "react";

export default function Page() {
  return (
    <>
      {/*  TopNavBar  */}

      <div className="p-8 max-w-[1600px] mx-auto space-y-10">
        {/*  Welcome Header  */}
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-4xl font-headline font-bold text-white tracking-tight">
              Command Center
            </h1>
            <p className="text-slate-400 font-body mt-2">
              Real-time performance metrics and operational overview.
            </p>
          </div>
          <div className="flex gap-3">
            <button className="px-6 py-2.5 bg-surface-container-high rounded-xl text-sm font-headline text-white hover:bg-surface-bright transition-colors ghost-border flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">
                download
              </span>
              Export Report
            </button>
            <button className="px-6 py-2.5 bg-primary-container rounded-xl text-sm font-headline text-white hover:opacity-90 transition-opacity flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">add</span>
              Create New Quiz
            </button>
          </div>
        </div>
        {/*  Stats Row: Bento Style  */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {/*  Revenue Today  */}
          <div className="bg-surface-container p-5 rounded-2xl space-y-3 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-6xl text-tertiary">
                trending_up
              </span>
            </div>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-headline">
              Revenue Today
            </p>
            <p className="text-3xl font-mono font-bold text-tertiary">$4,320</p>
            <div className="flex items-center gap-1 text-[10px] text-secondary font-bold">
              <span className="material-symbols-outlined text-xs">
                arrow_upward
              </span>{" "}
              12.5% vs avg
            </div>
          </div>
          {/*  Active Users  */}
          <div className="bg-surface-container p-5 rounded-2xl space-y-3 relative overflow-hidden group">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-headline">
              Active Users
            </p>
            <p className="text-3xl font-mono font-bold text-white">1,842</p>
            <div className="flex items-center gap-1 text-[10px] text-secondary font-bold">
              <span className="material-symbols-outlined text-xs">
                arrow_upward
              </span>{" "}
              8% growth
            </div>
          </div>
          {/*  Quizzes Played  */}
          <div className="bg-surface-container p-5 rounded-2xl space-y-3">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-headline">
              Quizzes Played
            </p>
            <p className="text-3xl font-mono font-bold text-white">8,470</p>
            <div className="h-1.5 w-full bg-surface-variant rounded-full mt-4 overflow-hidden">
              <div className="h-full bg-primary w-[72%]"></div>
            </div>
          </div>
          {/*  Pending Withdrawals (Urgent)  */}
          <div className="bg-error-container/20 p-5 rounded-2xl space-y-3 border border-error/20">
            <p className="text-[10px] font-bold text-error uppercase tracking-widest font-headline">
              Pending Payouts
            </p>
            <p className="text-3xl font-mono font-bold text-error">23</p>
            <p className="text-[10px] text-error/80 font-medium italic">
              Requires urgent review
            </p>
          </div>
          {/*  New Registrations  */}
          <div className="bg-surface-container p-5 rounded-2xl space-y-3">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-headline">
              New Regs
            </p>
            <p className="text-3xl font-mono font-bold text-white">156</p>
            <div className="flex -space-x-2 mt-2">
              <div className="w-6 h-6 rounded-full border border-surface-container bg-slate-700"></div>
              <div className="w-6 h-6 rounded-full border border-surface-container bg-slate-600"></div>
              <div className="w-6 h-6 rounded-full border border-surface-container bg-slate-500"></div>
              <div className="w-6 h-6 flex items-center justify-center text-[8px] bg-primary rounded-full border border-surface-container">
                +153
              </div>
            </div>
          </div>
          {/*  Platform Balance  */}
          <div className="bg-[#00E5A0]/10 p-5 rounded-2xl space-y-3 border border-secondary/10">
            <p className="text-[10px] font-bold text-secondary uppercase tracking-widest font-headline">
              Vault Balance
            </p>
            <p className="text-3xl font-mono font-bold text-secondary">
              $124,500
            </p>
            <p className="text-[10px] text-secondary/60 font-medium">
              Platform Liquidity
            </p>
          </div>
        </div>
        {/*  Revenue Chart Section  */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 bg-surface-container rounded-3xl p-8 relative">
            <div className="flex justify-between items-start mb-10">
              <div>
                <h3 className="text-xl font-headline font-bold text-white">
                  Financial Trajectory
                </h3>
                <p className="text-slate-400 text-sm">
                  Last 30 days revenue vs payouts comparison
                </p>
              </div>
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-primary-container"></span>
                  <span className="text-xs text-slate-300">Gross Revenue</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-tertiary"></span>
                  <span className="text-xs text-slate-300">Prize Payouts</span>
                </div>
              </div>
            </div>
            {/*  Simplified SVG Chart Simulation  */}
            <div className="relative h-64 w-full">
              <svg className="w-full h-full" preserveaspectratio="none">
                {/*  Revenue Path  */}
                <path
                  d="M0,180 Q100,120 200,150 T400,80 T600,100 T800,50 T1000,70"
                  fill="none"
                  stroke="#6C3EFF"
                  stroke-linecap="round"
                  stroke-width="4"
                ></path>
                {/*  Payout Path  */}
                <path
                  d="M0,200 Q100,160 200,180 T400,140 T600,150 T800,120 T1000,130"
                  fill="none"
                  stroke="#FFD700"
                  stroke-dasharray="8 4"
                  stroke-linecap="round"
                  stroke-width="3"
                ></path>
              </svg>
              {/*  Grid Lines  */}
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-5">
                <div className="border-t border-white w-full"></div>
                <div className="border-t border-white w-full"></div>
                <div className="border-t border-white w-full"></div>
                <div className="border-t border-white w-full"></div>
              </div>
            </div>
            <div className="flex justify-between mt-6 text-[10px] font-mono text-slate-500 uppercase tracking-widest">
              <span>Day 01</span>
              <span>Day 10</span>
              <span>Day 20</span>
              <span>Day 30</span>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-primary-container/10 border border-primary/20 rounded-3xl p-6 flex flex-col justify-between h-full">
              <div>
                <p className="text-slate-400 text-xs font-headline uppercase tracking-widest mb-2">
                  Monthly Margin
                </p>
                <h4 className="text-4xl font-mono font-bold text-white">
                  32.4%
                </h4>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Op. Expenses</span>
                  <span className="text-white font-mono">$12,400</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Net Profit</span>
                  <span className="text-secondary font-mono">+$24,850</span>
                </div>
                <div className="pt-4 border-t border-primary/10">
                  <button className="w-full py-3 bg-primary text-on-primary rounded-xl font-bold text-sm tracking-tight hover:opacity-90">
                    View Audit Logs
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  Middle Row: Feed and Actions  */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/*  Live Activity Feed  */}
          <div className="bg-surface-container rounded-3xl p-8 flex flex-col h-[500px]">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-headline font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                Live Activity Feed
              </h3>
              <button className="text-primary text-xs font-bold hover:underline">
                See All
              </button>
            </div>
            <div className="flex-1 overflow-y-auto pr-4 no-scrollbar space-y-4">
              {/*  Activity Items  */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-surface-container-low ghost-border">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined text-sm">
                    emoji_events
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-slate-200">
                    <span className="font-bold">alex_quiz_pro</span> won{" "}
                    <span className="text-tertiary font-mono">$50.00</span> in
                    "Crypto Masters"
                  </p>
                  <p className="text-[10px] text-slate-500 font-mono">
                    2 mins ago
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-surface-container-low ghost-border">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-sm">
                    account_balance_wallet
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-slate-200">
                    <span className="font-bold">zen_master</span> deposited{" "}
                    <span className="text-white font-mono">$200.00</span>
                  </p>
                  <p className="text-[10px] text-slate-500 font-mono">
                    5 mins ago
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-surface-container-low ghost-border">
                <div className="w-10 h-10 rounded-full bg-error/20 flex items-center justify-center text-error">
                  <span className="material-symbols-outlined text-sm">
                    outbox
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-slate-200">
                    <span className="font-bold">crypto_babe</span> requested
                    withdrawal{" "}
                    <span className="text-white font-mono">$1,200.00</span>
                  </p>
                  <p className="text-[10px] text-slate-500 font-mono">
                    12 mins ago
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-surface-container-low ghost-border opacity-70">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined text-sm">
                    emoji_events
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-slate-200">
                    <span className="font-bold">user_882</span> won{" "}
                    <span className="text-tertiary font-mono">$10.00</span> in
                    "Daily Sprint"
                  </p>
                  <p className="text-[10px] text-slate-500 font-mono">
                    15 mins ago
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-surface-container-low ghost-border opacity-60">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-sm">
                    person_add
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-slate-200">
                    New user registration:{" "}
                    <span className="font-bold">pixel_warrior</span>
                  </p>
                  <p className="text-[10px] text-slate-500 font-mono">
                    18 mins ago
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/*  Pending Actions Panel  */}
          <div className="bg-surface-container rounded-3xl p-8 flex flex-col h-[500px]">
            <div className="mb-6">
              <h3 className="text-xl font-headline font-bold text-white">
                Action Center
              </h3>
              <p className="text-slate-400 text-sm">
                Critical tasks awaiting administrator approval
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-surface-container-high p-6 rounded-2xl ghost-border hover:bg-surface-bright transition-colors cursor-pointer group">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 rounded-xl bg-error/10 flex items-center justify-center text-error">
                    <span className="material-symbols-outlined">payments</span>
                  </div>
                  <span className="text-2xl font-mono font-bold text-white">
                    23
                  </span>
                </div>
                <p className="font-headline font-bold text-sm text-slate-200">
                  Withdrawals
                </p>
                <p className="text-[10px] text-slate-500 mt-1 uppercase tracking-wider">
                  Pending Payout
                </p>
              </div>
              <div className="bg-surface-container-high p-6 rounded-2xl ghost-border hover:bg-surface-bright transition-colors cursor-pointer group">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">verified</span>
                  </div>
                  <span className="text-2xl font-mono font-bold text-white">
                    08
                  </span>
                </div>
                <p className="font-headline font-bold text-sm text-slate-200">
                  KYC Verify
                </p>
                <p className="text-[10px] text-slate-500 mt-1 uppercase tracking-wider">
                  ID Check Needed
                </p>
              </div>
              <div className="bg-surface-container-high p-6 rounded-2xl ghost-border hover:bg-surface-bright transition-colors cursor-pointer group">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 rounded-xl bg-tertiary/10 flex items-center justify-center text-tertiary">
                    <span className="material-symbols-outlined">
                      support_agent
                    </span>
                  </div>
                  <span className="text-2xl font-mono font-bold text-white">
                    05
                  </span>
                </div>
                <p className="font-headline font-bold text-sm text-slate-200">
                  Support Tickets
                </p>
                <p className="text-[10px] text-slate-500 mt-1 uppercase tracking-wider">
                  Unresolved Chat
                </p>
              </div>
              <div className="bg-surface-container-high p-6 rounded-2xl ghost-border hover:bg-surface-bright transition-colors cursor-pointer group">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 rounded-xl bg-outline/10 flex items-center justify-center text-outline">
                    <span className="material-symbols-outlined">report</span>
                  </div>
                  <span className="text-2xl font-mono font-bold text-white">
                    02
                  </span>
                </div>
                <p className="font-headline font-bold text-sm text-slate-200">
                  System Reports
                </p>
                <p className="text-[10px] text-slate-500 mt-1 uppercase tracking-wider">
                  Error Logs
                </p>
              </div>
            </div>
            {/*  Quick Announcement  */}
            <div className="mt-auto bg-surface-container-lowest p-5 rounded-2xl border border-primary/10">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">
                  campaign
                </span>
                <div className="text-[11px] text-slate-400">
                  <span className="text-primary font-bold">PRO TIP:</span> New
                  quiz categories added last night have increased engagement by{" "}
                  <span className="text-secondary">22%</span>.
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  Top Quizzes Table  */}
        <section className="bg-surface-container rounded-3xl overflow-hidden">
          <div className="p-8 border-b border-[#484456]/20 flex justify-between items-center">
            <div>
              <h3 className="text-xl font-headline font-bold text-white">
                Top Performing Quizzes
              </h3>
              <p className="text-slate-400 text-sm">
                Performance metrics by individual contest today
              </p>
            </div>
            <button className="px-4 py-2 text-xs font-bold text-primary hover:bg-primary/5 rounded-lg transition-colors">
              View All Analytics
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-surface-container-low text-[10px] text-slate-500 uppercase tracking-[0.2em] font-headline">
                  <th className="px-8 py-5">Quiz Name</th>
                  <th className="px-8 py-5">Category</th>
                  <th className="px-8 py-5">Players</th>
                  <th className="px-8 py-5">Revenue</th>
                  <th className="px-8 py-5">Prizes Paid</th>
                  <th className="px-8 py-5 text-right">Net Profit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#484456]/10 font-body">
                <tr className="hover:bg-surface-container-high transition-colors">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary-container/20 flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary text-sm">
                          currency_bitcoin
                        </span>
                      </div>
                      <span className="font-bold text-white">
                        Crypto Masters Pro
                      </span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className="px-3 py-1 bg-surface-variant rounded-full text-[10px]">
                      FINANCE
                    </span>
                  </td>
                  <td className="px-8 py-6 font-mono">2,410</td>
                  <td className="px-8 py-6 font-mono">$1,205.00</td>
                  <td className="px-8 py-6 font-mono">$800.00</td>
                  <td className="px-8 py-6 text-right font-mono text-secondary font-bold">
                    +$405.00
                  </td>
                </tr>
                <tr className="hover:bg-surface-container-high transition-colors">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-tertiary/20 flex items-center justify-center">
                        <span className="material-symbols-outlined text-tertiary text-sm">
                          movie
                        </span>
                      </div>
                      <span className="font-bold text-white">
                        MCU Ultimate Trivia
                      </span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className="px-3 py-1 bg-surface-variant rounded-full text-[10px]">
                      MOVIES
                    </span>
                  </td>
                  <td className="px-8 py-6 font-mono">1,890</td>
                  <td className="px-8 py-6 font-mono">$945.00</td>
                  <td className="px-8 py-6 font-mono">$600.00</td>
                  <td className="px-8 py-6 text-right font-mono text-secondary font-bold">
                    +$345.00
                  </td>
                </tr>
                <tr className="hover:bg-surface-container-high transition-colors">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-secondary/20 flex items-center justify-center">
                        <span className="material-symbols-outlined text-secondary text-sm">
                          sports_soccer
                        </span>
                      </div>
                      <span className="font-bold text-white">
                        Premier League Blitz
                      </span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className="px-3 py-1 bg-surface-variant rounded-full text-[10px]">
                      SPORTS
                    </span>
                  </td>
                  <td className="px-8 py-6 font-mono">1,540</td>
                  <td className="px-8 py-6 font-mono">$770.00</td>
                  <td className="px-8 py-6 font-mono">$500.00</td>
                  <td className="px-8 py-6 text-right font-mono text-secondary font-bold">
                    +$270.00
                  </td>
                </tr>
                <tr className="hover:bg-surface-container-high transition-colors">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-on-surface-variant/20 flex items-center justify-center">
                        <span className="material-symbols-outlined text-slate-300 text-sm">
                          code
                        </span>
                      </div>
                      <span className="font-bold text-white">
                        Fullstack Challenge
                      </span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className="px-3 py-1 bg-surface-variant rounded-full text-[10px]">
                      TECH
                    </span>
                  </td>
                  <td className="px-8 py-6 font-mono">820</td>
                  <td className="px-8 py-6 font-mono">$410.00</td>
                  <td className="px-8 py-6 font-mono">$300.00</td>
                  <td className="px-8 py-6 text-right font-mono text-secondary font-bold">
                    +$110.00
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </>
  );
}
