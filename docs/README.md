# 🎓 Sapphire OS V1 - Redesign Documentation

Complete design and implementation specifications for the Sapphire OS V1 redesign: a modern, mobile-first AI-powered learning platform for CSEC exam preparation.

**Status**: 📋 Design Phase Complete → Ready for Implementation  
**Version**: 1.0  
**Last Updated**: June 2024

---

## 📚 Documentation Structure

This folder contains comprehensive specifications across multiple dimensions:

### 🎨 Design & UX

- **[DESIGN_SYSTEM.md](DESIGN_SYSTEM.md)** (500+ lines)
  - Complete visual design specifications
  - Color palette (Sapphire Blue, Deep Navy, Emerald Green)
  - Typography system (Inter, 8-level type scale)
  - Spacing system (4px base unit)
  - Components (buttons, inputs, cards, badges)
  - Accessibility guidelines (WCAG AA/AAA)

- **[NAVIGATION_IA.md](NAVIGATION_IA.md)** (400+ lines)
  - Complete information architecture
  - 5-tab bottom navigation system
  - Route structure and URL patterns
  - Deep linking support
  - Gesture and keyboard navigation
  - Mobile safe areas & notches

### 📋 Product & Features

- **[PRODUCT_SPECIFICATION.md](PRODUCT_SPECIFICATION.md)** (600+ lines)
  - Detailed product overview
  - All user flows (onboarding, learning, community)
  - Screen mockups with ASCII diagrams
  - Gamification systems (streaks, XP, medals, achievements)
  - Lesson structure & format
  - AI Coach behavior specifications
  - Success metrics

### 🏗️ Technical Architecture

- **[COMPONENT_ARCHITECTURE.md](COMPONENT_ARCHITECTURE.md)** (800+ lines)
  - 50+ component specifications
  - Hierarchy and dependencies
  - Props and features for each
  - Folder structure (Next.js app router)
  - 10 component categories
  - Implementation patterns

- **[IMPLEMENTATION_ROADMAP.md](IMPLEMENTATION_ROADMAP.md)** (500+ lines)
  - 12-phase implementation plan
  - Weekly sprint breakdown
  - Task checklist for each phase
  - Dependency graph
  - Effort estimation (8-12 weeks)
  - Success criteria

- **[API_INTEGRATION_GUIDE.md](API_INTEGRATION_GUIDE.md)** (400+ lines)
  - Complete API endpoint reference
  - Auth endpoints (login, signup, reset)
  - User endpoints (profile, stats, dashboard)
  - Subject & skill endpoints
  - Lesson endpoints with exercise checking
  - Coach/chat endpoints
  - Gamification endpoints
  - Challenge & leaderboard endpoints
  - Notes endpoints
  - Error handling patterns
  - Integration examples

---

## 🎯 Quick Reference

### MVP Scope
- **Subjects**: CSEC Mathematics, CSEC English Language (2 subjects only)
- **Users**: 14-19 year old students preparing for CSEC exams
- **Platforms**: Mobile-first (iOS/Android), with tablet/desktop support
- **Timeline**: 8-12 weeks with 2-3 engineers

### Design Philosophy
- **Modern**: Contemporary design like Spotify/Discord/Linear
- **Premium**: High-end aesthetic, not childish
- **Dark-First**: Optimized for long study sessions
- **Mobile-First**: All features work perfectly on phones
- **AI-Native**: Personalization powered by Sapphire Lite Engine

### Key Features
- 5-tab bottom navigation (Home, Learn, Coach, Community, Profile)
- Gamification: Streaks, XP, medals, achievements, leaderboards
- Adaptive lessons: 5-10 minute bite-sized lessons
- AI Coach: Guided tutoring, not answer generation
- Skill tree progression with prerequisites and mastery levels
- Community leaderboards and challenges

---

## 🚀 Getting Started

### For Developers

1. **Start with Design System** ([DESIGN_SYSTEM.md](DESIGN_SYSTEM.md))
   - Understand color palette, typography, spacing
   - Review component patterns
   - Note accessibility requirements

2. **Understand Product** ([PRODUCT_SPECIFICATION.md](PRODUCT_SPECIFICATION.md))
   - Review all user flows
   - Study screen mockups
   - Understand gamification systems

3. **Learn Architecture** ([COMPONENT_ARCHITECTURE.md](COMPONENT_ARCHITECTURE.md))
   - Study component hierarchy
   - Review folder structure
   - Understand dependencies

4. **Check Implementation Plan** ([IMPLEMENTATION_ROADMAP.md](IMPLEMENTATION_ROADMAP.md))
   - Review your phase's tasks
   - Understand dependencies
   - Check success criteria

5. **Reference API Guide** ([API_INTEGRATION_GUIDE.md](API_INTEGRATION_GUIDE.md))
   - Study endpoints your components need
   - Review request/response formats
   - Learn error handling patterns

6. **Navigate Info Architecture** ([NAVIGATION_IA.md](NAVIGATION_IA.md))
   - Understand routing structure
   - Study tab navigation
   - Learn about deep linking

### For Designers

1. Review [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md) for:
   - Complete visual specifications
   - Component library
   - Accessibility guidelines
   - Animation specifications

2. Study [PRODUCT_SPECIFICATION.md](PRODUCT_SPECIFICATION.md) for:
   - Screen mockups
   - User flows
   - Interaction patterns

3. Check [NAVIGATION_IA.md](NAVIGATION_IA.md) for:
   - Information architecture
   - Route structure
   - Navigation patterns

### For Product Managers

1. Read [PRODUCT_SPECIFICATION.md](PRODUCT_SPECIFICATION.md)
2. Review [IMPLEMENTATION_ROADMAP.md](IMPLEMENTATION_ROADMAP.md)
3. Check success metrics in both documents
4. Study [API_INTEGRATION_GUIDE.md](API_INTEGRATION_GUIDE.md) for backend dependencies

---

## 🎨 Design System Quick Links

### Colors
```
Primary:     Sapphire Blue (#2563EB)
Secondary:   Deep Navy (#111827)
Accent:      Emerald Green (#10B981)
Success:     Emerald (#10B981)
Warning:     Amber (#F59E0B)
Error:       Red (#EF4444)

Medals:      Gold (#FCD34D), Silver (#E5E7EB), Bronze (#D97706)
```

### Typography
```
Font: Inter (Poppins fallback)
Scale: Hero (3rem) → Tiny (0.6875rem)
Weight: Regular (400) to Bold (700)
```

### Spacing
```
Base Unit: 4px
Common: 8px, 16px, 24px, 32px, 48px
```

### Breakpoints
```
Mobile:  < 640px (primary)
Tablet:  640px - 1024px
Desktop: > 1024px
```

---

## 📱 Navigation Structure

### 5 Main Tabs
```
🏠 Home       → Dashboard with personalized info
🌳 Learn      → Skill tree and lesson selection
🎯 Coach      → AI-powered chat tutoring
👥 Community  → Leaderboards, challenges, groups
👤 Profile    → Stats, achievements, settings
```

### Key Routes
```
Authentication:
  /auth/login
  /auth/signup
  /auth/forgot-password

Onboarding:
  /onboarding/welcome
  /onboarding/goals
  /onboarding/subjects
  /onboarding/assessment
  /onboarding/behavior
  /onboarding/roadmap

Main App:
  /home                    (dashboard)
  /learn                   (skill tree)
  /learn/:subjectId        (subject view)
  /lesson/:lessonId        (lesson interface)
  /coach                   (chat)
  /community/leaderboard   (leaderboards)
  /profile                 (user profile)
  /settings                (preferences)
```

---

## 🎮 Gamification Systems

### XP System
- **Lesson completion**: +20 XP
- **Exercise correct**: +5 XP
- **Quiz perfect**: +50 XP
- **Daily goal**: +100 bonus XP
- **Streak bonus** (7+ days): 2x multiplier

### Streak System
- 🔥 Daily counter resets after 24 hours inactivity
- Milestone bonuses: 7, 14, 30, 60, 100+ days
- 2x XP multiplier after 7 days
- Loss notification before reset

### Medal System
- 🥉 **Bronze**: 50%+ mastery (initial progress)
- 🥈 **Silver**: 70%+ mastery (improving expertise)
- 🥇 **Gold**: 90%+ mastery (true expertise)

### Achievements
- **Consistency**: Week Warrior, Month Master, Century Streak
- **Performance**: Perfect Score, Skill Master, All Gold
- **Progression**: Knowledge Seeker, Scholar, Expert, Virtuoso

### Leaderboards
- Weekly, monthly, all-time rankings
- Subject-specific leaderboards
- Challenges and competitions

---

## 🧩 Component Categories

### Layout (3)
- BottomNav, AppLayout, Header

### Auth (4)
- LoginForm, SignUpForm, ForgotPasswordForm, ResetPasswordForm

### Home (5)
- StreakCard, XPProgressCard, ContinueLearningCard, CoachRecommendationCard, MilestoneCard

### Learn (5)
- SubjectSelector, SkillTree, SkillCard, LessonList, SkillDetailPanel

### Lesson (7)
- LessonHeader, LessonIntroduction, GuidedPractice, ExerciseWidget, FeedbackDisplay, HintDisplay, LessonCompletion

### Coach (3)
- CoachChat, CoachMessage, QuickActionButtons

### Community (5)
- Leaderboard, LeaderboardEntry, ChallengeCard, StudyGroupCard, CompetitionBanner

### Profile (8)
- ProfileHeader, StatsCard, SubjectProgressCard, AchievementGrid, AchievementBadge, NotesList, NoteCard, SettingsMenu

### Forms (6)
- Form, FormField, FormInput, FormSelect, FormCheckbox, FormTextarea

### UI Base (20+)
- Button, Input, Card, Badge, ProgressBar, Modal, Tabs, Skeleton, Avatar, Accordion, Tooltip, Checkbox, Toggle, Slider, SelectDropdown, etc.

---

## 📊 Implementation Phases

| Phase | Name | Duration | Key Deliverables |
|-------|------|----------|------------------|
| 0 | Setup | 3-4 days | Project initialized, tooling configured |
| 1 | Layout & Nav | 5-6 days | Navigation working, responsive |
| 2 | Auth | 6-7 days | Full auth flow, onboarding |
| 3 | Home | 5-6 days | Dashboard with real data |
| 4 | Learn | 6-7 days | Skill tree interactive |
| 5 | Lesson | 7-8 days | Complete lesson experience |
| 6 | Coach | 5-6 days | Chat interface working |
| 7 | Community | 5-6 days | Leaderboards functional |
| 8 | Profile | 6-7 days | All profile features |
| 9 | Gamification | 5-6 days | XP, streaks, medals |
| 10 | Polish | 5-7 days | Performance, accessibility |
| 11 | Testing | 4-5 days | QA, bug fixes, launch ready |
| 12 | Launch | 2-3 days | Production deployment |

**Total**: 8-12 weeks with 2-3 engineers (4-6 weeks with parallelization)

---

## 🛠️ Technology Stack

### Frontend
- **Framework**: Next.js 16 with App Router
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4
- **Components**: Radix UI (unstyled, accessible)
- **Icons**: Lucide React
- **Forms**: react-hook-form + Zod
- **State**: React Context API
- **HTTP Client**: axios or fetch
- **Data Fetching**: TanStack React Query
- **Animations**: Framer Motion (optional)
- **Testing**: Jest + React Testing Library

### Backend (Existing)
- **Language**: Python 3.11
- **Framework**: Flask 3.0.0
- **ORM**: SQLAlchemy
- **Database**: PostgreSQL
- **Cache**: Redis
- **AI**: Sapphire Lite Engine (proprietary)

### Deployment
- **Frontend**: Vercel
- **Backend**: Docker + render.com (or similar)
- **Images**: GitHub Container Registry
- **Analytics**: Mixpanel/Amplitude (optional)
- **Error Tracking**: Sentry

---

## 📋 Checklist Before Starting

### Before Phase 0 (Setup)
- [ ] Read all specifications (especially DESIGN_SYSTEM.md & PRODUCT_SPECIFICATION.md)
- [ ] Review team roles and responsibilities
- [ ] Set up development environment
- [ ] Create GitHub repo and organization
- [ ] Set up communication channels (Slack, etc.)
- [ ] Plan sprint schedule

### Phase 0 Setup Checklist
- [ ] Next.js 16 project created with TypeScript
- [ ] Tailwind CSS 4 configured with design system colors
- [ ] Radix UI installed and configured
- [ ] ESLint + Prettier configured
- [ ] Git repo initialized with CI/CD
- [ ] Vercel project created
- [ ] Environment variables documented
- [ ] Build/dev scripts working
- [ ] Initial tests configured

---

## 🎯 Success Criteria

### Functionality
- ✅ All 5 navigation tabs working
- ✅ Full auth flow (signup → onboarding → app)
- ✅ Skill tree interactive and progress tracking
- ✅ Complete lesson experience with exercises
- ✅ AI Coach chat functional
- ✅ Leaderboards showing correctly
- ✅ Gamification systems integrated
- ✅ Profile & analytics working

### Quality
- ✅ Lighthouse score: 90+
- ✅ Accessibility: WCAG AA compliant
- ✅ Test coverage: 85%+
- ✅ Performance: <3s FCP, <5s LCP
- ✅ No console errors/warnings
- ✅ Works offline (PWA)

### Design
- ✅ Matches design system exactly
- ✅ Responsive on all breakpoints
- ✅ Smooth animations (150-700ms)
- ✅ Dark mode by default
- ✅ Touch-friendly (48px+ targets)

### User Experience
- ✅ Intuitive navigation
- ✅ Fast page transitions
- ✅ Clear feedback on actions
- ✅ Error handling graceful
- ✅ Onboarding smooth

---

## 🤝 Contributing

### For New Team Members

1. **Start Here**: Read this README completely
2. **Then Read**: DESIGN_SYSTEM.md (understand visual foundation)
3. **Then Read**: PRODUCT_SPECIFICATION.md (understand user experience)
4. **Then Read**: Your phase's section in IMPLEMENTATION_ROADMAP.md
5. **Reference**: COMPONENT_ARCHITECTURE.md for your components
6. **Reference**: API_INTEGRATION_GUIDE.md for endpoints you need
7. **Reference**: NAVIGATION_IA.md for routing questions

### Code Style
- Use TypeScript for type safety
- Follow ESLint/Prettier formatting
- Component-based architecture
- Props interfaces documented
- Custom hooks for logic
- Tests alongside components

---

## 📞 Support & Questions

### Documentation by Type

**"How do I style a component?"**
→ See DESIGN_SYSTEM.md

**"What's the user flow for X?"**
→ See PRODUCT_SPECIFICATION.md

**"How is Y page laid out?"**
→ See NAVIGATION_IA.md

**"What components does Z page use?"**
→ See COMPONENT_ARCHITECTURE.md

**"When should I implement X?"**
→ See IMPLEMENTATION_ROADMAP.md

**"What endpoint does X use?"**
→ See API_INTEGRATION_GUIDE.md

---

## 📝 Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | June 2024 | Initial complete specification suite |

---

## 🚀 Next Steps

### To Begin Implementation

1. **Setup Phase (Week 1)**
   - Follow Phase 0 in IMPLEMENTATION_ROADMAP.md
   - Initialize Next.js project
   - Configure design system

2. **Layout & Navigation (Week 1-2)**
   - Follow Phase 1 in IMPLEMENTATION_ROADMAP.md
   - Build BottomNav, AppLayout, Header
   - Reference NAVIGATION_IA.md for routing

3. **Continue Through Phases**
   - Each phase builds on previous
   - Follow task checklists
   - Use success criteria to validate

### Key Files to Create

```
src/
├─ app/
│  ├─ (auth)/
│  ├─ (app)/
│  ├─ (onboarding)/
│  ├─ layout.tsx
│  └─ page.tsx
│
├─ components/
│  ├─ layout/
│  ├─ auth/
│  ├─ home/
│  ├─ learn/
│  ├─ lesson/
│  ├─ coach/
│  ├─ community/
│  ├─ profile/
│  ├─ forms/
│  └─ ui/
│
├─ lib/
│  ├─ api/
│  ├─ hooks/
│  ├─ utils/
│  ├─ constants/
│  └─ types/
│
├─ contexts/
│  ├─ AuthContext.tsx
│  ├─ ThemeContext.tsx
│  └─ LearningContext.tsx
│
└─ styles/
   ├─ globals.css
   ├─ animations.css
   └─ variables.css
```

---

## 📚 Additional Resources

- [Next.js 16 Documentation](https://nextjs.org/docs)
- [Tailwind CSS 4 Documentation](https://tailwindcss.com/docs)
- [Radix UI Documentation](https://radix-ui.com)
- [React 19 Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

---

**Status**: Ready for Phase 0 (Setup) to begin  
**Maintained By**: Development Team  
**Last Reviewed**: June 2024

---

> **Legend**: 📱 Mobile | 💻 Desktop | 🎯 All Devices | 🚀 Performance | ♿ Accessibility | 🎨 Design | 🔧 Technical
