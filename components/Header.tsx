"use client"

import { Button } from "@/components/ui/Button";

export default function Header() {
    return(
    <section className="py-12 flex flex-col items-start text-center gap-2">
        <p> Hello, my name is... </p>
        <h1 className='text-4xl font-bold'> Joseph Kaku </h1>
        <p className='text-2xl text-muted-foreground'> I am an aspiring Web Developer </p>
        <Button variant="secondary"> Resume </Button>
    </section>
    )
}