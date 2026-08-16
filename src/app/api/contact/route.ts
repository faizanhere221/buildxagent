import { NextResponse } from "next/server";
import { Resend } from "resend";
import { headers } from "next/headers";

const resend = new Resend(process.env.RESEND_API_KEY);

const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const RATE_LIMIT_MAX = 3;
const MIN_FILL_TIME_MS = 3000;

const submissionsByIp = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (submissionsByIp.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );

  if (timestamps.length >= RATE_LIMIT_MAX) {
    submissionsByIp.set(ip, timestamps);
    return true;
  }

  timestamps.push(now);
  submissionsByIp.set(ip, timestamps);
  return false;
}

export async function POST(req: Request) {
  try {
    const { name, email, company, service, message, website, formLoadedAt } =
      await req.json();

    // Honeypot: bots fill every field, humans never see this one.
    if (typeof website === "string" && website.trim().length > 0) {
      return NextResponse.json({ success: true });
    }

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email required" }, { status: 400 });
    }

    if (typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json({ error: "Invalid name" }, { status: 400 });
    }

    const emailParts = String(email).split("@");
    const emailDomain = emailParts[1] ?? "";
    if (emailParts.length !== 2 || emailDomain.length < 4) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const nameFirst = name.trim().toLowerCase();
    const emailLocal = emailParts[0].toLowerCase();
    const sharesChar = [...nameFirst].some((c) => emailLocal.includes(c));
    if (!sharesChar) {
      return NextResponse.json({ error: "Invalid submission" }, { status: 400 });
    }

    const elapsed = Date.now() - Number(formLoadedAt || 0);
    if (!formLoadedAt || Number.isNaN(elapsed) || elapsed < MIN_FILL_TIME_MS) {
      return NextResponse.json({ success: true });
    }

    const headerList = await headers();
    const forwardedFor = headerList.get("x-forwarded-for");
    const ip = forwardedFor ? forwardedFor.split(",")[0].trim() : "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json({ error: "Too many requests" }, { status: 429 });
    }

    await resend.emails.send({
      from: "BuildXAgent <onboarding@resend.dev>",
      to: "islam9039438@gmail.com",
      subject: `New Lead: ${name} - ${service}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "Not provided"}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong> ${message || "No message"}</p>
      `,
      replyTo: email,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
