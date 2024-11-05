"use client";

import { useState } from "react";

const useSidebar = () => {
  const [toggleSidebar, setToggleSidebar] = useState<boolean>(false);
 
  return { toggleSidebar,setToggleSidebar };
};

export { useSidebar };
