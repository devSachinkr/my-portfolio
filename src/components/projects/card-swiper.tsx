import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ProjectCard from "./project-card";
import { PROJECT_WITH_TECH_STACK_AND_TAGS } from "@/lib/types";
type Props = {
  data: PROJECT_WITH_TECH_STACK_AND_TAGS[0];
};
const CardSwiper = ({ data }: Props) => {
  return (
    <Swiper
      modules={[EffectCards, Pagination]}
      grabCursor={true}
      effect={"cards"}
      className="h-full w-[250px]"
    >
      {data?.thumbnail.map((t, idx) =>
          <SwiperSlide key={idx} className="w-[150px]">
            <ProjectCard
              thumbnail={t}
              data={data}
              currentIdx={idx}
              totalLength={data.thumbnail.length}
            />
          </SwiperSlide>
      )}
    </Swiper>
  );
};

export default CardSwiper;
