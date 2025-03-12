import Home from './home';
import About from './about'
import Skills from './skills';
import Projects from './projects';
import Contacts from './contacts';
import Footer from "./footer";

interface InViewEntry {
    target: {
        id: string;
    };
}

type SetInView = (inView: boolean, entry: InViewEntry) => void;

interface SectionsProps {
  navigation: { name: string; href: string; id: string }[];
  setSelectedItem: React.Dispatch<React.SetStateAction<string>>;
}

export default function Sections(props: SectionsProps) {
    const setInView: SetInView = (inView, entry) => {
        if (inView) {
            props.setSelectedItem(entry.target.id);
        }
    };

    return (
      <div
        className="relative top-14 sections mx-auto overflow-y-scroll transition-colors duration-300 light-background dark:dark-background custom-scrollbar"
        id="sections"
      >
        <Home setInView={setInView} />
        <About setInView={setInView} />
        <Skills setInView={setInView} />
        <Projects setInView={setInView} />
        <Contacts setInView={setInView} />
        <Footer />
      </div>
    );
}