"use client"
import { ModeToggle } from './ui/toggle-menu'
import Image from 'next/image'
import self from '../public/selfpotrait.jpeg'


export default function Nav() {
    return(
        <header>
            <div className='flex justify-between list-none'>
                <ul>
        </ul>
        <div className='w-full mb-10'>
            <ol className="flex justify-between">
            <li>
            <Image className="rounded-full w-20 h-30" src={self} alt="self potrait"></Image>
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
                </ul>
            </nav>
        </header>
    )
}
