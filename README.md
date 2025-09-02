# Advocates for Science @ IU - Website

A modern, accessible website for Advocates for Science @ IU, built with Next.js 15, TypeScript, Tailwind CSS, and Sanity CMS. This project promotes scientific integrity and evidence-based decision making through advocacy, education, and community engagement.

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18.17 or later
- **npm** or **pnpm** (recommended)
- **Git**

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd advocates-for-science-at-iu
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```

   Fill in the required environment variables:
   ```env
   # Gmail SMTP Configuration for Newsletter Subscription
   GMAIL_USER=your-email@gmail.com
   GMAIL_APP_PASSWORD=your-app-password

   # Google Analytics
   NEXT_PUBLIC_GA_MEASUREMENT_ID=your-ga-measurement-id
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
advocates-for-science-at-iu/
├── app/                          # Next.js App Router pages
│   ├── (routes)/                 # Main content pages (route group)
│   │   ├── about/                # About page
│   │   ├── contact/              # Contact page
│   │   ├── get-involved/         # Get involved page
│   │   ├── news/                 # News section
│   │   └── team/                 # Team page
│   ├── (api)/                    # API routes (route group)
│   │   └── newsletter-subscribe/ # Newsletter subscription API
│   ├── (utility)/                # Utility pages (route group)
│   │   ├── privacy/              # Privacy policy
│   │   └── accessibility/        # Accessibility statement
│   ├── globals.css               # Global styles and Tailwind config
│   ├── layout.tsx                # Root layout with providers
│   ├── page.tsx                  # Homepage
│   └── sitemap.ts                # Dynamic sitemap generation
├── components/                   # Reusable React components
│   ├── layout/                   # Layout components
│   │   ├── footer.tsx            # Site footer
│   │   ├── layout-wrapper.tsx    # Main layout wrapper
│   │   ├── navigation.tsx        # Main navigation
│   │   ├── page-transition.tsx   # Page transition animations
│   │   └── theme-provider.tsx    # Theme context provider
│   ├── sections/                 # Page section components
│   │   ├── hero/                 # Hero section components
│   │   │   ├── hero-background.tsx
│   │   │   └── hero-section.tsx
│   │   └── scroll-indicator.tsx  # Scroll indicator
│   ├── cards/                    # Card components
│   │   ├── committee-chair-card.tsx
│   │   ├── event-card.tsx
│   │   ├── news-activity-card.tsx
│   │   ├── news-bulletin-card.tsx
│   │   └── person-card.tsx
│   ├── forms/                    # Form components
│   │   └── newsletter-signup.tsx
│   ├── navigation/               # Navigation components
│   │   └── tab-navigation.tsx
│   ├── features/                 # Feature-specific components
│   │   └── page-outcrop.tsx
│   ├── hooks/                    # Custom React hooks
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   └── ui/                       # Reusable UI components (shadcn/ui)
│       ├── primitives/           # Basic UI primitives
│       ├── composite/            # Composite UI components
│       ├── feedback/             # Feedback components
│       └── navigation/           # Navigation UI components
├── lib/                          # Utility libraries and configurations
│   ├── metadata.ts               # SEO metadata generation
│   ├── sanity.ts                 # Sanity CMS client and queries
│   ├── types.ts                  # TypeScript type definitions
│   └── utils.ts                  # Utility functions
├── asiu-cms/                     # Sanity CMS configuration
│   ├── schemaTypes/              # Content schema definitions
│   │   ├── committee.ts
│   │   ├── committeeChair.ts
│   │   ├── event.ts
│   │   ├── externalLink.ts
│   │   ├── facultyAdvisor.ts
│   │   ├── newsArticle.ts
│   │   ├── newsBulletin.ts
│   │   └── testimonial.ts
│   ├── sanity.config.ts          # Sanity configuration
│   └── package.json              # CMS dependencies
├── public/                       # Static assets
│   ├── images/                   # Image assets
│   ├── icons/                    # Icon assets
│   └── config/                   # Configuration files
└── styles/                       # Additional styles
```

## 🛠️ Technology Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Hook Form** - Form handling
- **Zod** - Schema validation

### UI Components
- **shadcn/ui** - Reusable component library
- **Radix UI** - Headless UI primitives
- **Lucide React** - Icon library
- **Sonner** - Toast notifications

### CMS & Data
- **Sanity CMS** - Headless content management
- **GROQ** - Query language for Sanity

### Analytics & Performance
- **Vercel Analytics** - Web analytics
- **Vercel Speed Insights** - Performance monitoring
- **Google Analytics 4** - User tracking

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **PostCSS** - CSS processing

## 🎨 Design System

### Color Palette
The project uses a custom color system defined in `app/globals.css`:

```css
/* Primary Brand Colors */
--color-red: #993333;      /* Brand red */
--color-blue: #2e6399;     /* Brand blue */
--color-green: #257d70;    /* Brand green */
--color-black: #2a2a2a;    /* Brand black */

/* Secondary Colors */
--color-yellow: #998a2e;   /* Brand yellow */
--color-orange: #99612e;   /* Brand orange */
--color-purple: #5f2e99;   /* Brand purple */
--color-teal: #2e9999;     /* Brand teal */
--color-pink: #992e61;     /* Brand pink */
```

### Typography
- **Primary Font**: Poppins (Google Fonts)
- **Fallbacks**: Roboto, Helvetica Neue, sans-serif
- **Font Weights**: 100-900 (variable font)

### Spacing System
```css
--spacing-sm: 0.5rem;   /* 8px */
--spacing-md: 1rem;     /* 16px */
--spacing-lg: 2rem;     /* 32px */
--spacing-xl: 3rem;     /* 48px */
```

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

### Mobile-First Approach
- All components are designed mobile-first
- Touch-friendly interactions
- Optimized for mobile performance

## 🎭 Animations

### Page Transitions
Multiple transition options available in `components/layout/page-transition.tsx`:

1. **Fade + Slide Up** (Default)
2. **Fade Only**
3. **Slide from Left**
4. **Scale + Fade**
5. **Slide from Right**
6. **Bounce + Fade**
7. **Flip + Fade**
8. **Stagger Children**

To change transitions, comment/uncomment the desired option in the component.

### Micro-interactions
- Hover effects on buttons and cards
- Smooth scrolling
- Loading states
- Toast notifications

## 📊 Content Management

### Sanity CMS Setup

1. **Navigate to CMS directory**
   ```bash
   cd asiu-cms
   ```

2. **Install CMS dependencies**
   ```bash
   npm install
   ```

3. **Start CMS development server**
   ```bash
   npm run dev
   ```

4. **Access Sanity Studio**
   Navigate to [http://localhost:3333](http://localhost:3333)

### Content Types

#### Events
- Title, subtitle, description
- Date, time, location
- Audience, participant count
- Tags, button text/URL

#### News & Articles
- Publication date
- Content with rich text
- Categories and tags

#### Team Members
- Name, role, bio
- Email, social links
- Profile images
- Committee assignments

#### Testimonials
- Quote content
- Author name and role
- Optional image

### Data Fetching

All data is fetched using the Sanity client in `lib/sanity.ts`:

```typescript
// Example: Fetching events
export const getEvents = async () => {
  const query = `*[_type == "event"] {
    _id,
    title,
    subtitle,
    description,
    date,
    startTime,
    endTime,
    location,
    locationUrl,
    audience,
    participantCount,
    tags,
    btnText,
    btnUrl
  } | order(date asc)`

  return await client.fetch(query)
}
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file with the following variables:

```env
# Gmail SMTP Configuration for Newsletter Subscription
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-app-password

# Google Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### Next.js Configuration

Key configurations in `next.config.mjs`:

- **Image Optimization**: WebP and AVIF formats
- **Security Headers**: XSS protection, content type options
- **Performance**: CSS optimization, compression
- **TypeScript**: Build error handling

### Tailwind Configuration

The project uses Tailwind CSS 4 with:
- Custom color palette
- Custom spacing system
- Dark mode support
- Custom animations

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect repository to Vercel**
2. **Set environment variables** in Vercel dashboard
3. **Deploy automatically** on push to main branch

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Start production server**
   ```bash
   npm start
   ```

## 📈 Analytics & Monitoring

### Vercel Analytics
- Automatic performance monitoring
- Real user metrics
- Core Web Vitals tracking

### Google Analytics 4
- User behavior tracking
- Event tracking
- Conversion monitoring

### Speed Insights
- Performance monitoring
- Lighthouse scores
- Optimization recommendations

## 🔒 Security

### Security Headers
- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin-when-cross-origin

### Environment Variables
- Sensitive data stored in `.env.local`
- Not committed to version control
- Example file provided for reference

## ♿ Accessibility

### WCAG 2.1 AA Compliance
- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- Keyboard navigation support
- Screen reader compatibility

### Features
- High contrast mode support
- Focus indicators
- Skip navigation links
- ARIA labels and roles

## 🧪 Testing

### Manual Testing Checklist
- [ ] All pages load correctly
- [ ] Navigation works on all devices
- [ ] Forms submit successfully
- [ ] Images load and are optimized
- [ ] Animations work smoothly
- [ ] Accessibility features function

### Performance Testing
- [ ] Lighthouse score > 90
- [ ] Core Web Vitals in green
- [ ] Mobile performance optimized
- [ ] Image optimization working

## 🐛 Troubleshooting

### Common Issues

#### Build Errors
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

#### Sanity Connection Issues
```bash
# Check environment variables
# Verify project ID in lib/sanity.ts
# Test connection in Sanity Studio
```

#### Styling Issues
```bash
# Clear Tailwind cache
rm -rf .next
npm run dev
```

#### Animation Issues
- Check Framer Motion installation
- Verify "use client" directive
- Check browser compatibility

### Performance Issues
- Optimize images using Next.js Image component
- Implement lazy loading for components
- Use dynamic imports for heavy components
- Monitor bundle size with `npm run build`

## 🤝 Contributing

### Development Workflow

1. **Create feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make changes**
   - Follow TypeScript best practices
   - Use consistent naming conventions
   - Add proper comments

3. **Test changes**
   - Test on multiple devices
   - Verify accessibility
   - Check performance impact

4. **Commit changes**
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

5. **Push and create PR**
   ```bash
   git push origin feature/your-feature-name
   ```

### Code Standards

#### TypeScript
- Use strict mode
- Define proper interfaces
- Avoid `any` types
- Use proper imports/exports

#### React
- Use functional components
- Implement proper prop types
- Use hooks appropriately
- Follow React best practices

#### CSS/Tailwind
- Use utility classes when possible
- Create custom components for complex styles
- Maintain consistent spacing
- Use semantic class names

#### File Naming
- Use kebab-case for files
- Use PascalCase for components
- Use camelCase for functions/variables

## 📚 Resources

### Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Sanity Documentation](https://www.sanity.io/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)

### Tools
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Documentation](https://react.dev/)
- [shadcn/ui Documentation](https://ui.shadcn.com/)

### Performance
- [Web.dev](https://web.dev/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [Core Web Vitals](https://web.dev/vitals/)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- Check the troubleshooting section above
- Review the documentation links
- Create an issue in the repository
- Contact the development team

---

**Built with ❤️ for Advocates for Science @ IU**
