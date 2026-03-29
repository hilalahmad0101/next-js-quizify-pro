import React from 'react';

export default function Page() {
  return (
    <div className="w-full">
      
{/*  TopAppBar  */}

{/*  Content Area  */}
<div className="mt-20 p-8 space-y-8 overflow-y-auto max-h-[calc(100vh-5rem)]">
{/*  Summary Row: Bento Style  */}
<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
<div className="glass-card p-6 rounded-2xl relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-6xl">payments</span>
</div>
<p className="text-sm text-outline font-medium mb-1">Total Deposited</p>
<p className="text-2xl font-mono font-bold text-white">$890.00</p>
</div>
<div className="glass-card p-6 rounded-2xl relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-6xl">outbound</span>
</div>
<p className="text-sm text-outline font-medium mb-1">Total Withdrawn</p>
<p className="text-2xl font-mono font-bold text-white">$650.00</p>
</div>
<div className="glass-card p-6 rounded-2xl border-l-4 border-tertiary relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-20 text-tertiary">
<span className="material-symbols-outlined text-6xl" style={{fontVariationSettings: ''FILL' 1'}}>emoji_events</span>
</div>
<p className="text-sm text-outline font-medium mb-1">Prizes Won</p>
<p className="text-2xl font-mono font-bold text-tertiary">$1,240.00</p>
</div>
<div className="glass-card p-6 rounded-2xl relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-6xl">confirmation_number</span>
</div>
<p className="text-sm text-outline font-medium mb-1">Entry Fees</p>
<p className="text-2xl font-mono font-bold text-error">$432.00</p>
</div>
</div>
{/*  Filter Bar  */}
<div className="glass-card p-4 rounded-xl flex flex-wrap items-center justify-between gap-4">
<div className="flex flex-wrap items-center gap-4">
<div className="flex items-center gap-2 bg-surface-container-high px-3 py-2 rounded-lg border border-outline-variant/10">
<span className="material-symbols-outlined text-sm text-outline">calendar_month</span>
<span className="text-sm font-medium">Mar 1 - Mar 29, 2024</span>
</div>
<select className="bg-surface-container-high border-outline-variant/10 text-sm rounded-lg focus:ring-primary-container focus:border-primary-container py-2 px-4">
<option>All Types</option>
<option>Prize</option>
<option>Deposit</option>
<option>Withdrawal</option>
<option>Entry Fee</option>
</select>
<select className="bg-surface-container-high border-outline-variant/10 text-sm rounded-lg focus:ring-primary-container focus:border-primary-container py-2 px-4">
<option>Status: All</option>
<option>Completed</option>
<option>Pending</option>
<option>Failed</option>
</select>
</div>
<button className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 text-on-surface rounded-lg text-sm font-semibold transition-all">
<span className="material-symbols-outlined text-sm">download</span>
                    Export CSV
                </a>
</div>
{/*  Transactions Table  */}
<div className="glass-card rounded-2xl overflow-hidden">
<table className="w-full text-left border-collapse">
<thead className="bg-surface-container-high/50 text-outline text-xs uppercase tracking-widest font-bold">
<tr>
<th className="px-6 py-4">#</th>
<th className="px-6 py-4">Date &amp; Time</th>
<th className="px-6 py-4">Description</th>
<th className="px-6 py-4">Type</th>
<th className="px-6 py-4 text-right">Amount</th>
<th className="px-6 py-4 text-right">Balance</th>
<th className="px-6 py-4 text-center">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/10 text-sm">
{/*  Row 1  */}
<tr className="hover:bg-white/5 transition-colors">
<td className="px-6 py-4 font-mono text-outline">#TRX-9021</td>
<td className="px-6 py-4">Mar 28, 14:20</td>
<td className="px-6 py-4 font-medium">Grand Finals Winner - QuizArena</td>
<td className="px-6 py-4">
<span className="px-2 py-1 rounded bg-secondary/10 text-secondary text-[10px] uppercase font-bold">Prize</span>
</td>
<td className="px-6 py-4 text-right font-mono font-bold text-secondary">+$25.00</td>
<td className="px-6 py-4 text-right font-mono text-outline">$1,240.50</td>
<td className="px-6 py-4 text-center text-secondary">
<span className="material-symbols-outlined text-lg" style={{fontVariationSettings: ''FILL' 1'}}>check_circle</span>
</td>
</tr>
{/*  Row 2  */}
<tr className="hover:bg-white/5 transition-colors">
<td className="px-6 py-4 font-mono text-outline">#TRX-8984</td>
<td className="px-6 py-4">Mar 27, 09:15</td>
<td className="px-6 py-4 font-medium">Account Top-up (Stripe)</td>
<td className="px-6 py-4">
<span className="px-2 py-1 rounded bg-secondary/10 text-secondary text-[10px] uppercase font-bold">Deposit</span>
</td>
<td className="px-6 py-4 text-right font-mono font-bold text-secondary">+$50.00</td>
<td className="px-6 py-4 text-right font-mono text-outline">$1,215.50</td>
<td className="px-6 py-4 text-center text-secondary">
<span className="material-symbols-outlined text-lg" style={{fontVariationSettings: ''FILL' 1'}}>check_circle</span>
</td>
</tr>
{/*  Row 3  */}
<tr className="hover:bg-white/5 transition-colors">
<td className="px-6 py-4 font-mono text-outline">#TRX-8812</td>
<td className="px-6 py-4">Mar 26, 18:45</td>
<td className="px-6 py-4 font-medium">Entry: Cyber Security Challenge</td>
<td className="px-6 py-4">
<span className="px-2 py-1 rounded bg-error/10 text-error text-[10px] uppercase font-bold">Entry Fee</span>
</td>
<td className="px-6 py-4 text-right font-mono font-bold text-error">-$2.00</td>
<td className="px-6 py-4 text-right font-mono text-outline">$1,165.50</td>
<td className="px-6 py-4 text-center text-secondary">
<span className="material-symbols-outlined text-lg" style={{fontVariationSettings: ''FILL' 1'}}>check_circle</span>
</td>
</tr>
{/*  Row 4  */}
<tr className="hover:bg-white/5 transition-colors">
<td className="px-6 py-4 font-mono text-outline">#TRX-8750</td>
<td className="px-6 py-4">Mar 25, 11:30</td>
<td className="px-6 py-4 font-medium">Bank Withdrawal Request</td>
<td className="px-6 py-4">
<span className="px-2 py-1 rounded bg-error/10 text-error text-[10px] uppercase font-bold">Withdrawal</span>
</td>
<td className="px-6 py-4 text-right font-mono font-bold text-error">-$100.00</td>
<td className="px-6 py-4 text-right font-mono text-outline">$1,167.50</td>
<td className="px-6 py-4 text-center text-secondary">
<span className="material-symbols-outlined text-lg" style={{fontVariationSettings: ''FILL' 1'}}>check_circle</span>
</td>
</tr>
{/*  Row 5  */}
<tr className="hover:bg-white/5 transition-colors">
<td className="px-6 py-4 font-mono text-outline">#TRX-8641</td>
<td className="px-6 py-4">Mar 24, 21:05</td>
<td className="px-6 py-4 font-medium">Daily Trivia Winner</td>
<td className="px-6 py-4">
<span className="px-2 py-1 rounded bg-secondary/10 text-secondary text-[10px] uppercase font-bold">Prize</span>
</td>
<td className="px-6 py-4 text-right font-mono font-bold text-secondary">+$10.00</td>
<td className="px-6 py-4 text-right font-mono text-outline">$1,267.50</td>
<td className="px-6 py-4 text-center text-secondary">
<span className="material-symbols-outlined text-lg" style={{fontVariationSettings: ''FILL' 1'}}>check_circle</span>
</td>
</tr>
</tbody>
</table>
{/*  Pagination  */}
<div className="px-6 py-4 bg-surface-container-high/30 flex items-center justify-between">
<span className="text-xs text-outline font-medium">Showing <span className="text-on-surface">1-12</span> of <span className="text-on-surface">247</span> transactions</span>
<div className="flex items-center gap-1">
<button className="w-8 h-8 flex items-center justify-center rounded bg-surface-container-high hover:bg-primary-container transition-colors text-on-surface">
<span className="material-symbols-outlined text-sm">chevron_left</span>
</a>
<button className="w-8 h-8 flex items-center justify-center rounded bg-primary-container text-white text-xs font-bold">1</a>
<button className="w-8 h-8 flex items-center justify-center rounded bg-surface-container-high hover:bg-primary-container/20 transition-colors text-xs font-bold">2</a>
<button className="w-8 h-8 flex items-center justify-center rounded bg-surface-container-high hover:bg-primary-container/20 transition-colors text-xs font-bold">3</a>
<span className="px-2 text-outline">...</span>
<button className="w-8 h-8 flex items-center justify-center rounded bg-surface-container-high hover:bg-primary-container/20 transition-colors text-xs font-bold">21</a>
<button className="w-8 h-8 flex items-center justify-center rounded bg-surface-container-high hover:bg-primary-container transition-colors text-on-surface">
<span className="material-symbols-outlined text-sm">chevron_right</span>
</a>
</div>
</div>
</div>
</div>

    </div>
  );
}
