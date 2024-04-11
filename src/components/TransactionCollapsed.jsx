import React, { useState } from "react";
import { Collapse } from "react-bootstrap";

const Transaction = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  return (
    <div>
      <Collapse in={open1}>
        <div>
          <p>Casino = 10€</p>
        </div>
      </Collapse>
    </div>
  );
};

export default Transaction;
