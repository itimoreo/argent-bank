import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/actions/authActions";
import UserIcon from "./UserIcon";
import ArgentBankLogo from "../assets/img/argentBankLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";



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
