import React from 'react';

export default function Page() {
  return (
    <div className="w-full">
      <!DOCTYPE html>

<html className="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Login | QuizifyPro</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&amp;family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400&amp;family=JetBrains+Mono:wght@400;700&amp;family=Manrope:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
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
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
            vertical-align: middle;
        }
        .glass-card {
            background: rgba(18, 18, 31, 0.8);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(108, 62, 255, 0.2);
        }
        .bg-electric-gradient {
            background: linear-gradient(135deg, #0A0A14 0%, #1D0061 100%);
        }
        .btn-primary-gradient {
            background: linear-gradient(to right, #6C3EFF, #4F29CC);
        }
        .form-glow:focus-within {
            box-shadow: 0 0 15px rgba(108, 62, 255, 0.3);
        }
    </style>
</head>
<body className="bg-background text-on-background font-body min-h-screen flex flex-col">
{/*  TopAppBar suppressed for login journey per Shell Visibility Rule  */}
<main className="flex-grow flex flex-col md:flex-row min-h-screen">
{/*  Left Side: Visual/Branding  */}
<section className="hidden md:flex md:w-1/2 bg-electric-gradient relative overflow-hidden p-12 flex-col justify-between items-center">
{/*  Decorative Light Leak  */}
<div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-primary-container/20 rounded-full blur-[120px]"></div>
<div className="z-10 text-center flex flex-col items-center">
<div className="flex items-center gap-3 mb-4">
<span className="material-symbols-outlined text-primary-container text-5xl" style={{fontVariationSettings: ''FILL' 1'}}>bolt</span>
<h1 className="text-4xl font-headline font-bold tracking-tighter text-white">QuizifyPro</h1>
</div>
<h2 className="text-5xl font-headline font-bold text-white mb-6">Welcome Back</h2>
</div>
{/*  Testimonial Stacks  */}
<div className="z-10 w-full max-w-md space-y-6">
<div className="glass-card p-6 rounded-xl transform -rotate-1 translate-x-4">
<p className="text-on-surface-variant italic mb-3">"The most intense competitive quizzing experience I've ever had. Truly next-level stuff."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-surface-container-highest overflow-hidden">
<img className="w-full h-full object-cover" data-alt="minimalist avatar profile picture of a young professional man with a friendly smile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFBLCyj38Sx4437bhJRiHfCW2k8P186Dg1455kirltv7X0fRLjZdTOU5Z64iReXHG8RffaaG_HIBW5SN-nJe04rQOL3ctbk2P5qv0L2iC2GWX1ALwOKayO-T1gFz3qD4PbZwfHeP-DiL4ssW2hL7UKxvrWgSScuxHXn9vsgPym2WkuulcpMpQ-l9_KG0plkzKCo7sMw0sqS9eIW9F7kX0q6dRWyPcwJALsBWKWsQrSwUnWXKCxzRyoN1-_oihEg9reRu_7CaQEmA"/>
</div>
<span className="text-sm font-bold text-white">Alex Rivera</span>
</div>
</div>
<div className="glass-card p-6 rounded-xl transform rotate-1 -translate-x-4">
<p className="text-on-surface-variant italic mb-3">"Monetizing my knowledge was never this sleek. The interface is just pure art."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-surface-container-highest overflow-hidden">
<img className="w-full h-full object-cover" data-alt="minimalist avatar profile picture of a woman with glasses and confident expression" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGbg1M_oDqRqUXrKtviau9m6kt2vkKFAjZvWAt6NAX5Mk5RxkglTFJgP46ycqv8VyIppsb4royiwpwDrm64asSvWC8BM9I7a4UVtIvBqgfhdX2Nr-J6_fjiyKJfNGDBEp6yuYhW_5DQ_msrolnGXTpmnKOrFoFaaPlGdhQzKupofm0QFCLHDXIAOaZ0caJ90XydlM3iZUALndv4BI3P8DLhBuUa74_e_2MK-GF0QjQgkSu8ffTIyFAjSlnlVql9EMqZC_GWKurnw"/>
</div>
<span className="text-sm font-bold text-white">Sarah Chen</span>
</div>
</div>
<div className="glass-card p-6 rounded-xl transform -rotate-1">
<p className="text-on-surface-variant italic mb-3">"I came for the quizzes, stayed for the community and the incredible UI."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-surface-container-highest overflow-hidden">
<img className="w-full h-full object-cover" data-alt="minimalist avatar profile picture of a young gamer person with modern accessories" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCA1sBdBBIr8kNv_TvxnRFPPXJmc3nePQLK8r5vFZ6WPu0M6AkGq3mMFcMcpl0zUDGZ0kHcNNuIJJNuO4KpW8xEqDN-mkMZ-I1RFtKmWZKCC4h6UMxijkcz8P2qaPJdd5rEezsibOKndYWa-vEcb0gWZSHcYNcL7FpYpFLKNHQW4YOFoBp8ly9rn1S6QKSJXpgMF3svf5rYuAq9UcTozIrLdMvECuGzazn8m9LbC-D3Uoxwf8tC6lR9Bn2XW02jxdsYFjQIX3vl1g"/>
</div>
<span className="text-sm font-bold text-white">Jordan Hayes</span>
</div>
</div>
</div>
<div className="z-10">
<div className="px-6 py-3 bg-surface-container-lowest/50 backdrop-blur-md rounded-full border border-outline-variant/20 flex items-center gap-2">
<span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
<span className="font-label text-sm font-medium tracking-wide">
<span className="font-bold text-white">52,847</span> players online now
                    </span>
</div>
</div>
</section>
{/*  Right Side: Login Form  */}
<section className="w-full md:w-1/2 bg-surface-container-lowest flex items-center justify-center p-8">
<div className="w-full max-w-md">
<div className="mb-10">
<h3 className="text-3xl font-headline font-bold text-white mb-2">Sign in to QuizifyPro</h3>
<p className="text-on-surface-variant font-body">Enter your credentials to access your arena.</p>
</div>
<form className="space-y-6">
{/*  Email  */}
<div className="space-y-2 group">
<label className="text-xs font-bold uppercase tracking-widest text-outline" htmlFor="email">Email Address</label>
<div className="relative flex items-center transition-all duration-300 rounded-lg bg-[#1A1A2E] border border-outline-variant/10 form-glow">
<span className="material-symbols-outlined absolute left-4 text-outline group-focus-within:text-primary-container">mail</span>
<input className="w-full bg-transparent border-none py-4 pl-12 pr-4 text-white focus:ring-0 placeholder:text-outline/50" id="email" placeholder="name@example.com" type="email"/>
</div>
</div>
{/*  Password  */}
<div className="space-y-2 group">
<label className="text-xs font-bold uppercase tracking-widest text-outline" htmlFor="password">Password</label>
<div className="relative flex items-center transition-all duration-300 rounded-lg bg-[#1A1A2E] border border-outline-variant/10 form-glow">
<span className="material-symbols-outlined absolute left-4 text-outline group-focus-within:text-primary-container">lock</span>
<input className="w-full bg-transparent border-none py-4 pl-12 pr-12 text-white focus:ring-0 placeholder:text-outline/50" id="password" placeholder="••••••••" type="password"/>
<button className="absolute right-4 text-outline hover:text-white" type="button">
<span className="material-symbols-outlined">visibility</span>
</button>
</div>
</div>
{/*  Meta Row  */}
<div className="flex items-center justify-between">
<label className="flex items-center gap-2 cursor-pointer group">
<input className="rounded border-outline-variant/20 bg-surface-container-high text-primary-container focus:ring-primary-container focus:ring-offset-surface-container-lowest transition-all" type="checkbox"/>
<span className="text-sm text-on-surface-variant group-hover:text-on-surface">Remember me</span>
</label>
<a className="text-sm font-bold text-primary-container hover:text-primary transition-colors" href="/user/forgot_password_success">Forgot Password?</a>
</div>
{/*  Primary Action  */}
<a className="w-full py-4 rounded-xl btn-primary-gradient text-white font-bold tracking-wide shadow-[0_0_20px_rgba(108,62,255,0.3)] hover:shadow-[0_0_30_rgba(108,62,255,0.5)] transition-all active:scale-[0.98] text-center block" href="/user/user/dashboard">
                        Sign In
                    </a>
{/*  Divider  */}
<div className="flex items-center gap-4 py-4">
<div className="h-[1px] flex-grow bg-outline-variant/20"></div>
<span className="text-xs font-bold uppercase tracking-widest text-outline">or continue with</span>
<div className="h-[1px] flex-grow bg-outline-variant/20"></div>
</div>
{/*  Social Buttons  */}
<div className="grid grid-cols-2 gap-4">
<button className="flex items-center justify-center gap-3 py-3 rounded-xl border border-outline-variant/20 bg-transparent hover:bg-surface-container-low transition-all group" type="button">
<img alt="Google" className="w-5 h-5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjlAZOxZHBtWzT8Buke4pEXKu7NoissAESJFt-95oLIHQ4PFBEQ3hdnPQiirSOHg6URtHIhFynI2CXCUrWoD3h6CuLnbebGA3efB2bJG43bvN2HH9T8Liy7_u6WctdP73F5mZtBg7Ew7jXABmImqgBFycZRrArcybo12kg40O6NB-SP7PPtPu_6sqEOVecOyHAY8ALapReGE1-1KCEHvM9NPiAv88Z-yz_LpjnUmZbEhmMaMxO7ovK16k99d7EYfgekODO-HjdSw"/>
<span className="text-sm font-bold text-on-surface-variant group-hover:text-white">Google</span>
</button>
<button className="flex items-center justify-center gap-3 py-3 rounded-xl border border-outline-variant/20 bg-transparent hover:bg-surface-container-low transition-all group" type="button">
<img alt="Facebook" className="w-5 h-5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8jOlJSarPIiqYSWxb4MJvJLO8wzEypxElUE5buZ9L-gdY-iG7hsHB8f4UbD3XogVMkLAqYXwLcwhAheS4hj2AldoSxu2Vdd0W48oJ9Di4ZKYCmQfZcmArugxD8MSwfuQ9k-vQfjoIL-gGSfHQYLIQ2qsKBl7HbQTZ_kbtFzSSw8UhxFnOT63Zus3WNMrk6SI3ZbfefsZ0hNIddCFPO9TSX19_FWt822-i_RuLvbYVHwnJ3OzZBZ-MmmpJRPnuvHALM4g1y954iw"/>
<span className="text-sm font-bold text-on-surface-variant group-hover:text-white">Facebook</span>
</button>
</div>
<div className="text-center pt-8">
<a className="text-sm text-on-surface-variant hover:text-white transition-colors" href="/register">
                            Don't have an account? <span className="font-bold text-primary-container ml-1">Create one free →</span>
</a>
</div>
</form>
</div>
</section>
</main>
{/*  Footer Component from JSON  */}
<footer className="bg-[#0A0A14] w-full py-8 mt-auto">
<div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-lg font-black text-[#6C3EFF]">QuizifyPro</div>
<div className="flex flex-wrap justify-center gap-6">
<a className="font-['DM_Sans'] text-sm tracking-wide text-[#A0A0C0] hover:text-[#6C3EFF] transition-all underline-offset-4 hover:underline" href="#">Privacy Policy</a>
<a className="font-['DM_Sans'] text-sm tracking-wide text-[#A0A0C0] hover:text-[#6C3EFF] transition-all underline-offset-4 hover:underline" href="#">Terms of Service</a>
<a className="font-['DM_Sans'] text-sm tracking-wide text-[#A0A0C0] hover:text-[#6C3EFF] transition-all underline-offset-4 hover:underline" href="#">System Status</a>
</div>
<div className="font-['DM_Sans'] text-sm tracking-wide text-[#A0A0C0]">© 2024 QuizifyPro. The Electric Alchemist Edition.</div>
</div>
</footer>
</body></html>
    </div>
  );
}
