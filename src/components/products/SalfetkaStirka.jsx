import React from "react";
import { CalculateProduct } from "../CalculateProduct";

export const SalfetkaStirka = () => {
  const properties = {
    price: 15,
    id: 4,
    mnozh: 1,
    name: "Салфетки для стирки",
  };

  return (
    <div className="product">
      <h1>Salfetka Stirka</h1>
      <CalculateProduct
        name={properties.name}
        price={properties.price}
        id={properties.id}
        mnozh={properties.mnozh}
      />
    </div>
  );
};
