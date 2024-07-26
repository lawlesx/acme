'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Logo from './Logo'
import ShimmerButton from './magicui/shimmer-button'
import ShineBorder from './magicui/shine-border'

const Navbar = () => {
  return (
    <motion.div
      className='sticky top-4 z-[1] flex w-full items-center justify-center'
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.5 }}
    >
      <ShineBorder
        className='flex w-full items-center overflow-hidden rounded-lg border border-rose-100 bg-transparent px-10 backdrop-blur-xl md:w-1/2 lg:w-3/5'
        color={['#E9190F', '#FF0F80', '#FE4E00', '#E67F0D', '#FFAE03']}
      >
        <nav className='z-[1] flex w-full items-center justify-between'>
          <div className='flex items-center gap-2'>
            <Logo className='h-12 w-12' />
            <h1 className='pt-1 text-2xl font-medium text-white'>Acme</h1>
          </div>
          <div className='hidden gap-4 md:flex'>
            {navItems.map((item, i) => (
              <Link key={i} href='#' className='group text-sm tracking-widest text-white transition-colors'>
                {item}
                <div className='h-[2px] w-0 rounded-full bg-aerospace_yellow transition-all group-hover:w-3/4' />
              </Link>
            ))}
          </div>
          <ShimmerButton
            shimmerColor='#FF0F80'
            shimmerSize='0.1em'
            className='py-2 text-sm font-semibold tracking-wider text-white'
          >
            Login
          </ShimmerButton>
        </nav>
      </ShineBorder>
    </motion.div>
  )
}

export default Navbar

export const navItems = ['Changelog', 'Features', 'Pricing', 'Contact']
