" use client "
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"


   


export default function Others() {
    return(
<Sheet>
    <div id="others" className="flex scroll-mt-40 justify-center items-center">
        <SheetTrigger className="bg-primary text-primary-foreground rounded-sm p-2">Check out other projects</SheetTrigger>
    </div>
        <SheetContent >
        <SheetHeader>
        <SheetTitle>Manga Directory</SheetTitle>
            <SheetDescription>
            <a href="https://joseph-kaku.github.io/BasicSite/frontendwebsite/index.html">Check it out</a>
            </SheetDescription>
        </SheetHeader>
        <SheetHeader>
        <SheetTitle>Reverse Number</SheetTitle>
            <SheetDescription>
            <a href="https://joseph-kaku.github.io/activity1/src/index.html">Check it out</a>
            </SheetDescription>
        </SheetHeader>
        <SheetHeader>
        <SheetTitle>VS game</SheetTitle>
            <SheetDescription>
            <a href="https://joseph-kaku.github.io/vs/">Check it out</a>
            </SheetDescription>
        </SheetHeader>
        <SheetHeader>
        <SheetTitle>Basic Website</SheetTitle>
            <SheetDescription>
            <a href="https://joseph-kaku.github.io/BasicSite/chamber/index.html">Check it out</a>
            </SheetDescription>
        </SheetHeader>
        <SheetHeader>
        <SheetTitle>Shoe Log</SheetTitle>
            <SheetDescription>
            <a href="https://shoeproject.onrender.com/api-docs/">Check it out</a>
            </SheetDescription>
        </SheetHeader>
    </SheetContent>
</Sheet>
    )
}