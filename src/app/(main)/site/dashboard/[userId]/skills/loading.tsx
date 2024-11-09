import Spinner from "@/components/global/spinner";
import React from "react";

const loading = () => {
  return (
    <div>
      <Spinner
        loading={true}
        loaderClasses="w-screen h-screen flex items-center justify-center"
      />
    </div>
  );
};

export default loading;
