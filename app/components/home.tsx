import { useInView } from "react-intersection-observer";
import { Container } from "./container";
import Typewriter from "typewriter-effect";

interface HomeProps {
  setInView: (inView: boolean, entry: IntersectionObserverEntry) => void;
}

export default function Home(props: HomeProps) {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.1,
  });
  return (
    <Container onChange={props.setInView} id="Home">
      <div className="flex flex-col items-center justify-center text-center">
        <h1
          className="text-[38px] sm:text-[60px] md:text-[83px] text-purple-600/90"
          ref={ref}
        >
          {inView ? (
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString("HI, I'm Kayc Farias").start();
              }}
            />
          ) : (
            "|"
          )}
        </h1>
        <p className="text-[20px] md:text-[43px]">Full stack developer</p>
        <a
          href="kayc-faraias-CV"
          className="py-2 px-3 m-2 border border-black dark:border-white rounded-md hover:bg-grey hover:text-white"
        >
          Download CV
        </a>
      </div>
    </Container>
  );
}
