export default function LearnPage() {
    return(
       <section className="h-screen p-3 bg-gray-200 text-black flex justify-center items-center">
        <div className="bg-white h-150 w-110 rounded-3xl ">
            <div className="p-8 flex justify-between">
                <p className="font-bold text-4xl">Client details</p>
                <img src="/x.svg" alt="design"/>
            </div>
            
            <div className="flex gap-3 p-6">
            <img src="/1.png" className="rounded-full h-16 w-16 "/>
            <div className="flex flex-col gap-1 justify-center">
                <p className="font-bold text-2xl">Cornelius Greenfelder</p>
                <div className="flex gap-1 bg-green-200 w-25 h-8 rounded-full">
                    <img src="/medal.svg" className="rounded-full h-8 w-8 "/>
                    <p className="flex justify-center items-center">Verified</p>
                </div>
            </div>
            </div>
         <div className="flex justify-center">  
            <div className="bg-blue-100 p-4 w-98 h-30 rounded-3xl flex flex-col justify-between">
                <div className="flex flex-col">
                    <p className="font-bold">Project</p>
                </div>
                <div className="flex justify-between">

                <div className="flex flex-col">    
                <div className="flex gap-2">
                    <img src="hourglass.svg" alt="design"/>
                    <p>Ongoing</p>
                </div>
                <div>
                    <p>2 ($3.8K)</p>
                </div>
                </div>
                 

                <div className="flex flex-col">    
                <div className="flex gap-2">
                    <img src="hourglass.svg" alt="design"/>
                    <p>Ongoing</p>
                </div>
                <div>
                    <p>25 ($54K)</p>
                </div>
                </div>

            </div>
        </div>

            </div>
            <div className="flax flex-col gap-y-9">
            <div className="flex p-8 justify-between">
                <p>Location</p>
                <p>United States, New York</p>
            </div>
            <div className="flex p-8 justify-between">
                <p>With Us</p>
                <p>6 Jan 2024</p>
            </div>
            </div>

            <div className="flex gap-2 justify-center">
            <div>
                <img src="/dots-vertical.svg" className="rounded-full bg-gray-300 w-12 h-12"/>
            </div>
            <div className=" flex bg-blue-600 w-80 h-12 rounded-2xl items-center justify-center">
                <img src="/mail.svg"/>
                <p className="flex justify-center items-center">Message</p>
            </div>
            </div>
        </div>

       </section> 
    )
}