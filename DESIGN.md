# Portfolio Design System
**Navin Raj Govindan — Technical Lead · Full Stack Engineer**

---

## Design Philosophy

**Concept: "Architected Clarity"**

The portfolio presents Navin as a precision engineer who bridges technical depth with cross-functional communication. The design speaks to both technical hiring managers and product/business stakeholders. It avoids the cliché purple-gradient dark portfolio aesthetic and instead adopts a clean, editorial, white-forward system with a singular accent that is memorable without being loud.

The one thing a visitor will remember: **the crisp ice-blue accent on a white canvas** — calm, precise, technical, and human all at once.

---

## Color System

### Primary Accent
| Token | Value | Usage |
|---|---|---|
| `--accent` | `#C7F6FE` | Primary accent: highlights, underlines, active states, tags, CTA borders |
| `--accent-deep` | `#7EDCEE` | Hover states, pressed states, stronger accent moments |
| `--accent-subtle` | `#C7F6FE20` | Backgrounds behind accent elements, hover fills |

### Light Mode (Default)
| Token | Value | Role |
|---|---|---|
| `--bg-base` | `#FAFAF9` | Page background (warm white, not clinical) |
| `--bg-surface` | `#F3F3F1` | Cards, panels, elevated surfaces |
| `--bg-elevated` | `#EBEBEA` | Hover fills, secondary surfaces |
| `--border` | `#E2E2E0` | Default borders |
| `--border-subtle` | `#EBEBEA` | Dividers, subtle separators |
| `--text-primary` | `#111110` | Headings, primary body text |
| `--text-secondary` | `#6B6B68` | Supporting text, metadata |
| `--text-tertiary` | `#A3A3A0` | Placeholders, disabled, captions |
| `--text-inverse` | `#FAFAF9` | Text on dark/accent fills |

### Dark Mode
| Token | Value | Role |
|---|---|---|
| `--bg-base` | `#0C0C0B` | Page background |
| `--bg-surface` | `#161615` | Cards, panels |
| `--bg-elevated` | `#1E1E1D` | Hover fills, secondary surfaces |
| `--border` | `#282826` | Default borders |
| `--border-subtle` | `#1E1E1D` | Dividers |
| `--text-primary` | `#F0F0EE` | Headings, primary body text |
| `--text-secondary` | `#888886` | Supporting text, metadata |
| `--text-tertiary` | `#505050` | Placeholders, disabled |
| `--text-inverse` | `#0C0C0B` | Text on accent fills |

### Semantic
| Token | Light | Dark |
|---|---|---|
| `--color-success` | `#22C55E` | `#4ADE80` |
| `--color-warning` | `#F59E0B` | `#FBBF24` |
| `--color-error` | `#EF4444` | `#F87171` |

---

## Typography

### Font Stack

| Role | Font | Usage |
|---|---|---|
| **Display / Signature** | `Babylonica` | Name in hero, decorative flourishes, signature-style emphasis |
| **Heading / UI** | `Julius Sans One` | Section headings, nav labels, all-caps technical markers |
| **Body / Primary** | `Elms Sans` | All body text, paragraphs, card descriptions, UI labels |
| **Korean Text** | `Diphylleia` | Korean characters only (위커밋, etc.) |
| **Monospace** | System mono fallback (`ui-monospace`) | Code snippets, terminal-style values, dates |

### Type Scale

| Name | Size | Weight | Font | Usage |
|---|---|---|---|---|
| `display-xl` | `clamp(3.5rem, 8vw, 7rem)` | 400 | Babylonica | Hero name |
| `display-lg` | `clamp(2rem, 5vw, 4rem)` | 400 | Julius Sans One | Hero title, major section reveals |
| `heading-xl` | `2.25rem` (36px) | 400 | Julius Sans One | Section H1 |
| `heading-lg` | `1.5rem` (24px) | 400 | Julius Sans One | Card titles, sub-sections |
| `heading-sm` | `0.75rem` (12px) | 400 | Julius Sans One | Section labels (all-caps, tracked) |
| `body-lg` | `1.125rem` (18px) | 300–400 | Elms Sans | Lead paragraphs |
| `body-md` | `1rem` (16px) | 300–400 | Elms Sans | Standard body copy |
| `body-sm` | `0.875rem` (14px) | 300 | Elms Sans | Metadata, captions, tags |
| `mono-sm` | `0.8125rem` (13px) | 400 | ui-monospace | Dates, version strings, code |

### Typography Rules
- Section labels: **Julius Sans One**, all-caps, `letter-spacing: 0.2em`, prefixed with a 2-digit index (01, 02, 03…)
- Body copy: **Elms Sans** at weight 300 for long-form, 400 for UI labels
- Korean text (company name 위커밋): always rendered in **Diphylleia**
- Never mix more than 2 font families in the same visual block
- Babylonica used sparingly — name only and 1–2 decorative moments

---

## Spacing System (8px base)

| Token | Value | Usage |
|---|---|---|
| `--space-1` | `4px` | Micro gaps (icon + label) |
| `--space-2` | `8px` | Tight inner padding |
| `--space-3` | `12px` | Tag padding, compact elements |
| `--space-4` | `16px` | Default inner padding |
| `--space-6` | `24px` | Card padding, section gaps |
| `--space-8` | `32px` | Component separation |
| `--space-12` | `48px` | Section inner padding |
| `--space-16` | `64px` | Between major elements |
| `--space-24` | `96px` | Section vertical padding |
| `--space-32` | `128px` | Hero padding, large gaps |

---

## Layout Grid

- **Max width:** `1280px` (content), `1440px` (bleeds)
- **Columns:** 12-column grid
- **Gutter:** `24px` (mobile), `32px` (tablet), `48px` (desktop)
- **Page padding:** `20px` (mobile), `48px` (tablet), `80px` (desktop)
- **Breakpoints:** `sm: 640px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`

---

## Border Radius

| Token | Value | Usage |
|---|---|---|
| `--radius-sm` | `4px` | Tags, badges, small chips |
| `--radius-md` | `8px` | Buttons, inputs |
| `--radius-lg` | `12px` | Cards |
| `--radius-xl` | `20px` | Large cards, modals |
| `--radius-full` | `9999px` | Pills, avatars |

---

## Shadows

### Light Mode
| Token | Value | Usage |
|---|---|---|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.06)` | Subtle card lift |
| `--shadow-md` | `0 4px 16px rgba(0,0,0,0.08)` | Card hover |
| `--shadow-lg` | `0 8px 32px rgba(0,0,0,0.10)` | Modals, elevated panels |
| `--shadow-accent` | `0 0 0 3px #C7F6FE` | Focus ring, active outline |

### Dark Mode
| Token | Value | Usage |
|---|---|---|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.4)` | Subtle card lift |
| `--shadow-md` | `0 4px 16px rgba(0,0,0,0.5)` | Card hover |
| `--shadow-lg` | `0 8px 32px rgba(0,0,0,0.6)` | Modals, elevated panels |
| `--shadow-accent` | `0 0 0 3px #C7F6FE40` | Focus ring, active outline |

---

## Animation Principles

**Philosophy:** Motion should feel inevitable, not decorative. Every animation has a purpose.

| Principle | Rule |
|---|---|
| **Entrance** | Elements fade up (`translateY: 24px → 0`) with staggered delays |
| **Duration** | Fast: `150ms`, Standard: `300ms`, Slow: `600ms`, Page: `800ms` |
| **Easing** | Default: `cubic-bezier(0.16, 1, 0.3, 1)` (spring-out), Exit: `ease-in` |
| **Hover** | Scale `1.0 → 1.02` on cards, underline reveal on links |
| **Theme toggle** | Smooth background + text transition: `200ms ease` |
| **Scroll-triggered** | Reveal on enter viewport, no re-animation on scroll back |
| **Accent glow** | `#C7F6FE` box-shadow pulse on interactive focus |

Libraries: **Framer Motion** for complex sequences, **CSS transitions** for simple hover/theme states.

---

## Component Patterns

### Tags / Skill Chips
- Background: `--accent-subtle` (`#C7F6FE20`)
- Border: `1px solid #C7F6FE60`
- Text: `--text-secondary`, `body-sm`, `Julius Sans One`
- Radius: `--radius-sm`

### Section Label
```
01  ——  EXPERIENCE
```
- Index: `mono-sm`, `--text-tertiary`
- Divider: `1px solid --border`, grows to fill space
- Label: `heading-sm`, Julius Sans One, all-caps, `--text-secondary`

### CTA Button
- Default: `background: --accent`, `color: --text-inverse`, `border-radius: --radius-md`
- Hover: `background: --accent-deep`, slight scale `1.01`
- Ghost variant: `border: 1px solid --border`, background transparent

### Cards
- Background: `--bg-surface`
- Border: `1px solid --border`
- Radius: `--radius-lg`
- Hover: lift to `--bg-elevated`, `--shadow-md`, border → `--accent`

---

## Page Structure

```
┌─────────────────────────────────────────┐
│  NAV                                    │  Sticky, minimal, transparent → blur
├─────────────────────────────────────────┤
│  01  HERO                               │  Name (Babylonica), title, one-liner
├─────────────────────────────────────────┤
│  02  ABOUT                              │  Bio, location, timezone, quick facts
├─────────────────────────────────────────┤
│  03  SKILLS                             │  Categorized tech stack chips
├─────────────────────────────────────────┤
│  04  EXPERIENCE                         │  Timeline — WeCommit → Mitsogo
├─────────────────────────────────────────┤
│  05  PROJECTS                           │  Cards — CROSS-E, StudiVerse, etc.
├─────────────────────────────────────────┤
│  06  CONTACT                            │  CTA, email, social links
├─────────────────────────────────────────┤
│  FOOTER                                 │  Copyright, links, theme toggle
└─────────────────────────────────────────┘
```

---

## Tone & Voice

- **Confident, not boastful** — let the work speak
- **Precise, not dry** — technical accuracy with personality
- **Global, not local** — Chennai-based, Seoul-connected, globally minded
- Copy uses short sentences. No buzzword fluff. Specific tech names over vague descriptions.

---

## File Structure Convention

```
components/
  sections/         # One file per page section
    Hero.tsx
    About.tsx
    Skills.tsx
    Experience.tsx
    Projects.tsx
    Contact.tsx
  ui/               # Reusable atomic components
    Button.tsx
    Tag.tsx
    SectionLabel.tsx
    Card.tsx
    ThemeToggle.tsx
  layout/
    Nav.tsx
    Footer.tsx

lib/
  design-tokens.ts  # JS constants mirroring CSS vars
  data.ts           # All content (resume data)

styles/
  globals.css       # CSS variables, base reset, font imports
```

---

## Notes & Constraints

- Korean text (`위커밋`) must render in **Diphylleia** at all times — add `lang="ko"` attribute where needed
- Babylonica is used **only** for the name display in Hero and any signature flourish — never for navigation or body text
- The accent `#C7F6FE` is a light color — on white backgrounds, pair it with a dark border or use it as a fill with dark text. Do NOT use it as light text on white.
- Both themes must achieve **WCAG AA** contrast on all text
- All sections must be independently scrollable and shareable via hash links (`#experience`, `#projects`, etc.)
