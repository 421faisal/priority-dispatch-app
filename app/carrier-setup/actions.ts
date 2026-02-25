"use server"

import { revalidatePath } from "next/cache"
import { sendEmail } from "@/lib/email"

export async function submitCarrierSignup(formData: FormData) {
    // In a real application, you would connect to an SMTP service here (e.g., Resend, SendGrid)
    // or upload the files to an S3 bucket or Google Cloud Storage.
    // Currently, it mocks a successful submission.

    const firstName = formData.get("firstName")
    const lastName = formData.get("lastName")
    const email = formData.get("email")
    const phone = formData.get("phone")
    const companyName = formData.get("companyName")
    const mcNumber = formData.get("mcNumber")
    const dotNumber = formData.get("dotNumber")
    const equipmentType = formData.get("equipmentType")

    // Files
    const mcCertificate = formData.get("mcCertificate") as File | null
    const w9 = formData.get("w9") as File | null
    const coi = formData.get("coi") as File | null
    const noticeOfAssignment = formData.get("noticeOfAssignment") as File | null
    const cdl = formData.get("cdl") as File | null

    const attachments: { filename: string; content: Buffer; contentType: string }[] = [];

    async function addAttachment(file: File | null, customName: string) {
        if (file && file.size > 0) {
            const arrayBuffer = await file.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);
            attachments.push({
                filename: `${customName}-${file.name}`,
                content: buffer,
                contentType: file.type,
            });
        }
    }

    await addAttachment(mcCertificate, "MC_Certificate");
    await addAttachment(w9, "W9");
    await addAttachment(coi, "COI");
    await addAttachment(noticeOfAssignment, "NOA");
    await addAttachment(cdl, "CDL");

    const htmlContent = `
    <h2>New Carrier Setup Submission</h2>
    <table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse;">
      <tr>
        <td><strong>Name</strong></td>
        <td>${firstName} ${lastName}</td>
      </tr>
      <tr>
        <td><strong>Email</strong></td>
        <td>${email}</td>
      </tr>
      <tr>
        <td><strong>Phone</strong></td>
        <td>${phone}</td>
      </tr>
      <tr>
        <td><strong>Company Name</strong></td>
        <td>${companyName}</td>
      </tr>
      <tr>
        <td><strong>MC Number</strong></td>
        <td>${mcNumber}</td>
      </tr>
      <tr>
        <td><strong>DOT Number</strong></td>
        <td>${dotNumber}</td>
      </tr>
      <tr>
        <td><strong>Equipment Type</strong></td>
        <td>${equipmentType}</td>
      </tr>
    </table>
    <br/>
    <p>Please find the required documents attached.</p>
  `;

    try {
        if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD) {
            await sendEmail({
                to: process.env.GMAIL_USER, // Set to receive at the same address or any other preferred
                subject: `Carrier Setup Packet - ${companyName} (${equipmentType})`,
                html: htmlContent,
                attachments: attachments,
            });
            console.log("Email sent successfully!");
        } else {
            console.warn("Email credentials not found in env variables. Bypassing email send.");
        }
    } catch (err) {
        console.error("Error sending email:", err);
        return { success: false, message: "Failed to send the setup packet. Please try again or contact us directly." };
    }

    revalidatePath('/carrier-setup')

    return {
        success: true,
        message: "Thank you! Your setup packet has been securely submitted. A member of our onboarding team will contact you shortly."
    }
}
