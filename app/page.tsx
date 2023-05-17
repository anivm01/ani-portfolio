import About from '@/components/About'
import Hero from '@/components/Hero'
import MyExperience from '@/components/MyExperience'
import MyProjects from '@/components/MyProjects'

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <MyProjects />
      <MyExperience />
    </div>
  )
}
