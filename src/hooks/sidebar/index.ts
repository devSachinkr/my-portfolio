"use client";

import ToastNotify from "@/components/global/toast";
import { useModal } from "@/provider/modal";
import { useRouter } from "next/navigation";
import { useState } from "react";

const useSidebar = () => {
  const [toggleSidebar, setToggleSidebar] = useState<boolean>(false);
  const { setClose } = useModal();
  const router = useRouter();
  const onLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.refresh();
    router.push("/");
    setClose();
    return ToastNotify({
      title: "Success",
      msg: "Logout Successfully",
    });
  };
  return { toggleSidebar, setToggleSidebar, onLogout };
};

export { useSidebar };
