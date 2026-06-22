'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/telecom-tower-sunset.jpg"
          alt="Telecom tower silhouette during sunset"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-950/60 to-gray-950/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-gray-950/30" />
      </div>

      {/* Animated blueprint grid */}
      <div className="absolute inset-0 z-0 opacity-15">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="64" height="64" patternUnits="userSpaceOnUse">
              <path d="M 64 0 L 0 0 0 64" fill="none" stroke="rgba(0,102,255,0.5)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Content */}
      <div className="container-wide relative z-10 py-32">
        <div className="max-w-3xl">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 text-blue-300 font-mono text-xs tracking-widest uppercase px-4 py-2 rounded-full mb-8 backdrop-blur-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            FTTX Design &amp; Telecom Engineering
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-display leading-none tracking-tight mb-6 text-white"
            style={{ fontSize: 'clamp(48px, 7vw, 88px)', fontWeight: 700 }}
          >
            DROP NETWORK
            <br />
            <span className="text-blue-400">CONNECTIVE</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-xl lg:text-2xl text-white/80 font-medium mb-4 leading-tight"
          >
            End-to-End FTTX Design &amp; Engineering Solutions
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="text-base lg:text-lg text-gray-400 leading-relaxed mb-10 max-w-xl"
          >
            Supporting telecom operators, ISPs, contractors and engineering firms with scalable network planning, GIS intelligence and telecom engineering expertise.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="flex flex-wrap gap-4 mb-14"
          >
            <Link href="/contact" className="btn-primary text-base px-8 py-4">
              Request Proposal <ArrowRight size={18} />
            </Link>
            <Link href="/partnership" className="btn-outline-white text-base px-8 py-4">
              Become a Partner
            </Link>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="inline-flex flex-wrap border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm bg-black/20"
          >
            {[
              { val: 'HLD → LLD', label: 'Full Design Lifecycle' },
              { val: 'USA + India', label: 'Cross-Border Delivery' },
              { val: 'ArcGIS + CAD', label: 'Platform Expertise' },
              { val: 'FTTH / FTTB', label: 'Network Types' },
            ].map((s, i) => (
              <div
                key={i}
                className={`px-5 py-3 ${i < 3 ? 'border-r border-white/10' : ''}`}
              >
                <div className="font-mono text-xs font-semibold text-blue-400 whitespace-nowrap">{s.val}</div>
                <div className="text-xs text-gray-500 mt-0.5 whitespace-nowrap">{s.label}</div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
