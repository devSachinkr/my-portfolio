"use client";

import { useState } from "react";
import {signUp} from "@/actions/auth"

const useNavbar = () => {
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false);
  const create =async()=>{
      await signUp("krs888904@gmail.com","Mr Potter","",)
  }
  return { setIsMenuActive, isMenuActive,create };
};
export { useNavbar };
