import React from "react";
import ImageCard from "./image-card";

type Props = {
  data: string[];
};

const ImagesGrid = ({ data }: Props) => {
  return (
    <div className="container p-5 w-full  h-full flex flex-wrap gap-6 justify-center relative">
        <div className="w-full h-full bg-gradient-to-tr from-purple-600 via-red-600 to-lime-600 blur-[90px] rounded-full -z-10 absolute opacity-[0.7]"/>
      {data.map((thumbnail, idx) => (
      <ImageCard image={thumbnail} key={idx}/>
      ))}
    </div>
  );
};

export default ImagesGrid;
