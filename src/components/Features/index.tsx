import AnimatedGrid from './AnimatedGrid'

const Features = () => {
  return (
    <div className='flex w-full flex-col items-center justify-between gap-10 py-10'>
      <div className='flex w-full flex-col gap-2 px-4 lg:w-1/2 lg:px-0'>
        <h1 className='text-3xl font-bold text-white'>What Makes Us Tick</h1>
        <p className='text-base font-light tracking-wider text-white/80'>{`Set the direction and map out your product journey with Acme's purpose-built product planning features.`}</p>
      </div>
      <AnimatedGrid />
    </div>
  )
}

export default Features
