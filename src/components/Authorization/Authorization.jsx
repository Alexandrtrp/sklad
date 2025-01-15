import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isAuthCheck } from "../../store/skladSlice";
import {  useNavigate } from "react-router";
import './Auth.css'

export const Auth = () => {
  
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const isAuth = useSelector((state) => state.sklad.isAuth);

  const navigate = useNavigate();

    useEffect(() => {
      isAuth
        ? navigate("main", { replace: false })
        : navigate("/", { replace: false });
    }, [isAuth, navigate]);

  return (
    <div className="auth">
      <h2>Форма авторизации</h2>
      <form>
        <input
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          type="text"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="text"
        />

        <button
          onClick={() => {
            dispatch(isAuthCheck({ login: login, password: password }));
          }}
        >
          Вход
        </button>
      </form>
    </div>
  );
};
