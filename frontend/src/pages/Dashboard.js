import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div>
      <h2>Welcome, {user?.name}</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
