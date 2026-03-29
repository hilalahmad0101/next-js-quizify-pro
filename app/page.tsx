import React from 'react';

export default function Page() {
  return (
    <div className="w-full">
      <!DOCTYPE html>

<html className="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>QuizifyPro — The Electric Alchemist's Arena</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&amp;family=Manrope:wght@300;400;500;600;700&amp;family=JetBrains+Mono:wght@400;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
          darkMode: "class",
          theme: {
            extend: {
              colors: {
                "on-background": "#e4e1f0",
                "inverse-surface": "#e4e1f0",
                "surface-container-lowest": "#0d0d17",
                "on-tertiary-container": "#4c3e00",
                "tertiary-fixed": "#ffe16d",
                "surface": "#12121d",
                "secondary-fixed-dim": "#00e29e",
                "on-surface": "#e4e1f0",
                "outline": "#938ea2",
                "surface-container-low": "#1b1b25",
                "tertiary-fixed-dim": "#e9c400",
                "surface-tint": "#cbbeff",
                "secondary-fixed": "#47ffb8",
                "on-primary": "#320099",
                "on-error": "#690005",
                "inverse-primary": "#622ff5",
                "surface-container-highest": "#34343f",
                "on-secondary-fixed": "#002114",
                "surface-container-high": "#292934",
                "secondary-container": "#00e5a0",
                "on-tertiary-fixed": "#221b00",
                "surface-bright": "#393844",
                "secondary": "#6cffbf",
                "on-secondary": "#003824",
                "on-error-container": "#ffdad6",
                "surface-dim": "#12121d",
                "inverse-on-surface": "#302f3b",
                "primary-container": "#6c3eff",
                "error-container": "#93000a",
                "on-tertiary-fixed-variant": "#544600",
                "background": "#12121d",
                "on-primary-fixed-variant": "#4900d5",
                "tertiary": "#e9c400",
                "error": "#ffb4ab",
                "on-secondary-container": "#006141",
                "on-surface-variant": "#cac3d9",
                "tertiary-container": "#c9a900",
                "primary-fixed": "#e6deff",
                "surface-variant": "#34343f",
                "outline-variant": "#484456",
                "on-primary-fixed": "#1d0061",
                "primary-fixed-dim": "#cbbeff",
                "surface-container": "#1f1f29",
                "primary": "#cbbeff",
                "on-secondary-fixed-variant": "#005236",
                "on-primary-container": "#ece4ff",
                "on-tertiary": "#3a3000"
              },
              fontFamily: {
                "headline": ["Space Grotesk"],
                "body": ["Manrope"],
                "label": ["Manrope"],
                "mono": ["JetBrains Mono"]
              },
              borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"},
            },
          },
        }
    </script>
<style>
        body { background-color: #0A0A14; color: #A0A0C0; font-family: 'Manrope', sans-serif; }
        .glass-panel { background: rgba(18, 18, 31, 0.8); backdrop-filter: blur(20px); border: 1px solid rgba(108, 62, 255, 0.1); }
        .text-glow-purple { text-shadow: 0 0 15px rgba(108, 62, 255, 0.5); }
        .text-glow-gold { text-shadow: 0 0 15px rgba(233, 196, 0, 0.5); }
        .gradient-text { -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .hero-gradient { background: linear-gradient(135deg, #cbbeff 0%, #e9c400 100%); }
        .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
    </style>
</head>
<body className="selection:bg-primary-container selection:text-white">
{/*  Navbar  */}
<nav className="fixed top-0 w-full z-50 bg-[#0A0A14]/80 backdrop-blur-xl border-b border-primary-container/10">
<div className="max-w-7xl mx-auto flex justify-between items-center px-8 h-20">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[#6C3EFF] text-3xl" style={{fontVariationSettings: ''FILL' 1'}}>bolt</span>
<span className="text-2xl font-bold text-[#6C3EFF] tracking-tight font-headline">QuizifyPro</span>
</div>
<div className="hidden md:flex items-center gap-8 font-headline text-[#A0A0C0]">
<a className="text-[#6C3EFF] font-bold hover:text-white transition-all duration-300" href="#">How it Works</a>
<a className="hover:text-white transition-all duration-300" href="#">Categories</a>
<a className="hover:text-white transition-all duration-300" href="#">Leaderboard</a>
<a className="hover:text-white transition-all duration-300" href="#">FAQ</a>
</div>
<div className="flex items-center gap-4">
<a className="px-6 py-2 text-[#A0A0C0] font-medium hover:text-white transition-colors" href="/login">Login</a>
<a className="px-6 py-2.5 bg-primary-container text-white rounded-lg font-bold shadow-lg shadow-primary-container/20 hover:scale-105 active:scale-95 transition-all text-center" href="/register">Get Started</a>
</div>
</div>
</nav>
{/*  Hero Section  */}
<section className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden">
<div className="absolute inset-0 z-0 opacity-20">
<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-container/40 rounded-full blur-[120px]"></div>
<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-tertiary/20 rounded-full blur-[120px]"></div>
</div>
<div className="max-w-7xl mx-auto px-8 w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-high border border-outline-variant/20">
<span className="text-tertiary text-sm font-bold tracking-widest uppercase">🏆 #1 Quiz Platform</span>
</div>
<h1 className="text-6xl md:text-7xl font-bold font-headline leading-[1.1] tracking-tight text-white">
                    Play Quizzes.<br/>
<span className="gradient-text bg-gradient-to-r from-primary-fixed-dim to-tertiary">Win Real Money.</span>
</h1>
<p className="text-xl text-on-surface-variant max-w-lg leading-relaxed">
                    Join over 50k+ players competing in real-time knowledge arenas. Turn your expertise into earnings today.
                </p>
<div className="flex flex-wrap gap-4">
<a className="px-8 py-4 bg-primary-container text-white rounded-xl font-bold flex items-center gap-2 shadow-2xl shadow-primary-container/40 hover:brightness-110 transition-all group" href="/user/user/dashboard">
                        Start Playing Free
                        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
</a>
<button className="px-8 py-4 border border-outline-variant/30 text-white rounded-xl font-bold flex items-center gap-2 hover:bg-surface-container-high transition-all">
<span className="material-symbols-outlined text-primary-fixed-dim">play_circle</span>
                        Watch How It Works
                    </button>
</div>
<div className="pt-8 border-t border-outline-variant/10 flex flex-wrap gap-8 items-center text-sm font-mono text-on-surface-variant">
<div className="flex flex-col">
<span className="text-tertiary text-xl font-bold">$2.4M</span>
<span>Paid Out</span>
</div>
<div className="flex flex-col">
<span className="text-white text-xl font-bold">52,847</span>
<span>Players</span>
</div>
<div className="flex flex-col">
<span className="text-white text-xl font-bold">1.2M</span>
<span>Quizzes</span>
</div>
</div>
</div>
{/*  Phone Mockup  */}
<div className="relative flex justify-center items-center">
<div className="relative w-[320px] h-[640px] bg-surface-container-lowest rounded-[3rem] border-8 border-surface-bright shadow-2xl overflow-hidden p-4">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-surface-bright rounded-b-2xl"></div>
<div className="h-full flex flex-col pt-8 space-y-4">
<div className="flex justify-between items-center text-xs font-mono text-primary">
<span>Question 12/20</span>
<span>00:08s</span>
</div>
<div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
<div className="h-full w-2/3 bg-primary-container"></div>
</div>
<h4 className="text-lg font-bold text-white pt-4">Which planet has the strongest winds in our solar system?</h4>
<div className="space-y-3 pt-4">
<div className="p-4 bg-surface-container-high border border-outline-variant/20 rounded-xl text-sm text-white">Jupiter</div>
<div className="p-4 bg-primary-container border border-primary text-sm text-white font-bold">Neptune</div>
<div className="p-4 bg-surface-container-high border border-outline-variant/20 rounded-xl text-sm text-white">Saturn</div>
<div className="p-4 bg-surface-container-high border border-outline-variant/20 rounded-xl text-sm text-white">Mars</div>
</div>
</div>
</div>
{/*  Decorative element  */}
<div className="absolute -z-10 w-full h-full bg-primary-container/10 rounded-full blur-[80px]"></div>
</div>
</div>
</section>
{/*  How It Works  */}
<section className="py-24 max-w-7xl mx-auto px-8">
<div className="text-center mb-16 space-y-4">
<h2 className="text-4xl font-headline font-bold text-white">Master the Arena in <span className="text-primary-fixed-dim">3 Steps</span></h2>
<p className="text-on-surface-variant">The path from curiosity to professional earner is simpler than you think.</p>
</div>
<div className="grid md:grid-cols-3 gap-8 relative">
{/*  Step 1  */}
<div className="relative p-8 rounded-2xl bg-surface-container-low border border-outline-variant/10 hover:border-primary-container/30 transition-all">
<div className="w-16 h-16 rounded-xl bg-primary-container/10 flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-primary-fixed-dim text-3xl">account_balance_wallet</span>
</div>
<h3 className="text-xl font-bold text-white mb-4">Create &amp; Deposit</h3>
<p className="text-on-surface-variant leading-relaxed">Securely fund your wallet with as little as $2 using encrypted gateways.</p>
<span className="absolute top-4 right-8 text-6xl font-headline font-black text-white/5">01</span>
</div>
{/*  Step 2  */}
<div className="relative p-8 rounded-2xl bg-surface-container-low border border-outline-variant/10 hover:border-primary-container/30 transition-all">
<div className="w-16 h-16 rounded-xl bg-secondary-container/10 flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-secondary-fixed text-3xl">sports_esports</span>
</div>
<h3 className="text-xl font-bold text-white mb-4">Join Competitions</h3>
<p className="text-on-surface-variant leading-relaxed">Select your expertise and enter high-stakes live tournament lobbies.</p>
<span className="absolute top-4 right-8 text-6xl font-headline font-black text-white/5">02</span>
</div>
{/*  Step 3  */}
<div className="relative p-8 rounded-2xl bg-surface-container-low border border-outline-variant/10 hover:border-primary-container/30 transition-all">
<div className="w-16 h-16 rounded-xl bg-tertiary-container/10 flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-tertiary text-3xl">payments</span>
</div>
<h3 className="text-xl font-bold text-white mb-4">Win &amp; Withdraw</h3>
<p className="text-on-surface-variant leading-relaxed">Climb the leaderboard and cash out your winnings instantly to your bank.</p>
<span className="absolute top-4 right-8 text-6xl font-headline font-black text-white/5">03</span>
</div>
</div>
</section>
{/*  Quiz Categories  */}
<section className="py-24 bg-surface-container-lowest/50">
<div className="max-w-7xl mx-auto px-8">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="text-4xl font-headline font-bold text-white mb-2">Explore Domains</h2>
<p className="text-on-surface-variant">Choose your battlefield. Over 500+ daily quizzes active.</p>
</div>
<button className="text-primary-fixed-dim font-bold flex items-center gap-1 hover:underline">
                    View All 24 Categories <span className="material-symbols-outlined">chevron_right</span>
</button>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
{/*  Cat 1  */}
<div className="group relative p-6 rounded-2xl bg-surface-container-high border border-outline-variant/10 hover:bg-primary-container/10 hover:scale-[1.02] transition-all cursor-pointer overflow-hidden">
<div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🧬</div>
<h4 className="text-white font-bold text-lg mb-1">Science</h4>
<div className="flex items-center gap-2 text-xs font-mono text-on-surface-variant">
<span>1.2k Players</span>
<span className="w-1 h-1 bg-outline-variant rounded-full"></span>
<span className="text-tertiary">$450 Entry</span>
</div>
<div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
<span className="material-symbols-outlined text-9xl">science</span>
</div>
</div>
{/*  Cat 2  */}
<div className="group relative p-6 rounded-2xl bg-surface-container-high border border-outline-variant/10 hover:bg-primary-container/10 hover:scale-[1.02] transition-all cursor-pointer overflow-hidden">
<div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📜</div>
<h4 className="text-white font-bold text-lg mb-1">History</h4>
<div className="flex items-center gap-2 text-xs font-mono text-on-surface-variant">
<span>840 Players</span>
<span className="w-1 h-1 bg-outline-variant rounded-full"></span>
<span className="text-tertiary">$300 Entry</span>
</div>
</div>
{/*  Cat 3  */}
<div className="group relative p-6 rounded-2xl bg-surface-container-high border border-outline-variant/10 hover:bg-primary-container/10 hover:scale-[1.02] transition-all cursor-pointer overflow-hidden">
<div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🎬</div>
<h4 className="text-white font-bold text-lg mb-1">Movies</h4>
<div className="flex items-center gap-2 text-xs font-mono text-on-surface-variant">
<span>3.1k Players</span>
<span className="w-1 h-1 bg-outline-variant rounded-full"></span>
<span className="text-tertiary">$100 Entry</span>
</div>
</div>
{/*  Cat 4  */}
<div className="group relative p-6 rounded-2xl bg-surface-container-high border border-outline-variant/10 hover:bg-primary-container/10 hover:scale-[1.02] transition-all cursor-pointer overflow-hidden">
<div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🏀</div>
<h4 className="text-white font-bold text-lg mb-1">Sports</h4>
<div className="flex items-center gap-2 text-xs font-mono text-on-surface-variant">
<span>2.5k Players</span>
<span className="w-1 h-1 bg-outline-variant rounded-full"></span>
<span className="text-tertiary">$250 Entry</span>
</div>
</div>
{/*  Cat 5  */}
<div className="group relative p-6 rounded-2xl bg-surface-container-high border border-outline-variant/10 hover:bg-primary-container/10 hover:scale-[1.02] transition-all cursor-pointer overflow-hidden">
<div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🌍</div>
<h4 className="text-white font-bold text-lg mb-1">Geography</h4>
<div className="flex items-center gap-2 text-xs font-mono text-on-surface-variant">
<span>600 Players</span>
<span className="w-1 h-1 bg-outline-variant rounded-full"></span>
<span className="text-tertiary">$150 Entry</span>
</div>
</div>
{/*  Cat 6  */}
<div className="group relative p-6 rounded-2xl bg-surface-container-high border border-outline-variant/10 hover:bg-primary-container/10 hover:scale-[1.02] transition-all cursor-pointer overflow-hidden">
<div className="text-4xl mb-4 group-hover:scale-110 transition-transform">💻</div>
<h4 className="text-white font-bold text-lg mb-1">Technology</h4>
<div className="flex items-center gap-2 text-xs font-mono text-on-surface-variant">
<span>4.2k Players</span>
<span className="w-1 h-1 bg-outline-variant rounded-full"></span>
<span className="text-tertiary">$500 Entry</span>
</div>
</div>
{/*  Cat 7  */}
<div className="group relative p-6 rounded-2xl bg-surface-container-high border border-outline-variant/10 hover:bg-primary-container/10 hover:scale-[1.02] transition-all cursor-pointer overflow-hidden">
<div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🎵</div>
<h4 className="text-white font-bold text-lg mb-1">Music</h4>
<div className="flex items-center gap-2 text-xs font-mono text-on-surface-variant">
<span>1.1k Players</span>
<span className="w-1 h-1 bg-outline-variant rounded-full"></span>
<span className="text-tertiary">$200 Entry</span>
</div>
</div>
{/*  Cat 8  */}
<div className="group relative p-6 rounded-2xl bg-surface-container-high border border-outline-variant/10 hover:bg-primary-container/10 hover:scale-[1.02] transition-all cursor-pointer overflow-hidden">
<div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🍱</div>
<h4 className="text-white font-bold text-lg mb-1">Food</h4>
<div className="flex items-center gap-2 text-xs font-mono text-on-surface-variant">
<span>400 Players</span>
<span className="w-1 h-1 bg-outline-variant rounded-full"></span>
<span className="text-tertiary">$50 Entry</span>
</div>
</div>
</div>
</div>
</section>
{/*  Live Prizes  */}
<section className="py-24 max-w-7xl mx-auto px-8">
<h2 className="text-4xl font-headline font-bold text-white mb-16 text-center">Featured <span className="text-tertiary">Jackpots</span></h2>
<div className="grid md:grid-cols-3 gap-8 items-center">
{/*  Daily  */}
<div className="p-8 rounded-3xl bg-surface-container-low border border-outline-variant/20 flex flex-col items-center text-center space-y-6">
<div className="text-tertiary font-mono uppercase tracking-[0.2em] text-sm">Daily Arena</div>
<div className="text-5xl font-headline font-black text-white">$500</div>
<div className="space-y-2">
<div className="text-xs font-mono text-on-surface-variant">STARTS IN</div>
<div className="text-xl font-mono font-bold text-white">02:45:12</div>
</div>
<div className="w-full h-px bg-outline-variant/10"></div>
<div className="flex justify-between w-full text-sm font-medium">
<span>Entry Fee</span>
<span className="text-tertiary font-mono">$5.00</span>
</div>
<button className="w-full py-4 rounded-xl border border-outline-variant/30 text-white font-bold hover:bg-surface-container-high transition-all">Register Now</button>
</div>
{/*  Weekly Featured  */}
<div className="p-10 rounded-[2.5rem] bg-gradient-to-b from-primary-container/20 to-surface-container-high border-2 border-primary-container shadow-2xl shadow-primary-container/20 flex flex-col items-center text-center space-y-8 relative overflow-hidden scale-110 z-10">
<div className="absolute top-0 right-0 p-4 bg-primary-container text-white text-xs font-bold font-headline uppercase tracking-tighter rounded-bl-2xl">High Stakes</div>
<div className="text-primary-fixed-dim font-mono uppercase tracking-[0.2em] text-sm">Weekly Championship</div>
<div className="text-7xl font-headline font-black text-white">$5,000</div>
<div className="space-y-2">
<div className="text-xs font-mono text-on-surface-variant">FINALS STARTING IN</div>
<div className="text-2xl font-mono font-bold text-primary-fixed-dim">12h 08m 44s</div>
</div>
<div className="w-full h-px bg-primary-container/20"></div>
<div className="flex justify-between w-full text-lg font-bold">
<span>Entry Fee</span>
<span className="text-primary-fixed-dim font-mono">$25.00</span>
</div>
<button className="w-full py-5 rounded-2xl bg-primary-container text-white font-bold text-lg shadow-xl shadow-primary-container/30 hover:scale-[1.02] transition-all">Join The Arena</button>
</div>
{/*  Custom Challenge  */}
<div className="p-8 rounded-3xl bg-surface-container-low border border-outline-variant/20 flex flex-col items-center text-center space-y-6">
<div className="text-secondary-fixed font-mono uppercase tracking-[0.2em] text-sm">Challenge Mode</div>
<div className="text-5xl font-headline font-black text-white">Custom</div>
<div className="space-y-2">
<div className="text-xs font-mono text-on-surface-variant">OPPONENTS</div>
<div className="text-xl font-mono font-bold text-white">1 VS 1</div>
</div>
<div className="w-full h-px bg-outline-variant/10"></div>
<div className="flex justify-between w-full text-sm font-medium">
<span>Host Fee</span>
<span className="text-secondary-fixed font-mono">$2.00</span>
</div>
<button className="w-full py-4 rounded-xl border border-outline-variant/30 text-white font-bold hover:bg-surface-container-high transition-all">Create Lobby</button>
</div>
</div>
</section>
{/*  Live Leaderboard  */}
<section className="py-24 bg-surface-container-lowest">
<div className="max-w-4xl mx-auto px-8">
<div className="text-center mb-12">
<h2 className="text-4xl font-headline font-bold text-white">Global Legends</h2>
<p className="text-on-surface-variant font-mono mt-2">REAL-TIME RANKINGS • LAST 24 HOURS</p>
</div>
<div className="bg-surface-container-low rounded-3xl border border-outline-variant/10 overflow-hidden">
<div className="p-4 grid grid-cols-12 text-xs font-mono uppercase tracking-widest text-on-surface-variant/60 border-b border-outline-variant/10">
<div className="col-span-2 px-4">Rank</div>
<div className="col-span-6">User</div>
<div className="col-span-4 text-right px-4">Winnings</div>
</div>
<div className="divide-y divide-outline-variant/5">
{/*  Top 1  */}
<div className="p-5 grid grid-cols-12 items-center bg-primary-container/5">
<div className="col-span-2 px-4">
<span className="w-8 h-8 rounded-lg bg-tertiary flex items-center justify-center text-on-tertiary font-bold">1</span>
</div>
<div className="col-span-6 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center font-bold text-white border border-tertiary">JD</div>
<div className="font-bold text-white">@CipherMaster</div>
</div>
<div className="col-span-4 text-right px-4 font-mono font-bold text-tertiary">$12,450.00</div>
</div>
{/*  Top 2  */}
<div className="p-5 grid grid-cols-12 items-center">
<div className="col-span-2 px-4">
<span className="w-8 h-8 rounded-lg bg-outline/20 flex items-center justify-center text-white font-bold">2</span>
</div>
<div className="col-span-6 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center font-bold text-white">AL</div>
<div className="font-bold text-white">@AlexLogic</div>
</div>
<div className="col-span-4 text-right px-4 font-mono font-bold text-white">$8,200.50</div>
</div>
{/*  Top 3  */}
<div className="p-5 grid grid-cols-12 items-center">
<div className="col-span-2 px-4">
<span className="w-8 h-8 rounded-lg bg-[#CD7F32]/20 flex items-center justify-center text-white font-bold">3</span>
</div>
<div className="col-span-6 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center font-bold text-white">SP</div>
<div className="font-bold text-white">@SaltyPretzel</div>
</div>
<div className="col-span-4 text-right px-4 font-mono font-bold text-white">$6,100.00</div>
</div>
{/*  Row 4-10 simplified  */}
<div className="p-4 grid grid-cols-12 items-center opacity-60">
<div className="col-span-2 px-4 font-mono">04</div>
<div className="col-span-6 text-white font-medium">@TriviaKnight</div>
<div className="col-span-4 text-right px-4 font-mono">$4,300.00</div>
</div>
<div className="p-4 grid grid-cols-12 items-center opacity-40">
<div className="col-span-2 px-4 font-mono">05</div>
<div className="col-span-6 text-white font-medium">@QuizWizard</div>
<div className="col-span-4 text-right px-4 font-mono">$2,800.00</div>
</div>
</div>
<div className="p-6 bg-surface-container-high/50 text-center">
<button className="text-primary-fixed-dim font-bold">Show Full Leaderboard</button>
</div>
</div>
</div>
</section>
{/*  Testimonials  */}
<section className="py-24 max-w-7xl mx-auto px-8">
<h2 className="text-4xl font-headline font-bold text-white mb-16">Winner <span className="text-secondary-fixed">Confessions</span></h2>
<div className="grid md:grid-cols-2 gap-8">
{/*  Testimonial 1  */}
<div className="p-8 rounded-3xl bg-surface-container-low border border-outline-variant/10 relative overflow-hidden">
<div className="flex gap-1 text-tertiary mb-4">
<span className="material-symbols-outlined" style={{fontVariationSettings: ''FILL' 1'}}>star</span>
<span className="material-symbols-outlined" style={{fontVariationSettings: ''FILL' 1'}}>star</span>
<span className="material-symbols-outlined" style={{fontVariationSettings: ''FILL' 1'}}>star</span>
<span className="material-symbols-outlined" style={{fontVariationSettings: ''FILL' 1'}}>star</span>
<span className="material-symbols-outlined" style={{fontVariationSettings: ''FILL' 1'}}>star</span>
</div>
<p className="text-lg text-white font-medium leading-relaxed italic">"I started with $10 thinking I'd just have some fun. Three weeks later, I've withdrawn over $2,400. The interface is surgical and the payouts are instant."</p>
<div className="mt-8 flex items-center justify-between">
<div className="flex items-center gap-4">
<img className="w-12 h-12 rounded-full object-cover" data-alt="portrait of a confident smiling young man against a soft blue studio background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6LsPd7HkpGF-xzv1lVw_YZH2nHk-IPfreVbtr-9AhsMi1GjzZAL5nlZaeiz91CSyZGmfCsezRjNv3P-FNfsAZdqOFI4Z_pwWj14kJzE-agRQhf5pvd3yYkFW7VnH9Gxx8RODmU_twq3AFL8jhyvvB1HRE1xYMKA-gZupyyUB8t7ltddNF_bsrNjqOiajb5B2bEoR6r1T7jT1Ufhm7HA1fATLT6EIFVwurk8Yc6Sg0zGby_rKPKq_UfBf2DUDnhm2_wIdIL9DK0g"/>
<div>
<div className="text-white font-bold">Marcus Chen</div>
<div className="text-xs text-on-surface-variant">Top Science Quizzer</div>
</div>
</div>
<div className="text-secondary-fixed font-mono font-bold">+$2,450.00 Won</div>
</div>
</div>
{/*  Testimonial 2  */}
<div className="p-8 rounded-3xl bg-surface-container-low border border-outline-variant/10 relative overflow-hidden">
<div className="flex gap-1 text-tertiary mb-4">
<span className="material-symbols-outlined" style={{fontVariationSettings: ''FILL' 1'}}>star</span>
<span className="material-symbols-outlined" style={{fontVariationSettings: ''FILL' 1'}}>star</span>
<span className="material-symbols-outlined" style={{fontVariationSettings: ''FILL' 1'}}>star</span>
<span className="material-symbols-outlined" style={{fontVariationSettings: ''FILL' 1'}}>star</span>
<span className="material-symbols-outlined" style={{fontVariationSettings: ''FILL' 1'}}>star</span>
</div>
<p className="text-lg text-white font-medium leading-relaxed italic">"Most trivia apps feel like games for kids. QuizifyPro feels like a high-stakes arena. It's intense, fair, and finally rewards you for being smart."</p>
<div className="mt-8 flex items-center justify-between">
<div className="flex items-center gap-4">
<img className="w-12 h-12 rounded-full object-cover" data-alt="vibrant professional woman smiling warmly with natural lighting and blurred urban greenery in background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpoth8HYRdKJt2B2PPJRc1w5N33tzEI-6Vtl5rM2Zk9e--QvpFLqpiM7gk3KfH2jLG2n_03EbnweM9IVYUndXE7lrl2MmSt_t6YNS7rbeywSg3sIDBT0jF9_h6FqajzBKBMxiSlRgaOdt4oMhpiuRPSvnqbi9je3Izt8ehoPPHT8i4UfcTYRjEKceCnZ5flLgV-da1pv-nBFBQGtpeL4BGvqDGyAvXCGL_lQkmQw66cYGhpesTAc71Yz6juqRqyKI7rNROEmbgTg"/>
<div>
<div className="text-white font-bold">Sarah Jenkins</div>
<div className="text-xs text-on-surface-variant">Daily Champion</div>
</div>
</div>
<div className="text-secondary-fixed font-mono font-bold">+$1,120.00 Won</div>
</div>
</div>
</div>
</section>
{/*  FAQ  */}
<section className="py-24 max-w-5xl mx-auto px-8">
<h2 className="text-4xl font-headline font-bold text-white mb-12 text-center">Frequently Asked <span className="text-primary-fixed-dim">Questions</span></h2>
<div className="grid md:grid-cols-2 gap-4">
<div className="space-y-4">
<div className="p-6 rounded-2xl bg-surface-container-high border-l-4 border-primary-container">
<h4 className="text-white font-bold mb-2 flex justify-between items-center">
                        Is my deposit secure?
                        <span className="material-symbols-outlined">expand_less</span>
</h4>
<p className="text-sm text-on-surface-variant leading-relaxed">Yes, all transactions are processed through AES-256 encrypted gateways and stored in cold wallets for maximum protection.</p>
</div>
<div className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/10">
<h4 className="text-white font-bold flex justify-between items-center">
                        How fast are withdrawals?
                        <span className="material-symbols-outlined">expand_more</span>
</h4>
</div>
</div>
<div className="space-y-4">
<div className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/10">
<h4 className="text-white font-bold flex justify-between items-center">
                        Is it legal in my country?
                        <span className="material-symbols-outlined">expand_more</span>
</h4>
</div>
<div className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/10">
<h4 className="text-white font-bold flex justify-between items-center">
                        Can I play for free?
                        <span className="material-symbols-outlined">expand_more</span>
</h4>
</div>
</div>
</div>
</section>
{/*  CTA Banner  */}
<section className="py-24 max-w-7xl mx-auto px-8">
<div className="relative rounded-[3rem] bg-gradient-to-r from-primary-container to-[#4F29CC] p-12 md:p-20 overflow-hidden text-center">
<div className="absolute inset-0 opacity-10">
<div className="absolute -top-10 -left-10 w-64 h-64 bg-white rounded-full blur-[100px]"></div>
<div className="absolute -bottom-10 -right-10 w-64 h-64 bg-tertiary rounded-full blur-[100px]"></div>
</div>
<div className="relative z-10 space-y-8">
<h2 className="text-5xl md:text-6xl font-headline font-black text-white leading-tight">Ready to Win?<br/>Start with just $2.</h2>
<div className="flex flex-col md:flex-row gap-4 justify-center items-center">
<a className="px-10 py-5 bg-white text-primary-container rounded-2xl font-black text-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2 justify-center" href="/register">
                        Create Free Account
                        <span className="material-symbols-outlined">trending_flat</span>
</a>
<span className="text-on-primary-container font-mono text-sm">NO CREDIT CARD REQUIRED FOR FREE TEIR</span>
</div>
</div>
</div>
</section>
{/*  Footer  */}
<footer className="bg-[#0A0A14] pt-24 pb-12 px-8 border-t border-outline-variant/10">
<div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-16">
<div className="space-y-6">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[#6C3EFF] text-3xl">bolt</span>
<span className="text-2xl font-bold text-[#6C3EFF] tracking-tight font-headline">QuizifyPro</span>
</div>
<p className="text-sm leading-relaxed max-w-xs">
                    The Electric Alchemist's Arena. Where knowledge is converted into digital gold. Competitive quizzing redefined for the modern era.
                </p>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center hover:bg-primary-container transition-colors cursor-pointer">
<span className="material-symbols-outlined text-white text-xl">share</span>
</div>
<div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center hover:bg-primary-container transition-colors cursor-pointer">
<span className="material-symbols-outlined text-white text-xl">hub</span>
</div>
</div>
</div>
<div>
<h5 className="text-white font-bold font-headline mb-6">Platform</h5>
<ul className="space-y-4 text-sm font-medium">
<li><a className="hover:text-primary-fixed-dim transition-colors" href="#">How it Works</a></li>
<li><a className="hover:text-primary-fixed-dim transition-colors" href="#">Categories</a></li>
<li><a className="hover:text-primary-fixed-dim transition-colors" href="#">Leaderboard</a></li>
<li><a className="hover:text-primary-fixed-dim transition-colors" href="#">Jackpots</a></li>
</ul>
</div>
<div>
<h5 className="text-white font-bold font-headline mb-6">Legal</h5>
<ul className="space-y-4 text-sm font-medium">
<li><a className="hover:text-primary-fixed-dim transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-primary-fixed-dim transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-primary-fixed-dim transition-colors" href="#">Cookie Policy</a></li>
<li><a className="hover:text-primary-fixed-dim transition-colors" href="#">Responsible Gaming</a></li>
</ul>
</div>
<div>
<h5 className="text-white font-bold font-headline mb-6">Support</h5>
<ul className="space-y-4 text-sm font-medium">
<li><a className="hover:text-primary-fixed-dim transition-colors" href="#">Help Center</a></li>
<li><a className="hover:text-primary-fixed-dim transition-colors" href="#">Contact Us</a></li>
<li><a className="hover:text-primary-fixed-dim transition-colors" href="#">Live Chat</a></li>
<li><a className="hover:text-primary-fixed-dim transition-colors" href="#">Discord Community</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto pt-12 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-8">
<div className="text-xs font-mono">
                © 2024 QUIZIFYPRO. THE ELECTRIC ALCHEMIST'S ARENA.
            </div>
<div className="flex items-center gap-6 grayscale opacity-50">
<span className="material-symbols-outlined text-3xl">credit_card</span>
<span className="material-symbols-outlined text-3xl">account_balance</span>
<span className="material-symbols-outlined text-3xl">savings</span>
<span className="material-symbols-outlined text-3xl">token</span>
</div>
</div>
</footer>
</body></html>
    </div>
  );
}
