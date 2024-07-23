import RetroGrid from '../magicui/retro-grid'
import IntegrationBeam from './IntegrationBeam'

const PoweringTheBest = () => {
  return (
    <section className='relative z-0 flex h-screen w-full flex-col items-center justify-center gap-0 lg:flex-row lg:gap-20'>
      <div className='flex w-full flex-col gap-4 px-4 lg:w-[400px] lg:px-0'>
        <h1 className='text-3xl font-bold text-white'>{`Powering the world's best product teams.`}</h1>
        <p className='text-base font-light tracking-wider text-gray-300'>
          Install one of our verified integrations, or build your own with our API. Because a great knowledge management
          system should work with everything you use on a daily basis.
        </p>
      </div>
      <IntegrationBeam />
      <RetroGrid />
    </section>
  )
}

export default PoweringTheBest
