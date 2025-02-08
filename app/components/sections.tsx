export default function Sections() {
    return (
        <div className="top-0 w-full z-50 transition-colors duration-300 bg-light-background dark:bg-dark-background">
            <div id="Home" className="container mx-auto h-screen flex flex-col justify-center items-center px-4 py-4">
                <h1 className="text-[40px] md:text-[87px]">HI,  i'm Kayc Farias</h1>
                <p className="text-[20px] md:text-[43px]">// Full stack developer </p>
                <a href='kayc-faraias-CV' className="py-2 px-3 m-2 border rounded-md hover:bg-[#3c3835] hover:text-white">Download CV</a>
            </div>
            <div id="Projects" className="container mx-auto h-screen flex flex-col justify-center items-center gap-6 px-4 py-4">
                #Projects
            </div>
            <div id="Contacts" className="container mx-auto h-screen flex flex-col justify-center items-center gap-6 px-4 py-4">
                #Contacts
            </div>
        </div>
    )
}