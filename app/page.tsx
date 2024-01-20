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
      <h1 className="mb-10 text-3xl font-bold text-center"> About Me </h1>
      <Aboutme />
      <h1 className="mb-5 text-3xl font-bold text-center"> Resume </h1>
      <Resume />
      <h1 className='mb-10 text-3xl font-bold text-center'> Projects </h1>
      <Projects />
      <h1 className='mb-10 text-3xl font-bold text-center'> Others </h1>
      <Others />
      <Footer />
    </main>
  )
}
