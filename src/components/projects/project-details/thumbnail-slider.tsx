"use client";
import { PROJECT_WITH_TECH_STACK_AND_TAGS } from "@/lib/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
interface Props {
  data: PROJECT_WITH_TECH_STACK_AND_TAGS[0] | null;
  thumbnail:string
}
const ThumbnailSlider = ({ data,thumbnail }: Props) => {
  const router=useRouter();
  return (
    <div className="flex flex-col items-start justify-center overflow-hidden max-h-[200px] text-red-400">
        <div className="flex  justify-center w-full">
      <Image src={thumbnail} alt={data?.name || ""} width={500} height={500} className="" onDoubleClick={()=>router.replace(thumbnail)}/>
        </div>
      
    
    </div>
  );
};

export default ThumbnailSlider;
