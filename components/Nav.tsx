"use client"
import Image from 'next/image'
import { ModeToggle } from './ui/toggle-menu'


export default function Nav() {
    return(
        <header>
            <div className='flex justify-between list-none'>
                <ul>
                    <li>
                <a
            className="pointer-events-none flex place-items-center gap-2 p-4 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
        >
            {' '}
            <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className="dark:invert"
            width={100}
            height={24}
            priority
            />
        </a>
        </li>
        </ul>
        <div>
        <li>
            <ModeToggle />
        </li>
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
