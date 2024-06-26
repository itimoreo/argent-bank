import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/actions/authActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

const UserIcon = () => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userID");
    const isLoggedIn = !!token;
    const userName = useSelector((state) =>
      state.auth.user ? state.auth.user.name : ""
    );
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const handleLogout = (event) => {
      event.preventDefault();
      dispatch(logout());
      console.log(logout());
      navigate("/");
    };
  
    const handleUserClick = (event) => {
      event.preventDefault();
      if (userId) {
        navigate(`/dashboard/${userId}`);
      } else {
        // Gérez le cas où l'utilisateur est null
      }
    };
  
    return (
      <div style={{ color: "#2c3e50" }}>
        <FontAwesomeIcon icon={faUserCircle} onClick={handleUserClick} />
        <Link
          to={isLoggedIn && userId ? `/dashboard/${userId}` : "/login"}
          onClick={isLoggedIn ? handleUserClick : null}
          style={{
            marginLeft: "10px",
            marginRight: "0.5rem",
            fontSize: "16px",
            textDecoration: "none",
            color: "inherit",
          }}
        >
          {isLoggedIn ? userName : "Sign In"}{" "}
          {/* Affichez le nom de l'utilisateur si l'utilisateur est connecté */}
        </Link>
        {isLoggedIn && (
          <Link
            to="/"
            onClick={handleLogout}
            style={{
              marginLeft: "10px",
              marginRight: "0.5rem",
              fontSize: "16px",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            Sign Out
          </Link>
        )}
      </div>
    );
  };

  export default UserIcon;