import { ReactNode } from "react";
import { InView } from "react-intersection-observer";

interface ContainerProps {
  id: string;
  onChange: (inView: boolean, entry: IntersectionObserverEntry) => void;
  children: ReactNode;
}

export function Container({ id, onChange, children }: ContainerProps) {
  return (
    <div className="border-b border-purple-600">
      <InView
        as="div"
        className="container mx-auto h-sections flex flex-col justify-center items-center p-4"
        threshold={0.5}
        id={id}
        onChange={onChange}
      >
        {children}
      </InView>
    </div>
  );
}