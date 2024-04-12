import React, { useState } from "react";
import TransactionCollapsed from "./TransactionCollapsed";

const Transaction = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  return (
    <div>
      <div
        className="bankAccount-container"
        style={{
          cursor: "pointer",
          color: "white",
          backgroundColor: "#424242",
        }}
        onClick={() => setIsOpen1(!isOpen1)}
      >
        <h3 className="bankAccount-title">Argent Bank Checking (x8349)</h3>
        <p className="bankAccount-amount">$2,082.79</p>
        <p className="bankAccount-description">Available Balance</p>
        {isOpen1 && <TransactionCollapsed />}
      </div>
      <div
        className="bankAccount-container"
        style={{
          cursor: "pointer",
          color: "white",
          backgroundColor: "#424242",
        }}
        onClick={() => setIsOpen2(!isOpen2)}
      >
        <h3 className="bankAccount-title">Argent Bank Checking (x6712)</h3>
        <p className="bankAccount-amount">$10,928.42</p>
        <p className="bankAccount-description">Available Balance</p>
        {isOpen2 && <TransactionCollapsed />}
      </div>
      <div
        className="bankAccount-container"
        style={{
          cursor: "pointer",
          color: "white",
          backgroundColor: "#424242",
        }}
        onClick={() => setIsOpen3(!isOpen3)}
      >
        <h3 className="bankAccount-title">Argent Bank Checking (x8349)</h3>
        <p className="bankAccount-amount">$184.30</p>
        <p className="bankAccount-description">Available Balance</p>
        {isOpen3 && <TransactionCollapsed />}
      </div>
    </div>
  );
};

export default Transaction;
