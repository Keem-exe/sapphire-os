# Sapphire OS V1 - Implementation Roadmap

**Version**: 1.0  
**Timeline**: 8-12 weeks  
**Team Size**: 2-3 engineers  
**MVP Scope**: CSEC Mathematics & English only

---

## 📅 Phase Breakdown

### Phase 0: Project Setup (Week 1)
**Goal**: Initialize project, configure tooling, and setup infrastructure

#### Tasks
- [ ] Create Next.js 16 project with TypeScript
- [ ] Setup Tailwind CSS 4 + custom configuration
- [ ] Install & configure Radix UI
- [ ] Setup authentication (auth0, Supabase, or custom)
- [ ] Configure API client (axios/fetch wrapper)
- [ ] Setup environment variables (.env.local)
- [ ] Configure ESLint & Prettier
- [ ] Setup GitHub repo & CI/CD pipeline
- [ ] Configure Vercel deployment
- [ ] Setup analytics (optional: Mixpanel/Amplitude)

#### Deliverables
- [ ] Ready-to-use Next.js project
- [ ] Build/dev scripts working
- [ ] Git repository initialized
- [ ] CI/CD pipeline configured
- [ ] Documentation: GETTING_STARTED.md

#### Time Estimate: 3-4 days

---

### Phase 1: Core Layout & Navigation (Week 1-2)
**Goal**: Build foundational layout, bottom navigation, and routing

#### Tasks
- [ ] Implement root layout (RootLayout.tsx)
- [ ] Create AppLayout with bottom navigation
- [ ] Build BottomNav component (5 tabs)
- [ ] Setup app group route structure
- [ ] Implement Header component
- [ ] Add safe area support (notch handling)
- [ ] Setup page transitions
- [ ] Implement responsive design (mobile-first)
- [ ] Create layout tests

#### Components to Build
- [ ] BottomNav.tsx
- [ ] AppLayout.tsx
- [ ] Header.tsx
- [ ] SafeAreaProvider.tsx

#### Deliverables
- [ ] Functional layout with navigation
- [ ] All 5 tabs navigable
- [ ] Responsive on mobile/tablet/desktop
- [ ] Page transitions working
- [ ] Tests: 80%+ coverage

#### Time Estimate: 5-6 days

---

### Phase 2: Authentication (Week 2-3)
**Goal**: Implement user authentication and onboarding

#### Tasks
- [ ] Setup auth provider (context or library)
- [ ] Implement login page
- [ ] Implement signup page
- [ ] Implement forgot/reset password flow
- [ ] Setup protected routes (middleware)
- [ ] Implement onboarding flow (5 steps)
- [ ] Create onboarding pages
- [ ] Persist user session (localStorage/cookies)
- [ ] Implement logout
- [ ] Add error handling

#### Pages to Build
- [ ] /auth/login
- [ ] /auth/signup
- [ ] /auth/forgot-password
- [ ] /auth/reset-password
- [ ] /onboarding/welcome
- [ ] /onboarding/goals
- [ ] /onboarding/subjects
- [ ] /onboarding/assessment
- [ ] /onboarding/behavior
- [ ] /onboarding/roadmap

#### Forms to Build
- [ ] LoginForm
- [ ] SignUpForm
- [ ] ForgotPasswordForm
- [ ] ResetPasswordForm
- [ ] GoalSelectionForm
- [ ] SubjectSelectionForm
- [ ] AssessmentQuiz
- [ ] BehaviorAssessment

#### Deliverables
- [ ] Full auth flow working
- [ ] Onboarding completed for new users
- [ ] Protected routes secured
- [ ] Error handling implemented
- [ ] Password reset working
- [ ] Tests: 85%+ coverage

#### Time Estimate: 6-7 days

---

### Phase 3: Home Dashboard (Week 3-4)
**Goal**: Build home screen with gamification elements

#### Tasks
- [ ] Create home page layout
- [ ] Build StreakCard component
- [ ] Build XPProgressCard component
- [ ] Build ContinueLearningCard component
- [ ] Build CoachRecommendationCard component
- [ ] Build MilestoneCard component
- [ ] Integrate real-time streak counter
- [ ] Implement XP progress tracking
- [ ] Add personalization data fetching
- [ ] Implement animations & transitions

#### Components to Build
- [ ] StreakCard.tsx
- [ ] XPProgressCard.tsx
- [ ] ContinueLearningCard.tsx
- [ ] CoachRecommendationCard.tsx
- [ ] MilestoneCard.tsx
- [ ] DailyGoalWidget.tsx

#### API Integration
- [ ] GET /api/user/dashboard (daily data)
- [ ] GET /api/user/streak (current streak)
- [ ] GET /api/user/xp (current XP)
- [ ] GET /api/user/recommendations (recommended lesson)
- [ ] GET /api/user/milestones (upcoming milestones)

#### Deliverables
- [ ] Home page fully functional
- [ ] Real-time data from API
- [ ] Animations smooth & performant
- [ ] Responsive on all breakpoints
- [ ] Tests: 80%+ coverage

#### Time Estimate: 5-6 days

---

### Phase 4: Skill Tree & Learn Tab (Week 4-5)
**Goal**: Implement learning content structure and progression

#### Tasks
- [ ] Build SubjectSelector component
- [ ] Implement SkillTree visualization
- [ ] Build SkillCard component (3 states: completed, in-progress, locked)
- [ ] Build SkillDetailPanel
- [ ] Implement progress tracking
- [ ] Implement mastery calculation
- [ ] Build medal/achievement logic
- [ ] Implement skill prerequisites
- [ ] Integrate with Sapphire API
- [ ] Add filtering & search

#### Components to Build
- [ ] SubjectSelector.tsx
- [ ] SkillTree.tsx
- [ ] SkillCard.tsx
- [ ] SkillDetailPanel.tsx
- [ ] LessonList.tsx
- [ ] SkillProgressBar.tsx

#### API Integration
- [ ] GET /api/subjects (list subjects)
- [ ] GET /api/subjects/:id/tree (skill tree)
- [ ] GET /api/subjects/:id/skills/:skillId (skill details)
- [ ] GET /api/subjects/:id/skills/:skillId/lessons (lessons)
- [ ] GET /api/user/progress (user progress data)
- [ ] POST /api/user/skill/:skillId/start (start skill)

#### Deliverables
- [ ] Skill tree fully interactive
- [ ] All subjects and skills visible
- [ ] Mastery tracking accurate
- [ ] Prerequisites enforced
- [ ] Beautiful UI matching design system
- [ ] Tests: 85%+ coverage

#### Time Estimate: 6-7 days

---

### Phase 5: Lesson Interface (Week 5-6)
**Goal**: Build the core learning experience (lessons & exercises)

#### Tasks
- [ ] Create lesson page layout
- [ ] Build LessonHeader component
- [ ] Build LessonIntroduction component
- [ ] Build GuidedPractice component
- [ ] Build ExerciseWidget component (support multiple input types)
- [ ] Build FeedbackDisplay component
- [ ] Build HintDisplay component
- [ ] Implement answer checking (validation)
- [ ] Implement hint system (progressive hints)
- [ ] Build LessonCompletion component
- [ ] Implement celebration animations
- [ ] Add progress saving (auto-save)

#### Components to Build
- [ ] LessonHeader.tsx
- [ ] LessonIntroduction.tsx
- [ ] GuidedPractice.tsx
- [ ] ExerciseWidget.tsx
- [ ] ExerciseInput.tsx (abstraction for different input types)
- [ ] FeedbackDisplay.tsx
- [ ] HintDisplay.tsx
- [ ] LessonCompletion.tsx
- [ ] ProgressIndicator.tsx

#### Input Type Support
- [ ] Text input (short answer)
- [ ] Multiple choice
- [ ] Multiple select
- [ ] Numeric input
- [ ] Fraction input
- [ ] Equation input
- [ ] Drag and drop

#### API Integration
- [ ] GET /api/lessons/:id (lesson content)
- [ ] GET /api/lessons/:id/exercises/:exerciseId (exercise data)
- [ ] POST /api/lessons/:id/exercise/:exerciseId/check (check answer)
- [ ] GET /api/lessons/:id/exercise/:exerciseId/hint (get hint)
- [ ] POST /api/lessons/:id/save-progress (auto-save)
- [ ] POST /api/lessons/:id/complete (lesson completion)

#### Deliverables
- [ ] Complete lesson experience
- [ ] All input types supported
- [ ] Answer validation working
- [ ] Hints functioning properly
- [ ] XP awarded on completion
- [ ] Celebration animations delightful
- [ ] Auto-save preventing data loss
- [ ] Tests: 85%+ coverage

#### Time Estimate: 7-8 days

---

### Phase 6: AI Coach (Week 6-7)
**Goal**: Integrate chat interface with AI backend

#### Tasks
- [ ] Build CoachChat component
- [ ] Build CoachMessage component
- [ ] Implement message history
- [ ] Build QuickActionButtons component
- [ ] Integrate with AI/Chat API
- [ ] Implement context awareness (current lesson/topic)
- [ ] Handle message streaming (if applicable)
- [ ] Implement typing indicator
- [ ] Add error handling for API failures
- [ ] Implement message persistence

#### Components to Build
- [ ] CoachChat.tsx
- [ ] CoachMessage.tsx
- [ ] MessageBubble.tsx
- [ ] QuickActionButtons.tsx
- [ ] MessageInput.tsx

#### API Integration
- [ ] POST /api/coach/message (send message to coach)
- [ ] GET /api/coach/context (get current context)
- [ ] GET /api/coach/history (conversation history)
- [ ] POST /api/coach/quick-action/:action (quick actions)

#### Deliverables
- [ ] Coach chat fully functional
- [ ] Messages appear in real-time
- [ ] Context-aware responses
- [ ] Conversation history preserved
- [ ] Quick actions working
- [ ] Error handling for API issues
- [ ] Tests: 75%+ coverage

#### Time Estimate: 5-6 days

---

### Phase 7: Community & Leaderboards (Week 7-8)
**Goal**: Build community features and competitive engagement

#### Tasks
- [ ] Build Leaderboard component
- [ ] Build LeaderboardEntry component
- [ ] Implement multiple leaderboard views (weekly, monthly, all-time)
- [ ] Implement subject-specific leaderboards
- [ ] Build ChallengeCard component
- [ ] Build StudyGroupCard component
- [ ] Build CompetitionBanner component
- [ ] Integrate leaderboard data
- [ ] Implement challenge participation
- [ ] Add filtering & sorting

#### Components to Build
- [ ] Leaderboard.tsx
- [ ] LeaderboardEntry.tsx
- [ ] ChallengeCard.tsx
- [ ] StudyGroupCard.tsx
- [ ] CompetitionBanner.tsx
- [ ] LeaderboardFilters.tsx

#### API Integration
- [ ] GET /api/leaderboard (current user's position)
- [ ] GET /api/leaderboard/week (weekly leaderboard)
- [ ] GET /api/leaderboard/month (monthly leaderboard)
- [ ] GET /api/leaderboard/:subject/week (subject leaderboard)
- [ ] GET /api/challenges (active challenges)
- [ ] POST /api/challenges/:id/join (join challenge)
- [ ] GET /api/groups (study groups)

#### Deliverables
- [ ] Leaderboard fully functional
- [ ] User position visible
- [ ] Challenge cards showing progress
- [ ] Study groups browsable
- [ ] Responsive on all devices
- [ ] Tests: 75%+ coverage

#### Time Estimate: 5-6 days

---

### Phase 8: Profile & Analytics (Week 8-9)
**Goal**: Build user profile, stats, and analytics screens

#### Tasks
- [ ] Create profile page layout
- [ ] Build ProfileHeader component
- [ ] Build StatsCard component
- [ ] Build SubjectProgressCard component
- [ ] Build AchievementGrid component
- [ ] Build AchievementBadge component
- [ ] Build NotesList component
- [ ] Build NoteCard component
- [ ] Build SettingsMenu component
- [ ] Implement analytics dashboard
- [ ] Implement settings pages (account, notifications, privacy)

#### Components to Build
- [ ] ProfileHeader.tsx
- [ ] StatsCard.tsx
- [ ] SubjectProgressCard.tsx
- [ ] AchievementGrid.tsx
- [ ] AchievementBadge.tsx
- [ ] NotesList.tsx
- [ ] NoteCard.tsx
- [ ] SettingsMenu.tsx
- [ ] AnalyticsDashboard.tsx
- [ ] ChartComponent.tsx (for analytics)

#### Pages to Build
- [ ] /profile (main)
- [ ] /profile/stats
- [ ] /profile/analytics
- [ ] /profile/achievements
- [ ] /profile/notes
- [ ] /profile/settings
- [ ] /profile/settings/account
- [ ] /profile/settings/notifications

#### API Integration
- [ ] GET /api/user/profile (full user data)
- [ ] GET /api/user/stats (stats data)
- [ ] GET /api/user/analytics (detailed analytics)
- [ ] GET /api/user/achievements (all achievements)
- [ ] GET /api/user/notes (user notes)
- [ ] GET /api/user/notes/:id (single note)
- [ ] POST /api/user/notes (create note)
- [ ] PATCH /api/user/notes/:id (update note)
- [ ] DELETE /api/user/notes/:id (delete note)

#### Deliverables
- [ ] Profile page complete
- [ ] All stats displaying correctly
- [ ] Achievements showcase functional
- [ ] Notes working (CRUD operations)
- [ ] Settings pages functional
- [ ] Analytics dashboard informative
- [ ] Tests: 80%+ coverage

#### Time Estimate: 6-7 days

---

### Phase 9: Gamification Systems (Week 9-10)
**Goal**: Implement XP, streaks, medals, and achievement systems

#### Tasks
- [ ] Implement XP earning logic
- [ ] Implement streak tracking
- [ ] Implement medal system (Bronze/Silver/Gold)
- [ ] Implement achievement unlocking
- [ ] Implement level progression
- [ ] Implement daily reset logic
- [ ] Add XP notifications
- [ ] Add achievement notifications
- [ ] Add medal notifications
- [ ] Implement XP multipliers (streak bonuses)
- [ ] Create achievement definition system
- [ ] Implement analytics for gamification

#### Systems to Build
- [ ] XP System (earning, tracking, levels)
- [ ] Streak System (counting, notifications, bonuses)
- [ ] Medal System (Bronze/Silver/Gold for mastery)
- [ ] Achievement System (unlocking, tracking, notifications)
- [ ] Notification System (toasts for all achievements)

#### API Integration
- [ ] Integrate with existing lesson/exercise completion endpoints
- [ ] Track all XP-earning events
- [ ] Track streak-related events
- [ ] POST /api/achievements/check (check for new achievements)
- [ ] GET /api/achievements/unlocked (user's achievements)

#### Deliverables
- [ ] XP system fully functional
- [ ] Streaks tracking correctly
- [ ] Medals earning appropriately
- [ ] Achievements unlocking
- [ ] All notifications showing
- [ ] Performance optimized
- [ ] Tests: 85%+ coverage

#### Time Estimate: 5-6 days

---

### Phase 10: Polish & Optimization (Week 10-11)
**Goal**: Performance, accessibility, and user experience refinement

#### Tasks
- [ ] Implement lazy loading for lessons/content
- [ ] Optimize images & assets
- [ ] Implement prefetching (next lesson, recommendations)
- [ ] Add loading states to all data fetches
- [ ] Implement error boundaries
- [ ] Add comprehensive error handling
- [ ] Test on multiple devices (iOS/Android)
- [ ] Implement dark/light mode (if not done)
- [ ] Add accessibility improvements (ARIA labels, focus states)
- [ ] Implement offline mode (service worker)
- [ ] Performance profiling & optimization
- [ ] Conduct user testing
- [ ] Fix critical bugs

#### Optimization Tasks
- [ ] [ ] Code splitting per route
- [ ] [ ] Image optimization (WebP, srcset)
- [ ] [ ] CSS minification & cleanup
- [ ] [ ] Bundle size analysis
- [ ] [ ] Lighthouse audit (target: 90+)
- [ ] [ ] Core Web Vitals optimization
- [ ] [ ] Mobile performance optimization

#### Testing Tasks
- [ ] [ ] Unit tests (components)
- [ ] [ ] Integration tests (flows)
- [ ] [ ] E2E tests (critical paths)
- [ ] [ ] Accessibility tests
- [ ] [ ] Performance tests
- [ ] [ ] Security review

#### Deliverables
- [ ] Performance Audit Pass (Lighthouse 90+)
- [ ] Accessibility WCAG AA compliant
- [ ] Works offline (PWA features)
- [ ] Responsive on all devices
- [ ] Error handling comprehensive
- [ ] Test coverage 85%+

#### Time Estimate: 5-7 days

---

### Phase 11: Testing & QA (Week 11-12)
**Goal**: Comprehensive testing, bug fixes, and launch preparation

#### Tasks
- [ ] Create test plan
- [ ] Run comprehensive manual testing
- [ ] Fix all critical bugs
- [ ] Test on staging environment
- [ ] Conduct security audit
- [ ] Review all API integrations
- [ ] Test payment/premium features (if applicable)
- [ ] Verify all gamification systems
- [ ] Test on slow network (2G/3G)
- [ ] Verify analytics tracking
- [ ] Create launch checklist
- [ ] Prepare deployment documentation

#### Testing Checklist
- [ ] [ ] All pages load correctly
- [ ] [ ] All forms submit properly
- [ ] [ ] All API calls working
- [ ] [ ] Navigation working correctly
- [ ] [ ] Offline functionality working
- [ ] [ ] Dark mode toggle working
- [ ] [ ] All animations smooth
- [ ] [ ] No console errors
- [ ] [ ] No performance issues
- [ ] [ ] Accessibility passing
- [ ] [ ] Security passing

#### Deliverables
- [ ] Fully tested application
- [ ] All critical bugs fixed
- [ ] Launch checklist completed
- [ ] Documentation prepared
- [ ] Ready for production deployment

#### Time Estimate: 4-5 days

---

### Phase 12: Launch & Post-Launch (Week 12+)
**Goal**: Production deployment and monitoring

#### Tasks
- [ ] Deploy to production (Vercel)
- [ ] Set up monitoring (error tracking, analytics)
- [ ] Monitor server performance
- [ ] Collect user feedback
- [ ] Fix critical issues
- [ ] Plan post-launch features
- [ ] Implement analytics improvements

#### Post-Launch Monitoring
- [ ] [ ] Error tracking (Sentry)
- [ ] [ ] Performance monitoring
- [ ] [ ] User analytics
- [ ] [ ] Crash reporting
- [ ] [ ] Support ticket system

#### Deliverables
- [ ] Live product
- [ ] Monitoring in place
- [ ] Support system active
- [ ] Feedback collection mechanism

---

## 🎯 Dependency Graph

```
Phase 0: Setup
    ↓
Phase 1: Layout & Navigation
    ↓
┌─────────────────────────────────────┐
├─ Phase 2: Auth (parallel)           │
├─ Phase 3: Home (depends on Auth)    │
├─ Phase 4: Learn (depends on Auth)   │
├─ Phase 5: Lesson (depends on Learn) │
├─ Phase 6: Coach (parallel)          │
├─ Phase 7: Community (parallel)      │
└─ Phase 8: Profile (parallel)        │
    ↓
Phase 9: Gamification (all above)
    ↓
Phase 10: Polish & Optimization
    ↓
Phase 11: Testing & QA
    ↓
Phase 12: Launch
```

---

## 📊 Effort Estimation

```
Phase 0: Setup              3-4 days   (3-4 days)
Phase 1: Layout             5-6 days   (8-10 days)
Phase 2: Auth               6-7 days   (14-17 days)
Phase 3: Home               5-6 days   (19-23 days)
Phase 4: Learn              6-7 days   (25-30 days)
Phase 5: Lesson             7-8 days   (32-38 days)
Phase 6: Coach              5-6 days   (37-44 days)
Phase 7: Community          5-6 days   (42-50 days)
Phase 8: Profile            6-7 days   (48-57 days)
Phase 9: Gamification       5-6 days   (53-63 days)
Phase 10: Polish            5-7 days   (58-70 days)
Phase 11: Testing           4-5 days   (62-75 days)
Phase 12: Launch            2-3 days   (64-78 days)

TOTAL: 8-12 weeks (64-78 days)
TEAM: 2 engineers = 4-6 weeks with parallelization
```

---

## ✅ Success Criteria

By end of Phase 11, confirm:

- [ ] All 5 navigation tabs fully functional
- [ ] Authentication complete (signup, login, onboarding)
- [ ] Home dashboard showing real data
- [ ] Skill tree interactive and progress tracking
- [ ] Full lesson experience (intro, practice, exercise, completion)
- [ ] AI Coach chat functional
- [ ] Leaderboards displaying correctly
- [ ] Profile/analytics working
- [ ] Gamification systems (XP, streaks, medals) fully integrated
- [ ] No critical bugs
- [ ] Performance: Lighthouse 90+
- [ ] Accessibility: WCAG AA compliant
- [ ] Test coverage: 85%+
- [ ] Works on mobile/tablet/desktop
- [ ] Works offline (PWA)

---

**Version**: 1.0  
**Status**: Ready to Begin Phase 0  
**Next**: Technical Setup Guide & Getting Started Instructions
