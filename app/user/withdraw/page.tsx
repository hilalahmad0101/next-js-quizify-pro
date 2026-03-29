import React from 'react';

export default function Page() {
  return (
    <div className="w-full">
      
<div className="max-w-6xl mx-auto space-y-8">
{/*  Page Header  */}
<div className="flex flex-col gap-1">
<h1 className="text-4xl font-headline font-bold text-white tracking-tight">Withdraw Funds</h1>
<p className="text-on-surface-variant font-medium">Transfer your earnings to your preferred payment method.</p>
</div>
{/*  Balance Overview Row  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
{/*  Available  */}
<div className="surface-container-low p-6 rounded-2xl border border-tertiary/10 relative overflow-hidden group">
<div className="absolute top-0 right-0 w-24 h-24 bg-tertiary/5 rounded-full -mr-8 -mt-8 blur-2xl group-hover:bg-tertiary/10 transition-all"></div>
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-xl bg-tertiary/10 flex items-center justify-center text-tertiary">
<span className="material-symbols-outlined">payments</span>
</div>
<span className="text-on-surface-variant text-sm font-semibold uppercase tracking-wider">Available Balance</span>
</div>
<div className="font-mono text-3xl font-bold text-tertiary">$124.50</div>
</div>
{/*  Pending  */}
<div className="surface-container-low p-6 rounded-2xl border border-white/5">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500">
<span className="material-symbols-outlined">hourglass_empty</span>
</div>
<span className="text-on-surface-variant text-sm font-semibold uppercase tracking-wider">Pending Clearance</span>
</div>
<div className="font-mono text-3xl font-bold text-amber-500">$0.00</div>
</div>
{/*  Lifetime Withdrawn  */}
<div className="surface-container-low p-6 rounded-2xl border border-white/5">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-xl bg-outline/10 flex items-center justify-center text-outline">
<span className="material-symbols-outlined">history_edu</span>
</div>
<span className="text-on-surface-variant text-sm font-semibold uppercase tracking-wider">Lifetime Withdrawn</span>
</div>
<div className="font-mono text-3xl font-bold text-outline">$650.00</div>
</div>
</div>
<div className="editorial-grid">
{/*  Main Form Section  */}
<div className="col-span-12 lg:col-span-8 space-y-6">
{/*  Withdrawal Form Card  */}
<div className="surface-container p-8 rounded-3xl space-y-8">
<div>
<label className="block text-white font-headline text-lg font-bold mb-4">Enter Amount</label>
<div className="relative">
<span className="absolute left-6 top-1/2 -translate-y-1/2 font-mono text-2xl text-outline-variant">$</span>
<input className="w-full bg-surface-container-high border-none rounded-2xl py-6 pl-12 pr-6 font-mono text-3xl text-tertiary focus:ring-2 focus:ring-primary/40 transition-all" step="0.01" type="number" value="50.00"/>
</div>
</div>
<div>
<label className="block text-white font-headline text-lg font-bold mb-6">Select Payment Method</label>
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
{/*  Bank Transfer  */}
<label className="cursor-pointer group">
<input checked="" className="hidden" name="payment_method" type="radio" value="bank"/>
<div className="h-32 rounded-2xl border-2 border-primary bg-primary/5 flex flex-col items-center justify-center gap-3 transition-all group-hover:bg-primary/10">
<span className="material-symbols-outlined text-primary text-3xl">account_balance</span>
<span className="text-xs font-bold text-white uppercase tracking-tighter">Bank Transfer</span>
</div>
</label>
{/*  JazzCash  */}
<label className="cursor-pointer group">
<input className="hidden" name="payment_method" type="radio" value="jazzcash"/>
<div className="h-32 rounded-2xl border-2 border-outline-variant/20 bg-surface-container-high flex flex-col items-center justify-center gap-3 transition-all hover:border-outline-variant/50">
<span className="material-symbols-outlined text-outline text-3xl">smartphone</span>
<span className="text-xs font-bold text-on-surface-variant uppercase tracking-tighter">JazzCash</span>
</div>
</label>
{/*  EasyPaisa  */}
<label className="cursor-pointer group">
<input className="hidden" name="payment_method" type="radio" value="easypaisa"/>
<div className="h-32 rounded-2xl border-2 border-outline-variant/20 bg-surface-container-high flex flex-col items-center justify-center gap-3 transition-all hover:border-outline-variant/50">
<span className="material-symbols-outlined text-outline text-3xl">account_balance_wallet</span>
<span className="text-xs font-bold text-on-surface-variant uppercase tracking-tighter">EasyPaisa</span>
</div>
</label>
{/*  PayPal  */}
<label className="cursor-pointer group">
<input className="hidden" name="payment_method" type="radio" value="paypal"/>
<div className="h-32 rounded-2xl border-2 border-outline-variant/20 bg-surface-container-high flex flex-col items-center justify-center gap-3 transition-all hover:border-outline-variant/50">
<span className="material-symbols-outlined text-outline text-3xl">payments</span>
<span className="text-xs font-bold text-on-surface-variant uppercase tracking-tighter">PayPal</span>
</div>
</label>
{/*  Crypto  */}
<label className="cursor-pointer group">
<input className="hidden" name="payment_method" type="radio" value="crypto"/>
<div className="h-32 rounded-2xl border-2 border-outline-variant/20 bg-surface-container-high flex flex-col items-center justify-center gap-3 transition-all hover:border-outline-variant/50">
<span className="material-symbols-outlined text-outline text-3xl">currency_bitcoin</span>
<span className="text-xs font-bold text-on-surface-variant uppercase tracking-tighter">Crypto</span>
</div>
</label>
</div>
</div>
{/*  Bank Details Form  */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-outline-variant/10">
<div className="space-y-2">
<label className="text-sm font-bold text-on-surface-variant uppercase tracking-widest">Account Name</label>
<input className="w-full bg-surface-container-high border-none rounded-xl py-3 px-4 focus:ring-1 focus:ring-primary/50 text-white" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-bold text-on-surface-variant uppercase tracking-widest">Bank Name</label>
<select className="w-full bg-surface-container-high border-none rounded-xl py-3 px-4 focus:ring-1 focus:ring-primary/50 text-white appearance-none">
<option>Select Bank</option>
<option>Chase Manhattan</option>
<option>Standard Chartered</option>
<option>HSBC Global</option>
</select>
</div>
<div className="space-y-2">
<label className="text-sm font-bold text-on-surface-variant uppercase tracking-widest">Account Number</label>
<input className="w-full bg-surface-container-high border-none rounded-xl py-3 px-4 focus:ring-1 focus:ring-primary/50 text-white" placeholder="0000 0000 0000 0000" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-bold text-on-surface-variant uppercase tracking-widest">IBAN</label>
<input className="w-full bg-surface-container-high border-none rounded-xl py-3 px-4 focus:ring-1 focus:ring-primary/50 text-white" placeholder="PK00 BANK 0000 0000..." type="text"/>
</div>
<div className="md:col-span-2 flex items-center gap-3 py-2">
<input className="w-5 h-5 rounded border-outline-variant/30 bg-surface-container-high text-primary focus:ring-primary/30" id="save_bank" type="checkbox"/>
<label className="text-sm text-on-surface-variant" htmlFor="save_bank">Save this account for future withdrawals</label>
</div>
</div>
{/*  CTA Button  */}
<button className="w-full bg-primary hover:bg-primary-container text-white py-5 rounded-2xl font-bold text-lg transition-all shadow-[0_0_30px_rgba(108,62,255,0.4)] flex items-center justify-center gap-4">
                            Request Withdrawal of $50.00
                            <span className="material-symbols-outlined">arrow_forward</span>
</a>
</div>
{/*  Withdrawal History Table  */}
<div className="surface-container rounded-3xl overflow-hidden shadow-xl">
<div className="px-8 py-6 flex items-center justify-between border-b border-outline-variant/10">
<h3 className="text-xl font-headline font-bold text-white">Recent Withdrawals</h3>
<button className="text-primary text-sm font-bold hover:underline">View All</a>
</div>
<div className="overflow-x-auto no-scrollbar">
<table className="w-full text-left">
<thead className="bg-surface-container-high/50 text-xs font-bold text-outline-variant uppercase tracking-widest">
<tr>
<th className="px-8 py-4">Ref#</th>
<th className="px-8 py-4">Date</th>
<th className="px-8 py-4">Amount</th>
<th className="px-8 py-4">Method</th>
<th className="px-8 py-4">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/10">
<tr className="hover:bg-white/5 transition-colors">
<td className="px-8 py-5 font-mono text-sm text-on-surface">#WD-9821</td>
<td className="px-8 py-5 text-sm text-on-surface-variant">Oct 24, 2023</td>
<td className="px-8 py-5 font-mono text-sm text-white font-bold">$120.00</td>
<td className="px-8 py-5 text-sm text-on-surface-variant">Bank Transfer</td>
<td className="px-8 py-5">
<span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">Completed</span>
</td>
</tr>
<tr className="hover:bg-white/5 transition-colors">
<td className="px-8 py-5 font-mono text-sm text-on-surface">#WD-9745</td>
<td className="px-8 py-5 text-sm text-on-surface-variant">Oct 22, 2023</td>
<td className="px-8 py-5 font-mono text-sm text-white font-bold">$45.00</td>
<td className="px-8 py-5 text-sm text-on-surface-variant">JazzCash</td>
<td className="px-8 py-5">
<span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-amber-500/10 text-amber-500 border border-amber-500/20">Processing</span>
</td>
</tr>
<tr className="hover:bg-white/5 transition-colors">
<td className="px-8 py-5 font-mono text-sm text-on-surface">#WD-9610</td>
<td className="px-8 py-5 text-sm text-on-surface-variant">Oct 18, 2023</td>
<td className="px-8 py-5 font-mono text-sm text-white font-bold">$200.00</td>
<td className="px-8 py-5 text-sm text-on-surface-variant">PayPal</td>
<td className="px-8 py-5">
<span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-error/10 text-error border border-error/20">Rejected</span>
</td>
</tr>
<tr className="hover:bg-white/5 transition-colors">
<td className="px-8 py-5 font-mono text-sm text-on-surface">#WD-9555</td>
<td className="px-8 py-5 text-sm text-on-surface-variant">Oct 15, 2023</td>
<td className="px-8 py-5 font-mono text-sm text-white font-bold">$50.00</td>
<td className="px-8 py-5 text-sm text-on-surface-variant">EasyPaisa</td>
<td className="px-8 py-5">
<span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-blue-500/10 text-blue-500 border border-blue-500/20">Pending</span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
{/*  Sidebar Content Section  */}
<div className="col-span-12 lg:col-span-4 space-y-6">
{/*  Rules Card  */}
<div className="surface-container p-6 rounded-3xl border border-amber-500/20 bg-amber-500/5 relative overflow-hidden">
<div className="absolute -top-10 -right-10 w-32 h-32 bg-amber-500/10 blur-3xl rounded-full"></div>
<h4 className="flex items-center gap-2 text-amber-500 font-bold mb-6">
<span className="material-symbols-outlined">gavel</span>
                            Withdrawal Rules
                        </h4>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-amber-500 text-sm mt-1">check_circle</span>
<div>
<p className="text-sm text-white font-bold">Minimum Amount</p>
<p className="text-xs text-on-surface-variant">Minimum $10 is required per transaction.</p>
</div>
</li>
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-amber-500 text-sm mt-1">check_circle</span>
<div>
<p className="text-sm text-white font-bold">Daily Limit</p>
<p className="text-xs text-on-surface-variant">Maximum withdrawal limit is $500 per day.</p>
</div>
</li>
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-amber-500 text-sm mt-1">check_circle</span>
<div>
<p className="text-sm text-white font-bold">Processing Time</p>
<p className="text-xs text-on-surface-variant">Usually processed within 24-48 hours.</p>
</div>
</li>
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-amber-500 text-sm mt-1">check_circle</span>
<div>
<p className="text-sm text-white font-bold">KYC Notice</p>
<p className="text-xs text-on-surface-variant">Account verification (KYC) is required for amounts above $200.</p>
</div>
</li>
</ul>
</div>
{/*  Promo/Feature Card  */}
<div className="glass-panel p-6 rounded-3xl border border-primary/20 bg-primary/5 group">
<div className="h-40 rounded-2xl overflow-hidden mb-4 relative">
<img alt="Financial analytics" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-alt="close-up of a high-tech digital tablet showing abstract financial charts and graphs with purple and blue light leaks" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAz5AeUDorKdmTaC0eOKw3Cb8Durc2hadZVoyFpWsbrOCEKG79zdGlcZLdZm1Aio0EVnVfsRP6UaqvVQsBAcOOcXKu8-OtFckFUnbgmHS1agw9CLLcd6HsQLIjEam1ZcYG0_SevFGDaKVe1NkKxoOAV0FCR6Bru0InDA-61d0iBjGj4THA-Xpe7uBr1SNTQo1gUcB38Ga0E1OGc0WSSUuBfcH3JUUeD5pzbQ479JB6qMBqQlsaSaTudWy66-cleDkjW5FZ9HDimpw"/>
<div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
</div>
<h4 className="text-white font-bold text-lg mb-2">Automated Payouts?</h4>
<p className="text-on-surface-variant text-sm mb-4 leading-relaxed">Upgrade to Diamond tier to unlock instant automated withdrawals and zero processing fees.</p>
<button className="w-full border border-primary/40 text-primary py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-primary hover:text-white transition-all">Learn More</a>
</div>
{/*  Support Widget  */}
<div className="surface-container p-6 rounded-3xl">
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary">
<span className="material-symbols-outlined">chat</span>
</div>
<div>
<h4 className="text-white font-bold text-sm">Need Help?</h4>
<p className="text-xs text-on-surface-variant">Our support team is 24/7 available.</p>
</div>
</div>
<button className="w-full bg-surface-container-high text-white py-3 rounded-xl text-sm font-semibold hover:bg-surface-container-highest transition-colors">Start Chat</a>
</div>
</div>
</div>
</div>

    </div>
  );
}
