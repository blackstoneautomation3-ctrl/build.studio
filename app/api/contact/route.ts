import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, service, budget, timeline, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Using Resend — install with: npm install resend
    // Then add RESEND_API_KEY to your .env.local
    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Notify you
    await resend.emails.send({
      from: "Build.Studio Contact <noreply@build.studio>",
      to: ["hello@build.studio"],
      replyTo: email,
      subject: `New Inquiry from ${name}${company ? ` — ${company}` : ""}`,
      html: `
        <div style="font-family:sans-serif;background:#080808;color:#f2f2f0;padding:40px;max-width:600px;margin:0 auto;">
          <h2 style="font-size:20px;color:#e8b86d;margin-bottom:24px;">build.studio — New Project Inquiry</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;color:#666;font-size:12px;text-transform:uppercase;letter-spacing:2px;">From</td><td style="padding:8px 0;font-size:14px;">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#666;font-size:12px;text-transform:uppercase;letter-spacing:2px;">Email</td><td style="padding:8px 0;font-size:14px;">${email}</td></tr>
            ${company ? `<tr><td style="padding:8px 0;color:#666;font-size:12px;text-transform:uppercase;letter-spacing:2px;">Company</td><td style="padding:8px 0;font-size:14px;">${company}</td></tr>` : ""}
            <tr><td style="padding:8px 0;color:#666;font-size:12px;text-transform:uppercase;letter-spacing:2px;">Service</td><td style="padding:8px 0;font-size:14px;">${service || "Not specified"}</td></tr>
            <tr><td style="padding:8px 0;color:#666;font-size:12px;text-transform:uppercase;letter-spacing:2px;">Budget</td><td style="padding:8px 0;font-size:14px;">${budget || "Not specified"}</td></tr>
            <tr><td style="padding:8px 0;color:#666;font-size:12px;text-transform:uppercase;letter-spacing:2px;">Timeline</td><td style="padding:8px 0;font-size:14px;">${timeline || "Not specified"}</td></tr>
          </table>
          <div style="margin-top:24px;padding:20px;background:#111;border-radius:12px;border:1px solid rgba(255,255,255,0.07);">
            <div style="font-size:11px;color:#666;text-transform:uppercase;letter-spacing:2px;margin-bottom:10px;">Message</div>
            <p style="font-size:14px;line-height:1.8;color:#ccc;">${message.replace(/\n/g, "<br/>")}</p>
          </div>
          <a href="mailto:${email}" style="display:inline-block;margin-top:24px;padding:12px 24px;background:#e8b86d;color:#080808;border-radius:100px;font-size:13px;font-weight:600;text-decoration:none;">Reply to ${name} →</a>
        </div>
      `,
    });

    // Auto-reply to client
    await resend.emails.send({
      from: "Ayo at Build.Studio <hello@build.studio>",
      to: [email],
      subject: "We received your message — Build.Studio",
      html: `
        <div style="font-family:sans-serif;background:#080808;color:#f2f2f0;padding:40px;max-width:560px;margin:0 auto;">
          <div style="font-size:18px;font-weight:600;margin-bottom:32px;">build<span style="color:#e8b86d;">.</span>studio</div>
          <h1 style="font-size:32px;font-weight:400;line-height:1.2;margin-bottom:16px;">Got it, ${name.split(" ")[0]}.<br/><em style="color:#e8b86d;">We&#39;ll be in touch.</em></h1>
          <p style="font-size:15px;color:#666;line-height:1.8;margin-bottom:16px;">Thanks for reaching out to Build.Studio. We&#39;ve received your message and will get back to you within <strong style="color:#f2f2f0;">24 hours</strong>.</p>
          <div style="margin:24px 0;padding:20px;background:#111;border-radius:12px;border:1px solid rgba(255,255,255,0.07);">
            <div style="font-size:11px;color:#e8b86d;letter-spacing:2px;text-transform:uppercase;margin-bottom:12px;">Your Submission</div>
            ${service ? `<div style="margin-bottom:8px;font-size:13px;color:#999;">Service: <span style="color:#f2f2f0;">${service}</span></div>` : ""}
            ${budget ? `<div style="margin-bottom:8px;font-size:13px;color:#999;">Budget: <span style="color:#f2f2f0;">${budget}</span></div>` : ""}
            ${timeline ? `<div style="font-size:13px;color:#999;">Timeline: <span style="color:#f2f2f0;">${timeline}</span></div>` : ""}
          </div>
          <a href="https://build.studio/work" style="display:inline-block;margin-top:16px;padding:12px 24px;background:#e8b86d;color:#080808;border-radius:100px;font-size:13px;font-weight:600;text-decoration:none;">See Our Work →</a>
          <div style="margin-top:40px;padding-top:20px;border-top:1px solid rgba(255,255,255,0.07);font-size:12px;color:#333;">
            <p>Build.Studio · hello@build.studio</p>
            <p>Digital Products. Built Differently.</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try WhatsApp instead." },
      { status: 500 }
    );
  }
}
