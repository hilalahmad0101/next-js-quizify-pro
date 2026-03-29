import React from 'react';

export default function Page() {
  return (
    <div className="w-full">
      
{/*  TopNavBar  */}
<header className="flex justify-between items-center w-full px-4 lg:px-8 py-4 bg-[#0A0A14]/80 backdrop-blur-xl dark:bg-slate-950/80 sticky top-0 z-40">
<div className="flex items-center gap-4 bg-surface-container-low px-4 py-2 rounded-xl ghost-border w-96">
<button id="sidebar-toggle" className="lg:hidden text-white mr-4"><span className="material-symbols-outlined font-bold">menu</span></button>


<span className="material-symbols-outlined text-slate-500">search</span>
<input className="bg-transparent border-none focus:ring-0 text-sm w-full text-white placeholder-slate-500 font-body" placeholder="Search transactions, users, or quizzes..." type="text"/>
</div>
<div className="flex items-center gap-6">
<div className="flex gap-4">
<button className="material-symbols-outlined text-slate-400 hover:text-white transition-colors">notifications</button>
<button className="material-symbols-outlined text-slate-400 hover:text-white transition-colors">settings</button>
</div>
<div className="h-8 w-[1px] bg-outline-variant/30"></div>
<div className="flex items-center gap-3 cursor-pointer group">
<span className="text-sm font-headline font-medium text-slate-200 group-hover:text-primary transition-colors">Admin Profile</span>
<div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
<span className="material-symbols-outlined text-primary text-sm">person</span>
</div>
</div>
</div>
</header>
<div className="p-8 max-w-[1600px] mx-auto space-y-10">
{/*  TopNavBar  */}

{/*  Content Area  */}
<section className="p-8 flex-1">
<div className="flex justify-between items-end mb-8">
<div>
<h1 className="text-4xl font-bold font-headline text-white tracking-tight">All Users</h1>
<p className="text-outline mt-1 font-body">Manage and monitor <span className="text-white font-mono">52,847</span> total accounts across the ecosystem.</p>
</div>
<div className="flex gap-3">
<button className="flex items-center gap-2 bg-surface-container-high hover:bg-surface-bright text-white text-xs px-4 py-2.5 rounded-lg font-bold transition-all ghost-border">
<span className="material-symbols-outlined text-sm" data-icon="download">download</span> Export CSV
                    </a>
<button className="flex items-center gap-2 bg-primary text-on-primary-fixed text-xs px-4 py-2.5 rounded-lg font-bold transition-all shadow-[0_4px_20px_rgba(108,62,255,0.3)]">
<span className="material-symbols-outlined text-sm" data-icon="add">add</span> Create User
                    </a>
</div>
</div>
{/*  Filter Bar  */}
<div className="bg-surface-container p-4 rounded-xl mb-6 flex flex-wrap items-center gap-4 ghost-border">
<div className="flex-1 min-w-[200px]">
<label className="block text-[10px] text-outline font-bold uppercase mb-1.5 ml-1">Status Filter</label>
<select className="w-full bg-surface-container-lowest border-none text-xs rounded-lg py-2.5 focus:ring-1 focus:ring-primary/40 text-on-surface cursor-pointer">
<option>All Statuses</option>
<option>Active</option>
<option>Suspended</option>
<option>Banned</option>
<option>Unverified</option>
</select>
</div>
<div className="flex-1 min-w-[200px]">
<label className="block text-[10px] text-outline font-bold uppercase mb-1.5 ml-1">Country</label>
<select className="w-full bg-surface-container-lowest border-none text-xs rounded-lg py-2.5 focus:ring-1 focus:ring-primary/40 text-on-surface cursor-pointer">
<option>All Countries</option>
<option>Pakistan</option>
<option>United States</option>
<option>India</option>
<option>United Kingdom</option>
</select>
</div>
<div className="flex-1 min-w-[200px]">
<label className="block text-[10px] text-outline font-bold uppercase mb-1.5 ml-1">Sort By</label>
<select className="w-full bg-surface-container-lowest border-none text-xs rounded-lg py-2.5 focus:ring-1 focus:ring-primary/40 text-on-surface cursor-pointer">
<option>Date Joined (Newest)</option>
<option>Balance (Highest)</option>
<option>Quiz Activity</option>
<option>Win Rate</option>
</select>
</div>
<div className="pt-5">
<button className="p-2.5 bg-surface-container-high rounded-lg text-outline hover:text-primary hover:bg-surface-bright transition-all">
<span className="material-symbols-outlined" data-icon="filter_list">filter_list</span>
</a>
</div>
</div>
{/*  Users Table  */}
<div className="bg-[#12121F] rounded-xl overflow-hidden ghost-border">
<table className="w-full text-left border-collapse">
<thead className="bg-surface-container-lowest text-[10px] text-outline font-bold uppercase tracking-widest border-b border-outline-variant/10">
<tr>
<th className="px-6 py-4">ID</th>
<th className="px-6 py-4">User</th>
<th className="px-6 py-4">Country</th>
<th className="px-6 py-4">Balance</th>
<th className="px-6 py-4 text-center">Quizzes</th>
<th className="px-6 py-4">Status</th>
<th className="px-6 py-4">Joined</th>
<th className="px-6 py-4 text-right">Actions</th>
</tr>
</thead>
<tbody className="text-sm">
{/*  User Row Active Highlight  */}
<tr className="border-b border-outline-variant/5 bg-primary/5 transition-colors group">
<td className="px-6 py-4 font-mono text-[11px] text-outline">#QX-9482</td>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary border border-secondary/20 font-bold text-xs uppercase">AQ</div>
<div className="flex flex-col">
<span className="text-white font-bold">@ahmed_quiz</span>
<span className="text-[10px] text-outline">ahmed@gmail.com</span>
</div>
</div>
</td>
<td className="px-6 py-4 text-on-surface">Pakistan</td>
<td className="px-6 py-4 font-mono text-tertiary font-bold">$124.50</td>
<td className="px-6 py-4 text-center text-on-surface">342</td>
<td className="px-6 py-4">
<span className="px-2 py-1 rounded text-[10px] font-bold uppercase bg-secondary/10 text-secondary border border-secondary/20">Active</span>
</td>
<td className="px-6 py-4 text-outline text-xs">Jan 15, 2024</td>
<td className="px-6 py-4 text-right">
<button className="p-2 hover:bg-surface-bright rounded-lg transition-colors text-primary">
<span className="material-symbols-outlined" data-icon="visibility">visibility</span>
</a>
</td>
</tr>
{/*  Standard Row  */}
<tr className="border-b border-outline-variant/5 hover:bg-surface-container transition-colors group">
<td className="px-6 py-4 font-mono text-[11px] text-outline">#QX-9481</td>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20 font-bold text-xs uppercase">JS</div>
<div className="flex flex-col">
<span className="text-white font-bold">@j_smith</span>
<span className="text-[10px] text-outline">jsmith@yahoo.com</span>
</div>
</div>
</td>
<td className="px-6 py-4 text-on-surface">United States</td>
<td className="px-6 py-4 font-mono text-tertiary font-bold">$42.00</td>
<td className="px-6 py-4 text-center text-on-surface">18</td>
<td className="px-6 py-4">
<span className="px-2 py-1 rounded text-[10px] font-bold uppercase bg-error/10 text-error border border-error/20">Banned</span>
</td>
<td className="px-6 py-4 text-outline text-xs">Jan 14, 2024</td>
<td className="px-6 py-4 text-right">
<button className="p-2 hover:bg-surface-bright rounded-lg transition-colors text-outline">
<span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
</a>
</td>
</tr>
{/*  Standard Row  */}
<tr className="border-b border-outline-variant/5 hover:bg-surface-container transition-colors group">
<td className="px-6 py-4 font-mono text-[11px] text-outline">#QX-9480</td>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-outline-variant/10 flex items-center justify-center text-outline border border-outline-variant/20 font-bold text-xs uppercase">MK</div>
<div className="flex flex-col">
<span className="text-white font-bold">@m_khan</span>
<span className="text-[10px] text-outline">khan_m@gmail.com</span>
</div>
</div>
</td>
<td className="px-6 py-4 text-on-surface">Pakistan</td>
<td className="px-6 py-4 font-mono text-tertiary font-bold">$0.00</td>
<td className="px-6 py-4 text-center text-on-surface">0</td>
<td className="px-6 py-4">
<span className="px-2 py-1 rounded text-[10px] font-bold uppercase bg-surface-variant text-outline border border-outline-variant/20">Unverified</span>
</td>
<td className="px-6 py-4 text-outline text-xs">Jan 14, 2024</td>
<td className="px-6 py-4 text-right">
<button className="p-2 hover:bg-surface-bright rounded-lg transition-colors text-outline">
<span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
</a>
</td>
</tr>
{/*  Repeat Rows...  */}
<tr className="border-b border-outline-variant/5 hover:bg-surface-container transition-colors group">
<td className="px-6 py-4 font-mono text-[11px] text-outline">#QX-9479</td>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary font-bold text-xs uppercase">RR</div>
<div className="flex flex-col">
<span className="text-white font-bold">@r_rodrig</span>
<span className="text-[10px] text-outline">ricardo@me.com</span>
</div>
</div>
</td>
<td className="px-6 py-4 text-on-surface">Mexico</td>
<td className="px-6 py-4 font-mono text-tertiary font-bold">$1,050.25</td>
<td className="px-6 py-4 text-center text-on-surface">1,204</td>
<td className="px-6 py-4">
<span className="px-2 py-1 rounded text-[10px] font-bold uppercase bg-secondary/10 text-secondary border border-secondary/20">Active</span>
</td>
<td className="px-6 py-4 text-outline text-xs">Jan 12, 2024</td>
<td className="px-6 py-4 text-right">
<button className="p-2 hover:bg-surface-bright rounded-lg transition-colors text-outline">
<span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
</a>
</td>
</tr>
{/*  Placeholder Rows  */}
<tr className="border-b border-outline-variant/5 hover:bg-surface-container transition-colors">
<td className="px-6 py-4 font-mono text-[11px] text-outline">#QX-9478</td>
<td className="px-6 py-4">
<div className="flex items-center gap-3 opacity-60">
<div className="w-8 h-8 rounded-full bg-tertiary/10 flex items-center justify-center text-tertiary font-bold text-xs uppercase">LC</div>
<div className="flex flex-col"><span className="text-white font-bold">@linda_c</span><span className="text-[10px] text-outline">linda@aol.com</span></div>
</div>
</td>
<td className="px-6 py-4 text-on-surface opacity-60">Canada</td>
<td className="px-6 py-4 font-mono text-tertiary opacity-60">$15.00</td>
<td className="px-6 py-4 text-center text-on-surface opacity-60">5</td>
<td className="px-6 py-4">
<span className="px-2 py-1 rounded text-[10px] font-bold uppercase bg-orange-500/10 text-orange-500 border border-orange-500/20">Suspended</span>
</td>
<td className="px-6 py-4 text-outline text-xs opacity-60">Jan 10, 2024</td>
<td className="px-6 py-4 text-right">
<button className="p-2 hover:bg-surface-bright rounded-lg text-outline"><span className="material-symbols-outlined" data-icon="more_vert">more_vert</span></a>
</td>
</tr>
</tbody>
</table>
<div className="px-6 py-4 bg-surface-container-lowest flex justify-between items-center text-xs text-outline">
<span>Showing 1 to 10 of 52,847 users</span>
<div className="flex gap-2">
<button className="px-3 py-1 rounded border border-outline-variant/20 hover:bg-surface-bright transition-colors">Prev</a>
<button className="px-3 py-1 rounded bg-primary text-on-primary-fixed font-bold">1</a>
<button className="px-3 py-1 rounded hover:bg-surface-bright transition-colors">2</a>
<button className="px-3 py-1 rounded hover:bg-surface-bright transition-colors">3</a>
<button className="px-3 py-1 rounded border border-outline-variant/20 hover:bg-surface-bright transition-colors">Next</a>
</div>
</div>
</div>
</section>
{/*  User Detail Slide-in Panel  */}

</div>

    </div>
  );
}
