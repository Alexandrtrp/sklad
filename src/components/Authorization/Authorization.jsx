import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isAuthCheck } from "../../store/authSlice";
import { useNavigate } from "react-router";
import "./Auth.css";

export const Auth = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const isAuth = useSelector((state) => state.auth.isAuth);

  const navigate = useNavigate();

  useEffect(() => {
    isAuth
      ? navigate("main", { replace: false })
      : navigate("/", { replace: false });
  }, [isAuth, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="auth">
      <h2>Форма авторизации</h2>
      <form onSubmit={handleSubmit} className="authForm">
        <input
          className="input"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          type="text"
          placeholder="Логин"
        />
        <input
          className="input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Пароль"
        />
        <div className="authButtonWrapper">
          <button
            className="formButton"
            onClick={() => {
              dispatch(isAuthCheck({ login: login, password: password }));
            }}
          >
            Вход
          </button>
          <button
            className="formButton"
            onClick={() => navigate("/registration", { replace: true })}
          >
            Регистрация
          </button>
        </div>
      </form>
    </div>
  );
};
