import React from 'react';

export default function Page() {
  return (
    <div className="w-full">
      <!DOCTYPE html>

<html className="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Forgot Password | QuizifyPro</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&amp;family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400&amp;family=JetBrains+Mono:wght@400;700&amp;family=Manrope:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
          darkMode: "class",
          theme: {
            extend: {
              colors: {
                "surface-container": "#1f1f29",
                "on-background": "#e4e1f0",
                "surface-container-highest": "#34343f",
                "on-tertiary-container": "#4c3e00",
                "inverse-on-surface": "#302f3b",
                "on-primary-container": "#ece4ff",
                "surface": "#12121d",
                "on-primary-fixed-variant": "#4900d5",
                "surface-container-low": "#1b1b25",
                "surface-container-high": "#292934",
                "surface-tint": "#cbbeff",
                "primary": "#cbbeff",
                "on-tertiary-fixed-variant": "#544600",
                "on-primary": "#320099",
                "inverse-surface": "#e4e1f0",
                "background": "#12121d",
                "on-secondary-fixed": "#002114",
                "on-surface": "#e4e1f0",
                "tertiary-fixed-dim": "#e9c400",
                "primary-fixed-dim": "#cbbeff",
                "outline-variant": "#484456",
                "error-container": "#93000a",
                "secondary-container": "#00e5a0",
                "inverse-primary": "#622ff5",
                "on-error": "#690005",
                "tertiary": "#e9c400",
                "on-tertiary-fixed": "#221b00",
                "on-error-container": "#ffdad6",
                "tertiary-fixed": "#ffe16d",
                "tertiary-container": "#c9a900",
                "surface-container-lowest": "#0d0d17",
                "surface-variant": "#34343f",
                "secondary-fixed-dim": "#00e29e",
                "secondary": "#6cffbf",
                "surface-dim": "#12121d",
                "outline": "#938ea2",
                "on-tertiary": "#3a3000",
                "on-secondary-fixed-variant": "#005236",
                "on-secondary-container": "#006141",
                "secondary-fixed": "#47ffb8",
                "error": "#ffb4ab",
                "primary-fixed": "#e6deff",
                "primary-container": "#6c3eff",
                "on-surface-variant": "#cac3d9",
                "on-primary-fixed": "#1d0061",
                "on-secondary": "#003824",
                "surface-bright": "#393844"
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
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .glass-card {
            background: rgba(18, 18, 31, 0.8);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(108, 62, 255, 0.2);
        }
        .radial-glow {
            background: radial-gradient(circle at center, rgba(108, 62, 255, 0.15) 0%, rgba(10, 10, 20, 0) 70%);
        }
    </style>
</head>
<body className="bg-[#0A0A14] text-on-background font-body min-h-screen flex flex-col selection:bg-primary-container selection:text-white overflow-x-hidden">
{/*  Top Navigation (Shell Implementation)  */}
<header className="bg-[#12121D]/80 backdrop-blur-xl text-[#6C3EFF] font-['Space_Grotesk'] font-bold tracking-tight fixed top-0 w-full z-50 border-b border-[#484456]/20 shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
<div className="flex justify-between items-center px-6 py-4 w-full max-w-7xl mx-auto">
<div className="text-2xl font-display text-white tracking-tighter">
                QuizifyPro
            </div>
<div className="flex items-center gap-6">
<button className="text-[#A0A0C0] hover:text-white transition-colors duration-300 flex items-center gap-2">
<span className="material-symbols-outlined" data-icon="language">language</span>
</button>
<button className="text-[#A0A0C0] hover:text-white transition-colors duration-300 flex items-center gap-2">
<span className="material-symbols-outlined" data-icon="help_outline">help_outline</span>
<span className="hidden md:inline">Support</span>
</button>
</div>
</div>
</header>
{/*  Main Content Canvas  */}
<main className="flex-grow flex items-center justify-center pt-24 pb-12 px-6 relative overflow-hidden">
{/*  Ambient Background Decoration  */}
<div className="absolute inset-0 radial-glow pointer-events-none"></div>
<div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 relative z-10">
{/*  INITIAL STATE: Forgot Password  */}
<section className="w-full max-w-[480px] shrink-0">
<div className="glass-card rounded-xl p-8 md:p-10 flex flex-col items-center text-center shadow-2xl scale-100 transition-transform duration-500">
<div className="w-20 h-20 rounded-full bg-primary-container/20 flex items-center justify-center mb-8 ring-1 ring-primary-container/40">
<span className="material-symbols-outlined text-primary-container text-4xl" data-icon="lock_reset" style={{fontVariationSettings: ''FILL' 1'}}>lock_reset</span>
</div>
<h1 className="font-headline text-3xl font-bold text-white mb-3 tracking-tight">Forgot Password?</h1>
<p className="text-on-surface-variant text-base mb-10 max-w-[280px]">Enter your email and we'll send you a reset link</p>
<form className="w-full space-y-6">
<div className="relative text-left">
<label className="block text-xs font-bold uppercase tracking-widest text-[#A0A0C0] mb-2 ml-1" htmlFor="email">Email Address</label>
<div className="group relative">
<input className="w-full bg-[#1A1A2E] border-none rounded-lg py-4 px-5 text-white placeholder-[#484456] focus:ring-2 focus:ring-primary-container/50 transition-all duration-300" id="email" placeholder="name@example.com" type="email"/>
<div className="absolute inset-y-0 right-4 flex items-center pointer-events-none opacity-40">
<span className="material-symbols-outlined" data-icon="mail">mail</span>
</div>
</div>
</div>
<button className="w-full bg-gradient-to-r from-primary-container to-[#4F29CC] text-white font-bold py-4 rounded-lg shadow-[0_4px_20px_rgba(108,62,255,0.4)] hover:shadow-[0_6px_24px_rgba(108,62,255,0.6)] active:scale-[0.98] transition-all duration-300" type="button">
                            Send Reset Link
                        </button>
</form>
<div className="mt-10 pt-8 border-t border-[#484456]/20 w-full">
<a className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors duration-300 group" href="/login">
<span className="material-symbols-outlined text-sm group-hover:-translate-x-1 transition-transform" data-icon="arrow_back">arrow_back</span>
<span className="font-medium">Back to Login</span>
</a>
</div>
</div>
</section>
{/*  Separator for visual context in demo  */}
<div className="hidden lg:block h-32 w-px bg-gradient-to-b from-transparent via-[#484456]/40 to-transparent"></div>
{/*  SUCCESS STATE: Check Email  */}
<section className="w-full max-w-[480px] shrink-0">
<div className="glass-card rounded-xl p-8 md:p-10 flex flex-col items-center text-center shadow-2xl border-secondary/20">
<div className="w-20 h-20 rounded-full bg-secondary-container/10 flex items-center justify-center mb-8 ring-1 ring-secondary-container/30">
<span className="material-symbols-outlined text-secondary-fixed-dim text-4xl" data-icon="mark_email_read" style={{fontVariationSettings: ''FILL' 1'}}>mark_email_read</span>
</div>
<h1 className="font-headline text-3xl font-bold text-white mb-3 tracking-tight">Check Your Email!</h1>
<p className="text-on-surface-variant text-base mb-10">We sent a reset link to <span className="text-white font-mono font-medium">ahmed@gmail.com</span></p>
<div className="w-full space-y-4">
<button className="w-full bg-secondary-container text-on-secondary-container font-bold py-4 rounded-lg hover:bg-secondary-fixed transition-all duration-300 flex items-center justify-center gap-2 group" type="button">
<span className="material-symbols-outlined text-lg" data-icon="open_in_new">open_in_new</span>
                            Open Gmail
                        </button>
<button className="w-full bg-surface-container-high text-on-surface font-bold py-4 rounded-lg border border-[#484456]/20 hover:bg-surface-bright transition-all duration-300 flex items-center justify-center gap-2" type="button">
<span className="material-symbols-outlined text-lg" data-icon="refresh">refresh</span>
                            Resend Email
                        </button>
</div>
<div className="mt-10 pt-8 border-t border-[#484456]/20 w-full">
<p className="text-on-surface-variant text-sm">
                            Wrong email? <a className="text-secondary-fixed-dim hover:underline underline-offset-4 ml-1" href="#">Try again</a>
</p>
</div>
</div>
</section>
</div>
</main>
{/*  Footer (Shell Implementation)  */}
<footer className="bg-[#0A0A14] w-full py-8 mt-auto tonal-shift bg-[#1B1B25]">
<div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-lg font-black text-[#6C3EFF]">
                QuizifyPro
            </div>
<div className="flex gap-8 font-['DM_Sans'] text-sm tracking-wide">
<a className="text-[#A0A0C0] hover:text-[#6C3EFF] transition-all underline-offset-4 hover:underline" href="#">Privacy Policy</a>
<a className="text-[#A0A0C0] hover:text-[#6C3EFF] transition-all underline-offset-4 hover:underline" href="#">Terms of Service</a>
<a className="text-[#A0A0C0] hover:text-[#6C3EFF] transition-all underline-offset-4 hover:underline" href="#">System Status</a>
</div>
<div className="text-[#A0A0C0] font-['DM_Sans'] text-xs">
                © 2024 QuizifyPro. The Electric Alchemist Edition.
            </div>
</div>
</footer>
{/*  Image for decorative context (Hidden but required by protocol)  */}
<div className="hidden">
<img alt="decorative" data-alt="smooth atmospheric gradient background with deep navy and electric violet hues subtle grain texture and cinematic lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHvZLI_BsKQPdN_R95uDXa46gE6IwEoQILGsEUMKQLWeXYXHR-y_8uJcIvTUrFvcTv4ioEPoy7X1rg1LXLzUaYqHJOrCoD-pe_xCfy77WUZ_0doaecU0rR9RUZBdvd3pOiqiIotYTLx1M9AYltFvnyfys1AQygHhyBIiCNUeGdlr7WpKFPmhKhSBZVCZZlrivsUOXkJXJNayKyr0iwhaRQA9TFtHY39NIc5PlvxCzaA4LlkGEm24FEp739z2CB2X7W1AKcRAuT4g"/>
</div>
</body></html>
    </div>
  );
}
