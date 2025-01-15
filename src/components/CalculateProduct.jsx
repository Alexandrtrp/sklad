import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import "./calculate.css";
import { addFinishProduct, addMoney, changeSklad } from "../store/skladSlice";

export const CalculateProduct = (props) => {
      const [sumOfProduct, setSumOfProduct] = useState(0);
      const [plusProduct, setPlusProduct] = useState('');
      const [deleteKisti, setDeleteProduct] = useState('');
      const sumMoney = sumOfProduct * props.price
      const dispatch = useDispatch()
  return (
      <div className="productValues">
        <div className="productValuesWrapper">
          <input
            value={plusProduct}
            type="number"
            onChange={(e) => setPlusProduct(e.target.value)}
          />
          <button
            className="button"
            onClick={() => {
              setPlusProduct('')
              setSumOfProduct(+sumOfProduct + +plusProduct)}}
          >
            Добавить
          </button>
        </div>
        <div className="productValuesWrapper">
          <input
            value={deleteKisti}
            type="number"
            onChange={(e) => setDeleteProduct(e.target.value)}
          />
          <button
            className="button"
            onClick={() => {
              setSumOfProduct(sumOfProduct - deleteKisti);
              setDeleteProduct('')
            }}
          >
            Убрать
          </button>
        </div>
        <div className="productValuesWrapper totlaValue">
          <span className="totlaValueText">Сделал: {sumOfProduct}</span>
          <span className="totlaValueText">
            Заработал: {sumMoney} руб
          </span>
        </div>
        <button onClick={()=>{
          dispatch(changeSklad([props.id, sumOfProduct*props.mnozh]))
          dispatch(addMoney(sumMoney))
          dispatch(addFinishProduct([props.name, sumOfProduct]))
          setSumOfProduct(0)
        }} className="button">Сохранить работу</button>
      </div>
  );
};
