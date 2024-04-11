import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';
import "../css/Dashboard.css";
import TransactionCollapsed from "./TransactionCollapsed";

const Transaction = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  return (
    <div>
      <div className="bankAccount-container" style={{ cursor:'pointer', color: "#2c3e50" }} onClick={() => setOpen1(!open1)}>
        <h3 className="bankAccount-title">Argent Bank Checking (x8349)</h3>
        <p className="bankAccount-amount">$2,082.79</p>
        <p className="bankAccount-description">Available Balance</p>
        <Collapse in={open1}>
          <div>
            <TransactionCollapsed/>
          </div>
        </Collapse>
      </div>
      <div className="bankAccount-container" style={{ cursor:'pointer', color: "#2c3e50" }} onClick={() => setOpen2(!open2)}>
        <h3 className="bankAccount-title">Argent Bank Checking (x6712)</h3>
        <p className="bankAccount-amount">$10,928.42</p>
        <p className="bankAccount-description">Available Balance</p>
        <Collapse in={open2}>
          <div>
            <TransactionCollapsed/>
          </div>
        </Collapse>
      </div>
      <div className="bankAccount-container" style={{ cursor:'pointer', color: "#2c3e50" }} onClick={() => setOpen3(!open3)}>
        <h3 className="bankAccount-title">Argent Bank Checking (x8349)</h3>
        <p className="bankAccount-amount">$184.30</p>
        <p className="bankAccount-description">Available Balance</p>
        <Collapse in={open3}>
          <div>
            <TransactionCollapsed/>
          </div>
        </Collapse>
      </div>
    </div>
  );
};

export default Transaction;