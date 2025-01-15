
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { logout } from "../store/skladSlice";

export const Logout = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        navigate("/", { replace: false });
        dispatch(logout());
      }}
    >
      Logout
    </button>
  );
};
