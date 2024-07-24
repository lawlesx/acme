import { DiscordLogoIcon, GitHubLogoIcon, InstagramLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import Logo from './Logo'
import Meteors from './magicui/meteors'

const Footer = () => {
  return (
    <footer className='relative mt-20 h-full w-full overflow-hidden lg:min-h-[50vh]'>
      <Meteors number={30} />
      <div className='flex flex-col gap-20 border-t border-white/15 px-4 py-10 lg:mx-auto lg:w-3/5 lg:p-10'>
        <div className='flex w-full flex-col items-start justify-between lg:flex-row'>
          <div className='flex flex-col'>
            <div className='flex items-center gap-3'>
              <Logo className='h-20 w-20' />
              <h1 className='pt-2 text-4xl text-white'>Acme</h1>
            </div>
            <p className='text-light text-xl text-white/80'>Used by seriously productive people.</p>
            <div className='mt-4 flex cursor-pointer items-center gap-4'>
              <TwitterLogoIcon className='h-6 w-6 text-white' />
              <GitHubLogoIcon className='h-6 w-6 text-white' />
              <DiscordLogoIcon className='h-6 w-6 text-white' />
              <InstagramLogoIcon className='h-6 w-6 text-white' />
            </div>
          </div>
          <div className='flex gap-20 pt-10 lg:pt-4'>
            <div className='flex flex-col gap-4 lg:items-end'>
              <h2 className='text-lg tracking-widest text-white'>Product</h2>
              {['Features', 'Pricing', 'Changelog', 'Integration', 'Docs'].map((item, i) => (
                <Link
                  key={i}
                  href='#'
                  className='text-base font-light tracking-wider text-white/70 transition-colors hover:text-white'
                >
                  {item}
                </Link>
              ))}
            </div>
            <div className='flex flex-col gap-4 lg:items-end'>
              <h2 className='text-lg tracking-widest text-white'>Company</h2>
              {['About Us', 'Blog', 'Careers', 'Brand'].map((item, i) => (
                <Link
                  key={i}
                  href='#'
                  className='text-base font-light tracking-wider text-white/70 transition-colors hover:text-white'
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className='flex w-full flex-col justify-between gap-4 lg:flex-row lg:gap-0'>
          <p className='text-base font-light text-white/70'>© 2024 Acme. All rights reserved.</p>
          <div className='flex gap-10'>
            <Link href='#' className='text-white/70 hover:text-white'>
              Privacy Policy
            </Link>
            <Link href='#' className='text-white/70 hover:text-white'>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
