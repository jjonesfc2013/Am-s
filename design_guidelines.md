# Design Guidelines: AI Lead Engagement Platform

## Design Approach

**Reference-Based Strategy**: Drawing inspiration from modern B2B SaaS leaders (Linear, Stripe, Vercel) combined with AI-focused product aesthetics (OpenAI, Anthropic). This creates a professional, tech-forward identity that builds trust with business decision-makers while showcasing innovation.

**Core Principle**: Communicate sophistication and reliability through clean layouts, strategic use of space, and purposeful visual hierarchy.

## Typography System

**Font Families** (via Google Fonts):
- Primary: Inter (400, 500, 600, 700) - for UI elements, body text, navigation
- Display: Space Grotesk (500, 700) - for headlines and hero text

**Type Scale**:
- Hero headline: text-6xl lg:text-7xl, font-bold, tracking-tight
- Section headlines: text-4xl lg:text-5xl, font-bold
- Subsection titles: text-2xl lg:text-3xl, font-semibold
- Feature titles: text-xl font-semibold
- Body text: text-base lg:text-lg, leading-relaxed
- Small text/captions: text-sm

## Layout System

**Spacing Primitives**: Use Tailwind units of 2, 4, 6, 8, 12, 16, 20, and 24 for consistent rhythm.

**Section Padding**: 
- Desktop: py-20 to py-32
- Mobile: py-12 to py-16

**Container Strategy**:
- Full-width sections with inner max-w-7xl mx-auto px-6 lg:px-8
- Text-focused content: max-w-4xl mx-auto
- Form containers: max-w-2xl

## Component Library

### Navigation
Fixed header with blur backdrop (backdrop-blur-lg), minimal height (h-16), containing logo left, navigation center, CTA button right. Include subtle border-bottom.

### Hero Section (viewport: 85vh)
Two-column layout on desktop, stacked on mobile. Left column contains headline, subheading (max-w-xl), primary CTA button, and trust indicator ("Trusted by 500+ businesses"). Right column features animated dashboard mockup or AI conversation visualization. Background: subtle gradient mesh overlay.

**Hero Image**: Large, high-quality visualization showing AI chat interface or dashboard mockup with live conversation examples. Image should occupy right 50% on desktop, full-width on mobile below headline.

### Services/Solutions Section
Three-column grid (grid-cols-1 md:grid-cols-3) with icon, title, description for each service pillar: "24/7 Engagement," "Human-Like Conversations," "Zero Missed Leads." Icons from Heroicons (outline style, size 10).

### Features Showcase
Alternating layout: Feature description on left, visual demonstration on right, then flip for next feature. Four key features total. Includes: Natural Language Processing, Lead Qualification, Instant Response, CRM Integration. Each feature block uses asymmetric spacing for visual interest.

### How It Works
Horizontal timeline on desktop (3 steps), vertical on mobile. Each step numbered with large display numbers (text-6xl, semi-transparent), step title, description, and connecting line between steps.

### Social Proof
Two-column grid (lg:grid-cols-2) with client testimonials. Each testimonial card includes quoted text, client name, company, role, and company logo placeholder. Add metrics bar above: "10M+ Leads Engaged | 98% Response Rate | 45% Conversion Increase" in three columns.

### Demo/Contact Section
Split layout: Left side has compelling headline and benefit bullets, right side contains form (Name, Email, Company, Phone, Message fields) with prominent submit button. Add small trust badge below form: "SOC 2 Compliant | Enterprise-Grade Security"

### Footer
Three-column layout: Company info and description (col 1), Quick Links (col 2), Contact info (col 3). Bottom bar with copyright, social icons (LinkedIn, Twitter), and legal links.

## Icons & Assets

**Icons**: Heroicons via CDN (outline style for features, solid for UI elements)

**Images Required**:
1. **Hero**: AI dashboard mockup or chat interface visualization (right column, 600x800px min)
2. **Feature demonstrations**: 4 product screenshots showing AI in action (800x600px each)
3. **Client logos**: 6-8 company logos for social proof (grayscale treatment)
4. **Testimonial headshots**: 4-6 client photos (circular, 80x80px)

## Interaction Patterns

**Buttons**: 
- Primary: Large (px-8 py-4), rounded-lg, font-semibold, with subtle shadow
- Secondary: Outline style, same padding
- On-image buttons: backdrop-blur-sm background treatment

**Cards**: Subtle border, rounded-xl, hover state with slight lift (transform translateY)

**Forms**: Floating labels, focus state with border emphasis, rounded-lg inputs with py-3 px-4 padding

**Animations**: Minimal and purposeful only
- Fade-in on scroll for section reveals
- Gentle float animation on hero image
- NO scroll-jacking, NO excessive motion

## Accessibility

- Maintain WCAG AA contrast ratios throughout
- All interactive elements have clear focus states (ring-2 ring-offset-2)
- Form inputs have associated labels (visible or aria-label)
- Semantic HTML structure (header, nav, main, section, footer)
- All images include descriptive alt text

## Key Design Decisions

**Viewport Strategy**: Hero uses 85vh for impact, all other sections use natural content height with consistent py-20/32 spacing. NO forced 100vh sections beyond hero.

**Multi-column Usage**: Strategic implementation - 3 columns for services, 2 for testimonials, alternating single-column for features. Mobile always collapses to single column.

**Visual Hierarchy**: Establish through type scale, spacing variations, and strategic use of borders/shadows rather than heavy visual effects.

**Professional Polish**: Clean, spacious layouts with purposeful negative space. Every section serves a clear conversion goal while maintaining sophisticated aesthetic appropriate for B2B enterprise audience.