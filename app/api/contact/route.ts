import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, phone, email, message } = await req.json();

    // Create email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail address
        pass: process.env.GMAIL_APP_PASSWORD, // Your App Password
      },
    });

    // Send email
    await transporter.sendMail({
      from: email || process.env.GMAIL_USER, // sender
      to: process.env.GMAIL_USER, // receiver
      subject: `New Contact Form Submission`,
      text: `
Name: ${name || "Not provided"}
Phone: ${phone || "Not provided"}
Email: ${email || "Not provided"}
Message: ${message || "Not provided"}
      `,
    });

    return new Response("✅ Message Sent Successfully", { status: 200 });
  } catch (error) {
    console.error("Email send error:", error);
    return new Response("❌ Failed to Send", { status: 500 });
  }
}
