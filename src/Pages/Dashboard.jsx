import React, { useEffect, useState } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/Dashboard.css";
import { useNavigate } from "react-router-dom";
import Transaction from "../components/Transaction";
import BankAccount from "../components/BankAccount";

const Dashboard = () => {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const handleEditName = () => {
    navigate("/edit");
  };

  useEffect(() => {
    const userName = localStorage.getItem("UserName");
    setUserName(userName);
  }, []);

  return (
    <div>
      <Header />
      <main
        className="dash-container"
        style={{ background: "#12002b", height: "90vh" }}
      >
        <div className="Welcome" style={{ color: "white" }}>
          <h1>
            Welcome Back, <br></br>
            {userName}
          </h1>
          <button className="btn-edit" type="submit" onClick={handleEditName}>
            Edit Name
          </button>
        </div>
        <BankAccount />
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
