# Design Guidelines

## 1. Overall Visual Style

### Design Philosophy
The website should communicate:
- **Professionalism** - This is a serious, expert business
- **Trustworthiness** - Customers can rely on honest service
- **Technical Competence** - Modern, well-equipped workshop
- **Approachability** - Friendly and customer-focused

### Design Approach
- Clean, modern layout
- Technical/mechanical aesthetic
- Uncluttered interface
- Strong visual hierarchy
- Mobile-first responsive design

### Design Mood Keywords
- Professional
- Clean
- Technical
- Trustworthy
- Modern
- Mechanical
- Precise
- Reliable

---

## 2. Color Palette

### Primary Colors

#### Dark Navy / Graphite
**Purpose:** Professionalism, trust, authority

```
Primary Dark: #1A2332
Secondary Dark: #2C3E50
Charcoal: #34495E
```

**Usage:**
- Headers and navigation
- Footer background
- Primary text
- Accent borders

#### Blue / Turquoise
**Purpose:** Air conditioning, cooling, freshness

```
Primary Blue: #3498DB
Turquoise: #1ABC9C
Light Blue: #5DADE2
Ice Blue: #AED6F1
```

**Usage:**
- Call-to-action buttons
- A/C service highlights
- Icons and accents
- Links and interactive elements

#### White / Light Gray
**Purpose:** Clean, readable, spacious

```
Pure White: #FFFFFF
Light Gray: #F8F9FA
Silver: #ECF0F1
Medium Gray: #BDC3C7
```

**Usage:**
- Background sections
- Card backgrounds
- Text on dark backgrounds
- Spacing and breathing room

### Accent Colors

#### Success Green
```
Green: #27AE60
```
**Usage:** Success messages, availability indicators

#### Warning Orange
```
Orange: #E67E22
```
**Usage:** Important notices, limited-time offers

#### Alert Red
```
Red: #E74C3C
```
**Usage:** Emergency contact, urgent service needs

### Color Usage Guidelines

**Do:**
- Use dark navy for authority and trust
- Use blue/turquoise for A/C-related content
- Maintain high contrast for readability
- Use white space generously

**Don't:**
- Use more than 3 colors in a single section
- Use low-contrast color combinations
- Overuse bright accent colors
- Use pure black (#000000)

---

## 3. Typography

### Font Strategy

#### Headings
**Recommended Font Families:**
- Montserrat (Bold, Semi-Bold)
- Roboto (Bold)
- Inter (Bold, Semi-Bold)
- Poppins (Bold, Semi-Bold)

**Characteristics:**
- Bold, strong, authoritative
- Clear and modern
- Good readability at all sizes

**Sizes:**
```
H1: 48px (mobile: 32px)
H2: 36px (mobile: 28px)
H3: 28px (mobile: 24px)
H4: 24px (mobile: 20px)
H5: 20px (mobile: 18px)
H6: 18px (mobile: 16px)
```

**Weight:** 600-700 (Semi-Bold to Bold)

#### Body Text
**Recommended Font Families:**
- Open Sans
- Roboto (Regular, Medium)
- Inter (Regular)
- Lato

**Characteristics:**
- High readability
- Clean and professional
- Good for longer content

**Sizes:**
```
Body Large: 18px
Body Regular: 16px
Body Small: 14px
Caption: 12px
```

**Weight:** 400 (Regular) for body, 500 (Medium) for emphasis

**Line Height:**
```
Headings: 1.2-1.3
Body Text: 1.6-1.8
```

### Typography Usage

**Headlines:**
```css
font-family: 'Montserrat', sans-serif;
font-weight: 700;
color: #1A2332;
letter-spacing: -0.5px;
```

**Body Text:**
```css
font-family: 'Open Sans', sans-serif;
font-weight: 400;
color: #2C3E50;
line-height: 1.7;
```

**Buttons:**
```css
font-family: 'Montserrat', sans-serif;
font-weight: 600;
text-transform: uppercase;
letter-spacing: 1px;
```

---

## 4. Icons & Graphics

### Icon Style
- **Style:** Line icons or minimal filled icons
- **Weight:** Medium stroke (2-3px)
- **Size:** 24px, 32px, 48px, 64px
- **Color:** Primary blue or dark navy

### Recommended Icon Sets
- Feather Icons
- Heroicons
- Font Awesome (regular or solid)
- Lucide Icons

### Key Icons Needed

#### Service Icons
- 🔧 Wrench - General repairs
- ❄️ Snowflake - A/C service
- 🔍 Magnifying glass - Diagnostics
- 🛞 Tire - Wheel service
- 🛠️ Tools - Mechanical work
- 🔩 Gear - Component regeneration
- 🚗 Car - General automotive

#### Interface Icons
- 📞 Phone - Contact
- 📍 Location pin - Address/map
- ⏰ Clock - Opening hours
- ⭐ Star - Reviews/ratings
- ✓ Checkmark - Completed/confirmed
- → Arrow - Navigation/CTA
- 📧 Email - Contact form

### Image Guidelines

#### Photography Style
**Preferred:**
- High-quality, well-lit photos
- Real workshop environment
- Actual equipment and tools
- Car service in progress
- Professional technician shots

**Avoid:**
- Generic stock photos
- Overly staged images
- Low-resolution photos
- Clipart or cartoons

#### Image Categories Needed
1. **Hero Images**
   - Workshop exterior
   - Clean, modern workspace
   - A/C equipment in action

2. **Service Images**
   - A/C recharging equipment
   - Diagnostic computer
   - Brake repair
   - Tire service

3. **Location Images**
   - Building exterior
   - Parking area
   - Signage
   - Interior workspace

4. **About/Trust Images**
   - Owner/technician portrait
   - Team at work
   - Customer interaction

#### Image Specifications
```
Hero Images: 1920x1080px minimum
Service Images: 800x600px minimum
Thumbnails: 400x300px
Format: WebP (with JPG fallback)
Optimization: <200KB per image
```

---

## 5. Layout & Spacing

### Grid System
- **Desktop:** 12-column grid
- **Tablet:** 8-column grid
- **Mobile:** 4-column grid
- **Gutter:** 24px (desktop), 16px (mobile)

### Spacing Scale
```
xs:  4px
sm:  8px
md:  16px
lg:  24px
xl:  32px
2xl: 48px
3xl: 64px
4xl: 96px
```

### Container Widths
```
Max Container: 1200px
Wide Container: 1400px
Narrow Container: 800px
```

### Section Padding
```
Desktop: 80px vertical, 40px horizontal
Tablet: 60px vertical, 32px horizontal
Mobile: 40px vertical, 20px horizontal
```

---

## 6. UI Components

### Buttons

#### Primary Button
```css
background: #3498DB (blue)
color: #FFFFFF
padding: 14px 32px
border-radius: 6px
font-weight: 600
text-transform: uppercase
letter-spacing: 1px
transition: 0.3s ease
hover: background: #2980B9
```

#### Secondary Button
```css
background: transparent
color: #3498DB
border: 2px solid #3498DB
padding: 12px 30px
border-radius: 6px
hover: background: #3498DB, color: #FFFFFF
```

#### Call Button (Emergency/Primary Contact)
```css
background: #27AE60 (green)
color: #FFFFFF
padding: 16px 40px
border-radius: 8px
font-size: 18px
icon: phone
hover: background: #229954
```

### Cards
```css
background: #FFFFFF
border: 1px solid #ECF0F1
border-radius: 8px
padding: 32px
box-shadow: 0 2px 8px rgba(0,0,0,0.08)
hover: box-shadow: 0 4px 16px rgba(0,0,0,0.12)
```

### Forms

#### Input Fields
```css
border: 2px solid #ECF0F1
border-radius: 6px
padding: 12px 16px
font-size: 16px
focus: border-color: #3498DB
```

#### Labels
```css
font-weight: 600
color: #2C3E50
margin-bottom: 8px
```

---

## 7. Responsive Breakpoints

```css
/* Mobile */
@media (max-width: 640px)

/* Tablet */
@media (min-width: 641px) and (max-width: 1024px)

/* Desktop */
@media (min-width: 1025px)

/* Large Desktop */
@media (min-width: 1440px)
```

---

## 8. Animation & Interactions

### Animation Principles
- **Subtle:** Don't distract from content
- **Fast:** 200-300ms transitions
- **Purposeful:** Enhance user understanding

### Recommended Animations
- Fade in on scroll (opacity 0 → 1)
- Button hover scale (1 → 1.05)
- Card hover elevation (shadow increase)
- Menu slide transitions
- Loading spinners

### Transition Timing
```css
Fast: 150ms
Standard: 250ms
Slow: 400ms
Easing: cubic-bezier(0.4, 0.0, 0.2, 1)
```

---

## 9. Accessibility

### Requirements
- WCAG 2.1 Level AA compliance
- Minimum contrast ratio: 4.5:1 for text
- Keyboard navigation support
- Screen reader compatibility
- Focus indicators on interactive elements
- Alt text for all images
- Aria labels where needed

### Focus States
```css
outline: 2px solid #3498DB
outline-offset: 2px
```

---

## 10. Brand Elements

### Logo Usage
- Clear space: minimum 20px around logo
- Minimum size: 120px width
- Acceptable formats: SVG, PNG
- Color variations: Full color, white, dark

### Review Stars Display
```
★★★★★ 4.8/5
Color: #F39C12 (gold/orange)
Size: 20px per star
Format: Filled stars with rating number
```

### Trust Badges
- Google Business Profile verified
- Customer review count badge
- Years in business
- Certified technician badges (if applicable)

---

## 11. Print Styles (if applicable)

```css
@media print {
  /* Hide navigation, footer, CTAs */
  /* Black text on white background */
  /* Show contact information prominently */
}
```

---

## 12. Design Don'ts

**Avoid:**
- ❌ Cluttered layouts
- ❌ Too many fonts (max 2 font families)
- ❌ Low contrast text
- ❌ Auto-playing videos or audio
- ❌ Pop-ups on page load
- ❌ Slow-loading images
- ❌ Horizontal scrolling
- ❌ Broken layouts on mobile
- ❌ Generic stock photos
- ❌ Excessive animations
