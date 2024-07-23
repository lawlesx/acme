import BuiltForYou from '@/components/BuiltForYou'
import Features from '@/components/Features'
import Hero from '@/components/Hero'
import IntegrationSection from '@/components/IntegrationSection'

import Navbar from '@/components/Navbar'
import PoweringTheBest from '@/components/PoweringTheBest'
import ProjectUpdates from '@/components/ProjectUpdates'
import ResponsiveNav from '@/components/ResponsiveNav'

export default function Home() {
  return (
    <main className='relative flex min-h-screen flex-col items-center bg-black py-4'>
      <Navbar />
      <Hero />
      <BuiltForYou />
      <PoweringTheBest />
      <IntegrationSection />
      <ProjectUpdates />
      <Features />
      <ResponsiveNav />
    </main>
  )
}
