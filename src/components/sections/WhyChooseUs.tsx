import Image from 'next/image'
import { CheckItem, FadeIn } from '@/components/ui'

const REASONS = [
  { title: 'Engineering Accuracy', desc: 'Multi-stage QA review built into every deliverable — from HLD architecture to final as-built documentation.' },
  { title: 'Fast Turnaround', desc: 'Streamlined workflows and experienced engineering teams that keep your project timelines on track.' },
  { title: 'GIS Expertise', desc: 'In-depth proficiency in ArcGIS, QGIS and IQGeo platforms for precision fiber route mapping and spatial analysis.' },
  { title: 'Scalable Capacity', desc: 'Engineering support that flexes with your project volume — from a single design package to multi-state deployments.' },
  { title: 'Flexible Partnership Models', desc: 'White-label, offshore, resource augmentation or dedicated team — structured around your operational model.' },
  { title: 'USA & India Delivery', desc: 'Cross-border engineering capability aligned to US standards, practices and deliverable formats.' },
]

export default function WhyChooseUs() {
  return (
    <section className="section-pad bg-white">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <FadeIn direction="left" className="order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
              <Image
                src="/images/photo-1706454566473-d5ca521ea8cb.avif"
                alt="Telecom field engineer working on fiber optic installation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-xl">
                <div className="font-display font-700 text-blue-600 text-2xl">360°</div>
                <div className="text-xs text-gray-600 font-medium">Engineering Coverage</div>
              </div>
            </div>
          </FadeIn>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <FadeIn>
              <div className="eyebrow">Why Drop Network Connective</div>
              <h2 className="heading-lg text-gray-900 mb-6">
                Precision engineering.<br />
                <span className="gradient-text">Dependable delivery.</span>
              </h2>
              <p className="body-lg mb-8">
                Drop Network Connective is a telecom engineering organization delivering end-to-end FTTX design solutions. Our engineering network combines field understanding, GIS intelligence and telecom expertise to support successful network deployments.
              </p>
              <ul className="flex flex-col gap-4 mb-8">
                {REASONS.map((r) => (
                  <CheckItem key={r.title}>
                    <div>
                      <span className="font-semibold text-gray-900">{r.title}</span>
                      <span className="text-gray-500"> — {r.desc}</span>
                    </div>
                  </CheckItem>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
