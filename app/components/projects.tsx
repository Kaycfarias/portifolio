import { Container } from "./container";
import TypeWriter from "./typewiter";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projects = [
  {
    id: "project1",
    name: "my portifolio",
    url: "https://github.com/Kaycfarias/portifolio",
    imageurl:
      "https://repository-images.githubusercontent.com/929091794/e2ad5433-919f-405f-ac8d-a9992fcd9667",
  },
];

interface ProjectsProps {
  setInView: (inView: boolean, entry: IntersectionObserverEntry) => void;
}

export default function Projects(props: ProjectsProps) {
  return (
    <Container onChange={props.setInView} id="Projects">
      <TypeWriter text={["Projects"]} />
      <Swiper
        className="mySwiper w-full"
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        navigation
        pagination={{
          clickable: true,
        }}
        scrollbar={{ draggable: true }}
      >
        {projects.map((project) => (
          <SwiperSlide
            key={project.id}
            className="border-1 border-[--lightsecondary] dark:border-[--darksecondary] rounded-md shadow-custom"
          >
            <div className="bg-[--lightaccent] dark:bg-[--darkaccent] h-[350px] rounded-md flex items-center justify-center">
              {"<work in progress>"}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
