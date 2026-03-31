import React from "react";
import { getQuizById } from "@/app/actions/quizzes";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function QuizDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const response = await getQuizById(id);

  if (!response.success || !response.data) {
     return (
       <div className="flex flex-col items-center justify-center py-40 gap-6 glass-panel rounded-[3rem] border border-red-500/20 m-8">
          <span className="material-symbols-outlined text-6xl text-error opacity-40">broken_image</span>
          <div className="text-center">
             <h2 className="text-2xl font-headline font-black text-white uppercase italic">Protocol Entity Not Found</h2>
             <p className="text-on-surface-variant text-xs font-mono mt-2 opacity-60 uppercase tracking-widest tracking-widest">Requested Sector: {id}</p>
          </div>
          <Link href="/admin/quizzes" className="mt-4 px-6 py-3 bg-surface-container-high rounded-xl text-xs font-black uppercase text-outline hover:text-white transition-colors">Return to Sector Overview</Link>
       </div>
     );
  }

  const quiz = response.data;

  return (
    <div className="p-8 max-w-[1400px] mx-auto space-y-8 animate-in fade-in duration-700">
      {/* Header */}
      <div className="bg-surface-container-low/50 p-12 rounded-[2.5rem] border border-outline-variant/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
        <div className="space-y-4 relative z-10">
          <div className="flex gap-4 items-center">
             <Link href="/admin/quizzes" className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-outline hover:text-white transition-all hover:bg-surface-bright">
               <span className="material-symbols-outlined text-[20px]">arrow_back</span>
             </Link>
             <div className="flex items-center gap-2 bg-secondary/10 px-3 py-1 rounded-lg border border-secondary/20">
               <span className={`w-2 h-2 rounded-full ${quiz.isPublished ? "bg-secondary animate-pulse" : "bg-outline/30"}`}></span>
               <span className="text-[10px] font-black text-secondary uppercase tracking-[0.2em]">{quiz.isPublished ? "Active Pipeline" : "Draft State"}</span>
             </div>
          </div>
          <h1 className="text-6xl font-headline font-black text-white uppercase tracking-tight leading-none italic">{quiz.title}</h1>
          <p className="text-on-surface-variant max-w-2xl text-lg leading-relaxed opacity-80">{quiz.description}</p>
        </div>
        <div className="flex flex-col gap-3 relative z-10">
           <Link href={`/admin/quizzes/${id}/edit`} className="px-8 py-5 rounded-2xl bg-secondary-container text-on-secondary-container font-black uppercase text-xs tracking-widest hover:shadow-[0_0_40px_rgba(0,229,160,0.4)] transition-all flex items-center justify-center gap-3 active:scale-95 group/edit">
             <span>Modify Architecture</span>
             <span className="material-symbols-outlined text-[18px] group-hover/edit:rotate-12 transition-transform">edit_square</span>
           </Link>
           <button className="px-8 py-5 rounded-2xl bg-surface-container-highest text-white font-black uppercase text-xs tracking-widest hover:bg-surface-bright transition-all flex items-center justify-center gap-3 opacity-50 cursor-not-allowed">
             <span>Protocol Analytics</span>
             <span className="material-symbols-outlined text-[18px]">analytics</span>
           </button>
        </div>
      </div>

      {/* Grid Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
         {[
           { label: "Complexity", value: quiz.difficulty, icon: "psychology", color: "text-primary" },
           { label: "Time Limit", value: `${quiz.duration} MINS`, icon: "timer", color: "text-secondary" },
           { label: "Unit Count", value: `${quiz.questions.length} Units`, icon: "inventory_2", color: "text-tertiary" },
           { label: "Total Mass", value: quiz.questions.reduce((acc: number, q: any) => acc + q.marks, 0) + " Points", icon: "stars", color: "text-secondary-container" },
         ].map((stat, i) => (
           <div key={i} className="bg-surface-container-low p-6 rounded-[2rem] border border-outline-variant/10 flex items-center gap-6 hover:bg-surface-container-high transition-colors group">
              <div className={`w-14 h-14 rounded-2xl bg-surface-container-high/50 flex items-center justify-center ${stat.color} group-hover:scale-110 transition-transform`}>
                 <span className="material-symbols-outlined text-[28px]">{stat.icon}</span>
              </div>
              <div>
                 <p className="text-[10px] font-black text-outline uppercase tracking-widest">{stat.label}</p>
                 <p className="text-xl font-headline font-black text-white uppercase mt-1">{stat.value}</p>
              </div>
           </div>
         ))}
      </div>

      {/* Question Units */}
      <div className="space-y-6">
         <h2 className="text-2xl font-headline font-black text-white uppercase tracking-tight flex items-center gap-3 px-6">
           <span className="material-symbols-outlined text-secondary-container">schema</span>
           Architectural Breakdown
         </h2>
         <div className="space-y-4">
            {quiz.questions.map((q: any, i: number) => (
              <div key={q.id} className="bg-surface-container-low p-8 rounded-[2.5rem] border border-outline-variant/5 hover:border-outline-variant/20 transition-all group overflow-hidden relative">
                 <div className="absolute top-0 left-0 w-1 h-full bg-secondary-container/20 group-hover:bg-secondary-container transition-colors"></div>
                 <div className="flex items-start gap-8">
                    <div className="w-16 h-16 rounded-[1.5rem] bg-surface-container-high flex items-center justify-center text-3xl font-headline font-black text-white/10 group-hover:text-secondary-container/50 transition-colors shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div className="flex-1 space-y-6">
                       <div className="flex justify-between items-start">
                          <h3 className="text-xl font-bold text-white leading-relaxed group-hover:text-secondary-container transition-colors max-w-3xl">{q.text}</h3>
                          <span className="px-3 py-1.5 rounded-xl bg-secondary-container/10 border border-secondary-container/20 text-secondary-container text-xs font-black uppercase tracking-widest">
                            {q.marks} Pts
                          </span>
                       </div>
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {q.options.map((opt: any, oi: number) => (
                            <div key={opt.id} className={`p-4 rounded-2xl border flex items-center gap-4 transition-all ${opt.isCorrect ? "bg-secondary/5 border-secondary/30" : "bg-transparent border-outline-variant/5 opacity-60"}`}>
                               <div className={`w-2 h-2 rounded-full ${opt.isCorrect ? "bg-secondary shadow-[0_0_8px_#6cffbf]" : "bg-outline/20"}`}></div>
                               <span className="text-sm font-medium text-white/90">{opt.text}</span>
                            </div>
                          ))}
                       </div>
                    </div>
                 </div>
              </div>
            ))}
         </div>
      </div>
    </div>
  );
}
