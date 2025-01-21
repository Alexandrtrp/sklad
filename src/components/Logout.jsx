
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { logout } from "../store/authSlice";

export const Logout = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  return (
    <button className="logoutButton"
      onClick={() => {
        navigate("/", { replace: false });
        dispatch(logout());
      }}
    >
      Logout
    </button>
  );
};
