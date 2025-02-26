import { InView } from "react-intersection-observer";
import Container from "./container";

interface ProjectsProps {
  setInView: (inView: boolean, entry: IntersectionObserverEntry) => void;
}

export default function Projects(props: ProjectsProps) {
  return (
    <Container onChange={props.setInView} id="Projects">
      #Projects
    </Container>
  );
}
