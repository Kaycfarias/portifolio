import { JSX, ReactNode } from "react";
import { InView } from "react-intersection-observer";

interface ContainerProps {
  id: string;
  onChange: (inView: boolean, entry: IntersectionObserverEntry) => void;
  children: ReactNode;
}

export default function Container({ id, onChange, children }: ContainerProps) {
  return (
    <InView
      as="div"
      className="container mx-auto h-screen flex flex-col justify-center items-center px-4 py-4"
      threshold={0.5}
      id={id}
      onChange={onChange}
    >
      {children}
    </InView>
  );
}
