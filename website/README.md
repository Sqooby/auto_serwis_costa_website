# AUTO SERVICE COSTA Website

Professional website for AUTO SERVICE COSTA - Damian Paśko, a trusted auto repair and air conditioning service in Rzeszów, Poland.

## 🌟 Features

- **Modern Design**: Clean, professional design with responsive layout
- **SEO Optimized**: Meta tags, structured data, and optimized content
- **High Performance**: Built with Next.js for optimal speed
- **Mobile-First**: Fully responsive design for all devices
- **Accessibility**: WCAG 2.1 compliant with keyboard navigation
- **Trust Elements**: Customer reviews (4.8/5 ★ rating) prominently displayed

## 🚀 Built With

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe code
- **TailwindCSS 4** - Utility-first CSS framework
- **Google Fonts** - Montserrat & Open Sans

## 📄 Pages

1. **Home** (`/`) - Hero section, services overview, reviews, contact form
2. **Services** (`/uslugi`) - Detailed service descriptions:
   - A/C Service & Repairs
   - Mechanical Repairs
   - Computer Diagnostics
   - Tire & Wheel Service
3. **Reviews** (`/opinie`) - Customer testimonials and ratings
4. **Contact** (`/kontakt`) - Contact form, map, and business hours

## 🎨 Design System

### Colors
- **Navy**: `#1A2332` - Primary dark color
- **Costa Blue**: `#3498DB` - Primary brand color
- **Turquoise**: `#1ABC9C` - Accent color
- **Green**: `#27AE60` - Call-to-action buttons
- **Light Gray**: `#F8F9FA` - Backgrounds

### Typography
- **Headings**: Montserrat (Bold, Semi-Bold)
- **Body**: Open Sans (Regular, Medium)

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
website/
├── app/
│   ├── layout.tsx          # Root layout with Navigation & Footer
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles with Tailwind
│   ├── uslugi/
│   │   └── page.tsx        # Services page
│   ├── opinie/
│   │   └── page.tsx        # Reviews page
│   └── kontakt/
│       └── page.tsx        # Contact page
├── components/
│   ├── Navigation.tsx      # Header navigation with mobile menu
│   └── Footer.tsx          # Footer with structured data
├── public/
│   └── images/             # Image assets
├── tailwind.config.js      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json
```

## 🔧 Configuration

### Tailwind Custom Theme

Custom colors, fonts, and spacing are defined in `tailwind.config.js`:

```javascript
colors: {
  'navy': '#1A2332',
  'costa-blue': '#3498DB',
  'costa-turquoise': '#1ABC9C',
  // ...
}
```

### SEO Metadata

Each page includes optimized metadata:
- Title tags (< 60 characters)
- Meta descriptions (< 160 characters)
- Open Graph tags
- Structured data (Schema.org)

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Focus indicators on interactive elements
- Alt text for all images
- Color contrast ratio: 4.5:1 minimum

## 📊 Performance Targets

- Lighthouse Score: 90+ (all categories)
- LCP: < 2.5s
- FID: < 100ms
- CLS: < 0.1

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project to Vercel
3. Deploy automatically

### Other Platforms

Compatible with:
- Netlify
- Cloudflare Pages
- Any Node.js hosting

## 📞 Business Information

- **Business Name**: AUTO SERVICE COSTA - Damian Paśko
- **Address**: Wandy Siemaszkowej 9, 35-602 Rzeszów
- **Phone**: 880 378 675
- **Hours**: Mon-Fri 09:00-17:00
- **Rating**: 4.8/5 ★ (55 reviews)

## 🔍 SEO

### Target Keywords
- mechanik Rzeszów
- serwis klimatyzacji Rzeszów
- naprawa samochodów Rzeszów
- auto serwis Rzeszów
- diagnostyka komputerowa Rzeszów

### Structured Data
- LocalBusiness schema
- Service schema
- Review schema
- AggregateRating

## 📝 To-Do / Future Enhancements

- [ ] Add online appointment booking
- [ ] Integrate contact form with email service
- [ ] Add live chat widget
- [ ] Create blog section
- [ ] Add photo gallery
- [ ] Implement Google Reviews API integration
- [ ] Add multi-language support (English)
- [ ] Create customer portal
- [ ] Add service price calculator

## 🤝 Contributing

This is a client project for AUTO SERVICE COSTA. For modifications or enhancements, please contact the project maintainer.

## 📄 License

Copyright © 2025 AUTO SERVICE COSTA - Damian Paśko. All rights reserved.

## 👨‍💻 Development

Built based on research of top mechanic shop websites in 2024-2025, incorporating best practices:

### Research Sources
- [26 Best Auto Repair Websites](https://squarestash.com/inspiration/auto-repair-websites/)
- [Top Auto Repair Websites](https://freshysites.com/blog/top-auto-repair-websites/)

### Design Best Practices Implemented
✓ Clean, intuitive navigation
✓ Prominent phone number in header
✓ Professional color scheme (navy/blue)
✓ Customer testimonials prominently featured
✓ Service sections with clear iconography
✓ Integrated Google Maps
✓ Click-to-call buttons
✓ Mobile-responsive design
✓ Trust elements (ratings, reviews)
✓ Clear call-to-action buttons

## 📧 Support

For technical support or questions:
- Email: support@autocosta.pl (if available)
- Phone: 880 378 675

---

**Made with ❤️ for AUTO SERVICE COSTA**
