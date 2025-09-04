# TNT Creative Agency Website

A pixel-perfect creative agency website built with React + Tailwind CSS for RECTmedia Front End Developer recruitment test.

## Features

✨ **Modern Design**
- Space-themed hero section with floating astronaut animation
- Responsive design (mobile-first approach)
- Smooth scrolling and micro-interactions
- Custom animations and hover effects

🚀 **Technical Excellence**
- React 19 with modern hooks
- Tailwind CSS with custom theme
- Fully accessible (WCAG AA compliant)
- Mobile-responsive navigation with focus trap
- Optimized performance with lazy loading

🎨 **Components**
- Modular component architecture
- Header with sticky navigation and backdrop blur
- Hero section with gradient backgrounds and floating elements
- Services section with interactive cards
- Footer with contact info and social links

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd slicing_test_RECTmedia
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Create production build
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx          # Navigation with mobile menu
│   │   └── Footer.jsx          # Contact info & social links
│   ├── sections/
│   │   ├── HeroSection.jsx     # Main hero with astronaut
│   │   └── ServicesSection.jsx # Three service cards
│   └── ui/
│       ├── Button.jsx          # Reusable button component
│       └── ServiceCard.jsx     # Service card component
├── assets/
│   └── images/                 # Additional image assets
├── App.jsx                     # Main app component
└── main.jsx                    # App entry point

public/
├── assets/
│   └── images/
│       ├── portfolio/          # Portfolio images
│       └── slider/             # Slider images (3 photos)
│           ├── slide-1.jpg     # Portfolio slide 1
│           ├── slide-2.jpg     # Portfolio slide 2
│           └── slide-3.jpg     # Portfolio slide 3
└── astronaut.png               # Hero astronaut image
```

## Design Specifications

### Colors
- **Primary Orange**: `#f97316`
- **Dark Background**: `#0b1020`
- **Hero Gradient**: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`

### Typography
- **Headings**: Poppins (400, 600, 700, 800)
- **Body Text**: Inter (400, 500, 600)
- **Responsive sizing**: Mobile-first with breakpoint scaling

### Animations
- **Float**: 6s infinite astronaut floating animation
- **Twinkle**: 2s alternate star twinkling
- **Fade-in**: Smooth content reveal on scroll
- **Hover effects**: Scale and shadow transitions

## Responsive Breakpoints

- **Mobile**: < 768px (single column, stacked layout)
- **Tablet**: 768px - 1024px (partial grid layouts)
- **Desktop**: > 1024px (full multi-column layouts)

## Accessibility Features

- ✅ Keyboard navigation support
- ✅ Focus trap in mobile navigation
- ✅ ARIA labels for interactive elements
- ✅ Proper heading hierarchy
- ✅ Color contrast compliance (WCAG AA)
- ✅ Screen reader friendly

## Asset Attribution

- **Astronaut illustration**: Placeholder rocket emoji used (🚀)
- **Icons**: React Icons library (Heroicons, Font Awesome)
- **Fonts**: Google Fonts (Poppins + Inter)

## Browser Support

- Chrome/Edge/Firefox (last 2 versions)
- Safari 15+
- Modern browsers with CSS Grid and Flexbox support

## Performance Optimizations

- Lazy loading for images
- Optimized font loading with `font-display: swap`
- Efficient CSS with Tailwind purging
- Smooth 60fps animations using CSS transforms

## Development

Built following modern React best practices:
- Functional components with hooks
- PropTypes for type checking
- Clean component separation
- Accessible markup and interactions
- Mobile-first responsive design

---

**Created for RECTmedia Front End Developer Test**  
Demonstrating pixel-perfect implementation, responsive design, and professional code quality.
