import { Container } from "./container";
import TypeWriter from "./typewiter";
import { Tooltip } from "react-tooltip";

import {
  LogoCss3,
  LogoExpress,
  LogoGit,
  LogoGithub,
  LogoHtml5,
  LogoJavascript,
  LogoNextjs,
  LogoNodejs,
  LogoPHP,
  LogoPython,
  LogoReact,
  LogoSass,
  LogoSql,
  LogoTailwind,
  Typescript,
} from "./icons";

interface ProjectsProps {
  setInView: (inView: boolean, entry: IntersectionObserverEntry) => void;
}

// This is a list of skills and technologies that I have. You can add more skills to the list.
const skills = [
  { name: "Nextjs", icon: <LogoNextjs width={75} height={75} /> },
  { name: "React", icon: <LogoReact width={75} height={75} /> },
  { name: "Typescript", icon: <Typescript width={75} height={75} /> },
  { name: "Javascript", icon: <LogoJavascript width={75} height={75} /> },
  { name: "Python", icon: <LogoPython width={75} height={75} /> },
  { name: "Nodejs", icon: <LogoNodejs width={75} height={75} /> },
  { name: 'Express.js', icon: <LogoExpress width={75} height={75} /> },
  { name: "Html", icon: <LogoHtml5 width={75} height={75} /> },
  { name: "Css", icon: <LogoCss3 width={75} height={75} /> },
  { name: "Tailwindcss", icon: <LogoTailwind width={75} height={75} /> },
  { name: "Sass", icon: <LogoSass width={75} height={75} /> },
  { name: "Git", icon: <LogoGit width={75} height={75} /> },
  { name: "GitHub", icon: <LogoGithub width={75} height={75} /> },
  { name: "PHP", icon: <LogoPHP width={75} height={75} /> },
  { name: "SQL", icon: <LogoSql width={75} height={75} /> },
];

export default function Skills(props: ProjectsProps) {
  return (
    <Container onChange={props.setInView} id="Skills">
      <TypeWriter text={["Skills"]} />
      <div>
        <ul className="grid grid-cols-3 sm:grid-cols-5 gap-4">
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
