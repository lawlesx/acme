import BuiltForYou from '@/components/BuiltForYou'
import Hero from '@/components/Hero'
import IntegrateSection from '@/components/IntegrateSection'
import Navbar from '@/components/Navbar'
import PoweringTheBest from '@/components/PoweringTheBest'

export default function Home() {
  return (
    <main className='relative flex min-h-screen flex-col items-center bg-black py-4'>
      <Navbar />
      <Hero />
      <BuiltForYou />
      <PoweringTheBest />
      <IntegrateSection />
      {/* <div className='absolute w-40 h-screen bg-pink-400 left-[50%]'></div> */}
    </main>
  )
}
