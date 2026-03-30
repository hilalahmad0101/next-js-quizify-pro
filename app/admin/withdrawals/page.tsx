import React from 'react';

export default function Page() {
  return (
      <>
{/*  Top Navigation  */}
      
      <div className="p-8">
      {/*  Header Section  */}
      <div className="flex justify-between items-end mb-10">
      <div>
      <h2 className="text-4xl font-headline font-bold text-white tracking-tight">Withdrawal Requests</h2>
      <p className="text-outline mt-1 font-body">Manage and process user payout requests across all platforms.</p>
      </div>
      <div className="flex gap-2">
      <div className="flex -space-x-3 overflow-hidden">
      <img alt="" className="inline-block h-8 w-8 rounded-full ring-2 ring-background" data-alt="Portrait of diverse user 1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqoJ6jRVxH6p3jlYSMygqt_m-SzXDVfy-of9Z_EAHhdPa3clwPaKg0-zzFGQVZxRIjFSWhvR1EXe5sWx2tifANs-HpygLIVMdqvhBcRvYwFi9xDq-XPO68XVE0fHZ3T09EpNU7UDQZbxHlg1qCmo4PzfU31yx8aPwih7FFL3mS6FSyOXXvnuL9AGSTle05lHFmHHmPi1I3E41QCcRp62L0qr74-xUiabeeuevO-gJnSNXWm1LcAk3NG_Y3gP2AbRVb47ONocKFsA"/>
      <img alt="" className="inline-block h-8 w-8 rounded-full ring-2 ring-background" data-alt="Portrait of diverse user 2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqsgnPX4NAk9XP1siwf2wpsfheg-D_qxh2X-jjIoF4nEF6FZfl_1atUE63h_H0zadzBVrEQBoIdRYCXVOpjPrQ214i_DCRJraQzii_aShhlmvuD__zNzSNTTvoACHIR-wgLb66gCkkvbNwJF4Qu-NrWMsqpuzf_v3LyEpIM_fo8RwzXB7KPkLnybuRYcRogDuXOVFFZTsz4n29IQliDKWYCXZpt9yQFuC0KWIHn5sHhpFQDmQ03qowiwlNF-eaBRcMKzomkiavbg"/>
      <img alt="" className="inline-block h-8 w-8 rounded-full ring-2 ring-background" data-alt="Portrait of diverse user 3" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZU4vMdb_Eu-G6njqSkuF1kVhlDNYCNyEICUDsgKizd4u7VafmZStvnKApSipnh_IbIBzZ-MOnhj2UiqzMvv1rQRbySLvar9yuFIPYjFpbxjw28DfAAbqpnzxVkVedxJeJOeCQS0UqwGOqmS2rpAGZYPUODPl6atHTJl34mP1POJVK5jSu7ncp6YcCl-SOke2yOapcRftviuLkZU1LZlOiXgmr9uVhF9KF39yJX5L8M9TmsIxr5T0IIMO4CY1ww43YsdROxPaU8Q"/>
      </div>
      <span className="text-xs text-outline self-center ml-2">5 admins currently active</span>
      </div>
      </div>
      {/*  Stats Bento Grid  */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
      <div className="bg-surface-container-low p-6 rounded-2xl border-l-4 border-[#FF9900] group hover:bg-surface-container transition-all">
      <div className="flex justify-between items-start mb-4">
      <div className="p-2 bg-[#FF9900]/10 rounded-lg text-[#FF9900]">
      <span className="material-symbols-outlined">pending_actions</span>
      </div>
      <span className="text-[10px] font-bold text-[#FF9900] bg-[#FF9900]/10 px-2 py-1 rounded uppercase tracking-wider">Action Required</span>
      </div>
      <p className="text-outline text-sm font-medium">Pending Withdrawals</p>
      <div className="flex items-baseline gap-2 mt-1">
      <span className="text-3xl font-headline font-bold text-white">23</span>
      <span className="text-lg font-mono text-tertiary tracking-tight">$4,200.00</span>
      </div>
      </div>
      <div className="bg-surface-container-low p-6 rounded-2xl border-l-4 border-secondary group hover:bg-surface-container transition-all">
      <div className="flex justify-between items-start mb-4">
      <div className="p-2 bg-secondary/10 rounded-lg text-secondary">
      <span className="material-symbols-outlined">check_circle</span>
      </div>
      <span className="text-[10px] font-bold text-secondary bg-secondary/10 px-2 py-1 rounded uppercase tracking-wider">Today</span>
      </div>
      <p className="text-outline text-sm font-medium">Approved Today</p>
      <div className="flex items-baseline gap-2 mt-1">
      <span className="text-3xl font-headline font-bold text-white">45</span>
      <span className="text-lg font-mono text-secondary tracking-tight">$8,430.00</span>
      </div>
      </div>
      <div className="bg-surface-container-low p-6 rounded-2xl border-l-4 border-primary group hover:bg-surface-container transition-all">
      <div className="flex justify-between items-start mb-4">
      <div className="p-2 bg-primary/10 rounded-lg text-primary">
      <span className="material-symbols-outlined">event_available</span>
      </div>
      <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-1 rounded uppercase tracking-wider">Weekly</span>
      </div>
      <p className="text-outline text-sm font-medium">Completed This Week</p>
      <div className="flex items-baseline gap-2 mt-1">
      <span className="text-3xl font-headline font-bold text-white">234</span>
      <span className="text-lg font-mono text-primary-fixed-dim tracking-tight">$42,100.00</span>
      </div>
      </div>
      </div>
      {/*  Filter Bar  */}
      <div className="bg-surface-container p-4 rounded-xl mb-6 flex flex-wrap items-center justify-between gap-4">
      <div className="flex flex-wrap items-center gap-3">
      <div className="bg-surface-container-high px-4 py-2 rounded-lg flex items-center gap-2 border border-outline-variant/20">
      <span className="text-xs text-outline uppercase font-bold tracking-widest">Status:</span>
      <span className="text-sm text-white font-medium">Pending</span>
      <span className="material-symbols-outlined text-sm">keyboard_arrow_down</span>
      </div>
      <div className="bg-surface-container-high px-4 py-2 rounded-lg flex items-center gap-2 border border-outline-variant/20">
      <span className="text-xs text-outline uppercase font-bold tracking-widest">Method:</span>
      <span className="text-sm text-white font-medium">All Methods</span>
      <span className="material-symbols-outlined text-sm">keyboard_arrow_down</span>
      </div>
      <div className="bg-surface-container-high px-4 py-2 rounded-lg flex items-center gap-2 border border-outline-variant/20">
      <span className="text-xs text-outline uppercase font-bold tracking-widest">Amount:</span>
      <span className="text-sm text-white font-medium">Any</span>
      <span className="material-symbols-outlined text-sm">keyboard_arrow_down</span>
      </div>
      <button className="text-outline hover:text-white flex items-center gap-1 text-sm transition-colors px-2">
      <span className="material-symbols-outlined text-lg">filter_list</span>
                              Clear Filters</button>
      </div>
      <button className="bg-primary-container text-white px-6 py-2.5 rounded-lg font-bold flex items-center gap-2 hover:shadow-[0px_4px_20px_rgba(108,62,255,0.4)] transition-all active:scale-95">
      <span className="material-symbols-outlined">verified_user</span>
                          Approve Selected</button>
      </div>
      {/*  Transactions Table  */}
      <div className="bg-surface-container-low rounded-2xl overflow-hidden">
      <table className="w-full text-left border-collapse">
      <thead>
      <tr className="bg-surface-container-high/50 border-b border-outline-variant/10">
      <th className="py-4 px-6"><input className="rounded bg-surface-variant border-outline-variant text-primary focus:ring-primary/40" type="checkbox"/></th>
      <th className="py-4 px-4 text-[10px] font-bold text-outline uppercase tracking-widest font-headline">Ref#</th>
      <th className="py-4 px-4 text-[10px] font-bold text-outline uppercase tracking-widest font-headline">User</th>
      <th className="py-4 px-4 text-[10px] font-bold text-outline uppercase tracking-widest font-headline">Amount</th>
      <th className="py-4 px-4 text-[10px] font-bold text-outline uppercase tracking-widest font-headline">Method</th>
      <th className="py-4 px-4 text-[10px] font-bold text-outline uppercase tracking-widest font-headline">Details</th>
      <th className="py-4 px-4 text-[10px] font-bold text-outline uppercase tracking-widest font-headline">Requested</th>
      <th className="py-4 px-4 text-[10px] font-bold text-outline uppercase tracking-widest font-headline">Status</th>
      <th className="py-4 px-6 text-[10px] font-bold text-outline uppercase tracking-widest font-headline text-right">Actions</th>
      </tr>
      </thead>
      <tbody className="divide-y divide-outline-variant/10">
      {/*  Row 1: Active Focus (Ahmed)  */}
      <tr className="hover:bg-surface-container/50 transition-colors border-l-4 border-amber-500 bg-amber-500/5">
      <td className="py-4 px-6"><input checked="" className="rounded bg-surface-variant border-outline-variant text-primary focus:ring-primary/40" type="checkbox"/></td>
      <td className="py-4 px-4 font-mono text-sm text-white">#WD-82910</td>
      <td className="py-4 px-4">
      <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-primary-container/20 flex items-center justify-center text-primary text-xs font-bold">AQ</div>
      <div>
      <p className="text-sm font-bold text-white">Ahmed Quiz</p>
      <p className="text-[11px] text-outline">@ahmed_quiz</p>
      </div>
      </div>
      </td>
      <td className="py-4 px-4 font-mono text-sm font-bold text-tertiary">$50.00</td>
      <td className="py-4 px-4">
      <div className="flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-secondary"></span>
      <span className="text-sm text-white">JazzCash</span>
      </div>
      </td>
      <td className="py-4 px-4 text-xs text-outline font-mono">0300-1234567</td>
      <td className="py-4 px-4">
      <p className="text-sm text-white">2 hours ago</p>
      <p className="text-[10px] text-outline">Oct 24, 2023 • 14:20</p>
      </td>
      <td className="py-4 px-4">
      <span className="px-2 py-1 rounded-full bg-amber-500/10 text-amber-500 text-[10px] font-bold uppercase tracking-wider">Pending</span>
      </td>
      <td className="py-4 px-6 text-right">
      <button className="p-2 hover:bg-surface-bright rounded-lg text-primary transition-all">
      <span className="material-symbols-outlined">edit</span></button>
      <button className="p-2 hover:bg-surface-bright rounded-lg text-error transition-all">
      <span className="material-symbols-outlined">close</span></button>
      </td>
      </tr>
      {/*  Row 2  */}
      <tr className="hover:bg-surface-container/50 transition-colors border-l-4 border-amber-500">
      <td className="py-4 px-6"><input className="rounded bg-surface-variant border-outline-variant text-primary focus:ring-primary/40" type="checkbox"/></td>
      <td className="py-4 px-4 font-mono text-sm text-white">#WD-82909</td>
      <td className="py-4 px-4">
      <div className="flex items-center gap-3">
      <img alt="" className="w-8 h-8 rounded-full" data-alt="Portrait of Sarah Chen" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-D5ZHVR09R6Y1isTiLp2vcsPaEJqRQSldHISy7AVdzwslrbWrpGqN5olUx5JWKIoUwG6i9ROLrJNRqw34MMp9O43oKkLsHp3okQ3fe-zqyY2cUli4KRPL0wRXqALuB9Yn_7c-CX_Pn7n0yHXd_blQGDsKUXMA2FFcTiTNbJV4tjnaKvSsGL3y7YA2UihtPL7ouNIjuUl5RB1_axJB0R-KIL70zK3OmBYpDS39n_Y26TKeqGr02pZc2x8ft1MEeqHsIEc3BownCg"/>
      <div>
      <p className="text-sm font-bold text-white">Sarah Chen</p>
      <p className="text-[11px] text-outline">@sarah_c</p>
      </div>
      </div>
      </td>
      <td className="py-4 px-4 font-mono text-sm font-bold text-tertiary">$125.50</td>
      <td className="py-4 px-4">
      <div className="flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-blue-400"></span>
      <span className="text-sm text-white">PayPal</span>
      </div>
      </td>
      <td className="py-4 px-4 text-xs text-outline font-mono">schen_pay@mail.com</td>
      <td className="py-4 px-4">
      <p className="text-sm text-white">5 hours ago</p>
      <p className="text-[10px] text-outline">Oct 24, 2023 • 11:45</p>
      </td>
      <td className="py-4 px-4">
      <span className="px-2 py-1 rounded-full bg-amber-500/10 text-amber-500 text-[10px] font-bold uppercase tracking-wider">Pending</span>
      </td>
      <td className="py-4 px-6 text-right">
      <button className="p-2 hover:bg-surface-bright rounded-lg text-primary transition-all">
      <span className="material-symbols-outlined">edit</span></button>
      <button className="p-2 hover:bg-surface-bright rounded-lg text-error transition-all">
      <span className="material-symbols-outlined">close</span></button>
      </td>
      </tr>
      {/*  Row 3  */}
      <tr className="hover:bg-surface-container/50 transition-colors border-l-4 border-transparent">
      <td className="py-4 px-6"><input className="rounded bg-surface-variant border-outline-variant text-primary focus:ring-primary/40" type="checkbox"/></td>
      <td className="py-4 px-4 font-mono text-sm text-white">#WD-82908</td>
      <td className="py-4 px-4">
      <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary text-xs font-bold">JD</div>
      <div>
      <p className="text-sm font-bold text-white">John Doe</p>
      <p className="text-[11px] text-outline">@johndoe_99</p>
      </div>
      </div>
      </td>
      <td className="py-4 px-4 font-mono text-sm font-bold text-tertiary">$210.00</td>
      <td className="py-4 px-4">
      <div className="flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-orange-400"></span>
      <span className="text-sm text-white">Bank Transfer</span>
      </div>
      </td>
      <td className="py-4 px-4 text-xs text-outline font-mono">PK64 HABB 0001 2223 3334</td>
      <td className="py-4 px-4">
      <p className="text-sm text-white">Yesterday</p>
      <p className="text-[10px] text-outline">Oct 23, 2023 • 22:10</p>
      </td>
      <td className="py-4 px-4">
      <span className="px-2 py-1 rounded-full bg-secondary/10 text-secondary text-[10px] font-bold uppercase tracking-wider">Completed</span>
      </td>
      <td className="py-4 px-6 text-right">
      <button className="p-2 hover:bg-surface-bright rounded-lg text-outline transition-all">
      <span className="material-symbols-outlined">receipt_long</span></button>
      </td>
      </tr>
      </tbody>
      </table>
      </div>
      {/*  Pagination  */}
      <div className="mt-6 flex items-center justify-between">
      <p className="text-xs text-outline">Showing <span className="text-white font-bold">1-10</span> of <span className="text-white font-bold">234</span> withdrawal requests</p>
      <div className="flex gap-2">
      <button className="w-10 h-10 rounded-lg border border-outline-variant/20 flex items-center justify-center text-outline hover:bg-surface-container transition-all">
      <span className="material-symbols-outlined">chevron_left</span></button>
      <button className="w-10 h-10 rounded-lg bg-primary-container text-white font-bold text-sm">1</button>
      <button className="w-10 h-10 rounded-lg border border-outline-variant/20 flex items-center justify-center text-outline hover:bg-surface-container transition-all text-sm font-bold">2</button>
      <button className="w-10 h-10 rounded-lg border border-outline-variant/20 flex items-center justify-center text-outline hover:bg-surface-container transition-all text-sm font-bold">3</button>
      <button className="w-10 h-10 rounded-lg border border-outline-variant/20 flex items-center justify-center text-outline hover:bg-surface-container transition-all">
      <span className="material-symbols-outlined">chevron_right</span></button>
      </div>
      </div>
</>
    )
  );
}
