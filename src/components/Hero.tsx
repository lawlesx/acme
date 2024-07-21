import Particles from './magicui/particles'
import SparklesText from './magicui/sparkles-text'

const Hero = () => {
  return (
    <div className='flex h-[80vh] flex-col items-center justify-center gap-10'>
      <h1 className='relative flex flex-col gap-4 text-center text-5xl font-thin text-white'>
        Capture Every{' '}
        <span className='flex flex-col gap-4 font-bold'>
          {['Thought', 'Anywhere', 'Anytime.'].map((item, i) => (
            <SparklesText key={i} text={item} sparklesCount={4} colors={{ first: '#FF0F80', second: '#FFAE03' }} />
          ))}
        </span>
      </h1>
      <p className='mx-auto w-3/4 text-center text-base text-[#D9D9D9]'>
        Capture and organize ideas effortlessly with AI-powered assistance and secure protection. Fast, ergonomic, and
        reliable.
      </p>

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
    </div>
  )
}

export default Hero
