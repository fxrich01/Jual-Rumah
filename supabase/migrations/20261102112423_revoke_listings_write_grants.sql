/*
# Restrict listings to read-only access for website visitors

1. Modified Tables
- `listings`: removed INSERT, UPDATE and DELETE privileges that the database had granted by default to the `anon` and `authenticated` roles.

2. Security
- Visitors (anon and authenticated) keep SELECT only, which the public listings pages need.
- Row level security stays enabled and the public SELECT policy is unchanged.

# Notes
1. Listings are managed from the database dashboard, so the website never writes to this table.
*/

REVOKE INSERT, UPDATE, DELETE ON listings FROM anon, authenticated;
