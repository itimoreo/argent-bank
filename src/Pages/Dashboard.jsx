import React, { useEffect, useState } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/Dashboard.css";

const Dashboard = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const userName = localStorage.getItem("UserName");
    setUserName(userName);
  }, []);

  return (
    <div>
      <Header />
      <main className="dash-container" style={{ background: "#12002b", height:'90vh' }}>
        <div className="Welcome" style={{ color: "white" }}>
          <h1>
            Welcome Back, <br></br>
            {userName}
          </h1>
          <button className="btn-edit" type="submit">
            Edit Name
          </button>
        </div>
        <div className="bankAccount-container" style={{ color: "#2c3e50" }}>
          <h3 className="bankAccount-title">Argent Bank Checking (x8349)</h3>
          <p className="bankAccount-amount">$2,082.79</p>
          <p className="bankAccount-description">Available Balance</p>
        </div>
        <div className="bankAccount-container" style={{ color: "#2c3e50" }}>
          <h3 className="bankAccount-title">Argent Bank Checking (x6712)</h3>
          <p className="bankAccount-amount">$10,928.42</p>
          <p className="bankAccount-description">Available Balance</p>
        </div>
        <div className="bankAccount-container" style={{ color: "#2c3e50" }}>
          <h3 className="bankAccount-title">Argent Bank Checking (x8349)</h3>
          <p className="bankAccount-amount">$184.30</p>
          <p className="bankAccount-description">Available Balance</p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
