import React from "react";
import { CalculateProduct } from "../CalculateProduct";

export const Bit004 = () => {
  const properties = {
    price: 4,
    id: 2,
    mnozh: 4,
    name: "Bit-004",
  };
  return (
    <div className="product">
      <h1>Bit 004</h1>
      <CalculateProduct
        name={properties.name}
        price={properties.price}
        id={properties.id}
        mnozh={properties.mnozh}
      />
    </div>
  );
};
