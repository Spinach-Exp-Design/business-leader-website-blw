import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

const requiredEnv = [
  "SMTP_PORT",
  "SMTP_HOST",
  "SMTP_USERNAME",
  "SMTP_PASSWORD",
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
      subject: "Business Leader Website Response",
      html: body.response,
    };

    // Send email
    await transporter.sendMail(emailBody);
    console.log("Email sent successfully");

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
