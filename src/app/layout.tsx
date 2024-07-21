import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { ReactNode } from 'react'
import './globals.css'

const pangramFont = localFont({
  src: [
    {
      path: '../fonts/PPPangramSans-Bold.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/PPPangramSans-Light.woff',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/PPPangramSans-Medium.woff',
      weight: '400',
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
      <body className={pangramFont.className}>{children}</body>
    </html>
  )
}
