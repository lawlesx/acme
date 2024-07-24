import { ChevronRight } from 'lucide-react'
import AnimatedGradientText from './magicui/animated-gradient-text'
import Particles from './magicui/particles'
import SparklesText from './magicui/sparkles-text'
import WordPullUp from './magicui/word-pull-up'

const Hero = () => {
  return (
    <section className='relative z-0 min-h-screen w-full'>
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
        <div className='z-[1] mx-auto flex w-full flex-col items-center justify-center gap-6 md:flex-row md:gap-10'>
          <WordPullUp
            className='w-4/5 px-4 text-center text-xl font-medium tracking-[0.04em] text-white md:w-[25rem] md:text-3xl md:leading-[2rem]'
            words='Change the way you take NOTES.'
          />
          <div className='hidden h-full w-[2px] bg-white/80 md:block' />
          <p className='w-4/5 text-center text-base text-[#D9D9D9] md:w-[25rem]'>
            Capture and organize ideas effortlessly with AI-powered assistance and secure protection. Fast, ergonomic,
            and reliable.
          </p>
        </div>
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
