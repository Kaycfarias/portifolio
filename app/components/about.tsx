import { Container } from "./container";
import PrismLoader from "./prismloader";
import kayc from "@/public/kaycfarias.jpg";
import Image from "next/image";
import TypeWriter from "./typewiter";

interface HomeProps {
  setInView: (inView: boolean, entry: IntersectionObserverEntry) => void;
}

export default function About(props: HomeProps) {
  const markdown = `class KaycFarias {
  name: string = 'Kayc Farias';
  city: string = 'Sumaré-SP';
  currentRole: string = 'Software Engineering Student';
}`;
  return (
    <Container onChange={props.setInView} id="About">
      <TypeWriter text={["About me"]} />
      <div className="md:grid md:grid-cols-2">
        <div className="flex justify-center items-center flex-col p-4">
          <Image
            className="rounded-full border-4 border-[--lightaccent] dark:border-[--darkaccent]"
            src={kayc}
            alt="Kayc Farias"
            width={360}
            height={360}
          />
          <PrismLoader code={markdown} language="typescript" />
        </div>
        <div className="pt-2">
          <p className="text-[16px] sm:text-[18px] md:text-[20px] pb-2">
            Sou um jovem de 21 anos, estudante de Engenharia de Software desde o
            início de 2024. Minha paixão por tecnologia e programação começou
            bem cedo, aos 12 anos, quando fiz um curso de robótica. Desde então,
            tenho me dedicado a aprender e aprimorar meus conhecimentos na área,
            explorando diversos aspectos do desenvolvimento de software.
          </p>
          <p className="text-[16px] sm:text-[18px] md:text-[20px] pb-2">
            Embora ainda não tenha experiência profissional, estou em busca do
            meu primeiro estágio, onde possa colocar em prática tudo o que
            aprendi e continuar crescendo na área. Tenho o objetivo de me tornar
            um desenvolvedor completo, especializado tanto no backend quanto no
            frontend, dominando as principais tecnologias e práticas do mercado.
          </p>
          <p className="text-[16px] sm:text-[18px] md:text-[20px] pb-2">
            Acredito muito na importância da autodidática. Sempre me esforcei
            para adquirir conhecimento de forma independente, o que me ajudou a
            participar de torneios de robótica, onde cheguei a ser campeão em
            uma modalidade. Essa experiência foi fundamental para o
            desenvolvimento do meu trabalho em equipe e para entender a
            importância da colaboração em projetos desafiadores.
          </p>
        </div>
      </div>
    </Container>
  );
}
