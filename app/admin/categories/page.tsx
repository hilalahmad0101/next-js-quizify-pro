"use client";

import React, { useState } from "react";

interface Category {
  id: string;
  name: string;
  image: string;
  description: string;
  count: number;
}

export default function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([
    {
      id: "1",
      name: "Science",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1hxlkYImUaxuEtMqx5kzrEqYf2cmDdKP69PYPQvOAyM8yqNXTOJq_-kpg47JpYiqfzRdpJgBcK3BOPRH7B7PMNo1F9ueSkXtIj5VysKVkXoM0sO41kSlRbu4mlCViP1i2c_6zraePWcdk6u3vLlqIowB4bm52cU-6TpFpddcCBBgiORPD-YPwjrMPm4Q6eFkgjusHNNFgpHik221HIfrnbsrJeQoByJCCod6EkD-TeihPO2ThWYJJkCRCo2_xNRk-y9nZHkLcgg",
      description: "Physics, Chemistry, and Biological wonders of the universe.",
      count: 42,
    },
    {
      id: "2",
      name: "Technology",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCwhoG2_ZRUtmH64hfa9JNDuaznIa2Rj8f9KdAiaH8itGSTYMRCNmLjwg9XcxLDVTt1nF9RbhAdF4OOmg1aUbnO_8gK6vuDjWQanJuglRQz-hJyaT_b_nHpPpV948cHuUWpmsEtqB_5qSDJ-H0bsWz2SPjtOhfri0omdRuTYRpcM9tnhcFpxgrPbsZCLKFg2Xd09R9Lhb2RtHbvE59v9o77j8kxXfG-0eknatRcfWYvpoXseeb_4Op7bxGPUzPo5QAZJ_INSfEbsQ",
      description: "Web3, Artificial Intelligence, and future hardware.",
      count: 28,
    },
    {
      id: "3",
      name: "History",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSA7TJBbEnTSY8EjmcgthJSd76X7zi78KIN9KXF0zouRPGyzp1I9sADOiVMJC4da4vm0Z68-h8gOOc5iGB6sqeyAJmSnVvRsaVVTr_m9AlZ2VPV0v4wK5-7Q3S46RnprxQKGZkZ4PksT-lRdjjflwIz8HFBeOZy_gYy-3UrNC5OvJxnDDm1rN_4rL1-x1J8NDE2dAdxQFfZ7nMOZxT3z0MvlO0UDVOD8rzX3A3xZNHGT3pc2sDU01J6XcP_tDgVKhKMuaejvRSNQ",
      description: "From Ancient Rome to the Digital Revolution.",
      count: 35,
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    image: "",
    description: "",
  });

  const handleOpenModal = (category?: Category) => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingCategory) {
      setCategories(
        categories.map((c) =>
          c.id === editingCategory.id ? { ...c, ...formData } : c
        )
      );
    } else {
      setCategories([
        ...categories,
        {
          id: Math.random().toString(36).substr(2, 9),
          ...formData,
          count: 0,
        },
      ]);
    }
    setIsModalOpen(false);
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this category?")) {
      setCategories(categories.filter((c) => c.id !== id));
    }
  };

  return (
    <div className="p-8 max-w-[1600px] mx-auto space-y-8">
      {/*  Header Section  */}
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-headline font-black text-white tracking-tight">
            Category Management
          </h1>
          <p className="text-on-surface-variant font-body mt-2">
            Organize quizzes into logical segments for your players.
          </p>
        </div>
        <button
          onClick={() => handleOpenModal()}
          className="px-6 py-3 bg-primary-container rounded-xl text-sm font-bold text-white shadow-[0_4px_20px_rgba(108,62,255,0.4)] hover:shadow-[0_4px_30px_rgba(108,62,255,0.6)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-sm">add_circle</span>
          Create Category
        </button>
      </div>

      {/*  Categories Grid  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="glass-card rounded-2xl overflow-hidden group hover:shadow-[0_0_40px_rgba(108,62,255,0.15)] transition-all border border-outline-variant/10"
          >
            <div className="h-48 relative overflow-hidden">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface/90 via-surface/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                <div>
                  <h3 className="text-xl font-headline font-bold text-white tracking-tight">
                    {category.name}
                  </h3>
                  <p className="text-primary-fixed text-[10px] font-bold uppercase tracking-widest mt-1">
                    {category.count} active quizzes
                  </p>
                </div>
                <div className="flex gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                  <button
                    onClick={() => handleOpenModal(category)}
                    className="p-2 bg-white/10 backdrop-blur-md rounded-lg text-white hover:bg-primary-container transition-colors"
                  >
                    <span className="material-symbols-outlined text-sm">
                      edit
                    </span>
                  </button>
                  <button
                    onClick={() => handleDelete(category.id)}
                    className="p-2 bg-white/10 backdrop-blur-md rounded-lg text-white hover:bg-error transition-colors"
                  >
                    <span className="material-symbols-outlined text-sm">
                      delete
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="p-5 space-y-4">
              <p className="text-on-surface-variant text-sm line-clamp-2 min-h-[2.5rem]">
                {category.description}
              </p>
              <div className="pt-4 border-t border-outline-variant/10 flex justify-between items-center text-[10px] font-bold text-outline uppercase tracking-[0.2em]">
                <span>Status: Active</span>
                <span className="text-secondary font-mono">ID: #{category.id}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/*  Modal  */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-surface/80 backdrop-blur-md"
            onClick={() => setIsModalOpen(false)}
          ></div>
          <div className="relative w-full max-w-xl bg-surface-container-low border border-outline-variant/20 rounded-3xl shadow-2xl p-8 overflow-hidden">
            {/*  Modal Design Accents  */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container/20 rounded-full blur-[60px] -mr-16 -mt-16"></div>

            <div className="relative mb-8">
              <h2 className="text-2xl font-headline font-black text-white tracking-tight">
                {editingCategory ? "Update Category" : "New Category"}
              </h2>
              <p className="text-on-surface-variant text-sm mt-1">
                Define the visual identity and purpose of this segment.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-outline uppercase tracking-widest ml-1">
                  Category Name
                </label>
                <div className="ghost-border bg-surface-container-high rounded-xl p-3 flex items-center gap-3">
                  <span className="material-symbols-outlined text-outline text-[20px]">
                    label
                  </span>
                  <input
                    required
                    className="bg-transparent border-none focus:ring-0 text-on-surface w-full placeholder:text-outline/50"
                    placeholder="e.g. World History"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-outline uppercase tracking-widest ml-1">
                  Category Banner Image
                </label>
                <div className="group relative">
                  {formData.image ? (
                    <div className="relative h-48 rounded-2xl overflow-hidden border border-outline-variant/30">
                      <img
                        src={formData.image}
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, image: "" })}
                          className="p-3 bg-error text-white rounded-full hover:scale-110 transition-transform"
                        >
                          <span className="material-symbols-outlined">delete</span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="h-48 rounded-2xl border-2 border-dashed border-outline-variant/20 hover:border-primary-container/50 bg-surface-container-high transition-all flex flex-col items-center justify-center gap-3 cursor-pointer relative">
                      <input
                        type="file"
                        accept="image/*"
                        className="absolute inset-0 opacity-0 cursor-pointer"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            const reader = new FileReader();
                            reader.onloadend = () => {
                              setFormData({ ...formData, image: reader.result as string });
                            };
                            reader.readAsDataURL(file);
                          }
                        }}
                      />
                      <div className="w-12 h-12 bg-primary-container/10 rounded-full flex items-center justify-center text-primary-container">
                        <span className="material-symbols-outlined text-3xl">cloud_upload</span>
                      </div>
                      <div className="text-center">
                        <p className="text-sm font-bold text-white">Click or drag to upload</p>
                        <p className="text-[10px] text-outline mt-1 uppercase tracking-widest">SVG, PNG, JPG (MAX. 800x400px)</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-outline uppercase tracking-widest ml-1">
                  Short Description
                </label>
                <div className="ghost-border bg-surface-container-high rounded-xl p-3 flex items-start gap-3">
                  <span className="material-symbols-outlined text-outline text-[20px] mt-0.5">
                    description
                  </span>
                  <textarea
                    required
                    rows={3}
                    className="bg-transparent border-none focus:ring-0 text-on-surface w-full placeholder:text-outline/50 resize-none"
                    placeholder="A brief overview of what this category covers..."
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 py-4 bg-surface-container-highest text-white rounded-xl font-bold hover:bg-surface-bright transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-[2] py-4 bg-primary-container text-white rounded-xl font-bold hover:opacity-90 transition-all shadow-lg shadow-primary-container/20"
                >
                  {editingCategory ? "Save Changes" : "Create Segment"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
