import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Users, Globe, Layers, Zap, Shield, Clock } from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem, SectionHeader } from '@/components/ui'

const MODELS = [
  { icon: Globe, title: 'White Label Support', desc: 'Full design deliverables under your brand — invisible to end clients.' },
  { icon: Users, title: 'Offshore Engineering Team', desc: 'Dedicated engineers integrated into your existing project workflow.' },
  { icon: Layers, title: 'Resource Augmentation', desc: 'Scalable capacity added to your team on a project or retainer basis.' },
  { icon: Zap, title: 'Dedicated Design Support', desc: 'Assigned engineering resources focused exclusively on your projects.' },
  { icon: Shield, title: 'USA Project Support', desc: 'Engineering aligned to US standards, deliverable templates and workflows.' },
  { icon: Clock, title: 'India Project Support', desc: 'Domestic telecom engineering for Indian operators and infrastructure firms.' },
]

export default function PartnershipSection({ compact = false }: { compact?: boolean }) {
  return (
    <section className="section-pad bg-white overflow-hidden">
      <div className="container-wide">
        {!compact && (
          <SectionHeader
            eyebrow="Engineering Partnership"
            title={<>Need Additional <span className="gradient-text">Engineering Capacity?</span></>}
            subtitle="Drop Network Connective can work as an engineering partner for telecom operators, contractors, ISPs and engineering firms — seamlessly integrated into your workflow."
            center
          />
        )}
        {compact && (
          <FadeIn className="mb-12">
            <div className="eyebrow">Engineering Partnership</div>
            <h2 className="heading-lg text-gray-900 mb-4">
              Need additional<br />
              <span className="gradient-text">engineering capacity?</span>
            </h2>
            <p className="body-lg max-w-xl">
              Partner with Drop Network Connective for offshore engineering support, white-label design and flexible resource augmentation.
            </p>
          </FadeIn>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {MODELS.map(({ icon: Icon, title, desc }) => (
                <StaggerItem key={title}>
                  <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 hover:border-blue-100 hover:bg-blue-50/30 transition-all group">
                    <div className="w-10 h-10 bg-white group-hover:bg-blue-600 border border-gray-200 group-hover:border-blue-600 rounded-xl flex items-center justify-center mb-4 transition-all shadow-sm">
                      <Icon size={18} className="text-gray-600 group-hover:text-white transition-colors" />
                    </div>
                    <h4 className="font-display font-600 text-gray-900 mb-1.5">{title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <FadeIn className="mt-8 flex flex-wrap gap-4">
              <Link href="/partnership" className="btn-primary">
                Explore Partnership <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className="btn-secondary">
                Start a Conversation
              </Link>
            </FadeIn>
          </div>

          <FadeIn direction="right">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=85"
                alt="Engineering team collaboration"
                fill className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <blockquote className="text-white">
                  <p className="text-lg font-medium leading-relaxed mb-3">
                    &ldquo;Our engineering network provides scalable FTTX design capacity that adapts to project volume without compromising on quality or turnaround.&rdquo;
                  </p>
                  <footer className="font-mono text-xs text-blue-300 tracking-widest uppercase">
                    Drop Network Connective Engineering Team
                  </footer>
                </blockquote>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
