import React, { useState } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

import "../css/LoginPage.css";
import Footer from "../components/Footer";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await response.json();
      console.log("Data:", data);

      if (!response.ok) {
        setError("Login failed");
        console.log("Login failed");
      } else {
        console.log("Login successful");
        localStorage.setItem("token", data.body.token);

        // Faire une autre requête pour obtenir le username
        const userResponse = await fetch(
          "http://localhost:3001/api/v1/user/profile",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${data.body.token}`,
            },
          }
        );
        const userData = await userResponse.json();
        localStorage.setItem("firstName", userData.body.firstName);
        localStorage.setItem("lastName", userData.body.lastName);

        let firstName = localStorage.getItem("firstName");
        let lastName = localStorage.getItem("lastName");
        let UserName = lastName + " " + firstName;

        localStorage.setItem("UserName", UserName);

        console.log("UserName:", UserName, "Token: ", data.body.token);
        navigate(`/dashboard/${userData.body.id}`);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

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
