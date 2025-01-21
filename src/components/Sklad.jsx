import React, { useState } from "react";
import "./sklad.css";
import { useDispatch, useSelector } from "react-redux";

export const Sklad = () => {
  const skladProducts = useSelector((state) => state.sklad.scladItems);
  const myMoneyOnSklad = useSelector((state) => state.sklad.myMoney);
  const finishProducts = useSelector((state) => state.sklad.finishProducts);
  const skladChina = useSelector((state) => state.sklad.skladChina);

  const dispatch = useDispatch();
  const [changedValue, setChangedValue] = useState(0);

  return (
    <div className="sklad">
      <ul>
        <h3>Готовая продукция</h3>
        {finishProducts.map((el) => (
          <li key={el.id} className="skladItem">
            Название: {el.name} <span>Готово: {el.quantity}</span>
          </li>
        ))}
      </ul>
      <span className="total">Общий заработок: {myMoneyOnSklad} руб</span>
      <h3>Склад Мироновская</h3>
      <ul>
        {skladProducts.map((el) => (
          <li key={el.id} className="skladItem text">
            Название: {el.name} <span>Остаток: {el.count}</span>
          </li>
        ))}
      </ul>
      <h3>Склад Китай</h3>
      <div>
        <input
          value={changedValue}
          onChange={(e) => setChangedValue(e.target.value)}
          className="skladItemInput"
          type="number"
        />
        <button onClick={() => {}}>Переместить</button>
      </div>
      <ul>
        {skladChina.map((el) => (
          <li key={el.id} className="skladItem chinaItems">
            <input type="checkbox" name="" id="" />
            <p className="skladItem text">
              Название: {el.name} <span>Остаток: {el.count}</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
