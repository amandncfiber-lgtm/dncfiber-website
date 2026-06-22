import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'FTTX design portfolio showcasing HLD, LLD, GIS mapping, construction drawings, fiber planning and telecom engineering deliverables from Drop Network Connective.',
}

const PORTFOLIO_ITEMS = [
  {
    category: 'High Level Design',
    title: 'FTTH Network Architecture',
    desc: 'Complete HLD package for a greenfield FTTH deployment including fiber routing strategy, splitter placement, capacity planning and expansion model documentation.',
    tags: ['HLD', 'FTTH', 'Network Architecture'],
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
  },
  {
    category: 'GIS Mapping',
    title: 'Fiber Route GIS Dataset',
    desc: 'Comprehensive geospatial fiber route mapping using ArcGIS Pro, including feature attribute tables, spatial analysis and export packages for construction teams.',
    tags: ['ArcGIS', 'Route Mapping', 'GIS Dataset'],
    img: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=800&q=80',
  },
  {
    category: 'Construction Drawings',
    title: 'OSP Permit Drawing Package',
    desc: 'Complete permit drawing set including plan-and-profile sheets, traffic control plans, utility crossing details and municipal submission documentation.',
    tags: ['AutoCAD', 'Permit Drawings', 'OSP'],
    img: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80',
  },
  {
    category: 'Low Level Design',
    title: 'LLD Splice & Allocation Package',
    desc: 'Detailed low-level design covering fiber routes, splice closures, buffer tube assignments, strand allocation tables and OTDR test reference documentation.',
    tags: ['LLD', 'Splice Planning', 'Fiber Allocation'],
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  },
  {
    category: 'Telecom Documentation',
    title: 'Network Engineering Package',
    desc: 'Full documentation package including network design reports, fiber schedule tables, BOQ preparation and as-built record submissions.',
    tags: ['Documentation', 'As-Built', 'BOQ'],
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
  },
]

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1600&q=80" alt="Telecom" fill className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/70 to-gray-950" />
        <div className="container-wide relative z-10">
          <FadeIn>
            <div className="eyebrow text-blue-400 before:bg-blue-400">Our Work</div>
            <h1 className="font-display font-700 text-5xl lg:text-7xl text-white leading-none mb-6">
              Engineering<br /><span className="text-blue-400">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
              A selection of FTTX engineering deliverables across HLD, LLD, GIS mapping, construction drawings and fiber network planning.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Grid */}
      <section className="section-pad bg-white">
        <div className="container-wide">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PORTFOLIO_ITEMS.map(item => (
              <StaggerItem key={item.title}>
                <div className="rounded-2xl overflow-hidden border border-gray-100 group hover:shadow-xl hover:shadow-blue-600/5 transition-all duration-300 flex flex-col">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="font-mono text-xs bg-blue-600 text-white px-3 py-1 rounded-full tracking-widest uppercase">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1 bg-white">
                    <h3 className="font-display font-600 text-lg text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">{item.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map(tag => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Note */}
      <section className="py-12 bg-gray-50 border-t border-gray-100">
        <div className="container-wide">
          <FadeIn className="text-center max-w-2xl mx-auto">
            <p className="text-gray-500 text-sm leading-relaxed">
              Deliverable samples and project documentation are available upon request under NDA. Contact our engineering team to discuss your specific requirements and review relevant work examples.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-gray-950">
        <div className="container-wide">
          <FadeIn className="bg-blue-600 rounded-3xl p-12 text-center">
            <p className="font-mono text-xs text-blue-200 tracking-widest uppercase mb-4">Next Project</p>
            <h2 className="font-display font-700 text-4xl text-white mb-4">
              Ready to start your engineering project?
            </h2>
            <p className="text-blue-100 max-w-lg mx-auto mb-8">
              Share your scope and requirements. Our engineering team will respond within one business day.
            </p>
            <Link href="/contact" className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-full hover:bg-blue-50 transition-colors inline-flex items-center gap-2">
              Request Engineering Proposal <ArrowRight size={16} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
