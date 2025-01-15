import React from "react";
import { CalculateProduct } from "../CalculateProduct";

export const Kisti003 = () => {
  const properties = {
    price: 8,
    id: 1,
    mnozh: 1,
    name: "Kisti-003",
  };

  return (
    <div className="product">
      <h1>Kisti 003</h1>
      <CalculateProduct
        name={properties.name}
        price={properties.price}
        id={properties.id}
        mnozh={properties.mnozh}
      />
    </div>
  );
};
