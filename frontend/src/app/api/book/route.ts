import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { recruiter_name, company_name, email, meeting_type, booking_date, booking_time, purpose, notes } = body;

    if (!recruiter_name || !email || !booking_date || !booking_time) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Set up nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_EMAIL || 'poolatejesh2006@gmail.com',
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Send email notification to yourself
    const mailOptions = {
      from: process.env.SMTP_EMAIL || 'poolatejesh2006@gmail.com',
      to: 'ptejeshp8@gmail.com',
      subject: `New Interview Booking from ${recruiter_name} (${company_name || 'Independent'})`,
      text: `
You have a new interview request!

Details:
Name: ${recruiter_name}
Company: ${company_name || 'N/A'}
Email: ${email}
Meeting Type: ${meeting_type}
Date: ${booking_date}
Time: ${booking_time}
Purpose: ${purpose}
Notes: ${notes || 'None'}

Please reach out to them at ${email} to confirm the meeting.
      `,
    };

    if (process.env.SMTP_PASSWORD) {
      await transporter.sendMail(mailOptions);
    } else {
      console.warn("SMTP_PASSWORD not set in .env.local! Email notification skipped.");
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Booking request received successfully.' 
    });

  } catch (error) {
    console.error("Error booking interview:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
