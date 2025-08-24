import { NextRequest, NextResponse } from 'next/server'
import * as nodemailer from 'nodemailer'

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

    // Create transporter for Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    // Email content
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: 'csiu-l-request@list.iu.edu',
      subject: 'Subscribe',
      text: `Please subscribe ${email} to the CSIU mailing list.`,
      html: `
        <p>Please subscribe the following email address to the CSIU mailing list:</p>
        <p><strong>${email}</strong></p>
        <p>This request was submitted through the Advocates for Science @ IU website.</p>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

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
