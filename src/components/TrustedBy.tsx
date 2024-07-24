import Image from 'next/image'

const TrustedBy = () => {
  return (
    <section className='flex h-[70vh] w-full flex-col items-center justify-center gap-10 overflow-hidden lg:flex-row lg:gap-20'>
      <h1 className='text-center text-3xl font-semibold text-white md:text-left'>Trusted by thousands of teams.</h1>
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
