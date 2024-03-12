import Nav from '../components/Nav'
import  Header  from '../components/Header'
import Aboutme from '../components/Aboutme'
import Resume from '../components/Resume'
import Projects from '../components/Projects'
import Others from '../components/Others'
import Footer from '../components/Footer'
import { SparklesCore } from '@/components/ui/sparkles'

export default function Home() {
  return (
<main className="relative p-24">
  <div className="absolute inset-0 overflow-hidden z-0">
    <SparklesCore
      id="tsparticlesfullpage"
      background="transparent"
      minSize={0.6}
      maxSize={1.4}
      particleDensity={100}
      className="w-full h-full"
      particleColor="#FFFFFF"
    />
  </div>
  <div className="relative z-10">
    <Nav />
    <Header />
    <h1 className="mb-10 text-3xl font-bold text-center">About Me</h1>
    <Aboutme />
    <h1 className="mb-5 text-3xl font-bold text-center">Resume</h1>
    <Resume />
    <h1 className='mb-10 text-3xl font-bold text-center'>Projects</h1>
    <Projects />
    <h1 className='mb-10 text-3xl font-bold text-center'>Others</h1>
    <Others />
    <Footer />
  </div>
</main>
  )
}
