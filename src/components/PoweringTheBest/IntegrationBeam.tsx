'use client'
import { AnimatedBeam } from '@/components/magicui/animated-beam'
import { cn } from '@/lib/utils'
import React, { forwardRef, useRef } from 'react'
import { GoogleDocsIcon, GoogleDriveIcon, NotionIcon, OpenAiIcon, WhatsAppIcon } from '../icons'
import Logo from '../Logo'

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

const IntegrationBeam = ({ className }: { className?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const div1Ref = useRef<HTMLDivElement>(null)
  const div2Ref = useRef<HTMLDivElement>(null)
  const div3Ref = useRef<HTMLDivElement>(null)
  const div5Ref = useRef<HTMLDivElement>(null)
  const div6Ref = useRef<HTMLDivElement>(null)
  const div7Ref = useRef<HTMLDivElement>(null)

  return (
    <div
      className={cn(
        'relative flex h-[400px] w-4/5 items-center justify-center overflow-hidden lg:size-[500px]',
        className
      )}
      ref={containerRef}
    >
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

export default IntegrationBeam
