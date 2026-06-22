import Link from 'next/link'
import { Phone, Mail, MapPin, Linkedin, Facebook, Instagram, ArrowRight } from 'lucide-react'
import { COMPANY } from '@/lib/utils'

const FOOTER_SERVICES = [
  { label: 'High Level Design', href: '/services#hld' },
  { label: 'Low Level Design', href: '/services#lld' },
  { label: 'Construction Drawings', href: '/services#construction' },
  { label: 'GIS Mapping', href: '/services#gis' },
  { label: 'Fiber Network Planning', href: '/services#planning' },
  { label: 'Permitting Support', href: '/services#permitting' },
  { label: 'Splice Sheet Preparation', href: '/services#splice' },
  { label: 'OSP Design Support', href: '/services#osp' },
]

const FOOTER_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'FTTX Solutions', href: '/fttx-solutions' },
  { label: 'Partnership', href: '/partnership' },
 // { label: 'Portfolio', href: '/portfolio' },
  { label: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      {/* CTA Banner */}
      <div className="border-b border-white/8">
        <div className="container-wide py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <p className="font-mono text-xs text-blue-400 tracking-widest uppercase mb-3">Ready to Start?</p>
              <h2 className="font-display font-700 text-3xl lg:text-4xl text-white">
                Let&apos;s build the next fiber network together.
              </h2>
            </div>
            <div className="flex flex-wrap gap-4 flex-shrink-0">
              <Link href="/contact" className="btn-primary whitespace-nowrap">
                Request Proposal <ArrowRight size={16} />
              </Link>
              <Link href="/partnership" className="btn-outline-white whitespace-nowrap">
                Become a Partner
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 32 32" fill="none" className="w-5 h-5">
                  <circle cx="6" cy="26" r="2.5" fill="white" />
                  <circle cx="26" cy="6" r="2.5" fill="white" />
                  <circle cx="16" cy="16" r="1.8" fill="white" opacity="0.7" />
                  <path d="M6 26 Q6 16 16 16 Q26 16 26 6" stroke="white" strokeWidth="1.8" strokeLinecap="round" fill="none" />
                </svg>
              </div>
              <div className="leading-tight">
                <div className="font-display font-700 text-sm tracking-tight">DROP NETWORK</div>
                <div className="font-display font-600 text-xs text-blue-400 tracking-wider">CONNECTIVE</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              End-to-end FTTX design and engineering solutions for telecom operators, ISPs, contractors and engineering firms across the USA and India.
            </p>
            <div className="flex flex-col gap-3 text-sm text-gray-400">
              <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <Phone size={14} className="text-blue-500" /> {COMPANY.phone}
              </a>
              <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <Mail size={14} className="text-blue-500" /> {COMPANY.email}
              </a>
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-blue-500 flex-shrink-0" /> {COMPANY.location}
              </div>
            </div>
            {/* Socials */}
            <div className="flex gap-3 mt-6">
              {[
                { icon: Linkedin, href: COMPANY.linkedin, label: 'LinkedIn' },
                //{ icon: Facebook, href: '#', label: 'Facebook' },
                //{ icon: Instagram, href: '#', label: 'Instagram' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 bg-white/5 hover:bg-blue-600 border border-white/10 hover:border-blue-600 rounded-lg flex items-center justify-center transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-600 text-sm text-white tracking-wide uppercase mb-5">Services</h4>
            <ul className="flex flex-col gap-2.5">
              {FOOTER_SERVICES.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-sm text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-1.5 group">
                    <span className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-blue-500 transition-colors" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-600 text-sm text-white tracking-wide uppercase mb-5">Company</h4>
            <ul className="flex flex-col gap-2.5">
              {FOOTER_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-sm text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-1.5 group">
                    <span className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-blue-500 transition-colors" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Box */}
          <div>
            <h4 className="font-display font-600 text-sm text-white tracking-wide uppercase mb-5">Get In Touch</h4>
            <div className="bg-white/5 border border-white/8 rounded-2xl p-5 flex flex-col gap-4">
              <div>
                <p className="text-xs text-gray-500 font-mono uppercase tracking-widest mb-1">Website</p>
                <a href="https://dncfiber.com" className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors">
                  {COMPANY.website}
                </a>
              </div>
              <div>
                <p className="text-xs text-gray-500 font-mono uppercase tracking-widest mb-1">Phone</p>
                <a href={`tel:${COMPANY.phone}`} className="text-white text-sm font-medium hover:text-blue-400 transition-colors">
                  {COMPANY.phone}
                </a>
              </div>
              <div>
                <p className="text-xs text-gray-500 font-mono uppercase tracking-widest mb-1">WhatsApp</p>
                <a href={COMPANY.whatsapp} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 text-sm font-medium transition-colors">
                  Chat on WhatsApp
                </a>
              </div>
              <Link href="/contact" className="btn-primary justify-center text-xs mt-1">
                Send Inquiry
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="container-wide py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Drop Network Connective. All rights reserved.</p>
          <p className="font-mono">FTTX Design &amp; Telecom Engineering · {COMPANY.location}</p>
        </div>
      </div>
    </footer>
  )
}
