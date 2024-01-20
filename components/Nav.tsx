"use client"
import { ModeToggle } from './ui/toggle-menu'
import Image from 'next/image'
import self from '../public/selfpotrait.jpeg'


export default function Nav() {
    return(
        <header className='bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0  border-gray-200 dark:border-gray-600'>
            <nav>
                <ul className='flex items-center justify-between'>
                <li>
                <a href='#aboutme'>
                    <Image className="rounded-full w-10 h-10" src={self} alt="self potrait"></Image>
                </a>
            </li>  
        <li>
            <a href="#aboutme">About Me</a>
        </li>
        <li>
            <a href="#resume">Resume</a>
        </li>
        <li>
            <a href="#projects">Projects</a>
        </li>
        <li>
            <a href="#others">Others</a>
        </li>
        <li>
                <ModeToggle />
            </li>
                </ul>
            </nav>
        </header>
    )
}
