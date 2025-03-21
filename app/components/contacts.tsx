import { Container } from "./container";
import TypeWriter from "./typewiter";

interface ProjectsProps {
  setInView: (inView: boolean, entry: IntersectionObserverEntry) => void;
}

export default function Contacts(props: ProjectsProps){
  return (
    <Container onChange={props.setInView} id='Contacts'>
      <TypeWriter text={["contacts"]}/>
    </Container>
  );
}