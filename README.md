# 🎓 SmartEdLabs Admin Dashboard

A high-fidelity, data-driven administrative command center designed for modern educational platform management. Built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**, featuring a premium "Royal Blue" aesthetic with deep focus on accessibility and performance.

---

## 🚀 Overview

SmartEdLabs Admin provides platform administrators with powerful tools to manage institutional growth, AI resource allocation, course curricula, and live educational sessions.

---

## 🏗️ Core Modules

### 🧠 AI Control Center
Comprehensive governance over AI operations:
- **Model Configuration**: Support for GPT-4o, Claude 3.5 Sonnet, and GPT-3.5 Turbo.
- **Token Management**: Real-time tracking of token consumption and cost projections.
- **Institute Governance**: Set granular usage limits and threshold alerts per institutional entity.
- **Session Intelligence**: Deep-dive into interactive AI session logs and student-AI interaction trails.

### 💳 Billing & Financial Management
Streamlined B2B and B2C financial operations:
- **Institutional Invoicing**: Dynamic invoice generation for registered education entities.
- **Subscription Engine**: Manage monthly, quarterly, and annual plans with active state tracking.
- **Revenue Analytics**: Visual trends for monthly recurring revenue (MRR) and plan distribution.
- **Audit Trails**: Detailed history of financial adjustments and platform-wide billing events.

### 📚 Course Management System (CMS)
Dynamic curriculum architecture:
- **Course Wizard**: Multi-step onboarding flow for basic details, modules, and lessons.
- **Visibility Control**: Granular publishing options (Global vs. Specific Institutes).
- **Audit Logs**: Version control and activity tracking for all curriculum changes.
- **Engagement Analytics**: Monitor course performance and student completion rates.

### 🎥 Live Class Subsystem
Orchestrate real-time learning:
- **Session Scheduler**: Integrated calendar and time-slot management for tutors.
- **Multi-Platform Support**: Seamless coordination for Zoom, Google Meet, Teams, and In-App sessions.
- **Attendance Tracking**: Real-time monitoring of student participation and session status (Ongoing/Completed/Cancelled).

### 📊 Advanced Reports & Analytics
Data-driven decision making:
- **Operational Insights**: High-level metrics for student growth, tutor activity, and revenue.
- **Interactive Charts**: Responsive performance visualizations using optimized SVG/Canvas rendering.
- **Export Tools**: One-click data export for platform-wide reports.

---

## 🔧 Technology Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) + [ShadCN UI](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Quality Control**: [Biome](https://biomejs.dev/) (Linting & Formatting)
- **Deployment**: Optimized for Vercel and production-ready standard CI/CD.

---

## 🛠️ Development

### Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Code Quality

The project uses `Biome` for lightning-fast linting and formatting.

```bash
# Run linting and formatting check
npx @biomejs/biome check ./

# Auto-fix fixable issues
npx @biomejs/biome check --write ./
```

---

## 🎨 Design Principles

- **Royal Blue Aesthetic**: Professional, deep-tone design system for high-focus administrative tasks.
- **Accessibility First**: Standards-compliant `a11y` attributes (fail-safe pre-commit hooks).
- **Micro-interactions**: Smooth Framer-Motion style transitions and hover-triggered states.
- **Responsive Geometry**: Fully adaptive layouts for both complex desktop dashboards and quick mobile reviews.

---

## 📄 License

[MIT](./LICENSE)
