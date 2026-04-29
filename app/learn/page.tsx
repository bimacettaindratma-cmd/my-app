export default function LearnPage() {
    return(
        <section className="h-screen bg-gray-100 flex gap-4 p-8 ">
        <div className="bg-purple-200 p-8 h-72 w-72 rounded-4xl flex flex-col justify-between text-blue-950">
            <div className=" flex gap-4">
                <img src="/circle-check.svg" alt="design"/>
                <p className="font-bold">Design</p>
            </div>
        <div>
            <p className="text-4xl font-bold">Figma</p>
            <p className="font-bold">8 hours ago</p>
        </div>
        </div>
        <div className="bg-orange-200 p-8 h-72 w-72 rounded-4xl flex flex-col justify-between text-blue-950">
            <div className=" flex gap-4">
                <img src="/circle-check.svg" alt="design"/>
                <p className="font-bold">Codding</p>
            </div>
        <div>
            <p className="text-4xl font-bold">Python</p>
            <p className="font-bold">2 days ago</p>
        </div>
        </div>
        <div className="bg-red-200 p-8 h-72 w-72 rounded-4xl flex flex-col justify-between text-blue-950">
            <div className=" flex gap-4">
                <img src="/circle-check.svg" alt="design"/>
                <p className="font-bold">Design</p>
            </div>
        <div>
            <p className="text-4xl font-bold">Sketch</p>
            <p className="font-bold">4 days ago</p>
        </div>
        </div>
        </section>
    );
            
       
}