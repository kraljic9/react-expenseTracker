import { useContext, useState } from "react";
import { ExpenseContext } from "./ExpenseContext";

function ContextProvider({ children }) {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      text: "T-shirt",
      amount: 20,
      category: "clothes",
      date: "01/03/2026",
    },
    {
      id: 2,
      text: "Chicken",
      amount: 5,
      category: "groceries",
      date: "01/03/2026",
    },
    {
      id: 3,
      text: "Pizza",
      amount: 15,
      category: "eating out",
      date: "01/03/2026",
    },
    {
      id: 3,
      text: "Bills",
      amount: 40,
      category: "Water bill",
      date: "01/03/2026",
    },
  ]);

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
