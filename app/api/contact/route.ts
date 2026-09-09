import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'
import { rateLimit } from '@/lib/utils'

const contactSchema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.email().max(160),
  reason: z.string().trim().min(1).max(80),
  subject: z.string().trim().min(3).max(160),
  message: z.string().trim().min(20).max(5000),
  honeypot: z.string().optional(),
})

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null
const contactEmail = process.env.CONTACT_EMAIL || 'chmunim688@gmail.com'

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[character] || character)
}

export async function POST(request: Request) {
  try {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'local'
    if (!rateLimit(ip, 3, 5 * 60 * 1000)) return NextResponse.json({ error: 'Too many submissions. Please try again in a few minutes.' }, { status: 429 })
    const parsed = contactSchema.safeParse(await request.json())
    if (!parsed.success) return NextResponse.json({ error: 'Please check the form fields and try again.' }, { status: 400 })
    if (parsed.data.honeypot) return NextResponse.json({ success: true, message: 'Message received.' })
    if (!resend) {
      console.error('Contact form email delivery is not configured: RESEND_API_KEY is missing.')
      return NextResponse.json({ error: 'Email delivery is temporarily unavailable. Please use the direct email link.', fallbackEmail: contactEmail }, { status: 503 })
    }
    const { name, email, reason, subject, message } = parsed.data
    const result = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'Portfolio Contact <onboarding@resend.dev>',
      to: contactEmail,
      subject: `[Portfolio / ${reason}] ${subject}`,
      replyTo: email,
      html: `<h2>New portfolio inquiry</h2><p><strong>Name:</strong> ${escapeHtml(name)}</p><p><strong>Email:</strong> ${escapeHtml(email)}</p><p><strong>Reason:</strong> ${escapeHtml(reason)}</p><p><strong>Subject:</strong> ${escapeHtml(subject)}</p><p><strong>Message:</strong></p><div style="white-space:pre-wrap">${escapeHtml(message)}</div>`,
    })
    if (result.error) return NextResponse.json({ error: 'Email delivery failed. Please use direct email instead.' }, { status: 502 })
    return NextResponse.json({ success: true, message: 'Message sent successfully.' })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Unable to process the message right now.' }, { status: 500 })
  }
}
