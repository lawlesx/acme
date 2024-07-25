import Image from 'next/image'
import TextReveal from './magicui/text-reveal'

const About = () => {
  return (
    <section className='relative z-0 flex min-h-[16rem] w-full items-center justify-center bg-black'>
      <div className='absolute h-[200vh] w-full'>
        <div className='sticky top-0 flex h-1/2 w-full items-center justify-end pt-[40rem] xl:right-0 xl:pt-0'>
          <div className='relative size-[50vh] [mask-image:linear-gradient(to_bottom,transparent,white,transparent)]'>
            <Image
              src='https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/99eeb9b8-3d99-4191-0081-9f302d26f400/f=auto,dpr=2,q=95,fit=scale-down,metadata=none'
              layout='fill'
              className='object-cover'
              alt='About'
            />
          </div>
        </div>
      </div>
      <TextReveal text='A purpose-built tool for capturing ideas, thoughts, to-dos, planning and building products.' />
    </section>
  )
}

export default About
