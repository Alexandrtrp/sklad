import React from "react";
import { CalculateProduct } from "../CalculateProduct";

export const Nozh = () => {
  const properties = {
    price: 7,
    id: 3,
    mnozh: 1,
    name: "Нож",
  };

  return (
    <div className="product">
      <h1>Nozh</h1>
      <CalculateProduct
        name={properties.name}
        price={properties.price}
        id={properties.id}
        mnozh={properties.mnozh}
      />
    </div>
  );
};
