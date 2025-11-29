# Technical Specifications

## 1. Technology Stack Recommendations

### 1.1 Frontend Framework

#### Primary Recommendation: Next.js + React
**Advantages:**
- Server-side rendering (SSR) for better SEO
- Static site generation (SSG) for performance
- Automatic code splitting
- Built-in image optimization
- API routes support
- Excellent developer experience
- Large community and ecosystem

**Version:**
- Next.js 14+ (App Router)
- React 18+

#### Alternative: HTML/CSS/JavaScript
**When to use:**
- Budget constraints
- Simple static site
- No dynamic content needs
- Quick deployment

---

### 1.2 Styling Solution

#### Primary Recommendation: TailwindCSS
**Advantages:**
- Utility-first approach
- Fast development
- Consistent design system
- Small production bundle
- Mobile-first responsive
- Easy customization

**Version:** TailwindCSS 3.4+

**Configuration Example:**
```javascript
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'navy': '#1A2332',
        'dark': '#2C3E50',
        'blue': '#3498DB',
        'turquoise': '#1ABC9C',
        'light-gray': '#F8F9FA',
      },
      fontFamily: {
        'heading': ['Montserrat', 'sans-serif'],
        'body': ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

#### Alternative: CSS Modules or Styled Components

---

### 1.3 Backend/CMS (Optional)

**For Static Site:**
- No backend needed
- Contact forms via third-party service (FormSpree, Web3Forms)

**For Dynamic Features:**
- Strapi (headless CMS)
- Sanity.io
- Contentful

**Not Recommended for This Project:**
- WordPress (too heavy for this use case)
- Full backend (unnecessary complexity)

---

## 2. Hosting & Deployment

### 2.1 Recommended Hosting Platforms

#### Primary: Vercel
**Advantages:**
- Optimized for Next.js
- Automatic deployments from Git
- Global CDN
- Free SSL
- Edge network
- Generous free tier
- Excellent performance

**Pricing:** Free for this project size

#### Alternative: Cloudflare Pages
**Advantages:**
- Global CDN
- Unlimited bandwidth
- Free tier
- Fast performance
- DDoS protection

**Pricing:** Free

#### Alternative: Netlify
**Advantages:**
- Easy deployment
- Form handling built-in
- Free tier
- Good performance

**Pricing:** Free for basic features

---

### 2.2 Domain & DNS

**Domain Options:**
- costaauto.pl (preferred)
- autocosta.pl
- serwiscosta.pl
- costaserwis.pl

**DNS Provider:**
- Cloudflare (recommended - free, fast, secure)
- Domain registrar's DNS

**SSL Certificate:**
- Free via Let's Encrypt (automatic with Vercel/Netlify)
- Cloudflare SSL

---

## 3. Required Functionality

### 3.1 Core Features

#### Contact Forms
**Requirements:**
- Name, phone, email, service type, message fields
- Form validation (client & server-side)
- Spam protection (reCAPTCHA v3 or honeypot)
- Success/error messages
- Email notifications

**Implementation Options:**
1. **FormSpree** (easiest)
   - Free tier: 50 submissions/month
   - Spam filtering
   - Email notifications

2. **Web3Forms** (no backend needed)
   - Free
   - No account needed
   - Spam protection

3. **Custom API Route** (Next.js)
   - Full control
   - Email via Resend or SendGrid

**Example Integration:**
```javascript
// Contact form submission
async function handleSubmit(formData) {
  const response = await fetch('https://formspree.io/f/YOUR_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  })

  if (response.ok) {
    // Show success message
  }
}
```

---

#### Click-to-Call Functionality
**Implementation:**
```html
<a href="tel:+48880378675" class="call-button">
  📞 Call Now: 880 378 675
</a>
```

**Mobile Detection:**
- Always show phone number
- Make it clickable on mobile
- Track clicks in analytics

---

#### Google Maps Integration
**Implementation:**
```html
<iframe
  width="100%"
  height="450"
  frameborder="0"
  src="https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY
       &q=Wandy+Siemaszkowej+9,Rzeszów
       &zoom=15"
  allowfullscreen>
</iframe>
```

**Features:**
- Embedded map on Contact page
- "Get Directions" button linking to Google Maps
- Plus Code: 223M+5C Rzeszów

---

#### Google Reviews Widget
**Options:**

1. **Elfsight Google Reviews**
   - Widget embed
   - Auto-updates
   - Customizable design
   - Free tier available

2. **Custom Integration via Google Places API**
   - Fetch reviews programmatically
   - Display custom layout
   - Requires API key (free tier)

3. **Static Reviews**
   - Manually add reviews
   - Update periodically
   - No API needed
   - Simplest approach

**Recommended:** Static reviews initially, upgrade to API later

---

### 3.2 Performance Features

#### Image Optimization
**Next.js Image Component:**
```javascript
import Image from 'next/image'

<Image
  src="/images/workshop.jpg"
  alt="Auto Service COSTA workshop"
  width={800}
  height={600}
  quality={85}
  loading="lazy"
/>
```

**Manual Optimization:**
- WebP format with JPG fallback
- Responsive images (srcset)
- Lazy loading below fold
- Image compression (<200KB)

---

#### Code Splitting
**Automatic in Next.js:**
- Route-based splitting
- Dynamic imports for heavy components

**Example:**
```javascript
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>
})
```

---

#### Caching Strategy
**Headers Configuration:**
```javascript
// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}
```

---

### 3.3 Analytics & Tracking

#### Google Analytics 4
**Implementation:**
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**Events to Track:**
- Page views (automatic)
- Phone clicks
- Form submissions
- Get directions clicks
- Review link clicks
- Service page views

**Custom Event Example:**
```javascript
gtag('event', 'phone_click', {
  'event_category': 'contact',
  'event_label': 'header_phone_button'
});
```

---

#### Google Tag Manager (Optional)
**Benefits:**
- Manage all tags in one place
- No code changes for new tracking
- Event tracking without coding

**When to Use:**
- Multiple marketing tools
- Frequent tracking changes
- Non-technical team managing tags

---

### 3.4 SEO Implementation

#### Meta Tags Component (Next.js)
```javascript
import Head from 'next/head'

export default function SEOHead({ title, description, canonical }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="business.business" />

      {/* Additional SEO tags */}
    </Head>
  )
}
```

---

#### Structured Data Implementation
```javascript
// components/StructuredData.js
export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "name": "AUTO SERVICE COSTA - Damian Paśko",
    "telephone": "+48880378675",
    // ... rest of schema
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
```

---

## 4. Mobile Responsiveness

### 4.1 Breakpoints

```css
/* TailwindCSS default breakpoints */
sm: 640px   /* Small devices (phones) */
md: 768px   /* Medium devices (tablets) */
lg: 1024px  /* Large devices (desktops) */
xl: 1280px  /* Extra large devices */
2xl: 1536px /* Extra extra large */
```

### 4.2 Mobile-Specific Features

**Touch Optimization:**
- Minimum button size: 48x48px
- Adequate spacing between clickable elements
- No hover-dependent functionality

**Mobile Navigation:**
- Hamburger menu for mobile
- Sticky header
- Mobile-friendly dropdowns

**Mobile Performance:**
- Smaller images on mobile
- Simplified animations
- Reduced JavaScript bundle

---

## 5. Browser Compatibility

### 5.1 Supported Browsers

**Modern Browsers (Full Support):**
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

**Mobile Browsers:**
- iOS Safari 14+
- Chrome Mobile 90+
- Samsung Internet 14+

**Graceful Degradation:**
- IE 11: Basic functionality only (if required)
- Older browsers: Static content accessible

---

### 5.2 Progressive Enhancement

**Core Content:**
- Accessible without JavaScript
- Critical CSS inline
- Semantic HTML

**Enhanced Features:**
- Animations (CSS)
- Form validation (JavaScript)
- Interactive maps (JavaScript)

---

## 6. Security

### 6.1 HTTPS

**Requirements:**
- SSL certificate (free via Let's Encrypt)
- HTTPS redirect (automatic on Vercel/Netlify)
- Secure cookies
- HSTS headers

---

### 6.2 Form Security

**Spam Protection:**
- reCAPTCHA v3 (invisible)
- Honeypot fields
- Rate limiting

**Data Validation:**
- Client-side validation (UX)
- Server-side validation (security)
- Input sanitization

**Privacy:**
- GDPR compliance
- Privacy policy link
- Data processing consent

---

### 6.3 Security Headers

```javascript
// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}
```

---

## 7. Accessibility (WCAG 2.1 AA)

### 7.1 Requirements

**Keyboard Navigation:**
- All interactive elements accessible via keyboard
- Visible focus indicators
- Logical tab order

**Screen Readers:**
- Semantic HTML
- ARIA labels where needed
- Alt text for images
- Skip navigation links

**Visual:**
- Minimum contrast ratio: 4.5:1 for text
- Resizable text (up to 200%)
- No information conveyed by color alone

---

### 7.2 Implementation Checklist

- [ ] All images have alt text
- [ ] Form inputs have labels
- [ ] Buttons have descriptive text
- [ ] Links have meaningful text (not "click here")
- [ ] Headings in logical order (H1 → H2 → H3)
- [ ] Color contrast meets WCAG AA
- [ ] Focus visible on all interactive elements
- [ ] ARIA labels on icon-only buttons

---

## 8. Performance Optimization

### 8.1 Performance Targets

**Core Web Vitals:**
```
LCP (Largest Contentful Paint): < 2.5s
FID (First Input Delay): < 100ms
CLS (Cumulative Layout Shift): < 0.1
```

**Additional Metrics:**
```
TTFB (Time to First Byte): < 600ms
FCP (First Contentful Paint): < 1.8s
Total Page Size: < 2MB
```

---

### 8.2 Optimization Techniques

**Images:**
- WebP format (85% smaller than JPEG)
- Lazy loading
- Responsive images
- CDN delivery

**JavaScript:**
- Code splitting
- Tree shaking
- Minification
- Defer non-critical JS

**CSS:**
- Critical CSS inline
- Unused CSS removal
- Minification
- Optimize font loading

**Fonts:**
```javascript
// next.config.js font optimization
import { Montserrat, Open_Sans } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-heading',
})

const openSans = Open_Sans({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-body',
})
```

---

## 9. Development Workflow

### 9.1 Version Control

**Git Repository:**
- GitHub, GitLab, or Bitbucket
- Main branch for production
- Development branch for testing
- Feature branches for new work

**Commit Strategy:**
- Descriptive commit messages
- Small, focused commits
- Regular pushes

---

### 9.2 CI/CD Pipeline

**Vercel Automatic Deployment:**
1. Push to GitHub
2. Vercel detects changes
3. Builds project
4. Runs tests
5. Deploys to production
6. Preview deployments for branches

**Build Script:**
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

---

### 9.3 Testing

**Manual Testing:**
- Browser compatibility
- Mobile responsiveness
- Form functionality
- Link checking
- Load testing

**Automated Testing (Optional):**
- Lighthouse CI
- Cypress (E2E testing)
- Jest (unit testing)

---

## 10. Third-Party Integrations

### 10.1 Required Services

#### Email Service (for forms)
**Options:**
- **FormSpree** (recommended for simplicity)
- **SendGrid** (for custom solution)
- **Resend** (modern alternative)

#### Google Services
- Google Analytics 4
- Google Search Console
- Google Business Profile
- Google Maps Embed API

---

### 10.2 Optional Services

**Cookie Consent:**
- Cookiebot
- OneTrust
- Custom GDPR banner

**Live Chat (future):**
- Tidio
- Tawk.to (free)
- Facebook Messenger

**Appointment Booking (future):**
- Calendly
- Cal.com
- Custom booking system

---

## 11. Content Management

### 11.1 Content Updates

**Static Content (Rare Changes):**
- Edit source code files
- Push to Git
- Automatic deployment

**Dynamic Content (Frequent Changes):**
- Integrate headless CMS
- Non-technical editing
- API-based updates

---

### 11.2 Review Management

**Strategy:**
1. Monitor Google Business Profile reviews
2. Respond to all reviews (within 24 hours)
3. Periodically update website review section
4. Track review count and rating

**Automation (Optional):**
- Google Places API to fetch reviews
- Automatic website update

---

## 12. Maintenance Plan

### 12.1 Regular Maintenance

**Weekly:**
- Monitor contact form submissions
- Check website uptime
- Respond to reviews

**Monthly:**
- Review analytics
- Check for broken links
- Update content if needed
- Security updates

**Quarterly:**
- Performance audit
- SEO review
- Content refresh
- Competitor analysis

---

### 12.2 Software Updates

**Dependencies:**
- Update Next.js (quarterly)
- Update npm packages (monthly)
- Security patches (immediately)

**Monitoring:**
- Dependabot alerts (GitHub)
- npm audit
- Snyk (optional)

---

## 13. Backup & Recovery

### 13.1 Backup Strategy

**Code:**
- Git repository (automatic backup)
- GitHub/GitLab cloud storage

**Vercel:**
- Deployment history
- Rollback capability
- No data storage (static site)

---

## 14. Launch Checklist

### 14.1 Pre-Launch

**Technical:**
- [ ] All pages created and tested
- [ ] Forms working and tested
- [ ] Analytics installed and tested
- [ ] SEO meta tags on all pages
- [ ] Sitemap.xml generated
- [ ] Robots.txt configured
- [ ] SSL certificate active
- [ ] Mobile responsive verified
- [ ] Browser compatibility tested
- [ ] Performance optimized (Lighthouse 90+)
- [ ] Accessibility checked
- [ ] 404 page created

**Content:**
- [ ] All text proofread
- [ ] All images optimized
- [ ] Contact information verified
- [ ] Opening hours correct
- [ ] Google Maps location correct
- [ ] Phone number clickable

**SEO:**
- [ ] Google Search Console verified
- [ ] Google Analytics configured
- [ ] Google Business Profile optimized
- [ ] Schema markup implemented
- [ ] All images have alt text

---

### 14.2 Post-Launch

**Week 1:**
- [ ] Monitor form submissions
- [ ] Check analytics data
- [ ] Test all functionality
- [ ] Submit sitemap to Google
- [ ] Monitor Core Web Vitals

**Month 1:**
- [ ] Review analytics
- [ ] Check search rankings
- [ ] Build local citations
- [ ] Gather user feedback
- [ ] Make necessary adjustments

---

## 15. Budget Estimate

### 15.1 Initial Costs

**Development:**
- Design & Development: Variable (outsourced or in-house)
- Stock photos (if needed): €0-200 (or use free alternatives)

**Hosting & Services (Annual):**
- Domain name (.pl): ~€10-20/year
- Hosting (Vercel/Netlify): €0 (free tier sufficient)
- SSL Certificate: €0 (included)
- Email service (FormSpree): €0 (free tier, 50/month)
- Google Analytics: €0 (free)

**Optional:**
- Premium Google Workspace email: €5-10/month
- Premium form service: €10-20/month
- Review widget: €5-15/month

**Total Initial Cost:** €10-50 + development

---

### 15.2 Ongoing Costs

**Monthly:**
- Hosting: €0-10
- Email: €0-10
- Optional services: €0-30

**Annual Maintenance:**
- Domain renewal: €10-20
- Minor updates: Variable
- Content updates: Variable

**Total Annual Cost:** ~€50-500 (depending on features)

---

## 16. Project Timeline

### 16.1 Development Phases

**Phase 1: Planning & Design (1-2 weeks)**
- Finalize requirements
- Create wireframes
- Design mockups
- Content preparation

**Phase 2: Development (2-3 weeks)**
- Setup development environment
- Build pages
- Implement functionality
- Content integration

**Phase 3: Testing (1 week)**
- Browser testing
- Mobile testing
- Performance optimization
- Bug fixes

**Phase 4: Launch (1 week)**
- Final review
- DNS configuration
- Go live
- Post-launch monitoring

**Total Timeline:** 5-7 weeks

---

## 17. Success Metrics

### 17.1 Technical Metrics

- Lighthouse score: 90+ (all categories)
- Page load time: < 3 seconds
- Mobile usability: 100% (GSC)
- Zero critical accessibility issues
- 99.9% uptime

### 17.2 Business Metrics

- 100+ monthly visitors (Month 1)
- 20+ phone calls per month
- 5+ form submissions per month
- Top 10 ranking for target keywords (Month 3)
- Growing review count

---

## 18. Recommended Tools

### 18.1 Development Tools

- VS Code (code editor)
- Chrome DevTools
- React Developer Tools
- Git / GitHub Desktop

### 18.2 Testing Tools

- Google Lighthouse
- PageSpeed Insights
- Mobile-Friendly Test
- GTmetrix
- WAVE (accessibility)

### 18.3 SEO Tools

- Google Search Console
- Google Analytics
- Google Business Profile
- Ahrefs / Semrush (optional)

### 18.4 Design Tools

- Figma (design mockups)
- Canva (graphics)
- TinyPNG (image compression)
- SVGOMG (SVG optimization)

---

## 19. Documentation

### 19.1 Project Documentation

**Included:**
- This technical specification
- Design guidelines
- Content structure
- SEO strategy

**To Create:**
- User manual (for client)
- Update procedures
- Troubleshooting guide

---

### 19.2 Code Documentation

**Best Practices:**
- Comment complex logic
- Document component props
- README.md in repository
- Environment variables documented

---

## 20. Future Enhancements

### 20.1 Phase 2 Features (Future)

**Potential Additions:**
- Online appointment booking
- Service price calculator
- Customer portal
- Blog section
- Email newsletter
- Live chat
- Multi-language support (English)
- Customer testimonial videos

### 20.2 Scalability

**Architecture Ready For:**
- Additional service pages
- Team member profiles
- Photo gallery expansion
- Blog integration
- E-commerce (parts sales)
- Customer reviews system

**Not Recommended Initially:**
- Complex CMS
- User authentication
- Database integration
- Heavy JavaScript frameworks

---

## Conclusion

This technical specification provides a comprehensive blueprint for building a high-performance, SEO-optimized website for AUTO SERVICE COSTA. The recommended stack (Next.js + React + TailwindCSS + Vercel) offers the best balance of:

✓ Performance
✓ SEO capability
✓ Development speed
✓ Low cost
✓ Easy maintenance
✓ Scalability

The specification prioritizes essential features for launch while maintaining flexibility for future enhancements.
