"use client";

import React, { useState, useEffect, useTransition } from "react";
import { createQuiz } from "@/app/actions/quizzes";
import { getCategories } from "@/app/actions/categories";
import { useConfirm } from "@/components/providers/confirm-provider";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Option {
  text: string;
  isCorrect: boolean;
}

interface Question {
  text: string;
  marks: number;
  options: Option[];
}

export default function CreateQuizPage() {
  const router = useRouter();
  const { confirm } = useConfirm();
  const [isPending, startTransition] = useTransition();

  const [activeTab, setActiveTab] = useState<"details" | "questions">("details");
  const [categories, setCategories] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    duration: 20,
    difficulty: "EASY" as "EASY" | "MEDIUM" | "HARD" | "EXPERT",
    categoryId: "",
    isPublished: false,
    questions: [
      { 
        text: "", 
        marks: 1, 
        options: [
          { text: "", isCorrect: true }, 
          { text: "", isCorrect: false },
          { text: "", isCorrect: false },
          { text: "" , isCorrect: false }
        ] 
      }
    ] as Question[],
  });

  useEffect(() => {
    const fetchData = async () => {
      const catRes = await getCategories();
      if (catRes.success) {
        setCategories(catRes.data);
        if (catRes.data.length > 0) {
          setFormData(prev => ({ ...prev, categoryId: catRes.data[0].id }));
        }
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const addQuestion = () => {
    setFormData({
      ...formData,
      questions: [
        ...formData.questions,
        { 
          text: "", 
          marks: 1, 
          options: [
            { text: "", isCorrect: true }, 
            { text: "", isCorrect: false },
            { text: "", isCorrect: false },
            { text: "" , isCorrect: false }
          ] 
        }
      ]
    });
  };

  const removeQuestion = (index: number) => {
    const newQuestions = [...formData.questions];
    newQuestions.splice(index, 1);
    setFormData({ ...formData, questions: newQuestions });
  };

  const updateQuestion = (index: number, data: Partial<Question>) => {
    const newQuestions = [...formData.questions];
    newQuestions[index] = { ...newQuestions[index], ...data };
    setFormData({ ...formData, questions: newQuestions });
  };

  const updateOption = (qIndex: number, oIndex: number, text: string) => {
    const newQuestions = [...formData.questions];
    newQuestions[qIndex].options[oIndex].text = text;
    setFormData({ ...formData, questions: newQuestions });
  };

  const setCorrectOption = (qIndex: number, oIndex: number) => {
    const newQuestions = [...formData.questions];
    newQuestions[qIndex].options = newQuestions[qIndex].options.map((opt, i) => ({
      ...opt,
      isCorrect: i === oIndex
    }));
    setFormData({ ...formData, questions: newQuestions });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    
    startTransition(async () => {
      const response = await createQuiz(formData);
      if (response.success) {
        router.push("/admin/quizzes");
      } else {
        setErrorMsg(response.error || "Operation failed.");
      }
    });
  };

  if (isLoading) return (
    <div className="p-8 max-w-[1400px] mx-auto animate-pulse">
       <div className="h-64 bg-surface-container-low rounded-[2.5rem] mb-8"></div>
       <div className="h-96 bg-surface-container-low rounded-[2.5rem]"></div>
    </div>
  );

  return (
    <div className="p-8 max-w-[1400px] mx-auto space-y-8 animate-in fade-in duration-700">
      <div className="bg-surface-container-low p-10 rounded-[3rem] border border-outline-variant/10 shadow-2xl overflow-hidden relative group">
         <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
         <div className="flex justify-between items-center mb-12 relative z-10">
            <div>
               <div className="flex items-center gap-3 mb-2">
                  <Link href="/admin/quizzes" className="p-2 hover:bg-surface-container-high rounded-xl text-outline hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-[20px]">arrow_back</span>
                  </Link>
                  <h1 className="text-4xl font-headline font-black text-white uppercase tracking-tight italic text-primary">Deploy <span className="text-secondary-container">Experiment</span></h1>
               </div>
               <div className="flex gap-8 ml-12">
                   <button onClick={() => setActiveTab("details")} className={`text-xs font-black uppercase tracking-widest pb-3 border-b-4 transition-all ${activeTab === "details" ? "text-primary border-primary" : "text-outline/40 border-transparent hover:text-outline"}`}>Initialization Parameters</button>
                   <button onClick={() => setActiveTab("questions")} className={`text-xs font-black uppercase tracking-widest pb-3 border-b-4 transition-all ${activeTab === "questions" ? "text-primary border-primary" : "text-outline/40 border-transparent hover:text-outline"}`}>Intellectual Architecture ({formData.questions.length})</button>
               </div>
            </div>
            <div className="flex gap-4">
               <button onClick={handleSubmit} disabled={isPending} className="px-10 py-5 rounded-3xl bg-primary shadow-[0_0_30px_rgba(108,160,255,0.2)] hover:shadow-[0_0_50px_rgba(108,160,255,0.4)] text-on-primary font-black uppercase text-xs tracking-[0.2em] transition-all flex items-center gap-3 disabled:opacity-50 group/save active:scale-95">
                  {isPending ? <span className="animate-spin border-2 border-on-primary/30 border-t-on-primary w-4 h-4 rounded-full" /> : <span>Activate Pipeline</span>}
                  <span className="material-symbols-outlined text-[18px] group-hover/save:rotate-12 transition-transform">rocket_launch</span>
               </button>
            </div>
         </div>

         <form onSubmit={handleSubmit} className="relative z-10">
            {errorMsg && <div className="p-6 bg-error/10 border border-error/20 rounded-3xl text-error text-[10px] font-black uppercase tracking-widest mb-8 text-center">{errorMsg}</div>}
            
            {activeTab === "details" ? (
               <div className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
                  <div className="space-y-8">
                     <div className="group">
                        <label className="block text-[10px] font-black text-outline/60 uppercase tracking-[0.2em] ml-1 mb-3 group-focus-within:text-primary group-focus-within:translate-x-1 transition-all">Protocol Name</label>
                        <input required className="w-full bg-[#1A1A24] border border-outline-variant/30 rounded-3xl p-5 text-white text-base font-bold tracking-tight focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all shadow-inner placeholder:opacity-30" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} placeholder="Specify Experiment Title..." />
                     </div>
                     <div className="group">
                        <label className="block text-[10px] font-black text-outline/60 uppercase tracking-[0.2em] ml-1 mb-3">Sector focus</label>
                        <div className="relative">
                          <select required className="w-full bg-[#1A1A24] border border-outline-variant/30 rounded-3xl p-5 text-white text-base font-bold focus:outline-none focus:border-primary transition-all appearance-none cursor-pointer" value={formData.categoryId} onChange={e => setFormData({...formData, categoryId: e.target.value})}>
                            <option value="">Select Sector...</option>
                            {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                          </select>
                          <span className="material-symbols-outlined absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-outline">category</span>
                        </div>
                     </div>
                     <div className="grid grid-cols-2 gap-6">
                        <div className="group">
                           <label className="block text-[10px] font-black text-outline/60 uppercase tracking-[0.2em] ml-1 mb-3">Duration Scale (Mins)</label>
                           <input type="number" className="w-full bg-[#1A1A24] border border-outline-variant/30 rounded-3xl p-5 text-white text-base font-bold focus:outline-none focus:border-primary transition-all shadow-inner" value={formData.duration} onChange={e => setFormData({...formData, duration: Number(e.target.value)})} />
                        </div>
                        <div className="group">
                           <label className="block text-[10px] font-black text-outline/60 uppercase tracking-[0.2em] ml-1 mb-3">Complexity Factor</label>
                           <div className="relative">
                              <select className="w-full bg-[#1A1A24] border border-outline-variant/30 rounded-3xl p-5 text-white text-base font-bold appearance-none appearance-none" value={formData.difficulty} onChange={e => setFormData({...formData, difficulty: e.target.value as any})}>
                                <option value="EASY">EASY</option>
                                <option value="MEDIUM">MEDIUM</option>
                                <option value="HARD">HARD</option>
                                <option value="EXPERT">EXPERT</option>
                              </select>
                              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-outline">tune</span>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="space-y-8">
                     <div className="group">
                        <label className="block text-[10px] font-black text-outline/60 uppercase tracking-[0.2em] ml-1 mb-3">Experiment Overview</label>
                        <textarea rows={8} className="w-full bg-[#1A1A24] border border-outline-variant/30 rounded-3xl p-6 text-white text-sm font-medium leading-relaxed focus:outline-none focus:border-primary transition-all resize-none shadow-inner" value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} placeholder="Document the core objectives of this test sequence..." />
                     </div>
                     <div className="p-8 bg-surface-container-high/40 rounded-3xl border border-outline-variant/20 flex items-center justify-between group/status">
                        <div className="flex items-center gap-6">
                           <div className={`w-3 h-3 rounded-full transition-all duration-500 shadow-[0_0_15px_rgba(108,255,191,0)] ${formData.isPublished ? "bg-secondary shadow-[0_0_15px_#6cffbf]" : "bg-outline/20"}`}></div>
                           <div>
                              <p className="text-white font-black uppercase text-xs tracking-widest">Public Deployment</p>
                              <p className="text-[10px] text-outline uppercase tracking-widest mt-1 opacity-60 group-hover/status:opacity-100 transition-opacity">{formData.isPublished ? "Experiment Live In Sector" : "Restricted Laboratory State"}</p>
                           </div>
                        </div>
                        <button type="button" onClick={() => setFormData({...formData, isPublished: !formData.isPublished})} className={`w-16 h-8 rounded-full flex items-center px-1.5 transition-all duration-500 ${formData.isPublished ? "bg-secondary" : "bg-surface-container-highest"}`}>
                           <div className={`w-5 h-5 bg-white rounded-full shadow-lg transition-all duration-500 transform ${formData.isPublished ? "translate-x-8" : "translate-x-0"}`} />
                        </button>
                     </div>
                  </div>
               </div>
            ) : (
               <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
                  {formData.questions.map((q, qIndex) => (
                    <div key={qIndex} className="p-10 bg-[#1B1B25] rounded-[2.5rem] border border-outline-variant/10 shadow-xl group/q relative overflow-hidden">
                       <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rotate-45 translate-x-16 -translate-y-16 pointer-events-none group-hover/q:bg-primary/10 transition-colors"></div>
                       <div className="flex items-start gap-8 mb-10 relative z-10">
                          <div className="w-14 h-14 rounded-2xl bg-primary-container/10 border border-primary-container/20 flex items-center justify-center text-primary-container font-headline font-black text-xl shrink-0 shadow-lg">
                            {qIndex + 1}
                          </div>
                          <div className="flex-1 group">
                             <label className="block text-[10px] font-black text-outline/60 uppercase tracking-[0.2em] ml-1 mb-3 group-focus-within:text-primary group-focus-within:translate-x-1 transition-all">Intellectual Pulse</label>
                             <input required className="w-full bg-[#14141C] border border-outline-variant/30 rounded-2xl p-5 text-white text-base font-bold focus:outline-none focus:border-primary transition-all shadow-inner" value={q.text} onChange={e => updateQuestion(qIndex, { text: e.target.value })} placeholder="State the Inquiry Node..." />
                          </div>
                          <div className="w-32 group">
                             <label className="block text-[10px] font-black text-outline/60 uppercase tracking-[0.2em] ml-1 mb-3 text-center">Mass</label>
                             <input type="number" className="w-full bg-[#14141C] border border-outline-variant/30 rounded-2xl p-5 text-white text-base font-black text-center focus:outline-none focus:border-primary transition-all shadow-inner" value={q.marks} onChange={e => updateQuestion(qIndex, { marks: Number(e.target.value) })} />
                          </div>
                          <button type="button" onClick={() => removeQuestion(qIndex)} className="mt-8 w-14 h-14 rounded-2xl bg-error/10 text-error flex items-center justify-center hover:bg-error hover:text-white transition-all group/del shadow-lg">
                             <span className="material-symbols-outlined text-2xl group-hover/del:scale-110 transition-transform">delete</span>
                          </button>
                       </div>
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
                          {q.options.map((opt, oIndex) => (
                             <div key={oIndex} className={`flex items-center gap-5 p-5 rounded-[1.5rem] border transition-all ${opt.isCorrect ? "bg-primary-container/5 border-primary-container/50 shadow-[0_0_20px_rgba(108,160,255,0.05)]" : "bg-[#14141C] border-outline-variant/10 shadow-inner group-hover/q:border-outline-variant/20"}`}>
                                <button type="button" onClick={() => setCorrectOption(qIndex, oIndex)} className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all ${opt.isCorrect ? "bg-primary shadow-[0_0_20px_#6ca0ff] text-on-primary" : "bg-outline/20 text-transparent hover:bg-outline/40"}`}>
                                   <span className="material-symbols-outlined text-[16px] font-black italic">check</span>
                                </button>
                                <input required className="flex-1 bg-transparent border-none text-base text-white placeholder:text-outline/40 focus:ring-0 font-bold" value={opt.text} onChange={e => updateOption(qIndex, oIndex, e.target.value)} placeholder={`Potential Response ${oIndex + 1}...`} />
                             </div>
                          ))}
                       </div>
                    </div>
                  ))}
                  <button type="button" onClick={addQuestion} className="w-full py-24 rounded-[3.5rem] border-4 border-dashed border-outline-variant/20 flex flex-col items-center justify-center gap-8 text-outline/40 hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all group/add">
                     <div className="w-20 h-20 rounded-[2.5rem] bg-surface-container-high/50 flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-all shadow-2xl group-hover:scale-110">
                        <span className="material-symbols-outlined text-5xl">add_circle</span>
                     </div>
                     <div className="text-center italic">
                        <span className="block text-sm font-black uppercase tracking-[0.5em] group-hover:tracking-[0.7em] transition-all">Integrate Additional Intelligence Unit</span>
                        <span className="block text-[10px] uppercase tracking-widest mt-2 opacity-60">Expand the scope of this evaluation protocol</span>
                     </div>
                  </button>
               </div>
            )}
         </form>
      </div>
    </div>
  );
}
