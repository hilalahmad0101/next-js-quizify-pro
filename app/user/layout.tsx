"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function UserLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: 'Dashboard', icon: 'dashboard', href: '/user/dashboard' },
    { name: 'Daily Quiz', icon: 'timer', href: '/user/daily_quiz' },
    { name: 'Championship', icon: 'emoji_events', href: '/user/weekly_championship' },
    { name: 'Leaderboard', icon: 'leaderboard', href: '/user/leaderboard' },
    { name: 'Wallet', icon: 'account_balance_wallet', href: '/user/wallet' },
    { name: 'Challenge Mode', icon: 'psychology', href: '/user/challenge_mode' },
  ];

  return (
    <div className="bg-[#12121D] text-[#E4E1F0] font-body min-h-screen relative overflow-x-hidden no-scrollbar">
      {/* Sidebar Navigation */}
      <aside className={`fixed left-0 top-0 h-screen w-64 z-50 bg-[#0D0D17] flex flex-col py-8 px-4 border-r border-[#484456]/20 transition-transform duration-300 no-scrollbar ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="mb-10 px-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-[#6C3EFF] text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
          <span className="text-2xl font-headline font-bold text-white tracking-tighter">QuizifyPro</span>
        </div>

        <div className="mb-8 px-4 py-4 rounded-xl bg-[#1B1B25] border border-outline-variant/10">
          <div className="flex items-center gap-3 mb-3">
             <div className="h-10 w-10 rounded-full bg-primary-container flex items-center justify-center text-white font-bold ring-2 ring-primary/20 overflow-hidden">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4N6S2uWCf-iXIyfTFa6k5ID-s8WUDh_S_sOXdFqk_K5e90gnwKKCAs5uEIIue6Xbcdks0hQQzBj-lxiymETNohuyuNHlNidLkNpuI6fcfd8ipBFVMGdmzwD94CudJVfVF1VxR5CXaQpbiBaTpEdZNUih4bVTjlQ0c0pdu0Bxbri-kQvTO_VWbCwWxsGcMoh_0TqW4t3JS3T1HxndPJOY1rYuF54iAdYtLBYVNJuu3MgTB1F9wXufKePueX3SUpMZOCEW8xZ6nJg" alt="User" />
             </div>
             <div>
                <p className="text-white font-bold text-sm tracking-tight">Akshat K.</p>
                <p className="text-[10px] text-primary flex items-center gap-1">
                   <span className="material-symbols-outlined text-[12px]">verified</span> Diamond Tier
                </p>
             </div>
          </div>
          <div className="flex justify-between items-center text-[11px] text-slate-400 font-mono">
             <span>Level 42</span>
             <span>8,450 XP</span>
          </div>
          <div className="h-1.5 w-full bg-surface-variant rounded-full mt-2 overflow-hidden bg-[#34343F]">
             <div className="h-full bg-primary w-[72%]"></div>
          </div>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto no-scrollbar pr-2">
          {menuItems.map((item) => (
             <Link key={item.name} href={item.href} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all group ${pathname === item.href ? 'bg-[#6C3EFF] text-white' : 'text-[#A0A0C0] hover:bg-surface-variant/20 hover:text-white'}`}>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: pathname === item.href ? "'FILL' 1" : "" }}>{item.icon}</span>
                <span className="font-medium text-sm">{item.name}</span>
             </Link>
          ))}
        </nav>

        <div className="mt-auto pt-6 px-4">
          <Link href="/" className="w-full flex items-center gap-3 text-[#A0A0C0] hover:text-red-500 transition-colors font-medium py-3">
            <span className="material-symbols-outlined text-sm">logout</span>
            <span>Logout</span>
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="ml-0 lg:ml-64 min-h-screen flex flex-col relative">
        <header className="fixed top-0 right-0 left-0 lg:left-64 h-16 bg-[#12121D]/80 backdrop-blur-xl z-40 px-4 lg:px-8 flex items-center justify-between border-b border-[#484456]/20">
          <div className="flex items-center gap-4 lg:gap-8">
            <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="lg:hidden text-[#cac3d9] p-2">
              <span className="material-symbols-outlined">menu</span>
            </button>
            <h1 className="text-xl font-headline font-bold text-white tracking-tight hidden sm:block">Dashboard</h1>
            <div className="relative group hidden md:block">
               <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm group-focus-within:text-primary transition-colors">search</span>
               <input className="bg-[#1F1F29] border-none rounded-full pl-10 pr-4 py-1.5 text-sm w-48 lg:w-64 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-on-surface-variant/50" placeholder="Search quizzes..." type="text" />
            </div>
          </div>
          <div className="flex items-center gap-3 lg:gap-4">
            <button className="h-10 px-4 rounded-xl bg-primary/10 border border-primary/20 text-primary text-[11px] font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-primary hover:text-white transition-all">
               <span className="material-symbols-outlined text-sm">bolt</span> Get Pro
            </button>
            <div className="flex h-10 items-center bg-[#1F1F29] rounded-xl px-4 border border-outline-variant/10 cursor-pointer hover:border-primary/30 transition-colors group">
               <span className="material-symbols-outlined text-secondary text-sm mr-2 group-hover:scale-110 transition-transform">account_balance_wallet</span>
               <span className="text-xs font-mono font-bold text-white">$12,450.70</span>
            </div>
            <div className="h-10 w-10 rounded-xl bg-surface-container-high flex items-center justify-center border border-outline-variant/10 cursor-pointer hover:bg-surface-bright transition-colors relative">
               <span className="material-symbols-outlined text-slate-400 text-sm">notifications</span>
               <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full ring-2 ring-surface"></span>
            </div>
          </div>
        </header>

        <section className="mt-16 p-4 lg:p-8 flex-1 flex flex-col">
          {children}
        </section>
      </main>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden" 
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
