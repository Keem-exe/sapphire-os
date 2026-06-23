# Sapphire OS V1 - Design System

**Version**: 1.0  
**Status**: Design Specification  
**Platform**: Mobile-First (iOS/Android compatible)  
**Framework**: Next.js 16 + React 19 + Tailwind CSS 4

---

## 🎨 Brand Identity

### Core Principles

- **Modern**: Contemporary design language, not childish
- **Premium**: High-end aesthetic like Spotify/Linear/Arc
- **Intelligent**: AI-native, AI-visible, AI-integrated
- **Personalized**: Every screen adapts to the user
- **Dark-First**: Comfortable for long study sessions
- **Performance**: Fast, responsive, delightful

### Design Inspirations

```
├─ Spotify: Personalization, dark UI, premium feel
├─ Discord: Modern dark interface, communities
├─ Linear: Minimalist, focused, productive
├─ Notion: Clean hierarchy, flexibility
├─ Duolingo: Engagement, streaks, gamification
└─ Arc Browser: Premium, modern, youth-focused
```

---

## 🎭 Color Palette

### Primary Colors

#### Sapphire Blue (Primary)
```
Light: #3B82F6 (for light mode / accents)
Base:  #2563EB (primary actions)
Dark:  #1E40AF (hover states)
Usage: Primary CTAs, highlights, accents, focus states
```

#### Deep Navy (Secondary)
```
Light: #1F2937
Base:  #111827 (main background)
Dark:  #0F172A (elevated surfaces)
Usage: Backgrounds, cards, hierarchy
```

#### Emerald Green (Success/Accent)
```
Light: #34D399
Base:  #10B981 (primary accent)
Dark:  #059669 (hover)
Usage: Positive feedback, achievements, XP earned, success states
```

### Status & Feedback Colors

```
Success:    #10B981 (Emerald)
Warning:    #F59E0B (Amber)
Error:      #EF4444 (Red)
Info:       #3B82F6 (Sapphire)
Neutral:    #6B7280 (Gray)
```

### Medal Colors

```
🥇 Gold:    #FCD34D
🥈 Silver:  #E5E7EB
🥉 Bronze:  #D97706
```

### Subject & Topic Tags

```
CSEC Mathematics:  #3B82F6 (Sapphire Blue)
CSEC English:      #EC4899 (Pink)
UI Element Subtle: #374151 (Gray-700 for dividers)
```

### Dark Mode Palette (Primary)

```
Background:        #0F172A (slate-950)
Surface:           #1E293B (slate-900)
Surface Elevated:  #334155 (slate-800)
Text Primary:      #F1F5F9 (slate-100)
Text Secondary:    #CBD5E1 (slate-300)
Border:            #475569 (slate-600)
Hover:             #1E293B with opacity
Focus Ring:        #3B82F6 (sapphire)
```

### Light Mode Palette (Secondary)

```
Background:        #F8FAFC (slate-50)
Surface:           #FFFFFF
Surface Elevated:  #F1F5F9 (slate-100)
Text Primary:      #0F172A (slate-950)
Text Secondary:    #475569 (slate-600)
Border:            #E2E8F0 (slate-200)
Hover:             #F1F5F9 with opacity
Focus Ring:        #3B82F6 (sapphire)
```

---

## 🔤 Typography

### Font Stack

```
Primary: 'Inter', 'Segoe UI', system-ui, sans-serif
Monospace: 'Fira Code', monospace (for code/formulas)
Fallback: system-ui stack
```

### Type Scale

```
Hero (H1):          48px / 3rem    font-bold   line-height: 1.2
Title (H2):         36px / 2.25rem font-bold   line-height: 1.3
Subtitle (H3):      28px / 1.75rem font-semibold line-height: 1.4
Section (H4):       20px / 1.25rem font-semibold line-height: 1.5
Body Large:         18px / 1.125rem font-normal line-height: 1.6
Body:               16px / 1rem    font-normal line-height: 1.6
Body Small:         14px / 0.875rem font-normal line-height: 1.5
Caption:            12px / 0.75rem font-medium line-height: 1.4
Tiny:               11px / 0.6875rem font-medium line-height: 1.3
```

### Font Weights

```
Thin:      100
Regular:   400 (body text, descriptions)
Medium:    500 (labels, small headers)
Semibold:  600 (section headers, emphasis)
Bold:      700 (page titles, strong emphasis)
```

### Line Heights

```
Tight:     1.2 (titles)
Normal:    1.5 (UI)
Relaxed:   1.6 (body text)
Loose:     1.8 (descriptions)
```

---

## 🎛️ Spacing System

### Base Unit: 4px

```
Spacing Scale:
2px    (xs)   - smallest gaps
4px    (sm)   - tight spacing
8px    (md)   - normal spacing
12px   (lg)   - relaxed spacing
16px   (xl)   - generous spacing
24px   (2xl)  - large spacing
32px   (3xl)  - extra large
48px   (4xl)  - massive spacing
64px   (5xl)  - huge spacing
```

### Application

```
Component Padding:
├─ Buttons:        12px 16px (vertical/horizontal)
├─ Cards:          16px padding
├─ Inputs:         12px 16px
├─ Modals:         24px
└─ Page Margins:   16px (mobile) / 24px (tablet) / 32px (desktop)

Gap Patterns:
├─ Form fields:    8px vertical gap
├─ List items:     8px gap
├─ Card grid:      12px gap
├─ Section gap:    24px
└─ Page sections:  32px
```

---

## 🔴 Border & Radius

### Border Radius

```
Sharp:     0px     (rare)
Tight:     4px     (inputs, small elements)
Normal:    8px     (cards, buttons)
Round:     12px    (rounded cards, modals)
Circle:    9999px  (avatars, badges)
```

### Border Width

```
Default:   1px
Focus:     2px (for focus states)
Bold:      2px (for prominent dividers)
```

### Border Color

```
Default:   #374151 (gray-700) in dark mode
Subtle:    #1F2937 (gray-800) in dark mode
Focus:     #3B82F6 (sapphire) 2px
Error:     #EF4444 (red)
Success:   #10B981 (emerald)
```

---

## 🎬 Motion & Animation

### Principles

- Fast and snappy
- Meaningful not excessive
- Follows natural easing
- Respects prefers-reduced-motion

### Timing

```
Quick:      150ms  (micro-interactions, hovers)
Default:    300ms  (standard transitions)
Slow:       500ms  (page transitions, celebrations)
Extra:      700ms  (long animations, celebrations)
```

### Easing Functions

```
Enter:      cubic-bezier(0.4, 0, 0.2, 1)     (ease-in-out)
Exit:       cubic-bezier(0.4, 0, 1, 1)       (ease-in)
Spring:     cubic-bezier(0.34, 1.56, 0.64, 1) (bounce)
Linear:     linear                            (progress bars)
```

### Standard Transitions

```
Hover State:
├─ Scale:    1 → 1.02
├─ Duration: 150ms
├─ Easing:   ease-out
└─ Shadow:   increase

Focus State:
├─ Ring:     2px sapphire
├─ Offset:   2px
├─ Duration: 150ms
└─ Easing:   ease-out

Page Transition:
├─ Fade:     0 → 1 opacity
├─ Slide:    12px down → 0px
├─ Duration: 300ms
└─ Easing:   ease-in-out

Celebration:
├─ Scale:    0.8 → 1.2 → 1
├─ Rotate:   0 → 360deg
├─ Duration: 500-700ms
└─ Easing:   spring curve
```

---

## 📐 Responsive Design

### Breakpoints

```
Mobile:    < 640px   (primary)
Tablet:    640px - 1024px
Desktop:   1024px - 1280px
Wide:      > 1280px
```

### Layout Scaling

```
Mobile (< 640px):
├─ Full bleed pages
├─ 16px horizontal margins
├─ Single column
├─ Bottom navigation (sticky)
└─ Touch-friendly (48px minimum tap targets)

Tablet (640px - 1024px):
├─ 24px margins
├─ 2-column layouts possible
├─ Sidebar + main content
└─ Bottom navigation or top

Desktop (> 1024px):
├─ 32px margins
├─ 3-column layouts
├─ Sidebar + main + panel
├─ Top navigation alternative
└─ Larger content areas
```

---

## 🎯 Component Design

### Button Styles

#### Primary Button
```
Background: Sapphire Blue (#2563EB)
Text:       White (#F1F5F9)
Padding:    12px 16px
Border:     None
Hover:      #1E40AF (darker)
Active:     #1E3A8A (even darker)
Focus:      2px #3B82F6 ring
State:      Disabled: opacity 50%
```

#### Secondary Button
```
Background: Surface (#1E293B)
Border:     1px #475569
Text:       Text Primary (#F1F5F9)
Padding:    12px 16px
Hover:      Background #334155
Active:     Background #0F172A
Focus:      2px #3B82F6 ring
```

#### Ghost Button
```
Background: Transparent
Text:       Text Primary (#F1F5F9)
Hover:      Background #1E293B
Focus:      2px #3B82F6 ring
Padding:    12px 16px
```

### Input Styles

```
Default:
├─ Background:    #0F172A
├─ Border:        1px #475569
├─ Text:          #F1F5F9
├─ Padding:       12px 16px
├─ Border Radius: 8px
└─ Height:        44px (mobile friendly)

Focus:
├─ Border:        2px #3B82F6
├─ Shadow:        0 0 0 3px #3B82F6 with 10% opacity
└─ Transition:    150ms

Error:
├─ Border:        2px #EF4444
├─ Helper Text:   12px #EF4444
└─ Icon:          ⚠️ Red

Success:
├─ Border:        1px #10B981
├─ Icon:          ✓ Emerald
└─ Helper Text:   12px #10B981
```

### Card Styles

```
Default Card:
├─ Background:    #1E293B
├─ Border:        1px #374151
├─ Border Radius: 12px
├─ Padding:       16px
├─ Shadow:        0 4px 6px rgba(0,0,0,0.1)
└─ Transition:    150ms

Hover Card:
├─ Shadow:        0 10px 15px rgba(0,0,0,0.3)
├─ Background:    #334155
└─ Transition:    150ms ease-out

Elevated Card:
├─ Background:    #334155
├─ Border:        1px #475569
└─ Shadow:        0 10px 15px rgba(0,0,0,0.2)
```

---

## 🏆 Badge & Pill Styles

### Achievement Badge
```
Size:           32px × 32px
Icon:           Centered emoji/SVG
Background:     Gold/Silver/Bronze gradient
Border:         1px rgba(255,255,255,0.2)
Glow:           Shadow with medal color 20% opacity
Border Radius:  Circle (9999px)
```

### Tag/Pill
```
Background:     #334155
Text:           #F1F5F9
Padding:        6px 12px
Border Radius:  20px
Font Size:      12px
Font Weight:    500
Border:         1px transparent
```

### Subject Tag
```
Background:     Subject color with 15% opacity
Text:           Subject color
Border:         1px subject color with 30% opacity
```

---

## ✅ Checkbox & Toggle

### Checkbox
```
Size:           20px × 20px
Border Radius:  4px
Unchecked:
├─ Border:      2px #475569
├─ Background:  transparent
└─ Cursor:      pointer

Checked:
├─ Background:  #2563EB
├─ Icon:        ✓ white
└─ Animation:   spring in 150ms

Focus:
└─ Ring:        2px #3B82F6
```

### Toggle Switch
```
Default:
├─ Width:       44px
├─ Height:      24px
├─ Background:  #374151
├─ Circle:      20px white
└─ Border Radius: 12px

Active:
├─ Background:  #10B981
├─ Circle:      Offset right
└─ Animation:   slide 200ms

Focus:
└─ Ring:        2px #3B82F6
```

---

## 📊 Progress Indicators

### Progress Bar
```
Container:
├─ Height:      8px
├─ Background:  #374151
├─ Border:      1px #475569
└─ Border Radius: 4px

Fill:
├─ Background:  #2563EB (or emerald for success)
├─ Height:      8px
└─ Animation:   smooth transition 300ms

Animated:
├─ Animation:   linear infinite
├─ Duration:    2s
└─ Effect:      shimmer or stripe
```

### Loading Skeleton
```
Shape:         Rounded rectangle
Background:    #334155
Animation:     Pulse or shimmer
Duration:      1.5s
Easing:        ease-in-out
```

---

## 🎨 Gradient System

### Subtle Gradients (Sparingly)

#### Sapphire Gradient
```
From: #3B82F6
To:   #2563EB
Angle: 135deg
Usage: Special CTAs, hero sections
```

#### Emerald Gradient
```
From: #10B981
To:   #059669
Angle: 135deg
Usage: Success, achievements
```

#### Premium Gradient
```
From: #2563EB (Sapphire)
To:   #10B981 (Emerald)
Angle: 135deg
Usage: Premium features, level up
```

**Rule**: Use sparingly. Maximum 1-2 gradients per screen.

---

## 🔔 Shadow System

### Depths

```
Elevation 0:   None
Elevation 1:   0 1px 2px rgba(0,0,0,0.05)
Elevation 2:   0 4px 6px rgba(0,0,0,0.1)
Elevation 3:   0 10px 15px rgba(0,0,0,0.1)
Elevation 4:   0 20px 25px rgba(0,0,0,0.15)
Elevation 5:   0 25px 50px rgba(0,0,0,0.25)
```

### Usage

```
Cards:         Elevation 2
Modals:        Elevation 4
Dropdowns:     Elevation 3
Floating Btn:  Elevation 3
Hover State:   Elevation 3
Focus State:   Ring (not shadow)
```

---

## ♿ Accessibility

### Color Contrast

```
WCAG AAA (Preferred):
├─ Large text (18pt+): 4.5:1 minimum
├─ Normal text: 7:1 minimum
└─ UI components: 3:1 minimum

WCAG AA (Acceptable):
├─ Large text (18pt+): 3:1 minimum
├─ Normal text: 4.5:1 minimum
└─ UI components: 3:1 minimum

All colors meet WCAG AA minimum.
```

### Focus States

```
Every interactive element:
├─ Visible focus ring
├─ 2px sapphire ring
├─ 2px offset
├─ Keyboard navigable
└─ Clear indication
```

### Motion

```
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 📦 Component Library

### Built with Radix UI

```
Foundation:
├─ Button
├─ Input
├─ Textarea
├─ Label
├─ Checkbox
├─ Radio
├─ Toggle
├─ Switch
└─ Slider

Navigation:
├─ Tabs
├─ Menu
├─ Navigation Menu
└─ Breadcrumb

Data:
├─ Table
├─ Progress
├─ Separator
└─ Scroll Area

Feedback:
├─ Toast/Sonner
├─ Dialog
├─ Alert Dialog
├─ Popover
└─ Tooltip

Forms:
├─ Form (react-hook-form)
├─ Zod validation
└─ Field errors
```

---

## 🎭 Icons & Imagery

### Icon System

```
Library: Lucide React
Sizes:
├─ 16px (compact)
├─ 20px (standard)
├─ 24px (prominent)
└─ 32px (hero)

Style:
├─ Stroke width: 2px
├─ Roundedness: Consistent
├─ Color: Inherit from text
└─ Consistent with brand
```

### Imagery

```
Illustrations:
├─ Minimal, line-based
├─ Brand color focused
├─ Not cartoonish
├─ Professional
└─ Used sparingly

Avatars:
├─ Initials if no photo
├─ Gradient background
├─ 40px minimum
└─ Circular (24px, 32px, 40px, 48px, 56px, 64px)
```

---

## 📱 Safe Areas & Notches

### Mobile Safe Zones

```
Top:    Status bar (44px-60px)
Bottom: 16px minimum (Tab bar at 56px)
Left:   16px minimum
Right:  16px minimum
```

### Tab Bar Positioning

```
Position:  Fixed bottom
Height:    56px
Padding:   8px bottom (notch safe)
Indicators: 5 icons with labels
Safe Area: Accounts for all notches
```

---

**Version**: 1.0  
**Last Updated**: June 2026  
**Status**: Complete & Ready for Implementation
