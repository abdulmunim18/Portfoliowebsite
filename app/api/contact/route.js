import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { rateLimit } from '@/lib/utils'

// Initialize Resend
const resendApiKey = process.env.RESEND_API_KEY
const contactEmail = process.env.CONTACT_EMAIL || 'your@email.com'

const resend = resendApiKey ? new Resend(resendApiKey) : null

export async function POST(req) {
  try {
    const ip = req.headers.get('x-forwarded-for') || '127.0.0.1'
    
    // Rate limit contact form submissions: Max 3 submissions per IP per 5 minutes
    const isAllowed = rateLimit(ip, 3, 5 * 60 * 1000)
    if (!isAllowed) {
      return NextResponse.json(
        { error: 'Too many submissions. Please wait a few minutes before trying again.' },
        { status: 429 }
      )
    }

    const body = await req.json()
    const { name, email, subject, message } = body

    // Input validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address.' },
        { status: 400 }
      )
    }

    // Server-side honeypot check (extra precaution)
    if (body.honeypot) {
      return NextResponse.json({ success: true, message: 'Message filtered as spam' })
    }

    // If Resend API key is not configured, simulate success in dev
    if (!resend) {
      console.warn('Resend API key is missing. Simulating successful form delivery.')
      console.log('Form submission received:', { name, email, subject, message })
      return NextResponse.json({
        success: true,
        message: 'Dev mode: Message printed to terminal console.',
      })
    }

    // Send email via Resend
    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Resend free tier restriction
      to: contactEmail,
      subject: `[Portfolio Contact] ${subject}`,
      replyTo: email,
      html: `
        <h2>New Portfolio Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; white-space: pre-wrap;">
          ${message}
        </div>
      `,
    })

    if (data.error) {
      return NextResponse.json({ error: data.error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true, message: 'Message sent successfully.' })
  } catch (error) {
    console.error('Contact Form API Error:', error)
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    )
  }
}
