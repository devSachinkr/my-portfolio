import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards ,Pagination} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { dummyProjectData } from "@/lib/constants";
import ProjectCard from "./project-card";
const CardSwiper = () => {
  return (
    <Swiper
      modules={[EffectCards,Pagination]}
      grabCursor={true}
      effect={"cards"}
      className="h-full w-[250px]"
    >
      {dummyProjectData.map((project,idx) => (
        <SwiperSlide key={idx} className="w-[150px]">
           <ProjectCard data={project} idx={idx} totalLength={dummyProjectData.length}/>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CardSwiper;
