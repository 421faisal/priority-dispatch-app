import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData()

        const jobId = formData.get('jobId') as string
        const fullName = formData.get('fullName') as string
        const email = formData.get('email') as string
        const phone = formData.get('phone') as string
        const location = formData.get('location') as string
        const workPreference = formData.get('workPreference') as string
        const experience = formData.get('experience') as string
        const linkedIn = formData.get('linkedIn') as string || 'Not provided'
        const coverLetter = formData.get('coverLetter') as string || 'Not provided'
        const availability = formData.get('availability') as string
        const resume = formData.get('resume') as File

        // Validation
        if (!jobId || !fullName || !email || !phone || !location || !workPreference || !experience || !availability || !resume) {
            return NextResponse.json(
                { error: 'All required fields must be filled' },
                { status: 400 }
            )
        }

        // Convert resume to base64 for email attachment
        const resumeBuffer = Buffer.from(await resume.arrayBuffer())
        const resumeBase64 = resumeBuffer.toString('base64')

        // Job titles mapping
        const jobTitles: Record<string, string> = {
            'freight-dispatcher': 'Freight Dispatcher',
            'sales-agent': 'Sales Agent / Business Development'
        }

        const jobTitle = jobTitles[jobId] || jobId

        // Create email transporter
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.gmail.com',
            port: parseInt(process.env.SMTP_PORT || '587'),
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        })

        // Email content
        const emailHtml = `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="utf-8">
                <style>
                    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                    .header { background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%); color: white; padding: 30px; border-radius: 8px 8px 0 0; }
                    .content { background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px; }
                    .info-row { margin: 15px 0; padding: 12px; background: white; border-left: 4px solid #3b82f6; border-radius: 4px; }
                    .label { font-weight: bold; color: #1e40af; margin-bottom: 5px; }
                    .value { color: #4b5563; }
                    .cover-letter { background: white; padding: 20px; border-radius: 8px; margin-top: 20px; border: 1px solid #e5e7eb; }
                    .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 2px solid #e5e7eb; color: #6b7280; font-size: 14px; }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1 style="margin: 0; font-size: 28px;">🎯 New Job Application Received</h1>
                        <p style="margin: 10px 0 0 0; opacity: 0.9;">Priority Dispatch LLC - Careers Portal</p>
                    </div>
                    
                    <div class="content">
                        <h2 style="color: #1e40af; margin-top: 0;">Position: ${jobTitle}</h2>
                        
                        <div class="info-row">
                            <div class="label">👤 Applicant Name</div>
                            <div class="value">${fullName}</div>
                        </div>
                        
                        <div class="info-row">
                            <div class="label">📧 Email Address</div>
                            <div class="value"><a href="mailto:${email}">${email}</a></div>
                        </div>
                        
                        <div class="info-row">
                            <div class="label">📱 Phone Number</div>
                            <div class="value"><a href="tel:${phone}">${phone}</a></div>
                        </div>
                        
                        <div class="info-row">
                            <div class="label">📍 Current Location</div>
                            <div class="value">${location}</div>
                        </div>
                        
                        <div class="info-row">
                            <div class="label">🏢 Work Preference</div>
                            <div class="value">${workPreference.charAt(0).toUpperCase() + workPreference.slice(1)}</div>
                        </div>
                        
                        <div class="info-row">
                            <div class="label">💼 Years of Experience</div>
                            <div class="value">${experience}</div>
                        </div>
                        
                        <div class="info-row">
                            <div class="label">📅 Availability to Start</div>
                            <div class="value">${availability}</div>
                        </div>
                        
                        <div class="info-row">
                            <div class="label">🔗 LinkedIn Profile</div>
                            <div class="value">${linkedIn !== 'Not provided' ? `<a href="${linkedIn}" target="_blank">${linkedIn}</a>` : 'Not provided'}</div>
                        </div>
                        
                        ${coverLetter !== 'Not provided' ? `
                        <div class="cover-letter">
                            <h3 style="color: #1e40af; margin-top: 0;">Cover Letter / Why Priority Dispatch?</h3>
                            <p style="white-space: pre-wrap; color: #4b5563;">${coverLetter}</p>
                        </div>
                        ` : ''}
                        
                        <div class="footer">
                            <p><strong>📎 Resume/CV attached to this email</strong></p>
                            <p style="margin-top: 15px;">This application was submitted via the Priority Dispatch LLC Careers Portal</p>
                            <p style="margin-top: 5px;"><a href="https://prioritydispatchllc.com/careers" style="color: #3b82f6;">Visit Careers Page</a></p>
                        </div>
                    </div>
                </div>
            </body>
            </html>
        `

        // Send email
        await transporter.sendMail({
            from: `"Priority Dispatch Careers" <${process.env.SMTP_USER}>`,
            to: process.env.CAREERS_EMAIL || process.env.SMTP_USER,
            subject: `🎯 New Application: ${jobTitle} - ${fullName}`,
            html: emailHtml,
            attachments: [
                {
                    filename: resume.name,
                    content: resumeBase64,
                    encoding: 'base64',
                },
            ],
        })

        // Send confirmation email to applicant
        const confirmationHtml = `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="utf-8">
                <style>
                    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                    .header { background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
                    .content { background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px; }
                    .button { display: inline-block; padding: 12px 30px; background: #3b82f6; color: white; text-decoration: none; border-radius: 6px; margin: 20px 0; }
                    .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 2px solid #e5e7eb; color: #6b7280; font-size: 14px; }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1 style="margin: 0; font-size: 28px;">✅ Application Received!</h1>
                    </div>
                    
                    <div class="content">
                        <p>Hi ${fullName},</p>
                        
                        <p>Thank you for applying for the <strong>${jobTitle}</strong> position at Priority Dispatch LLC!</p>
                        
                        <p>We've received your application and our hiring team will review it carefully. Here's what happens next:</p>
                        
                        <ul>
                            <li>Our team will review your application within 2-3 business days</li>
                            <li>If your qualifications match our needs, we'll reach out to schedule an interview</li>
                            <li>You'll hear back from us regardless of the outcome</li>
                        </ul>
                        
                        <p>In the meantime, feel free to learn more about us:</p>
                        
                        <div style="text-align: center;">
                            <a href="https://prioritydispatchllc.com" class="button">Visit Our Website</a>
                        </div>
                        
                        <p>If you have any questions, don't hesitate to contact us at <a href="mailto:prioritydispatch4u@gmail.com">prioritydispatch4u@gmail.com</a> or call us at <a href="tel:6893148347">(689) 314-8347</a>.</p>
                        
                        <p>Best regards,<br>
                        <strong>Priority Dispatch LLC Hiring Team</strong><br>
                        804 Brack St, Kissimmee, FL 34744</p>
                        
                        <div class="footer">
                            <p>Priority Dispatch LLC | Professional Freight Dispatching Services</p>
                            <p>Serving owner-operators across all 48 U.S. states</p>
                        </div>
                    </div>
                </div>
            </body>
            </html>
        `

        await transporter.sendMail({
            from: `"Priority Dispatch LLC" <${process.env.SMTP_USER}>`,
            to: email,
            subject: '✅ Application Received - Priority Dispatch LLC',
            html: confirmationHtml,
        })

        return NextResponse.json(
            { message: 'Application submitted successfully' },
            { status: 200 }
        )

    } catch (error) {
        console.error('Error processing application:', error)
        return NextResponse.json(
            { error: 'Failed to process application. Please try again.' },
            { status: 500 }
        )
    }
}
