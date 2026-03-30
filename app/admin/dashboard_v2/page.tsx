import React from "react";

export default function Page() {
  return (
    <>
      <div className="p-8 max-w-[1600px] mx-auto space-y-8">
        {/*  Dashboard Header  */}
        <div className="flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-black text-white font-headline tracking-tight">
              System Overview
            </h2>
            <p className="text-[#A0A0C0] mt-1 font-medium">
              Real-time platform performance and vital signs.
            </p>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-2 bg-surface-container-high rounded-lg text-sm font-bold text-white flex items-center gap-2 hover:bg-surface-bright transition-all">
              <span className="material-symbols-outlined text-sm">
                calendar_today
              </span>
              Last 24 Hours
            </button>
            <button className="px-6 py-2 bg-primary-container rounded-lg text-sm font-bold text-white shadow-[0_4px_20px_rgba(108,62,255,0.4)] hover:scale-105 active:scale-95 transition-all">
              Generate Report
            </button>
          </div>
        </div>
        {/*  Stats Row  */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {/*  Revenue Today  */}
          <div className="bg-surface-container-low p-5 rounded-xl border border-outline-variant/10">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-tertiary/10 rounded-lg">
                <span
                  className="material-symbols-outlined text-tertiary"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  payments
                </span>
              </div>
              <span className="text-[10px] font-black text-tertiary bg-tertiary/20 px-2 py-0.5 rounded-full">
                +12%
              </span>
            </div>
            <p className="text-xs font-bold text-[#A0A0C0] uppercase tracking-widest font-headline">
              Revenue Today
            </p>
            <p className="text-2xl font-black text-white font-mono mt-1">
              $4,320.00
            </p>
          </div>
          {/*  Active Users  */}
          <div className="bg-surface-container-low p-5 rounded-xl border border-outline-variant/10">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-primary-container/10 rounded-lg">
                <span
                  className="material-symbols-outlined text-primary-container"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  group
                </span>
              </div>
              <span className="text-[10px] font-black text-secondary bg-secondary/10 px-2 py-0.5 rounded-full">
                ↑ 234
              </span>
            </div>
            <p className="text-xs font-bold text-[#A0A0C0] uppercase tracking-widest font-headline">
              Active Users
            </p>
            <p className="text-2xl font-black text-white font-mono mt-1">
              1,842
            </p>
          </div>
          {/*  Quizzes Played  */}
          <div className="bg-surface-container-low p-5 rounded-xl border border-outline-variant/10">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-secondary/10 rounded-lg">
                <span
                  className="material-symbols-outlined text-secondary"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  quiz
                </span>
              </div>
            </div>
            <p className="text-xs font-bold text-[#A0A0C0] uppercase tracking-widest font-headline">
              Quizzes Played
            </p>
            <p className="text-2xl font-black text-white font-mono mt-1">
              8,470
            </p>
          </div>
          {/*  Pending Withdrawals  */}
          <div className="bg-surface-container-low p-5 rounded-xl border border-outline-variant/10">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-error-container/10 rounded-lg">
                <span
                  className="material-symbols-outlined text-error"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  outbox
                </span>
              </div>
              <span className="text-[10px] font-black text-white bg-error-container px-2 py-0.5 rounded-full">
                23
              </span>
            </div>
            <p className="text-xs font-bold text-[#A0A0C0] uppercase tracking-widest font-headline">
              Pending Payouts
            </p>
            <p className="text-2xl font-black text-error font-mono mt-1">
              $4,200
            </p>
          </div>
          {/*  New Registrations  */}
          <div className="bg-surface-container-low p-5 rounded-xl border border-outline-variant/10">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-outline-variant/20 rounded-lg">
                <span
                  className="material-symbols-outlined text-white"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  person_add
                </span>
              </div>
            </div>
            <p className="text-xs font-bold text-[#A0A0C0] uppercase tracking-widest font-headline">
              New Reg.
            </p>
            <p className="text-2xl font-black text-white font-mono mt-1">156</p>
          </div>
          {/*  Platform Balance  */}
          <div className="bg-surface-container-low p-5 rounded-xl border border-outline-variant/10">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-secondary/10 rounded-lg">
                <span
                  className="material-symbols-outlined text-secondary"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  account_balance
                </span>
              </div>
            </div>
            <p className="text-xs font-bold text-[#A0A0C0] uppercase tracking-widest font-headline">
              System Total
            </p>
            <p className="text-2xl font-black text-secondary font-mono mt-1">
              $124.5k
            </p>
          </div>
        </div>
        {/*  Revenue Chart Section  */}
        <div className="bg-surface-container-low p-8 rounded-2xl border border-outline-variant/10">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h3 className="text-xl font-black text-white font-headline uppercase tracking-tight">
                    Revenue Dynamics
                  </h3>
                  <p className="text-[#A0A0C0] text-sm">
                    30-day comparative analysis: Revenue vs Payouts
                  </p>
                </div>
                <div className="flex gap-6">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-primary-container"></span>
                    <span className="text-xs font-bold text-on-surface uppercase tracking-wider">
                      Gross Revenue
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-tertiary"></span>
                    <span className="text-xs font-bold text-on-surface uppercase tracking-wider">
                      Prizes Paid
                    </span>
                  </div>
                </div>
              </div>
              {/*  Mock Chart Representation  */}
              <div className="h-64 relative flex items-end gap-1">
                {/*  Visualizing a stylized line chart with CSS shapes or simple bars for representation  */}
                <div className="flex-1 bg-primary-container/20 h-[60%] rounded-t-sm relative group">
                  <div className="absolute inset-x-0 bottom-0 bg-primary-container h-[80%] opacity-40 group-hover:opacity-100 transition-all"></div>
                </div>
                <div className="flex-1 bg-primary-container/20 h-[45%] rounded-t-sm relative group">
                  <div className="absolute inset-x-0 bottom-0 bg-primary-container h-[70%] opacity-40 group-hover:opacity-100 transition-all"></div>
                </div>
                <div className="flex-1 bg-primary-container/20 h-[75%] rounded-t-sm relative group">
                  <div className="absolute inset-x-0 bottom-0 bg-primary-container h-[90%] opacity-40 group-hover:opacity-100 transition-all"></div>
                </div>
                <div className="flex-1 bg-primary-container/20 h-[55%] rounded-t-sm relative group">
                  <div className="absolute inset-x-0 bottom-0 bg-primary-container h-[60%] opacity-40 group-hover:opacity-100 transition-all"></div>
                </div>
                <div className="flex-1 bg-primary-container/20 h-[90%] rounded-t-sm relative group">
                  <div className="absolute inset-x-0 bottom-0 bg-primary-container h-[85%] opacity-40 group-hover:opacity-100 transition-all"></div>
                </div>
                <div className="flex-1 bg-primary-container/20 h-[65%] rounded-t-sm relative group">
                  <div className="absolute inset-x-0 bottom-0 bg-primary-container h-[75%] opacity-40 group-hover:opacity-100 transition-all"></div>
                </div>
                <div className="flex-1 bg-primary-container/20 h-[40%] rounded-t-sm relative group">
                  <div className="absolute inset-x-0 bottom-0 bg-primary-container h-[50%] opacity-40 group-hover:opacity-100 transition-all"></div>
                </div>
                {/*  Repeating some bars to fill space  */}
                <div className="flex-1 bg-primary-container/20 h-[80%] rounded-t-sm relative group"></div>
                <div className="flex-1 bg-primary-container/20 h-[60%] rounded-t-sm relative group"></div>
                <div className="flex-1 bg-primary-container/20 h-[50%] rounded-t-sm relative group"></div>
              </div>
              <div className="flex justify-between mt-4 px-2">
                <span className="text-[10px] font-bold text-[#484456] font-mono">
                  01 OCT
                </span>
                <span className="text-[10px] font-bold text-[#484456] font-mono">
                  10 OCT
                </span>
                <span className="text-[10px] font-bold text-[#484456] font-mono">
                  20 OCT
                </span>
                <span className="text-[10px] font-bold text-[#484456] font-mono">
                  30 OCT
                </span>
              </div>
            </div>
            <div className="w-full lg:w-72 grid grid-cols-2 lg:grid-cols-1 gap-4">
              <div className="p-6 bg-surface-container-high rounded-xl border-l-4 border-primary-container">
                <p className="text-[10px] font-black text-[#A0A0C0] uppercase tracking-widest">
                  Gross Profit
                </p>
                <p className="text-2xl font-black text-white font-mono mt-1">
                  $124.5k
                </p>
              </div>
              <div className="p-6 bg-surface-container-high rounded-xl border-l-4 border-tertiary">
                <p className="text-[10px] font-black text-[#A0A0C0] uppercase tracking-widest">
                  Paid Out
                </p>
                <p className="text-2xl font-black text-white font-mono mt-1">
                  $89.2k
                </p>
              </div>
              <div className="p-6 bg-surface-container-high rounded-xl border-l-4 border-secondary">
                <p className="text-[10px] font-black text-[#A0A0C0] uppercase tracking-widest">
                  Net Margin
                </p>
                <p className="text-2xl font-black text-secondary font-mono mt-1">
                  28.3%
                </p>
                <p className="text-sm font-bold text-white mt-1">$35.3k</p>
              </div>
            </div>
          </div>
        </div>
        {/*  Middle Row: Activity & Pending Actions  */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/*  Activity Feed  */}
          <div className="lg:col-span-8 bg-surface-container-low rounded-2xl p-8 border border-outline-variant/10">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-3">
                <h3 className="text-xl font-black text-white font-headline uppercase tracking-tight">
                  Platform Activity
                </h3>
                <div className="flex items-center gap-1 bg-error/10 px-2 py-0.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-error animate-pulse"></span>
                  <span className="text-[10px] font-bold text-error uppercase">
                    Live
                  </span>
                </div>
              </div>
              <button className="text-sm font-bold text-primary hover:underline transition-all">
                View All
              </button>
            </div>
            <div className="space-y-4">
              {/*  Feed Item: Win  */}
              <div className="flex items-center justify-between p-4 bg-surface-container-high/40 rounded-xl hover:bg-surface-container-high transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      data-alt="close up avatar of a young smiling man"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeF3az67MwqQXPcJZkrOpx1bjb2AHwwk4Fgwq2428thHaSwfVssZ8CcPi-hy1Z9pOtxBytcKcROaShDiObuvOgSZguBKN0lG7Hr-K0b1IUE8rSTZRgDhy6cEQQuRd1WlewhCZ6sK3s-LkEnwWf1thrAMb9vjX36-czv9O0zgQkdmbZYkthF9vb2qcotIcd_RqBat25t1pfAq5ifkQmM0RyCGnSTEWatzyLiRArjMFs53v6_xoDVPKN6tgln1TbNCFy1jMkgzmPPQ"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">
                      <span className="text-primary">@cryptoking</span> won{" "}
                      <span className="text-tertiary">$250.00</span> in Daily
                      Blitz
                    </p>
                    <p className="text-[10px] text-[#A0A0C0] font-medium">
                      Just now
                    </p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-tertiary">
                  emoji_events
                </span>
              </div>
              {/*  Feed Item: Deposit  */}
              <div className="flex items-center justify-between p-4 bg-surface-container-high/40 rounded-xl hover:bg-surface-container-high transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-secondary-container/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-secondary-container">
                      account_balance_wallet
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">
                      <span className="text-primary">@sarah_q</span> deposited{" "}
                      <span className="text-white">$1,000.00</span>
                    </p>
                    <p className="text-[10px] text-[#A0A0C0] font-medium">
                      2 minutes ago
                    </p>
                  </div>
                </div>
                <span className="text-[10px] font-black text-secondary-container font-mono tracking-tighter">
                  SUCCESS
                </span>
              </div>
              {/*  Feed Item: Withdrawal  */}
              <div className="flex items-center justify-between p-4 bg-surface-container-high/40 rounded-xl hover:bg-surface-container-high transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      data-alt="profile photo of a woman with red hair looking into camera"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7Spbsyty0I-hz7WUh9wdA4NUSiLBTIEQ0l8doNUfdGFYX2qvUSKaZAMokbdDUjYobqIKQC06kh2yvkLcOwiHk-Te2e21UfrltPjrBaUYZTpvkbBuMZZS7f0JxNkPdV24aiXgd4f7Ga0yvN7Q5RyJdyyxzxAot4khlLvDDDu1CIorMvP7GDnKbVG0p5jEXFEsuo2Tnm10yRru_zMBS036yuxU5tdvqPuWErXa2QuZNoEWGkkcxB5zr_K4TJspLmbHpstdGkHiicQ"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">
                      <span className="text-primary">@fox_hound</span> requested
                      withdrawal <span className="text-white">$450.00</span>
                    </p>
                    <p className="text-[10px] text-[#A0A0C0] font-medium">
                      5 minutes ago
                    </p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-error">
                  hourglass_empty
                </span>
              </div>
              {/*  Feed Item: Registration  */}
              <div className="flex items-center justify-between p-4 bg-surface-container-high/40 rounded-xl hover:bg-surface-container-high transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-primary-container/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary-container">
                      person_add
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">
                      New user <span className="text-primary">@marco_polo</span>{" "}
                      joined the arena
                    </p>
                    <p className="text-[10px] text-[#A0A0C0] font-medium">
                      12 minutes ago
                    </p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-primary">
                  verified
                </span>
              </div>
            </div>
          </div>
          {/*  Pending Actions  */}
          <div className="lg:col-span-4 bg-surface-container-low rounded-2xl p-8 border border-outline-variant/10">
            <h3 className="text-xl font-black text-white font-headline uppercase tracking-tight mb-6">
              Action Required
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-error-container/10 rounded-xl border border-error/10 flex items-center gap-4 group cursor-pointer hover:bg-error-container/20 transition-all">
                <div className="w-12 h-12 bg-error-container/20 rounded-lg flex items-center justify-center text-error group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">
                    payments
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-black text-white uppercase tracking-tight">
                    23 Withdrawals
                  </p>
                  <p className="text-xs text-error font-bold font-mono">
                    $4,200 Total
                  </p>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant">
                  chevron_right
                </span>
              </div>
              <div className="p-4 bg-primary-container/10 rounded-xl border border-primary/10 flex items-center gap-4 group cursor-pointer hover:bg-primary-container/20 transition-all">
                <div className="w-12 h-12 bg-primary-container/20 rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">
                    verified_user
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-black text-white uppercase tracking-tight">
                    8 KYC Pending
                  </p>
                  <p className="text-xs text-[#A0A0C0] font-medium">
                    Verification queue
                  </p>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant">
                  chevron_right
                </span>
              </div>
              <div className="p-4 bg-surface-container-high rounded-xl border border-outline-variant/10 flex items-center gap-4 group cursor-pointer hover:bg-surface-bright transition-all">
                <div className="w-12 h-12 bg-outline-variant/20 rounded-lg flex items-center justify-center text-[#A0A0C0] group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">
                    support_agent
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-black text-white uppercase tracking-tight">
                    5 Support Tickets
                  </p>
                  <p className="text-xs text-[#A0A0C0] font-medium">
                    3 Critical issues
                  </p>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant">
                  chevron_right
                </span>
              </div>
              <div className="p-4 bg-surface-container-high rounded-xl border border-outline-variant/10 flex items-center gap-4 group cursor-pointer hover:bg-surface-bright transition-all">
                <div className="w-12 h-12 bg-outline-variant/20 rounded-lg flex items-center justify-center text-[#A0A0C0] group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">
                    report_problem
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-black text-white uppercase tracking-tight">
                    2 User Reports
                  </p>
                  <p className="text-xs text-[#A0A0C0] font-medium">
                    Possible cheating
                  </p>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant">
                  chevron_right
                </span>
              </div>
            </div>
          </div>
        </div>
        {/*  Bottom: Top Quizzes Today  */}
        <div className="bg-surface-container-low rounded-2xl border border-outline-variant/10 overflow-hidden">
          <div className="p-8 flex justify-between items-center">
            <h3 className="text-xl font-black text-white font-headline uppercase tracking-tight">
              Today's Top Performers
            </h3>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-surface-container-high rounded-lg text-xs font-bold text-[#A0A0C0] hover:text-white transition-all">
                Categories
              </button>
              <button className="px-4 py-2 bg-surface-container-high rounded-lg text-xs font-bold text-[#A0A0C0] hover:text-white transition-all">
                Payout Range
              </button>
            </div>
          </div>
          <div className="overflow-x-auto px-8 pb-8">
            <table className="w-full text-left">
              <thead>
                <tr className="text-[10px] font-black text-[#484456] uppercase tracking-[0.2em] border-b border-outline-variant/20">
                  <th className="pb-4">Quiz Title</th>
                  <th className="pb-4">Category</th>
                  <th className="pb-4">Players</th>
                  <th className="pb-4">Revenue</th>
                  <th className="pb-4">Prizes Paid</th>
                  <th className="pb-4">Profit</th>
                  <th className="pb-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/10">
                <tr className="group hover:bg-surface-container-high/40 transition-all">
                  <td className="py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary-container/20 flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined">
                          auto_awesome
                        </span>
                      </div>
                      <span className="text-sm font-bold text-white">
                        Daily Crypto Blitz
                      </span>
                    </div>
                  </td>
                  <td className="py-5 text-sm text-[#A0A0C0] font-medium">
                    Finance
                  </td>
                  <td className="py-5 text-sm font-mono text-white">2,410</td>
                  <td className="py-5 text-sm font-mono text-white">
                    $1,205.00
                  </td>
                  <td className="py-5 text-sm font-mono text-tertiary">
                    $840.00
                  </td>
                  <td className="py-5 text-sm font-mono text-secondary">
                    +$365.00
                  </td>
                  <td className="py-5 text-right">
                    <button className="p-2 hover:bg-primary-container/20 rounded-lg text-primary transition-all">
                      <span className="material-symbols-outlined">
                        monitoring
                      </span>
                    </button>
                  </td>
                </tr>
                <tr className="group hover:bg-surface-container-high/40 transition-all">
                  <td className="py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
                        <span className="material-symbols-outlined">
                          stadium
                        </span>
                      </div>
                      <span className="text-sm font-bold text-white">
                        World Cup Trivia
                      </span>
                    </div>
                  </td>
                  <td className="py-5 text-sm text-[#A0A0C0] font-medium">
                    Sports
                  </td>
                  <td className="py-5 text-sm font-mono text-white">1,890</td>
                  <td className="py-5 text-sm font-mono text-white">$945.00</td>
                  <td className="py-5 text-sm font-mono text-tertiary">
                    $600.00
                  </td>
                  <td className="py-5 text-sm font-mono text-secondary">
                    +$345.00
                  </td>
                  <td className="py-5 text-right">
                    <button className="p-2 hover:bg-primary-container/20 rounded-lg text-primary transition-all">
                      <span className="material-symbols-outlined">
                        monitoring
                      </span>
                    </button>
                  </td>
                </tr>
                <tr className="group hover:bg-surface-container-high/40 transition-all">
                  <td className="py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-tertiary/10 flex items-center justify-center text-tertiary">
                        <span className="material-symbols-outlined">movie</span>
                      </div>
                      <span className="text-sm font-bold text-white">
                        Sci-Fi Blockbusters
                      </span>
                    </div>
                  </td>
                  <td className="py-5 text-sm text-[#A0A0C0] font-medium">
                    Entertainment
                  </td>
                  <td className="py-5 text-sm font-mono text-white">1,240</td>
                  <td className="py-5 text-sm font-mono text-white">$620.00</td>
                  <td className="py-5 text-sm font-mono text-tertiary">
                    $450.00
                  </td>
                  <td className="py-5 text-sm font-mono text-secondary">
                    +$170.00
                  </td>
                  <td className="py-5 text-right">
                    <button className="p-2 hover:bg-primary-container/20 rounded-lg text-primary transition-all">
                      <span className="material-symbols-outlined">
                        monitoring
                      </span>
                    </button>
                  </td>
                </tr>
                <tr className="group hover:bg-surface-container-high/40 transition-all">
                  <td className="py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary-container/20 flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined">
                          biotech
                        </span>
                      </div>
                      <span className="text-sm font-bold text-white">
                        AI Frontiers Quiz
                      </span>
                    </div>
                  </td>
                  <td className="py-5 text-sm text-[#A0A0C0] font-medium">
                    Technology
                  </td>
                  <td className="py-5 text-sm font-mono text-white">980</td>
                  <td className="py-5 text-sm font-mono text-white">$490.00</td>
                  <td className="py-5 text-sm font-mono text-tertiary">
                    $320.00
                  </td>
                  <td className="py-5 text-sm font-mono text-secondary">
                    +$170.00
                  </td>
                  <td className="py-5 text-right">
                    <button className="p-2 hover:bg-primary-container/20 rounded-lg text-primary transition-all">
                      <span className="material-symbols-outlined">
                        monitoring
                      </span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
