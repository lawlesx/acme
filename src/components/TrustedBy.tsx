import { cn } from '@/lib/utils'
import Image from 'next/image'
import GridPattern from './magicui/grid-pattern'

const TrustedBy = () => {
  return (
    <section className='relative flex h-[70vh] w-full flex-col items-center justify-center gap-10 overflow-hidden lg:flex-row lg:gap-20'>
      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        strokeDasharray={'4 2'}
        squares={[
          [4, 4],
          [5, 1],
          [8, 2],
          [5, 3],
          [5, 5],
          [10, 10],
          [12, 15],
          [15, 10],
          [10, 15],
          [15, 10],
          [10, 15],
          [15, 10],
        ]}
        className={cn('[mask-image:linear-gradient(to_bottom,transparent,white,transparent)]')}
      />
      <h1 className='px-4 text-center text-3xl font-semibold text-white md:px-0 md:text-left'>
        Trusted by thousands of teams.
      </h1>
      <div className='grid grid-cols-2 gap-4 md:grid-cols-3'>
        {[
          '/images/vercel.svg',
          '/images/bcg.svg',
          '/images/outfront.svg',
          '/images/retool.svg',
          '/images/akqa.svg',
          '/images/zimmer.svg',
        ].map((url, i) => (
          <div className='relative h-10 w-40' key={i}>
            <Image src={url} fill className='object-contain' alt='' />
          </div>
        ))}
      </div>
    </section>
  )
}

export default TrustedBy
