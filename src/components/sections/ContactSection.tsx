'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, MessageSquare, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react'
import { COMPANY } from '@/lib/utils'
import { FadeIn } from '@/components/ui'

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Something went wrong. Please try again.')
      }
      setSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="section-pad bg-white">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left */}
          <FadeIn direction="left">
            <div className="eyebrow">Get In Touch</div>
            <h2 className="heading-lg text-gray-900 mb-5">
              Start your next<br />
              <span className="gradient-text">fiber project.</span>
            </h2>
            <p className="body-lg mb-10">
              Whether you need a complete engineering package, offshore design capacity, GIS support or partnership discussion — our team is ready to engage.
            </p>

            <div className="flex flex-col gap-5 mb-10">
              {[
                { icon: Phone, label: 'Phone', val: COMPANY.phone, href: `tel:${COMPANY.phone}` },
                { icon: Mail, label: 'Email', val: COMPANY.email, href: `mailto:${COMPANY.email}` },
                { icon: MapPin, label: 'Location', val: COMPANY.location, href: '#' },
                { icon: MessageSquare, label: 'WhatsApp', val: 'Chat with our team', href: COMPANY.whatsapp },
              ].map(({ icon: Icon, label, val, href }) => (
                <a key={label} href={href} className="flex items-center gap-4 p-4 rounded-2xl border border-gray-100 hover:border-blue-100 hover:bg-blue-50/30 transition-all group">
                  <div className="w-10 h-10 bg-blue-50 group-hover:bg-blue-600 rounded-xl flex items-center justify-center transition-colors flex-shrink-0">
                    <Icon size={18} className="text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="font-mono text-xs text-gray-400 uppercase tracking-widest">{label}</div>
                    <div className="font-medium text-gray-900 text-sm">{val}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Quick action buttons */}
            <div className="flex flex-wrap gap-3">
              <a href={`tel:${COMPANY.phone}`} className="btn-primary">
                <Phone size={15} /> Call Now
              </a>
              <a href={COMPANY.whatsapp} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold text-sm px-6 py-3 rounded-full transition-colors shadow-lg shadow-green-500/20">
                <MessageSquare size={15} /> WhatsApp
              </a>
            </div>
          </FadeIn>

          {/* Form */}
          <FadeIn direction="right">
            <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-12">
                  <CheckCircle size={52} className="text-green-500 mb-4" />
                  <h3 className="font-display font-600 text-xl text-gray-900 mb-2">Message Sent</h3>
                  <p className="text-gray-500 text-sm">Thank you for reaching out. Our engineering team will respond within one business day.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <h3 className="font-display font-600 text-xl text-gray-900 mb-2">Send an Inquiry</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="font-mono text-xs text-gray-500 uppercase tracking-widest">Name *</label>
                      <input name="name" required value={form.name} onChange={handleChange} placeholder="Your name"
                        className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="font-mono text-xs text-gray-500 uppercase tracking-widest">Company</label>
                      <input name="company" value={form.company} onChange={handleChange} placeholder="Organization"
                        className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="font-mono text-xs text-gray-500 uppercase tracking-widest">Email *</label>
                      <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="you@company.com"
                        className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="font-mono text-xs text-gray-500 uppercase tracking-widest">Phone</label>
                      <input name="phone" value={form.phone} onChange={handleChange} placeholder="+1 or +91..."
                        className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-xs text-gray-500 uppercase tracking-widest">Service Required</label>
                    <select name="service" value={form.service} onChange={handleChange}
                      className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition">
                      <option value="">Select a service</option>
                      <option>High Level Design (HLD)</option>
                      <option>Low Level Design (LLD)</option>
                      <option>Construction Drawings</option>
                      <option>GIS Mapping</option>
                      <option>Fiber Network Planning</option>
                      <option>Splice Sheet Preparation</option>
                      <option>Permitting Support</option>
                      <option>OSP Design Support</option>
                      <option>Partnership / Resource Augmentation</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-xs text-gray-500 uppercase tracking-widest">Project Details *</label>
                    <textarea name="message" required value={form.message} onChange={handleChange} rows={4}
                      placeholder="Describe your project — scope, location, timeline and any specific engineering standards..."
                      className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition resize-none" />
                  </div>
                  {error && (
                    <div className="flex items-start gap-2 bg-red-50 border border-red-100 text-red-600 text-sm rounded-xl px-4 py-3">
                      <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
                      <span>{error}</span>
                    </div>
                  )}
                  <button type="submit" disabled={loading}
                    className="btn-primary justify-center mt-2 disabled:opacity-70 disabled:cursor-not-allowed">
                    {loading ? 'Sending…' : <><span>Send Project Request</span> <ArrowRight size={16} /></>}
                  </button>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
