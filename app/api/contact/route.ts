import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { name, phone, email, message } = await req.json();

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    const html = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name || "Not provided"}</p>
      <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
      <p><strong>Email:</strong> ${email || "Not provided"}</p>
      <p><strong>Message:</strong></p>
      <p>${(message || "Not provided").replace(/\n/g, "<br/>")}</p>
    `;

    await sendEmail({
      to: process.env.GMAIL_USER!,
      subject: `New Contact: ${name} <${email}>`,
      html,
    });

    return NextResponse.json({ success: true, message: "Message sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
