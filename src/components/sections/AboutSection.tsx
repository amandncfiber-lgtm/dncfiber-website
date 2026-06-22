import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FadeIn, CheckItem } from '@/components/ui'

export default function AboutSection({ compact = false }: { compact?: boolean }) {
  return (
    <section className="section-pad bg-gray-950">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left images */}
          <FadeIn direction="left" className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
              <Image
                src="/images/fiber-splicing.png"
                alt="Fiber optic cable fusion splicing close-up"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-4 pt-8">
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/images/gis-mapping-software.png"
                  alt="GIS mapping software showing spatial data analysis"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="bg-blue-600 rounded-2xl p-5 text-white">
                <div className="font-display font-700 text-3xl mb-1">360°</div>
                <div className="text-sm text-blue-200">Lifecycle Engineering</div>
                <div className="text-xs text-blue-300 mt-1">Feasibility → As-Built</div>
              </div>
            </div>
          </FadeIn>

          {/* Right content */}
          <FadeIn direction="right">
            <div className="eyebrow text-blue-400 before:bg-blue-400">About Drop Network Connective</div>
            <h2 className="font-display font-700 text-4xl lg:text-5xl text-white leading-tight mb-6">
              Engineering the backbone of next-generation fiber networks.
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Drop Network Connective is a telecom engineering organization delivering end-to-end FTTX design and engineering solutions. Based in Raipur, Chhattisgarh, India, our engineering network consists of experienced telecom professionals with deep expertise in GIS, HLD, LLD, construction drawings, permitting support, fiber documentation and network planning.
            </p>
            {!compact && (
              <p className="text-gray-400 leading-relaxed mb-8">
                We provide scalable engineering support for telecom operators, contractors, ISPs and engineering firms across the United States and India. Our team combines field understanding, GIS intelligence and telecom engineering expertise to support successful network deployments from feasibility through final construction delivery.
              </p>
            )}
            <ul className="flex flex-col gap-3 mb-8">
              {[
                'FTTX Design — HLD, LLD and OSP Engineering',
                'GIS Mapping — ArcGIS, QGIS, IQGeo',
                'Construction Drawings and Permit Packages',
                'Splice Sheet Preparation and Fiber Documentation',
                'Permitting Support and Utility Coordination',
                'USA & India Project Support',
              ].map(item => (
                <CheckItem key={item} dark>{item}</CheckItem>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <Link href="/about" className="btn-primary">
                Learn More <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className="btn-outline-white">
                Get In Touch
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}