"use client";

import React, { useState, useEffect, useTransition } from "react";
import {
  getAnnouncements,
  createAnnouncement,
  updateAnnouncement,
  deleteAnnouncement,
  AnnouncementInput
} from "@/app/actions/announcements";
import { useConfirm } from "@/components/providers/confirm-provider";

interface Announcement {
  id: string;
  title: string;
  content: string;
  type: string;
  isActive: boolean;
  createdAt: string;
}

export default function AnnouncementsPage() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<Announcement | null>(null);
  const [isPending, startTransition] = useTransition();
  const [errorMsg, setErrorMsg] = useState("");
  const { confirm } = useConfirm();

  const [formData, setFormData] = useState<AnnouncementInput>({
    title: "",
    content: "",
    type: "info",
    isActive: true,
  });

  const fetchData = async () => {
    setIsLoading(true);
    const response = await getAnnouncements();
    if (response.success && response.data) setAnnouncements(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleOpenModal = (item?: Announcement) => {
    setErrorMsg("");
    if (item) {
      setEditingItem(item);
      setFormData({
        title: item.title,
        content: item.content,
        type: item.type as any,
        isActive: item.isActive,
      });
    } else {
      setEditingItem(null);
      setFormData({ title: "", content: "", type: "info", isActive: true });
    }
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    startTransition(async () => {
      const response = editingItem 
        ? await updateAnnouncement(editingItem.id, formData)
        : await createAnnouncement(formData);

      if (response.success) {
        await fetchData();
        setIsModalOpen(false);
      } else {
        setErrorMsg(response.error || "Broadcast failure.");
      }
    });
  };

  const handleDelete = async (id: string) => {
    const isConfirmed = await confirm({
      title: "Decommission Broadcast",
      message: "Permanently delete this transmission? This will remove all broadcast data from the sectors.",
      confirmLabel: "Confirm Deletion",
      variant: "danger"
    });

    if (isConfirmed) {
      const response = await deleteAnnouncement(id);
      if (response.success) fetchData();
    }
  };

  const typeStyles = {
    info: "bg-primary-container/10 border-primary-container/30 text-primary-container icon-info",
    warning: "bg-tertiary/10 border-tertiary/30 text-tertiary icon-warning",
    success: "bg-secondary-container/10 border-secondary-container/30 text-secondary-container icon-check_circle",
    danger: "bg-error/10 border-error/30 text-error icon-report"
  };

  return (
    <div className="p-8 max-w-[1600px] mx-auto space-y-8 animate-in fade-in duration-700">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 bg-surface-container-low/50 p-8 rounded-[2.5rem] border border-outline-variant/10">
        <div>
           <div className="flex items-center gap-3 mb-2">
              <span className="material-symbols-outlined text-secondary-container">campaign</span>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-outline opacity-60">Communication Protocol</span>
           </div>
           <h1 className="text-4xl font-headline font-black text-white tracking-tight uppercase italic underline decoration-secondary-container/30 decoration-8 underline-offset-[12px]">Broadcast <span className="text-secondary-container">Center</span></h1>
           <p className="text-on-surface-variant max-w-lg mt-6 text-sm font-medium leading-relaxed opacity-60 italic">Deploy platform-wide intelligence notifications to synchronize all active operational sectors.</p>
        </div>
        <button onClick={() => handleOpenModal()} className="group px-8 py-5 rounded-3xl bg-secondary-container text-on-secondary-container font-black uppercase text-xs tracking-widest shadow-[0_0_30px_rgba(0,255,178,0.2)] hover:shadow-[0_0_50px_rgba(0,255,178,0.4)] transition-all flex items-center gap-4 active:scale-95">
           <span className="material-symbols-outlined text-[20px]">add_task</span>
           <span>Transmit New Pulse</span>
        </button>
      </div>

      {/* Grid Content */}
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           {[1,2,3,4].map(n => <div key={n} className="h-48 bg-surface-container-low rounded-3xl animate-pulse border border-outline-variant/5" />)}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {announcements.length === 0 && (
            <div className="col-span-full py-40 glass-panel rounded-[3rem] border border-dashed border-outline-variant/20 flex flex-col items-center justify-center opacity-40">
               <span className="material-symbols-outlined text-6xl mb-4">signal_cellular_nfc</span>
               <p className="font-headline font-black uppercase tracking-[0.2em] text-sm">Static silence across all sectors</p>
            </div>
          )}
          {announcements.map((item) => (
            <div key={item.id} className={`glass-panel rounded-[2rem] p-8 transition-all hover:border-white/20 group relative overflow-hidden border ${!item.isActive ? "opacity-50 grayscale" : ""}`}>
               <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                     <span className={`material-symbols-outlined text-2xl ${typeStyles[item.type as keyof typeof typeStyles]}`}>
                        {item.type === 'info' ? 'info' : item.type === 'warning' ? 'warning' : item.type === 'success' ? 'check_circle' : 'report'}
                     </span>
                     <div>
                        <div className="flex items-center gap-3">
                           <span className={`text-[10px] font-black uppercase tracking-[0.2em] px-2 py-0.5 rounded-lg border ${typeStyles[item.type as keyof typeof typeStyles]}`}>
                              {item.type}
                           </span>
                           {!item.isActive && <span className="text-[10px] font-black uppercase tracking-[0.2em] text-outline italic">Inactive</span>}
                        </div>
                        <h3 className="text-xl font-headline font-black text-white uppercase italic mt-1 tracking-tight">{item.title}</h3>
                     </div>
                  </div>
                  <div className="flex gap-2 relative z-10">
                     <button onClick={() => handleOpenModal(item)} className="w-10 h-10 rounded-xl bg-surface-container-high/50 flex items-center justify-center text-outline hover:text-white transition-colors">
                        <span className="material-symbols-outlined text-[18px]">edit_note</span>
                     </button>
                     <button onClick={() => handleDelete(item.id)} className="w-10 h-10 rounded-xl bg-surface-container-high/50 flex items-center justify-center text-outline hover:text-error transition-colors">
                        <span className="material-symbols-outlined text-[18px]">delete</span>
                     </button>
                  </div>
               </div>

               <p className="text-on-surface-variant text-sm font-medium leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity mb-8 border-l-2 border-outline-variant/10 pl-6 italic line-clamp-3">
                  "{item.content}"
               </p>

               <div className="pt-6 border-t border-outline-variant/10 flex justify-between items-center text-outline">
                  <div className="flex items-center gap-2">
                     <span className="material-symbols-outlined text-[16px]">schedule</span>
                     <span className="text-[10px] font-mono opacity-60 uppercase">{new Date(item.createdAt).toLocaleDateString()}</span>
                  </div>
                  {!item.isActive && (
                    <button onClick={() => updateAnnouncement(item.id, { isActive: true }).then(fetchData)} className="text-[10px] font-black uppercase tracking-widest text-primary-container hover:underline">Re-Activate Pulse</button>
                  )}
               </div>
            </div>
          ))}
        </div>
      )}

      {/* Deployment Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 lg:p-12 overflow-y-auto">
          <div className="fixed inset-0 bg-[#06060C]/90 backdrop-blur-3xl animate-in fade-in duration-500" onClick={() => !isPending && setIsModalOpen(false)}></div>
          <div className="relative w-full max-w-3xl bg-surface-container-low rounded-[3rem] border border-outline-variant/10 p-12 shadow-2xl animate-in zoom-in-95 duration-500 overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            
            <div className="relative mb-12 flex justify-between items-start">
               <div>
                  <h2 className="text-3xl font-headline font-black text-white italic uppercase tracking-tighter">{editingItem ? "Altering Pulse Data" : "Initiating Transmission"}</h2>
                  <p className="text-on-surface-variant text-xs mt-2 font-mono uppercase tracking-[0.2em] opacity-40 italic underline decoration-secondary-container decoration-4 underline-offset-8">Configure your protocol parameters for platform-wide delivery.</p>
               </div>
               <button onClick={() => setIsModalOpen(false)} className="material-symbols-outlined text-outline hover:text-white transition-colors">close</button>
            </div>

            {errorMsg && <div className="mb-8 p-6 bg-error/10 border border-error/20 rounded-[2rem] text-error text-[10px] font-black uppercase tracking-[0.2em] text-center italic">{errorMsg}</div>}

            <form onSubmit={handleSubmit} className="space-y-8">
               <div className="space-y-4">
                  <label className="text-[10px] font-black text-outline uppercase tracking-[0.4em] ml-2 italic">Pulse Identifier (Title)</label>
                  <input required className="w-full bg-[#1A1A24] border border-outline-variant/30 rounded-3xl p-6 text-white text-lg font-bold focus:outline-none focus:border-secondary transition-all shadow-inner" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} placeholder="ENTERING BROADCAST SUBJECT..." />
               </div>

               <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-4">
                     <label className="text-[10px] font-black text-outline uppercase tracking-[0.4em] ml-2 italic">Transmission Priority (Type)</label>
                     <div className="relative">
                        <select className="w-full bg-[#1A1A24] border border-outline-variant/30 rounded-3xl p-6 text-white text-xs font-black appearance-none uppercase tracking-widest cursor-pointer" value={formData.type} onChange={e => setFormData({...formData, type: e.target.value as any})}>
                           <option value="info">INFO PROTOCOL</option>
                           <option value="warning">WARNING PULSE</option>
                           <option value="success">SUCCESS SIGNAL</option>
                           <option value="danger">CRITICAL ALERT</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-outline">tune</span>
                     </div>
                  </div>
                  <div className="space-y-4">
                     <label className="text-[10px] font-black text-outline uppercase tracking-[0.4em] ml-2 italic">Visibility Protocol</label>
                     <div className="bg-[#1A1A24] border border-outline-variant/30 rounded-3xl p-6 flex justify-between items-center group cursor-pointer" onClick={() => setFormData({...formData, isActive: !formData.isActive})}>
                        <span className="text-[10px] font-black text-white uppercase tracking-widest">{formData.isActive ? "ACTIVATE SIGNAL" : "MAINTAIN SILENCE"}</span>
                        <div className={`w-12 h-6 rounded-full p-1 transition-all duration-500 ${formData.isActive ? "bg-secondary-container" : "bg-outline/20"}`}>
                           <div className={`w-4 h-4 bg-white rounded-full transition-all duration-500 ${formData.isActive ? "translate-x-6" : ""}`} />
                        </div>
                     </div>
                  </div>
               </div>

               <div className="space-y-4">
                  <label className="text-[10px] font-black text-outline uppercase tracking-[0.4em] ml-2 italic">Intellectual Data (Content)</label>
                  <textarea required rows={5} className="w-full bg-[#1A1A24] border border-outline-variant/30 rounded-3xl p-6 text-white text-sm font-medium leading-relaxed focus:outline-none focus:border-secondary transition-all resize-none shadow-inner italic" value={formData.content} onChange={e => setFormData({...formData, content: e.target.value})} placeholder="BUFFERING KNOWLEDGE CORE FOR BROADCAST..." />
               </div>

               <div className="pt-8 flex gap-6">
                  <button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 py-6 rounded-3xl bg-surface-container-high/50 text-outline font-black uppercase text-xs tracking-widest hover:text-white transition-all">Abort Payload</button>
                  <button type="submit" disabled={isPending} className="flex-[2] py-6 rounded-3xl bg-secondary-container text-on-secondary-container font-black uppercase text-xs tracking-[0.3em] shadow-[0_0_40px_rgba(0,255,178,0.2)] hover:shadow-[0_0_60px_rgba(0,255,178,0.4)] transition-all flex items-center justify-center gap-4 group/btn active:scale-95">
                     {isPending ? <div className="w-4 h-4 border-2 border-on-secondary-container/30 border-t-on-secondary-container rounded-full animate-spin" /> : <span>Deploy Protocol</span>}
                     <span className="material-symbols-outlined text-[20px] group-hover/btn:translate-x-2 transition-transform">send</span>
                  </button>
               </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
