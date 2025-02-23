import React from "react";
import "./ExpenseItem.css";
import { Card } from "../../UI/Card.jsx";
import { ExpenseDate } from "./ExpenseDate/ExpenseDate";

export const ExpenseItem = (props) => {
  return (
    <li className="expense-list">
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="vl"></div>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};
