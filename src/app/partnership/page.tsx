import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Users, Globe, Layers, Zap, Shield, Clock } from 'lucide-react'
import { FadeIn, SectionHeader, StaggerContainer, StaggerItem, CheckItem } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Engineering Partnership',
  description: 'Partner with Drop Network Connective for white-label FTTX design support, offshore engineering capacity, resource augmentation and dedicated telecom design teams for USA and India projects.',
}

const PARTNERSHIP_MODELS = [
  {
    icon: Globe,
    title: 'White Label Design Support',
    desc: 'Full engineering deliverables produced under your brand. Our team works invisibly as an extension of your design organization, delivering HLD, LLD, GIS and construction packages in your templates and documentation standards.',
    best: 'Engineering firms, consultants and contractors who want to expand design capacity without growing headcount.',
  },
  {
    icon: Users,
    title: 'Offshore Engineering Team',
    desc: 'Dedicated engineering resources integrated into your existing project workflow. Your project managers lead; our engineers execute. Full alignment to your processes, tools and deliverable standards.',
    best: 'Telecom operators and OSP firms managing high-volume design programs.',
  },
  {
    icon: Layers,
    title: 'Resource Augmentation',
    desc: 'Flexible engineering capacity added to your team on a project-specific or retainer basis. Scale up for peak demand and scale back during quiet periods without permanent hiring.',
    best: 'Companies with variable project volume who need elastic engineering capacity.',
  },
  {
    icon: Zap,
    title: 'Dedicated Design Support',
    desc: 'Assigned engineering resources focused exclusively on your organization\'s projects. Consistent team, consistent quality, deep familiarity with your network and standards over time.',
    best: 'Long-term design programs requiring continuity of engineering knowledge.',
  },
  {
    icon: Shield,
    title: 'USA Project Support',
    desc: 'Engineering services aligned to US standards, deliverable formats and municipal requirements. LLD, construction drawings, GIS data management and splice packages aligned to your existing HLD packages.',
    best: 'US telecom operators, ISPs, fiber contractors and OSP engineering firms.',
  },
  {
    icon: Clock,
    title: 'India Project Support',
    desc: 'Domestic telecom engineering support for Indian operators, ISPs and infrastructure companies. Full FTTX lifecycle services from planning through construction documentation.',
    best: 'Indian telecom operators, ISPs and infrastructure companies.',
  },
]

const WHY_PARTNER = [
  'No recruitment, onboarding or training costs',
  'Engineering aligned to your templates and standards from day one',
  'Flexible engagement — project-based or long-term retainer',
  'Multi-platform capability: ArcGIS, QGIS, AutoCAD, IQGeo',
  'Delivery to US standards for USA projects',
  'Transparent communication and structured deliverable review',
]

export default function PartnershipPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=80" alt="Team collaboration" fill className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/70 to-gray-950" />
        <div className="container-wide relative z-10">
          <FadeIn>
            <div className="eyebrow text-blue-400 before:bg-blue-400">Engineering Partnership</div>
            <h1 className="font-display font-700 text-5xl lg:text-7xl text-white leading-none mb-6">
              Need Additional<br />
              <span className="text-blue-400">Engineering<br />Capacity?</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
              Drop Network Connective can work as an engineering partner for telecom operators, contractors, ISPs and engineering firms — seamlessly integrated into your workflow from day one.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Partnership models */}
      <section className="section-pad bg-white">
        <div className="container-wide">
          <SectionHeader
            eyebrow="Partnership Models"
            title={<>Flexible Engagement <span className="gradient-text">Structures</span></>}
            subtitle="Choose the partnership model that fits your operational structure and project requirements."
            center
          />
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PARTNERSHIP_MODELS.map(({ icon: Icon, title, desc, best }) => (
              <StaggerItem key={title}>
                <div className="card h-full flex flex-col group">
                  <div className="w-12 h-12 bg-blue-50 group-hover:bg-blue-600 rounded-xl flex items-center justify-center mb-5 transition-colors">
                    <Icon size={22} className="text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-display font-600 text-xl text-gray-900 mb-3">{title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">{desc}</p>
                  <div className="pt-4 border-t border-gray-100">
                    <div className="font-mono text-xs text-gray-400 uppercase tracking-widest mb-1">Best For</div>
                    <p className="text-xs text-gray-500 leading-relaxed">{best}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why Partner */}
      <section className="section-pad bg-gray-950">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <div className="eyebrow text-blue-400 before:bg-blue-400">Why Partner With Us</div>
              <h2 className="font-display font-700 text-4xl lg:text-5xl text-white mb-6">
                Engineering capacity that integrates, not interrupts.
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Our engineering network is built to extend your team&apos;s capability without disrupting existing operations. We align to your standards, tools and communication rhythms from the first engagement.
              </p>
              <ul className="flex flex-col gap-4">
                {WHY_PARTNER.map(r => <CheckItem key={r} dark>{r}</CheckItem>)}
              </ul>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">
                  Start Partnership Discussion <ArrowRight size={16} />
                </Link>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
                <Image src="https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=800&q=85" alt="GIS engineering team" fill className="object-cover" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-pad bg-white">
        <div className="container-wide">
          <SectionHeader
            eyebrow="How Partnership Works"
            title={<>Simple Onboarding, <span className="gradient-text">Fast Start</span></>}
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
            {[
              { n: '01', t: 'Discovery Call', d: 'Review scope, standards and project requirements.' },
              { n: '02', t: 'Alignment', d: 'Confirm tools, templates and deliverable formats.' },
              { n: '03', t: 'First Package', d: 'Pilot deliverable reviewed and refined together.' },
              { n: '04', t: 'Ongoing Delivery', d: 'Structured workflow with regular review cycles.' },
            ].map((p, i) => (
              <FadeIn key={p.n} delay={i * 0.1} className="relative">
                {i < 3 && <div className="hidden md:block absolute top-8 left-1/2 right-0 h-px bg-blue-100 z-0" />}
                <div className="relative z-10 flex flex-col items-center text-center p-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-blue-600/20">
                    <span className="font-mono font-700 text-white">{p.n}</span>
                  </div>
                  <h4 className="font-display font-600 text-gray-900 mb-2">{p.t}</h4>
                  <p className="text-sm text-gray-500">{p.d}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-blue-600">
        <div className="container-wide text-center">
          <FadeIn>
            <h2 className="font-display font-700 text-4xl lg:text-5xl text-white mb-4">
              Let&apos;s discuss your engineering requirements.
            </h2>
            <p className="text-blue-100 text-lg max-w-xl mx-auto mb-8">
              Tell us about your project volume, tools and delivery standards. We&apos;ll outline the best partnership structure for your organization.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-full hover:bg-blue-50 transition-colors flex items-center gap-2">
                Start a Conversation <ArrowRight size={16} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
