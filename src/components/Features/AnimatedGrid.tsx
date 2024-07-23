import { BentoCard, BentoGrid } from '@/components/magicui/bento-grid'
import Marquee from '@/components/magicui/marquee'
import { cn } from '@/lib/utils'
import { CalendarIcon, FileTextIcon } from '@radix-ui/react-icons'
import { BellIcon, Share2Icon } from 'lucide-react'
import IntegrationBeam from '../PoweringTheBest/IntegrationBeam'
import NotificationList from '../ProjectUpdates/NotificationList'

const files = [
  {
    name: 'bitcoin.pdf',
    body: 'Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto.',
  },
  {
    name: 'finances.xlsx',
    body: 'A spreadsheet or worksheet is a file made of rows and columns that help sort data, arrange data easily, and calculate numerical data.',
  },
  {
    name: 'logo.svg',
    body: 'Scalable Vector Graphics is an Extensible Markup Language-based vector image format for two-dimensional graphics with support for interactivity and animation.',
  },
  {
    name: 'Sprint Planning.docx',
    body: 'Tasks are broken down into small, manageable parts, and the team plans which items to complete during the next sprint.',
  },
  {
    name: 'seed.txt',
    body: 'A seed phrase, seed recovery phrase or backup seed phrase is a list of words which store all the information needed to recover Bitcoin funds on-chain.',
  },
]

const features = [
  {
    Icon: FileTextIcon,
    name: 'Save your files',
    description: 'We automatically save your files as you type.',
    href: '#',
    cta: 'Learn more',
    className: 'col-span-3 lg:col-span-1',
    background: (
      <Marquee
        pauseOnHover
        className='absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)]'
      >
        {files.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              'relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4',
              'border-gray-50/[.1] bg-gray-50/[.10] hover:bg-gray-50/[.15]',
              'transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none'
            )}
          >
            <div className='flex flex-row items-center gap-2'>
              <div className='flex flex-col'>
                <figcaption className='text-sm font-medium text-white'>{f.name}</figcaption>
              </div>
            </div>
            <blockquote className='mt-2 text-xs text-gray-300'>{f.body}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: BellIcon,
    name: 'Notifications',
    description: 'Get notified when something happens.',
    href: '#',
    cta: 'Learn more',
    className: 'col-span-3 lg:col-span-2',
    background: (
      <NotificationList className='absolute right-2 top-4 h-[300px] w-[600px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105' />
    ),
  },
  {
    Icon: Share2Icon,
    name: 'Integrations',
    description: 'Collaborator across your favorite tools.',
    href: '#',
    cta: 'Learn more',
    className: 'col-span-3 lg:col-span-2',
    background: (
      <div className='absolute right-2 top-4 h-[300px] w-[600px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105'>
        <IntegrationBeam className='lg:h-[300px] lg:w-[600px]' />
      </div>
    ),
  },
  {
    Icon: CalendarIcon,
    name: 'Calendar',
    description: 'Use the calendar to filter your files by date.',
    className: 'col-span-3 lg:col-span-1',
    href: '#',
    cta: 'Learn more',
    background: (
      <div className='absolute right-0 top-0 flex h-full w-full origin-top flex-col items-center rounded-md pt-10 transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105'>
        {[
          ['1st', '2nd', '3rd', '4th'],
          ['11th', '12th', '13th', '14th'],
          ['22nd', '23rd', '24th', '25th'],
        ].map((rows, i) => (
          <div className='flex items-center justify-center gap-4 text-6xl text-white' key={i}>
            {rows.map((day, j) => (
              <span key={j}>{day}</span>
            ))}
          </div>
        ))}
      </div>
    ),
  },
]

const AnimatedGrid = () => {
  return (
    <BentoGrid className='w-1/2'>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  )
}

export default AnimatedGrid
