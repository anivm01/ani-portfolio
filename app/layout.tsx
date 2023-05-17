import './globals.css'
import "tw-elements/dist/css/tw-elements.min.css";
import localFont from 'next/font/local'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Head from 'next/head';

//this is the primary font applied to the body and inherited by all its children
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
      <Head>
        <meta property="og:image" content="/images/open-graph-image-ani.jpg" />
      </Head>
      <body className={`${bruno.variable} font-mono bg-almost-white`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
