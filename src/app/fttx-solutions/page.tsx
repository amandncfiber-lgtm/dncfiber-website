import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import WorkflowSection from '@/components/sections/WorkflowSection'
import FiberColorCode from '@/components/sections/FiberColorCode'
import { FadeIn, SectionHeader, StaggerContainer, StaggerItem, CheckItem } from '@/components/ui'

export const metadata: Metadata = {
  title: 'FTTX Solutions',
  description: 'Complete FTTX engineering solutions — FTTH, FTTB, FTTC network design including HLD, LLD, GIS mapping, splice sheets, construction drawings and permitting support.',
}

const SOLUTION_TYPES = [
  {
    type: 'FTTH', full: 'Fiber To The Home',
    desc: 'Complete residential fiber planning including distribution network design, drop cable routing, splitter placement and ONT documentation.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=85',
    features: ['Feeder & Distribution Design', 'Splitter Placement', 'Drop Route Planning', 'ONT Documentation', 'Handhole / Vault Layout'],
  },
  {
    type: 'FTTB', full: 'Fiber To The Building',
    desc: 'Multi-dwelling unit and commercial building fiber design including riser routing, IDF placement and building demarcation documentation.',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=85',
    features: ['Building Entry Design', 'Riser Route Planning', 'IDF / MDF Layout', 'MDU Distribution', 'Tenant Demarcation'],
  },
  {
    type: 'FTTC', full: 'Fiber To The Curb',
    desc: 'Cabinet-based last-mile fiber design for DSLAM, small cell and hybrid distribution networks with curb-side cabinet placement.',
    image: 'https://images.unsplash.com/photo-1601132359864-c974e79890ac?w=800&q=85',
    features: ['Cabinet Placement', 'Curb-Side Distribution', 'Feeder Routing', 'Power Coordination', 'Capacity Planning'],
  },
]

export default function FTTXPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src="https://images.unsplash.com/photo-1416430987716-28d74db5e2f3?w=1600&q=80" alt="Fiber network" fill className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/60 to-gray-950" />
        <div className="container-wide relative z-10">
          <FadeIn>
            <div className="eyebrow text-blue-400 before:bg-blue-400">FTTX Engineering</div>
            <h1 className="font-display font-700 text-5xl lg:text-7xl text-white leading-none mb-6">
              FTTX Design<br /><span className="text-blue-400">Solutions</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
              End-to-end engineering for FTTH, FTTB and FTTC network deployments — from initial planning through construction-ready documentation.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Solution types */}
      <section className="section-pad bg-white">
        <div className="container-wide">
          <SectionHeader
            eyebrow="Network Types"
            title={<>FTTH · FTTB · <span className="gradient-text">FTTC</span></>}
            subtitle="Engineering support across all FTTX deployment architectures — tailored to your network topology and standards."
            center
          />
          <div className="flex flex-col gap-16">
            {SOLUTION_TYPES.map((sol, i) => (
              <div key={sol.type} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}>
                <FadeIn direction={i % 2 === 0 ? 'left' : 'right'} className={i % 2 !== 0 ? 'order-2 lg:order-1' : ''}>
                  <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
                    <Image src={sol.image} alt={sol.full} fill className="object-cover" />
                    <div className="absolute top-6 left-6">
                      <div className="bg-blue-600 text-white font-display font-700 text-2xl px-5 py-2 rounded-xl">{sol.type}</div>
                    </div>
                  </div>
                </FadeIn>
                <FadeIn direction={i % 2 === 0 ? 'right' : 'left'} className={i % 2 !== 0 ? 'order-1 lg:order-2' : ''}>
                  <div className="font-mono text-xs text-blue-600 tracking-widest uppercase mb-2">{sol.type}</div>
                  <h2 className="font-display font-700 text-3xl lg:text-4xl text-gray-900 mb-4">{sol.full}</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">{sol.desc}</p>
                  <ul className="flex flex-col gap-3">
                    {sol.features.map(f => <CheckItem key={f}>{f}</CheckItem>)}
                  </ul>
                </FadeIn>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OSP types */}
      <section className="section-pad bg-gray-50">
        <div className="container-wide">
          <SectionHeader
            eyebrow="OSP Design Types"
            title={<>Aerial · Underground · <span className="gradient-text">Direct Bury</span></>}
            subtitle="Outside Plant engineering across all construction methods — aerial strand, underground conduit and direct-buried fiber."
          />
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Aerial Fiber', img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80',
                points: ['ADSS Cable Design', 'Pole Loading Calculations', 'Make-Ready Analysis', 'Strand Attachment', 'Lashing Documentation'],
              },
              {
                title: 'Underground Conduit', img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
                points: ['Conduit Route Design', 'Directional Bore Plans', 'Vault & Handhole Placement', 'Raceway Design', 'Pull Tension Calculation'],
              },
              {
                title: 'Direct Bury', img: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80',
                points: ['Burial Depth Specification', 'Utility Conflict Analysis', 'Warning Tape Documentation', 'Marker Posts', 'Restoration Plans'],
              },
            ].map(osp => (
              <StaggerItem key={osp.title}>
                <div className="card group flex flex-col h-full">
                  <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-5">
                    <Image src={osp.img} alt={osp.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <h3 className="font-display font-600 text-xl text-gray-900 mb-3">{osp.title}</h3>
                  <ul className="flex flex-col gap-2 flex-1">
                    {osp.points.map(p => <CheckItem key={p}>{p}</CheckItem>)}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <WorkflowSection />
      <FiberColorCode />

      {/* CTA */}
      <section className="section-pad bg-white">
        <div className="container-wide text-center">
          <FadeIn>
            <h2 className="heading-lg text-gray-900 mb-4">
              Ready to plan your <span className="gradient-text">FTTX deployment?</span>
            </h2>
            <p className="body-lg max-w-xl mx-auto mb-8">
              Share your project scope and our engineering team will outline the right design approach for your network.
            </p>
            <Link href="/contact" className="btn-primary">
              Request Engineering Proposal <ArrowRight size={16} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
