" use client "
import Image from 'next/image'
import self from '../public/selfpotrait.jpeg'


export default function Aboutme() {
    return (
        <section id='aboutme' className="w-full mb-20 flex justify-between scroll-mt-20 text-wrap">
            <h1> NB: Make this section look better </h1>
            <div className='w-80'>
                <p> In 2021 I took my first official Web Development class 
                    and I haven't looked back since. 
                    Web development has become a big part of who I am 
                    and what I aspire to be as a Software Engineer. </p> <br />
                <p> I love figuring out how to make websites look beautiful 
                    and what makes professional websites tick. </p> <br />
                <p> In my journey to becoming who I want to be I have practiced with a few languages and tools:  </p> <br />
                <p> HTML, CSS, SQL, JavaScript, TypeScript, MongoDB, Git, NodeJS, NextJS, Render </p>
            </div>
            <div>
            <Image src={self} width={200} height={300} alt="self potrait"></Image>
            </div>
        </section>
    )
}