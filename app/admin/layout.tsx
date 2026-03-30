"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'Dashboard', icon: 'dashboard', href: '/admin/dashboard' },
    { name: 'Analytics', icon: 'analytics', href: '/admin/dashboard_v2' },
    { name: 'Questions Bank', icon: 'database', href: '#' },
    { name: 'Quiz Management', icon: 'quiz', href: '/admin/quizzes' },
    { name: 'Categories', icon: 'category', href: '/admin/categories' },
  ];

  const opsItems = [
    { name: 'All Users', icon: 'group', href: '/admin/users' },
    { name: 'KYC Verification', icon: 'verified', href: '#' },
    { name: 'Revenue', icon: 'payments', href: '#' },
    { name: 'Deposits', icon: 'account_balance_wallet', href: '#' },
    { name: 'Withdrawals', icon: 'outbox', href: '/admin/withdrawals' },
  ];

  return (
    <div className="flex min-h-screen bg-[#0A0A14]">
      {/* Sidebar */}
      <aside className={`flex flex-col border-r border-[#484456]/20 bg-[#0D0D1A] h-screen w-64 fixed left-0 top-0 overflow-y-auto z-50 transition-transform duration-300 no-scrollbar ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="p-6 flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <span className="text-xl font-bold text-white tracking-widest uppercase font-headline">QuizifyPro</span>
            <span className="px-2 py-0.5 text-[10px] bg-red-900/20 text-red-500 rounded-full font-bold">ADMIN</span>
          </div>
          <p className="text-xs text-slate-500 font-headline uppercase tracking-widest mt-1">Management Portal</p>
        </div>
        
        <nav className="flex-1 px-4 space-y-1 mt-4">
          {navItems.map((item) => (
             <Link key={item.name} href={item.href} className={`flex items-center gap-3 px-6 py-3 transition-all font-headline text-sm tracking-tight ${pathname === item.href ? 'text-white bg-[#6C3EFF]/20 border-r-2 border-[#6C3EFF] font-semibold' : 'text-slate-400 hover:text-white hover:bg-[#1B1B25]'}`}>
               <span className="material-symbols-outlined" style={{ fontVariationSettings: item.name === 'Dashboard' ? "'FILL' 1" : "" }}>{item.icon}</span>
               {item.name}
             </Link>
          ))}
          
          <div className="py-4 px-6 text-[10px] text-slate-600 font-bold uppercase tracking-[0.2em]">Operations</div>
          {opsItems.map((item) => (
             <Link key={item.name} href={item.href} className={`flex items-center gap-3 px-6 py-3 transition-all font-headline text-sm tracking-tight ${pathname === item.href ? 'text-white bg-[#6C3EFF]/20 border-r-2 border-[#6C3EFF] font-semibold' : 'text-slate-400 hover:text-white hover:bg-[#1B1B25]'}`}>
               <span className="material-symbols-outlined">{item.icon}</span>
               {item.name}
             </Link>
          ))}
          
          <div className="py-4 px-6 text-[10px] text-slate-600 font-bold uppercase tracking-[0.2em]">Support</div>
          <Link href="#" className="text-slate-400 hover:text-white flex items-center gap-3 px-6 py-3 transition-all font-headline text-sm tracking-tight hover:bg-[#1B1B25]">
            <span className="material-symbols-outlined">campaign</span>
            Announcements
          </Link>
          <Link href="/admin/settings" className="text-slate-400 hover:text-white flex items-center gap-3 px-6 py-3 transition-all font-headline text-sm tracking-tight hover:bg-[#1B1B25]">
            <span className="material-symbols-outlined">settings</span>
            Settings
          </Link>
        </nav>

        <div className="p-6 mt-auto border-t border-[#484456]/20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center overflow-hidden border border-primary/20">
              <img alt="Admin" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGaaSOjpAd-8I_oAJDEM8X6Y425bvUq5HsZ6zOGAFbL4-0stThiqQGCaGuUIyoaI1xGdTCJsFtqV6l75jkKDDQQqtPuQc7CqhTNGqc-U3dcneHiuj_wik11D2DVUCO8-te289HPMtqdPd5XgsxuYUCUJ1WzSntAJbRHUttu1XRDMG8rv1WFH6f75bNjYu4S7IvFvo02jE0UBprFackyUwdcSApzjcwl4RH2mAU5pbTupdM1RwXaUfJxpqYHns2p-1HOp72rRujmA"/>
            </div>
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-tighter">Admin User</p>
              <p className="text-[10px] text-primary">Super Admin</p>
            </div>
          </div>
          <Link href="/" className="mt-4 flex items-center gap-2 text-xs text-slate-500 hover:text-red-500 transition-colors">
            <span className="material-symbols-outlined text-sm">logout</span> Logout
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-0 lg:ml-64 min-h-screen flex flex-col overflow-x-hidden">
        <header className="flex justify-between items-center w-full px-4 lg:px-8 py-4 bg-[#0A0A14]/80 backdrop-blur-xl sticky top-0 z-40 border-b border-[#484456]/10">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="lg:hidden text-white mr-4">
              <span className="material-symbols-outlined font-bold">menu</span>
            </button>
            <div className="hidden md:flex items-center gap-4 bg-[#1F1F29] px-4 py-2 rounded-xl border border-[#484456]/20 w-96">
              <span className="material-symbols-outlined text-slate-500">search</span>
              <input className="bg-transparent border-none focus:ring-0 text-sm w-full text-white placeholder-slate-500" placeholder="Search transactions, users, or quizzes..." type="text"/>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex gap-4">
              <button className="material-symbols-outlined text-slate-400 hover:text-white">notifications</button>
              <button className="material-symbols-outlined text-slate-400 hover:text-white">settings</button>
            </div>
            <div className="h-8 w-[1px] bg-[#484456]/30"></div>
            <div className="flex items-center gap-3 cursor-pointer group">
              <span className="text-sm font-headline font-medium text-slate-200 group-hover:text-primary transition-colors">Admin Profile</span>
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-sm">person</span>
              </div>
            </div>
          </div>
        </header>

        <div className="p-4 lg:p-8 max-w-[1600px] mx-auto w-full">
          {children}
        </div>
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
