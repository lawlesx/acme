'use client'
import { AnimatedList } from '@/components/magicui/animated-list'
import { cn } from '@/lib/utils'

const NotificationList = ({ className }: { className?: string }) => {
  return (
    <div className={cn('relative flex h-[600px] w-full flex-col overflow-hidden', className)}>
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  )
}

export default NotificationList

interface Item {
  name: string
  description: string
  icon: string
  color: string
  time: string
}

let notifications = [
  {
    name: 'Updated budget',
    description: 'Updated budget for Q3 2024',
    time: '15m ago',

    icon: '💸',
    color: '#00C9A7',
  },
  {
    name: 'New Collaborator',
    description: 'Ritika has joined the project',
    time: '10m ago',
    icon: '👤',
    color: '#FFB800',
  },
  {
    name: 'Feedback',
    description: 'Harsh sent feedback on the project',
    time: '5m ago',
    icon: '💬',
    color: '#FF3D71',
  },
  {
    name: 'Quick fix',
    description: 'Fixed the bug in the project',
    time: '2m ago',
    icon: '🗞️',
    color: '#1E86FF',
  },
]

notifications = Array.from({ length: 10 }, () => notifications).flat()

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        'relative mx-auto min-h-fit w-full max-w-[380px] cursor-pointer overflow-hidden rounded-2xl p-4 lg:max-w-[400px]',
        // animation styles
        'transition-all duration-200 ease-in-out hover:scale-[103%]',
        'transform-gpu bg-transparent backdrop-blur-md [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]'
      )}
    >
      <div className='flex flex-row items-center gap-3'>
        <div
          className='flex size-10 items-center justify-center rounded-2xl'
          style={{
            backgroundColor: color,
          }}
        >
          <span className='text-lg'>{icon}</span>
        </div>
        <div className='flex flex-col overflow-hidden'>
          <figcaption className='flex flex-row items-center whitespace-pre text-lg font-medium text-white'>
            <span className='text-sm sm:text-lg'>{name}</span>
            <span className='mx-1'>·</span>
            <span className='text-xs text-gray-300'>{time}</span>
          </figcaption>
          <p className='text-sm font-normal text-white/60'>{description}</p>
        </div>
      </div>
    </figure>
  )
}
