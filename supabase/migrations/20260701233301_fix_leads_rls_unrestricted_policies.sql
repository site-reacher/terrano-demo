/*
# Remove unrestricted UPDATE and DELETE policies on leads

1. Security Changes
- DROP the `auth_update_leads` policy. It used `USING (true) WITH CHECK (true)`, which allowed
  ANY authenticated user to update every row in the leads table — bypassing row-level security.
- DROP the `auth_delete_leads` policy. It used `USING (true)`, which allowed ANY authenticated
  user to delete every row in the leads table — bypassing row-level security.
- Rationale: This is a no-auth contact-form app. There is no sign-in flow, no staff dashboard,
  and no ownership column on leads, so there is no meaningful per-row predicate to scope these
  policies to. Leaving them as `USING (true)` is an unrestricted-access hole. The secure path
  for lead creation is the `submit-lead` edge function, which writes via the service role
  (bypasses RLS). Administrative read/update/delete of leads is done through the Supabase
  dashboard, which also operates with elevated privileges. No anon or authenticated access to
  UPDATE or DELETE is needed or appropriate.
- The `auth_select_leads` policy (authenticated, USING true) is also dropped for the same
  reason — leads are private customer data and should not be readable by any authenticated
  user without scoping. With no auth flow there is no legitimate authenticated reader.

2. Net effect after this migration
- anon role: cannot SELECT, INSERT, UPDATE, or DELETE leads (no policies grant access).
- authenticated role: cannot SELECT, UPDATE, or DELETE leads (all policies dropped).
- service role (edge function + Supabase dashboard): bypasses RLS — full access retained.

3. Notes
- Idempotent: DROP POLICY IF EXISTS is safe to re-run.
- No data is lost — only access policies are removed.
*/

DROP POLICY IF EXISTS "auth_update_leads" ON leads;
DROP POLICY IF EXISTS "auth_delete_leads" ON leads;
DROP POLICY IF EXISTS "auth_select_leads" ON leads;
