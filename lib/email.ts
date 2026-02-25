import nodemailer from "nodemailer";

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
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.GMAIL_USER, // e.g., prioritydispatch4u@gmail.com
            pass: process.env.GMAIL_APP_PASSWORD, // 16-character App Password
        },
    });

    return await transporter.sendMail({
        from: process.env.GMAIL_USER,
        to: data.to,
        subject: data.subject,
        html: data.html,
        attachments: data.attachments,
    });
};
