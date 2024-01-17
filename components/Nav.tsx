"use client"
import { ModeToggle } from './ui/toggle-menu'


export default function Nav() {
    return(
        <header>
            <div className='flex justify-between list-none'>
                <ul>
        </ul>
        <div className='w-full mb-10'>
            <ol className="flex justify-between">
            <li>
            <img className="rounded-full w-20 h-20" src='https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?&dpr=2&q=80' alt="image description"></img>
            </li>
        <li>
            <ModeToggle />
        </li>
            </ol>
        </div>
        </div>
            <nav>
                <ul className='flex items-center justify-between'>
        <li>
            <a href="#">About Me</a>
        </li>
        <li>
            <a href="#">Resume</a>
        </li>
        <li>
            <a href="#">Projects</a>
        </li>
        <li>
            <a href="#">Others</a>
        </li>
                </ul>
            </nav>
        </header>
    )
}
