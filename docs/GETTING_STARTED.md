# Sapphire OS V1 - Getting Started Guide

**Quick Start**: Setup your development environment and begin Phase 0 (Project Setup)

---

## ✅ Prerequisites

### System Requirements
- **OS**: Windows, macOS, or Linux
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher (or yarn/pnpm)
- **Git**: v2.30.0 or higher
- **Code Editor**: VS Code (recommended)

### Knowledge
- React and TypeScript fundamentals
- Next.js (app router preferred)
- Tailwind CSS
- Component-based design
- REST API integration

### Tools to Install
```bash
# Node.js (from https://nodejs.org)
node --version  # Should be v18+
npm --version   # Should be v9+

# Git
git --version   # Should be v2.30+

# VS Code extensions (recommended)
- ESLint (dbaeumer.vscode-eslint)
- Prettier (esbenp.prettier-vscode)
- Tailwind CSS IntelliSense (bradlc.vscode-tailwindcss)
- Thunder Client or Postman (for API testing)
```

---

## 🚀 Phase 0: Project Setup (3-4 Days)

### Step 1: Create Next.js Project (2 hours)

```bash
# Navigate to your Dev folder
cd c:\Users\akeem\Dev\My Enterprise

# Create new Next.js project
npx create-next-app@latest sapphire-os-v1-app \
  --typescript \
  --tailwind \
  --app \
  --eslint \
  --src-dir \
  --import-alias '@/*' \
  --no-git

# Navigate into project
cd sapphire-os-v1-app
```

**What gets created**:
- Next.js 16 with App Router
- TypeScript enabled
- Tailwind CSS configured
- ESLint configured
- TypeScript path aliases (@/*)
- Basic project structure

### Step 2: Configure Tailwind CSS with Design System (1 hour)

```bash
# Update tailwind.config.ts with design system colors
```

Create/update `tailwind.config.ts`:

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        sapphire: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        // Deep Navy (Background)
        navy: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        // Emerald (Success/Accent)
        emerald: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#134e4a',
          950: '#052e16',
        },
        // Medal Colors
        gold: '#fcd34d',
        silver: '#e5e7eb',
        bronze: '#d97706',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      fontSize: {
        xs: ['0.6875rem', { lineHeight: '1.3' }],   // 11px
        sm: ['0.75rem', { lineHeight: '1.4' }],     // 12px
        base: ['1rem', { lineHeight: '1.6' }],      // 16px
        lg: ['1.125rem', { lineHeight: '1.6' }],    // 18px
        xl: ['1.25rem', { lineHeight: '1.5' }],     // 20px
        '2xl': ['1.75rem', { lineHeight: '1.4' }],  // 28px
        '3xl': ['2.25rem', { lineHeight: '1.3' }],  // 36px
        '4xl': ['3rem', { lineHeight: '1.2' }],     // 48px
      },
      spacing: {
        px: '1px',
        0: '0px',
        0.5: '2px',
        1: '4px',
        1.5: '6px',
        2: '8px',
        2.5: '10px',
        3: '12px',
        3.5: '14px',
        4: '16px',
        5: '20px',
        6: '24px',
        7: '28px',
        8: '32px',
        9: '36px',
        10: '40px',
        12: '48px',
        14: '56px',
        16: '64px',
        20: '80px',
        24: '96px',
        28: '112px',
        32: '128px',
        36: '144px',
        40: '160px',
        44: '176px',
        48: '192px',
        52: '208px',
        56: '224px',
        60: '240px',
        64: '256px',
        72: '288px',
        80: '320px',
        96: '384px',
      },
      borderRadius: {
        none: '0px',
        xs: '2px',
        sm: '4px',
        DEFAULT: '8px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '20px',
        '3xl': '24px',
        full: '9999px',
      },
      boxShadow: {
        xs: '0 1px 2px rgba(0, 0, 0, 0.05)',
        sm: '0 4px 6px rgba(0, 0, 0, 0.1)',
        md: '0 10px 15px rgba(0, 0, 0, 0.1)',
        lg: '0 20px 25px rgba(0, 0, 0, 0.15)',
        xl: '0 25px 50px rgba(0, 0, 0, 0.25)',
      },
      animation: {
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        spin: 'spin 1s linear infinite',
        bounce: 'bounce 1s infinite',
      },
      transitionDuration: {
        150: '150ms',
        300: '300ms',
        500: '500ms',
        700: '700ms',
      },
      transitionTimingFunction: {
        in: 'cubic-bezier(0.4, 0, 1, 1)',
        out: 'cubic-bezier(0.4, 0, 0.2, 1)',
        'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}

export default config
```

### Step 3: Install & Configure Radix UI (1.5 hours)

```bash
# Install Radix UI core components
npm install @radix-ui/react-primitive @radix-ui/react-dialog @radix-ui/react-dropdown-menu \
  @radix-ui/react-separator @radix-ui/react-tabs @radix-ui/react-slot \
  @radix-ui/react-toast @radix-ui/react-popover @radix-ui/react-tooltip \
  @radix-ui/react-checkbox @radix-ui/react-radio-group @radix-ui/react-switch \
  @radix-ui/react-scroll-area @radix-ui/react-accordion

# Install icons
npm install lucide-react

# Install form handling
npm install react-hook-form zod @hookform/resolvers

# Install utilities
npm install clsx class-variance-authority sonner axios
```

### Step 4: Setup Environment Variables (30 minutes)

Create `.env.local`:

```env
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:5000/api/v1
NEXT_PUBLIC_API_TIMEOUT=30000

# Auth
NEXT_PUBLIC_AUTH_DOMAIN=sapphire.auth
NEXT_PUBLIC_AUTH_CLIENT_ID=your_client_id_here

# App Configuration
NEXT_PUBLIC_APP_NAME=Sapphire OS
NEXT_PUBLIC_APP_VERSION=1.0.0
NEXT_PUBLIC_ENVIRONMENT=development

# Analytics (optional)
NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id

# Sentry (optional)
NEXT_PUBLIC_SENTRY_AUTH_TOKEN=your_sentry_token
```

Create `.env.example` (commit this):

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api/v1
NEXT_PUBLIC_API_TIMEOUT=30000
NEXT_PUBLIC_AUTH_DOMAIN=sapphire.auth
NEXT_PUBLIC_AUTH_CLIENT_ID=
NEXT_PUBLIC_APP_NAME=Sapphire OS
NEXT_PUBLIC_APP_VERSION=1.0.0
NEXT_PUBLIC_ENVIRONMENT=development
NEXT_PUBLIC_ANALYTICS_ID=
NEXT_PUBLIC_SENTRY_AUTH_TOKEN=
```

### Step 5: Create Folder Structure (30 minutes)

```bash
# Create necessary directories
mkdir -p src/components/{layout,auth,home,learn,lesson,coach,community,profile,forms,ui,global}
mkdir -p src/lib/{api,hooks,utils,constants,types}
mkdir -p src/contexts
mkdir -p src/styles
mkdir -p public/{images,icons}
```

### Step 6: Setup ESLint & Prettier (30 minutes)

Create `.prettierrc.json`:

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "jsxSingleQuote": false,
  "arrowParens": "always"
}
```

Create `.prettierignore`:

```
node_modules
.next
dist
build
coverage
```

### Step 7: Create Base CSS & Globals (1 hour)

Create `src/styles/globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* CSS Custom Properties */
:root {
  --color-sapphire-600: #2563eb;
  --color-navy-900: #111827;
  --color-emerald-600: #16a34a;
  
  --timing-quick: 150ms;
  --timing-standard: 300ms;
  --timing-slow: 500ms;
  
  --ease-out: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Dark Mode by Default */
html {
  @apply dark;
}

/* Base Styles */
body {
  @apply bg-navy-950 text-navy-100;
}

a {
  @apply text-sapphire-600 hover:text-sapphire-500 transition-colors;
}

button,
input,
select,
textarea {
  font-family: inherit;
}

/* Smooth Scrolling */
html {
  scroll-behavior: smooth;
}

/* Focus Visible Styles */
:focus-visible {
  @apply outline-2 outline-offset-2 outline-sapphire-600;
}

/* Selection Styles */
::selection {
  @apply bg-sapphire-600 text-white;
}

/* Remove Default Mobile Styles */
input,
button,
select,
textarea {
  @apply appearance-none;
}

/* Fix iOS Button Styling */
button {
  @apply cursor-pointer;
}
```

Create `src/styles/animations.css`:

```css
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes celebration {
  0% {
    transform: scale(0.8) rotate(-10deg);
    opacity: 1;
  }
  100% {
    transform: scale(1.2) rotate(10deg);
    opacity: 0;
  }
}

@keyframes shimmer {
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
}

.animate-slide-up {
  animation: slideUp 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

.animate-slide-down {
  animation: slideDown 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

.animate-fade-in {
  animation: fadeIn 300ms ease-out;
}

.animate-celebration {
  animation: celebration 600ms cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

### Step 8: Create Type Definitions (1 hour)

Create `src/lib/types/index.ts`:

```typescript
// User Types
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  level: number;
  totalXP: number;
  currentStreak: number;
  longestStreak: number;
  joinDate: string;
  isOnboarded: boolean;
}

export interface AuthResponse {
  token: string;
  refreshToken: string;
  user: User;
  expiresIn: number;
}

// Lesson Types
export interface Lesson {
  id: string;
  skillId: string;
  title: string;
  description: string;
  duration: number;
  order: number;
  sections: LessonSection[];
}

export interface LessonSection {
  id: string;
  type: 'introduction' | 'guided_practice' | 'exercise' | 'reflection';
  content: string;
}

export interface Exercise {
  id: string;
  lessonId: string;
  problem: string;
  type: 'text' | 'multiple_choice' | 'numeric';
  hints: Hint[];
  correctAnswer: string;
  explanation: string;
  xpReward: number;
}

export interface Hint {
  id: string;
  text: string;
  level: number;
}

// Skill Types
export interface Skill {
  id: string;
  name: string;
  description: string;
  status: 'completed' | 'in_progress' | 'locked';
  mastery: number;
  xpEarned: number;
  medal?: 'gold' | 'silver' | 'bronze';
  prerequisites: string[];
  estimatedTime: number;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
  };
  timestamp: string;
}

// Form Types
export interface LoginFormData {
  email: string;
  password: string;
}

export interface SignUpFormData {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
}
```

### Step 9: Setup API Client (1 hour)

Create `src/lib/api/client.ts`:

```typescript
import axios, { AxiosError, AxiosInstance } from 'axios';
import { ApiResponse } from '@/lib/types';

const apiClient: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: parseInt(process.env.NEXT_PUBLIC_API_TIMEOUT || '30000'),
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor: Add auth token
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor: Handle token refresh
apiClient.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && originalRequest) {
      const refreshToken = localStorage.getItem('refreshToken');

      if (refreshToken) {
        try {
          const response = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/auth/refresh`,
            { refreshToken }
          );

          const { token } = response.data.data;
          localStorage.setItem('authToken', token);

          if (originalRequest.headers) {
            originalRequest.headers.Authorization = `Bearer ${token}`;
          }

          return apiClient(originalRequest);
        } catch (refreshError) {
          localStorage.removeItem('authToken');
          localStorage.removeItem('refreshToken');
          window.location.href = '/auth/login';
        }
      }
    }

    return Promise.reject(error);
  }
);

export default apiClient;
```

### Step 10: Test Installation (30 minutes)

```bash
# Build the project
npm run build

# Start dev server
npm run dev
```

Visit `http://localhost:3000` and verify:
- Page loads without errors
- Styles are applied (dark background)
- No console errors

### Step 11: Initialize Git & CI/CD (1 hour)

```bash
# Initialize git
git init
git config user.name "Your Name"
git config user.email "your@email.com"

# Create .gitignore (if not present)
# Should include: node_modules, .next, .env.local, dist

# Initial commit
git add .
git commit -m "Initial: Next.js project setup with Tailwind & Radix UI"

# Create GitHub repo and push
# git remote add origin https://github.com/your-org/sapphire-os-v1-app.git
# git push -u origin main
```

### Step 12: Setup CI/CD Pipeline

Create `.github/workflows/ci.yml`:

```yaml
name: CI

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]

jobs:
  build:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [18.x, 20.x]

    steps:
      - uses: actions/checkout@v3
      
      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v3
        with:
          node-version: ${{ matrix.node-version }}
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Lint
        run: npm run lint
      
      - name: Build
        run: npm run build
      
      - name: Test
        run: npm run test -- --passWithNoTests
```

### Phase 0 Checklist

- [ ] Node.js v18+ installed and verified
- [ ] Next.js 16 project created
- [ ] Tailwind CSS configured with design system
- [ ] Radix UI installed
- [ ] ESLint & Prettier configured
- [ ] Environment variables setup
- [ ] Folder structure created
- [ ] Type definitions created
- [ ] API client setup
- [ ] Build successful
- [ ] Dev server runs without errors
- [ ] Git initialized and configured
- [ ] GitHub repo created
- [ ] CI/CD pipeline working

---

## 📋 Next Steps (Phase 1)

After Phase 0 completion, move to **Phase 1: Core Layout & Navigation**

See [IMPLEMENTATION_ROADMAP.md](IMPLEMENTATION_ROADMAP.md) - Phase 1 section for detailed tasks.

Key components to build:
- BottomNav
- AppLayout
- Header
- Safe area support

---

## 🆘 Troubleshooting

### Issue: Port 3000 already in use
```bash
# Use different port
npm run dev -- -p 3001
```

### Issue: TypeScript errors
```bash
# Check for correct tsconfig
npm run build  # Full type check
```

### Issue: Tailwind styles not applying
```bash
# Rebuild Tailwind
npm run build

# Clear Next.js cache
rm -rf .next
npm run dev
```

### Issue: Module not found errors
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

---

## 📚 Additional Setup Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind Setup](https://tailwindcss.com/docs/installation)
- [Radix UI Getting Started](https://radix-ui.com/docs/primitives/overview/introduction)
- [React Hook Form](https://react-hook-form.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

---

**Status**: Phase 0 Setup Complete  
**Next Phase**: Phase 1 - Core Layout & Navigation (see [IMPLEMENTATION_ROADMAP.md](IMPLEMENTATION_ROADMAP.md))
