import { ExpenseItem } from "../Expenses/ExpenseItem/ExpenseItem";
import "./ExpensesList.css";

export const ExpensesList = (props) => {
  const filteredExpense = props.filteredExpense();
  if (filteredExpense.length > 0) {
    return (
      <ul className="expenses-list">
        {filteredExpense.map((element) => {
          return (
            <ExpenseItem
              key={element.id}
              title={element.title}
              amount={element.amount}
              date={element.date}
            />
          );
        })}
      </ul>
    );
  } else {
    return <h2 className="expenses-list__fallback">No Records Found.</h2>;
  }
};
