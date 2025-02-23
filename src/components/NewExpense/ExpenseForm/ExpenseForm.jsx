import React, { useState } from "react";
import "./ExpenseForm.css";

export const ExpenseForm = (props) => {
  const [enterdTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  /* Handler Functions */

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  /* Submit Handler Function */

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enterdTitle,
      amount: +enteredAmount, // When adding multiple values, those values are added as strings instead of numbers.
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title </label>
          <input
            type="text"
            value={enterdTitle}
            onChange={titleChangeHandler}
            className="form-control"
            required
          />
        </div>
        <div className="new-expense__control">
          <label>Amount </label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            className="form-control"
            onChange={amountChangeHandler}
            required
          />
        </div>
        <div className="new-expense__control">
          <label>Date </label>
          <input
            type="date"
            min="2019-01-01"
            max="2024-01-01"
            className="form-control"
            value={enteredDate}
            onChange={dateChangeHandler}
            required
          />
        </div>
      </div>
      <div className="ew-expense__actions">
        <button
          className="expense-box-button btn btn-lg btn-danger me-2"
          onClick={props.onClickCancel}
        >
          Cancel
        </button>
        <button
          className="expense-box-button btn btn-lg btn-dark"
          type="submit"
        >
          Add Expense
        </button>
      </div>
    </form>
  );
};
