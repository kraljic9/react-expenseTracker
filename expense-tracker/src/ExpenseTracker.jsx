import { useContext } from "react";
import { ExpenseContext } from "./ExpenseContext";

function ExpenseTracker() {
  const { expenses, setExpenses, newExpense, setNewExpense } =
    useContext(ExpenseContext);

  return (
    <>
      {expenses.map((expens) => (
        <li key={expens.id}>
          <span>{expens.text} </span>
          <span>{expens.amount}$ </span>
          <span>{expens.category} </span>
          <span>{expens.date} </span>
        </li>
      ))}
    </>
  );
}

export default ExpenseTracker;
