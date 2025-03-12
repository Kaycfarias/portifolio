import { Container } from "./container";

interface ProjectsProps {
  setInView: (inView: boolean, entry: IntersectionObserverEntry) => void;
}

export default function Skills(props: ProjectsProps) {
  return (
    <Container onChange={props.setInView} id="Skills">
      #Skills
    </Container>
  );
}
