import React from 'react';

export default function Page() {
  return (
    <div className="w-full">
      

<div className="grid grid-cols-12 gap-10">
{/*  Left Sub-nav  */}
<nav className="col-span-3 space-y-2">
<button className="w-full flex items-center justify-between px-5 py-4 rounded-xl bg-surface-container-high border-l-4 border-primary text-white font-medium transition-all group">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary" data-icon="account_circle" style={{fontVariationSettings: ''FILL' 1'}}>account_circle</span>
<span>Account</span>
</div>
<span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity" data-icon="chevron_right">chevron_right</span>
</a>
<button className="w-full flex items-center justify-between px-5 py-4 rounded-xl hover:bg-surface-container-low text-on-surface-variant transition-all group">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined" data-icon="shield">shield</span>
<span>Security</span>
</div>
<span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity" data-icon="chevron_right">chevron_right</span>
</a>
<button className="w-full flex items-center justify-between px-5 py-4 rounded-xl hover:bg-surface-container-low text-on-surface-variant transition-all group">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined" data-icon="payments">payments</span>
<span>Billing</span>
</div>
</a>
<button className="w-full flex items-center justify-between px-5 py-4 rounded-xl hover:bg-surface-container-low text-on-surface-variant transition-all group">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined" data-icon="apps">apps</span>
<span>Integrations</span>
</div>
</a>
</nav>
{/*  Right Content Area  */}
<div className="col-span-9 space-y-8">
{/*  Account Section  */}
<section className="space-y-6">
{/*  Change Email Card  */}
<div className="glass-panel rounded-2xl p-8">
<h3 className="text-xl font-headline font-semibold text-white mb-6">Account Identity</h3>
<div className="space-y-4 max-w-lg">
<div>
<label className="block text-xs font-label uppercase tracking-widest text-on-surface-variant mb-2">Primary Email</label>
<div className="flex gap-4">
<input className="flex-1 bg-surface-container-highest border-none rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-primary-container input-glow outline-none transition-all" type="email" value="alchemist@quizify.pro"/>
<button className="bg-primary-container hover:bg-primary text-white px-6 py-3 rounded-xl font-medium transition-all active:scale-95">Update</a>
</div>
</div>
</div>
</div>
{/*  Change Password Card  */}
<div className="glass-panel rounded-2xl p-8">
<h3 className="text-xl font-headline font-semibold text-white mb-6">Password &amp; Access</h3>
<div className="grid grid-cols-2 gap-8">
<div className="space-y-4">
<div>
<label className="block text-xs font-label uppercase tracking-widest text-on-surface-variant mb-2">Current Password</label>
<input className="w-full bg-surface-container-highest border-none rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-primary-container input-glow outline-none transition-all" placeholder="••••••••" type="password"/>
</div>
<div>
<label className="block text-xs font-label uppercase tracking-widest text-on-surface-variant mb-2">New Password</label>
<input className="w-full bg-surface-container-highest border-none rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-primary-container input-glow outline-none transition-all" placeholder="••••••••" type="password"/>
<div className="mt-3 space-y-1.5">
<div className="flex justify-between items-center mb-1">
<span className="text-[10px] text-on-surface-variant">Security Strength</span>
<span className="text-[10px] text-secondary font-bold">STRONG</span>
</div>
<div className="w-full h-1 bg-surface-container-highest rounded-full overflow-hidden">
<div className="h-full bg-secondary w-4/5 rounded-full"></div>
</div>
</div>
</div>
</div>
<div className="bg-surface-container-low/40 rounded-xl p-5 border border-outline-variant/10">
<h4 className="text-sm font-semibold text-white mb-3">Security Guidelines</h4>
<ul className="text-xs text-on-surface-variant space-y-2">
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-[14px] text-secondary" data-icon="check_circle">check_circle</span> Minimum 12 characters</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-[14px] text-secondary" data-icon="check_circle">check_circle</span> At least one special symbol</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-[14px] text-secondary" data-icon="check_circle">check_circle</span> Use uppercase &amp; numbers</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-[14px] text-secondary" data-icon="check_circle">check_circle</span> Avoid common patterns</li>
</ul>
</div>
</div>
</div>
{/*  Linked Accounts  */}
<div className="glass-panel rounded-2xl p-8">
<h3 className="text-xl font-headline font-semibold text-white mb-6">Connected Platforms</h3>
<div className="space-y-4">
<div className="flex items-center justify-between p-4 bg-surface-container-highest/50 rounded-xl">
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
<img alt="Google" className="w-6 h-6" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPXuHIvW6ZEJ_sqYEPQjWphN8LdzVIi0Xo6qkZ4K2hLLc3EzLh3hkZ6Njq-ro8BAalCrnSUPjRRPOO9jNt0gb94bkdA13UH-gNLYnVzOz1Scnq76KU2slpYYTA4wj8Xl2GVyA_IFSYP6-J_kcoV9SPQAgnr3-E_xa0XNrisVEBPPUDSHyBtZKMmi4zDRWRU5OJEKsQ62d7beUg7sOvt-rhBh-ZnZIKfjlp0MeO9KLFj3sxc482cRC6XijQkJYJVxus0wHf3rcOwA"/>
</div>
<div>
<p className="text-white font-medium">Google Account</p>
<p className="text-xs text-on-surface-variant">connected as alchemist@gmail.com</p>
</div>
</div>
<button className="text-xs font-bold text-error uppercase tracking-widest hover:underline">Disconnect</a>
</div>
<div className="flex items-center justify-between p-4 border border-outline-variant/20 rounded-xl border-dashed">
<div className="flex items-center gap-4 opacity-60">
<div className="w-10 h-10 bg-surface-container-highest rounded-lg flex items-center justify-center">
<span className="material-symbols-outlined text-on-surface-variant" data-icon="add">add</span>
</div>
<div>
<p className="text-white font-medium">Apple ID</p>
<p className="text-xs text-on-surface-variant">Quickly sign in with Apple</p>
</div>
</div>
<button className="text-xs font-bold text-primary uppercase tracking-widest hover:text-white transition-colors">Connect</a>
</div>
</div>
</div>
{/*  Danger Zone  */}
<div className="rounded-2xl p-8 border border-error/30 bg-error-container/10">
<div className="flex items-start justify-between">
<div>
<h3 className="text-xl font-headline font-semibold text-error mb-2">Danger Zone</h3>
<p className="text-on-surface-variant text-sm max-w-md">Deleting your account is permanent. All your progress, wallet balance ($2,450.00), and history will be erased forever.</p>
</div>
<button className="bg-error hover:bg-red-500 text-on-error font-bold px-6 py-3 rounded-xl transition-all hover:shadow-[0_0_20px_rgba(255,180,171,0.3)]">Delete Account</a>
</div>
</div>

    </div>
  );
}
