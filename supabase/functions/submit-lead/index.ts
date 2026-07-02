import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2.57.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
const SUPABASE_URL = Deno.env.get("SUPABASE_URL") ?? "";
const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY") ?? "";
const LEAD_NOTIFICATION_EMAIL = Deno.env.get("LEAD_NOTIFICATION_EMAIL") ?? "";
const EMAIL_FROM_ADDRESS = Deno.env.get("EMAIL_FROM_ADDRESS") ?? "";

type ContactMethod = "Phone" | "Email";

interface LeadInput {
  name: string;
  phone: string;
  email?: string;
  preferred_contact_method: ContactMethod;
  service_needed: string;
  message: string;
  source_page?: string;
  website?: string; // honeypot
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

function validate(input: LeadInput): { ok: boolean; error?: string; clean?: LeadInput } {
  const name = (input.name ?? "").trim();
  const phone = (input.phone ?? "").trim();
  const email = (input.email ?? "").trim();
  const preferred = (input.preferred_contact_method ?? "").trim();
  const service = (input.service_needed ?? "").trim();
  const message = (input.message ?? "").trim();
  const sourcePage = (input.source_page ?? "").trim() || "Contact Page";
  const website = input.website ?? "";

  if (!name) return { ok: false, error: "Full name is required." };
  if (!phone) return { ok: false, error: "Phone number is required." };
  if (!preferred) return { ok: false, error: "Preferred contact method is required." };
  if (preferred !== "Phone" && preferred !== "Email") {
    return { ok: false, error: "Preferred contact method must be Phone or Email." };
  }
  if (!service) return { ok: false, error: "Service needed is required." };
  if (!message) return { ok: false, error: "Message is required." };
  if (preferred === "Email") {
    if (!email) return { ok: false, error: "Email address is required when Email is your preferred contact method." };
    if (!emailRegex.test(email)) return { ok: false, error: "Please enter a valid email address." };
  }
  if (email && !emailRegex.test(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }

  return {
    ok: true,
    clean: {
      name, phone, email: email || undefined, preferred_contact_method: preferred,
      service_needed: service, message, source_page: sourcePage, website,
    },
  };
}

async function sendNotificationEmail(lead: LeadInput, submittedAt: string): Promise<{ ok: boolean; error?: string }> {
  if (!RESEND_API_KEY) return { ok: false, error: "RESEND_API_KEY not configured" };
  if (!LEAD_NOTIFICATION_EMAIL) return { ok: false, error: "LEAD_NOTIFICATION_EMAIL not configured" };
  if (!EMAIL_FROM_ADDRESS) return { ok: false, error: "EMAIL_FROM_ADDRESS not configured" };

  const subject = `New Estimate Request — ${lead.service_needed} — ${lead.name}`;
  const plainText = [
    `New estimate request received.`,
    ``,
    `Name: ${lead.name}`,
    `Phone: ${lead.phone}`,
    `Email: ${lead.email ?? "Not provided"}`,
    `Preferred contact method: ${lead.preferred_contact_method}`,
    `Service requested: ${lead.service_needed}`,
    ``,
    `Customer message:`,
    ` ${lead.message}`,
    ``,
    `Date/time submitted: ${submittedAt}`,
    `Lead status: new`,
    `Source page: ${lead.source_page}`,
  ].join("\n");

  const html = `<!DOCTYPE html>
<html>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; color: #102a43; max-width: 600px; margin: 0 auto; padding: 24px;">
  <h2 style="color: #1976d2; margin-bottom: 8px;">New Estimate Request</h2>
  <p style="color: #7c8694; font-size: 14px; margin-bottom: 24px;">A new estimate request was submitted through the Terrano Plumbing &amp; Remodeling website.</p>
  <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
    <tr><td style="padding: 8px 0; font-weight: 700; width: 40%;">Name</td><td style="padding: 8px 0;">${escapeHtml(lead.name)}</td></tr>
    <tr><td style="padding: 8px 0; font-weight: 700;">Phone</td><td style="padding: 8px 0;">${escapeHtml(lead.phone)}</td></tr>
    <tr><td style="padding: 8px 0; font-weight: 700;">Email</td><td style="padding: 8px 0;">${escapeHtml(lead.email ?? "Not provided")}</td></tr>
    <tr><td style="padding: 8px 0; font-weight: 700;">Preferred Contact</td><td style="padding: 8px 0;">${escapeHtml(lead.preferred_contact_method)}</td></tr>
    <tr><td style="padding: 8px 0; font-weight: 700;">Service Requested</td><td style="padding: 8px 0;">${escapeHtml(lead.service_needed)}</td></tr>
    <tr><td style="padding: 8px 0; font-weight: 700;">Date/Time Submitted</td><td style="padding: 8px 0;">${escapeHtml(submittedAt)}</td></tr>
    <tr><td style="padding: 8px 0; font-weight: 700;">Lead Status</td><td style="padding: 8px 0;">new</td></tr>
    <tr><td style="padding: 8px 0; font-weight: 700;">Source Page</td><td style="padding: 8px 0;">${escapeHtml(lead.source_page ?? "Contact Page")}</td></tr>
  </table>
  <h3 style="color: #102a43; margin-top: 24px; font-size: 15px;">Customer Message</h3>
  <p style="background: #f8f9fb; border-radius: 8px; padding: 16px; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(lead.message)}</p>
</body>
</html>`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: EMAIL_FROM_ADDRESS,
        to: LEAD_NOTIFICATION_EMAIL,
        subject,
        text: plainText,
        html,
      }),
    });

    if (!res.ok) {
      const errBody = await res.text();
      return { ok: false, error: `Resend API error ${res.status}: ${errBody}` };
    }
    return { ok: true };
  } catch (err) {
    return { ok: false, error: `Email send failed: ${(err as Error).message}` };
  }
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }
  if (req.method !== "POST") {
    return json({ error: "Method not allowed." }, 405);
  }

  let raw: LeadInput;
  try {
    raw = await req.json();
  } catch {
    return json({ error: "Invalid request body." }, 400);
  }

  // Honeypot — silently accept but do nothing
  if ((raw.website ?? "").trim() !== "") {
    console.log("[submit-lead] Honeypot triggered — silently dropping submission.");
    return json({ ok: true }, 200);
  }

  const result = validate(raw);
  if (!result.ok || !result.clean) {
    return json({ error: result.error }, 400);
  }
  const lead = result.clean;
  const submittedAt = new Date().toISOString();

  // --- Step 1: Save to database (service role bypasses RLS) ---
  const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY, {
    auth: { persistSession: false },
  });

  const { data: insertData, error: dbError } = await supabase
    .from("leads")
    .insert({
      name: lead.name,
      phone: lead.phone,
      email: lead.email,
      preferred_contact_method: lead.preferred_contact_method,
      service_needed: lead.service_needed,
      message: lead.message,
      source_page: lead.source_page,
      status: "new",
    })
    .select("id")
    .single();

  if (dbError || !insertData) {
    console.error("[submit-lead] Database save FAILED:", dbError?.message ?? "no data returned");
    return json({ error: "We couldn't submit your request right now. Please call us directly." }, 500);
  }

  console.log(`[submit-lead] Lead saved successfully — id: ${insertData.id}, name: ${lead.name}, service: ${lead.service_needed}`);

  // --- Step 2: Send email notification (best-effort) ---
  const emailResult = await sendNotificationEmail(lead, submittedAt);
  if (emailResult.ok) {
    console.log(`[submit-lead] Notification email sent to ${LEAD_NOTIFICATION_EMAIL} for lead ${insertData.id}`);
  } else {
    // Lead is saved — log the failure but still return success to the visitor.
    console.error(`[submit-lead] Email send FAILED for lead ${insertData.id}: ${emailResult.error}`);
  }

  // Visitor always sees success if the lead was saved, regardless of email outcome.
  return json({ ok: true }, 200);
});
