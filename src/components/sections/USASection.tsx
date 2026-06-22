import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FadeIn, CheckItem, SectionHeader } from '@/components/ui'

const USA_CLIENTS = [
  'Telecom Operators & Carriers',
  'OSP Engineering Firms',
  'Fiber Contractors',
  'Utility Companies',
  'Broadband Providers',
  'Internet Service Providers',
  'Rural Electric Cooperatives',
  'Municipal Broadband Agencies',
]

const USA_DELIVERABLES = [
  'Low-Level Designs (LLD) aligned to your existing HLD',
  'Construction-ready documentation to US standards',
  'GIS data management and feature attribute cleanup',
  'Splice packages and fiber allocation schedules',
  'Permit drawing packages for municipal submission',
  'As-built documentation and redline updates',
]

export default function USASection() {
  return (
    <section className="section-pad bg-gray-50">
      <div className="container-wide">
        <SectionHeader
          eyebrow="USA Telecom Support"
          title={<>Supporting Fiber Deployment <span className="gradient-text">Across the United States</span></>}
          subtitle="If your organization has network designs prepared, our team can deliver detailed LLDs, construction packages, GIS management and splice documentation aligned to your standards and workflows."
          center
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
              <Image
                src="/images/photo-1758873268695-1b55590e507a.avif"
                alt="USA fiber optic infrastructure deployment"
                fill className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/70 to-transparent" />
              <div className="absolute top-6 left-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-xl">
                  <div className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-1">Project Support</div>
                  <div className="font-display font-700 text-blue-600 text-xl"></div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right">
            <div className="eyebrow">Clients We Support</div>
            <div className="grid grid-cols-2 gap-2 mb-10">
              {USA_CLIENTS.map(c => (
                <div key={c} className="flex items-center gap-2 bg-white border border-gray-100 rounded-xl px-4 py-3 text-sm font-medium text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                  {c}
                </div>
              ))}
            </div>

            <h3 className="font-display font-600 text-xl text-gray-900 mb-4">Deliverables We Align To Your Standards</h3>
            <ul className="flex flex-col gap-3 mb-8">
              {USA_DELIVERABLES.map(d => (
                <CheckItem key={d}>{d}</CheckItem>
              ))}
            </ul>

            <p className="text-sm text-gray-500 mb-6">
              We adapt to your workflows, templates and engineering practices — integrating directly into your existing design pipeline with no process disruption.
            </p>

            <Link href="/contact" className="btn-primary">
              Discuss USA Project <ArrowRight size={16} />
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
