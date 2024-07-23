'use client'
import OrbitingCircles from '@/components/magicui/orbiting-circles'
import useWindowSize from '@/hooks/useWindowSize'
import { GithubIcon, GoogleDriveIcon, NotionIcon, OpenAiIcon, WhatsAppIcon } from '../icons'
import Logo from '../Logo'

const OrbitingIntegrations = () => {
  const [, width] = useWindowSize()

  const isMobile = width && width < 1024

  return (
    <div className='relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden rounded-xl lg:size-[500px]'>
      <Logo className='h-12 w-12' />

      {/* Inner Circles */}
      <OrbitingCircles
        className='size-[30px] border-none bg-transparent'
        duration={20}
        delay={20}
        radius={isMobile ? 60 : 80}
      >
        {icons.whatsapp}
      </OrbitingCircles>
      <OrbitingCircles
        className='size-[30px] border-none bg-transparent'
        duration={20}
        delay={10}
        radius={isMobile ? 60 : 80}
      >
        {icons.notion}
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className='size-[50px] border-none bg-transparent'
        radius={isMobile ? 120 : 190}
        duration={20}
        reverse
      >
        {icons.googleDrive}
      </OrbitingCircles>
      <OrbitingCircles
        className='size-[50px] border-none bg-transparent'
        radius={isMobile ? 120 : 190}
        duration={20}
        delay={20}
        reverse
      >
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

export default OrbitingIntegrations
