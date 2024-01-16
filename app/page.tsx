import Image from 'next/image'
import Nav from '../components/Nav'
import { Button } from '@/components/ui/Button'
import  Header  from '../components/Header'
import Aboutme from '../components/Aboutme'

export default function Home() {
  return (
    <main className="p-24">
      <Nav />
      <Header />
      <Aboutme />
    </main>
  )
}
