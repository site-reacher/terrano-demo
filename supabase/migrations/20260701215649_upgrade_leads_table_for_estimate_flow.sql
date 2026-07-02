/*
# Upgrade leads table for the estimate-request flow

1. New Columns
- `preferred_contact_method` (text, nullable) — "Phone" or "Email"; how the customer wants to be contacted.
- `source_page` (text, nullable) — the page or origin the lead was submitted from (e.g. "Contact Page").

2. Security Changes
- REMOVE the existing `anon_insert_leads` policy. Visitors must no longer be able to insert
  leads directly through the Supabase anon key. Lead creation now happens exclusively through
  the secure edge function `submit-lead`, which uses the service role key (bypasses RLS).
- This guarantees visitors cannot create, read, update, delete, or download leads via the
  public anon client — all lead data stays private and is only written by the trusted server
  function.
- Existing authenticated (staff) SELECT/UPDATE/DELETE policies remain unchanged.

3. Notes
- Idempotent: uses IF NOT EXISTS for the column additions and DROP IF EXISTS for policy changes.
- Safe to re-run. No data is lost — existing columns and rows are preserved.
- `email` is required and validated server-side when "Email" is the preferred contact method,
  but the column stays nullable in the DB because phone-preferred submissions legitimately
  omit an email.
*/

ALTER TABLE leads
  ADD COLUMN IF NOT EXISTS preferred_contact_method text,
  ADD COLUMN IF NOT EXISTS source_page text;

-- Remove anon INSERT so visitors cannot write leads directly; only the edge function
-- (service role, bypasses RLS) can create leads.
DROP POLICY IF EXISTS "anon_insert_leads" ON leads;

-- Reaffirm: no anon SELECT/UPDATE/DELETE policies exist (only authenticated staff).
-- (No changes needed to existing auth_* policies.)
