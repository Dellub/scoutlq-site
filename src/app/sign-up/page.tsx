import { Contact } from '@/components/sections/contact'
import { Footer } from '@/components/sections/footer'
import { Header } from '@/components/sections/header'

export default function SignUp() {
  return (
    <div className="flex flex-col relative min-h-screen">
      <Header />

      <main className="bg-background flex-1">
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
