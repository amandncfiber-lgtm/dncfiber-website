import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MapPin } from 'lucide-react'
import { FadeIn, SectionHeader, CheckItem, StaggerContainer, StaggerItem } from '@/components/ui'
import { COMPANY } from '@/lib/utils'
import TechSection from '@/components/sections/TechSection'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Drop Network Connective is a telecom engineering organization specializing in FTTX design, GIS engineering, HLD, LLD, construction drawings and fiber network planning for operators and ISPs across the USA and India.',
}

const CAPABILITIES = [
  'High Level Design (HLD)',
  'Low Level Design (LLD)',
  'Construction Drawings & Permit Packages',
  'GIS Mapping — ArcGIS, QGIS, IQGeo',
  'Fiber Network Planning — FTTH / FTTB / FTTC',
  'Splice Sheet Preparation',
  'Permitting & Utility Coordination',
  'OSP Design Support',
  'Telecom Documentation',
  'USA & India Project Delivery',
]

const VALUES = [
  { title: 'Engineering Accuracy', desc: 'Every deliverable goes through multi-stage QA before it reaches your team. Precision is non-negotiable.' },
  { title: 'Scalable Capacity', desc: 'Our engineering network scales with your project volume — from a single design to multi-state deployments.' },
  { title: 'Technology Proficiency', desc: 'Deep platform expertise in ArcGIS, QGIS, AutoCAD Map 3D, IQGeo and more.' },
  { title: 'Cross-Border Delivery', desc: 'Engineering aligned to US standards and Indian telecom practices delivered from Raipur, India.' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80"
            alt="Telecom engineering"
            fill className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/80 to-gray-950" />
        <div className="container-wide relative z-10">
          <FadeIn>
            <div className="eyebrow text-blue-400 before:bg-blue-400">About Us</div>
            <h1 className="font-display font-700 text-5xl lg:text-7xl text-white leading-none mb-6">
              Drop Network<br />
              <span className="text-blue-400">Connective</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed mb-6">
              A telecom engineering organization delivering end-to-end FTTX design and engineering solutions for operators, ISPs and contractors across the USA and India.
            </p>
            <div className="flex items-center gap-2 text-gray-500 font-mono text-sm">
              <MapPin size={14} className="text-blue-500" />
              {COMPANY.location}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Mission */}
      <section className="section-pad bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                  <Image src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=85" alt="Fiber installation" fill className="object-cover" />
                </div>
                <div className="flex flex-col gap-4 pt-8">
                  <div className="relative aspect-square rounded-2xl overflow-hidden">
                    <Image src="https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=400&q=85" alt="GIS mapping" fill className="object-cover" />
                  </div>
                  <div className="bg-blue-600 rounded-2xl p-5 text-white">
                    <div className="font-display font-700 text-2xl mb-1">FTTX</div>
                    <div className="text-sm text-blue-200">Specialists</div>
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div className="eyebrow">Who We Are</div>
              <h2 className="heading-lg text-gray-900 mb-6">
                Engineering expertise you can<br />
                <span className="gradient-text">depend on.</span>
              </h2>
              <p className="body-lg mb-5">
                Drop Network Connective is a telecom engineering organization delivering end-to-end FTTX design solutions. Our engineering network consists of experienced telecom professionals with expertise in GIS, HLD, LLD, construction drawings, permitting support, fiber documentation and network planning.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                We provide scalable engineering support for telecom operators, contractors, ISPs and engineering firms. Our team combines field understanding, GIS intelligence and telecom engineering expertise to support successful network deployments across the USA and India.
              </p>
              <ul className="flex flex-col gap-3">
                {CAPABILITIES.map(c => <CheckItem key={c}>{c}</CheckItem>)}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad bg-gray-50">
        <div className="container-wide">
          <SectionHeader
            eyebrow="Our Principles"
            title={<>How We <span className="gradient-text">Work</span></>}
            subtitle="The operating principles that drive every project and engineering deliverable we produce."
            center
          />
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {VALUES.map(v => (
              <StaggerItem key={v.title}>
                <div className="card">
                  <h3 className="font-display font-600 text-xl text-gray-900 mb-3">{v.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{v.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Expertise grid */}
      <section className="section-pad bg-white">
        <div className="container-wide">
          <SectionHeader
            eyebrow="Engineering Expertise"
            title={<>Full Lifecycle <span className="gradient-text">Coverage</span></>}
            subtitle="From initial feasibility through final construction delivery — our engineering network covers every design phase."
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <FadeIn className="lg:col-span-2">
              <div className="relative rounded-3xl overflow-hidden aspect-[16/9]">
                <Image
                  src="/images/paul-hanaoka-5Za2sS955yg-unsplash.jpg"
                  alt="Aerial view fiber network construction"
                  fill className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <div className="font-mono text-xs text-blue-300 tracking-widest uppercase mb-1">Engineering Scope</div>
                  <div className="font-display font-700 text-white text-2xl">Feasibility → As-Built</div>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right" className="flex flex-col gap-4">
              {[
                { phase: 'Phase 01', name: 'Planning & HLD', desc: 'Network architecture, routing strategy and capacity design.' },
                { phase: 'Phase 02', name: 'GIS & LLD', desc: 'Geospatial mapping, detailed fiber routes and splice planning.' },
                { phase: 'Phase 03', name: 'Construction Docs', desc: 'Permit drawings, CAD packages and field-ready documentation.' },
                { phase: 'Phase 04', name: 'Delivery & QA', desc: 'Quality review, as-built updates and final project handover.' },
              ].map(p => (
                <div key={p.phase} className="bg-gray-50 border border-gray-100 rounded-2xl p-5">
                  <div className="font-mono text-xs text-blue-600 tracking-widest uppercase mb-1">{p.phase}</div>
                  <div className="font-display font-600 text-gray-900 mb-1">{p.name}</div>
                  <div className="text-sm text-gray-500">{p.desc}</div>
                </div>
              ))}
            </FadeIn>
          </div>
        </div>
      </section>

      <TechSection />

      {/* CTA */}
      <section className="section-pad bg-blue-600">
        <div className="container-wide text-center">
          <FadeIn>
            <p className="font-mono text-xs text-blue-200 tracking-widest uppercase mb-4">Start Today</p>
            <h2 className="font-display font-700 text-4xl lg:text-5xl text-white mb-6">
              Ready to discuss your next project?
            </h2>
            <p className="text-blue-100 text-lg max-w-xl mx-auto mb-8">
              Let&apos;s review your scope, timeline and engineering requirements.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-full hover:bg-blue-50 transition-colors flex items-center gap-2">
                Request Proposal <ArrowRight size={16} />
              </Link>
              <Link href="/partnership" className="btn-outline-white px-8 py-4">
                Partnership Options
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
