import React from 'react';

export default function Page() {
  return (
      <>
<div className="p-8 max-w-7xl mx-auto space-y-12">
      {/*  Hero Banner Section  */}
      <section className="relative rounded-3xl overflow-hidden shadow-2xl">
      <div className="h-48 w-full bg-gradient-to-r from-[#6C3EFF] via-[#4F29CC] to-[#12121D]" data-alt="Abstract smooth gradient flowing from electric violet to deep midnight navy with subtle grain texture and glowing light leaks"></div>
      <div className="px-8 pb-8 -mt-12 flex flex-col md:flex-row items-end justify-between gap-6">
      <div className="flex flex-col md:flex-row items-end gap-6">
      <div className="relative group">
      <div className="w-32 h-32 rounded-3xl bg-surface-container-highest border-4 border-[#0A0A14] overflow-hidden shadow-xl">
      <img alt="AK" className="w-full h-full object-cover" data-alt="Headshot of a confident young man in a modern tech environment with atmospheric purple and blue lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQtABqIEZpACs5rppOhjrNpMjau0QjU_bfzb8g36btVficBPGksTs3-xGphb3rJ3lYJWFye1RGnEsBWn_mLsXqWRkqLPH49_eBwp10mW-benKq4h9PR93jkGImiBvuM4hKHrNeP-iiykdzQI8BeqtQrMTLgtE4fc9TVN3agOWFqrFjsLii7rFcMPvsynHdf8khph9nCyo9Hb6E3NGw-47TER9Y3JSeFoldJCcaCv6KKbglCUz_nk60P76g47FmT0gLbf7KdesbKQ"/>
      </div>
      <button className="absolute -bottom-2 -right-2 p-2 bg-primary rounded-xl text-on-primary shadow-lg border-2 border-[#0A0A14] hover:scale-105 transition-transform">
      <span className="material-symbols-outlined text-sm" data-icon="photo_camera">photo_camera</span></button>
      </div>
      <div className="pb-2">
      <h2 className="text-4xl font-headline font-bold text-white tracking-tight">Ahmed Khan</h2>
      <p className="text-outline flex items-center gap-2 font-['JetBrains_Mono']">
      <span className="text-primary">@ahmed_quiz</span>
      <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
      <span>Quiz enthusiast from Lahore</span>
      </p>
      </div>
      </div>
      <div className="flex gap-3 pb-2">
      <button className="px-6 py-2.5 bg-surface-container-high hover:bg-surface-bright text-white rounded-xl font-bold transition-all border border-outline-variant/20 flex items-center gap-2">
      <span className="material-symbols-outlined text-lg" data-icon="edit">edit</span>
      <span>Edit Profile</span></button>
      <button className="px-6 py-2.5 bg-gradient-to-r from-[#6C3EFF] to-[#4F29CC] text-white rounded-xl font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-all flex items-center gap-2">
      <span className="material-symbols-outlined text-lg" data-icon="share">share</span>
      <span>Share</span></button>
      </div>
      </div>
</>
    )
  );
}
