/*
# Create leads table for estimate requests

1. New Tables
- `leads`
  - `id` (uuid, primary key)
  - `name` (text, not null) — full name of the person requesting the estimate
  - `phone` (text, not null) — phone number
  - `email` (text) — optional email address
  - `service_needed` (text, not null) — the requested service category
  - `message` (text) — optional details about the project
  - `status` (text, default 'new') — lead workflow status
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `leads`.
- This is a no-auth public contact form, so inserts are allowed for anon + authenticated.
- SELECT/UPDATE/DELETE restricted to authenticated (staff) only — anon visitors cannot read or modify leads.
- This prevents random visitors from scraping or altering submitted leads while still letting the contact form submit.

3. Notes
- Idempotent: safe to re-run (IF NOT EXISTS + drop policies first).
- `service_needed` validated via a frontend dropdown, not a DB constraint, to stay flexible.
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  email text,
  service_needed text NOT NULL,
  message text,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- anon + authenticated can INSERT (public contact form)
DROP POLICY IF EXISTS "anon_insert_leads" ON leads;
CREATE POLICY "anon_insert_leads" ON leads FOR INSERT
  TO anon, authenticated WITH CHECK (true);

-- only authenticated staff can read/update/delete leads
DROP POLICY IF EXISTS "auth_select_leads" ON leads;
CREATE POLICY "auth_select_leads" ON leads FOR SELECT
  TO authenticated USING (true);

DROP POLICY IF EXISTS "auth_update_leads" ON leads;
CREATE POLICY "auth_update_leads" ON leads FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "auth_delete_leads" ON leads;
CREATE POLICY "auth_delete_leads" ON leads FOR DELETE
  TO authenticated USING (true);
