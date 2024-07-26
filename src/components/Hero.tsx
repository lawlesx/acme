'use client'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import AnimatedGradientText from './magicui/animated-gradient-text'
import Particles from './magicui/particles'
import SparklesText from './magicui/sparkles-text'
import WordPullUp from './magicui/word-pull-up'

const Hero = () => {
  const [showWordsPullUp, setShowWordsPullUp] = useState(false)

  useEffect(() => {
    // Show the WordPullUp component after 1s
    const timeout = setTimeout(() => {
      setShowWordsPullUp(true)
    }, 1000)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <section className='relative z-0 min-h-screen w-full overflow-hidden'>
      <div className='flex h-[80vh] flex-col items-center justify-start gap-10 pt-20'>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className='absolute top-[30%] z-[1] h-full w-[200vw] [mask-image:linear-gradient(to_top,transparent_30%,black_100%)] sm:top-[40%] md:w-full'
        >
          <Image
            src='https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/d4c9c051-1515-488f-00aa-1553b9322900/f=auto,dpr=2,q=95,fit=scale-down,metadata=none'
            alt='ui'
            fill
            className='object-contain lg:object-cover'
            priority
          />
        </motion.div>
        <Particles
          className='absolute inset-0'
          quantity={50}
          ease={80}
          color='#FF0F80'
          refresh
          vx={1}
          vy={1}
          size={1.5}
        />
        <Particles className='absolute inset-0' quantity={100} ease={80} color='#FFAE03' refresh vx={-0.2} vy={-0.2} />
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className='relative z-[2] flex flex-col gap-4 text-center text-5xl font-thin text-white'
        >
          Capture Every{' '}
          <span className='flex flex-col gap-4 font-bold lg:flex-row'>
            {['Thought', 'Anywhere', 'Anytime.'].map((item, i) => (
              <SparklesText key={i} text={item} sparklesCount={4} colors={{ first: '#FF0F80', second: '#FFAE03' }} />
            ))}
          </span>
        </motion.h1>
        {showWordsPullUp ? (
          <WordPullUp
            className='z-[2] w-full px-4 text-center text-xl font-medium tracking-[0.04em] text-white md:text-3xl md:leading-[2rem]'
            words='Change the way you take NOTES.'
          />
        ) : (
          <div className='h-8' />
        )}
        <motion.div
          className='z-[2]'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <AnimatedGradientText className='cursor-pointer rounded-full bg-transparent py-2 backdrop-blur-sm'>
            🎉{' '}
            <h2 className='animate-gradient bg-gradient-to-r from-chili_red via-rose to-aerospace_orange bg-[length:var(--bg-size)_100%] bg-clip-text pl-1 font-bold text-transparent'>
              Request a demo
            </h2>
            <ChevronRight
              className='ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5'
              color='#FF0F80'
            />
          </AnimatedGradientText>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
