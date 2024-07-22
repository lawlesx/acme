import OrbitingCircles from '@/components/magicui/orbiting-circles'
import { cn } from '@/lib/utils'
import { GithubIcon, GoogleDriveIcon, NotionIcon, OpenAiIcon, WhatsAppIcon } from './icons'
import Logo from './Logo'
import GridPattern from './magicui/grid-pattern'

const IntegrateSection = () => {
  return (
    <section className='relative flex h-screen w-full items-center justify-center gap-10 overflow-hidden'>
      <OrbitingIntegrations />
      <div className='flex w-[400px] flex-col gap-4'>
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

export default IntegrateSection

const OrbitingIntegrations = () => {
  return (
    <div className='relative flex h-[500px] w-[500px] flex-col items-center justify-center overflow-hidden rounded-xl'>
      <Logo className='h-12 w-12' />

      {/* Inner Circles */}
      <OrbitingCircles className='size-[30px] border-none bg-transparent' duration={20} delay={20} radius={80}>
        {icons.whatsapp}
      </OrbitingCircles>
      <OrbitingCircles className='size-[30px] border-none bg-transparent' duration={20} delay={10} radius={80}>
        {icons.notion}
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles className='size-[50px] border-none bg-transparent' radius={190} duration={20} reverse>
        {icons.googleDrive}
      </OrbitingCircles>
      <OrbitingCircles className='size-[50px] border-none bg-transparent' radius={190} duration={20} delay={20} reverse>
        {icons.gitHub}
      </OrbitingCircles>
    </div>
  )
}

const icons = {
  gitHub: <GithubIcon className='text-white' />,
  notion: <NotionIcon />,
  openai: <OpenAiIcon />,
  googleDrive: <GoogleDriveIcon />,
  whatsapp: <WhatsAppIcon />,
}
