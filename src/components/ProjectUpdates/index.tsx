import Ripple from '../magicui/ripple'
import NotificationList from './NotificationList'

const ProjectUpdates = () => {
  return (
    <section className='flex h-screen w-full flex-col items-center justify-center gap-10 overflow-hidden'>
      <div className='flex w-full flex-col items-center gap-4 px-4'>
        <h1 className='text-center text-3xl font-bold text-white'>Stay on top of changes</h1>
        <p className='text-center text-base font-thin tracking-widest text-white/80'>
          Communicate progress and project health with built-in project updates.
        </p>
      </div>
      <div className='relative flex size-[700px] items-center justify-center'>
        <Ripple />
        <NotificationList />
      </div>
    </section>
  )
}

export default ProjectUpdates
