# VinuLabs website — Vercel-ready source

This is the complete source for the VinuLabs consultancy website. It is a standard Next.js project and includes the logo and the best-resolution profile images available in the current site.

## Deploy on Vercel

1. Extract this ZIP file.
2. Upload the extracted folder to a new GitHub repository.
3. In Vercel, select **Add New → Project** and import that repository.
4. Keep the detected framework as **Next.js**.
5. Select **Deploy**. No environment variables are required.

## Run locally

Install Node.js 20.9 or newer, then run:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Main files

- `app/page.tsx` — website content and page structure
- `app/globals.css` — complete responsive design
- `app/layout.tsx` — page metadata and favicon
- `public/` — VinuLabs logo and profile images

## Update contact links

The current call-to-action buttons open the VinuLabs LinkedIn page. Search for `linkedin.com/company/vinulab` in `app/page.tsx` to replace it with an email address, WhatsApp link or contact page later.
