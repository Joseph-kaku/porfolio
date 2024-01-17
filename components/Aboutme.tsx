" use client "



export default function Aboutme() {
    return (
        <section className="w-full mb-10 flex justify-between">
            <div>
                <p> About Me </p>
                <p> Little Paragraph </p>
                <p> Technical Skills </p>
            </div>
            <div>
            <img className="rounded-full w-20 h-20" src='https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?&dpr=2&q=80' alt="image description"></img>
            </div>
        </section>
    )
}