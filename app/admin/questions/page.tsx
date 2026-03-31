"use client";

import React, { useState, useEffect } from "react";
import { getAllQuestions, deleteQuestion } from "@/app/actions/quizzes";
import { useConfirm } from "@/components/providers/confirm-provider";

interface Question {
  id: string;
  text: string;
  marks: number;
  quiz: {
    title: string;
    difficulty: string;
    category: { name: string };
  };
  options: { text: string; isCorrect: boolean }[];
  createdAt: string;
}

export default function QuestionsBankPage() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { confirm } = useConfirm();

  const fetchQuestions = async () => {
    setIsLoading(true);
    const response = await getAllQuestions();
    if (response.success && response.data) {
      setQuestions(response.data as Question[]);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  const handleDelete = async (id: string) => {
    const isConfirmed = await confirm({
      title: "Deconstruct Unit Prompt",
      message: "Are you sure you want to permanently remove this question unit from its parent quiz architecture?",
      confirmLabel: "Confirm Deletion",
      variant: "danger"
    });

    if (isConfirmed) {
      const response = await deleteQuestion(id);
      if (response.success) {
        fetchQuestions();
      }
    }
  };

  const difficultyColors = {
    EASY: "bg-secondary-container/10 text-secondary-container border-secondary-container/20",
    MEDIUM: "bg-primary-container/10 text-primary-container border-primary-container/20",
    HARD: "bg-tertiary/10 text-tertiary border-tertiary/20",
    EXPERT: "bg-error/10 text-error border-error/20",
  };

  return (
    <div className="p-8 max-w-[1600px] mx-auto space-y-8 animate-in fade-in duration-700">
      {/* Header */}
      <div className="bg-surface-container-low/50 p-8 rounded-[2.5rem] border border-outline-variant/5">
        <h1 className="text-4xl font-headline font-black text-white tracking-tight uppercase">
          Questions <span className="text-primary-container">Bank</span>
        </h1>
        <p className="text-on-surface-variant font-body mt-2">
          A centralized archive of all intellectual units deployed across the platform sectors.
        </p>
      </div>

      {/* Main Content */}
      <div className="bg-surface-container-low rounded-[2.5rem] border border-outline-variant/10 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-high/50 border-b border-outline-variant/10">
                <th className="px-8 py-5 text-[10px] font-black text-outline uppercase tracking-[0.2em]">Intellectual Prompt</th>
                <th className="px-8 py-5 text-[10px] font-black text-outline uppercase tracking-[0.2em]">Source Experiment</th>
                <th className="px-8 py-5 text-[10px] font-black text-outline uppercase tracking-[0.2em]">Complexity / Scale</th>
                <th className="px-8 py-5 text-[10px] font-black text-outline uppercase tracking-[0.2em]">Weight</th>
                <th className="px-8 py-5 text-right"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/5">
              {isLoading ? (
                [1,2,3,4,5].map(n => (
                  <tr key={n} className="animate-pulse">
                    <td colSpan={5} className="px-8 py-8 bg-surface-container-high/20 h-16"></td>
                  </tr>
                ))
              ) : questions.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-8 py-24 text-center text-outline uppercase font-black tracking-widest opacity-30">No units detected in the archive</td>
                </tr>
              ) : (
                questions.map((q) => (
                  <tr key={q.id} className="hover:bg-primary/5 transition-colors group">
                    <td className="px-8 py-6">
                      <div className="max-w-md">
                        <p className="text-sm font-bold text-white line-clamp-1 group-hover:text-primary transition-colors">{q.text}</p>
                        <p className="text-[10px] text-outline mt-1 uppercase font-black tracking-widest">{q.options.length} Data Options Available</p>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex flex-col">
                        <span className="text-xs font-black text-white uppercase tracking-tighter italic">{q.quiz.title}</span>
                        <span className="text-[9px] text-primary uppercase font-bold tracking-[0.2em] mt-1">{q.quiz.category.name}</span>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <span className={`px-2 py-1 rounded text-[9px] font-black uppercase tracking-widest border ${difficultyColors[q.quiz.difficulty as keyof typeof difficultyColors]}`}>
                        {q.quiz.difficulty}
                      </span>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-secondary-container rounded-full shadow-[0_0_8px_#6cffbf]"></span>
                        <span className="text-sm font-mono font-bold text-white">x{q.marks}</span>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-right">
                      <button 
                        onClick={() => handleDelete(q.id)}
                        className="p-2 rounded-xl hover:bg-error/10 text-outline hover:text-error transition-all"
                      >
                         <span className="material-symbols-outlined text-[18px]">delete</span>
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
