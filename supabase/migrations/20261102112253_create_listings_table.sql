/*
# Create listings table and seed properties

1. New Tables
- `listings`: properties shown on the public website.
  - `id` (uuid, primary key)
  - `title` (text): property name shown on cards and detail page
  - `address` (text): street address
  - `city` (text): town or city
  - `typology` (text): property type, e.g. Villa or Cottage
  - `price` (numeric): price in euros
  - `beds` / `baths` (integer): room counts
  - `description` (text): longer description for the detail page
  - `image_url` (text): path to the property photo
  - `created_at` (timestamp)
2. Seed data
- Inserts the four existing properties, only when the table is empty.
3. Security
- Enable RLS on `listings`.
- Grant SELECT to `anon` and `authenticated` only; the public site can read listings but cannot change them.
- Policy allows public reads of all listings because listings are intentionally public.

# Notes
1. No write access is granted to the website, so listings are managed from the database dashboard.
2. Re-running this migration does not duplicate seed rows.
*/

CREATE TABLE IF NOT EXISTS listings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  address text NOT NULL,
  city text NOT NULL,
  typology text NOT NULL,
  price numeric(12,2) NOT NULL CHECK (price >= 0),
  beds integer NOT NULL CHECK (beds >= 0),
  baths integer NOT NULL CHECK (baths >= 0),
  description text NOT NULL DEFAULT '',
  image_url text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE listings ENABLE ROW LEVEL SECURITY;

GRANT SELECT ON listings TO anon, authenticated;

DROP POLICY IF EXISTS "anon_select_listings" ON listings;
CREATE POLICY "anon_select_listings" ON listings FOR SELECT
TO anon, authenticated USING (true);

INSERT INTO listings (title, address, city, typology, price, beds, baths, description, image_url)
SELECT v.title, v.address, v.city, v.typology, v.price, v.beds, v.baths, v.description, v.image_url
FROM (VALUES
  ('Ocean Breeze Villa', 'Calle del Mar 12', 'Nerja', 'Villa', 910000.00, 4, 2, 'A sea-facing villa with a private terrace and a view of the coastline.', '/images/ocean-breeze.webp'),
  ('Jakson House', 'Jardines de Jakson 8', 'Malaga', 'Villa', 750000.00, 3, 2, 'A bright family home surrounded by gardens, close to the old town.', '/images/jakson-house.webp'),
  ('Lakeside Cottage', 'Camino del Lago 4', 'Ronda', 'Cottage', 540000.00, 2, 1, 'A cozy cottage with a quiet lakeside setting and a wood-beamed living room.', '/images/cliff-ocean.webp'),
  ('Hillside Villa', 'Mirador 21', 'Almunecar', 'Villa', 950000.00, 4, 3, 'A hilltop villa with panoramic views, a pool, and a shaded garden terrace.', '/images/hero-villa.webp')
) AS v(title, address, city, typology, price, beds, baths, description, image_url)
WHERE NOT EXISTS (SELECT 1 FROM listings);
