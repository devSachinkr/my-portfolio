"use client";
import { useAuthUser } from "@/provider/auth";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

type Props = {
  children: React.ReactNode;

};

const Layout = ({ children }: Props) => {
  const router = useRouter();
  const { token, user } = useAuthUser();
  useEffect(() => {
    if (!token || !user) {
      router.push("/login");
    } 
  }, [token,user]);
  return <div>{children}</div>;
};

export default Layout;
