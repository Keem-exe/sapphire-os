# Sapphire OS V1 - Navigation & Information Architecture

**Version**: 1.0  
**Status**: Complete Navigation Spec

---

## 🗺️ Site Map & Navigation Structure

### Top-Level Navigation

```
Sapphire OS V1
│
├─ Unauthenticated Routes
│  ├─ / (Landing/Login)
│  ├─ /auth/signup
│  ├─ /auth/login
│  ├─ /auth/forgot-password
│  └─ /auth/reset-password
│
├─ Authenticated Routes
│  ├─ /home (Dashboard)
│  ├─ /learn (Skill Tree)
│  ├─ /coach (AI Coach Chat)
│  ├─ /community (Leaderboard & Challenges)
│  ├─ /profile (User Stats & Settings)
│  │
│  ├─ Lesson Routes
│  │  ├─ /lesson/:id (Lesson Interface)
│  │  ├─ /lesson/:id/exercise/:exerciseId
│  │  └─ /lesson/:id/complete (Completion Screen)
│  │
│  ├─ Subject Routes
│  │  ├─ /subject/:subjectId (Subject Details)
│  │  ├─ /subject/:subjectId/tree (Skill Tree)
│  │  └─ /subject/:subjectId/notes
│  │
│  └─ Settings Routes
│     ├─ /settings (Settings Home)
│     ├─ /settings/account
│     ├─ /settings/notifications
│     └─ /settings/privacy
│
├─ Onboarding Routes
│  ├─ /onboarding/welcome
│  ├─ /onboarding/goals
│  ├─ /onboarding/subjects
│  ├─ /onboarding/assessment
│  ├─ /onboarding/behavior
│  └─ /onboarding/roadmap
│
└─ Admin Routes (Future)
   └─ /admin/*
```

---

## 📱 Bottom Tab Navigation System

### Primary Navigation (5 Tabs)

```
┌─────────────────────────────────────────────┐
│             Page Content Area               │
│        (Changes based on active tab)        │
│                                             │
│                                             │
└─────────────────────────────────────────────┘
┌─────────────────────────────────────────────┐
│ 🏠   🌳   🎯   👥   👤                       │
│ Home  Learn Coach Community Profile          │
│       (Active: underline + highlight color) │
└─────────────────────────────────────────────┘
```

### Tab Details

#### Tab 1: Home (🏠)
**Route**: `/home`  
**Icon**: House / Home  
**Badge**: Optional (streak count)

**Sub-Navigation**: None (primary content)

**Content**:
- Dashboard with personalized info
- Streak counter
- XP progress
- Continue learning CTA
- Recommended lesson
- Coach insights
- Achievement previews

---

#### Tab 2: Learn (🌳)
**Route**: `/learn`  
**Icon**: Tree / Growth  
**Badge**: Optional (unlocked skills count)

**Sub-Navigation**:
```
/learn
├─ Subject Selection (Primary view)
│  ├─ 📐 CSEC Mathematics
│  └─ 📚 CSEC English
│
├─ /learn/:subjectId
│  └─ Skill Tree for subject
│
├─ /learn/:subjectId/:skillId
│  └─ Skill details + lesson list
│
└─ /learn/:subjectId/:skillId/:lessonId
   └─ Lesson interface
```

**Content**:
- Subject selection
- Skill tree visualization
- Progress indicators
- Mastery badges
- Locked skills info
- Lesson list

---

#### Tab 3: Coach (🎯)
**Route**: `/coach`  
**Icon**: Target / Star  
**Badge**: Optional (unread messages)

**Sub-Navigation**:
```
/coach
├─ Chat interface (primary)
├─ Conversation history
└─ Context-aware help
```

**Content**:
- AI coach chat
- Conversation history
- Quick action prompts
- Contextual hints
- Explanation requests
- Practice suggestions

---

#### Tab 4: Community (👥)
**Route**: `/community`  
**Icon**: People / Users  
**Badge**: Optional (rank change)

**Sub-Navigation**:
```
/community
├─ Leaderboards
│  ├─ /community/leaderboard/week
│  ├─ /community/leaderboard/month
│  ├─ /community/leaderboard/all-time
│  ├─ /community/leaderboard/math
│  └─ /community/leaderboard/english
│
├─ Challenges
│  ├─ /community/challenges (active)
│  ├─ /community/challenges/:id (details)
│  └─ /community/challenges/completed
│
├─ Study Groups
│  ├─ /community/groups (browse)
│  ├─ /community/groups/:id (group details)
│  └─ /community/groups/create
│
└─ Weekly Competitions
   └─ /community/competitions
```

**Content**:
- Leaderboards (multiple views)
- Active challenges
- Study group browsing
- Weekly competitions
- Social features

---

#### Tab 5: Profile (👤)
**Route**: `/profile`  
**Icon**: User / Person  
**Badge**: None

**Sub-Navigation**:
```
/profile
├─ Profile Overview (primary)
├─ Stats & Analytics
│  ├─ /profile/stats (XP, levels, achievements)
│  └─ /profile/analytics (detailed charts)
│
├─ Achievements
│  ├─ /profile/achievements (all badges)
│  └─ /profile/achievements/:id (detail)
│
├─ Notes
│  ├─ /profile/notes (all notes)
│  ├─ /profile/notes/:id (view note)
│  └─ /profile/notes/:id/edit (edit note)
│
├─ Settings
│  ├─ /profile/settings
│  ├─ /profile/settings/account
│  ├─ /profile/settings/learning
│  ├─ /profile/settings/notifications
│  ├─ /profile/settings/privacy
│  ├─ /profile/settings/help
│  └─ /logout
│
└─ Account Management
   └─ /profile/account
```

**Content**:
- User profile info
- XP & level display
- Achievement showcase
- Subject progress
- Notes library
- Settings & preferences
- Account options
- Logout

---

## 🎓 Lesson Navigation Flow

### Lesson Entry Points

```
From Home:
[Continue Learning] → /lesson/:id

From Learn (Skill Tree):
[Skill Card] → [Start Lesson] → /lesson/:id

From Coach:
[Recommended Practice] → /lesson/:id

From Profile:
[Resume Saved Lesson] → /lesson/:id
```

### Lesson Interior Navigation

```
Lesson Page (/lesson/:id)
├─ Header
│  ├─ [← Back to Tree]
│  ├─ Lesson Title
│  └─ Progress Indicator (●●○○○ 2 of 5)
│
├─ Content Area
│  ├─ Concept Introduction
│  ├─ Guided Practice
│  ├─ Challenge Question
│  └─ Exercise Interface
│
├─ Bottom Navigation
│  ├─ [← Previous]
│  ├─ [Next →] OR
│  └─ [Finish Lesson]
│
└─ Exit Options
   ├─ Back (loses progress prompt)
   └─ Finish (completes lesson)
```

### Exercise Navigation

```
Within Lesson:
Exercise Step 1 → [Check] → 
  If Correct: Exercise Step 2 (or Finish)
  If Incorrect: Show hint option
    → Retry or Ask Coach

Navigation:
├─ [Show Hint]  (guided hint)
├─ [Explain]    (concept review)
├─ [Ask Coach]  (open coach chat)
├─ [Skip]       (move to next with penalty)
└─ [Back]       (previous step)
```

---

## 📊 Skill Tree Navigation

### Skill Tree Visualization

```
Subject Root
├─ Unit 1: Number Operations
│  ├─ ✅ Skill: Integers
│  ├─ ✅ Skill: Basic Operations
│  ├─ ▶️ Skill: Fractions (In Progress)
│  ├─ 🔒 Skill: Decimals (Locked: Requires 70% in Fractions)
│  └─ 🔒 Skill: Ratios (Locked: Requires Unit 1 Completion)
│
├─ Unit 2: Algebra
│  ├─ 🔒 Skill: Variables (Locked: Requires Unit 1 at 70%)
│  ├─ 🔒 Skill: Equations
│  └─ 🔒 Skill: Systems
│
└─ Unit 3: Advanced (Locked: Requires Unit 2 at 80%)
   └─ 🔒 Skill: Calculus Intro
```

### Tree Interaction

```
Click on Skill Card:
├─ If Completed: Show mastery info
│  ├─ Medal earned (🥇 Gold)
│  ├─ XP earned (240 XP)
│  ├─ Mastery % (95%)
│  ├─ [View Lessons]
│  ├─ [Practice]
│  └─ [View Notes]
│
├─ If In Progress: Show progress
│  ├─ Current mastery (65%)
│  ├─ [Continue]
│  ├─ [Restart]
│  └─ [Get Help]
│
└─ If Locked: Show unlock condition
   ├─ "Unlock by completing X skill"
   ├─ "with 70% mastery"
   └─ [View Prerequisite]
```

---

## 🔄 State Management & Navigation Patterns

### Persistent State Across Navigation

```
User Session:
├─ Auth token (persists)
├─ User profile (cached)
├─ Current streak (real-time)
├─ XP progress (real-time)
├─ Learning path (cached)
└─ Preferences (cached)

Lesson State:
├─ Current lesson ID
├─ Exercise progress
├─ Answers (auto-saved)
├─ Time spent
├─ Hints used
└─ Performance metrics

Navigation State:
├─ Tab index (persists)
├─ Scroll position (partial)
├─ Subject selection
└─ Sort/filter preferences
```

### Deep Linking

```
Support deep links for:
├─ /home (home tab)
├─ /learn/:subjectId/:skillId (specific skill)
├─ /lesson/:lessonId (direct lesson start)
├─ /coach (coach tab)
├─ /community/leaderboard/week (specific leaderboard)
└─ /profile/achievements (achievements tab)

Use cases:
├─ Share achievement
├─ Share leaderboard position
├─ Invite to challenge
└─ Resume from notification
```

---

## 🚀 Navigation Performance

### Optimizations

```
Lazy Loading:
├─ Tab content loads on demand
├─ Lesson content loads progressively
├─ Images lazy-load
└─ Non-critical animations skip on slow devices

Caching:
├─ Skill tree cached
├─ User profile cached (with refresh)
├─ Leaderboard cached (5 min)
├─ Subject data cached
└─ Lesson content prefetched

Prefetching:
├─ Prefetch next lesson
├─ Prefetch recommended content
├─ Prefetch user profile
└─ Prefetch leaderboards
```

### Mobile Considerations

```
Safe Areas:
├─ Top: 44-60px (notch safe)
├─ Bottom: 56px + 16px (tab bar + safe area)
├─ Left: 16px
└─ Right: 16px

Gestures:
├─ Swipe left/right: Switch tabs (optional)
├─ Swipe up: Scroll content
├─ Swipe down: Pull to refresh (optional)
├─ Long press: Context menu (future)
└─ Double tap: Like/save (future)

Back Button:
├─ Android: Respects system back
├─ iOS: Uses back gesture
├─ Behavior: Navigates back in stack
└─ Root: Confirms app exit
```

---

## 🔐 Auth Navigation Flow

### Login to Authenticated

```
/ (Landing/Login)
     ↓
[Sign In / Sign Up]
     ↓
/auth/login or /auth/signup
     ↓
[Verify Credentials]
     ↓
/onboarding/welcome (if first time)
     ├─ /onboarding/goals
     ├─ /onboarding/subjects
     ├─ /onboarding/assessment
     ├─ /onboarding/behavior
     └─ /onboarding/roadmap
     ↓
/home (Dashboard)
```

### Logout Flow

```
/profile
     ↓
[Logout]
     ↓
Confirmation Dialog
     ↓
Clear Session
     ↓
/ (Redirect to Login)
```

---

## 📋 Error & Exception Navigation

### Network Error

```
Any Page
     ↓
Network Error
     ↓
Show Offline Banner
├─ [Retry]
├─ [Go Offline Mode] (if applicable)
└─ [Return to Home]
```

### 404 Not Found

```
/invalid-route
     ↓
404 Page
├─ Explanation
├─ [Go Home]
├─ [Browse Subjects]
└─ [Contact Support]
```

### Permission Error (403)

```
Access Denied
     ↓
403 Page
├─ "You don't have access"
├─ [Go Home]
└─ [Contact Support]
```

---

## 🎯 Accessibility & Navigation

### Keyboard Navigation

```
Tab Key: Cycle through interactive elements
├─ Buttons
├─ Links
├─ Inputs
├─ Tab bar buttons
└─ Menu items

Enter Key: Activate focused element

Space: Toggle checkboxes, radio buttons

Arrow Keys: 
├─ Menu navigation (up/down)
├─ Tab bar navigation (left/right)
└─ Slider adjustment

Escape: Close modals, menus

Screen Reader:
├─ Announce tab changes
├─ Announce page title
├─ Announce interactive elements
└─ Read role attributes
```

### Focus Management

```
After Tab Click:
├─ Focus moves to tab panel
├─ Tab marked as selected
├─ Content scrolls to top
└─ Announce tab change

After Page Load:
├─ Focus on main heading
├─ OR focus on "Skip to content" link
└─ OR focus on first input

After Modal Open:
├─ Focus moves to modal
├─ Outside content inert
└─ Focus returns on close
```

---

**Version**: 1.0  
**Status**: Complete Navigation Specification  
**Next**: Component Architecture & Technical Stack
