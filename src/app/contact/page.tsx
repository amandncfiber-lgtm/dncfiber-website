import type { Metadata } from 'next'
import Image from 'next/image'
import ContactSection from '@/components/sections/ContactSection'
import { FadeIn } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Drop Network Connective for FTTX design, GIS mapping, construction drawings, permitting and telecom engineering services. Based in Raipur, India — serving USA and India projects.',
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80"
            alt="Contact telecom engineering"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/70 to-gray-950" />
        <div className="container-wide relative z-10">
          <FadeIn>
            <div className="eyebrow text-blue-400 before:bg-blue-400">Get In Touch</div>
            <h1 className="font-display font-700 text-5xl lg:text-7xl text-white leading-none mb-6">
              Contact<br />
              <span className="text-blue-400">Our Team</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
              Share your project requirements and our engineering team will respond within one business day.
            </p>
          </FadeIn>
        </div>
      </section>

      <ContactSection />
    </>
  )
}
