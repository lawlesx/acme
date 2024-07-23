import { cn } from '@/lib/utils'
import GridPattern from '../magicui/grid-pattern'
import OrbitingIntegrations from './OrbitingIntegration'

const IntegrationSection = () => {
  return (
    <section className='relative flex h-screen w-full flex-col items-center justify-center gap-0 overflow-hidden lg:flex-row lg:gap-10'>
      <OrbitingIntegrations />
      <div className='flex w-full flex-col gap-4 px-4 lg:w-[400px] lg:px-0'>
        <h1 className='text-3xl font-bold text-white'>Integrate with your Notion, Github, Drive and more</h1>
        <p className='text-base font-light tracking-wider text-gray-200'>
          Install one of our verified integrations, or build your own with our API. Because a great knowledge management
          system should work with everything you use on a daily basis.
        </p>
      </div>
      <GridPattern
        width={40}
        height={40}
        className={cn(
          '[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]',
          'inset-x-[15%] inset-y-[-50%] h-[200%] skew-y-12'
        )}
      />
    </section>
  )
}

export default IntegrationSection
