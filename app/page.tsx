import Nav from '../components/Nav'
import  Header  from '../components/Header'
import Aboutme from '../components/Aboutme'
import Resume from '../components/Resume'
import Projects from '../components/Projects'
import Others from '../components/Others'

export default function Home() {
  return (
    <main className="p-24">
      <Nav />
      <Header />
      <Aboutme />
      <Resume />
      <Projects />
      <Others />
    </main>
  )
}
