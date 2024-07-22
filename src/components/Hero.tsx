import { ChevronRight } from 'lucide-react'
import AnimatedGradientText from './magicui/animated-gradient-text'
import Particles from './magicui/particles'
import SparklesText from './magicui/sparkles-text'

const Hero = () => {
  return (
    <section className='relative min-h-screen w-full'>
      <div className='flex h-[80vh] flex-col items-center justify-center gap-10'>
        <Particles
          className='absolute inset-0'
          quantity={100}
          ease={80}
          color='#FF0F80'
          refresh
          vx={1}
          vy={1}
          size={1.5}
        />
        <Particles className='absolute inset-0' quantity={100} ease={80} color='#FFAE03' refresh vx={-0.2} vy={-0.2} />
        <h1 className='relative flex flex-col gap-4 text-center text-5xl font-thin text-white'>
          Capture Every{' '}
          <span className='flex flex-col gap-4 font-bold'>
            {['Thought', 'Anywhere', 'Anytime.'].map((item, i) => (
              <SparklesText key={i} text={item} sparklesCount={4} colors={{ first: '#FF0F80', second: '#FFAE03' }} />
            ))}
          </span>
        </h1>
        <p className='z-[1] mx-auto w-full text-center text-base text-[#D9D9D9] md:w-1/3'>
          Capture and organize ideas effortlessly with AI-powered assistance and secure protection. Fast, ergonomic, and
          reliable.
        </p>
        <AnimatedGradientText className='cursor-pointer rounded-full bg-transparent py-2 backdrop-blur-sm'>
          🎉{' '}
          <h2 className='animate-gradient bg-gradient-to-r from-chili_red via-rose to-aerospace_orange bg-[length:var(--bg-size)_100%] bg-clip-text pl-1 font-bold text-transparent'>
            {`Let's begin`}
          </h2>
          <ChevronRight
            className='ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5'
            color='#FF0F80'
          />
        </AnimatedGradientText>
      </div>
    </section>
  )
}

export default Hero
