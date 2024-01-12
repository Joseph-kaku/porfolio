import Image from 'next/image'
import Nav from '../components/Nav'
import { Button } from '@/components/ui/Button'
import  Header  from '../components/Header'

export default function Home() {
  return (
    <main className="p-24">
      <Nav />
      <section className="py-12 flex flex-col items-center text-center gap-8">
        <h1 className='text-4xl font-bold'> Working on Portfolio ... </h1>
        <p className='text-2xl text-muted-foreground'> With Shadcn this should be easier ... </p>
      </section>
      <Header />
    </main>
  )
}
