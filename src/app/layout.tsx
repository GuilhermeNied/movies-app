import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { LayoutProvider } from './LayoutProvider'

const poppins = Poppins({ subsets: ['latin'], weight: '400', variable: '--font-poppins' })

export const metadata: Metadata = {
  title: 'Movies app',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-zinc-800 text-white`}>
        <LayoutProvider>
          <main>
            {children}
          </main>
        </LayoutProvider>
      </body>
    </html>
  )
}
