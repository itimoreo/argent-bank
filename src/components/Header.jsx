import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/actions/authActions";

import ArgentBankLogo from "../assets/img/argentBankLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

const UserIcon = () => {
  const token = localStorage.getItem("token");
  const isLoggedIn = !!token;
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user); // Accédez à l'état de l'utilisateur
  const navigate = useNavigate();

  const handleLogout = (event) => {
    event.preventDefault();
    dispatch(logout());
    console.log(logout())
    navigate("/");
  };

  const handleUserClick = (event) =>{
    event.preventDefault();
    navigate(`/dashboard/${user.id}`)
  }
  

  return (
    <div style={{ color: "#2c3e50" }}>
      <FontAwesomeIcon icon={faUserCircle} onClick={handleUserClick} />
      <Link
        to={isLoggedIn ? `/dashboard/${user.id}` : "/login"}
        onClick={isLoggedIn ? handleUserClick : null}
        style={{
          marginLeft: "10px",
          marginRight: "0.5rem",
          fontSize: "16px",
          textDecoration: "none",
          color: "inherit",
        }}
      >
        {isLoggedIn ? `${localStorage.getItem('userName')}` : "Sign In"} {/* Affichez le nom de l'utilisateur si l'utilisateur est connecté */}
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

const Header = () => {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "5px 20px",
        fontWeight: "bold",
      }}
    >
      <Link to="/">
        <img
          src={ArgentBankLogo}
          alt="Logo de la banque"
          style={{ width: "200px" }}
        />
      </Link>
      
      <UserIcon />
    </header>
  );
};

export default Header;