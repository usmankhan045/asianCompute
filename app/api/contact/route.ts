import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, company, phone, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    if (!process.env.EMAIL_HOST || !process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("Missing email environment variables:", {
        EMAIL_HOST: !!process.env.EMAIL_HOST,
        EMAIL_USER: !!process.env.EMAIL_USER,
        EMAIL_PASS: !!process.env.EMAIL_PASS,
      });
      return NextResponse.json(
        { error: "Email service is not configured. Please contact us directly at info@asiancompute.tech" },
        { status: 500 }
      );
    }

    const port = Number(process.env.EMAIL_PORT) || 465;
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port,
      secure: port === 465,
      auth: {
        type: "LOGIN",
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Verify SMTP connection
    await transporter.verify();

    // 1. Send notification email to info@asiancompute.tech
    await transporter.sendMail({
      from: `"AsianCompute Website" <${process.env.EMAIL_USER}>`,
      to: "info@asiancompute.tech",
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb; border-radius: 8px;">
          <h2 style="color: #111827; border-bottom: 2px solid #6366f1; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #374151; width: 140px;">Name:</td>
              <td style="padding: 10px 0; color: #111827;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #374151;">Email:</td>
              <td style="padding: 10px 0; color: #111827;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            ${company ? `<tr><td style="padding: 10px 0; font-weight: bold; color: #374151;">Company:</td><td style="padding: 10px 0; color: #111827;">${company}</td></tr>` : ""}
            ${phone ? `<tr><td style="padding: 10px 0; font-weight: bold; color: #374151;">Phone:</td><td style="padding: 10px 0; color: #111827;">${phone}</td></tr>` : ""}
          </table>
          <div style="margin-top: 20px; padding: 16px; background-color: #ffffff; border-radius: 6px; border: 1px solid #e5e7eb;">
            <h3 style="color: #374151; margin-top: 0;">Message:</h3>
            <p style="color: #111827; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="margin-top: 20px; font-size: 12px; color: #9ca3af;">
            This message was sent via the AsianCompute website contact form.
          </p>
        </div>
      `,
    });

    // 2. Send automated professional reply to the user
    await transporter.sendMail({
      from: `"AsianCompute" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thank You for Contacting AsianCompute - We've Received Your Message",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 0; background-color: #ffffff;">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #6366f1, #8b5cf6, #a855f7); padding: 30px 24px; border-radius: 8px 8px 0 0; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px;">AsianCompute</h1>
            <p style="color: #e0e7ff; margin: 8px 0 0; font-size: 14px;">AI Growth &amp; Automation Agency</p>
          </div>

          <!-- Body -->
          <div style="padding: 32px 24px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
            <p style="color: #111827; font-size: 16px; line-height: 1.6; margin-top: 0;">
              Dear ${name},
            </p>

            <p style="color: #374151; font-size: 15px; line-height: 1.7;">
              Thank you for reaching out to AsianCompute. We have successfully received your message and appreciate your interest in our AI-powered automation solutions.
            </p>

            <p style="color: #374151; font-size: 15px; line-height: 1.7;">
              Our team is reviewing your inquiry and will get back to you within <strong>24 hours</strong>. We take every message seriously and look forward to understanding how we can help drive growth for your business.
            </p>

            <!-- Summary Box -->
            <div style="margin: 24px 0; padding: 20px; background-color: #f5f3ff; border-radius: 8px; border-left: 4px solid #6366f1;">
              <h3 style="color: #4338ca; margin: 0 0 12px; font-size: 15px;">Here's a summary of what you submitted:</h3>
              <p style="color: #374151; margin: 4px 0; font-size: 14px;"><strong>Name:</strong> ${name}</p>
              <p style="color: #374151; margin: 4px 0; font-size: 14px;"><strong>Email:</strong> ${email}</p>
              ${company ? `<p style="color: #374151; margin: 4px 0; font-size: 14px;"><strong>Company:</strong> ${company}</p>` : ""}
              ${phone ? `<p style="color: #374151; margin: 4px 0; font-size: 14px;"><strong>Phone:</strong> ${phone}</p>` : ""}
            </div>

            <p style="color: #374151; font-size: 15px; line-height: 1.7;">
              In the meantime, feel free to explore what we offer:
            </p>

            <ul style="color: #374151; font-size: 15px; line-height: 2;">
              <li>AI-powered lead generation &amp; outreach automation</li>
              <li>Intelligent workflow design &amp; optimization</li>
              <li>CRM integration &amp; sales pipeline automation</li>
              <li>Custom AI chatbots &amp; customer support solutions</li>
            </ul>

            <p style="color: #374151; font-size: 15px; line-height: 1.7;">
              If your inquiry is urgent, you can reach us directly at:
            </p>
            <p style="color: #374151; font-size: 15px; line-height: 1.7;">
              <strong>Phone:</strong> +92 314 904 5550 | +92 318 468 6890<br />
              <strong>Email:</strong> <a href="mailto:info@asiancompute.tech" style="color: #6366f1;">info@asiancompute.tech</a>
            </p>

            <p style="color: #374151; font-size: 15px; line-height: 1.7;">
              We look forward to helping you scale your business with intelligent automation.
            </p>

            <p style="color: #374151; font-size: 15px; line-height: 1.7; margin-bottom: 0;">
              Warm regards,<br />
              <strong>The AsianCompute Team</strong>
            </p>
          </div>

          <!-- Footer -->
          <div style="text-align: center; padding: 20px 24px;">
            <p style="color: #9ca3af; font-size: 12px; margin: 0;">
              &copy; ${new Date().getFullYear()} AsianCompute. All rights reserved.
            </p>
            <p style="color: #9ca3af; font-size: 12px; margin: 4px 0 0;">
              This is an automated response. Please do not reply directly to this email.
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    const errMsg = error instanceof Error ? error.message : "Unknown error";
    console.error("Contact form error:", errMsg);
    return NextResponse.json(
      { error: `Failed to send message: ${errMsg}` },
      { status: 500 }
    );
  }
}
