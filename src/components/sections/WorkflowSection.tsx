'use client'

import { WORKFLOW_STEPS } from '@/lib/utils'
import { SectionHeader, FadeIn } from '@/components/ui'

export default function WorkflowSection() {
  return (
    <section className="section-pad bg-white overflow-hidden">
      <div className="container-wide">
        <SectionHeader
          eyebrow="End-to-End Project Flow"
          title={<>From Scope to <span className="gradient-text">Delivery</span></>}
          subtitle="A structured, quality-driven engineering workflow covering every phase from initial client requirement to construction-ready final package."
          center
        />

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:block relative">
          {/* Connecting line */}
          <div className="absolute top-8 left-[5%] right-[5%] h-px bg-gradient-to-r from-blue-600/10 via-blue-600 to-blue-600/10 z-0" />

          <div className="grid grid-cols-10 gap-0 relative z-10">
            {WORKFLOW_STEPS.map((step, i) => (
              <FadeIn key={step.step} delay={i * 0.06} direction="up" className="flex flex-col items-center text-center px-1">
                {/* Node */}
                <div className="w-16 h-16 rounded-full bg-white border-2 border-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/15 mb-4 relative">
                  <span className="font-mono font-600 text-blue-600 text-sm">{step.step}</span>
                  {/* Inner glow */}
                  <div className="absolute inset-0 rounded-full bg-blue-600/8" />
                </div>
                <h4 className="font-display font-600 text-xs text-gray-900 leading-tight mb-1">{step.label}</h4>
                <p className="text-xs text-gray-400 leading-snug">{step.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="lg:hidden relative pl-8">
          <div className="absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-blue-600/20 via-blue-600 to-blue-600/20" />
          <div className="flex flex-col gap-8">
            {WORKFLOW_STEPS.map((step, i) => (
              <FadeIn key={step.step} delay={i * 0.05} className="relative">
                <div className="absolute -left-8 top-0 w-6 h-6 rounded-full bg-blue-600 border-2 border-white shadow-md flex items-center justify-center">
                  <span className="font-mono text-white text-xs font-600">{i + 1}</span>
                </div>
                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                  <div className="font-mono text-xs text-blue-600 tracking-widest uppercase mb-1">Step {step.step}</div>
                  <h4 className="font-display font-600 text-gray-900 mb-1">{step.label}</h4>
                  <p className="text-sm text-gray-500">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
