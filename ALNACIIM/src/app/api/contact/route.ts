import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    // In production, you'd want to validate these fields properly
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: 'ALNM Group Contact <onboarding@resend.dev>', // You'll need to verify your domain in Resend
      to: ['mohaarkoz@gmail.com'],
      subject: `New Contact Form Submission: ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
          <div style="background-color: #0066FF; color: white; padding: 24px; text-align: center;">
            <h1 style="margin: 0; font-size: 20px;">New Inquiry</h1>
            <p style="margin: 4px 0 0; opacity: 0.8;">ALNM Group Digital Portal</p>
          </div>
          <div style="padding: 24px; background-color: white;">
            <div style="margin-bottom: 24px;">
              <h2 style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #94a3b8; margin-bottom: 8px;">Customer Details</h2>
              <p style="margin: 0; font-weight: 700; color: #0f172a;">${name}</p>
              <p style="margin: 4px 0 0; color: #64748b;">${email}</p>
              <p style="margin: 4px 0 0; color: #64748b;">${phone}</p>
            </div>
            <div>
              <h2 style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #94a3b8; margin-bottom: 8px;">Message / Request</h2>
              <p style="margin: 0; color: #334155; line-height: 1.6; background-color: #f8fafc; padding: 16px; border-radius: 8px;">
                ${message}
              </p>
            </div>
          </div>
          <div style="padding: 16px; background-color: #f1f5f9; text-align: center; font-size: 12px; color: #64748b;">
            This message was sent from the ALNM Group website contact form.
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend Error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error('API Error:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
