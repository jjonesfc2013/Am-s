# Design Guidelines: AI Lead Engagement Platform (StoryBrand Style)

## Design Approach

**Inspiration**: StoryBrand.com - Bold, dramatic, conversion-focused design with dark backgrounds, high-contrast white typography, and strong red CTAs.

**Core Principle**: Create immediate impact through dramatic contrast, bold messaging, and clear conversion paths. Every element should guide visitors toward action.

## Color Palette

**Hero & Primary Sections**:
- Background: Dark charcoal/black (#1a1a1a to #0a0a0a)
- Overlay gradients with subtle dark tones

**Accent Color**:
- Primary CTA Red: #E63946 (bright, attention-grabbing red)
- Hover state: Slightly darker #D62828

**Typography Colors**:
- Primary headlines: Pure white (#FFFFFF)
- Body text on dark: Light gray (#E5E5E5)
- Secondary text: Medium gray (#999999)

**Light Sections**:
- Background: Off-white (#F8F8F8)
- Cards: Pure white (#FFFFFF)

## Typography System

**Font Families**:
- Headlines: Impact, "Arial Black", sans-serif (bold, condensed feel)
- Body: Inter, system-ui, sans-serif

**Type Scale**:
- Hero headline: text-5xl lg:text-7xl, font-black, uppercase, tracking-tight
- Section headlines: text-4xl lg:text-5xl, font-bold, uppercase
- Subheadlines: text-xl lg:text-2xl, normal-case
- Body text: text-base lg:text-lg
- Small text: text-sm

**Style Notes**:
- Use UPPERCASE for major headlines
- Normal case for subheadings and body
- High contrast is essential - white on dark backgrounds

## Layout System

**Hero Section**:
- Full viewport height (min-h-screen)
- Dark background with photographic overlay
- Left-aligned content (60% width on desktop)
- Bold headline + subtext + dual CTAs
- Right side: circular image or photo (if applicable)

**Section Spacing**:
- Desktop: py-16 to py-24
- Mobile: py-12

**Container Strategy**:
- Max width: max-w-7xl
- Padding: px-6 lg:px-8

## Component Patterns

### Buttons
**Primary (Red CTA)**:
- Background: Red (#E63946)
- Text: White, bold, uppercase
- Size: Large (px-8 py-4)
- Rounded: rounded-lg
- Hover: Slight darken, no fancy effects

**Secondary (Outline)**:
- Border: White (on dark) or dark (on light)
- Text: White (on dark) or dark (on light)
- Background: transparent
- Hover: Subtle background fill

### Cards
- Pure white background
- Subtle shadow
- Rounded corners (rounded-xl)
- Clean borders when needed
- Ample padding (p-8)

### Icons
- Simple, bold outlines
- Monochrome (white on dark, dark on light)
- Medium size (w-6 h-6 to w-8 h-8)

## Section Designs

### Hero
- Dark background (#1a1a1a)
- Overlay photo with gradient darkening
- Bold white uppercase headline
- Red primary CTA + White outline secondary CTA
- Circular image element on right (if person/product photo)

### Three-Column Action Cards
- Below hero
- White background cards
- Icon + bold text
- Equal height, rounded corners
- Hover: subtle lift

### Features/Benefits
- Alternating dark and light backgrounds
- Problem section: Dark background, bold white text
- Solution section: Light background, dark text
- Icons to support messaging

### Social Proof
- Light background
- Clean layout with logos (grayscale)
- Large stats/numbers
- Testimonials in white cards

### Contact/CTA Section
- Can be dark or light
- Prominent form
- Red submit button
- Trust badges below

### Footer
- Dark background (#1a1a1a)
- Multi-column layout
- White/gray text
- Minimal styling

## Interaction Patterns

**Buttons**:
- Subtle hover darkening
- No elaborate animations
- Fast, responsive feel

**Cards**:
- Slight shadow on hover
- Minimal transform

**Scroll Behavior**:
- Smooth, but not animated reveals
- Static, always-visible content

## Key Design Principles

1. **Contrast is King**: Always maximum contrast between text and background
2. **Bold Headlines**: Use impact fonts, uppercase, make them LOUD
3. **Red for Action**: Only use red for primary CTAs to create focus
4. **Simplicity**: Remove unnecessary decoration, let the message shine
5. **Clear Hierarchy**: Guide the eye from headline → benefit → CTA

## Accessibility

- WCAG AAA contrast on dark backgrounds (white text)
- Large, readable fonts
- Clear focus states
- Semantic HTML structure
