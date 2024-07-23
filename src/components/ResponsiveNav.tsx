'use client'
import useOutsideClick from '@/hooks/useOutsideClick'
import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import { MenuIcon, X } from 'lucide-react'
import Link from 'next/link'
import { useRef, useState } from 'react'
import DotPattern from './magicui/dot-pattern'
import { NeonGradientCard } from './magicui/neon-gradient-card'
import ShimmerButton from './magicui/shimmer-button'
import { navItems } from './Navbar'

const ResponsiveNav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useOutsideClick(ref, () => {
    setIsOpen(false)
  })

  return (
    <AnimatePresence mode='wait'>
      {isOpen ? (
        <motion.nav
          ref={ref}
          initial={{
            opacity: 0,
            x: 50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          exit={{
            opacity: 0,
            x: 50,
          }}
          className='fixed right-0 top-0 z-10 flex h-screen w-3/4 flex-col items-center justify-between bg-transparent p-4 text-white backdrop-blur-xl'
        >
          <DotPattern className={cn('[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]')} />
          <X className='ml-auto h-6 w-6 cursor-pointer' onClick={() => setIsOpen(false)} />
          <div className='z-[1] mb-20 mt-10 flex w-full flex-col items-end gap-6'>
            {navItems.map((item, i) => (
              <Link key={i} href='#' className='text-2xl tracking-wider text-white'>
                {item}
              </Link>
            ))}
            <ShimmerButton shimmerColor='#FF0F80' shimmerSize='0.1em' className='py-2'>
              Get Started
            </ShimmerButton>
          </div>
        </motion.nav>
      ) : (
        <motion.button
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: 50,
          }}
          className='fixed bottom-4 right-4 md:hidden'
          onClick={() => setIsOpen(true)}
        >
          <NeonGradientCard
            className='flex h-14 w-14 items-center justify-center rounded-full'
            borderRadius={100}
            borderSize={2}
            neonColors={{
              firstColor: '#FF0F80',
              secondColor: '#FFAE03',
            }}
          >
            <MenuIcon className='h-6 w-6 text-white' />
          </NeonGradientCard>
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default ResponsiveNav
