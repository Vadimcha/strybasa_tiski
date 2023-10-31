import type { Metadata } from 'next'
import '@/config/reset.css'
import {alumniSans} from "@/config/fonts/fonts"
import './globals.css'
import styles from './layout.module.scss'

export const metadata: Metadata = {
  title: 'Стройбаза «Тиски»',
  description: 'Generated by create next app',
  icons: [
      '/img/favicon.png'
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${alumniSans.className} ${styles.layout}`}>
        {children}
      </body>
    </html>
  )
}
