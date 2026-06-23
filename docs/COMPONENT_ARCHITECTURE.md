# Sapphire OS V1 - Component Architecture

**Version**: 1.0  
**Framework**: Next.js 16 + React 19 + Tailwind CSS 4  
**UI Library**: Radix UI (headless, unstyled components)

---

## 📦 Component Hierarchy

```
App
├─ Providers
│  ├─ AuthProvider
│  ├─ ThemeProvider
│  ├─ ToastProvider (Sonner)
│  └─ Analytics Provider
│
├─ Layout (Conditional)
│  ├─ AuthLayout (no nav)
│  ├─ AppLayout (with bottom nav)
│  └─ OnboardingLayout
│
├─ Routes
│  ├─ Auth Routes
│  ├─ App Routes
│  ├─ Onboarding Routes
│  └─ Error Routes
│
└─ Global Components
   ├─ BottomNav
   ├─ Header
   ├─ Modals
   └─ Notifications
```

---

## 🧩 Component Categories

### 1. Layout Components

```
BottomNav.tsx
├─ Props: activeTab, onTabChange
├─ Features:
│  ├─ 5-tab navigation
│  ├─ Icons + labels
│  ├─ Active state styling
│  ├─ Badge support (optional)
│  ├─ Sticky positioning
│  └─ Safe area support
└─ Styling: Fixed bottom, 56px height

AppLayout.tsx
├─ Props: children, hideNav?
├─ Features:
│  ├─ Bottom nav integration
│  ├─ Page transitions
│  ├─ Safe area padding
│  └─ Dynamic height
└─ Styling: Full height layout

Header.tsx
├─ Props: title, leftAction?, rightAction?
├─ Features:
│  ├─ Back button
│  ├─ Title/Logo
│  ├─ Icon actions
│  └─ Sticky positioning
└─ Styling: Top nav, 56px height
```

### 2. Auth Components

```
LoginForm.tsx
├─ Props: onSubmit, loading, error
├─ Fields:
│  ├─ Email input
│  ├─ Password input
│  ├─ "Forgot password" link
│  └─ Submit button
└─ Features: Form validation, error display

SignUpForm.tsx
├─ Props: onSubmit, loading, error
├─ Fields:
│  ├─ Email input
│  ├─ Password input
│  ├─ Confirm password input
│  ├─ Terms checkbox
│  └─ Submit button
└─ Features: Password strength meter, validation

ForgotPasswordForm.tsx
├─ Props: onSubmit, loading
├─ Fields: Email input, submit button
└─ Features: Email validation, success message

ResetPasswordForm.tsx
├─ Props: onSubmit, loading, token
├─ Fields: New password, confirm password
└─ Features: Password strength, validation
```

### 3. Dashboard / Home Components

```
StreakCard.tsx
├─ Props: days, pointsIn, lastLessonTime
├─ Displays:
│  ├─ Flame icon
│  ├─ Day count
│  ├─ Countdown timer
│  └─ Motivational message
└─ Styling: Card with gradient border

XPProgressCard.tsx
├─ Props: currentXP, dailyGoal, percentage
├─ Displays:
│  ├─ Progress bar
│  ├─ Current/goal XP
│  ├─ Percentage
│  └─ Status message
└─ Styling: Animated progress bar

ContinueLearningCard.tsx
├─ Props: lesson, onContinue
├─ Displays:
│  ├─ Lesson title
│  ├─ Progress (n/5 exercises)
│  └─ [Continue] button
└─ Features: Navigate to lesson

CoachRecommendationCard.tsx
├─ Props: recommendation, onAccept
├─ Displays:
│  ├─ Coach avatar
│  ├─ Recommendation text
│  └─ [Accept] button
└─ Styling: Card with coach styling

MilestoneCard.tsx
├─ Props: milestones[]
├─ Displays:
│  ├─ Upcoming achievements
│  ├─ Progress to each
│  └─ Icons
└─ Styling: Vertical list
```

### 4. Learn / Skill Tree Components

```
SubjectSelector.tsx
├─ Props: subjects, onSelect
├─ Displays:
│  ├─ Mathematics option
│  └─ English option
└─ Features: Subject selection, icons

SkillTree.tsx
├─ Props: subject, skills, onSkillClick
├─ Displays:
│  ├─ Unit headers
│  ├─ Skill cards
│  ├─ Prerequisites
│  └─ Lock indicators
└─ Features: Collapsible units, filtering

SkillCard.tsx
├─ Props: skill, status, onOpen
├─ Displays:
│  ├─ Status icon (✅ / ▶️ / 🔒)
│  ├─ Skill name
│  ├─ Mastery %
│  ├─ XP earned
│  ├─ Medal (if earned)
│  └─ Time estimate
└─ Styling: Different for each status

LessonList.tsx
├─ Props: skillId, lessons, onLessonSelect
├─ Displays:
│  ├─ Lesson titles
│  ├─ Duration
│  ├─ Completion status
│  └─ XP reward
└─ Features: Filter, search

SkillDetailPanel.tsx
├─ Props: skill, onClose
├─ Displays:
│  ├─ Mastery info
│  ├─ Lessons list
│  ├─ Related skills
│  ├─ [Start Lesson] button
│  ├─ [Practice] button
│  └─ [View Notes] button
└─ Styling: Modal or side panel
```

### 5. Lesson Components

```
LessonHeader.tsx
├─ Props: skillName, stepCount, currentStep
├─ Displays:
│  ├─ [← Back] button
│  ├─ Skill name
│  ├─ Step progress (●●○○○)
│  └─ Time elapsed
└─ Styling: Sticky header

LessonIntroduction.tsx
├─ Props: content, onNext
├─ Displays:
│  ├─ Concept explanation
│  ├─ Real-world example
│  ├─ Key points
│  └─ [Next] button
└─ Styling: Centered, readable text

GuidedPractice.tsx
├─ Props: problem, solution, explanation
├─ Displays:
│  ├─ Worked example
│  ├─ Step-by-step solution
│  ├─ Explanation text
│  └─ [Next] button
└─ Styling: Clean layout

ExerciseWidget.tsx
├─ Props: exercise, onCheck, onHint, onExplain
├─ Features:
│  ├─ Problem display
│  ├─ Input field (multiple types)
│  ├─ [Check Answer] button
│  ├─ [Show Hint] button
│  ├─ [Explain] link
│  └─ [Ask Coach] link
└─ Styling: Large input for mobile

FeedbackDisplay.tsx
├─ Props: correct, message, explanation
├─ Displays:
│  ├─ ✅ or ❌ icon
│  ├─ Feedback message
│  ├─ Explanation (if incorrect)
│  └─ [Next] or [Retry] button
└─ Styling: Large, celebratory if correct

HintDisplay.tsx
├─ Props: hints[], currentHintIndex
├─ Features:
│  ├─ Progressive hints
│  ├─ [Previous Hint] / [Next Hint]
│  └─ Hint counter
└─ Styling: Highlighted, distinct

LessonCompletion.tsx
├─ Props: xp, performance, unlocked, onNext
├─ Displays:
│  ├─ Celebration animation
│  ├─ XP earned
│  ├─ Performance score
│  ├─ Streak counter
│  ├─ Skills unlocked
│  └─ [Next Lesson] / [Back to Tree]
└─ Styling: Large, animated, celebratory
```

### 6. Coach / Chat Components

```
CoachChat.tsx
├─ Props: conversationHistory, onMessage, loading
├─ Features:
│  ├─ Message history display
│  ├─ Auto-scroll to latest
│  ├─ Message bubbles (user/coach)
│  ├─ Input field
│  ├─ [Send] button
│  └─ Typing indicator
└─ Styling: Chat interface

CoachMessage.tsx
├─ Props: message, isUser
├─ Displays:
│  ├─ Coach avatar (if not user)
│  ├─ Message text
│  ├─ Timestamp
│  └─ Code/formulas if present
└─ Styling: Bubble style

QuickActionButtons.tsx
├─ Props: actions, onSelect
├─ Displays:
│  ├─ [Get Hint]
│  ├─ [Explain Concept]
│  ├─ [Practice More]
│  └─ [Review Mistakes]
└─ Styling: Quick action grid
```

### 7. Community Components

```
Leaderboard.tsx
├─ Props: entries, userRank, timeframe, onTimeframeChange
├─ Displays:
│  ├─ Ranking list
│  ├─ User position highlight
│  ├─ Medal icons
│  ├─ XP scores
│  ├─ Streak counts
│  └─ [View All] link
└─ Features: Time period selector, sorting

LeaderboardEntry.tsx
├─ Props: rank, user, xp, streak, isCurrentUser
├─ Displays:
│  ├─ Rank number (🥇 🥈 🥉)
│  ├─ User name
│  ├─ Avatar
│  ├─ XP score
│  └─ Streak count
└─ Styling: Row with highlight for current user

ChallengeCard.tsx
├─ Props: challenge, progress, onJoin
├─ Displays:
│  ├─ Challenge name
│  ├─ Description
│  ├─ Progress bar
│  ├─ Participants count
│  ├─ Reward (XP)
│  └─ [Join] or [View Details] button
└─ Styling: Card with challenge theme

StudyGroupCard.tsx
├─ Props: group, memberCount, onOpen
├─ Displays:
│  ├─ Group name
│  ├─ Subject focus
│  ├─ Member avatars
│  ├─ Member count
│  └─ [Join] or [View] button
└─ Styling: Card with group info

CompetitionBanner.tsx
├─ Props: competition, userPosition
├─ Displays:
│  ├─ Competition title
│  ├─ Time remaining
│  ├─ Your position
│  └─ [View Leaderboard] button
└─ Styling: Banner with urgency
```

### 8. Profile Components

```
ProfileHeader.tsx
├─ Props: user, level, xp
├─ Displays:
│  ├─ Avatar
│  ├─ Name
│  ├─ Level + progress to next
│  ├─ Total XP
│  └─ [Edit Profile] button
└─ Styling: Header with gradient

StatsCard.tsx
├─ Props: stat (week/month/all-time)
├─ Displays:
│  ├─ Stat name
│  ├─ Value
│  ├─ Icon
│  └─ Trend (if applicable)
└─ Styling: Card with icon

SubjectProgressCard.tsx
├─ Props: subject, mastery, xp
├─ Displays:
│  ├─ Subject icon
│  ├─ Subject name
│  ├─ Mastery bar
│  ├─ XP earned
│  └─ [View Details] link
└─ Styling: Card with subject color

AchievementGrid.tsx
├─ Props: achievements, onAchievementClick
├─ Displays:
│  ├─ Achievement badges in grid
│  ├─ Locked achievements (grayed)
│  └─ Earned date on hover
└─ Features: Filter, sort

AchievementBadge.tsx
├─ Props: achievement, unlocked, onClick
├─ Displays:
│  ├─ Badge icon (emoji/SVG)
│  ├─ Achievement name (on hover)
│  ├─ Unlock date (on hover)
│  └─ Lock overlay (if locked)
└─ Styling: Circular badge with glow

NotesList.tsx
├─ Props: notes, onNoteSelect, onDelete
├─ Features:
│  ├─ List view with delete
│  ├─ Search
│  ├─ Filter by subject
│  ├─ Sort (newest/oldest)
│  └─ [New Note] button
└─ Styling: List with metadata

NoteCard.tsx
├─ Props: note, onOpen, onDelete
├─ Displays:
│  ├─ Note title
│  ├─ Subject tag
│  ├─ Last modified
│  ├─ Preview text
│  └─ Delete button
└─ Styling: Card with actions

SettingsMenu.tsx
├─ Props: onNavigate
├─ Displays:
│  ├─ Account settings link
│  ├─ Learning settings link
│  ├─ Notifications settings link
│  ├─ Privacy settings link
│  ├─ Help & support link
│  └─ Logout button
└─ Styling: Menu list
```

### 9. Shared UI Components

```
Button.tsx
├─ Variants: primary, secondary, ghost, destructive
├─ Sizes: sm, md, lg
├─ Props: variant, size, disabled, loading, icon
└─ Features: Icon support, disabled state, loading spinner

Input.tsx
├─ Props: type, placeholder, value, onChange, error
├─ Features:
│  ├─ Error state
│  ├─ Success state
│  ├─ Icon support
│  └─ Clear button (optional)
└─ Styling: 44px height for mobile

Card.tsx
├─ Props: children, onClick, className
├─ Features: Hover effect, elevation
└─ Styling: Border, shadow, rounded

Badge.tsx
├─ Variants: default, success, warning, destructive
├─ Props: variant, size
└─ Styling: Pill shape, color variants

ProgressBar.tsx
├─ Props: value, max, showLabel
├─ Features: Animated bar, percentage display
└─ Styling: Smooth animation

Modal.tsx
├─ Props: isOpen, onClose, title, children
├─ Features:
│  ├─ Overlay
│  ├─ Close button
│  ├─ Backdrop dismiss
│  └─ Focus management
└─ Styling: Centered modal

Toast/Sonner
├─ Features:
│  ├─ Success, error, warning, info
│  ├─ Auto-dismiss
│  ├─ Action buttons
│  └─ Stacking
└─ Styling: Bottom-right toast

Tabs.tsx
├─ Props: tabs, activeTab, onChange
├─ Features:
│  ├─ Multiple tab styles
│  ├─ Icons
│  ├─ Badges
│  └─ Keyboard navigation
└─ Styling: Tab navigation

Skeleton.tsx
├─ Props: width, height, count
├─ Features: Shimmer animation
└─ Styling: Placeholder loading

Avatar.tsx
├─ Props: src, initials, size
├─ Sizes: sm, md, lg, xl
└─ Features: Fallback initials, gradient bg

Accordion.tsx
├─ Props: items, allowMultiple
├─ Features:
│  ├─ Expand/collapse
│  ├─ Smooth animation
│  └─ Keyboard navigation
└─ Styling: Collapsible sections

Tooltip.tsx
├─ Props: content, side, delay
├─ Features: Show on hover/focus
└─ Styling: Dark background

Checkbox.tsx
├─ Props: checked, onChange, label
├─ Features:
│  ├─ Check animation
│  ├─ Indeterminate state
│  └─ Label click
└─ Styling: Animated checkbox

Toggle.tsx
├─ Props: enabled, onChange, label
├─ Features: Smooth toggle animation
└─ Styling: Switch style

Slider.tsx
├─ Props: min, max, value, onChange
├─ Features:
│  ├─ Draggable thumb
│  ├─ Step support
│  └─ Range slider option
└─ Styling: Modern slider

SelectDropdown.tsx
├─ Props: options, value, onChange
├─ Features:
│  ├─ Search filtering
│  ├─ Keyboard navigation
│  ├─ Multi-select option
│  └─ Custom rendering
└─ Styling: Dropdown with options
```

### 10. Form Components

```
Form.tsx (react-hook-form wrapper)
├─ Features:
│  ├─ Form state management
│  ├─ Validation (Zod schema)
│  ├─ Error display
│  └─ Auto-focus on error
└─ Pattern: useForm hook

FormField.tsx
├─ Props: control, name, children
├─ Features:
│  ├─ Error message display
│  ├─ Required indicator
│  └─ Label integration
└─ Pattern: render props

FormInput.tsx
├─ Props: control, name, label, type, rules
├─ Features:
│  ├─ Validation rules
│  ├─ Error display
│  └─ Helper text
└─ Pattern: Wrapper component

FormSelect.tsx
├─ Props: control, name, label, options, rules
├─ Features: Dropdown selection, validation
└─ Pattern: Wrapper component

FormCheckbox.tsx
├─ Props: control, name, label
└─ Features: Checkbox validation

FormTextarea.tsx
├─ Props: control, name, label, rows, rules
└─ Features: Multi-line text input
```

---

## 🏗️ Folder Structure

```
src/
├─ app/
│  ├─ (auth)/
│  │  ├─ login/page.tsx
│  │  ├─ signup/page.tsx
│  │  ├─ forgot-password/page.tsx
│  │  └─ reset-password/page.tsx
│  │
│  ├─ (app)/
│  │  ├─ layout.tsx (with bottom nav)
│  │  ├─ home/page.tsx
│  │  ├─ learn/page.tsx
│  │  ├─ learn/[subjectId]/page.tsx
│  │  ├─ lesson/[lessonId]/page.tsx
│  │  ├─ coach/page.tsx
│  │  ├─ community/page.tsx
│  │  ├─ profile/page.tsx
│  │  └─ settings/page.tsx
│  │
│  ├─ (onboarding)/
│  │  ├─ welcome/page.tsx
│  │  ├─ goals/page.tsx
│  │  ├─ subjects/page.tsx
│  │  ├─ assessment/page.tsx
│  │  ├─ behavior/page.tsx
│  │  └─ roadmap/page.tsx
│  │
│  ├─ layout.tsx (root)
│  ├─ page.tsx (landing)
│  └─ error.tsx
│
├─ components/
│  ├─ layout/
│  │  ├─ BottomNav.tsx
│  │  ├─ AppLayout.tsx
│  │  ├─ Header.tsx
│  │  └─ SafeArea.tsx
│  │
│  ├─ auth/
│  │  ├─ LoginForm.tsx
│  │  ├─ SignUpForm.tsx
│  │  ├─ ForgotPasswordForm.tsx
│  │  └─ ResetPasswordForm.tsx
│  │
│  ├─ home/
│  │  ├─ StreakCard.tsx
│  │  ├─ XPProgressCard.tsx
│  │  ├─ ContinueLearningCard.tsx
│  │  ├─ CoachRecommendationCard.tsx
│  │  └─ MilestoneCard.tsx
│  │
│  ├─ learn/
│  │  ├─ SubjectSelector.tsx
│  │  ├─ SkillTree.tsx
│  │  ├─ SkillCard.tsx
│  │  ├─ LessonList.tsx
│  │  └─ SkillDetailPanel.tsx
│  │
│  ├─ lesson/
│  │  ├─ LessonHeader.tsx
│  │  ├─ LessonIntroduction.tsx
│  │  ├─ GuidedPractice.tsx
│  │  ├─ ExerciseWidget.tsx
│  │  ├─ FeedbackDisplay.tsx
│  │  ├─ HintDisplay.tsx
│  │  └─ LessonCompletion.tsx
│  │
│  ├─ coach/
│  │  ├─ CoachChat.tsx
│  │  ├─ CoachMessage.tsx
│  │  └─ QuickActionButtons.tsx
│  │
│  ├─ community/
│  │  ├─ Leaderboard.tsx
│  │  ├─ LeaderboardEntry.tsx
│  │  ├─ ChallengeCard.tsx
│  │  ├─ StudyGroupCard.tsx
│  │  └─ CompetitionBanner.tsx
│  │
│  ├─ profile/
│  │  ├─ ProfileHeader.tsx
│  │  ├─ StatsCard.tsx
│  │  ├─ SubjectProgressCard.tsx
│  │  ├─ AchievementGrid.tsx
│  │  ├─ AchievementBadge.tsx
│  │  ├─ NotesList.tsx
│  │  ├─ NoteCard.tsx
│  │  └─ SettingsMenu.tsx
│  │
│  ├─ ui/
│  │  ├─ Button.tsx
│  │  ├─ Input.tsx
│  │  ├─ Card.tsx
│  │  ├─ Badge.tsx
│  │  ├─ ProgressBar.tsx
│  │  ├─ Modal.tsx
│  │  ├─ Tabs.tsx
│  │  ├─ Skeleton.tsx
│  │  ├─ Avatar.tsx
│  │  ├─ Accordion.tsx
│  │  ├─ Tooltip.tsx
│  │  ├─ Checkbox.tsx
│  │  ├─ Toggle.tsx
│  │  ├─ Slider.tsx
│  │  ├─ SelectDropdown.tsx
│  │  └─ ... (more base components)
│  │
│  ├─ forms/
│  │  ├─ Form.tsx
│  │  ├─ FormField.tsx
│  │  ├─ FormInput.tsx
│  │  ├─ FormSelect.tsx
│  │  ├─ FormCheckbox.tsx
│  │  └─ FormTextarea.tsx
│  │
│  └─ global/
│     ├─ ToastContainer.tsx
│     ├─ LoadingOverlay.tsx
│     └─ ErrorBoundary.tsx
│
├─ lib/
│  ├─ api/
│  │  ├─ client.ts (API client)
│  │  ├─ auth.ts (auth endpoints)
│  │  ├─ lessons.ts (lesson endpoints)
│  │  ├─ coach.ts (coach/chat endpoints)
│  │  └─ ... (other endpoints)
│  │
│  ├─ hooks/
│  │  ├─ useAuth.ts
│  │  ├─ useLesson.ts
│  │  ├─ useCoach.ts
│  │  ├─ useXP.ts
│  │  ├─ useStreak.ts
│  │  └─ ... (other hooks)
│  │
│  ├─ utils/
│  │  ├─ format.ts (formatting utilities)
│  │  ├─ validation.ts (Zod schemas)
│  │  ├─ animations.ts (animation configs)
│  │  └─ ... (other utilities)
│  │
│  ├─ constants/
│  │  ├─ routes.ts
│  │  ├─ colors.ts
│  │  └─ config.ts
│  │
│  └─ types/
│     ├─ api.ts
│     ├─ lesson.ts
│     ├─ user.ts
│     ├─ coach.ts
│     └─ ... (other types)
│
├─ contexts/
│  ├─ AuthContext.tsx
│  ├─ ThemeContext.tsx
│  └─ LearningContext.tsx
│
├─ styles/
│  ├─ globals.css (Tailwind + custom)
│  ├─ animations.css (custom animations)
│  └─ variables.css (CSS custom properties)
│
└─ public/
   ├─ images/
   ├─ icons/
   └─ ... (static assets)
```

---

**Version**: 1.0  
**Status**: Complete Component Architecture  
**Next**: Implementation Roadmap & Getting Started Guide
