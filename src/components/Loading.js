import React from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const Loading = () => {
  return (
    <div className="loader">
      <ClimbingBoxLoader size={30} color={"#9d0885"} />
    </div>
  );
};

export default Loading;
