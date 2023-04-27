import './globals.css'
import localFont from 'next/font/local'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const bruno = localFont({ src: './font/BrunoAce-Regular.woff2', variable: '--font-bruno' })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${bruno.variable} font-sans bg-almost-white`}>
        <div className="max-w-screen-xl mx-auto">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
