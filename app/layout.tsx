import './globals.css'
import "tw-elements/dist/css/tw-elements.min.css";
import localFont from 'next/font/local'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
const bruno = localFont({ src: './font/BrunoAce-Regular.woff2', variable: '--font-bruno' })

export const metadata = {
  title: 'Ani Portfolio',
  description: 'Ani Mihaylova, Fullstack developer, JavaScript, React, Node',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${bruno.variable} font-mono bg-almost-white`}>
          <Header />
          {children}
          <Footer />
      </body>
    </html>
  )
}
