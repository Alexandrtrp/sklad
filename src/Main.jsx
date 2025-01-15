import React from "react";
import { Outlet} from "react-router-dom";
import { Sklad } from "./components/Sklad";
import { SideBar } from "./components/SideBar";
import { Logout } from "./components/Logout";

export const Main = () => {
  // const dispatch = useDispatch()
  return (
    <div className="app">
      <SideBar />
      <Outlet />
      <Sklad />
      <Logout/>
      {/* <button onClick={()=>dispatch(logout())}>Logout</button> */}
    </div>
  );
};
