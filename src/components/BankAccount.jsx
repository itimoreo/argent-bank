import React from "react";
import "../css/Dashboard.css";

const BankAccount = () => {
  return (
    <div>
      <div>
          <div
            className="bankAccount-container"
            style={{ cursor: "pointer", color: "#2c3e50" }}
          >
            <h3 className="bankAccount-title">Argent Bank Checking (x8349)</h3>
            <p className="bankAccount-amount">$2,082.79</p>
            <p className="bankAccount-description">Available Balance</p>
          </div>
          <div
            className="bankAccount-container"
            style={{ cursor: "pointer", color: "#2c3e50" }}
          >
            <h3 className="bankAccount-title">Argent Bank Checking (x6712)</h3>
            <p className="bankAccount-amount">$10,928.42</p>
            <p className="bankAccount-description">Available Balance</p>
          </div>
          <div
            className="bankAccount-container"
            style={{ cursor: "pointer", color: "#2c3e50" }}
          >
            <h3 className="bankAccount-title">Argent Bank Checking (x8349)</h3>
            <p className="bankAccount-amount">$184.30</p>
            <p className="bankAccount-description">Available Balance</p>
          </div>
      </div>
    </div>
  );
};

export default BankAccount;
