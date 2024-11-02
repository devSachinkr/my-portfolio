import LoginForm from "@/components/global/form/auth/login-form";
import React from "react";

const page = () => {
  return (
    <div className=" h-screen w-screen flex items-center justify-center flex-col">
      <div className="flex justify-center w-full">
        
          <div
            className="from-purple-800 via-fuchsia-500 to-purple-800 bg-gradient-to-r text-transparent bg-clip-text  flex justify-center  text-[3rem] text-wrap md:text-[5rem]  font-semibold"
          >
            Only {"Admin's"} Can Sign-In
          </div>
       
      </div>
      <LoginForm />
    </div>
  );
};

export default page;
