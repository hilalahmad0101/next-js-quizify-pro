"use client";

import React, { useState, useEffect, useTransition } from "react";
import { getSettings, updateSettings } from "@/app/actions/settings";

type Tab = "general" | "financial" | "gateways" | "kyc";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<Tab>("general");
  const [isPending, startTransition] = useTransition();
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const [settings, setSettings] = useState({
    // General
    siteTitle: "QuizifyPro",
    adminEmail: "admin@quizifypro.io",
    timezone: "UTC",
    maintenanceMode: "false",

    // Financial
    minDeposit: "5.00",
    minWithdrawal: "10.00",
    platformFee: "2.5",

    // Gateways
    gatewayStripe: "true",
    gatewayPayPal: "true",
    gatewayJazzCash: "true",

    // KYC
    kycRequired: "true",
    kycMethods: "National ID,Passport,Drivers License",
  });

  useEffect(() => {
    const fetchSettings = async () => {
      const keys = Object.keys(settings);
      const res = await getSettings(keys);
      if (res.success && res.data) {
        setSettings((prev) => ({ ...prev, ...res.data }));
      }
      setIsLoading(false);
    };
    fetchSettings();
  }, []);

  const handleSave = async () => {
    setErrorMsg("");
    setSuccessMsg("");
    startTransition(async () => {
      const res = await updateSettings(settings);
      if (res.success) {
        setSuccessMsg("Platform architecture successfully synchronized.");
        setTimeout(() => setSuccessMsg(""), 3000);
      } else {
        setErrorMsg(res.error || "Sync failed.");
      }
    });
  };

  const toggleSetting = (key: keyof typeof settings) => {
    setSettings(prev => ({
      ...prev,
      [key]: prev[key] === "true" ? "false" : "true"
    }));
  };

  if (isLoading) return (
     <div className="max-w-7xl mx-auto p-8 animate-pulse space-y-8">
        <div className="h-12 w-1/4 bg-surface-container-low rounded-xl"></div>
        <div className="grid grid-cols-12 gap-8">
           <div className="col-span-3 h-64 bg-surface-container-low rounded-xl"></div>
           <div className="col-span-9 h-96 bg-surface-container-low rounded-xl"></div>
        </div>
     </div>
  );

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in duration-700">
      <div className="flex justify-between items-center bg-surface-container-low/50 p-6 rounded-2xl border border-outline-variant/10 shadow-lg">
         <div>
            <h1 className="text-3xl font-headline font-black text-white uppercase italic tracking-tight">Core <span className="text-primary">Configuration</span></h1>
            <p className="text-on-surface-variant text-[10px] font-black uppercase tracking-[0.3em] mt-1 opacity-60">Architectural Platform Parameters</p>
         </div>
         {successMsg && <div className="px-6 py-3 bg-secondary-container/10 border border-secondary/30 rounded-xl text-secondary text-xs font-black uppercase tracking-widest animate-in slide-in-from-top-4">{successMsg}</div>}
         {errorMsg && <div className="px-6 py-3 bg-error/10 border border-error/30 rounded-xl text-error text-xs font-black uppercase tracking-widest animate-in slide-in-from-top-4">{errorMsg}</div>}
      </div>

      <div className="grid grid-cols-12 gap-8 items-start">
        {/*  Navigation Side  */}
        <nav className="col-span-12 lg:col-span-3 space-y-2">
          {[
            { id: "general", label: "General Protocol", icon: "tune" },
            { id: "financial", label: "Financial Engine", icon: "account_balance" },
            { id: "gateways", label: "Payment Gateways", icon: "payments" },
            { id: "kyc", label: "Identity Control", icon: "verified_user" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as Tab)}
              className={`w-full flex items-center justify-between px-6 py-4 rounded-xl transition-all border ${
                activeTab === tab.id
                  ? "bg-primary text-white border-primary shadow-xl shadow-primary/20"
                  : "bg-surface-container-low text-outline border-white/5 hover:bg-surface-container-high hover:text-white"
              }`}
            >
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-[20px]">{tab.icon}</span>
                <span className="font-headline font-black text-xs uppercase tracking-widest">{tab.label}</span>
              </div>
              <span className={`material-symbols-outlined text-sm ${activeTab === tab.id ? "opacity-100" : "opacity-30"}`}>chevron_right</span>
            </button>
          ))}
        </nav>

        {/*  Content Area  */}
        <div className="col-span-12 lg:col-span-9 space-y-8 min-h-[600px]">
          {activeTab === "general" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
               {/*  Platform Info  */}
               <div className="bg-surface-container-low p-10 rounded-[2.5rem] border border-outline-variant/10 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rotate-45 translate-x-16 -translate-y-16 pointer-events-none group-hover:bg-primary/10 transition-colors"></div>
                  <h3 className="text-xl font-headline font-black text-white uppercase italic tracking-tighter mb-8 flex items-center gap-3">
                     <span className="material-symbols-outlined text-primary">info</span>
                     Platform Identity
                  </h3>
                  <div className="space-y-6 relative z-10">
                     <div className="group">
                        <label className="text-[10px] font-black text-outline uppercase tracking-widest block mb-2 group-focus-within:text-primary transition-colors">Site Title</label>
                        <input className="w-full bg-[#1A1A24] border border-outline-variant/30 rounded-2xl p-4 text-white text-base font-bold focus:outline-none focus:border-primary transition-all shadow-inner" type="text" value={settings.siteTitle} onChange={e => setSettings({...settings, siteTitle: e.target.value})} />
                     </div>
                     <div className="group">
                        <label className="text-[10px] font-black text-outline uppercase tracking-widest block mb-2 group-focus-within:text-primary transition-colors">Admin Authority</label>
                        <input className="w-full bg-[#1A1A24] border border-outline-variant/30 rounded-2xl p-4 text-white text-base font-bold focus:outline-none focus:border-primary transition-all shadow-inner" type="email" value={settings.adminEmail} onChange={e => setSettings({...settings, adminEmail: e.target.value})} />
                     </div>
                     <div className="group">
                        <label className="text-[10px] font-black text-outline uppercase tracking-widest block mb-2 group-focus-within:text-primary transition-colors">Sector Timezone</label>
                        <select className="w-full bg-[#1A1A24] border border-outline-variant/30 rounded-2xl p-4 text-white text-base font-bold focus:outline-none focus:border-primary transition-all cursor-pointer appearance-none" value={settings.timezone} onChange={e => setSettings({...settings, timezone: e.target.value})}>
                           <option value="UTC">UTC (Universal Sector)</option>
                           <option value="EST">EST (Eastern Sector)</option>
                           <option value="PST">PST (Pacific Sector)</option>
                        </select>
                     </div>
                  </div>
               </div>

               {/*  Maintenance Mode  */}
               <div className={`p-10 rounded-[2.5rem] border flex flex-col justify-between transition-all duration-700 relative overflow-hidden group ${settings.maintenanceMode === "true" ? "bg-error/10 border-error shadow-[0_0_50px_rgba(255,108,108,0.1)]" : "bg-surface-container-low border-outline-variant/10"}`}>
                  <div className="relative z-10">
                     <div className="flex items-center justify-between mb-8">
                        <h3 className={`text-xl font-headline font-black uppercase italic tracking-tighter ${settings.maintenanceMode === "true" ? "text-error" : "text-white"}`}>Laboratory Lockdown</h3>
                        <span className={`material-symbols-outlined ${settings.maintenanceMode === "true" ? "text-error animate-pulse" : "text-outline opacity-40"}`}>warning</span>
                     </div>
                     <p className="text-on-surface-variant font-medium text-sm leading-relaxed mb-10 italic">When engaged, the platform is restricted to Super Admin protocols only. Exterior access is decoupled.</p>
                  </div>
                  <div className={`flex items-center justify-between p-6 rounded-3xl border transition-all duration-700 relative z-10 ${settings.maintenanceMode === "true" ? "bg-error/20 border-error/30" : "bg-surface-container-high border-outline-variant/20"}`}>
                     <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${settings.maintenanceMode === "true" ? "text-error" : "text-outline"}`}>
                        {settings.maintenanceMode === "true" ? "LOCKDOWN ACTIVE" : "STATIONS CLEAR"}
                     </span>
                     <button onClick={() => toggleSetting("maintenanceMode")} className={`w-14 h-7 rounded-full relative transition-all duration-500 overflow-hidden ${settings.maintenanceMode === "true" ? "bg-error" : "bg-outline/20"}`}>
                        <div className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-all duration-500 shadow-lg ${settings.maintenanceMode === "true" ? "right-1" : "left-1"}`} />
                     </button>
                  </div>
               </div>
            </div>
          )}

          {activeTab === "financial" && (
            <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
               <div className="bg-surface-container-low p-12 rounded-[3.5rem] border border-outline-variant/10 shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-tertiary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none group-hover:bg-tertiary/10 transition-colors"></div>
                  <h3 className="text-2xl font-headline font-black text-white uppercase italic tracking-tight mb-12 flex items-center gap-4">
                     <span className="material-symbols-outlined text-tertiary">monetization_on</span>
                     Revenue Engine Dynamics
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
                     <div className="group">
                        <label className="text-[10px] font-black text-outline uppercase tracking-widest block mb-3 group-focus-within:text-tertiary transition-colors italic">Inflow Minimum ($)</label>
                        <input className="w-full bg-[#1A1A24] border border-outline-variant/30 rounded-2xl p-5 text-white text-xl font-headline font-black focus:outline-none focus:border-tertiary transition-all" value={settings.minDeposit} onChange={e => setSettings({...settings, minDeposit: e.target.value})} />
                     </div>
                     <div className="group">
                        <label className="text-[10px] font-black text-outline uppercase tracking-widest block mb-3 group-focus-within:text-tertiary transition-colors italic">Outflow Minimum ($)</label>
                        <input className="w-full bg-[#1A1A24] border border-outline-variant/30 rounded-2xl p-5 text-white text-xl font-headline font-black focus:outline-none focus:border-tertiary transition-all" value={settings.minWithdrawal} onChange={e => setSettings({...settings, minWithdrawal: e.target.value})} />
                     </div>
                     <div className="group">
                        <label className="text-[10px] font-black text-outline uppercase tracking-widest block mb-3 group-focus-within:text-tertiary transition-colors italic">Platform Tax (%)</label>
                        <input className="w-full bg-[#1A1A24] border border-outline-variant/30 rounded-2xl p-5 text-white text-xl font-headline font-black focus:outline-none focus:border-tertiary transition-all" value={settings.platformFee} onChange={e => setSettings({...settings, platformFee: e.target.value})} />
                     </div>
                  </div>
               </div>
            </div>
          )}

          {activeTab === "gateways" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
               {[
                 { id: "gatewayStripe", label: "Stripe", icon: "credit_card", color: "bg-[#635BFF]" },
                 { id: "gatewayPayPal", label: "PayPal", icon: "payments", color: "bg-[#003087]" },
                 { id: "gatewayJazzCash", label: "JazzCash", icon: "account_balance", color: "bg-[#E22A2D]" },
               ].map((gateway) => (
                 <div key={gateway.id} className="bg-surface-container-low p-8 rounded-[2.5rem] border border-outline-variant/10 shadow-xl group hover:border-white/20 transition-all flex flex-col justify-between h-72 overflow-hidden relative">
                    <div className={`absolute top-0 right-0 w-24 h-24 blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity ${gateway.color}`}></div>
                    <div>
                       <div className="flex items-center justify-between mb-8">
                          <div className={`w-14 h-14 rounded-2xl ${gateway.color} flex items-center justify-center text-white shadow-2xl`}>
                             <span className="material-symbols-outlined text-[24px]">{gateway.icon}</span>
                          </div>
                          <button onClick={() => toggleSetting(gateway.id as any)} className={`w-12 h-6 rounded-full relative transition-all duration-300 ${settings[gateway.id as keyof typeof settings] === "true" ? "bg-secondary" : "bg-outline/20"}`}>
                             <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all duration-300 ${settings[gateway.id as keyof typeof settings] === "true" ? "right-1" : "left-1"}`} />
                          </button>
                       </div>
                       <h3 className="text-xl font-headline font-black text-white uppercase italic tracking-tighter">{gateway.label}</h3>
                    </div>
                    <div className="flex items-center gap-2">
                       <span className={`w-2 h-2 rounded-full ${settings[gateway.id as keyof typeof settings] === "true" ? "bg-secondary animate-pulse shadow-[0_0_8px_#6cffbf]" : "bg-outline/30"}`}></span>
                       <span className="text-[10px] font-black uppercase tracking-widest text-outline">
                          {settings[gateway.id as keyof typeof settings] === "true" ? "Portal Online" : "Deactivated"}
                       </span>
                    </div>
                 </div>
               ))}
            </div>
          )}

          {activeTab === "kyc" && (
            <div className="bg-surface-container-low p-12 rounded-[3.5rem] border border-outline-variant/10 shadow-2xl animate-in fade-in slide-in-from-bottom-8 duration-700 relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none group-hover:bg-primary/10 transition-colors"></div>
               <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12 relative z-10">
                  <div>
                     <h3 className="text-2xl font-headline font-black text-white uppercase italic tracking-tight mb-2 flex items-center gap-4">
                        <span className="material-symbols-outlined text-primary">verified_user</span>
                        Identity Control Module
                     </h3>
                     <p className="text-on-surface-variant text-sm font-medium italic opacity-60">Authorize verification nodes for financial disbursements.</p>
                  </div>
                  <div className="bg-surface-container-high px-8 py-5 rounded-[2rem] border border-outline-variant/10 flex items-center gap-6 group/kyc-toggle cursor-pointer" onClick={() => toggleSetting("kycRequired")}>
                     <span className="text-[10px] font-black text-white uppercase tracking-widest">Enforce Verification</span>
                     <button className={`w-14 h-7 rounded-full relative transition-all duration-500 overflow-hidden ${settings.kycRequired === "true" ? "bg-primary" : "bg-outline/20"}`}>
                        <div className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-all duration-500 ${settings.kycRequired === "true" ? "right-1" : "left-1"}`} />
                     </button>
                  </div>
               </div>

               <div className="space-y-4 relative z-10">
                  <label className="text-[10px] font-black text-outline uppercase tracking-[0.4em] ml-2 italic mb-6 block">Validated Method Nodes</label>
                  <div className="flex flex-wrap gap-4">
                     {["National ID", "Passport", "Drivers License", "Tax Registry"].map((method) => (
                        <div key={method} className={`px-6 py-4 rounded-2xl border flex items-center gap-4 transition-all duration-500 cursor-pointer ${settings.kycMethods.includes(method) ? "bg-primary/10 border-primary text-white shadow-xl shadow-primary/5" : "bg-[#1A1A24] border-outline-variant/10 text-outline opacity-40 hover:opacity-100 hover:border-outline-variant/30"}`} onClick={() => {
                           const current = settings.kycMethods.split(",");
                           const next = current.includes(method) ? current.filter(m => m !== method) : [...current, method];
                           setSettings({...settings, kycMethods: next.join(",")})
                        }}>
                           <span className={`material-symbols-outlined text-[18px] ${settings.kycMethods.includes(method) ? "text-primary" : "text-outline"}`}>{settings.kycMethods.includes(method) ? "check_circle" : "circle"}</span>
                           <span className="text-sm font-black uppercase tracking-tight italic">{method}</span>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
          )}
        </div>
      </div>

      {/* Persistence Controls */}
      <div className="flex justify-end gap-6 pt-12 border-t border-outline-variant/10 sticky bottom-0 bg-[#0A0A14] py-8 z-50">
        <button className="px-10 py-5 rounded-[1.5rem] bg-surface-container-high text-outline font-black uppercase text-xs tracking-widest hover:text-white hover:bg-surface-bright transition-all active:scale-95">Discard Payload</button>
        <button onClick={handleSave} disabled={isPending} className="px-14 py-5 rounded-[1.5rem] bg-gradient-to-tr from-primary to-primary-container text-white font-black uppercase text-xs tracking-[0.4em] shadow-[0_10px_40px_rgba(108,62,255,0.4)] hover:shadow-[0_15px_60px_rgba(108,62,255,0.6)] hover:-translate-y-1 transition-all flex items-center gap-4 active:translate-y-0 disabled:opacity-50 group/save">
          {isPending ? <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <span>Execute Global Synchronization</span>}
          <span className="material-symbols-outlined text-[20px] group-hover/save:scale-125 transition-transform">bolt</span>
        </button>
      </div>
    </div>
  );
}
