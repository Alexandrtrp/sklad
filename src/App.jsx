import "./App.css";
import React from "react";
import { Kisti003 } from "./components/products/Kisti003";
import { Route, Routes } from "react-router-dom";
import { Bit004 } from "./components/products/Bit004";
import { Nozh } from "./components/products/Nozh";
import { SalfetkaStirka } from "./components/products/SalfetkaStirka";
import { Main } from "./Main";
import { SideBar } from "./components/SideBar";
import { Sklad } from "./components/Sklad";
import { Auth } from "./components/Authorization/Authorization";

function App() {
  // Рабочие маршруты!
  // return (
  //   <div className="app">
  //     <SideBar />
  //     <div>
  //       <Routes>
  //         <Route path="kisti003" element={<Kisti003 />} />
  //         <Route path="bit004" element={<Bit004 />} />
  //         <Route path="nozh" element={<Nozh />} />
  //         <Route path="salfetka-stirka" element={<SalfetkaStirka />} />
  //       </Routes>
  //     </div>
  //     <Sklad />
  //   </div>
  // );

  return (
    <div>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="main" element={<Main />}>
          <Route path="sidebar" element={<SideBar />} />
          <Route path="kisti003" element={<Kisti003 />} />
          <Route path="bit004" element={<Bit004 />} />
          <Route path="nozh" element={<Nozh />} />
          <Route path="salfetka-stirka" element={<SalfetkaStirka />} />
          <Route path="sklad" element={<Sklad />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
