import React, { useEffect, useState } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/Dashboard.css";

const Dashboard = () => {
  const balance = 1000; // Replace with your actual balance
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const userName = localStorage.getItem("UserName");
    setUserName(userName);
  }, []);

  return (
    <div>
      <Header />
      <div className="dash-container" style={{background:'#12002b'}}>
        <div className="Welcome" style={{  color:'white' }}>
        <h1>
          Welcome Back, <br></br>
          {userName}
        </h1>
        <button className="btn-edit" type="submit">
          Edit Name
        </button>
      </div>
        <div className="bankAccount-container" style={{color:'white'}}>
            <p>Your current balance is: ${balance}</p>
        </div>
      </div>
      
      
      <Footer />
    </div>
  );
};

export default Dashboard;
