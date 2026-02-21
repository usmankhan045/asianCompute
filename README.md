# AI Growth Automation Agency Website

A high-end, dynamic, animated website for an AI Growth Automation Agency built with Next.js 14, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern SaaS Design**: High-contrast dark UI with AI tech aesthetic
- **Glassmorphism Cards**: Beautiful glass-effect components throughout
- **Smooth Animations**: Framer Motion powered scroll animations and transitions
- **Advanced Interactions**: 
  - Mouse glow effect
  - Scroll progress bar
  - Floating gradient blobs
  - Animated counters
  - Auto-sliding testimonials
- **Fully Responsive**: Optimized for all device sizes
- **SEO Optimized**: Proper metadata and semantic HTML
- **Performance Optimized**: Lazy loading and optimized animations

## 🛠️ Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Lucide React** (Icons)

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Design System

### Colors
- **Background**: `#0A0F1C`
- **Primary Accent**: Electric Blue (`#3B82F6`)
- **Secondary Accent**: Neon Purple (`#A855F7`)
- **Tertiary Accent**: Electric Cyan (`#06B6D4`)
- **Text**: `#E5E7EB`
- **Text Muted**: `#9CA3AF`

### Components
- Glass cards with backdrop blur
- Gradient text effects
- Glow effects on hover
- Smooth scroll animations
- Animated counters
- Timeline components

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx             # Main page
│   └── globals.css           # Global styles
├── components/
│   ├── sections/            # All page sections
│   │   ├── Hero.tsx
│   │   ├── Problem.tsx
│   │   ├── Services.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Results.tsx
│   │   ├── CaseStudies.tsx
│   │   ├── AboutFounders.tsx
│   │   ├── Testimonials.tsx
│   │   └── FinalCTA.tsx
│   ├── MouseGlow.tsx         # Mouse tracking glow effect
│   ├── ScrollProgress.tsx    # Scroll progress bar
│   ├── FloatingShapes.tsx    # Animated background shapes
│   └── BackgroundGrid.tsx    # Grid background pattern
└── ...
```

## 🎯 Sections

1. **Hero**: Main headline with CTAs and animated background
2. **Problem**: Pain-focused section for agencies, coaches, and e-commerce
3. **Services**: 4 service cards with hover animations
4. **How It Works**: Animated timeline with 3 steps
5. **Results**: Animated counters showing key metrics
6. **Case Studies**: 3 real-world examples with before/after
7. **About Founders**: Partner profiles with credibility
8. **Testimonials**: Auto-sliding testimonial carousel
9. **Final CTA**: Conversion-focused call-to-action

## 🚀 Deployment

Build for production:
```bash
npm run build
npm start
```

Deploy to Vercel:
```bash
vercel
```

## 📝 Customization

- Update founder information in `components/sections/AboutFounders.tsx`
- Modify case studies in `components/sections/CaseStudies.tsx`
- Adjust colors in `tailwind.config.ts`
- Update metadata in `app/layout.tsx`

## 🎨 Animation Features

- Scroll-triggered animations using Framer Motion's `useInView`
- Smooth page transitions
- Hover effects on interactive elements
- Animated gradient backgrounds
- Floating shapes with parallax effect
- Mouse tracking glow effect

## 📄 License

This project is proprietary and confidential.
