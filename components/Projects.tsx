" use client "
import Image from 'next/image'
import macaw from '../public/macawmanager.png'
import shoe from '../public/shoelog.png'


export default function Projects() {
    return(
        <div id="projects" className=" mb-10 w-full flex justify-between scroll-mt-20">

<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="https://macawmanager.onrender.com/api-docs/">
        <Image src={macaw} className="rounded-t-lg" alt="Macaw Manager Backend API"/>
    </a>
    <div className="p-5">
        <a href="https://macawmanager.onrender.com/api-docs/">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    </div>
</div>

<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="https://shoeproject.onrender.com/api-docs/">
        <Image src={shoe} className="rounded-t-lg" alt="Shoe Project Backend API"/>
        <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
    </a>
    <div className="p-5">
        <a href="https://shoeproject.onrender.com/api-docs/">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    </div>
</div>
        </div>
    )
}