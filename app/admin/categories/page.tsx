"use client";

import React, { useState, useEffect, useTransition } from "react";
import {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} from "@/app/actions/categories";

interface Category {
  id: string;
  name: string;
  image: string;
  description: string;
  createdAt: string;
}

export default function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [isPending, startTransition] = useTransition();
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    image: "",
    description: "",
  });

  const fetchCategories = async () => {
    setIsLoading(true);
    const response = await getCategories();
    if (response.success && response.data) {
      setCategories(response.data as Category[]);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleOpenModal = (category?: Category) => {
    setErrorMsg(null);
    if (category) {
      setEditingCategory(category);
      setFormData({
        name: category.name,
        image: category.image,
        description: category.description,
      });
    } else {
      setEditingCategory(null);
      setFormData({ name: "", image: "", description: "" });
    }
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    startTransition(async () => {
      let response;
      if (editingCategory) {
        response = await updateCategory(editingCategory.id, formData);
      } else {
        response = await createCategory(formData);
      }

      if (response.success) {
        await fetchCategories();
        setIsModalOpen(false);
      } else {
        setErrorMsg(response.error || "An unknown error occurred");
      }
    });
  };

  const handleDeleteEntry = async (id: string) => {
    if (confirm("Are you sure you want to delete this category?")) {
      const response = await deleteCategory(id);
      if (response.success) {
        fetchCategories();
      }
    }
  };

  return (
    <div className="p-8 max-w-[1600px] mx-auto space-y-8 animate-in fade-in duration-700">
      {/*  Header Section  */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="text-4xl font-headline font-black text-white tracking-tight uppercase">
            Category <span className="text-primary-container">Engine</span>
          </h1>
          <p className="text-on-surface-variant font-body mt-2 max-w-lg">
            Manage your trivia ecosystems with real-time database synchronization and premium visual assets.
          </p>
        </div>
        <button
          onClick={() => handleOpenModal()}
          className="group px-6 py-4 bg-primary-container rounded-2xl text-sm font-bold text-white shadow-[0_8px_30px_rgb(108,62,255,0.4)] hover:shadow-[0_8px_40px_rgb(108,62,255,0.6)] hover:-translate-y-1 active:translate-y-0 transition-all flex items-center gap-3 overflow-hidden relative"
        >
           <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform"></div>
          <span className="material-symbols-outlined text-[20px] relative z-10">add_box</span>
          <span className="relative z-10">Initialize New Segment</span>
        </button>
      </div>

      {/*  Loading Shimmer or Grid  */}
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="h-[340px] bg-surface-container-low rounded-3xl border border-outline-variant/10 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"></div>
              <div className="h-44 bg-surface-container-high/50"></div>
              <div className="p-6 space-y-4">
                <div className="h-6 w-2/3 bg-surface-container-high rounded-full"></div>
                <div className="h-4 w-full bg-surface-container-high rounded-full"></div>
                <div className="h-4 w-1/2 bg-surface-container-high rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.length === 0 && (
              <div className="col-span-full py-24 flex flex-col items-center justify-center space-y-4 border-2 border-dashed border-outline-variant/20 rounded-3xl bg-surface-container-low text-outline">
                  <span className="material-symbols-outlined text-6xl opacity-20">inventory_2</span>
                  <p className="text-sm font-bold uppercase tracking-widest">No segments found in the abyss</p>
                  <button onClick={() => handleOpenModal()} className="text-primary-container text-xs font-black hover:underline tracking-widest uppercase mt-4">Start Cultivating</button>
              </div>
          )}
          {categories.map((category) => (
            <div
              key={category.id}
              className="group glass-card rounded-3xl overflow-hidden hover:shadow-[0_0_50px_rgba(108,62,255,0.1)] transition-all border border-outline-variant/10 hover:border-primary-container/30 relative flex flex-col h-[340px]"
            >
              <div className="h-44 relative overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/10 to-transparent"></div>
                
                <div className="absolute top-4 right-4 flex gap-2 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-spring">
                    <button
                      onClick={() => handleOpenModal(category)}
                      className="w-10 h-10 bg-white/10 backdrop-blur-xl rounded-xl text-white hover:bg-primary-container flex items-center justify-center transition-all border border-white/10 shadow-xl"
                    >
                      <span className="material-symbols-outlined text-[18px]">edit_note</span>
                    </button>
                    <button
                      onClick={() => handleDeleteEntry(category.id)}
                      className="w-10 h-10 bg-white/10 backdrop-blur-xl rounded-xl text-white hover:bg-error flex items-center justify-center transition-all border border-white/10 shadow-xl"
                    >
                      <span className="material-symbols-outlined text-[18px]">delete_sweep</span>
                    </button>
                </div>

                <div className="absolute bottom-4 left-6">
                    <h3 className="text-2xl font-headline font-black text-white tracking-tight uppercase drop-shadow-lg">
                      {category.name}
                    </h3>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <p className="text-on-surface-variant text-sm line-clamp-3 leading-relaxed font-medium italic opacity-80 group-hover:opacity-100 transition-opacity">
                  "{category.description}"
                </p>
                <div className="pt-6 flex justify-between items-center border-t border-outline-variant/10">
                  <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full animate-pulse shadow-[0_0_8px_rgba(180,180,255,0.5)]"></div>
                      <span className="text-[10px] font-black text-outline uppercase tracking-[0.2em]">Ready</span>
                  </div>
                  <span className="text-[10px] font-black text-secondary font-mono tracking-widest bg-secondary/10 px-2 py-1 rounded-lg">SEG-{category.id.slice(-4).toUpperCase()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/*  Professional Modal  */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 lg:p-8 overflow-y-auto">
          <div
            className="fixed inset-0 bg-[#05050A]/90 backdrop-blur-[12px] animate-in fade-in duration-500"
            onClick={() => !isPending && setIsModalOpen(false)}
          ></div>
          
          <div className="relative w-full max-w-2xl bg-surface-container-low border border-outline-variant/10 rounded-[2rem] shadow-2xl p-8 lg:p-12 overflow-hidden animate-in zoom-in-95 fade-in duration-300">
            {/*  Decorative Elements  */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary-container/10 rounded-full blur-[100px]"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary/10 rounded-full blur-[100px]"></div>

            <div className="relative mb-10">
              <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-3xl font-headline font-black text-white tracking-tighter uppercase italic">
                      {editingCategory ? "Alter Configuration" : "Initialize Segment"}
                    </h2>
                    <p className="text-on-surface-variant text-sm mt-1 font-medium tracking-wide">
                      Synchronize your visual identity with the platform's core architecture.
                    </p>
                  </div>
                  <button 
                    disabled={isPending}
                    onClick={() => setIsModalOpen(false)} 
                    className="p-2 text-outline hover:text-white transition-colors"
                  >
                    <span className="material-symbols-outlined">close</span>
                  </button>
              </div>

              {errorMsg && (
                  <div className="mt-6 flex items-center gap-3 p-4 bg-error/10 border border-error/20 rounded-2xl animate-in slide-in-from-top-2 duration-300">
                      <span className="material-symbols-outlined text-error text-[20px]">report</span>
                      <p className="text-error text-xs font-bold uppercase tracking-widest">{errorMsg}</p>
                  </div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="space-y-8 relative">
              <div className="space-y-3">
                <label className="text-[10px] font-black text-outline uppercase tracking-[0.3em] ml-1 flex items-center gap-2">
                   <span className="w-1.5 h-1.5 bg-primary-container rounded-full"></span>
                  Registry Name
                </label>
                <div className="ghost-border bg-surface-container-high/50 rounded-2xl p-4 flex items-center gap-4 group focus-within:border-primary-container/50 transition-all">
                  <span className="material-symbols-outlined text-outline group-focus-within:text-primary-container transition-colors">fingerprint</span>
                  <input
                    required
                    disabled={isPending}
                    className="bg-transparent border-none focus:ring-0 text-white w-full placeholder:text-outline/30 font-bold tracking-tight"
                    placeholder="IDENTIFIER (e.g. ASTROPHYSICS)"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black text-outline uppercase tracking-[0.3em] ml-1 flex items-center gap-2">
                   <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                  Visual Asset Upload
                </label>
                <div className="group relative">
                  {formData.image ? (
                    <div className="relative h-56 rounded-[1.5rem] overflow-hidden border-2 border-outline-variant/20 group-hover:border-primary-container/30 transition-all">
                      <img
                        src={formData.image}
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-[#0A0A14]/60 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center gap-6">
                        <button
                          type="button"
                          disabled={isPending}
                          onClick={() => setFormData({ ...formData, image: "" })}
                          className="w-16 h-16 bg-error text-white rounded-full hover:scale-110 transition-transform shadow-2xl flex items-center justify-center"
                        >
                          <span className="material-symbols-outlined text-3xl">delete_forever</span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="h-56 rounded-[1.5rem] border-2 border-dashed border-outline-variant/30 hover:border-primary-container/50 bg-surface-container-high/30 hover:bg-surface-container-high/50 transition-all flex flex-col items-center justify-center gap-4 cursor-pointer relative group/upload">
                      <input
                        type="file"
                        accept="image/*"
                        disabled={isPending}
                        className="absolute inset-0 opacity-0 cursor-pointer z-10"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                             if (file.size > 1024 * 1024 * 4) {
                                setErrorMsg("File size too large. Max 4MB.");
                                return;
                             }
                            const reader = new FileReader();
                            reader.onloadend = () => {
                              setFormData({ ...formData, image: reader.result as string });
                            };
                            reader.readAsDataURL(file);
                          }
                        }}
                      />
                      <div className="w-16 h-16 bg-primary-container/10 group-hover/upload:bg-primary-container/20 rounded-full flex items-center justify-center text-primary-container transition-all">
                        <span className="material-symbols-outlined text-4xl animate-bounce">upload_file</span>
                      </div>
                      <div className="text-center">
                        <p className="text-sm font-black text-white uppercase tracking-widest">Transmit Data</p>
                        <p className="text-[10px] text-outline mt-2 font-bold uppercase tracking-[0.2em] opacity-40 italic">Buffer Limit: 4.0 MB System Protocol</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black text-outline uppercase tracking-[0.3em] ml-1 flex items-center gap-2">
                   <span className="w-1.5 h-1.5 bg-tertiary rounded-full"></span>
                  Architectural Brief
                </label>
                <div className="ghost-border bg-surface-container-high/50 rounded-2xl p-4 flex items-start gap-4 group focus-within:border-primary-container/50 transition-all">
                  <span className="material-symbols-outlined text-outline mt-1 group-focus-within:text-primary-container transition-colors">notes</span>
                  <textarea
                    required
                    disabled={isPending}
                    rows={4}
                    className="bg-transparent border-none focus:ring-0 text-white w-full placeholder:text-outline/30 resize-none font-medium text-sm leading-relaxed"
                    placeholder="Establish the contextual foundations for this trivia segment..."
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="flex gap-4 pt-6">
                <button
                  type="button"
                  disabled={isPending}
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 py-5 bg-surface-container-highest text-white rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-surface-bright transition-all disabled:opacity-50"
                >
                  Terminate
                </button>
                <button
                  type="submit"
                  disabled={isPending}
                  className="flex-[2] py-5 bg-primary-container text-white rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:shadow-[0_0_40px_rgba(108,62,255,0.4)] transition-all relative overflow-hidden group/btn disabled:opacity-50"
                >
                  {isPending ? (
                      <div className="flex items-center justify-center gap-3">
                          <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></span>
                          <span>Syncing...</span>
                      </div>
                  ) : (
                      <div className="flex items-center justify-center gap-3">
                          <span>{editingCategory ? "Execute Override" : "Deploy Segment"}</span>
                          <span className="material-symbols-outlined text-[18px] group-hover/btn:translate-x-1 transition-transform">bolt</span>
                      </div>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      
      {/*  Global Shimmer Animation  */}
      <style jsx global>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
        .ease-spring {
          transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
      `}</style>
    </div>
  );
}
