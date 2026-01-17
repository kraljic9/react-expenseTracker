import { useContext } from "react";
import { ExpenseContext } from "./ExpenseContext";

function ExpenseTracker() {
  const { expenses, setExpenses, newExpense, setNewExpense } =
    useContext(ExpenseContext);

  return (
    <>
      <h1>Expense Tracker App</h1>

      <div className="input-wrapper">
        <label htmlFor="" className="expense-label">
          Expense Text
        </label>
        <br />
        <input type="text" className="expense-input" />
        <br />

        <label htmlFor="" className="expense-label">
          Expense Amount
        </label>
        <br />
        <input type="number" className="expense-input" />
        <br />

        <label htmlFor="" className="expense-label">
          Expense Category
        </label>
        <br />
        <select name="" id="" className="expense-select">
          <option value="">---Chose a category---</option>
          <option value="clothes">Clothes</option>
          <option value="groceries">Groceries</option>
          <option value="bills">Bills</option>
          <option value="eating out">Eating out</option>
        </select>
        <br />

        <label htmlFor="" className="expense-label">
          Expense Date
        </label>
        <br />
        <input type="date" className="expense-select-date" />
      </div>

      <div className="expenses-wrapper">
        <div className="expenses-category-sum">
          <span>Clothes: 0$ </span>
          <span>Groceries: 0$ </span>
          <span>Bills: 0$ </span>
          <span>Eating out: 0$ </span>
        </div>

        <ul className="expenses-list">
          {expenses.map((expens) => (
            <li className="expense-li" key={expens.id}>
              <span className="expense-txt">{expens.text} </span>
              <span className="expense-amount">{expens.amount}$ </span>
              <span className="expense-category">{expens.category} </span>
              <span className="expense-date">{expens.date} </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ExpenseTracker;
