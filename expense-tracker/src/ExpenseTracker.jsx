import { useContext } from "react";
import { ExpenseContext } from "./ExpenseContext";

function ExpenseTracker() {
  const { expenses, setExpenses, newExpense, setNewExpense } =
    useContext(ExpenseContext);
}

export default ExpenseTracker;
