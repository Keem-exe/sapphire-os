# Sapphire OS V1 - API Integration Guide

**Version**: 1.0  
**Status**: Reference Documentation  
**Backend**: Flask API (Sapphire Lite Engine)

---

## 🔌 API Overview

### Base URL
```
Development:  http://localhost:5000/api/v1
Production:   https://api.sapphire.app/api/v1
```

### Authentication
```
Type:    Bearer Token (JWT)
Header:  Authorization: Bearer <token>
Refresh: POST /auth/refresh returns new token
```

### Response Format
```json
{
  "success": true,
  "data": { /* endpoint-specific data */ },
  "message": "Success message",
  "timestamp": "2024-06-15T10:30:00Z"
}
```

---

## 🔐 Auth Endpoints

### POST /auth/register
**Create new user account**

```javascript
// Request
{
  "email": "user@example.com",
  "password": "SecurePass123!",
  "firstName": "John",
  "lastName": "Doe"
}

// Response (201)
{
  "success": true,
  "data": {
    "id": "user-id-uuid",
    "email": "user@example.com",
    "firstName": "John",
    "lastName": "Doe",
    "token": "eyJhbGc...",
    "refreshToken": "eyJhbGc..."
  }
}
```

### POST /auth/login
**User login**

```javascript
// Request
{
  "email": "user@example.com",
  "password": "SecurePass123!"
}

// Response (200)
{
  "success": true,
  "data": {
    "id": "user-id-uuid",
    "email": "user@example.com",
    "firstName": "John",
    "token": "eyJhbGc...",
    "refreshToken": "eyJhbGc...",
    "isOnboarded": true
  }
}
```

### POST /auth/refresh
**Refresh access token**

```javascript
// Request
{
  "refreshToken": "eyJhbGc..."
}

// Response (200)
{
  "success": true,
  "data": {
    "token": "eyJhbGc...",
    "refreshToken": "eyJhbGc...",
    "expiresIn": 3600
  }
}
```

### POST /auth/forgot-password
**Request password reset**

```javascript
// Request
{
  "email": "user@example.com"
}

// Response (200)
{
  "success": true,
  "message": "Reset email sent"
}
```

### POST /auth/reset-password
**Reset password with token**

```javascript
// Request
{
  "token": "reset-token",
  "password": "NewSecurePass123!"
}

// Response (200)
{
  "success": true,
  "message": "Password reset successful"
}
```

---

## 👤 User Endpoints

### GET /user/profile
**Get current user profile**

```javascript
// Response (200)
{
  "success": true,
  "data": {
    "id": "user-id",
    "email": "user@example.com",
    "firstName": "John",
    "lastName": "Doe",
    "avatar": "https://...",
    "level": 12,
    "totalXP": 4240,
    "currentStreak": 15,
    "longestStreak": 25,
    "joinDate": "2024-01-15",
    "preferences": {
      "darkMode": true,
      "notifications": true,
      "emailUpdates": false
    }
  }
}
```

### PATCH /user/profile
**Update user profile**

```javascript
// Request
{
  "firstName": "John",
  "lastName": "Doe",
  "avatar": "base64_data",
  "preferences": {
    "darkMode": true,
    "notifications": true
  }
}

// Response (200)
{
  "success": true,
  "data": { /* updated user */ }
}
```

### GET /user/dashboard
**Get dashboard data (daily personalized info)**

```javascript
// Response (200)
{
  "success": true,
  "data": {
    "user": { /* user profile */ },
    "streak": {
      "current": 15,
      "pointsIn": "12:45:32"
    },
    "xpToday": {
      "earned": 120,
      "goal": 200
    },
    "continueLearning": {
      "lessonId": "lesson-123",
      "skillName": "Linear Equations",
      "progressExercises": 4,
      "totalExercises": 5
    },
    "recommendation": {
      "skillId": "skill-456",
      "reason": "You're making great progress in Algebra!..."
    },
    "upcomingMilestones": [
      {
        "id": "milestone-1",
        "type": "xp",
        "threshold": 100,
        "current": 85,
        "label": "100 XP to next level"
      }
    ]
  }
}
```

### GET /user/stats
**Get user stats and analytics**

```javascript
// Response (200)
{
  "success": true,
  "data": {
    "xpStats": {
      "total": 4240,
      "thisWeek": 850,
      "thisMonth": 3200
    },
    "streakStats": {
      "current": 15,
      "longest": 25,
      "allTime": 180  // total days with activity
    },
    "subjectProgress": [
      {
        "subjectId": "mathematics",
        "name": "CSEC Mathematics",
        "mastery": 0.65,
        "xpEarned": 2140,
        "skillsCompleted": 8,
        "totalSkills": 12
      },
      {
        "subjectId": "english",
        "name": "CSEC English Language",
        "mastery": 0.45,
        "xpEarned": 1200,
        "skillsCompleted": 4,
        "totalSkills": 9
      }
    ],
    "achievements": {
      "earned": 8,
      "total": 25
    }
  }
}
```

---

## 📚 Subject & Skill Endpoints

### GET /subjects
**List all subjects**

```javascript
// Response (200)
{
  "success": true,
  "data": [
    {
      "id": "mathematics",
      "name": "CSEC Mathematics",
      "description": "Complete CSEC Math curriculum",
      "icon": "📐",
      "color": "#3B82F6",
      "units": 5
    },
    {
      "id": "english",
      "name": "CSEC English Language",
      "description": "CSEC English exam prep",
      "icon": "📚",
      "color": "#EC4899",
      "units": 4
    }
  ]
}
```

### GET /subjects/:subjectId/tree
**Get skill tree for subject**

```javascript
// Response (200)
{
  "success": true,
  "data": {
    "subjectId": "mathematics",
    "subjectName": "CSEC Mathematics",
    "units": [
      {
        "id": "unit-1",
        "name": "Unit 1: Number Operations",
        "position": 1,
        "skills": [
          {
            "id": "skill-1",
            "name": "Integers & Numbers",
            "description": "Understanding basic integers",
            "position": 1,
            "status": "completed",  // completed, in_progress, locked
            "mastery": 1.0,
            "xpEarned": 240,
            "medal": "gold",  // gold, silver, bronze
            "prerequisites": [],
            "estimatedTime": 45  // minutes
          },
          {
            "id": "skill-2",
            "name": "Fractions",
            "position": 2,
            "status": "in_progress",
            "mastery": 0.65,
            "xpEarned": 120,
            "medal": "silver",
            "prerequisites": ["skill-1"],
            "estimatedTime": 50
          }
        ]
      }
    ]
  }
}
```

### GET /subjects/:subjectId/skills/:skillId
**Get skill details**

```javascript
// Response (200)
{
  "success": true,
  "data": {
    "id": "skill-1",
    "name": "Integers & Numbers",
    "description": "...",
    "status": "completed",
    "mastery": 1.0,
    "xpEarned": 240,
    "medal": "gold",
    "lessons": [
      {
        "id": "lesson-1",
        "title": "Introduction to Integers",
        "duration": 8,
        "status": "completed",
        "xp": 20,
        "order": 1
      },
      {
        "id": "lesson-2",
        "title": "Adding & Subtracting",
        "duration": 10,
        "status": "completed",
        "xp": 30,
        "order": 2
      }
    ],
    "relatedSkills": [
      { "id": "skill-3", "name": "Related Skill" }
    ]
  }
}
```

---

## 📖 Lesson Endpoints

### GET /lessons/:lessonId
**Get lesson content**

```javascript
// Response (200)
{
  "success": true,
  "data": {
    "id": "lesson-1",
    "skillId": "skill-1",
    "title": "Introduction to Integers",
    "description": "Learn about positive and negative integers",
    "duration": 8,  // minutes
    "order": 1,
    "sections": [
      {
        "id": "section-1",
        "type": "introduction",
        "content": "Integers are whole numbers...",
        "examples": [
          { "text": "5, -3, 0" }
        ]
      },
      {
        "id": "section-2",
        "type": "guided_practice",
        "content": "Let's solve an example...",
        "example": {
          "problem": "What is -5 + 3?",
          "solution": "We move 5 left, then 3 right: -2",
          "steps": ["Step 1: Start at -5...", "Step 2: Move right 3..."]
        }
      },
      {
        "id": "section-3",
        "type": "exercise",
        "exercises": [
          {
            "id": "exercise-1",
            "problem": "Solve: 2x + 5 = 13",
            "type": "text",  // text, multiple_choice, numeric, etc.
            "hints": [
              "Subtract 5 from both sides",
              "Now divide both sides by 2"
            ],
            "correctAnswer": "4",
            "explanation": "x = 4 is correct because..."
          }
        ]
      },
      {
        "id": "section-4",
        "type": "reflection",
        "content": "What did you learn?",
        "questions": [
          { "text": "What are integers?" }
        ]
      }
    ]
  }
}
```

### GET /lessons/:lessonId/exercises/:exerciseId
**Get specific exercise**

```javascript
// Response (200)
{
  "success": true,
  "data": {
    "id": "exercise-1",
    "lessonId": "lesson-1",
    "problem": "Solve: 2x + 5 = 13",
    "type": "text",
    "hints": [
      {
        "id": "hint-1",
        "text": "Subtract 5 from both sides",
        "level": 1
      },
      {
        "id": "hint-2",
        "text": "Now divide both sides by 2",
        "level": 2
      }
    ],
    "correctAnswer": "4",
    "explanation": "x = 4 because 2(4) + 5 = 8 + 5 = 13",
    "xpReward": 5
  }
}
```

### POST /lessons/:lessonId/exercises/:exerciseId/check
**Check exercise answer**

```javascript
// Request
{
  "answer": "4",
  "hintsUsed": 0
}

// Response (200) - Correct
{
  "success": true,
  "data": {
    "correct": true,
    "message": "Excellent! Your answer is correct.",
    "explanation": "x = 4 because...",
    "xpEarned": 5,
    "nextExercise": {
      "id": "exercise-2",
      "problem": "Next problem..."
    }
  }
}

// Response (200) - Incorrect
{
  "success": true,
  "data": {
    "correct": false,
    "message": "Not quite right. Try again!",
    "hint": "Have you tried subtracting 5 from both sides?",
    "canRetry": true
  }
}
```

### GET /lessons/:lessonId/exercises/:exerciseId/hint
**Get hint for exercise**

```javascript
// Query params
?level=1  // hint level (1, 2, 3, etc.)

// Response (200)
{
  "success": true,
  "data": {
    "hint": "Subtract 5 from both sides",
    "level": 1,
    "hasMoreHints": true
  }
}
```

### POST /lessons/:lessonId/save-progress
**Auto-save lesson progress**

```javascript
// Request
{
  "sectionIndex": 2,
  "exerciseAnswers": {
    "exercise-1": "4"
  },
  "timeSpent": 120  // seconds
}

// Response (200)
{
  "success": true,
  "message": "Progress saved"
}
```

### POST /lessons/:lessonId/complete
**Mark lesson as complete**

```javascript
// Request
{
  "performance": 0.8,  // 0-1
  "timeSpent": 480,  // seconds
  "exercisesCorrect": 4,
  "exercisesTotal": 5
}

// Response (200)
{
  "success": true,
  "data": {
    "xpEarned": 20,
    "streakMaintained": true,
    "skillProgress": 0.65,
    "nextLessonId": "lesson-2",
    "nextSkillsUnlocked": ["skill-3"],
    "medalEarned": null,
    "achievementsUnlocked": []
  }
}
```

---

## 🤖 Coach Endpoints

### POST /coach/message
**Send message to AI coach**

```javascript
// Request
{
  "message": "How do I solve 2x + 5 = 13?",
  "context": {
    "lessonId": "lesson-1",
    "exerciseId": "exercise-1",
    "currentTopic": "Linear Equations"
  }
}

// Response (200)
{
  "success": true,
  "data": {
    "id": "msg-123",
    "role": "coach",
    "message": "Great question! Let's think about this step by step. What operation would help you get rid of the +5? (Hint: You can do the same operation on both sides)",
    "type": "guidance",  // guidance, hint, explanation, encouragement
    "timestamp": "2024-06-15T10:30:00Z"
  }
}
```

### GET /coach/context
**Get current context for coach**

```javascript
// Response (200)
{
  "success": true,
  "data": {
    "currentLesson": { /* lesson data */ },
    "currentExercise": { /* exercise data */ },
    "userProgress": { /* user progress in skill */ },
    "recentMistakes": [ /* array of recent mistakes */ ]
  }
}
```

### GET /coach/history
**Get conversation history**

```javascript
// Query params
?limit=50
?lessonId=lesson-1  // optional filter

// Response (200)
{
  "success": true,
  "data": [
    {
      "id": "msg-1",
      "role": "user",
      "message": "How do I solve this?",
      "timestamp": "2024-06-15T10:00:00Z"
    },
    {
      "id": "msg-2",
      "role": "coach",
      "message": "Let's think step by step...",
      "timestamp": "2024-06-15T10:00:30Z"
    }
  ]
}
```

---

## 🏆 Gamification Endpoints

### GET /user/achievements
**Get user achievements**

```javascript
// Response (200)
{
  "success": true,
  "data": [
    {
      "id": "achievement-1",
      "name": "Week Warrior",
      "description": "Maintain a 7-day streak",
      "icon": "🔥",
      "unlocked": true,
      "unlockedDate": "2024-06-01T10:00:00Z",
      "category": "consistency"
    },
    {
      "id": "achievement-2",
      "name": "Perfect Score",
      "description": "Get 100% on a lesson",
      "icon": "🎯",
      "unlocked": false,
      "progress": 0,
      "category": "performance"
    }
  ]
}
```

### POST /user/achievements/check
**Check for newly unlocked achievements**

Called after lesson completion, XP gain, etc.

```javascript
// Request
{
  "event": "lesson_completed",  // or other event types
  "data": { /* event-specific data */ }
}

// Response (200)
{
  "success": true,
  "data": {
    "newAchievements": [
      {
        "id": "achievement-5",
        "name": "Scholar",
        "description": "Earn 2000 XP",
        "icon": "📚"
      }
    ]
  }
}
```

### GET /leaderboard
**Get global leaderboard**

```javascript
// Query params
?timeframe=week  // week, month, all_time
?subject=mathematics  // optional subject filter
?limit=50

// Response (200)
{
  "success": true,
  "data": {
    "entries": [
      {
        "rank": 1,
        "userId": "user-1",
        "name": "Sarah M.",
        "avatar": "https://...",
        "xp": 2540,
        "streak": 25,
        "subject": "all"
      },
      {
        "rank": 2,
        "userId": "user-2",
        "name": "Alex P.",
        "avatar": "https://...",
        "xp": 2180,
        "streak": 19,
        "subject": "all"
      }
    ],
    "userRank": {
      "rank": 3,
      "xp": 1850,
      "streak": 15
    }
  }
}
```

---

## 🎯 Challenge Endpoints

### GET /challenges
**Get active challenges**

```javascript
// Query params
?limit=20
?filter=active

// Response (200)
{
  "success": true,
  "data": [
    {
      "id": "challenge-1",
      "title": "Math Masters Week",
      "description": "Complete 5 Algebra lessons",
      "target": 5,
      "progress": 2,
      "xpReward": 50,
      "status": "active",
      "endsAt": "2024-06-22T23:59:59Z",
      "participants": 245,
      "joined": true
    }
  ]
}
```

### POST /challenges/:id/join
**Join a challenge**

```javascript
// Response (200)
{
  "success": true,
  "data": {
    "challengeId": "challenge-1",
    "joined": true,
    "startedAt": "2024-06-15T10:30:00Z"
  }
}
```

---

## 📝 Notes Endpoints

### GET /user/notes
**Get user notes**

```javascript
// Query params
?subjectId=mathematics  // optional filter
?limit=50
?sort=newest

// Response (200)
{
  "success": true,
  "data": [
    {
      "id": "note-1",
      "title": "Linear Equations Notes",
      "content": "Markdown content here",
      "subjectId": "mathematics",
      "skillId": "skill-5",
      "createdAt": "2024-06-10T10:00:00Z",
      "updatedAt": "2024-06-15T10:00:00Z",
      "preview": "Linear equations are equations of the form..."
    }
  ]
}
```

### GET /user/notes/:noteId
**Get specific note**

```javascript
// Response (200)
{
  "success": true,
  "data": {
    "id": "note-1",
    "title": "Linear Equations Notes",
    "content": "Full markdown content here...",
    "subjectId": "mathematics",
    "skillId": "skill-5",
    "createdAt": "2024-06-10T10:00:00Z",
    "updatedAt": "2024-06-15T10:00:00Z"
  }
}
```

### POST /user/notes
**Create note**

```javascript
// Request
{
  "title": "Linear Equations Notes",
  "content": "Markdown content here",
  "subjectId": "mathematics",
  "skillId": "skill-5"
}

// Response (201)
{
  "success": true,
  "data": { /* created note */ }
}
```

### PATCH /user/notes/:noteId
**Update note**

```javascript
// Request
{
  "title": "Updated Title",
  "content": "Updated content"
}

// Response (200)
{
  "success": true,
  "data": { /* updated note */ }
}
```

### DELETE /user/notes/:noteId
**Delete note**

```javascript
// Response (204)
```

---

## 🔌 Error Handling

### Error Response Format

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Validation failed",
    "details": [
      {
        "field": "email",
        "message": "Invalid email format"
      }
    ]
  },
  "timestamp": "2024-06-15T10:30:00Z"
}
```

### Common Error Codes

```
VALIDATION_ERROR    (400) - Request validation failed
UNAUTHORIZED        (401) - Missing/invalid auth token
FORBIDDEN           (403) - Insufficient permissions
NOT_FOUND           (404) - Resource not found
CONFLICT            (409) - Resource already exists
RATE_LIMIT          (429) - Too many requests
SERVER_ERROR        (500) - Internal server error
```

---

## 🔄 Integration Patterns

### Setting Up API Client

```typescript
// lib/api/client.ts
import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add auth token to requests
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle token refresh
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      // Refresh token and retry
      const refreshToken = localStorage.getItem('refreshToken');
      // ... implement refresh logic
    }
    return Promise.reject(error);
  }
);

export default apiClient;
```

### Using API in Components

```typescript
// hooks/useLesson.ts
import { useQuery } from '@tanstack/react-query';
import apiClient from '@/lib/api/client';

export function useLesson(lessonId: string) {
  return useQuery({
    queryKey: ['lesson', lessonId],
    queryFn: () => apiClient.get(`/lessons/${lessonId}`).then(r => r.data.data),
    staleTime: 5 * 60 * 1000  // 5 minutes
  });
}

// In component
function LessonPage({ lessonId }: { lessonId: string }) {
  const { data: lesson, isLoading, error } = useLesson(lessonId);
  
  if (isLoading) return <LessonSkeleton />;
  if (error) return <ErrorMessage />;
  
  return <Lesson lesson={lesson} />;
}
```

---

**Version**: 1.0  
**Status**: Reference Guide Ready  
**Next**: Backend API Development
