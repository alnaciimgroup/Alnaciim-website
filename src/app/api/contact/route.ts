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
      from: 'Alnaciim Group <noreply@alnaciim.com>',
      to: ['alnaciim.co@gmail.com'],
      replyTo: email,
      subject: 'New Contact Form Submission',
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Phone: ${phone}
Message:
${message}
      `,
      // Optional: keep HTML for better readability in modern clients while matching the requested "Clean Output"
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #f1f5f9; border-radius: 12px;">
          <h2 style="color: #0066FF; margin-bottom: 20px; font-weight: 900;">New Contact Form Submission</h2>
          
          <div style="margin-bottom: 15px;">
            <p style="margin: 0; color: #94a3b8; font-size: 11px; text-transform: uppercase; font-weight: 800; letter-spacing: 0.1em;">Name</p>
            <p style="margin: 0; font-size: 16px; font-weight: 600; color: #0f172a;">${name}</p>
          </div>

          <div style="margin-bottom: 15px;">
            <p style="margin: 0; color: #94a3b8; font-size: 11px; text-transform: uppercase; font-weight: 800; letter-spacing: 0.1em;">Email</p>
            <p style="margin: 0; font-size: 16px; font-weight: 600; color: #0f172a;">${email}</p>
          </div>

          <div style="margin-bottom: 15px;">
            <p style="margin: 0; color: #94a3b8; font-size: 11px; text-transform: uppercase; font-weight: 800; letter-spacing: 0.1em;">Phone</p>
            <p style="margin: 0; font-size: 16px; font-weight: 600; color: #0f172a;">${phone}</p>
          </div>

          <div style="margin-top: 25px; padding-top: 20px; border-top: 1px solid #f1f5f9;">
            <p style="margin: 0; color: #94a3b8; font-size: 11px; text-transform: uppercase; font-weight: 800; letter-spacing: 0.1em;">Message</p>
            <p style="margin: 10px 0 0; font-size: 15px; color: #334155; line-height: 1.6; background-color: #f8fafc; padding: 15px; border-radius: 8px;">${message}</p>
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
