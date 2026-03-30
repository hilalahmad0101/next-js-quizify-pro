import React from 'react';

export default function Page() {
  return (
      <>
<div className="max-w-7xl mx-auto">
      
      <div className="grid grid-cols-12 gap-8 items-start">
      {/*  Left Sub-Nav (Column 1-3)  */}
      <nav className="col-span-12 lg:col-span-3 space-y-2">
      <button className="w-full flex items-center justify-between px-5 py-4 rounded-xl bg-primary-container text-white shadow-lg transition-all">
      <div className="flex items-center gap-3">
      <span className="material-symbols-outlined" data-icon="tune">tune</span>
      <span className="font-headline font-medium">General</span>
      </div>
      <span className="material-symbols-outlined text-sm" data-icon="chevron_right">chevron_right</span></button>
      <button className="w-full flex items-center justify-between px-5 py-4 rounded-xl hover:bg-surface-container-high text-outline hover:text-on-surface transition-all">
      <div className="flex items-center gap-3">
      <span className="material-symbols-outlined" data-icon="quiz">quiz</span>
      <span className="font-headline font-medium">Quiz Settings</span>
      </div></button>
      <button className="w-full flex items-center justify-between px-5 py-4 rounded-xl hover:bg-surface-container-high text-outline hover:text-on-surface transition-all">
      <div className="flex items-center gap-3">
      <span className="material-symbols-outlined" data-icon="account_balance">account_balance</span>
      <span className="font-headline font-medium">Financial</span>
      </div></button>
      <button className="w-full flex items-center justify-between px-5 py-4 rounded-xl hover:bg-surface-container-high text-outline hover:text-on-surface transition-all">
      <div className="flex items-center gap-3">
      <span className="material-symbols-outlined" data-icon="payments">payments</span>
      <span className="font-headline font-medium">Payment Gateways</span>
      </div></button>
      <button className="w-full flex items-center justify-between px-5 py-4 rounded-xl hover:bg-surface-container-high text-outline hover:text-on-surface transition-all">
      <div className="flex items-center gap-3">
      <span className="material-symbols-outlined" data-icon="mail">mail</span>
      <span className="font-headline font-medium">Email</span>
      </div></button>
      <button className="w-full flex items-center justify-between px-5 py-4 rounded-xl hover:bg-surface-container-high text-outline hover:text-on-surface transition-all">
      <div className="flex items-center gap-3">
      <span className="material-symbols-outlined" data-icon="gavel">gavel</span>
      <span className="font-headline font-medium">Legal</span>
      </div></button>
      </nav>
      {/*  Right Content (Column 4-12)  */}
      <div className="col-span-12 lg:col-span-9 space-y-8">
      {/*  Section: General  */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/*  Platform Info Card  */}
      <div className="bg-surface-container-low p-6 rounded-2xl light-leak relative overflow-hidden group">
      <div className="flex items-center justify-between mb-6">
      <h3 className="text-xl font-headline font-bold text-on-surface">Platform Info</h3>
      <span className="material-symbols-outlined text-primary" data-icon="info">info</span>
      </div>
      <div className="space-y-4">
      <div>
      <label className="text-xs text-outline font-headline uppercase tracking-widest block mb-1">Site Title</label>
      <input className="w-full bg-surface-container-high border-none rounded-lg p-3 text-on-surface focus:ring-1 focus:ring-primary/40" type="text" value="QuizifyPro"/>
      </div>
      <div>
      <label className="text-xs text-outline font-headline uppercase tracking-widest block mb-1">Admin Email</label>
      <input className="w-full bg-surface-container-high border-none rounded-lg p-3 text-on-surface focus:ring-1 focus:ring-primary/40" type="email" value="admin@quizifypro.io"/>
      </div>
      <div>
      <label className="text-xs text-outline font-headline uppercase tracking-widest block mb-1">Timezone</label>
      <select className="w-full bg-surface-container-high border-none rounded-lg p-3 text-on-surface focus:ring-1 focus:ring-primary/40 appearance-none">
      <option>UTC (Coordinated Universal Time)</option>
      <option>EST (Eastern Standard Time)</option>
      </select>
      </div>
      </div>
      </div>
      {/*  Maintenance Mode Card  */}
      <div className="bg-surface-container-low p-6 rounded-2xl border border-error/30 relative overflow-hidden flex flex-col justify-between">
      <div>
      <div className="flex items-center justify-between mb-4">
      <h3 className="text-xl font-headline font-bold text-error">Maintenance Mode</h3>
      <span className="material-symbols-outlined text-error" data-icon="warning">warning</span>
      </div>
      <p className="text-sm text-outline mb-6">When active, only administrators can access the platform. Front-end users will see a maintenance screen.</p>
      </div>
      <div className="flex items-center justify-between p-4 bg-error/5 rounded-xl border border-error/10">
      <span className="text-sm font-bold text-error">Mode Disabled</span>
      <button className="w-12 h-6 bg-surface-variant rounded-full relative transition-all">
      <span className="absolute left-1 top-1 w-4 h-4 bg-outline rounded-full"></span></button>
      </div>
      </div>
      </div>
      {/*  Section: Financial (Secondary Cards Area)  */}
      <div className="space-y-6">
      <div className="flex items-center gap-4">
      <div className="h-px bg-outline-variant/20 flex-1"></div>
      <h4 className="text-xs font-headline font-bold text-outline uppercase tracking-[0.3em]">Financial Architecture</h4>
      <div className="h-px bg-outline-variant/20 flex-1"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/*  Financial Rules Card  */}
      <div className="bg-surface-container-low p-6 rounded-2xl ghost-border col-span-1">
      <h3 className="text-lg font-headline font-bold text-on-surface mb-6 flex items-center gap-2">
      <span className="material-symbols-outlined text-tertiary" data-icon="monetization_on">monetization_on</span>
                                          Financial Rules
                                      </h3>
      <ul className="space-y-4">
      <li className="flex justify-between items-center">
      <span className="text-sm text-outline">Min Deposit</span>
      <span className="mono text-tertiary font-bold text-sm">$5.00</span>
      </li>
      <li className="flex justify-between items-center">
      <span className="text-sm text-outline">Min Withdrawal</span>
      <span className="mono text-tertiary font-bold text-sm">$10.00</span>
      </li>
      <li className="flex justify-between items-center">
      <span className="text-sm text-outline">Platform Fee</span>
      <span className="mono text-tertiary font-bold text-sm">2.5%</span>
      </li>
      </ul>
      <button className="w-full mt-6 py-2 rounded-lg border border-outline-variant/30 text-xs font-bold text-on-surface hover:bg-surface-container-high transition-all">Edit Rules</button>
      </div>
      {/*  Payment Gateways Card  */}
      <div className="bg-surface-container-low p-6 rounded-2xl ghost-border col-span-1">
      <h3 className="text-lg font-headline font-bold text-on-surface mb-6 flex items-center gap-2">
      <span className="material-symbols-outlined text-secondary" data-icon="account_balance_wallet">account_balance_wallet</span>
                                          Gateways
                                      </h3>
      <div className="space-y-3">
      <div className="flex items-center justify-between p-3 bg-surface-container rounded-lg">
      <div className="flex items-center gap-3">
      <div className="w-2 h-2 rounded-full bg-secondary"></div>
      <span className="text-sm font-medium">Stripe</span>
      </div>
      <span className="material-symbols-outlined text-outline text-sm" data-icon="check_circle" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
      </div>
      <div className="flex items-center justify-between p-3 bg-surface-container rounded-lg">
      <div className="flex items-center gap-3">
      <div className="w-2 h-2 rounded-full bg-secondary"></div>
      <span className="text-sm font-medium">PayPal</span>
      </div>
      <span className="material-symbols-outlined text-outline text-sm" data-icon="check_circle" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
      </div>
      <div className="flex items-center justify-between p-3 bg-surface-container rounded-lg">
      <div className="flex items-center gap-3">
      <div className="w-2 h-2 rounded-full bg-secondary"></div>
      <span className="text-sm font-medium">JazzCash</span>
      </div>
      <span className="material-symbols-outlined text-outline text-sm" data-icon="check_circle" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
      </div>
      </div>
      </div>
      {/*  KYC Settings Card  */}
      <div className="bg-surface-container-low p-6 rounded-2xl ghost-border col-span-1">
      <h3 className="text-lg font-headline font-bold text-on-surface mb-6 flex items-center gap-2">
      <span className="material-symbols-outlined text-primary-fixed-dim" data-icon="verified_user">verified_user</span>
                                          KYC Settings
                                      </h3>
      <p className="text-[10px] text-outline uppercase tracking-wider mb-4">Verification Methods</p>
      <div className="flex flex-wrap gap-2">
      <span className="px-3 py-1 bg-primary/10 text-primary-fixed-dim rounded-full text-[11px] font-bold border border-primary/20">National ID</span>
      <span className="px-3 py-1 bg-primary/10 text-primary-fixed-dim rounded-full text-[11px] font-bold border border-primary/20">Passport</span>
      <span className="px-3 py-1 bg-primary/10 text-primary-fixed-dim rounded-full text-[11px] font-bold border border-primary/20">Drivers License</span>
      </div>
      <div className="mt-6 flex items-center justify-between">
      <span className="text-xs text-outline">KYC Required for Payouts</span>
      <button className="w-10 h-5 bg-secondary-container/20 rounded-full relative border border-secondary/30">
      <span className="absolute right-1 top-1 w-2.5 h-2.5 bg-secondary rounded-full"></span></button>
      </div>
      </div>
      </div>
      </div>
      {/*  CTA Section  */}
      <div className="flex justify-end gap-4 pt-6 border-t border-outline-variant/10">
      <button className="px-8 py-3 rounded-xl bg-surface-container-high text-on-surface font-bold hover:bg-surface-bright transition-all">Discard Changes</button>
      <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-primary-container to-primary text-white font-bold shadow-[0_4px_20px_rgba(108,62,255,0.4)] hover:scale-105 transition-all">Save All Settings</button>
      </div>
      </div>
      </div>
</>
    )
  );
}
