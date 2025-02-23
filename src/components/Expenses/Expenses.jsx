import React, { useState } from "react";
import { ExpenseFilter } from "./ExpenseFilter/ExpenseFilter.jsx";
import { ExpensesList } from "../ExpensesList/ExpensesList.jsx";
import { ExpensesChart } from "./ExpensesChart/ExpensesChart.jsx";
import { Card } from "../UI/Card";
import "./Expenses.css";

export const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2023");
  const filterYearHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };
  const filteredExpense = () => {
    if (filterYear === "ALL") {
      return props.expenses;
    } else {
      return props.expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === filterYear;
      });
    }
  };
  return (
    <Card className="expenses">
      <ExpenseFilter selected={filterYear} onSelectedYear={filterYearHandler} />
      <ExpensesChart expenses={filteredExpense} />
      <ExpensesList filteredExpense={filteredExpense} />
    </Card>
  );
};
