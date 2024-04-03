"use client"

import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function Header() {
    return(
    <section className="mb-20 py-12 flex flex-col items-center text-center gap-10">
        <p> Hello, my name is... </p>
        <h1 className='text-6xl font-bold'> Joseph Kaku </h1>
        <p className='text-2xl text-muted-foreground'> I am a Web Developer </p>
        <Button variant="secondary"> 
        <Link href='https://github.com/Joseph-kaku/jobinfo/blob/main/Joseph%20Resume%20.pdf'> Resume </Link>  
        </Button>
    </section>
    )
}