import { NextRequest, NextResponse } from 'next/server'
import FormData from "form-data";
import Mailgun from "mailgun.js";

async function sendSimpleMessage(email: string) {
  const mailgun = new Mailgun(FormData);
  const mg = mailgun.client({
    username: "api",
    key: process.env.MAILGUN_SENDING_API_KEY || process.env.API_KEY || "API_KEY",
    // When you have an EU-domain, you must specify the endpoint:
    // url: "https://api.eu.mailgun.net"
  });

  // Use environment variable for domain or fallback to sandbox
  const domain = process.env.MAILGUN_DOMAIN || "sandboxb59394efc53c4f0b988b236318247c26.mailgun.org";
  const fromEmail = process.env.MAILGUN_FROM || `postmaster@${domain}`;

  try {
    const data = await mg.messages.create(domain, {
      from: fromEmail,
      to: ["advocatesforscience.in@gmail.com"],
      subject: "Newsletter Subscription Request - Advocates for Science @ IU",
      text: `Please subscribe ${email} to the CSIU mailing list. This request was submitted through the Advocates for Science @ IU website.`,
    });

    console.log(data); // logs response data
    return data;
  } catch (error) {
    console.log(error); //logs any error
    throw error;
  }
}

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { message: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Send email using the working Mailgun function
    await sendSimpleMessage(email);

    return NextResponse.json(
      { message: 'Subscription request sent successfully' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Newsletter subscription error:', error)

    return NextResponse.json(
      { message: 'Failed to send subscription request. Please try again later.' },
      { status: 500 }
    )
  }
}
