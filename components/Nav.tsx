"use client"
import Image from 'next/image'
import { ModeToggle } from './ui/toggle-menu'


export default function Nav() {
    return(
        <header>
            <div className='flex justify-between list-none'>
                <ul>
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
