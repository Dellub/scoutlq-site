import { Achievements } from '@/components/sections/achievement'
import { Faq } from '@/components/sections/faq'
import { Features } from '@/components/sections/features'
import { Footer } from '@/components/sections/footer'
import { Header } from '@/components/sections/header'
import { Hero } from '@/components/sections/hero'
import { HowItWorks } from '@/components/sections/howItWorks'
import { Pricing } from '@/components/sections/pricing'
import { Problem } from '@/components/sections/problem'
import { Solution } from '@/components/sections/solution'
import { Testimonials } from '@/components/sections/testimonials'

export default function Home() {
  return (
    <div className="flex flex-col relative">
      <Header />

      <main className="bg-background">
        <Hero />
        <Problem />
        <Solution />
        <Achievements />
        <Features />
        <HowItWorks />
        <Pricing />
        <Faq />
        <Testimonials />
      </main>

      <Footer />
    </div>
  )
}
