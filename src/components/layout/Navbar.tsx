'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone } from 'lucide-react'
import { cn, COMPANY } from '@/lib/utils'

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/fttx-solutions', label: 'FTTX Solutions' },
  { href: '/partnership', label: 'Partnership' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  const isHome = pathname === '/'

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled || !isHome
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="container-wide">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 32 32" fill="none" className="w-5 h-5">
                <circle cx="6" cy="26" r="2.5" fill="white" />
                <circle cx="26" cy="6" r="2.5" fill="white" />
                <circle cx="16" cy="16" r="1.8" fill="white" opacity="0.7" />
                <path d="M6 26 Q6 16 16 16 Q26 16 26 6" stroke="white" strokeWidth="1.8" strokeLinecap="round" fill="none" />
              </svg>
            </div>
            <div className="leading-tight">
              <div className={cn(
                'font-display font-700 text-sm tracking-tight transition-colors',
                scrolled || !isHome ? 'text-gray-900' : 'text-white'
              )}>
                DROP NETWORK
              </div>
              <div className="font-display font-600 text-xs text-blue-600 tracking-wider">
                CONNECTIVE
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200',
                  pathname === href
                    ? 'bg-blue-600 text-white'
                    : scrolled || !isHome
                    ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                )}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${COMPANY.phone}`}
              className={cn(
                'flex items-center gap-2 text-sm font-medium transition-colors',
                scrolled || !isHome ? 'text-gray-600 hover:text-blue-600' : 'text-white/80 hover:text-white'
              )}
            >
              <Phone size={14} />
              {COMPANY.phone}
            </a>
            <Link href="/contact" className="btn-primary text-sm px-5 py-2.5">
              Get Proposal
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setOpen(!open)}
            className={cn(
              'lg:hidden p-2 rounded-lg transition-colors',
              scrolled || !isHome ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            )}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="container-wide py-4 flex flex-col gap-1">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  'px-4 py-3 rounded-xl text-sm font-medium transition-colors',
                  pathname === href
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-700 hover:bg-gray-50'
                )}
              >
                {label}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
              <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-2 text-sm text-gray-600 px-4">
                <Phone size={14} /> {COMPANY.phone}
              </a>
              <Link href="/contact" className="btn-primary justify-center mx-4">
                Request Proposal
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
