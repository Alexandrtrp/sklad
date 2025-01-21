import React from "react";
import { Outlet} from "react-router-dom";
import { Sklad } from "./components/Sklad";
import { SideBar } from "./components/SideBar/SideBar";
import { Logout } from "./components/Logout";

export const Main = () => {

  return (
    <div className="app">
      <SideBar />
      <Outlet />
      <Sklad />
      <Logout/>
    </div>
  );
};
