'use client'
import { AnimatedBeam } from '@/components/magicui/animated-beam'
import { cn } from '@/lib/utils'
import React, { forwardRef, useRef } from 'react'
import { GoogleDocsIcon, GoogleDriveIcon, NotionIcon, OpenAiIcon, WhatsAppIcon } from './icons'
import Logo from './Logo'
import RetroGrid from './magicui/retro-grid'

const PoweringTheBest = () => {
  return (
    <section className='relative flex h-screen w-full items-center justify-center gap-20'>
      <div className='flex w-[400px] flex-col gap-4'>
        <h1 className='text-3xl font-bold text-white'>{`Powering the world's best product teams.`}</h1>
        <p className='text-base font-light tracking-wider text-gray-300'>
          Install one of our verified integrations, or build your own with our API. Because a great knowledge management
          system should work with everything you use on a daily basis.
        </p>
      </div>
      <IntegrationAnimation />
      <RetroGrid />
    </section>
  )
}

export default PoweringTheBest

const Circle = forwardRef<HTMLDivElement, { className?: string; children?: React.ReactNode }>(
  ({ className, children }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white/90 p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]',
          className
        )}
      >
        {children}
      </div>
    )
  }
)

Circle.displayName = 'Circle'

const IntegrationAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const div1Ref = useRef<HTMLDivElement>(null)
  const div2Ref = useRef<HTMLDivElement>(null)
  const div3Ref = useRef<HTMLDivElement>(null)
  const div5Ref = useRef<HTMLDivElement>(null)
  const div6Ref = useRef<HTMLDivElement>(null)
  const div7Ref = useRef<HTMLDivElement>(null)

  return (
    <div className='relative flex h-[500px] w-[500px] items-center justify-center overflow-hidden' ref={containerRef}>
      <div className='flex size-full max-w-lg flex-row items-stretch justify-between gap-10'>
        <div className='flex flex-col justify-center'>
          <Circle ref={div7Ref}>
            <Logo className='size-16' />
          </Circle>
        </div>
        <div className='flex flex-col justify-center'>
          <Circle ref={div6Ref} className='size-16'>
            {icons.openai}
          </Circle>
        </div>
        <div className='flex flex-col justify-center gap-4'>
          <Circle ref={div1Ref}>{icons.googleDrive}</Circle>
          <Circle ref={div2Ref}>{icons.googleDocs}</Circle>
          <Circle ref={div3Ref}>{icons.whatsapp}</Circle>
          <Circle ref={div5Ref}>{icons.notion}</Circle>
        </div>
      </div>

      {/* AnimatedBeams */}
      {[div1Ref, div2Ref, div3Ref, div5Ref, div6Ref].map((ref, i) => (
        <AnimatedBeam
          key={i}
          containerRef={containerRef}
          fromRef={ref}
          toRef={i === 4 ? div7Ref : div6Ref}
          duration={3}
          gradientStartColor='#e9190f'
          gradientStopColor='#ff0f80'
          pathColor='#ffffff'
        />
      ))}
    </div>
  )
}

const icons = {
  notion: <NotionIcon />,
  openai: <OpenAiIcon />,
  googleDrive: <GoogleDriveIcon />,
  whatsapp: <WhatsAppIcon />,
  googleDocs: <GoogleDocsIcon className='size-5' />,
}
