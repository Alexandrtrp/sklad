import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import './sideBar.css'

export const SideBar = () => {
  const products = useSelector((state) => state.sklad.products);
  const [filterInput, setFilterInput] = useState("");
  const isFilter = filterInput ? true : false;
  const renderProducts = isFilter ? products.filter(el=>el.name.toLowerCase().includes(filterInput)) : products
  return (
    <>
      <div className="productList">
        <div className="productFilter">
        <input
          placeholder="Фильтр"
          type="text"
          value={filterInput}
          onChange={(e) => setFilterInput(e.target.value)}
        />
        <button onClick={()=>setFilterInput('')} className="button">Очистить</button>
        </div>
        {renderProducts.map((prod) => (
          <Link className="productListLink" to={prod.path}>
            {prod.name}
          </Link>
        ))}
      </div>
    </>
  );
};
