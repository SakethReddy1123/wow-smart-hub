# WoW Smart Hub™

Production-ready website for **WoW Smart Hub™**, operated by BETAWOMEN LLP. Women-powered smart kiosk ecosystem for community services.

## Tech Stack

- **Next.js 14+** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **ShadCN-style UI** (custom components with CVA, Tailwind)
- Responsive, SEO-optimized, Vercel-ready

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 3. Build for production

```bash
npm run build
```

### 4. Deploy on Vercel

1. **Push to GitHub**  
   Create a repo and push this project:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/wow-smart-hub.git
   git push -u origin main
   ```

2. **Import into Vercel**  
   - Go to [vercel.com](https://vercel.com) and sign in.  
   - Click **Add New** → **Project**.  
   - Import your GitHub repository (`wow-smart-hub`).  
   - Leave build settings as default (Vercel detects Next.js).  
   - Click **Deploy**.

3. **Deploy**  
   Vercel will run `npm run build` and deploy. Future pushes to `main` will trigger automatic deployments.

## Project Structure

```
/app
  layout.tsx       # Root layout, fonts, SEO metadata
  page.tsx         # Home
  globals.css
  /services        # Services page
  /franchise       # Franchise application
  /about           # About / mission
  /contact         # Contact + form
/components
  Navbar.tsx
  Footer.tsx
  ContactForm.tsx
  FranchiseForm.tsx
  /ui              # Button, Card, Input, Textarea, Label
/lib
  utils.ts         # cn() for Tailwind
/public
```

## Brand

- **Primary:** #4B1F6F (Deep Purple), #D81B60 (Royal Magenta), #F8BBD0 (Soft Pink)  
- **Fonts:** Poppins (headings), Montserrat (body)  
- **Tone:** Professional, empowering, modern, women-focused  

## SEO

- Meta title: **WoW Smart Hub | Women Powered Smart Community Kiosks**
- Meta description and OpenGraph tags set in `app/layout.tsx`
- Per-page metadata on Services, Franchise, About, Contact

---

© 2026 WoW Smart Hub™ · Operated by BETAWOMEN LLP
