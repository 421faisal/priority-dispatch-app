import { NextRequest, NextResponse } from 'next/server'
import { sendEmail } from '@/lib/email'

export const runtime = 'nodejs'

const jobTitles: Record<string, string> = {
    'freight-dispatcher': 'Freight Dispatcher',
    'sales-agent':        'Sales Agent / Business Development',
}

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData()

        const jobId          = formData.get('jobId')          as string
        const fullName       = formData.get('fullName')       as string
        const email          = formData.get('email')          as string
        const phone          = formData.get('phone')          as string
        const location       = formData.get('location')       as string
        const workPreference = formData.get('workPreference') as string
        const experience     = formData.get('experience')     as string
        const availability   = formData.get('availability')   as string
        const linkedIn       = (formData.get('linkedIn')       as string) || ''
        const coverLetter    = (formData.get('coverLetter')    as string) || ''
        const resumeFile     = formData.get('resume')         as File | null

        // ── Validation ──────────────────────────────────────────────────
        if (!jobId || !fullName || !email || !phone || !location || !workPreference || !experience || !availability) {
            return NextResponse.json({ error: 'All required fields must be filled.' }, { status: 400 })
        }

        const jobTitle = jobTitles[jobId] || jobId
        const toEmail  = process.env.GMAIL_USER!

        // ── Build resume attachment ──────────────────────────────────────
        const attachments: { filename: string; content: Buffer; contentType: string }[] = []

        if (resumeFile && resumeFile.size > 0) {
            const arrayBuffer = await resumeFile.arrayBuffer()
            attachments.push({
                filename:    resumeFile.name || 'resume.pdf',
                content:     Buffer.from(arrayBuffer),
                contentType: resumeFile.type || 'application/octet-stream',
            })
        }

        // ── Email to Faisal ─────────────────────────────────────────────
        const notificationHtml = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8">
<style>
  body{font-family:Arial,sans-serif;line-height:1.6;color:#333;margin:0;padding:0}
  .wrap{max-width:620px;margin:0 auto;padding:20px}
  .hdr{background:linear-gradient(135deg,#1e40af,#3b82f6);color:#fff;padding:28px 30px;border-radius:8px 8px 0 0}
  .hdr h1{margin:0;font-size:24px}
  .body{background:#f9fafb;padding:28px 30px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 8px 8px}
  .row{margin:12px 0;padding:12px 14px;background:#fff;border-left:4px solid #3b82f6;border-radius:4px}
  .lbl{font-weight:bold;color:#1e40af;font-size:12px;margin-bottom:3px;text-transform:uppercase}
  .val{color:#374151}
  .cl{background:#fff;padding:16px;border-radius:6px;margin-top:16px;border:1px solid #e5e7eb}
  .ftr{text-align:center;margin-top:24px;padding-top:16px;border-top:1px solid #e5e7eb;color:#6b7280;font-size:13px}
</style>
</head>
<body>
<div class="wrap">
  <div class="hdr">
    <h1>🎯 New Job Application Received</h1>
    <p style="margin:6px 0 0;opacity:.9;font-size:14px">Priority Dispatch LLC — Careers Portal</p>
  </div>
  <div class="body">
    <h2 style="color:#1e40af;margin-top:0">Position: ${jobTitle}</h2>

    <div class="row"><div class="lbl">👤 Applicant Name</div><div class="val">${fullName}</div></div>
    <div class="row"><div class="lbl">📧 Email</div><div class="val"><a href="mailto:${email}">${email}</a></div></div>
    <div class="row"><div class="lbl">📱 Phone</div><div class="val"><a href="tel:${phone}">${phone}</a></div></div>
    <div class="row"><div class="lbl">📍 Location</div><div class="val">${location}</div></div>
    <div class="row"><div class="lbl">🏢 Work Preference</div><div class="val">${workPreference.charAt(0).toUpperCase() + workPreference.slice(1)}</div></div>
    <div class="row"><div class="lbl">💼 Experience</div><div class="val">${experience}</div></div>
    <div class="row"><div class="lbl">📅 Available to Start</div><div class="val">${availability}</div></div>
    ${linkedIn ? `<div class="row"><div class="lbl">🔗 LinkedIn</div><div class="val"><a href="${linkedIn}">${linkedIn}</a></div></div>` : ''}

    ${coverLetter ? `
    <div class="cl">
      <h3 style="color:#1e40af;margin-top:0;font-size:15px">Cover Letter</h3>
      <p style="white-space:pre-wrap;color:#4b5563;margin:0">${coverLetter}</p>
    </div>` : ''}

    <div class="ftr">
      <p><strong>📎 Resume attached</strong></p>
      <p>Submitted via <a href="https://prioritydispatchllc.com/careers" style="color:#3b82f6">prioritydispatchllc.com/careers</a></p>
    </div>
  </div>
</div>
</body>
</html>`

        await sendEmail({
            to:          toEmail,
            subject:     `🎯 New Application: ${jobTitle} — ${fullName}`,
            html:        notificationHtml,
            attachments: attachments,
        })

        // ── Confirmation to applicant ────────────────────────────────────
        const confirmationHtml = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8">
<style>
  body{font-family:Arial,sans-serif;line-height:1.6;color:#333;margin:0;padding:0}
  .wrap{max-width:620px;margin:0 auto;padding:20px}
  .hdr{background:linear-gradient(135deg,#1e40af,#3b82f6);color:#fff;padding:28px 30px;text-align:center;border-radius:8px 8px 0 0}
  .body{background:#f9fafb;padding:28px 30px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 8px 8px}
  .btn{display:inline-block;padding:12px 28px;background:#3b82f6;color:#fff;text-decoration:none;border-radius:6px;font-weight:bold;margin:16px 0}
  .ftr{text-align:center;margin-top:24px;padding-top:16px;border-top:1px solid #e5e7eb;color:#6b7280;font-size:13px}
</style>
</head>
<body>
<div class="wrap">
  <div class="hdr">
    <h1 style="margin:0;font-size:26px">✅ Application Received!</h1>
  </div>
  <div class="body">
    <p>Hi ${fullName},</p>
    <p>Thank you for applying for the <strong>${jobTitle}</strong> position at <strong>Priority Dispatch LLC</strong>!</p>
    <p>Our hiring team will review your application within <strong>2–3 business days</strong>. Here's what to expect:</p>
    <ul>
      <li>We'll carefully review your qualifications</li>
      <li>If there's a strong match, we'll contact you to schedule an interview</li>
      <li>You'll hear back from us regardless of the outcome</li>
    </ul>
    <div style="text-align:center">
      <a href="https://prioritydispatchllc.com" class="btn">Visit Our Website</a>
    </div>
    <p>Questions? Email us at <a href="mailto:prioritydispatch4u@gmail.com">prioritydispatch4u@gmail.com</a> or call <a href="tel:6893148347">(689) 314-8347</a>.</p>
    <p>Best regards,<br><strong>Priority Dispatch LLC Hiring Team</strong><br>804 Brack St, Kissimmee, FL 34744</p>
    <div class="ftr">
      <p>Priority Dispatch LLC | Freight Dispatching Services | All 48 U.S. States</p>
    </div>
  </div>
</div>
</body>
</html>`

        await sendEmail({
            to:      email,
            subject: '✅ Application Received — Priority Dispatch LLC',
            html:    confirmationHtml,
        })

        return NextResponse.json({ message: 'Application submitted successfully.' }, { status: 200 })

    } catch (error) {
        console.error('Careers application error:', error)
        return NextResponse.json(
            { error: 'Failed to process application. Please try again.' },
            { status: 500 }
        )
    }
}
