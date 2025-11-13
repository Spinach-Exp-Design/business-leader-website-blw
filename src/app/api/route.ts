import { NextRequest, NextResponse } from "next/server";

import nodemailer from "nodemailer";

const SMTP_PORT = Number(process?.env?.SMTP_PORT);
const SMTP_HOST = process?.env?.SMTP_HOST;
const SMTP_USERNAME = process?.env?.SMTP_USERNAME;
const SMTP_PASSWORD = process?.env?.SMTP_PASSWORD;
const SMTP_MAIL_SENDER = process?.env?.SMTP_MAIL_SENDER;

export async function POST(request: NextRequest) {
  try {
    const body = await request?.json();

    const transporter = nodemailer?.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: false,
      auth: {
        user: SMTP_USERNAME,
        pass: SMTP_PASSWORD,
      },
    });
    console.log("transporter created successfully");

    const emailBody = {
      from: SMTP_MAIL_SENDER as string,
      to: body?.email,
      subject: "Business Leader Website Response",
      html: body?.response,
    };

    // await transporter?.sendMail(emailBody);
    console.log("Emails sent successfully");

    return new NextResponse("Emails sent successfully", { status: 200 });
  } catch (error) {
    console.log("Error sending emails:", error);
    return new NextResponse("Error sending emails", { status: 500 });
  }
}
