import { useEffect, useState } from "react";
import { ExpenseContext } from "./ExpenseContext";

function ContextProvider({ children }) {
  // New Expense object
  const [newExpense, setNewExpense] = useState({
    text: "",
    amount: "",
    category: "",
    date: "",
  });

  // Expenses array of objects
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : [];
  });

  // Effect to save expenses list
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  return (
    <ExpenseContext.Provider
      value={{ expenses, setExpenses, newExpense, setNewExpense }}
    >
      {children}
    </ExpenseContext.Provider>
  );
}

export default ContextProvider;
