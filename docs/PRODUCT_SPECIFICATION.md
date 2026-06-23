# Sapphire OS V1 - Product Specification

**Version**: 1.0  
**Status**: MVP Design  
**Subjects**: CSEC Mathematics, CSEC English  
**Target Users**: 14-19 year old students preparing for CSEC exams

---

## 📋 Product Overview

Sapphire OS is an AI-powered learning platform that creates personalized learning journeys for CSEC exam preparation. The platform combines:

- **Intelligent Personalization**: Powered by Sapphire Lite Engine
- **Gamified Engagement**: Streaks, XP, medals, achievements
- **Adaptive Learning**: Content adjusts to student mastery and pace
- **AI Coaching**: Guided tutoring, not answer generation
- **Mobile-First**: Optimized for phone/tablet study sessions
- **Community**: Leaderboards, challenges, study groups

---

## 🎯 Core User Flows

### Onboarding (First-Time User)

```
1. Sign Up
   ├─ Email registration
   ├─ Password creation
   └─ Email verification

2. Welcome Screen
   ├─ "Welcome to Sapphire"
   ├─ Value prop explanation
   └─ "Get Started" → Next

3. Goal Setting
   ├─ "What's your goal?"
   ├─ Options:
   │  ├─ Improve grades
   │  ├─ Prepare for exams
   │  ├─ Master Mathematics
   │  └─ Improve English
   └─ Select goal

4. Subject Selection
   ├─ "Choose subjects"
   ├─ CSEC Mathematics (required or optional)
   ├─ CSEC English (required or optional)
   └─ Continue

5. Diagnostic Assessment
   ├─ Quick quiz (5-10 questions)
   ├─ Assess current level
   ├─ Identify weak areas
   └─ "Your learning profile ready"

6. Learning Behavior Assessment
   ├─ Quick questions
   ├─ "How do you learn best?"
   ├─ Persistence level
   └─ Problem-solving approach

7. Personalized Roadmap
   ├─ "Your learning path"
   ├─ Starting level display
   ├─ First recommended skill
   ├─ Timeline to mastery
   └─ [Start Learning]

Home Screen
```

### Daily Learning Flow

```
Home → Recommended Lesson
       ├─ Continue from yesterday OR
       └─ New lesson based on roadmap

Lesson Start
├─ Skill name
├─ Estimated time (5-10 min)
├─ What you'll learn
└─ [Start Lesson]

Lesson Content (Bite-Sized)
├─ Concept Introduction (1-2 min)
├─ Guided Practice (2-3 min)
├─ Challenge Question (1-2 min)
└─ Next → OR Finish

Completion Screen
├─ 🎉 Celebration animation
├─ XP earned
├─ Streak maintained/extended
├─ Medals earned
├─ [Next Lesson] OR [Back to Home]
```

### Coach Interaction Flow

```
Coach Screen → Chat Interface

User Question:
├─ "How do I solve this?"
├─ "Explain linear equations"
└─ "Give me a hint"

Coach Response (Guidance-Based):
├─ Ask clarifying question
├─ Provide scaffolded hint
├─ Guide thinking process
├─ Never give direct answer
└─ Encourage reflection

Example:
User: "How do I solve 2x + 5 = 13?"
Coach: "Great question! Let's think about this step by step.
        What operation would help you get rid of the +5?
        (Hint: You can do the same operation on both sides)"
```

---

## 🏛️ Information Architecture (Navigation)

### Bottom Tab Navigation (5 Tabs)

```
┌──────────────────────────────────────────┐
│         Page Content                     │
│                                          │
└──────────────────────────────────────────┘
┌──────────────────────────────────────────┐
│ 🏠  🌳  🎯  👥  👤                        │
│ Home Learn Coach Community Profile        │
└──────────────────────────────────────────┘

Tab 1: Home (🏠)
├─ Dashboard
├─ Quick stats
├─ Continue learning
└─ Recommendations

Tab 2: Learn (🌳)
├─ Skill tree
├─ Subject selection
└─ Progress tracking

Tab 3: Coach (🎯)
├─ AI chat
├─ Ask questions
└─ Get guidance

Tab 4: Community (👥)
├─ Leaderboards
├─ Challenges
├─ Study groups
└─ Weekly competitions

Tab 5: Profile (👤)
├─ Stats
├─ Achievements
├─ Notes
├─ Settings
└─ Account
```

---

## 📱 Screen Specifications

### 1. Authentication Screens

#### Sign Up Screen

```
┌──────────────────────────────┐
│  SAPPHIRE                    │
│  Learn. Grow. Master.        │
│                              │
│  [Email Input]               │
│  [Password Input]            │
│  [Confirm Password Input]    │
│                              │
│  ☑️ I agree to Terms         │
│                              │
│  [Create Account]            │
│                              │
│  Already have account?       │
│  [Sign In]                   │
│                              │
└──────────────────────────────┘
```

#### Sign In Screen

```
┌──────────────────────────────┐
│  SAPPHIRE                    │
│  Welcome Back                │
│                              │
│  [Email Input]               │
│  [Password Input]            │
│  [Forgot Password?]          │
│                              │
│  [Sign In]                   │
│                              │
│  Don't have an account?      │
│  [Sign Up]                   │
│                              │
└──────────────────────────────┘
```

### 2. Home Screen (Dashboard)

```
┌──────────────────────────────┐
│ 🎯 Good Morning, John!       │
├──────────────────────────────┤
│                              │
│ 🔥 Streak Counter            │
│ ┌────────────────────────┐   │
│ │ 🔥 15                  │   │
│ │ Days in a row          │   │
│ │ Keep it going! 💪      │   │
│ │ Points in: 12:45:32    │   │
│ └────────────────────────┘   │
│                              │
│ ⭐ Daily Goal: 200 XP        │
│ ████████░░ 120/200 XP        │
│                              │
│ 📚 Continue Learning          │
│ ┌────────────────────────┐   │
│ │ 📐 Linear Equations    │   │
│ │ 4 of 5 exercises done  │   │
│ │                        │   │
│ │ [CONTINUE →]           │   │
│ └────────────────────────┘   │
│                              │
│ 🤖 Coach Recommendation      │
│ "You're making great progress│
│  in Algebra! Master one more │
│  concept to unlock           │
│  Quadratic Equations"        │
│                              │
│ 🏆 Next Milestone            │
│ • 100 XP to next level ⬆️    │
│ • Algebra Master badge        │
│ • 30-day streak              │
│                              │
└──────────────────────────────┘
[🏠 Home] [🌳 Learn] [🎯 Coach] [👥 Community] [👤 Profile]
```

### 3. Learn - Skill Tree Screen

```
┌──────────────────────────────┐
│ 📐 MATHEMATICS               │
│ Mastery: ████████░░ 65%      │
├──────────────────────────────┤
│                              │
│ Unit 1: Number Operations    │
│                              │
│ ✅ Integers & Numbers        │
│ 100% mastery | 240 XP        │
│ 🥇 Gold Medal                │
│                              │
│ ✅ Fractions Basics          │
│ 95% mastery | 180 XP         │
│ 🥇 Gold Medal                │
│                              │
│ ▶️ Linear Equations          │
│ 65% mastery | 120 XP         │
│ 🥈 Silver Medal              │
│ [Continue]  [Restart]        │
│                              │
│ 🔒 Quadratic Equations       │
│ Unlock when Linear = 70%     │
│                              │
│ Unit 2: Algebra (Locked)     │
│ Complete Unit 1 to unlock    │
│                              │
│ ────────────────────────────│
│ 📚 ENGLISH LANGUAGE          │
│ Mastery: ████░░░░░░ 45%     │
│ [View Tree]                  │
│                              │
└──────────────────────────────┘
[🏠 Home] [🌳 Learn] [🎯 Coach] [👥 Community] [👤 Profile]
```

### 4. Lesson Interface

#### Lesson Start

```
┌──────────────────────────────┐
│ ← Back                       │
├──────────────────────────────┤
│                              │
│ Linear Equations             │
│ Part 1: Solving Basics       │
│                              │
│ ⏱️  5-7 minutes              │
│ 📚 3 lessons + 1 quiz        │
│ ⭐ +20 XP when completed     │
│                              │
│ ┌────────────────────────┐   │
│ │ 🔥 Streak: 15 days     │   │
│ │ Complete to keep it!   │   │
│ └────────────────────────┘   │
│                              │
│ [START LESSON]               │
│ [View Notes]  [Get Help]     │
│                              │
└──────────────────────────────┘
```

#### During Lesson - Exercise

```
┌──────────────────────────────┐
│ ← Back │ Linear Eq │ ●●○○○   │
│        │ Step 2/5  │ Progress│
├──────────────────────────────┤
│                              │
│ Solve for x:                 │
│ 2x + 5 = 13                  │
│                              │
│ Your Answer:                 │
│ x = [        ]               │
│                              │
│ [Check Answer]               │
│                              │
│ [Show Hint]  [Explain]       │
│                              │
│ 💡 Hint (Optional):          │
│ "What's the first step?"     │
│                              │
└──────────────────────────────┘
```

#### Celebration - Correct Answer

```
┌──────────────────────────────┐
│                              │
│        ✨ CORRECT! ✨        │
│                              │
│           x = 4              │
│                              │
│       Excellent work! 👏     │
│                              │
│          +5 XP               │
│                              │
│      [NEXT EXERCISE →]       │
│                              │
└──────────────────────────────┘
```

#### Lesson Completion

```
┌──────────────────────────────┐
│                              │
│    ✨ LESSON COMPLETE! ✨    │
│                              │
│  Linear Equations - Part 1   │
│                              │
│      +20 XP EARNED           │
│   🔥 Streak: 15 Days        │
│                              │
│   Performance: 80% ████░    │
│                              │
│  Skills Unlocked:            │
│  ▶️ Quadratic Equations      │
│  ▶️ Polynomial Functions     │
│                              │
│  You're #15 in Leaderboard   │
│                              │
│ [Back to Tree] [Next →]      │
│                              │
└──────────────────────────────┘
```

### 5. Coach (AI Chat) Screen

```
┌──────────────────────────────┐
│ 🤖 Sapphire Coach            │
│ Always here to help          │
├──────────────────────────────┤
│                              │
│ Coach: "What would you like  │
│ help with today?"            │
│                              │
│ ─────────────────────────    │
│                              │
│ You: "How do I solve         │
│  2x + 5 = 13?"              │
│                              │
│ Coach: "Great question!      │
│ Let's work through this      │
│ step by step.                │
│                              │
│ First, what operation would  │
│ help you remove the +5?      │
│                              │
│ (Hint: Think about opposite  │
│  operations)"                │
│                              │
│ ─────────────────────────    │
│                              │
│ [Message Input]              │
│ "Type your answer..."        │
│ [Send →]                     │
│                              │
└──────────────────────────────┘
[🏠 Home] [🌳 Learn] [🎯 Coach] [👥 Community] [👤 Profile]
```

### 6. Community - Leaderboard

```
┌──────────────────────────────┐
│ 🏆 Leaderboards              │
│ [This Week ▼]                │
├──────────────────────────────┤
│                              │
│ 🥇 1. Sarah M. - 2,540 XP   │
│        Streak: 🔥 25 days    │
│                              │
│ 🥈 2. Alex P. - 2,180 XP    │
│        Streak: 🔥 19 days    │
│                              │
│ 🥉 3. Your Name - 1,850 XP  │
│        Streak: 🔥 15 days    │
│ ➜ You're here!              │
│                              │
│ 4. James L. - 1,620 XP      │
│    Streak: 🔥 12 days        │
│                              │
│ 5. Maria G. - 1,540 XP      │
│    Streak: 🔥 8 days         │
│                              │
│ [View Full] [Join Challenge] │
│                              │
│ ─────────────────────────────│
│                              │
│ 🎯 Active Challenges         │
│                              │
│ "Math Masters Week"          │
│ Complete 5 Algebra lessons   │
│ 50/200 XP earned             │
│ [Join] [View Details]        │
│                              │
└──────────────────────────────┘
[🏠 Home] [🌳 Learn] [🎯 Coach] [👥 Community] [👤 Profile]
```

### 7. Profile - Stats & Achievements

```
┌──────────────────────────────┐
│ 👤 John Doe                  │
│ Level 12  •  4,240 XP Total  │
├──────────────────────────────┤
│                              │
│ This Week: ⭐ 850/1000 XP   │
│ ████████░░ 85%              │
│                              │
│ Streak: 🔥 15 Days          │
│                              │
│ ────────────────────────────│
│                              │
│ Subject Progress             │
│                              │
│ 📐 Mathematics               │
│ ████████░░ 65% | 2,140 XP   │
│                              │
│ 📚 English                   │
│ █████░░░░░ 45% | 1,200 XP   │
│                              │
│ ────────────────────────────│
│                              │
│ 🏅 Achievements              │
│ 🥇 Math Master               │
│ 🔥 Week Warrior              │
│ 🎓 Knowledge Seeker          │
│ 💪 Consistent Learner        │
│ ➜ +3 more                    │
│                              │
│ ────────────────────────────│
│                              │
│ [View Analytics] [Settings]  │
│                              │
└──────────────────────────────┘
[🏠 Home] [🌳 Learn] [🎯 Coach] [👥 Community] [👤 Profile]
```

---

## 🎮 Gamification Systems

### Streak System

```
🔥 Daily Streak
├─ Resets after 24 hours of inactivity
├─ Milestone bonuses: 7, 14, 30, 60, 100+ days
├─ 2x XP multiplier after 7 days
├─ Loss notification before reset
└─ "Don't break the chain" motivation
```

### XP System

```
How to earn XP:
├─ Lesson completion:     +20 XP
├─ Exercise correct:      +5 XP
├─ Quiz perfect score:    +50 XP
├─ Skill mastered:        +25 XP
├─ Daily goal achieved:   +100 bonus XP
├─ Streak bonus (7+):     2x multiplier
└─ First lesson of day:   +10 bonus XP

Levels:
├─ Level 1:   0 XP
├─ Level 2:   500 XP
├─ Level 3:   1,200 XP
├─ Level 4:   2,200 XP
├─ Level 5:   3,500 XP
├─ ...
└─ Level 100+ (endless progression)
```

### Medal System

```
Bronze Medal (50%+ mastery):
├─ Earned on first lesson completion
├─ Unlocks next skill tier
└─ Shows initial progress

Silver Medal (70%+ mastery):
├─ Earned by practicing and improving
├─ Shows growing expertise
└─ 1.5x XP earning

Gold Medal (90%+ mastery):
├─ Earned by true mastery
├─ Prestigious achievement
├─ 2x XP earning
└─ Unlocks "Master" achievements
```

### Achievements & Badges

```
Consistency:
├─ 🔥 Week Warrior (7-day streak)
├─ 🔥 Month Master (30-day streak)
├─ 🔥 Century Streak (100-day streak)
└─ 💪 Consistent Learner (Never miss 3 weeks)

Performance:
├─ 🎯 Perfect Score (100% on a lesson)
├─ 🏆 Skill Master (90%+ on 5 skills)
├─ 🥇 All Gold (All skills at gold medal)
└─ 👑 Legendary (Mastered all subjects)

Progression:
├─ 🎓 Knowledge Seeker (500 XP)
├─ 📚 Scholar (2,000 XP)
├─ 🧠 Expert (5,000 XP)
└─ 🌟 Virtuoso (10,000 XP)
```

---

## 🎯 Lesson Structure

Each lesson is optimized for 5-10 minute sessions:

```
1. Introduction (1-2 min)
   ├─ Concept explanation
   ├─ Real-world example
   └─ Learning objective

2. Guided Practice (2-3 min)
   ├─ Worked example
   ├─ Think-aloud narration
   └─ Step-by-step breakdown

3. Challenge Question (1-2 min)
   ├─ Apply concept
   ├─ Show work
   └─ Get feedback

4. Reflection (30-60 sec)
   ├─ What did you learn?
   ├─ Where did you struggle?
   └─ Ready for next?

5. Reward (instant)
   ├─ XP display
   ├─ Celebration animation
   ├─ Streak confirmation
   └─ Next action suggestion
```

---

## 🤖 AI Coach Behavior

### Coaching Principles

```
ALWAYS:
├─ Ask clarifying questions
├─ Provide scaffolded hints
├─ Guide thinking process
├─ Encourage reflection
├─ Celebrate effort
└─ Build confidence

NEVER:
├─ Give direct answers
├─ Explain without context
├─ Rush to solutions
├─ Criticize mistakes
├─ Assume understanding
└─ Replace human tutors
```

### Example Interactions

```
Scenario 1: Student stuck on math problem
─────────────────────────────────────────
User: "I don't know how to solve this"
Coach: "That's okay! Let's break it down.
        What's the first thing we need to do
        to get x by itself?
        (Hint: Look at what's being added/subtracted)"

User: "Subtract 5?"
Coach: "Exactly! And remember, what you do
        to one side, you must do to the other.
        So subtract 5 from both sides.
        What do you get?"

User: "2x = 8"
Coach: "Perfect! Now what's the next step?
        (Hint: What operation is opposite of multiplication?)"
```

---

## 📊 Success Metrics

Optimize the redesign for:

```
Engagement:
├─ Daily active users (DAU)
├─ Session completion rate
├─ Average session length
├─ Lesson completion rate
└─ Return rate (next day)

Learning:
├─ Skill mastery rate
├─ Performance improvement
├─ Mistake reduction
├─ Confidence increase
└─ Exam score improvement

Retention:
├─ 7-day retention
├─ 30-day retention
├─ Streak maintenance
├─ Churn rate
└─ Lifetime value

Community:
├─ Leaderboard participation
├─ Challenge completion
├─ Social sharing
├─ Friend invites
└─ Community growth
```

---

**Version**: 1.0  
**Status**: Ready for Implementation  
**Next Step**: Component Architecture & UI Kit Development
