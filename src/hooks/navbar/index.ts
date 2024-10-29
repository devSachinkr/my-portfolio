"use client";

import { useState } from "react";

const useNavbar = () => {
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false);

  return { setIsMenuActive, isMenuActive };
};
export { useNavbar };
