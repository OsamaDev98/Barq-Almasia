# شركة برق الماسية لأجهزة الأمن والسلامة
## Barq Almasia — Corporate Website

A premium, production-ready corporate website for **Barq Almasia**, a leading security and fire safety systems company in Saudi Arabia.

---

## 🚀 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Font | Cairo (Google Fonts) |
| Form Validation | React Hook Form + Zod |
| Notifications | Sonner |
| Email | Nodemailer (Gmail SMTP) |

---

## 📁 Project Structure

```
src/
├── app/
│   ├── api/contact/route.ts   # Secure email API route
│   ├── policies/page.tsx      # Privacy & Terms page
│   ├── projects/
│   │   ├── layout.tsx         # SEO metadata for /projects
│   │   └── page.tsx           # Projects gallery page
│   ├── globals.css
│   ├── layout.tsx             # Root layout with global SEO + JSON-LD
│   ├── page.tsx               # Homepage
│   └── sitemap.ts             # Auto-generated sitemap.xml
├── assets/                    # Local images (logo, hero, about)
├── components/                # All UI components
│   ├── About.tsx
│   ├── Clients.tsx
│   ├── Contact.tsx            # Form with Zod validation
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Partners.tsx
│   ├── Projects.tsx
│   ├── Services.tsx
│   ├── Testimonials.tsx
│   └── WhatsAppButton.tsx
└── data/
    └── projects.ts            # Projects data
public/
├── favicon.ico
├── og-image.jpg               # ⚠️ Add before deploy (1200×630px)
└── robots.txt
```

---

## ⚙️ Environment Variables

Create a `.env.local` file in the project root:

```env
SMTP_EMAIL=your_gmail_app
SMTP_PASSWORD=your_gmail_app_password
```

> **How to get Gmail App Password:**
> Google Account → Security → 2-Step Verification → App Passwords → Generate for "Mail"

---

## 🚀 Getting Started

```bash
npm install
npm run dev       # Development server at http://localhost:3000
npm run build     # Production build
npm run start     # Start production server
```

---

## 📦 Pre-Deployment Checklist

- [ ] Add `public/og-image.jpg` (1200×630px branded image)
- [ ] Set `SMTP_EMAIL` and `SMTP_PASSWORD` in hosting environment variables
- [ ] Update phone number in `Contact.tsx` and `Footer.tsx`
- [ ] Replace placeholder WhatsApp number in `WhatsAppButton.tsx`
- [ ] Submit `https://barqalmasia.org/sitemap.xml` to Google Search Console
- [ ] Add Google Search Console verification meta tag to `layout.tsx` if needed

---

## 🔒 Security Features

- Server-side Zod validation on the contact API
- HTML escaping on all user inputs before email injection
- Rate limiting: 5 requests/minute per IP
- Strict Content-Type enforcement on API routes
- No information leakage in error responses

---

## 🌐 SEO Features

- Full Open Graph & Twitter Card metadata
- JSON-LD structured data (Organization + LocalBusiness schema)
- Canonical URLs on all pages
- Auto-generated `sitemap.xml`
- `robots.txt` configured for full crawling
- `theme-color` meta tag for mobile browsers
- Per-page metadata via Next.js App Router

---

&copy; 2025 شركة برق الماسية لأجهزة الأمن والسلامة
