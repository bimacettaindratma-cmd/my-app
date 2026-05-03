export default function LearnPge() {
    return(
    <section className="h-screen bg-white p-8 gap-3 text-black flex flex-col justify-center items-center">
        <div className="flex gap-3">
        <div className="bg-cyan-100 p-9 h-72 w-[445] rounded-3xl flex flex-col  justify-between relative text-cyan-950">
            <div className="flex gap-3">
                <img src="palette.svg/" alt="design"/>
                <p className="font-bold">Design</p>
            </div>
            <div>
                <p className="text-3xl font-bold">Adobe Photoshop</p>
                <p className="font-bold">in 3 days</p>
            </div>
            <div className="absolute bottom-7 right-6">
            <div className="flex ">
                <img src="1.png" className="rounded-full w-8 h-8 border-3 border-cyan-100"/>
                <img src="2.png" className="rounded-full w-8 h-8 border-3 border-cyan-100 -ml-3"/>
                <img src="3.png" className="rounded-full w-8 h-8 border-3 border-cyan-100 -ml-3"/>
                <p className="rounded-full w-8 h-8 border-3 border-cyan-100 -ml-3 bg-cyan-300 flex items-center justify-center">9+</p>
            </div> 
            </div>
        </div>

        <div className="bg-green-100 p-9 h-72 w-[445] rounded-3xl flex flex-col  justify-between relative text-green-950">
            <div className="flex gap-3">
                <img src="Terminal-2.svg/" alt="design"/>
                <p className="font-bold">AI</p>
            </div>
            <div>
                <p className="text-3xl font-bold">DALL-E 2,Midjourney, Stable Diffusion</p>
                <p className="font-bold">in 5 days</p>
            </div>
            <div className="absolute bottom-6 right-5">
            <div className="flex ">
                <img src="1.png/" className="rounded-full w-8 h-8 border-3 border-green-100"/>
                <img src="2.png/" className="rounded-full w-8 h-8 border-3 border-green-100 -ml-3"/>
                <img src="3.png/" className="rounded-full w-8 h-8 border-3 border-green-100 -ml-3"/>
                <p className="rounded-full w-8 h-8 border-3 border-green-100 bg-green-300 -ml-3 flex items-center justify-center">3+</p>
            </div> 
            </div>
        </div>
        </div>

        <div className="flex gap-3">
        <div className="bg-purple-100 p-9 h-72 w-73 rounded-3xl flex flex-col justify-between text-purple-950">
            <div className="flex gap-3">
                <img src="palette.svg/" alt="design"/>
                <p className="font-bold">Design</p>
            </div>
            <div>
                <p className="font-bold text-3xl">Figma</p>
                <p className="font-bold">8 hours ago</p>
            </div>
        </div>

        <div className="bg-orange-100 p-9 h-72 w-73 rounded-3xl flex flex-col justify-between text-orange-950">
            <div className="flex gap-3">
                <img src="code.svg/"/>
                <p className="font-bold">Codding</p>
            </div>
            <div>
                <p className="text-3xl font-bold">Python</p>
                <p className="font-bold">2 days ago</p>
            </div>
        </div>

        <div className="bg-red-100 p-9 h-72 w-73 rounded-3xl flex flex-col justify-between text-red-950">
            <div className="flex gap-3">
                <img src="palette.svg/"/>
                <p className="font-bold">Design</p>
            </div>
            <div>
                <p className="text-3xl font-bold">Sketch</p>
                <p className="font-bold">4 days ago</p>
            </div>
        </div>
        </div>
        <p className="absolute bottom-10 right-7 font-bold text-gray-300">Day 020 / 365</p>
    </section>
        
    )
}