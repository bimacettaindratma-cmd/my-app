export default function LearnPage() {
    return(
<section className="h-screen bg-gray-100 flex flex-col gap-6 p-8 items-center  ">
    <img src="circle-check.svg" className="flex self-start top-16 left-18"/>
    <div className="flex gap-6">
    <div className="bg-cyan-100 p-8 h-80 w-[445] rounded-4xl flex flex-col justify-between text-cyan-950">
        <div className="flex gap-4">
            <img src="/palette.svg" alt="design"/>
            <p className="font-bold">Design</p>
        </div>
        <div>
          <p className="text-4xl font-bold">Adobe Photoshop</p>
          <div className="flex justify-between"> 
            <p className="font-bold flex">in 3 days</p>
            <div className="flex ">
                <img src="1.png" className="rounded-full w-9 h-9 border-3 border-cyan-100"/>
                <img src="2.png" className="rounded-full w-9 h-9 border-3 border-cyan-100 -ml-4"/>
                <img src="3.png" className="rounded-full w-9 h-9 border-3 border-cyan-100 -ml-4"/>
                <p className="rounded-full w-9 h-9 border-3 border-cyan-100 -ml-4 bg-cyan-300 flex items-center justify-center">9+</p>
            </div> 
          </div>
        </div>
    </div>

    <div className="bg-green-100 p-8 h-80 w-[445] rounded-4xl flex flex-col justify-between text-green-950">
        <div className="flex gap-4">
            <img src="/terminal-2.svg" alt="design"/>
            <p className="font-bold">AI</p>
        </div>
        <div>
          <p className="text-4xl font-bold">DALL·E 2, Midjourney, Stable Diffusion</p>
          <div className="flex justify-between">
            <p className="font-bold">in 5 days</p>
            <div className="flex">
                <img src="4.png" className="rounded-full w-9 h-9 border-3 border-green-100"/>
                <img src="5.png" className="rounded-full w-9 h-9 border-3 border-green-100 -ml-4"/>
                <img src="6.png" className="rounded-full w-9 h-9 border-3 border-green-100 -ml-4"/>
                <p className="rounded-full w-9 h-9 border-3 border-green-100 -ml-4 bg-green-300 flex items-center justify-center">3+</p>
            </div>  
          </div>
        </div>
    </div>
    </div>

    <div className="flex gap-6">
        <div className="bg-purple-100 p-8 h-72 w-72 rounded-4xl flex flex-col justify-between text-blue-950">
            <div className=" flex gap-4">
                <img src="/palette.svg" alt="design"/>
                <p className="font-bold">Design</p>
            </div>
        <div>
            <p className="text-4xl font-bold">Figma</p>
            <p className="font-bold">8 hours ago</p>
        </div>
        </div>

        <div className="bg-orange-200 p-8 h-72 w-72 rounded-4xl flex flex-col justify-between text-orange-950">
            <div className=" flex gap-4">
                <img src="/code.svg" alt="design"/>
                <p className="font-bold">Codding</p>
            </div>
        <div>
            <p className="text-4xl font-bold">Python</p>
            <p className="font-bold">2 days ago</p>
        </div>
        </div>

        <div className="bg-red-200 p-8 h-72 w-72 rounded-4xl flex flex-col justify-between text-red-950">
            <div className=" flex gap-4">
                <img src="/palette.svg" alt="design"/>
                <p className="font-bold">Design</p>
            </div>
        <div>
            <p className="text-4xl font-bold">Sketch</p>
            <p className="font-bold">4 days ago</p>
        </div>
        </div>
        </div>
        <p className="flex self-end fixed bottom-12 right-18 text-gray-400 font-bold">Day 020 / 365</p>
        </section>
    );
}
