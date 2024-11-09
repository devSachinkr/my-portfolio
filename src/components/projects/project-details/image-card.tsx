import Image from "next/image";
import React from "react";

type Props = {
  image: string;
};

const ImageCard = ({ image }: Props) => {
  return (
    <div className=" flex justify-center items-center w-52 h-52  rounded-xl overflow-hidden p-4">
      <Image src={image} alt="project-pics" width={190} height={190} className="rounded-xl"/>
    </div>
  );
};

export default ImageCard;
