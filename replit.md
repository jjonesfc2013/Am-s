# Amius - AI Lead Engagement Platform Website

## Project Overview

Professional marketing website for Amius, an AI-powered lead engagement platform. Built with React, TypeScript, and Tailwind CSS following the StoryBrand design methodology - bold, dramatic, conversion-focused.

**Design Inspiration:** StoryBrand.com aesthetic
- Dark, dramatic backgrounds (#1a1a1a)
- Bold white uppercase headlines
- High-contrast design
- Red primary CTAs (#E63946)
- Clear conversion paths

## Current Status

✅ **Complete and ready to deploy**

### Completed Features

1. **Header Component**
   - Fixed navigation with Amius logo
   - Navigation links to Problem, Solution, Results sections
   - Red "Get Started" CTA button

2. **Hero Section**
   - Full-screen impact with dramatic dark background
   - Bold headline: "NEVER MISS A LEAD AGAIN"
   - Dual CTAs (primary red + outline)
   - Circular hero image
   - Three action cards below hero (Watch Demo, Schedule Call, Team Training)
   - Video modal integration - plays demo video when clicking "Watch The Demo"

3. **Problem Section**
   - Dark background with high contrast
   - Lists 6 key pain points businesses face with lead engagement
   - Bold messaging about competition and lost opportunities

4. **Solution Section**
   - Light background for contrast
   - 4 benefit cards with icons:
     - Instant Response
     - Human-Like Conversations
     - Never Sleep, Never Miss
     - Increase Conversions

5. **Social Proof Section**
   - Large statistics (10M+ Leads, 98% Response Rate, 3X Conversion)
   - 2 testimonials with professional headshots
   - AI-generated testimonial photos

6. **CTA Section**
   - Dark background
   - Contact form (Name, Email, Company, Message)
   - Red submit button
   - Trust badge (No credit card • 15-minute setup)

7. **Footer**
   - Dark background
   - Amius logo
   - Quick links navigation
   - Contact information

### Assets Included

**Logo:**
- `attached_assets/no background wbite words i think_1763232140226.png`
- White text on transparent background
- Integrated in header and footer

**Video:**
- `attached_assets/Voice_AI_Video_Generation_1763232235500.mp4`
- Plays in modal when clicking "Watch The Demo" action card

**AI-Generated Images:**
- Hero dashboard image
- Testimonial photos (2)
- All stored in `attached_assets/generated_images/`

## Tech Stack

- **Frontend:** React 18.3.1 with TypeScript
- **Styling:** Tailwind CSS with custom color system
- **UI Components:** shadcn/ui (Radix UI primitives)
- **Icons:** Lucide React
- **Build Tool:** Vite
- **Routing:** Wouter (lightweight)

## Color System

```css
/* Primary Brand Colors */
--primary: #E63946 (Red - CTAs and accents)
--background-dark: #1a1a1a (Dark sections)
--background-light: #F8F8F8 (Light sections)
--foreground-white: #FFFFFF (Headlines on dark)
```

## Typography

- **Headlines:** Bold, uppercase, high impact
- **Body:** Inter font family
- **Hierarchy:** Clear contrast between headline and body text

## Project Structure

```
client/src/
├── components/
│   ├── Header.tsx          # Fixed navigation with logo
│   ├── Hero.tsx            # Hero with video modal
│   ├── Problem.tsx         # Pain points section
│   ├── Solution.tsx        # Benefits/features
│   ├── SocialProof.tsx     # Stats + testimonials
│   ├── CTA.tsx             # Contact form
│   ├── Footer.tsx          # Footer
│   └── ui/                 # shadcn components
├── pages/
│   └── Home.tsx            # Main page composition
└── index.css               # Global styles + color system
```

## Running the Project

```bash
npm run dev
```

Server runs on port 5000. The "Start application" workflow is pre-configured.

## Deployment

See `DEPLOYMENT.md` for complete deployment instructions.

**Quick Deploy Options:**
1. **Netlify** (Recommended) - Zero config, free SSL, auto-deploy
2. **Vercel** - Similar to Netlify, great DX
3. **GitHub Pages** - Free hosting from GitHub

This is a static site (no backend), so it works on any static hosting platform.

## Next Steps / Future Enhancements

1. **Form Integration:** Connect contact form to:
   - Netlify Forms (if using Netlify)
   - Formspree, EmailJS, or custom backend
   
2. **Analytics:** Add Google Analytics or Plausible

3. **SEO Optimization:**
   - Update meta tags in `client/index.html`
   - Add Open Graph images
   - Submit sitemap

4. **A/B Testing:** Test different headlines and CTAs

5. **Custom Domain:** Point your domain to the deployed site

## Design Guidelines

Full design system documented in `design_guidelines.md`:
- StoryBrand-inspired aesthetic
- Color palette and usage
- Typography scale
- Component patterns
- Interaction principles

## User Preferences

- Professional, conversion-focused design
- StoryBrand methodology (problem → solution → action)
- Bold, dramatic aesthetics
- Clear calls to action
- GitHub deployment capability

## Contact

For questions about deployment or customization, refer to the deployment guide or framework documentation.
