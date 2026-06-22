import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FadeIn } from '@/components/ui'
import Hero from '@/components/sections/Hero'
import ServicesGrid from '@/components/sections/ServicesGrid'
import AboutSection from '@/components/sections/AboutSection'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import USASection from '@/components/sections/USASection'
import PartnershipSection from '@/components/sections/PartnershipSection'
import TechSection from '@/components/sections/TechSection'

export const metadata: Metadata = {
  description:
    'Drop Network Connective delivers end-to-end FTTX design and engineering — HLD, LLD, GIS mapping, construction drawings, splice sheet preparation and permitting support for telecom operators, ISPs and contractors across the USA and India.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid limit={6} />
      <AboutSection compact />
      <WhyChooseUs />
      <USASection />
      <PartnershipSection compact />
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
              Share your scope, timeline and engineering requirements — our team will respond within one business day.
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
