# ⚡ QuizifyPro Next - Premium Quizzing Platform

This is the **Next.js 15+** implementation of QuizifyPro, featuring the cutting-edge **Tailwind CSS v4** architecture. This version transitions the project from static HTML into a high-performance, component-based application with a unified App Router structure.

---

## 🎨 Visual Showcase

### 🚀 Landing & Unified Auth
| Global Landing | Login Hub | Secure Registration |
| :---: | :---: | :---: |
| ![Landing](/screenshot/quizifypro_landing_page.png) | ![Login](/screenshot/quizifypro_login_page.png) | ![Register](/screenshot/quizifypro_register_page.png) |

### 🎮 Player Experience (App Router)
| Player Dashboard | Live Leaderboard | Daily Challenges |
| :---: | :---: | :---: |
| ![Dashboard](/screenshot/quizifypro_user_dashboard.png) | ![Leaderboard](/screenshot/leaderboard.png) | ![Daily Quiz](/screenshot/daily_quiz_challenge.png) |

### ⚒️ Admin Command Center
| Operations Hub | Analytics Overview | User Management |
| :---: | :---: | :---: |
| ![Admin Hub](/screenshot/admin_dashboard_home_1.png) | ![Analytics](/screenshot/admin_dashboard_home_2.png) | ![Users](/screenshot/admin_user_management_1.png) |

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (Next-gen CSS-first engine)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Icons**: Material Symbols Outlined
- **Fonts**: Space Grotesk, Manrope, JetBrains Mono

---

## 🔥 Key Features (Next.js Edition)

- **Persistent Layouts**: Optimized `layout.tsx` for Admin and User panels to prevent re-renders on navigation.
- **Client-Side Navigation**: Lightning-fast transitions using Next.js `<Link />` and optimized routing.
- **Responsive Sidebar**: State-driven mobile drawer with `useState` and glass-morphic design.
- **Tailwind v4 Optimized**: Utilizes the new `@import "tailwindcss"` engine for faster builds and modern CSS features.
- **Centralized Assets**: All UI demonstrations and project screens moved to `/public` for efficient static serving.

---

## 📂 Project Architecture

```bash
quizify-pro-next/
├── app/
│   ├── (root)/           # Landing, Login, Register (RootLayout)
│   ├── admin/            # Administrative Panel (AdminLayout)
│   │   ├── dashboard/    # Main Stats
│   │   └── quizzes/      # Management
│   └── user/             # Player Application (UserLayout)
│       ├── dashboard/    # Overview
│       └── wallet/       # Financials
├── public/
│   └── screenshot/       # High-fidelity project assets
├── globals.css           # Tailwind v4 engine entry
└── next.config.ts        # Next.js platform settings
```

---

## 🚀 Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---
© 2024 QuizifyPro. The Next-Gen Electric Alchemist Edition.
