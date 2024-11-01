import React from "react";
import GradientText from "../global/GradientText";
import CardSwiper from "./card-swiper";
import { dummyProjectData } from "@/lib/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Projects = () => {
  return (
    <section className="container w-screen overflow-hidden overflow-x-hidden  mb-4 pb-10">
      <h1 className="flex items-center justify-center w-full text-6xl font-semibold ">
        <GradientText
          className="from-purple-800 via-fuchsia-500 to-purple-800 p-5"
          classes="md:text-[5rem]  font-semibold"
        >
          Projects
        </GradientText>
      </h1>

      <div className="w-full  mb-10 rounded-lg h-[60vh] container p-5 flex flex-wrap  relative">
        <div className="absolute w-72 h-72 right-52 bg-gradient-to-bl  from-red-600 via-lime-800 to-blue-600 blur-[90px] rounded-full aspect-square " />
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={2}
          navigation
          pagination={{ clickable: true }}
        >
          {dummyProjectData.map((p, idx) => (
            <SwiperSlide key={idx}>
              <CardSwiper />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
