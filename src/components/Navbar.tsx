'use client'

import Link from 'next/link'
import Logo from './Logo'
import ShimmerButton from './magicui/shimmer-button'
import ShineBorder from './magicui/shine-border'

const Navbar = () => {
  return (
    <ShineBorder
      className='sticky top-5 z-[1] flex w-full items-center overflow-hidden rounded-lg border border-black bg-transparent px-10 backdrop-blur-3xl md:w-1/2 lg:w-3/5'
      color={['#E9190F', '#FF0F80', '#FE4E00', '#E67F0D', '#FFAE03']}
    >
      <nav className='z-[1] flex w-full items-center justify-between'>
        <div className='flex items-center gap-2'>
          <Logo className='h-12 w-12' />
          <h1 className='pt-1 text-2xl font-medium text-white'>Acme</h1>
        </div>
        <div className='md:flexgap-4 hidden'>
          {navItems.map((item, i) => (
            <Link key={i} href='#' className='group tracking-widest text-white transition-colors'>
              {item}
              <div className='h-[2px] w-0 rounded-full bg-aerospace_yellow transition-all group-hover:w-3/4' />
            </Link>
          ))}
        </div>
        <ShimmerButton shimmerColor='#FF0F80' shimmerSize='0.1em' className='py-2'>
          Get Started
        </ShimmerButton>
      </nav>
    </ShineBorder>
  )
}

export default Navbar

const navItems = ['Changelog', 'Features', 'Pricing', 'Contact']
