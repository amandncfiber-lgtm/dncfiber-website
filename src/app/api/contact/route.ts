import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export const runtime = 'nodejs'

const TO_EMAIL = 'aman.dncfiber@gmail.com'

// Until a custom domain (e.g. forms@dncfiber.com) is verified on Resend,
// emails must be sent from Resend's shared "onboarding@resend.dev" address.
// See README / setup notes for how to switch to a branded sender later.
const FROM_EMAIL = 'Drop Network Connective <onboarding@resend.dev>'

interface ContactPayload {
  name?: string
  company?: string
  email?: string
  phone?: string
  service?: string
  message?: string
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error('RESEND_API_KEY is not set')
      return NextResponse.json(
        { success: false, error: 'Email service is not configured yet.' },
        { status: 500 }
      )
    }

    const body: ContactPayload = await req.json()
    const name = (body.name || '').trim()
    const company = (body.company || '').trim()
    const email = (body.email || '').trim()
    const phone = (body.phone || '').trim()
    const service = (body.service || '').trim()
    const message = (body.message || '').trim()

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Name, email and project details are required.' },
        { status: 400 }
      )
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid email address.' },
        { status: 400 }
      )
    }

    const resend = new Resend(apiKey)

    const rows = [
      { label: 'Name', value: name },
      { label: 'Company', value: company || '—' },
      { label: 'Email', value: email },
      { label: 'Phone', value: phone || '—' },
      { label: 'Service Required', value: service || '—' },
    ]

    const html = `
      <div style="font-family:Arial,Helvetica,sans-serif;max-width:560px;margin:0 auto;color:#1a1a1a;">
        <div style="background:#0066FF;padding:24px 28px;border-radius:12px 12px 0 0;">
          <p style="margin:0;color:#bfdcff;font-size:11px;letter-spacing:1px;text-transform:uppercase;">New Website Inquiry</p>
          <h1 style="margin:6px 0 0;color:#ffffff;font-size:20px;">Drop Network Connective</h1>
        </div>
        <div style="border:1px solid #e5e7eb;border-top:none;border-radius:0 0 12px 12px;padding:24px 28px;">
          <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">
            ${rows
              .map(
                (r) => `
              <tr>
                <td style="padding:8px 0;color:#6b7280;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;width:140px;vertical-align:top;">${escapeHtml(r.label)}</td>
                <td style="padding:8px 0;color:#111827;font-size:14px;vertical-align:top;">${escapeHtml(r.value)}</td>
              </tr>`
              )
              .join('')}
          </table>
          <p style="color:#6b7280;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;margin:0 0 6px;">Project Details</p>
          <p style="color:#111827;font-size:14px;line-height:1.6;white-space:pre-wrap;background:#f9fafb;border:1px solid #f3f4f6;border-radius:8px;padding:14px;">${escapeHtml(message)}</p>
          <p style="color:#9ca3af;font-size:12px;margin-top:24px;">Sent automatically from the contact form at dncfiber.com. Reply to this email to respond directly to ${escapeHtml(name)}.</p>
        </div>
      </div>
    `

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New Inquiry — ${name}${company ? ` (${company})` : ''}`,
      html,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { success: false, error: 'Could not send message. Please try again.' },
        { status: 502 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json(
      { success: false, error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
