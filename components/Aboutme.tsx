" use client "
import Image from 'next/image'
import self from '../public/selfpotrait.jpeg'


export default function Aboutme() {
    return (
        <section className="w-full mb-10 flex justify-between">
            <div>
                <p> About Me </p>
                <p> Little Paragraph </p>
                <p> Technical Skills </p>
            </div>
            <div>
            <Image src={self} width={200} height={300} alt="self potrait"></Image>
            </div>
        </section>
    )
}