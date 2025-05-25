import { ReactNode } from "react";
import { InView } from "react-intersection-observer";
import { FadeContent } from "./animations";

interface ContainerProps {
  id: string;
  onChange: (inView: boolean, entry: IntersectionObserverEntry) => void;
  children: ReactNode;
}

export function Container({ id, onChange, children }: ContainerProps) {
  return (
    <FadeContent
      blur={true}
      duration={1500}
      easing="ease-out"
      initialOpacity={0}
    >
      <div className="border-b border-[--lightaccent] dark:border-[--darkaccent]">
        <InView
          as="div"
          className="container mx-auto max-w-screen-xl w-full h-sections flex flex-col justify-center items-center p-4"
          threshold={0.5}
          id={id}
          onChange={onChange}
        >
          {children}
        </InView>
      </div>
    </FadeContent>
  );
}
