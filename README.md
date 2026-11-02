
# Rent H&U - Premium Real Estate (Next.js)

Website premium vacation rental seperti agency ternama, converted dari desain Instagram webdesignssphere.

## Fitur
- Homepage 9 section (Hero full background villa, Trusted by, Most Viewed, How It Works, Featured, Testimonials, CTA)
- Multipage client routing: Home, Listings, Detail, About, Contact
- Gambar lokal (4 villa) di /public/images
- Tailwind CSS, rounded-3xl, soft shadows, dark blue #0a2540
- Responsive

## Cara pakai di bolt.new
1. Upload folder ini ke GitHub: buat repo baru `rent-hu-premium`, push semua file
2. Buka https://bolt.new -> Import from GitHub -> pilih repo kamu
3. Bolt akan detect Next.js otomatis
4. Prompt di bolt.new:
```
Continue developing this Next.js rental website:
- Add Supabase backend for listings CRUD
- Add authentication (login/register)
- Add real search filter logic (city, price, typology)
- Add map with Mapbox/Leaflet for Andalucía
- Add booking API endpoint /api/book
- Keep the premium design with hero-villa.webp as hero background
```

## Local dev
```bash
npm install
npm run dev
```

## Deploy
- Vercel: import GitHub repo, will deploy automatically
- Netlify: same

## Structure
- /public/images - villa images (hero-villa.webp etc)
- /src/app/page.tsx - main multipage SPA
- /src/components - Header, Hero, Sections

Enjoy!
