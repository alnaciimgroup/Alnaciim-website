import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Lazy initialization to prevent crashes during build when env vars are not present
const getResend = () => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  return new Resend(apiKey);
};

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    // Strict validation: all fields are required
    if (!name || !email || !phone || !message) {
      return NextResponse.json({ error: 'All fields are required. Please check your inputs and try again.' }, { status: 400 });
    }

    const resend = getResend();
    if (!resend) {
      console.warn('RESEND_API_KEY is not configured in the environment.');
      return NextResponse.json({ error: 'Email service configuration missing. Please report this to the site administrator.' }, { status: 500 });
    }

    const { data, error } = await resend.emails.send({
      from: 'ALNACIIM Group <noreply@alnaciim.com>',
      to: ['alnaciim.co@gmail.com'],
      replyTo: email,
      subject: 'New Inquiry from Website – ALNACIIM',
      text: `
Hello,

You have received a new message from your website contact form.

----------------------------------

Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}

----------------------------------

This message was sent from alnaciim.com
      `,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 40px auto; background-color: #ffffff; border: 1px solid #f0f0f0; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
          <div style="background-color: #0066FF; padding: 30px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 800; letter-spacing: -0.02em;">New Inquiry</h1>
            <p style="color: rgba(255,255,255,0.8); margin: 8px 0 0; font-size: 14px;">ALNACIIM Group Official Portal</p>
          </div>
          
          <div style="padding: 40px;">
            <p style="color: #64748b; font-size: 16px; margin-top: 0;">Hello,</p>
            <p style="color: #334155; font-size: 16px; line-height: 1.6;">You have received a new message from your website contact form.</p>
            
            <div style="margin: 30px 0; padding: 25px; background-color: #f8fafc; border-radius: 12px; border: 1px solid #e2e8f0;">
              <div style="margin-bottom: 20px;">
                <label style="display: block; color: #94a3b8; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 4px;">Name</label>
                <div style="color: #0f172a; font-size: 16px; font-weight: 600;">${name}</div>
              </div>
              
              <div style="margin-bottom: 20px;">
                <label style="display: block; color: #94a3b8; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 4px;">Email</label>
                <div style="color: #0f172a; font-size: 16px; font-weight: 600;">${email}</div>
              </div>
              
              <div>
                <label style="display: block; color: #94a3b8; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 4px;">Phone</label>
                <div style="color: #0f172a; font-size: 16px; font-weight: 600;">${phone}</div>
              </div>
            </div>

            <div style="margin-top: 30px;">
              <label style="display: block; color: #94a3b8; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 12px;">Message</label>
              <div style="color: #334155; font-size: 15px; line-height: 1.7; padding: 20px; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; white-space: pre-wrap;">${message}</div>
            </div>
          </div>

          <div style="padding: 20px; background-color: #f1f5f9; text-align: center; border-top: 1px solid #e2e8f0;">
            <p style="margin: 0; color: #64748b; font-size: 12px;">This message was sent from <a href="https://alnaciim.com" style="color: #0066FF; text-decoration: none; font-weight: 600;">alnaciim.com</a></p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend Error:', error);
      return NextResponse.json({ error: 'Failed to send message. Please check the email format.' }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error('API Error:', err);
    return NextResponse.json({ error: 'Internal server error. Please try again later.' }, { status: 500 });
  }
}
