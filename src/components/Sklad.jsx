import React from "react";
import "./sklad.css";
import { useSelector } from "react-redux";

export const Sklad = () => {

  const skladProducts = useSelector(state=>state.sklad.scladItems)
  const myMoneyOnSklad = useSelector(state=>state.sklad.myMoney)
  const finishProducts = useSelector(state=>state.sklad.finishProducts)

  return (
    <div className="sklad">
      <ul>
        <h3>Готовая продукция</h3>
      {
      finishProducts.map((el) => (
          <li key={el.id} className="skladItem">
            Название: {el.name} <span>Готово: {el.quantity}</span>
          </li>
        ))}
      </ul>
      
      <ul>
      <h3>Остатки</h3>
        {skladProducts.map((el) => (
          <li key={el.id} className="skladItem">
            Название: {el.name} <span>Остаток: {el.count}</span>
          </li>
        ))}
      </ul>
      <span className="text">Общий заработок: {myMoneyOnSklad} руб</span>
    </div>
  );
};
