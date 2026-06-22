'use client'

import { useState } from 'react'
import { FIBER_COLORS } from '@/lib/utils'
import { SectionHeader, FadeIn } from '@/components/ui'

export default function FiberColorCode() {
  const [selected, setSelected] = useState<number | null>(null)

  return (
    <section className="section-pad bg-gray-950">
      <div className="container-wide">
        <SectionHeader
          eyebrow="TIA-598 Fiber Color Code"
          title={<>12-Fiber <span className="text-blue-400">Color Code</span> Standard</>}
          subtitle="The industry-standard TIA-598 12-color identification system for individual fibers within a cable assembly. Select a fiber to inspect its designation."
          dark
          center
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Cable Cross-Section Visual */}
          <FadeIn direction="left" className="flex justify-center">
            <div className="relative">
              <svg viewBox="0 0 360 360" className="w-80 h-80">
                {/* Outer jacket */}
                <circle cx="180" cy="180" r="165" fill="#1a1a2e" stroke="#2a2a4e" strokeWidth="2" />
                <circle cx="180" cy="180" r="155" fill="#13131f" />

                {/* Central element */}
                <circle cx="180" cy="180" r="18" fill="#0d0d18" stroke="#1e1e35" strokeWidth="1.5" />

                {/* 12 buffer tubes arranged in a ring */}
                {FIBER_COLORS.map((color, i) => {
                  const angle = (i / 12) * Math.PI * 2 - Math.PI / 2
                  const r = 100
                  const cx = Math.round((180 + r * Math.cos(angle)) * 1000) / 1000
                  const cy = Math.round((180 + r * Math.sin(angle)) * 1000) / 1000
                  const isSelected = selected === i

                  return (
                    <g key={color.id} onClick={() => setSelected(selected === i ? null : i)} className="cursor-pointer">
                      {/* Glow when selected */}
                      {isSelected && (
                        <circle cx={cx} cy={cy} r="28" fill={color.light + '22'} />
                      )}
                      {/* Buffer tube */}
                      <circle
                        cx={cx}
                        cy={cy}
                        r="22"
                        fill={color.hex}
                        stroke={isSelected ? color.light : '#ffffff15'}
                        strokeWidth={isSelected ? 2.5 : 1}
                        opacity={selected !== null && !isSelected ? 0.35 : 1}
                        style={{ transition: 'all 0.25s' }}
                      />
                      {/* Fiber dot inside */}
                      <circle cx={cx} cy={cy} r="6" fill="rgba(255,255,255,0.6)" />
                      {/* Number */}
                      <text
                        x={cx}
                        y={cy + 35}
                        textAnchor="middle"
                        fontSize="10"
                        fill={isSelected ? color.light : '#4a4a6a'}
                        fontFamily="JetBrains Mono, monospace"
                        fontWeight="600"
                        style={{ transition: 'fill 0.25s' }}
                      >
                        F{i + 1}
                      </text>
                    </g>
                  )
                })}

                {/* Center label */}
                <text x="180" y="175" textAnchor="middle" fontSize="12" fill="#4a4a7a" fontFamily="JetBrains Mono, monospace" fontWeight="600">12F</text>
                <text x="180" y="192" textAnchor="middle" fontSize="9" fill="#2a2a4a" fontFamily="JetBrains Mono, monospace">CABLE</text>
              </svg>

              {/* Selected info popup */}
              {selected !== null && (
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-gray-900 border border-white/10 rounded-xl px-5 py-3 text-center w-56 shadow-2xl">
                  <div className="flex items-center gap-2 justify-center mb-1">
                    <div className="w-4 h-4 rounded-full border border-white/20" style={{ backgroundColor: FIBER_COLORS[selected].hex }} />
                    <span className="font-display font-600 text-white text-sm">{FIBER_COLORS[selected].name}</span>
                  </div>
                  <div className="font-mono text-xs text-gray-400">Fiber {selected + 1} of 12 · {FIBER_COLORS[selected].hex}</div>
                </div>
              )}
            </div>
          </FadeIn>

          {/* Color list */}
          <FadeIn direction="right">
            <div className="grid grid-cols-2 gap-2">
              {FIBER_COLORS.map((color, i) => (
                <button
                  key={color.id}
                  onClick={() => setSelected(selected === i ? null : i)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl border transition-all duration-200 text-left ${
                    selected === i
                      ? 'bg-white/8 border-white/20'
                      : 'bg-white/3 border-white/5 hover:bg-white/6 hover:border-white/10'
                  }`}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex-shrink-0 shadow-inner"
                    style={{
                      backgroundColor: color.hex,
                      boxShadow: selected === i ? `0 0 12px ${color.light}55` : undefined,
                      border: color.name === 'White' ? '1px solid rgba(255,255,255,0.2)' : undefined,
                    }}
                  />
                  <div>
                    <div className="font-medium text-sm text-white">{color.name}</div>
                    <div className="font-mono text-xs text-gray-500">Fiber {i + 1}</div>
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-8 bg-white/4 border border-white/8 rounded-2xl p-5">
              <p className="font-mono text-xs text-blue-400 tracking-widest uppercase mb-2">Standard</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                The TIA-598-C standard defines the 12-color sequence for fiber identification in loose-tube and ribbon cable assemblies. Drop Network Connective uses this standard in all splice sheet preparation and fiber allocation documentation.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
