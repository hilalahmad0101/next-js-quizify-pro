"use client";

import React, { useState, useEffect } from "react";
import {
  getQuizzes,
  deleteQuiz,
} from "@/app/actions/quizzes";
import { getCategories } from "@/app/actions/categories";
import { useConfirm } from "@/components/providers/confirm-provider";
import Link from "next/link";

interface Quiz {
  id: string;
  title: string;
  description: string | null;
  image: string | null;
  duration: number;
  difficulty: "EASY" | "MEDIUM" | "HARD" | "EXPERT";
  isPublished: boolean;
  categoryId: string;
  category: { name: string };
  _count: { questions: number };
  createdAt: string;
}

export default function QuizzesPage() {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { confirm } = useConfirm();

  const fetchData = async () => {
    setIsLoading(true);
    const qRes = await getQuizzes();
    if (qRes.success && qRes.data) setQuizzes(qRes.data as Quiz[]);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDeleteEntry = async (id: string) => {
    const isConfirmed = await confirm({
      title: "Collapse Quiz Architecture",
      message: "Are you certain you want to permanently delete this quiz and all its internal questions? This operation is irreversible.",
      confirmLabel: "Execute Delete",
      cancelLabel: "Abort",
      variant: "danger"
    });

    if (isConfirmed) {
      const response = await deleteQuiz(id);
      if (response.success) {
        fetchData();
      }
    }
  };

  return (
    <div className="p-8 max-w-[1600px] mx-auto space-y-8 animate-in fade-in duration-700">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 bg-surface-container-low/50 p-8 rounded-[2.5rem] border border-outline-variant/5">
        <div>
          <h1 className="text-4xl font-headline font-black text-white tracking-tight uppercase">
            Quiz <span className="text-secondary-container">Laboratory</span>
          </h1>
          <p className="text-on-surface-variant font-body mt-2 max-w-lg">
            Construct high-stakes intellectual challenges with parameterized durations and difficulty scaling.
          </p>
        </div>
        <Link
          href="/admin/quizzes/create"
          className="group px-8 py-4 bg-secondary-container rounded-2xl text-sm font-black text-on-secondary-container shadow-[0_8px_30px_rgb(0,229,160,0.3)] hover:shadow-[0_8px_40px_rgb(0,229,160,0.5)] hover:-translate-y-1 active:translate-y-0 transition-all flex items-center gap-3"
        >
          <span className="material-symbols-outlined text-[20px]">science</span>
          <span>Deploy New Experiment</span>
        </Link>
      </div>

      {/* Grid List */}
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1,2,3].map(n => (
             <div key={n} className="h-64 bg-surface-container-low animate-pulse rounded-3xl" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quizzes.length === 0 && (
            <div className="col-span-full py-32 glass-panel rounded-[3rem] border-dashed border-2 flex flex-col items-center justify-center opacity-40">
                <span className="material-symbols-outlined text-6xl mb-4">analytics</span>
                <p className="font-headline font-black uppercase tracking-widest text-sm">No quizzes initialized in this sector</p>
            </div>
          )}
          {quizzes.map((quiz) => (
            <div key={quiz.id} className="glass-panel rounded-[2rem] p-6 group transition-all hover:border-secondary-container/30 relative">
               <div className="flex justify-between items-start mb-6">
                 <div className="space-y-1">
                   <div className="flex items-center gap-2">
                     <span className={`w-2 h-2 rounded-full ${quiz.isPublished ? "bg-secondary shadow-[0_0_10px_#6cffbf]" : "bg-outline/30"}`}></span>
                     <span className="text-[10px] font-black uppercase tracking-widest text-outline">
                       {quiz.isPublished ? "ACTIVE PROTOCOL" : "DRAFT STATE"}
                     </span>
                   </div>
                   <h3 className="text-xl font-headline font-black text-white uppercase tracking-tighter line-clamp-1">{quiz.title}</h3>
                 </div>
                 <div className="flex gap-2">
                    <Link href={`/admin/quizzes/${quiz.id}`} title="View Details" className="w-9 h-9 rounded-xl bg-surface-container-high flex items-center justify-center text-outline hover:text-secondary-container transition-colors">
                        <span className="material-symbols-outlined text-[18px]">visibility</span>
                    </Link>
                    <Link href={`/admin/quizzes/${quiz.id}/edit`} title="Edit Architecture" className="w-9 h-9 rounded-xl bg-surface-container-high flex items-center justify-center text-outline hover:text-white transition-colors">
                        <span className="material-symbols-outlined text-[18px]">edit_note</span>
                    </Link>
                    <button onClick={() => handleDeleteEntry(quiz.id)} title="Delete Quiz" className="w-9 h-9 rounded-xl bg-surface-container-high/50 flex items-center justify-center text-outline hover:text-error transition-colors">
                       <span className="material-symbols-outlined text-[18px]">delete</span>
                    </button>
                 </div>
               </div>

               <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 rounded-lg bg-primary-container/10 border border-primary-container/20 text-primary-container text-[10px] font-black uppercase tracking-widest">
                    {quiz.category.name}
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-tertiary/10 border border-tertiary/20 text-tertiary text-[10px] font-black uppercase tracking-widest">
                    {quiz.difficulty}
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-surface-container-highest text-white text-[10px] font-black uppercase tracking-widest">
                    {quiz.duration} MINS
                  </span>
               </div>

               <div className="pt-6 border-t border-outline-variant/10 flex justify-between items-center text-on-surface-variant">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px]">quiz</span>
                    <span className="text-xs font-bold uppercase tracking-widest">{quiz._count.questions} Units</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px]">history</span>
                    <span className="text-[10px] font-mono opacity-50 uppercase">{new Date(quiz.createdAt).toLocaleDateString()}</span>
                  </div>
               </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
