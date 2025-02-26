import Container from './container';

interface HomeProps {
  setInView: (inView: boolean, entry: IntersectionObserverEntry) => void;
}


export default function Home(props: HomeProps) {
    return (
      <Container
        onChange={props.setInView}
        id="Home"
      >
        <h1 className="text-[40px] text-purple-600/90 md:text-[87px]">
          HI, I&apos;m Kayc Farias
        </h1>
        <p className="text-[20px] md:text-[43px]">Full stack developer</p>
        <a
          href="kayc-faraias-CV"
          className="py-2 px-3 m-2 border border-black dark:border-white rounded-md hover:bg-grey hover:text-white"
        >
          Download CV
        </a>
      </Container>
    );
}