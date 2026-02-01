# 🌟 Nikola Kremić - Portfolio Website

Moderan, responsive portfolio website za freelance web developera sa bilingvalnom podrškom (Srpski/Engleski), profesionalnim animacijama i kontakt formom.



## ✨

- 🎨 **Moderan dizajn** - Purple/Violet theme sa glassmorphism efektima
- 🌐 **Bilingualni** - Srpski i Engleski jezik sa live switching
- 🎭 **Profesionalne animacije** - Framer Motion za smooth transitions
- 📱 **Fully Responsive** - Optimizovano za sve uređaje
- ⚡ **Performance** - Next.js 16 App Router, image optimization, compression
- 🔒 **Sigurnost** - Input sanitizacija, validation, security headers
- 📧 **Kontakt forma** - Resend API integracija sa email notifikacijama
- 🎯 **SEO optimizovano** - Meta tags, sitemap, robots.txt, Open Graph
- ♿ **Accessibility** - Semantic HTML, ARIA labels
- 📊 **Analytics ready** - Spreman za Google Analytics integraciju

## 🛠️ Tech Stack

### Frontend
- **Framework:** Next.js 16.1.4 (App Router)
- **React:** 19.2.3
- **TypeScript:** 5
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion 12.29
- **Fonts:** Inter (Google Fonts)

### Backend & APIs
- **Email:** Resend API
- **Runtime:** Node.js 20+

### DevOps & Deployment
- **Process Manager:** PM2
- **Web Server:** Nginx
- **SSL:** Let's Encrypt (Certbot)
- **Hosting:** Ubuntu VPS

## 🚀 Quick Start





2. **Install dependencies**
```bash
npm install
```



3. **Run development server**
```bash
npm run dev
```

Otvori [http://localhost:3000](http://localhost:3000) u browser-u.

## 📁 Project Structure

```
portfolio-website/
├── app/                      # Next.js App Router
│   ├── api/
│   │   └── contact/         # Kontakt forma API endpoint
│   ├── layout.tsx           # Root layout sa SEO metadata
│   ├── page.tsx             # Glavna stranica
│   ├── globals.css          # Globalni stilovi i CSS variables
│   ├── sitemap.ts           # SEO sitemap generator
│   └── robots.ts            # SEO robots.txt
├── components/
│   ├── sections/            # Sekcije stranice
│   │   ├── Hero.tsx        # Hero sekcija sa typewriter efektom
│   │   ├── About.tsx       # O meni + tech stack
│   │   ├── Services.tsx    # Usluge
│   │   ├── Portfolio.tsx   # Portfolio projekti
│   │   └── Contact.tsx     # Kontakt forma
│   ├── ui/                  # Reusable UI komponente
│   │   ├── FloatingShapes.tsx
│   │   └── SectionTitle.tsx
│   ├── Navbar.tsx           # Navigacija sa scroll detection
│   └── Footer.tsx           # Footer
├── lib/
│   ├── LanguageContext.tsx  # i18n Context Provider
│   └── translations.ts      # Prevodi (SR/EN)
├── public/
│   ├── CV.pdf              # Downloadable CV
│   └── google*.html        # Google Search Console verification
├── .env.local              # Environment variables (git ignored)
├── .env.example            # Template za env variables
├── next.config.ts          # Next.js konfiguracija
├── tsconfig.json           # TypeScript config
├── tailwind.config.js      # Tailwind config
├── DEPLOYMENT.md           # Deployment instrukcije
└── deploy.sh               # Automatski deployment script

```

## 🎨 Customization

### Colors & Theme

Izmeni CSS variables u [app/globals.css](app/globals.css):

```css
:root {
  --bg-primary: #0d0416;
  --bg-secondary: #1a0f2e;
  --accent-primary: #8b5cf6;
  --accent-secondary: #a855f7;
  /* ... */
}
```

### Translations

Dodaj/izmeni prevode u [lib/translations.ts](lib/translations.ts):

```typescript
export const translations = {
  sr: {
    nav: { about: 'O meni', /* ... */ },
    hero: { title: 'Full-Stack Web Developer', /* ... */ },
    // ...
  },
  en: { /* ... */ }
};
```

### Kontakt info

Izmeni social linkove u [components/sections/Contact.tsx](components/sections/Contact.tsx):

```typescript
const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/yourusername' },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/yourprofile' },
  // ...
];
```


## 📊 Scripts

```bash
npm run dev      # Development server (localhost:3000)
npm run build    # Production build
npm run start    # Production server
npm run lint     # ESLint check
```

## 🔒 Security

- ✅ Input sanitizacija protiv XSS napada
- ✅ Email validacija
- ✅ Rate limiting ready
- ✅ Security headers (HSTS, CSP, X-Frame-Options)
- ✅ Environment variables za sensitive data
- ✅ Type safety sa TypeScript

## 🐛 Known Issues & Roadmap

### To-Do List
- [ ] Light/Dark mode toggle
- [ ] Google Analytics integracija
- [ ] Blog sekcija
- [ ] Admin panel za portfolio management
- [ ] Testimonials sekcija
- [ ] CI/CD pipeline (GitHub Actions)
- [ ] Docker kontejnerizacija
- [ ] Unit & E2E tests

## 📝 License

MIT License - Vidi [LICENSE](LICENSE) fajl za detalje.

## 👤 Author

**Nikola Kremić**

- Website: [izradi-sajt.com](https://izradi-sajt.com)
- Email: nikolakremic15@gmail.com
- GitHub: [@kremic03](https://github.com/kremic03)
- LinkedIn: [Nikola Kremić](https://www.linkedin.com/in/nikola-kremic-b4a318257/)



