import { useEffect } from "react";
import Prism from "prismjs";
// import "prismjs/themes/prism-funky.css";
import "./prism-one-custom.css"
// import light from "./prism-one-light.css"
import "prismjs/components/prism-typescript";

interface PrimsLoaderProps {
  code: string;
  language: string;
}

export default function PrismLoader(props: PrimsLoaderProps) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <pre className="border border-1 border-purple-600 rounded-md">
      <code className={`language-${props.language}`}>{props.code}</code>
    </pre>
  );
}
