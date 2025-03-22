import { Container } from "./container";
import TypeWriter from "./typewiter";
import { Tooltip } from "react-tooltip";

import {
  LogoCss3,
  LogoGit,
  LogoGithub,
  LogoHtml5,
  LogoJavascript,
  LogoNextjs,
  LogoNodejs,
  LogoPython,
  LogoReact,
  LogoTailwind,
  Typescript,
} from "./icons";

interface ProjectsProps {
  setInView: (inView: boolean, entry: IntersectionObserverEntry) => void;
}

// This is a list of skills and technologies that I have. You can add more skills to the list.
const skills = [
  { name: "React", icon: <LogoReact width={50} height={50} /> },
  { name: "Typescript", icon: <Typescript width={50} height={50} /> },
  { name: "Nextjs", icon: <LogoNextjs width={50} height={50} /> },
  { name: "Tailwindcss", icon: <LogoTailwind width={50} height={50} /> },
  { name: "Nodejs", icon: <LogoNodejs width={50} height={50} /> },
  { name: "Git", icon: <LogoGit width={50} height={50} /> },
  { name: "GitHub", icon: <LogoGithub width={50} height={50} /> },
  { name: "Javascript", icon: <LogoJavascript width={50} height={50} /> },
  { name: "Python", icon: <LogoPython width={50} height={50} /> },
  { name: "Html", icon: <LogoHtml5 width={50} height={50} /> },
  { name: "Css", icon: <LogoCss3 width={50} height={50} /> },
];

export default function Skills(props: ProjectsProps) {
  return (
    <Container onChange={props.setInView} id="Skills">
      <TypeWriter text={["Skills"]} />
      <div>
        <ul className="grid grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <li
              key={index}
              className={`flex flex-col items-center justify-center text-center p-2 bg-[--lightaccent] dark:bg-[--darkaccent] rounded-lg my-anchor-element-${index} p-4`}
            >
              {skill.icon}
              {/* */}
              <style>
                {`
                  .tt{
                    background: var(--lightaccent);
                `}
              </style>
              <Tooltip
                className="tt dark:bg-[--darkaccent] rounded-lg p-2"
                anchorSelect={`.my-anchor-element-${index}`}
                place="top"
              >
                {skill.name}
              </Tooltip>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}
