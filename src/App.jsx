import "./App.css";
import React, { useState } from "react";
import { Expenses } from "./components/Expenses/Expenses";
import { NewExpense } from "./components/NewExpense/NewExpense";
import { Initial_Data as INITIAL_EXPENSES } from "./components/Misc/InitialData";

export const App = () => {
  const [getExpenses, setExpenses] = useState(INITIAL_EXPENSES);
  const newExpenseHandler = (newExpenseData) => {
    setExpenses((prevExpenses) => {
      return [newExpenseData, ...prevExpenses];
    });
  };
  return (
    <div className="App">
      <NewExpense onNewExpense={newExpenseHandler} />
      <Expenses expenses={getExpenses} />
    </div>
  );
};
