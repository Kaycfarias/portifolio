import Typewriter from "typewriter-effect";
import { useInView } from "react-intersection-observer";

interface typeWriterProps {
  text: string[];
}

export default function TypeWriter(props: typeWriterProps) {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.1,
  });
  return (
    <h1
      className="text-[36px] sm:text-[55px] md:text-[80px] text-[--lightaccent] dark:text-[--darkaccent] text-center"
      ref={ref}
    >
      <code>
        {inView ? (
          <Typewriter
            onInit={(typewriter) => {
              props.text.map((text) => {
                typewriter.deleteAll()
                  .typeString(text)
                  .start()
                  .pauseFor(2500);
              })
            }}
          />
        ) : (
          "|"
        )}
      </code>
    </h1>
  );
}
