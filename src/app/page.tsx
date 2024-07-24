import About from '@/components/About'
import BuiltForYou from '@/components/BuiltForYou'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import IntegrationSection from '@/components/IntegrationSection'

import Navbar from '@/components/Navbar'
import PoweringTheBest from '@/components/PoweringTheBest'
import ProjectUpdates from '@/components/ProjectUpdates'
import ResponsiveNav from '@/components/ResponsiveNav'
import TrustedBy from '@/components/TrustedBy'

export default function Home() {
  return (
    <main className='relative flex min-h-screen flex-col items-center bg-black'>
      <Navbar />
      <Hero />
      <About />
      <BuiltForYou />
      <PoweringTheBest />
      <IntegrationSection />
      <ProjectUpdates />
      <Features />
      <TrustedBy />
      <Footer />
      <ResponsiveNav />
    </main>
  )
}
