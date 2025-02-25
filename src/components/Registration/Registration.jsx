import { useState } from "react";
import "./Registration.css";
import { useDispatch } from "react-redux";
import { addNewUser } from "../../store/authSlice";
import { useNavigate } from "react-router";

export const Registration = () => {
    const [saveLogin, setSaveLogin] = useState('')
    const [savePassword, setSavePassword] = useState('')
    const [saveName, setSaveName] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
  return (
    <div className="formwrapper">
      <form onSubmit={(e)=>e.preventDefault()} className="form">
      <input type="text" className="input" placeholder="Придумайте имя" value={saveName} onChange={(e)=>{
            setSaveName(e.target.value)
        }}/>
        <input type="text" className="input" placeholder="Придумайте логин" value={saveLogin} onChange={(e)=>{
            setSaveLogin(e.target.value)
        }}/>
        <input type="text" className="input" placeholder="Придумайте пароль" value={savePassword} onChange={(e)=>{
            setSavePassword(e.target.value)
        }}/>
        <button className="formButton" onClick={()=>{
            dispatch(addNewUser({login: saveLogin, password: savePassword, name: saveName}))
            navigate("/", { replace: true })
        }}>Сохранить</button>
      </form>
    </div>
  );
};
