import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { ReactNode } from 'react'
import './globals.css'

const gutonFont = localFont({
  src: [
    {
      path: '../fonts/Guton-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Guton-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/Guton-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/Guton-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/Guton-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../fonts/Guton-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
})

export const metadata: Metadata = {
  title: 'Acme',
  description: 'Advanced Note taking app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={gutonFont.className}>{children}</body>
    </html>
  )
}
