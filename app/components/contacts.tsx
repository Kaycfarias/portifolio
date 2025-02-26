import Container from "./container";
interface ProjectsProps {
  setInView: (inView: boolean, entry: IntersectionObserverEntry) => void;
}

export default function Contacts(props: ProjectsProps){
  return (
    <Container onChange={props.setInView} id='Contacts'>
      <p>#Contacts</p>
    </Container>
  );
}