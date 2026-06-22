import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Network, Layers, FileText, Map, Globe, Globe2, Workflow, Cable, Shield, BookOpen, Zap, ArrowRight } from 'lucide-react'
import { SERVICES } from '@/lib/utils'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Comprehensive FTTX design and telecom engineering services — HLD, LLD, GIS mapping, construction drawings, splice sheets, permitting and OSP design for telecom operators, ISPs and contractors.',
}

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Network, Layers, FileText, Map, Globe, Globe2, Workflow, Cable, Shield, BookOpen, Zap,
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1600&q=80" alt="Telecom engineering" fill className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/70 to-gray-950" />
        <div className="container-wide relative z-10">
          <FadeIn>
            <div className="eyebrow text-blue-400 before:bg-blue-400">Engineering Services</div>
            <h1 className="font-display font-700 text-5xl lg:text-7xl text-white leading-none mb-6">
              Our Service<br /><span className="text-blue-400">Capabilities</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
              Twelve specialized engineering disciplines, each a complete capability — designed to integrate as a seamless end-to-end FTTX pipeline.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-pad bg-white" id="services-list">
        <div className="container-wide">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((svc) => {
              const Icon = ICON_MAP[svc.icon] || Network
              return (
                <StaggerItem key={svc.id}>
                  <div id={svc.id} className="card group h-full flex flex-col scroll-mt-24">
                    <div className="w-12 h-12 bg-blue-50 group-hover:bg-blue-600 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300">
                      <Icon size={22} className="text-blue-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="font-display font-600 text-xl text-gray-900 mb-3">{svc.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-5 flex-1">{svc.short}</p>
                    <ul className="flex flex-col gap-2.5">
                      {svc.features.map(f => (
                        <li key={f} className="flex items-center gap-2.5 text-sm text-gray-600">
                          <span className="w-4 h-4 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0">
                            <svg viewBox="0 0 8 8" fill="none" className="w-2 h-2"><path d="M1.5 4L3.5 6L6.5 2" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Image break */}
      <section className="relative h-96 overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=85" alt="Fiber installation crew" fill className="object-cover" />
        <div className="absolute inset-0 bg-gray-900/70 flex items-center">
          <div className="container-wide">
            <FadeIn>
              <p className="font-mono text-xs text-blue-300 tracking-widest uppercase mb-3">Standards-Aligned Delivery</p>
              <h2 className="font-display font-700 text-4xl lg:text-5xl text-white max-w-2xl leading-tight">
                Every deliverable built to your engineering standards and workflow.
              </h2>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-gray-950">
        <div className="container-wide">
          <div className="bg-blue-600 rounded-3xl p-12 text-center">
            <FadeIn>
              <p className="font-mono text-xs text-blue-200 tracking-widest uppercase mb-4">Get Started</p>
              <h2 className="font-display font-700 text-4xl text-white mb-4">Ready to scope your project?</h2>
              <p className="text-blue-100 max-w-lg mx-auto mb-8">Tell us about your network and engineering requirements. We&apos;ll respond within one business day.</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/contact" className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-full hover:bg-blue-50 transition-colors flex items-center gap-2">
                  Request Proposal <ArrowRight size={16} />
                </Link>
                <Link href="/partnership" className="btn-outline-white">Become a Partner</Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  )
}
