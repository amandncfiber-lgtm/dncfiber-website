# Drop Network Connective — Website

Enterprise-grade telecom engineering website built with **Next.js 15**, **TypeScript**, **Tailwind CSS** and **Framer Motion**.

## Company

**Drop Network Connective**  
FTTX Design & Telecom Engineering  
Raipur, Chhattisgarh, India  
Phone: +91 73899 73218  
Website: dncfiber.com

---

## Tech Stack

- **Next.js 15** — App Router
- **React 19** — UI framework
- **TypeScript** — Type safety
- **Tailwind CSS** — Styling
- **Framer Motion** — Animations
- **Lucide React** — Icons
- **Unsplash** — Real photography

---

## Quick Start

### Prerequisites

- Node.js 18 or higher → [nodejs.org](https://nodejs.org)
- npm (included with Node.js)

### Install & Run

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
# http://localhost:3000
```

### Build for Production

```bash
npm run build
npm run start
```

---

## Project Structure

```
src/
├── app/                        # Next.js App Router pages
│   ├── layout.tsx              # Root layout (Navbar + Footer)
│   ├── page.tsx                # Homepage
│   ├── globals.css             # Global styles
│   ├── sitemap.ts              # SEO sitemap
│   ├── robots.ts               # SEO robots.txt
│   ├── not-found.tsx           # 404 page
│   ├── about/page.tsx          # About Us
│   ├── services/page.tsx       # Services
│   ├── fttx-solutions/page.tsx # FTTX Solutions
│   ├── partnership/page.tsx    # Partnership
│   ├── portfolio/page.tsx      # Portfolio
│   └── contact/page.tsx        # Contact
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Navigation
│   │   └── Footer.tsx          # Footer
│   ├── sections/
│   │   ├── Hero.tsx            # Homepage hero
│   │   ├── AboutSection.tsx    # About content
│   │   ├── ServicesGrid.tsx    # Services cards
│   │   ├── WorkflowSection.tsx # FTTX workflow
│   │   ├── FiberColorCode.tsx  # Fiber color viz
│   │   ├── TechSection.tsx     # Software stack
│   │   ├── WhyChooseUs.tsx     # Why choose us
│   │   ├── PartnershipSection.tsx  # Partnership
│   │   ├── USASection.tsx      # USA client support
│   │   └── ContactSection.tsx  # Contact form
│   └── ui/
│       └── index.tsx           # Shared UI components
│
└── lib/
    └── utils.ts                # Constants, data, utilities
```

---

## Pages

| Route | Page |
|---|---|
| `/` | Homepage |
| `/about` | About Us |
| `/services` | All Services |
| `/fttx-solutions` | FTTX Engineering Solutions |
| `/partnership` | Engineering Partnership |
| `/portfolio` | Project Portfolio |
| `/contact` | Contact & Inquiry Form |

---

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Upload /out or connect GitHub repo to Netlify
```

### Environment Variables

No environment variables required for basic operation. To enable a real contact form backend, add:

```env
NEXT_PUBLIC_CONTACT_API=your_api_endpoint
```

---

## Customization

All company data, services, workflow steps and fiber colors are centralized in:

```
src/lib/utils.ts
```

Edit this file to update:
- Company name, phone, email, location
- Service titles and descriptions
- Workflow steps
- Technology stack
- Fiber color codes

---

## License

Private — Drop Network Connective. All rights reserved.
