import React from "react";
import TableBody from "../TableBody";
import TableBtn from "../TableBtn";
import TableImg from "../TableImg";
import TableHeading from "../TableHeading";
import "./style.css";

function Table() {
  return (
    <div>
      <TableHeading />
      <TableImg />
      <TableBody />
      <TableBtn
        style={{ opacity: 1 }}
        data-value="back"
      />
      <TableBtn
        style={{ opacity: 1 }}
        data-value="next"
      />
    </div>
  );
}

export default Table;
