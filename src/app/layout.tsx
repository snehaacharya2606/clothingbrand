import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
})

export const metadata: Metadata = {
  title: 'Abani',
  description: 'Abani multi-purpose eCommerce store',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`template-default template-all ${dmSans.variable}`}>
      <head>
        <link rel="stylesheet" href="/assets/styles/styles.css" media="all" />
      </head>
      <body>{children}</body>
    </html>
  )
}
