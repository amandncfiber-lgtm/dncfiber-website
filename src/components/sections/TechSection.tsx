import { TECHNOLOGIES } from '@/lib/utils'
import { SectionHeader, StaggerContainer, StaggerItem } from '@/components/ui'

export default function TechSection({ dark = false }: { dark?: boolean }) {
  return (
    <section className={`section-pad ${dark ? 'bg-gray-950' : 'bg-gray-50'}`}>
      <div className="container-wide">
        <SectionHeader
          eyebrow="Software & Platforms"
          title={<>Tools We <span className={dark ? 'text-blue-400' : 'gradient-text'}>Deliver In</span></>}
          subtitle="Our engineering teams operate daily in the same GIS, CAD and telecom platforms your organization uses — no workflow friction, no ramp-up time."
          dark={dark}
          center
        />

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {TECHNOLOGIES.map((tech) => (
            <StaggerItem key={tech.name}>
              <div className={`rounded-2xl p-6 border h-full flex flex-col transition-all duration-300 group ${
                dark
                  ? 'bg-white/4 border-white/8 hover:bg-white/8 hover:border-white/15'
                  : 'bg-white border-gray-100 hover:border-blue-100 hover:shadow-lg hover:shadow-blue-600/5'
              }`}>
                {/* Color accent bar */}
                <div className="w-10 h-1 rounded-full mb-5" style={{ backgroundColor: tech.color }} />
                <div className="mb-1">
                  <span className={`font-mono text-xs tracking-widest uppercase px-2 py-0.5 rounded ${
                    dark ? 'bg-white/8 text-gray-400' : 'bg-gray-100 text-gray-500'
                  }`}>
                    {tech.category}
                  </span>
                </div>
                <h3 className={`font-display font-600 text-lg mt-3 mb-3 ${dark ? 'text-white' : 'text-gray-900'}`}>
                  {tech.name}
                </h3>
                <p className={`text-sm leading-relaxed flex-1 ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {tech.desc}
                </p>
              </div>
            </StaggerItem>
          ))}

          {/* Also Proficient In card */}
          <StaggerItem>
            <div className={`rounded-2xl p-6 border h-full flex flex-col transition-all duration-300 group ${
              dark
                ? 'bg-white/4 border-white/8 hover:bg-white/8 hover:border-white/15'
                : 'bg-white border-gray-100 hover:border-blue-100 hover:shadow-lg hover:shadow-blue-600/5'
            }`}>
              {/* Color accent bar */}
              <div className="w-10 h-1 rounded-full mb-5 bg-gray-400" />
              <div className="mb-1">
                <span className={`font-mono text-xs tracking-widest uppercase px-2 py-0.5 rounded ${
                  dark ? 'bg-white/8 text-gray-400' : 'bg-gray-100 text-gray-500'
                }`}>
                  Additional Tools
                </span>
              </div>
              <h3 className={`font-display font-600 text-lg mt-3 mb-3 ${dark ? 'text-white' : 'text-gray-900'}`}>
                Also Proficient In
              </h3>
              <p className={`text-sm leading-relaxed flex-1 ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
                MicroStation · Bentley OpenRoads · Nearmap · Google Maps API · Microsoft Project
              </p>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  )
}
