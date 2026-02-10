import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from 'next-themes'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SplashScreen from '@/components/SplashScreen'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Atul Gulia - Full-Stack Developer',
  description: 'MCA Final Year | AI/ML • Full-Stack • 3D Web',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute='class' // important
          defaultTheme='dark'
          enableSystem={true}
          disableTransitionOnChange
        >
          <Navbar />
          <SplashScreen />
          <main className='pt-16'>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
