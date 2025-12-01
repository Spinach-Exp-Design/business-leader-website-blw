import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

const requiredEnv = [
  "SMTP_PORT",
  "SMTP_HOST",
  "SMTP_USERNAME",
  "SMTP_PASSWORD",
  "ADMIN_EMAIL_ID",
];

for (const key of requiredEnv) {
  if (!process.env[key]) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
}

const SMTP_PORT = Number(process.env.SMTP_PORT);
const SMTP_HOST = process.env.SMTP_HOST!;
const SMTP_USERNAME = process.env.SMTP_USERNAME!;
const SMTP_PASSWORD = process.env.SMTP_PASSWORD!;
const ADMIN_EMAIL_ID = process.env.ADMIN_EMAIL_ID!;

const EmailSchema = z.object({
  email: z.string().email("Invalid email address"),
  response: z
    .string()
    .min(1, "Response cannot be empty")
    .max(10000, "Response too long"),
});

export async function POST(request: NextRequest) {
  try {
    // Parse and validate request body
    const json = await request.json();
    const body = EmailSchema.parse(json);

    // Create transporter securely
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: false,
      auth: {
        user: SMTP_USERNAME,
        pass: SMTP_PASSWORD,
      },
    });

    console.log("Transporter created successfully");

    // Construct email safely
    const emailBody = {
      from: SMTP_HOST,
      to: body.email,
      subject: "Thank You for Reaching Out – Looking Forward to Connecting",
      text: `Hello!!

Thank you so much for reaching out and sharing your details—I truly appreciate your trust. This website is a personal initiative to foster authentic connections and meaningful conversations.

Your information has been received securely and will only be used to ensure a thoughtful, relevant follow-up.

I look forward to connecting with you soon. Thank you for your patience and interest.

Yours truly
Rajesh Krishnamoorthy


This is an automated response to your request.`,
    };

    const adminEmailBody = {
      from: body.email,
      to: ADMIN_EMAIL_ID,
      subject: `New Response from ${body.email}`,
      text: `New response received from the Business Leader Website:

Email: ${body.email}

Response:
${body.response}

---
This is an automated notification.`,
    };

    // Send email to user
    await transporter.sendMail(emailBody);
    console.log("Confirmation email sent to user successfully");

    // Send email to admin
    await transporter.sendMail(adminEmailBody);
    console.log("Notification email sent to admin successfully");

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);

    if (error instanceof z.ZodError) {
      // Return validation errors cleanly
      return NextResponse.json(
        { message: "Invalid input", errors: error.issues },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
