import React from 'react';

export default function Page() {
  return (
      <>
{/*  Dashboard Header & Filters  */}
      <div className="flex flex-col gap-8 mb-8">
      <div className="flex justify-between items-end">
      <div>
      <h1 className="text-4xl font-black font-headline tracking-tight text-white">All Users</h1>
      <p className="text-[#A0A0C0] mt-1 font-medium">Total registered: <span className="font-mono text-white">52,847</span> users worldwide</p>
      </div>
      <button className="bg-[#6C3EFF] hover:bg-[#8B61FF] text-white px-6 py-2.5 rounded-xl font-bold font-headline flex items-center gap-2 transition-all shadow-[0_4px_20px_rgba(108,62,255,0.4)]">
      <span className="material-symbols-outlined text-sm">download</span>
                          Export CSV</button>
      </div>
      {/*  Filter Bar Bento  */}
      <div className="grid grid-cols-12 gap-4">
      <div className="col-span-3 bg-[#1B1B25] p-1 rounded-xl flex items-center border border-[#484456]/20">
      <button className="flex-1 py-2 text-xs font-bold font-headline bg-[#6C3EFF] text-white rounded-lg">Active</button>
      <button className="flex-1 py-2 text-xs font-bold font-headline text-[#A0A0C0] hover:text-white">Suspended</button>
      <button className="flex-1 py-2 text-xs font-bold font-headline text-[#A0A0C0] hover:text-white">Banned</button>
      </div>
      <div className="col-span-2 bg-[#1B1B25] px-4 py-2 rounded-xl flex items-center justify-between border border-[#484456]/20">
      <span className="text-xs text-[#A0A0C0] font-bold">Country</span>
      <span className="material-symbols-outlined text-sm">expand_more</span>
      </div>
      <div className="col-span-2 bg-[#1B1B25] px-4 py-2 rounded-xl flex items-center justify-between border border-[#484456]/20">
      <span className="text-xs text-[#A0A0C0] font-bold">Sort: Recent</span>
      <span className="material-symbols-outlined text-sm">sort</span>
      </div>
      <div className="col-span-5 flex items-center gap-2 px-4 py-2">
      <div className="h-2 w-2 rounded-full bg-[#00E5A0] animate-pulse"></div>
      <span className="text-xs text-[#00E5A0] font-bold font-mono">1,248 USERS ONLINE NOW</span>
      </div>
      </div>
      </div>
      {/*  Users Table  */}
      <div className="bg-[#1B1B25]/50 rounded-2xl overflow-hidden shadow-2xl border border-[#484456]/10">
      <table className="w-full text-left border-collapse">
      <thead>
      <tr className="bg-[#1B1B25] text-[#A0A0C0] text-[10px] uppercase tracking-widest font-bold">
      <th className="px-6 py-4">ID</th>
      <th className="px-6 py-4">User</th>
      <th className="px-6 py-4">Email</th>
      <th className="px-6 py-4">Country</th>
      <th className="px-6 py-4">Balance</th>
      <th className="px-6 py-4">Quizzes</th>
      <th className="px-6 py-4">Status</th>
      <th className="px-6 py-4">Joined</th>
      <th className="px-6 py-4 text-right">Actions</th>
      </tr>
      </thead>
      <tbody className="divide-y divide-[#484456]/10">
      {/*  Row 1 (Selected)  */}
      <tr className="hover:bg-[#292934] transition-colors group bg-[#292934]/60">
      <td className="px-6 py-4 text-xs font-mono text-[#484456]">#QP-9021</td>
      <td className="px-6 py-4">
      <div className="flex items-center gap-3">
      <img alt="Ahmed Khan" className="w-10 h-10 rounded-full bg-[#0A0A14] border border-[#6C3EFF]/30" data-alt="portrait of a young man with stylish hair and glasses, minimalist flat lighting, digital profile photo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuApan0fKkdbhd5T-xRqdk6RY-Oj-unrA539Y3Jzi-xthNv9xZdBSP9Av8RqVMilJkS5qiPvBFtcmK8OFddnDMcFazvgltT8gztX6h5eSY10KhVjpbLwuKyDFzeZCokjEEbFbg4-KqUa74EKfsPyxU_HSw8cKoa3oIRSjMOYRMxb7ZN__yC-T1owEGIzKvlf10ISJMSLQknKtsoiqJbMM_02S4AvKhbb5zLbzdSa_akJP_-5MP0aaUIzEpsp0MODBbkKTRd591a6eQ"/>
      <div>
      <p className="text-sm font-bold text-white font-headline">Ahmed Khan</p>
      <p className="text-[10px] text-[#6C3EFF] font-mono">@ahmed_quiz</p>
      </div>
      </div>
      </td>
      <td className="px-6 py-4 text-sm text-[#A0A0C0]">ahmed.k@email.com</td>
      <td className="px-6 py-4">
      <div className="flex items-center gap-2 text-sm text-[#e4e1f0]">
      <span className="material-symbols-outlined text-sm">location_on</span>
                                      UAE
                                  </div>
      </td>
      <td className="px-6 py-4 text-sm font-mono text-[#FFD700]">$124.50</td>
      <td className="px-6 py-4 text-sm text-[#e4e1f0]">342</td>
      <td className="px-6 py-4">
      <span className="px-2 py-1 rounded-full text-[10px] font-black uppercase bg-[#00E5A0]/10 text-[#00E5A0] border border-[#00E5A0]/20">Active</span>
      </td>
      <td className="px-6 py-4 text-sm text-[#A0A0C0]">12 Oct 2023</td>
      <td className="px-6 py-4 text-right">
      <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
      <button className="p-2 hover:bg-[#6C3EFF]/20 rounded-lg text-[#6C3EFF]"><span className="material-symbols-outlined text-sm">visibility</span></button>
      <button className="p-2 hover:bg-red-500/20 rounded-lg text-red-500"><span className="material-symbols-outlined text-sm">block</span></button>
      </div>
      </td>
      </tr>
      {/*  Row 2  */}
      <tr className="hover:bg-[#292934] transition-colors group">
      <td className="px-6 py-4 text-xs font-mono text-[#484456]">#QP-8942</td>
      <td className="px-6 py-4">
      <div className="flex items-center gap-3">
      <img alt="Sarah Chen" className="w-10 h-10 rounded-full bg-[#0A0A14] border border-[#484456]/30" data-alt="portrait of a confident woman with short hair, high contrast editorial lighting, clean tech avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAANAwdFoWSdBvs8kF8cV5d7suBvCdaCCRROhykJH5VGMXh4MQaBKBtDtWYavtDLMfqf9jxTJV9clpCijTIX2VeGsGEtiLooLnowWbJPuh_Yj9tH5wyTw9WkNqy1I_ozxclbCQlLmwqUqziE4haMKHHw1zwgHRfNqcTliRpypRb-ckx9uI6Rqdm3VZw6bEn9e_3BAZ_q62e2RU2UqaQ51-Y54JNk4BnegrPWiZHE_yxWD5kEB_9RoCHyLffkukK-l6FRJB8Ht8Gww"/>
      <div>
      <p className="text-sm font-bold text-white font-headline">Sarah Chen</p>
      <p className="text-[10px] text-[#A0A0C0] font-mono">@sarah_win</p>
      </div>
      </div>
      </td>
      <td className="px-6 py-4 text-sm text-[#A0A0C0]">s.chen@domain.io</td>
      <td className="px-6 py-4 text-sm text-[#e4e1f0]">Canada</td>
      <td className="px-6 py-4 text-sm font-mono text-[#FFD700]">$2,410.00</td>
      <td className="px-6 py-4 text-sm text-[#e4e1f0]">1,205</td>
      <td className="px-6 py-4">
      <span className="px-2 py-1 rounded-full text-[10px] font-black uppercase bg-[#00E5A0]/10 text-[#00E5A0] border border-[#00E5A0]/20">Active</span>
      </td>
      <td className="px-6 py-4 text-sm text-[#A0A0C0]">05 Sep 2023</td>
      <td className="px-6 py-4 text-right">
      <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
      <button className="p-2 hover:bg-[#6C3EFF]/20 rounded-lg text-[#6C3EFF]"><span className="material-symbols-outlined text-sm">visibility</span></button>
      <button className="p-2 hover:bg-red-500/20 rounded-lg text-red-500"><span className="material-symbols-outlined text-sm">block</span></button>
      </div>
      </td>
      </tr>
      {/*  Row 3  */}
      <tr className="hover:bg-[#292934] transition-colors group">
      <td className="px-6 py-4 text-xs font-mono text-[#484456]">#QP-7712</td>
      <td className="px-6 py-4">
      <div className="flex items-center gap-3">
      <img alt="Marcus Volt" className="w-10 h-10 rounded-full bg-[#0A0A14] border border-[#484456]/30" data-alt="close up profile of a man with beard, cinematic rim lighting in purple, tech aesthetic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDw4qzuQnXKrkftfRUzDC85JodCslDTjcz3n1HrcvipT9v6u1LRrTEbuzCT42lpiucmSwOcH1orjVzwy6MfrqYSQxgTNSkDShDTgw-SnKaW5vQIhAC4CyqWmkH7AAqxQXKmOO2Z8q9lvEbAJJNG7T02UWJ8BJSwShY_k8NL6M5ju86x-QkH__IljFn4pBtf7l3xmsxrObwblRwyexg0kr4vmnF7168txf8DkckRbhg1AhRBdeZ3qPEQuGp5mBxrD4wejl6RfafkeA"/>
      <div>
      <p className="text-sm font-bold text-white font-headline">Marcus Volt</p>
      <p className="text-[10px] text-[#A0A0C0] font-mono">@volt_master</p>
      </div>
      </div>
      </td>
      <td className="px-6 py-4 text-sm text-[#A0A0C0]">m.volt@spark.net</td>
      <td className="px-6 py-4 text-sm text-[#e4e1f0]">Germany</td>
      <td className="px-6 py-4 text-sm font-mono text-[#FFD700]">$0.00</td>
      <td className="px-6 py-4 text-sm text-[#e4e1f0]">12</td>
      <td className="px-6 py-4">
      <span className="px-2 py-1 rounded-full text-[10px] font-black uppercase bg-orange-500/10 text-orange-500 border border-orange-500/20">Suspended</span>
      </td>
      <td className="px-6 py-4 text-sm text-[#A0A0C0]">28 Nov 2023</td>
      <td className="px-6 py-4 text-right">
      <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
      <button className="p-2 hover:bg-[#6C3EFF]/20 rounded-lg text-[#6C3EFF]"><span className="material-symbols-outlined text-sm">visibility</span></button>
      <button className="p-2 hover:bg-red-500/20 rounded-lg text-red-500"><span className="material-symbols-outlined text-sm">block</span></button>
      </div>
      </td>
      </tr>
      </tbody>
      </table>
      {/*  Pagination  */}
      <div className="px-8 py-6 bg-[#1B1B25] flex justify-between items-center border-t border-[#484456]/20">
      <span className="text-xs text-[#A0A0C0]">Showing <span className="text-white font-bold">1-25</span> of 52,847 users</span>
      <div className="flex gap-2">
      <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#484456]/20 text-[#A0A0C0] hover:bg-[#292934] transition-all"><span className="material-symbols-outlined">chevron_left</span></button>
      <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#6C3EFF] text-white font-bold shadow-lg">1</button>
      <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#484456]/20 text-[#A0A0C0] hover:bg-[#292934] transition-all">2</button>
      <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#484456]/20 text-[#A0A0C0] hover:bg-[#292934] transition-all">3</button>
      <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#484456]/20 text-[#A0A0C0] hover:bg-[#292934] transition-all">...</button>
      <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#484456]/20 text-[#A0A0C0] hover:bg-[#292934] transition-all"><span className="material-symbols-outlined">chevron_right</span></button>
      </div>
      </div>
</>
    )
  );
}
