import About from '@/components/About'
import Hero from '@/components/Hero'
import MyProjects from '@/components/MyProjects'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <MyProjects />
    </div>
  )
}
