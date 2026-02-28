import { createTransport } from "nodemailer";

interface EmailPayload {
    to: string;
    subject: string;
    html: string;
    attachments?: {
        filename: string;
        content: Buffer;
        contentType: string;
    }[];
}

export const sendEmail = async (data: EmailPayload) => {
    const user = process.env.GMAIL_USER;
    const pass = process.env.GMAIL_APP_PASSWORD;

    if (!user || !pass) {
        throw new Error(
            "Email environment variables are not set. Please configure GMAIL_USER and GMAIL_APP_PASSWORD.",
        );
    }

    const transporter = createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user,
            pass,
        },
    });

    const info = await transporter.sendMail({
        from: `"Priority Dispatch LLC" <${user}>`,
        to: data.to,
        subject: data.subject,
        html: data.html,
        attachments: data.attachments,
    });

    console.log("Email sent:", info.messageId);
    return info;
};
