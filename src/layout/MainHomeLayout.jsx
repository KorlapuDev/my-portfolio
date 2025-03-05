import React from "react";
import { Outlet } from "react-router-dom";

const MainHomeLayout = () => {
  return (
    <div>
      <p>MainHomeLayout</p>
      <Outlet />
    </div>
  );
};

export default MainHomeLayout;
