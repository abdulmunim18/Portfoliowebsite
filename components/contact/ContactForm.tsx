'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Send } from 'lucide-react'

const schema = z.object({
  name: z.string().trim().min(2, 'Please enter your name.'),
  email: z.email('Please enter a valid email.'),
  reason: z.string().min(1, 'Choose a contact reason.'),
  subject: z.string().trim().min(3, 'Please add a short subject.'),
  message: z.string().trim().min(20, 'Please share at least 20 characters.'),
  honeypot: z.string().optional(),
})

type FormValues = z.infer<typeof schema>

export default function ContactForm({ defaultReason = '' }: { defaultReason?: string }) {
  const [serverMessage, setServerMessage] = useState('')
  const [fallbackEmail, setFallbackEmail] = useState('')
  const { register, handleSubmit, reset, setError, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm<FormValues>({ defaultValues: { reason: defaultReason } })

  const submit = async (values: FormValues) => {
    setServerMessage('')
    setFallbackEmail('')
    const parsed = schema.safeParse(values)
    if (!parsed.success) {
      parsed.error.issues.forEach((issue) => setError(issue.path[0] as keyof FormValues, { message: issue.message }))
      return
    }
    const response = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(parsed.data) })
    const result = await response.json()
    if (!response.ok) {
      if (result.fallbackEmail) setFallbackEmail(result.fallbackEmail)
      throw new Error(result.error || 'Unable to send your message.')
    }
    setServerMessage(result.message || 'Message sent successfully.')
    reset({ name: '', email: '', reason: defaultReason, subject: '', message: '', honeypot: '' })
  }

  return <form className="contact-form" onSubmit={handleSubmit((values) => submit(values).catch((error) => setServerMessage(error.message)))} noValidate>
    <div className="field-row"><div className="field"><label htmlFor="name">Name</label><input id="name" autoComplete="name" {...register('name')} aria-invalid={Boolean(errors.name)} />{errors.name ? <span className="form-note">{errors.name.message}</span> : null}</div><div className="field"><label htmlFor="email">Email</label><input id="email" type="email" autoComplete="email" {...register('email')} aria-invalid={Boolean(errors.email)} />{errors.email ? <span className="form-note">{errors.email.message}</span> : null}</div></div>
    <div className="field"><label htmlFor="reason">I am contacting you about</label><select id="reason" {...register('reason')} aria-invalid={Boolean(errors.reason)}><option value="">Select a reason</option><option>Job Opportunity</option><option>Internship</option><option>Freelance Project</option><option>Software Development</option><option>AI Automation</option><option>Collaboration</option><option>Other</option></select>{errors.reason ? <span className="form-note">{errors.reason.message}</span> : null}</div>
    <div className="field"><label htmlFor="subject">Subject</label><input id="subject" {...register('subject')} aria-invalid={Boolean(errors.subject)} />{errors.subject ? <span className="form-note">{errors.subject.message}</span> : null}</div>
    <div className="field"><label htmlFor="message">Message</label><textarea id="message" {...register('message')} aria-invalid={Boolean(errors.message)} />{errors.message ? <span className="form-note">{errors.message.message}</span> : null}</div>
    <div style={{ position: 'absolute', left: '-9999px' }} aria-hidden="true"><label htmlFor="company">Company website</label><input id="company" tabIndex={-1} autoComplete="off" {...register('honeypot')} /></div>
    <button className="button button-primary" type="submit" disabled={isSubmitting}>{isSubmitting ? 'Sending...' : <>Send message <Send size={16} /></>}</button>
    {serverMessage ? <p className="form-note" role="status">{serverMessage}{fallbackEmail ? <> <a className="text-link" href={`mailto:${fallbackEmail}`}>Email {fallbackEmail}</a></> : null}</p> : null}
  </form>
}
