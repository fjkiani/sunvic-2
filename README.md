
curl --request GET 
	--url 'https://semrush-keyword-magic-tool.p.rapidapi.com/Question-keyword-research-More?keyword=ai%20tools&country=us' 
	--header 'x-rapidapi-host: semrush-keyword-magic-tool.p.rapidapi.com' 
	--header 'x-rapidapi-key: 9f107deaabmsh2efbc3559ddca05p17f1abjsn271e6df32f7c'
:

{"all_keywords":{"All Total Keywords":673,"a":{"count":39,"keywords_data":[{"High CPC":"$5.96","Low CPC":"$1.37","avg_monthly_searches":20,"competition_index":66,"competition_value":"MEDIUM","keyword":"make a video ai","monthly_search_volumes":[{"month":"AUGUST","searches":10,"year":2024},{"month":"SEPTEMBER","searches":10,"year":2024},{"month":"OCTOBER","searches":10,"year":2024},{"month":"NOVEMBER","searches":10,"year":2024},{"month":"DECEMBER","searches":20,"year":2024},{"month":"JANUARY","searches":20,"year":2025},{"month":"FEBRUARY","searches":50,"year":2025},{"month":"MARCH","searches":10,"year":2025},{"month":"APRIL","searches":20,"year":2025},{"month":"MAY","searches":20,"year":2025},{"month":"JUNE","searches":10,"year":2025},{"month":"JULY","searches":20,"year":2025}]},{"High CPC":"$0.00","Low CPC":"$0.00","avg_monthly_searches":10,"competition_index":0,"competition_value":"LOW","keyword":"meta ai make a video","monthly_search_volumes":[{"month":"AUGUST","searches":10,"year":2024},{"month":"SEPTEMBER","searches":0,"year":2024},{"month":"OCTOBER","searches":10,"year":2024},{"month":"NOVEMBER","searches":10,"year":2024},{"month":"DECEMBER","searches":0,"year":2024},{"month":"JANUARY","searches":10,"year":2025},{"month":"FEBRUARY","searches":40,"year":2025},{"month":"MARCH","searches":10,"year":2025},{"month":"APRIL","searches":10,"year":2025},{"month":"MAY","searches":10,"year":2025},{"month":"JUNE","searches":10,"year":2025},{"month":"JULY","searches":10,"year":2025}]},{"High CPC":"$0.00","Low CPC":"$0.00",


curl --request GET \
	--url 'https://semrush-keyword-magic-tool.p.rapidapi.com/keyword-research?keyword=email%20marketing&country=us&languagecode=te' \
	--header 'x-rapidapi-host: semrush-keyword-magic-tool.p.rapidapi.com' \
	--header 'x-rapidapi-key: 9f107deaabmsh2efbc3559ddca05p17f1abjsn271e6df32f7c'
"avg_m
High CPC:"$5.26"
Low CPC:"$0.13"
avg_monthly_searches:3600
competition_index:43
competition_value:"MEDIUM"
keyword:"email marketing"
monthly_search_volumes:0:
month:"AUGUST"
searches:4400
year:2024
1:
month:"SEPTEMBER"
searches:4400
year:2024
2:
month:"OCTOBER"
searches:6600
year:2024
3:
month:"NOVEMBER"
searches:5400
year:2024
4:
month:"DECEMBER"
searches:4400
year:2024






# SunVic Home Remodeling Website

A beautiful, responsive website for SunVic Home Remodeling, built with **Vite.js**, **React**, **TypeScript**, and **Tailwind CSS**. The website emphasizes the company's engineering-led approach and dual business model (home remodeling + equipment rental).

## 🏗️ Project Overview

SunVic Home Remodeling is founded by **Sunny Ritu**, a Rutgers University engineering graduate, who brings systematic precision and uncompromising quality to luxury home transformations in NYC.

### Core Differentiators
- **Engineering-Led Design**: Systematic, precision-oriented methodology
- **Integrated Equipment Rental**: Direct control over specialized tools and machinery
- **Proven Reliability**: Built on Sunny Rattu's established reputation

## 🚀 Features

### Reusable Components
- **Slider Component**: Versatile slider using Swiper.js with multiple effects
- **Banner Component**: Hero sections with video/image backgrounds and animations
- **Navigation**: Responsive navigation with scroll effects and mobile menu
- **Layout System**: Consistent layout structure across all pages

### Pages
- **Home**: Hero section, services preview, testimonials, and CTAs
- **About**: Founder story, company mission, and core advantages
- **Services**: Detailed service offerings with engineering process
- **Portfolio**: Project showcase with filtering and detailed project info
- **Contact**: Consultation form and contact information

### Design System
- **Custom Color Palette**: Primary orange/amber theme with secondary grays
- **Typography**: Inter for body text, Montserrat for headings
- **Animations**: Framer Motion for smooth page transitions and interactions
- **Responsive Design**: Mobile-first approach with Tailwind CSS

## 🛠️ Technology Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite.js for fast development and building
- **Styling**: Tailwind CSS with custom design tokens
- **Animations**: Framer Motion for sophisticated animations
- **Slider**: Swiper.js for carousel functionality
- **Icons**: Heroicons for consistent iconography
- **Routing**: React Router DOM for multi-page navigation

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/
│   │   ├── Slider.tsx          # Reusable slider component
│   │   └── Banner.tsx          # Hero banner component
│   └── layout/
│       ├── Navigation.tsx      # Main navigation
│       ├── Footer.tsx          # Site footer
│       └── Layout.tsx          # Main layout wrapper
├── pages/
│   ├── HomePage.tsx            # Landing page
│   ├── AboutPage.tsx           # Company information
│   ├── ServicesPage.tsx        # Service offerings
│   ├── PortfolioPage.tsx       # Project showcase
│   └── ContactPage.tsx         # Contact and consultation form
├── data/
│   └── content.ts              # Centralized content management
├── App.tsx                     # Main app component with routing
└── main.tsx                    # App entry point
```

## 🎨 Design Principles

### DRY (Don't Repeat Yourself)
- Centralized content management in `src/data/content.ts`
- Reusable UI components for consistent design
- Shared styling system with Tailwind CSS utilities

### Engineering Focus
- Professional color scheme emphasizing trust and precision
- Clean, systematic layout reflecting engineering methodology
- Technical language balanced with accessibility

### User Experience
- Fast loading with optimized images and code splitting
- Smooth animations that enhance rather than distract
- Mobile-responsive design for all device sizes
- Clear call-to-actions guiding users to consultation

## 🚦 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn package manager

### Installation

1. **Clone and navigate to the project**:
   ```bash
   cd sunvic
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Preview production build**:
   ```bash
   npm run preview
   ```

## 🎯 Key Components Usage

### Slider Component
```tsx
import Slider from '../components/ui/Slider';

const slides = [
  {
    id: 1,
    content: <div>Slide Content</div>,
    background: '/image.jpg',
    overlay: true
  }
];

<Slider
  slides={slides}
  autoplay={true}
  showNavigation={true}
  effect="fade"
/>
```

### Banner Component
```tsx
import Banner from '../components/ui/Banner';

<Banner
  title="Your Title"
  subtitle="Subtitle"
  description="Description text"
  backgroundImage="/hero-image.jpg"
  height="screen"
  actions={<button>CTA Button</button>}
/>
```

## 📝 Content Management

All website content is centralized in `src/data/content.ts`:

- **Company Information**: Contact details, mission, founder info
- **Services**: Detailed service descriptions and features
- **Projects**: Portfolio items with images and details
- **Testimonials**: Customer reviews and ratings
- **FAQs**: Common questions and answers

This approach ensures:
- Easy content updates without touching component code
- Consistent data structure across components
- Type safety with TypeScript interfaces

## 🎨 Customization

### Colors
Update the color palette in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    // Orange/amber theme
    500: '#f59e0b',
    600: '#d97706',
    // ... more shades
  },
  secondary: {
    // Gray theme for text and backgrounds
    // ... color shades
  }
}
```

### Typography
Font families are configured in Tailwind config and loaded via Google Fonts in `src/index.css`.

### Content
Update content in `src/data/content.ts` - all text, services, projects, and company information.

## 🚀 Deployment

The site is built as a static website and can be deployed to:

- **Vercel**: Connect your GitHub repo for automatic deployments
- **Netlify**: Drag and drop the `dist` folder after `npm run build`
- **GitHub Pages**: Use GitHub Actions for automated deployment
- **Traditional Hosting**: Upload `dist` folder contents to any web server

### Build Command
```bash
npm run build
```

The build outputs to the `dist` directory.

## 📱 Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile Safari and Chrome on iOS/Android
- IE11+ (with polyfills if needed)

## 🤝 Contributing

1. Follow the existing code structure and naming conventions
2. Use TypeScript for type safety
3. Keep components small and focused
4. Update content through the centralized data file
5. Test on multiple screen sizes

## 📄 License

This project is created for SunVic Home Remodeling. All rights reserved.

---

**Built with ❤️ and engineering precision for SunVic Home Remodeling**
