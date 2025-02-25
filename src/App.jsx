import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Main } from "./Main";
import { SideBar } from "./components/SideBar/SideBar";
import { Sklad } from "./components/Sklad";
import { Auth } from "./components/Authorization/Authorization";
import { Registration } from "./components/Registration/Registration";
import { useSelector } from "react-redux";
import { CalculateProduct } from "./components/CalculateProduct";
import { Profile } from "./components/Profile/Profile";

function App() {
  const products = useSelector((state) => state.sklad.products);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="main" element={<Main />}>
          <Route path="sidebar" element={<SideBar />} />
          {products.map((product) => (
            <Route
              path={product.path}
              element={
                <CalculateProduct
                  price={product.price}
                  id={product.id}
                  mnozh={product.mnozh}
                  name={product.name}
                />
              }
            />
          ))}
          <Route path="sklad" element={<Sklad />} />
        </Route>
        <Route path="profile" element={<Profile/>} />
      </Routes>
    </div>
  );
}

export default App;
