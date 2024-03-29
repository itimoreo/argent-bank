import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux"; 
import { login } from "../redux/actions/authActions";

import "../css/LoginPage.css";
import Footer from "../components/Footer";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
  const userID = useSelector(state => state.auth.user && state.auth.user.id);
  const dispatch = useDispatch();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate(`/dashboard/${userID}`);
    }
  }, [isAuthenticated, navigate]);

  return (
    <div>
      <Header />
      <div className="container" style={{ background: "#12002b" }}>
        <div className="form" style={{}}>
          <FontAwesomeIcon icon={faUserCircle} />
          <h1>Sign-in</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label>Email:</label>
              <input
                className="input"
                type="text"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <br />
            <div className="input-wrapper">
              <label>Password:</label>
              <input
                className="input"
                type="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <br />
            <button className="btn-submit" type="submit">
              Sign-up
            </button>
          </form>
          <div>{error && <p>{error}</p>}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
