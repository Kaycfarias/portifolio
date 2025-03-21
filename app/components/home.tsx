import { Container } from "./container";
import TypeWriter from "./typewiter";
import "./glitch.css";

interface HomeProps {
  setInView: (inView: boolean, entry: IntersectionObserverEntry) => void;
}

export default function Home(props: HomeProps) {
  return (
    <Container onChange={props.setInView} id="Home">
      <TypeWriter text={["Welcome", "Hello word"]} />
      <div className="flex flex-col items-center justify-center text-center glitch-wrappe">
        <p
          className="glitch text-[38px] sm:text-[60px] md:text-[83px]"
          data-glitch="Hi, I'm Kayc Farias"
        >
          Hi, I&apos;m Kayc Farias
        </p>
        <p className="text-[20px] md:text-[43px]">Full stack developer</p>
        <a
          href="kayc-faraias-CV"
          className="py-2 px-3 m-2 border border-[--lightaccent] dark:border-[--darktaccent] rounded-md hover:bg-grey hover:text-[--lightaccent-hover] dark:hover:text-[--darkaccent-hover]"
        >
          Download CV
        </a>
      </div>
    </Container>
  );
}
