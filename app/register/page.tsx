import React from 'react';

export default function Page() {
  return (
    <div className="w-full">
      <!DOCTYPE html>

<html className="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Register | QuizifyPro</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&amp;family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&amp;family=JetBrains+Mono:wght@400;500;700&amp;family=Manrope:wght@200..800&amp;display=swap" rel="stylesheet"/>
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
                        "label": ["Manrope"]
                    },
                    borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"},
                },
            },
        }
    </script>
<style>
        .glass-panel {
            background: rgba(18, 18, 31, 0.8);
            backdrop-filter: blur(20px);
            border-right: 1px solid rgba(108, 62, 255, 0.1);
        }
        .text-glow {
            text-shadow: 0 0 20px rgba(108, 62, 255, 0.4);
        }
        .ghost-border {
            border: 1px solid rgba(72, 68, 86, 0.2);
        }
        .ghost-border:focus-within {
            border: 1px solid rgba(139, 97, 255, 0.5);
            box-shadow: 0 0 10px rgba(108, 62, 255, 0.1);
        }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
    </style>
</head>
<body className="bg-background text-on-surface font-body min-h-screen selection:bg-primary-container selection:text-white">
<main className="flex min-h-screen overflow-hidden">
{/*  Left Panel: Brand Anchor (Split Screen)  */}
<section className="hidden lg:flex lg:w-1/2 relative flex-col justify-between p-12 bg-surface-container-lowest overflow-hidden">
{/*  Background Visual  */}
<div className="absolute inset-0 z-0">
<div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-primary-container/20 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-5%] left-[-5%] w-80 h-80 bg-secondary-container/10 rounded-full blur-[100px]"></div>
<img className="w-full h-full object-cover opacity-40 mix-blend-overlay" data-alt="Abstract futuristic gradient background with flowing purple and deep blue liquid textures and subtle grain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlqmVZNGfqWG1ssLcAcWn1Hk8xubBLH1PuO-GSrpIf3pYWEr_b535dJQndutQsFHlfD9GTP9rRlil8cpNqSE4Eqp5Yll6PbH2jwYek_21ILW9VX9TPtEkkfE9Wm6CjhRlqyZjc7L-_R2R-FnBZNsmlaPejLw1EaD4AkzCTbE_BN4CXLXLKsQvbCy1PkctPmzT-zOMUV5RP-NytC-8gqJ2RmVKqP7-d9W0FYBpx1J-m7elBF0nMqJdrlA7xxSnwDUx5wKajXgmAnQ"/>
</div>
{/*  Content  */}
<div className="relative z-10">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-primary-container rounded-lg flex items-center justify-center shadow-lg shadow-primary-container/20">
<span className="material-symbols-outlined text-white" style={{fontVariationSettings: ''FILL' 1'}}>bolt</span>
</div>
<span className="text-2xl font-headline font-bold text-white tracking-tighter">QuizifyPro</span>
</div>
</div>
<div className="relative z-10 max-w-lg">
<h1 className="text-6xl font-headline font-bold text-white leading-[1.1] mb-6">Master the arena of <span className="text-primary tracking-tight">Intelligence.</span></h1>
<p className="text-on-surface-variant text-lg leading-relaxed">Join a global community of elite thinkers, compete in high-stakes quizzes, and monetize your knowledge through the Electric Alchemist platform.</p>
</div>
<div className="relative z-10 flex items-center gap-6">
<div className="flex -space-x-3">
<img className="w-10 h-10 rounded-full border-2 border-surface-container-lowest" data-alt="Portrait of a professional young woman with a neutral background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJmTQMZ1onLYFhK9IzDd_myyr823j26-TbCO6oq35hXZY80SMrw93n8AewUXQgSiZlAVl_CBUPERMgGFz2VuEMM8e8OdOF0O6UfvHNclPzKE0XUyO2wJRgkoqAq7zdNEcCEzHFXJ6c4mFhKecJxn8aKsm6xvdRHBZv9887ve1BcNkXO2R5eCpI3ccY382UnxnGfArdr4urtgau81GBRjqMXvd-F_FJl40NADwbLowY4bmy_RVG_uxuNpifVq7Sx9vzPmd1eWHQhQ"/>
<img className="w-10 h-10 rounded-full border-2 border-surface-container-lowest" data-alt="Portrait of a smiling man with sharp features and modern hair" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1GzwgsDamgN-amfRx_rVL9KbOb24XXrIM7E-BK7nmF9LBsqiSw5nmY4PHN5ZWabJsAKGZH8H-aIdSeJSkTmZywOoYq7IFzk8p5bFPTGs4moiGmPX0aje4em8l6Iq2Kx2zNOIR0MNaY5X7Ty9FZ-R5K091rNwiR2ZNH8MOXyBl8ozjRV5Z4Q2rja7RyLuxmhsiKmaveimO2dEy7khNcXhiZ_Fmo8-eW1BFnVi2d_UmJ1jFNaw_bIyAR1y_TGX4uqpexmG8srE6dw"/>
<img className="w-10 h-10 rounded-full border-2 border-surface-container-lowest" data-alt="Portrait of a confident young person with glowing skin and urban background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6R69DUUhPJkWtF4HmQunCOF9SRDuhNcKb9NIiJIX6PPJjmgN8j-0GRUOyi2k_e7E_wqN9eZOMceHsBYPPoR5OXe0bqoO0OefWXfszXYARuvb6tJCHTnCPk1FQSgK_2p7ZjKdozMvnZoKJAsdCVlGyZE5fYm7Ralw43YnRPQ7BBcOUp6rOkPXIo94eY8egp1465od6LWCqGyWALohUKVVcoJG19dp3Z0fLwZY9TyAnUwNpvFtYUvFSYoQ6ahzWdUgvfjWHoo2TAw"/>
</div>
<p className="text-sm text-on-surface-variant/80 font-medium">Over <span className="text-white">12,000 players</span> joined this week.</p>
</div>
</section>
{/*  Right Panel: Register Form  */}
<section className="w-full lg:w-1/2 bg-surface flex flex-col items-center justify-start py-12 px-6 overflow-y-auto">
<div className="w-full max-w-md">
{/*  Progress Steps  */}
<nav className="flex items-center justify-between mb-12">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-primary-container text-white flex items-center justify-center text-xs font-bold">1</div>
<span className="text-sm font-medium text-white">Account</span>
</div>
<div className="h-px flex-1 mx-4 bg-outline-variant/30"></div>
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full border border-outline-variant/50 text-outline flex items-center justify-center text-xs font-bold">2</div>
<span className="text-sm font-medium text-outline">Verify</span>
</div>
<div className="h-px flex-1 mx-4 bg-outline-variant/30"></div>
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full border border-outline-variant/50 text-outline flex items-center justify-center text-xs font-bold">3</div>
<span className="text-sm font-medium text-outline">Play</span>
</div>
</nav>
<div className="mb-10">
<h2 className="text-3xl font-headline font-bold text-white mb-2">Create Your Account</h2>
<p className="text-on-surface-variant">Step into the future of editorial quizzing.</p>
</div>
<form className="space-y-6">
{/*  Full Name  */}
<div className="space-y-2">
<label className="text-sm font-medium text-on-surface-variant ml-1">Full Name</label>
<div className="ghost-border bg-surface-container-high rounded-xl p-3 flex items-center gap-3">
<span className="material-symbols-outlined text-outline text-[20px]">person</span>
<input className="bg-transparent border-none focus:ring-0 text-on-surface w-full placeholder:text-outline/50" placeholder="John Doe" type="text"/>
</div>
</div>
{/*  Username & Email Row  */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="space-y-2">
<label className="text-sm font-medium text-on-surface-variant ml-1">Username</label>
<div className="ghost-border bg-surface-container-high rounded-xl p-3 flex items-center gap-3 relative">
<span className="material-symbols-outlined text-outline text-[20px]">alternate_email</span>
<input className="bg-transparent border-none focus:ring-0 text-on-surface w-full placeholder:text-outline/50" placeholder="johndoe" type="text"/>
</div>
<div className="flex items-center gap-1.5 ml-1">
<span className="material-symbols-outlined text-secondary text-[12px]">check_circle</span>
<span className="text-[10px] text-secondary font-medium tracking-wide">CHECKING AVAILABILITY...</span>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-on-surface-variant ml-1">Email</label>
<div className="ghost-border bg-surface-container-high rounded-xl p-3 flex items-center gap-3">
<span className="material-symbols-outlined text-outline text-[20px]">mail</span>
<input className="bg-transparent border-none focus:ring-0 text-on-surface w-full placeholder:text-outline/50" placeholder="name@email.com" type="email"/>
</div>
</div>
</div>
{/*  Password  */}
<div className="space-y-2">
<label className="text-sm font-medium text-on-surface-variant ml-1">Password</label>
<div className="ghost-border bg-surface-container-high rounded-xl p-3 flex items-center gap-3">
<span className="material-symbols-outlined text-outline text-[20px]">lock</span>
<input className="bg-transparent border-none focus:ring-0 text-on-surface w-full placeholder:text-outline/50" placeholder="••••••••" type="password"/>
<span className="material-symbols-outlined text-outline cursor-pointer hover:text-white transition-colors">visibility</span>
</div>
{/*  Strength Indicator  */}
<div className="px-1 pt-1">
<div className="flex justify-between items-center mb-1.5">
<span className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">Strength</span>
<span className="text-[10px] text-primary font-bold uppercase tracking-widest">Strong</span>
</div>
<div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden flex gap-1">
<div className="h-full bg-primary-container w-1/4 rounded-full"></div>
<div className="h-full bg-primary-container w-1/4 rounded-full"></div>
<div className="h-full bg-primary-container w-1/4 rounded-full"></div>
<div className="h-full bg-surface-container-highest w-1/4 rounded-full"></div>
</div>
</div>
</div>
{/*  Confirm Password  */}
<div className="space-y-2">
<label className="text-sm font-medium text-on-surface-variant ml-1">Confirm Password</label>
<div className="ghost-border bg-surface-container-high rounded-xl p-3 flex items-center gap-3">
<span className="material-symbols-outlined text-outline text-[20px]">verified_user</span>
<input className="bg-transparent border-none focus:ring-0 text-on-surface w-full placeholder:text-outline/50" placeholder="••••••••" type="password"/>
</div>
</div>
{/*  DOB  */}
<div className="space-y-2">
<label className="text-sm font-medium text-on-surface-variant ml-1">Date of Birth</label>
<div className="grid grid-cols-3 gap-3">
<select className="ghost-border bg-surface-container-high rounded-xl p-3 text-sm text-on-surface focus:ring-0 appearance-none">
<option>Day</option>
<option>01</option>
<option>02</option>
</select>
<select className="ghost-border bg-surface-container-high rounded-xl p-3 text-sm text-on-surface focus:ring-0 appearance-none">
<option>Month</option>
<option>January</option>
<option>February</option>
</select>
<select className="ghost-border bg-surface-container-high rounded-xl p-3 text-sm text-on-surface focus:ring-0 appearance-none">
<option>Year</option>
<option>1995</option>
<option>1996</option>
</select>
</div>
</div>
{/*  Country  */}
<div className="space-y-2">
<label className="text-sm font-medium text-on-surface-variant ml-1">Country</label>
<div className="ghost-border bg-surface-container-high rounded-xl p-3 flex items-center gap-3 relative">
<span className="material-symbols-outlined text-outline text-[20px]">public</span>
<select className="bg-transparent border-none focus:ring-0 text-on-surface w-full appearance-none">
<option value="us">United States</option>
<option value="uk">United Kingdom</option>
<option value="ca">Canada</option>
<option value="de">Germany</option>
</select>
<span className="material-symbols-outlined text-outline pointer-events-none">expand_more</span>
</div>
</div>
{/*  Referral  */}
<details className="group">
<summary className="flex items-center gap-2 cursor-pointer list-none text-sm font-medium text-primary hover:text-primary-container transition-colors">
<span className="material-symbols-outlined text-[18px] group-open:rotate-180 transition-transform">add_circle</span>
                            Have a referral code?
                        </summary>
<div className="mt-3 ghost-border bg-surface-container-high rounded-xl p-3 flex items-center gap-3">
<span className="material-symbols-outlined text-outline text-[20px]">card_giftcard</span>
<input className="bg-transparent border-none focus:ring-0 text-on-surface w-full placeholder:text-outline/50" placeholder="Enter code" type="text"/>
</div>
</details>
{/*  Terms  */}
<div className="flex items-start gap-3 px-1">
<input className="mt-1 w-5 h-5 rounded border-outline-variant bg-surface-container-high text-primary-container focus:ring-offset-background focus:ring-primary-container" id="terms" type="checkbox"/>
<label className="text-sm text-on-surface-variant leading-relaxed" htmlFor="terms">
                            I agree to <a className="text-white hover:underline underline-offset-4" href="#">Terms of Service</a> and <a className="text-white hover:underline underline-offset-4" href="#">Privacy Policy</a>
</label>
</div>
{/*  Submit Button  */}
<a className="w-full bg-gradient-to-r from-primary-container to-inverse-primary p-4 rounded-xl text-white font-bold text-lg flex items-center justify-center gap-2 shadow-[0_0_24px_rgba(108,62,255,0.3)] hover:shadow-[0_0_32px_rgba(108,62,255,0.5)] transition-all active:scale-[0.98] text-center" href="/user/user/dashboard">
                        Create Account
                        <span className="material-symbols-outlined">arrow_forward</span>
                    </a>
{/*  Footer Link  */}
<p className="text-center text-on-surface-variant text-sm pt-4">
                        Already have an account? 
                        <a className="text-primary font-bold hover:underline underline-offset-4 ml-1" href="/login">Sign in</a>
</p>
</form>
</div>
</section>
</main>
{/*  Support Floating Action  */}
<div className="fixed bottom-8 right-8 z-50">
<button className="flex items-center gap-2 bg-surface-container-high/80 backdrop-blur-xl p-3 px-5 rounded-full border border-outline-variant/20 text-on-surface hover:bg-surface-container-highest transition-colors shadow-2xl">
<span className="material-symbols-outlined text-primary">contact_support</span>
<span className="text-sm font-bold">Support</span>
</button>
</div>
</body></html>
    </div>
  );
}
