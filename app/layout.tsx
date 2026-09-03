import type { ReactNode } from 'react'
import { Roboto } from 'next/font/google'

import '../styles/globals.css'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-roboto',
  display: 'swap',
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={roboto.variable} data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  )
}
