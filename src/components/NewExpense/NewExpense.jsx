import React, { useState } from "react";
import { ExpenseForm } from "./ExpenseForm/ExpenseForm";
import "./NewExpense.css";

export const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const expenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onNewExpense(expenseData);
  };
  const isEditingHandler = () => {
    setIsEditing(true);
  };
  const isNotEditingHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={expenseDataHandler}
          onClickCancel={isNotEditingHandler}
        />
      )}
      {!isEditing && (
        <div className="container-fluid d-flex justify-content-center allign-items-center flex-column expense-box-container">
          <h1 className="display-5 fw-bold expense-box-header">
            Expense Tracker
          </h1>
          <p className="col-md expense-box-content">
          Introducing the newest and most user-friendly expense tracker app,
            built using React.
          </p>
          <button className="expense-box-button btn btn-lg btn-dark" onClick={isEditingHandler}>
            New Expense
          </button>
        </div>
      )}
    </div>
  );
};
