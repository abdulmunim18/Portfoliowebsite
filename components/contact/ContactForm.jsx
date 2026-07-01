'use client'

import { useState } from 'react'
import Button from '@/components/ui/Button'

/**
 * Contact form component with inputs for name, email, subject, and message.
 * Incorporates a honeypot field for basic spam protection.
 */
export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '', // Hidden spam protection field
  })
  const [status, setStatus] = useState('idle') // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Bot detection: If the honeypot field is filled, silently discard or reject
    if (formData.honeypot) {
      setStatus('success')
      return
    }

    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong. Please try again.')
      }

      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '', honeypot: '' })
    } catch (err) {
      setStatus('error')
      setErrorMessage(err.message || 'Failed to send message.')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-8 text-center space-y-4">
        <div className="w-12 h-12 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-white">Message Sent!</h3>
        <p className="text-sm text-neutral-400 max-w-sm mx-auto">
          Thank you for reaching out. I received your message and will get back to you as soon as possible.
        </p>
        <Button onClick={() => setStatus('idle')} variant="secondary" size="sm">
          Send another message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Honeypot field (hidden from humans) */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="honeypot">Leave this field blank</label>
        <input
          type="text"
          id="honeypot"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleChange}
          tabIndex="-1"
          autoComplete="off"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="name" className="text-xs font-mono text-neutral-400 uppercase">
            your_name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            disabled={status === 'loading'}
            className="w-full px-4 py-3 rounded-lg bg-white/[0.02] border border-white/10 text-white placeholder:text-neutral-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 transition-all disabled:opacity-50"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="email" className="text-xs font-mono text-neutral-400 uppercase">
            email_address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            disabled={status === 'loading'}
            className="w-full px-4 py-3 rounded-lg bg-white/[0.02] border border-white/10 text-white placeholder:text-neutral-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 transition-all disabled:opacity-50"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="subject" className="text-xs font-mono text-neutral-400 uppercase">
          subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          value={formData.subject}
          onChange={handleChange}
          placeholder="Collaboration inquiry..."
          disabled={status === 'loading'}
          className="w-full px-4 py-3 rounded-lg bg-white/[0.02] border border-white/10 text-white placeholder:text-neutral-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 transition-all disabled:opacity-50"
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="message" className="text-xs font-mono text-neutral-400 uppercase">
          message_body
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Hi, I wanted to chat about a potential project..."
          disabled={status === 'loading'}
          className="w-full px-4 py-3 rounded-lg bg-white/[0.02] border border-white/10 text-white placeholder:text-neutral-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 transition-all disabled:opacity-50 resize-y"
        />
      </div>

      {status === 'error' && (
        <div className="p-3 text-sm rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-400">
          {errorMessage}
        </div>
      )}

      <Button
        type="submit"
        disabled={status === 'loading'}
        className="w-full py-3.5"
      >
        {status === 'loading' ? (
          <>
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            sending_message...
          </>
        ) : (
          'send_message'
        )}
      </Button>
    </form>
  )
}
