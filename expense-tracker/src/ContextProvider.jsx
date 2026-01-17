import { useState } from "react";
import { ExpenseContext } from "./ExpenseContext";

function ContextProvider({ children }) {
  // Expenses array of objects
  const [expenses, setExpenses] = useState([]);

  // New Expense object
  const [newExpense, setNewExpense] = useState({
    text: "",
    amount: "",
    category: "",
    date: "",
  });

  return (
    <ExpenseContext.Provider
      value={{ expenses, setExpenses, newExpense, setNewExpense }}
    >
      {children}
    </ExpenseContext.Provider>
  );
}

export default ContextProvider;
