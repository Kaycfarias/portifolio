import { Container } from "./container";
import TypeWriter from "./typewiter";
import { LogoCss3, LogoGit, LogoGithub, LogoHtml5, LogoJavascript, LogoNextjs, LogoNodejs, LogoPython, LogoReact, LogoTailwind, Typescript } from './icons'

interface ProjectsProps {
  setInView: (inView: boolean, entry: IntersectionObserverEntry) => void;
}

// This is a list of skills and technologies that I have. You can add more skills to the list.
const skills = [
  {name: "React", icon: <LogoReact />},
  {name: "Typescript", icon: <Typescript />},
  {name: "Nextjs", icon: <LogoNextjs />},
  {name: "Tailwindcss", icon: <LogoTailwind />},
  {name: "Nodejs", icon: <LogoNodejs />},
  {name: "Git", icon: <LogoGit /> },
  {name: "GitHub", icon: <LogoGithub /> },
  {name: "Javascript", icon:<LogoJavascript /> },
  {name: "Python", icon: <LogoPython />},
  {name: "Html", icon: <LogoHtml5 />},
  {name: "Css", icon: <LogoCss3 />},
]

export default function Skills(props: ProjectsProps) {
  return (
    <Container onChange={props.setInView} id="Skills">
      <TypeWriter text={["Skills"]}/>
      <div>
        <ul className="grid grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <li key={index} className="flex flex-col items-center justify-center text-center p-2 bg-[--lightaccent] dark:bg-[--darkaccent] rounded-md">
              {skill.icon}
              {skill.name}
            </li>
          ))}
        </ul>
      </div>

    </Container>
  );
}
