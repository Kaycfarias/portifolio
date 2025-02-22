import { InView } from "react-intersection-observer";
import { useInView } from 'react-intersection-observer';

export default function Sections(props: any) {
    const { ref, inView } = useInView({
        threshold: 0.5,          
    });

    interface InViewEntry {
        target: {
            id: string;
        };
    }

    type SetInView = (inView: boolean, entry: InViewEntry) => void;

    const setInView: SetInView = (inView, entry) => {
        if (inView) {
            props.setSelectedItem(entry.target.id);
        }
    };
    return (
        <div className='top-0 w-full z-50 transition-colors duration-300 light-background dark:dark-background' ref={props.hef}>
                    <InView as='div' className="container mx-auto h-screen flex flex-col justify-center items-center px-4 py-4" onChange={setInView} threshold={0.5} id="Home">
                        <h1 className="text-[40px] md:text-[87px]">HI,  i'm Kayc Farias</h1>
                        <p className="text-[20px] md:text-[43px]">// Full stack developer</p>
                        <a href='kayc-faraias-CV' className="py-2 px-3 m-2 border border-black dark:border-white rounded-md hover:bg-grey hover:text-white">Download CV</a>
            </InView>
            <InView as='div' className="container mx-auto h-screen flex flex-col justify-center items-center px-4 py-4" onChange={setInView} threshold={0.5} id="Projects">
                #Projects
                
            </InView>
            <InView as='div' className="container mx-auto h-screen flex flex-col justify-center items-center px-4 py-4" onChange={setInView} threshold={0.5} id="Contacts">
                #Contacts
            </InView>
        </div>
    )
}