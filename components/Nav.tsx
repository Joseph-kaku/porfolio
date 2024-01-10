"use client"
import Image from 'next/image'
import { ModeToggle } from './ui/toggle-menu'


export default function Nav() {
    return(
        <header>
            <nav>
                <ul className='flex items-center justify-between'>
                    <li>
                <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
        >
            By{' '}
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
        <li>
            <a href="#">Home</a>
        </li>
        <li>
            <a href="#">About</a>
        </li>
        <li>
            <a href="#">Contact</a>
        </li>
        <li>
            <a href="#">Blog</a>
        </li>
        <li>
            <ModeToggle />
        </li>
                </ul>
            </nav>
        </header>
    )
}