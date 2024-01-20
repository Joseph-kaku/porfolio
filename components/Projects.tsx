" use client "
import Image from 'next/image'
import macaw from '../public/macawmanager.png'
import shoes from '../public/shoes.png'


export default function Projects() {
    return(
        <div id="projects" className="mb-40 w-full flex justify-between scroll-mt-32">

<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="https://macawmanager.onrender.com/api-docs/">
        <Image src={macaw} className="rounded-t-lg" alt="Macaw Manager Backend API"/>
    </a>
    <div className="p-5">
        <a href="https://macawmanager.onrender.com/api-docs/">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> Backend API project (Macaw Manager) </h5>
        </a>
        <p className="font-normal text-gray-700 dark:text-gray-400"> An API that can be connected to a frontend application to make an app or a website that handles categorization of requests for projects for a company. </p>
    </div>
</div>

<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="https://shoeproject.onrender.com/api-docs/">
        <Image src={shoes} className="rounded-t-lg" alt="Shoe Project Backend API"/>
    </a>
    <div className="p-5">
        <a href="https://shoeproject.onrender.com/api-docs/">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> Backend API project (Shoelog) </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> This Backend API project is more fun. It simply keeps a log of Owners and whether or not they are shoe collectors. It also keeps a log of who owns what and details about the shoes showcased. A frontend application could be developed to showoff they shoes that are logged. </p>
    </div>
</div>
        </div>
    )
}