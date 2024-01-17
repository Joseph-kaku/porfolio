import Nav from '../components/Nav'
import  Header  from '../components/Header'
import Aboutme from '../components/Aboutme'
import Resume from '../components/Resume'
import Projects from '../components/Projects'
import Others from '../components/Others'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="p-24">
      <Nav />
      <Header />
      <h1 className="mb-5"> About Me </h1>
      <Aboutme />
      <Resume />
      <h1 className='mb-5'> Projects </h1>
      <Projects />
      <Others />
      <Footer />
    </main>
  )
}
