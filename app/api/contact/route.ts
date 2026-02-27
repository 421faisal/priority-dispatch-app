import { sendEmail } from "@/lib/email";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { name, phone, email, message } = await req.json();

    const html = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name || "Not provided"}</p>
      <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
      <p><strong>Email:</strong> ${email || "Not provided"}</p>
      <p><strong>Message:</strong></p>
      <p>${message || "Not provided"}</p>
    `;

    await sendEmail({
      to: process.env.GMAIL_USER!,
      subject: "New Contact Form Submission",
      html,
    });

    return new Response("✅ Message Sent Successfully", { status: 200 });
  } catch (error) {
    console.error("Email send error:", error);
    return new Response("❌ Failed to Send", { status: 500 });
  }
}
