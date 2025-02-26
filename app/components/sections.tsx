import { InView } from 'react-intersection-observer';
import Home from './home';
import Projects from './projects';
import Contacts from './contacts';

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
      <div className="top-0 w-full transition-colors duration-300 light-background dark:dark-background">
        <Home setInView={setInView} />
        <Projects setInView={setInView} />
        <Contacts setInView={setInView}/>
      </div>
    );
}