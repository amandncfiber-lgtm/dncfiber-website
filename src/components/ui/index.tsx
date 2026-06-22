'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { cn } from '@/lib/utils'

/* ─── FadeIn wrapper ─── */
export function FadeIn({
  children,
  className,
  delay = 0,
  direction = 'up',
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const dirs = {
    up: { y: 28, x: 0 },
    down: { y: -28, x: 0 },
    left: { x: -28, y: 0 },
    right: { x: 28, y: 0 },
    none: { x: 0, y: 0 },
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...dirs[direction] }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ─── Stagger container ─── */
export function StaggerContainer({
  children,
  className,
  stagger = 0.1,
}: {
  children: React.ReactNode
  className?: string
  stagger?: number
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{ visible: { transition: { staggerChildren: stagger } } }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ─── Section Header ─── */
export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  center = false,
  dark = false,
}: {
  eyebrow: string
  title: React.ReactNode
  subtitle?: string
  center?: boolean
  dark?: boolean
}) {
  return (
    <FadeIn className={cn('mb-16', center && 'text-center')}>
      <div className={cn('eyebrow', center && 'justify-center')}>
        {eyebrow}
      </div>
      <h2 className={cn('heading-lg mb-4', dark ? 'text-white' : 'text-gray-900')}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn('text-lg max-w-2xl leading-relaxed', center && 'mx-auto', dark ? 'text-gray-400' : 'text-gray-600')}>
          {subtitle}
        </p>
      )}
    </FadeIn>
  )
}

/* ─── Badge ─── */
export function Badge({ children, variant = 'default' }: { children: React.ReactNode; variant?: 'default' | 'outline' | 'dark' }) {
  return (
    <span className={cn(
      'inline-flex items-center font-mono text-xs tracking-widest uppercase px-3 py-1.5 rounded-full',
      variant === 'default' && 'bg-blue-50 text-blue-700',
      variant === 'outline' && 'border border-blue-600/30 text-blue-600',
      variant === 'dark' && 'bg-white/8 text-gray-300 border border-white/10',
    )}>
      {children}
    </span>
  )
}

/* ─── Check list item ─── */
export function CheckItem({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <li className={cn('flex items-start gap-3 text-sm', dark ? 'text-gray-300' : 'text-gray-700')}>
      <span className="mt-0.5 w-4 h-4 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
        <svg viewBox="0 0 10 10" fill="none" className="w-2.5 h-2.5">
          <path d="M2 5L4.5 7.5L8.5 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      {children}
    </li>
  )
}

/* ─── Stat card ─── */
export function StatCard({ value, label, dark = false }: { value: string; label: string; dark?: boolean }) {
  return (
    <div className={cn(
      'p-6 rounded-2xl',
      dark ? 'bg-white/5 border border-white/8' : 'bg-blue-50 border border-blue-100'
    )}>
      <div className={cn('font-display font-700 text-4xl mb-1', dark ? 'text-white' : 'text-blue-600')}>
        {value}
      </div>
      <div className={cn('text-sm font-medium', dark ? 'text-gray-400' : 'text-gray-600')}>
        {label}
      </div>
    </div>
  )
}
