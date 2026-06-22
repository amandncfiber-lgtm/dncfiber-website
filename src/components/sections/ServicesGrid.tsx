import Link from 'next/link'
import { Network, Layers, FileText, Map, Globe, Globe2, Workflow, Cable, Shield, BookOpen, Zap, ArrowRight } from 'lucide-react'
import { SERVICES } from '@/lib/utils'
import { SectionHeader, StaggerContainer, StaggerItem } from '@/components/ui'

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Network, Layers, FileText, Map, Globe, Globe2, Workflow, Cable, Shield, BookOpen, Zap,
}

export default function ServicesGrid({ limit }: { limit?: number }) {
  const services = limit ? SERVICES.slice(0, limit) : SERVICES

  return (
    <section className="section-pad bg-white">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Engineering Services"
          title={<>Our <span className="gradient-text">Service Capabilities</span></>}
          subtitle="Comprehensive FTTX design and telecom engineering services delivered with precision, built to your standards and workflow."
          center
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => {
            const Icon = ICON_MAP[svc.icon] || Network
            return (
              <StaggerItem key={svc.id}>
                <div className="card group h-full flex flex-col">
                  <div className="w-12 h-12 bg-blue-50 group-hover:bg-blue-600 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300">
                    <Icon size={22} className="text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-display font-600 text-lg text-gray-900 mb-3">{svc.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-5 flex-1">{svc.short}</p>
                  <ul className="flex flex-col gap-2">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-gray-500 font-mono">
                        <span className="w-1 h-1 rounded-full bg-blue-500" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            )
          })}
        </StaggerContainer>

        {limit && (
          <div className="text-center mt-12">
            <Link href="/services" className="btn-primary">
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
