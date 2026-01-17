import { useContext, useState } from "react";
import { ExpenseContext } from "./ExpenseContext";

function ExpenseTracker() {
  const { expenses, setExpenses, newExpense, setNewExpense } =
    useContext(ExpenseContext);

  const [editId, setEditId] = useState("");

  const [editExpense, setEditExpense] = useState({});

  const [dateFilter, setDateFilter] = useState("");

  function addExpense(expense) {
    if (
      expense.text.length > 0 &&
      expense.amount > 0 &&
      expense.date.length > 0 &&
      expense.category.length > 0
    ) {
      setExpenses((prev) => [...prev, { ...expense, id: Date.now() }]);
    }
  }

  function removeExpense(id) {
    setExpenses((prev) => prev.filter((expense) => expense.id !== id));
  }

  function saveEdit(expense, id) {
    setEditExpense(expense);
    setEditId(id);
  }

  function saveChange(id) {
    setExpenses((prev) =>
      prev.map((expense) => (id === expense.id ? editExpense : expense)),
    );

    setEditExpense("");
    setEditId("");
  }

  let filteredList = expenses.filter((expense) => {
    if (dateFilter === "january")
      return new Date(expense.date).getMonth() === 0;
    if (dateFilter === "february")
      return new Date(expense.date).getMonth() === 1;
    if (dateFilter === "march") return new Date(expense.date).getMonth() === 2;
    if (dateFilter === "april") return new Date(expense.date).getMonth() === 3;
    if (dateFilter === "may") return new Date(expense.date).getMonth() === 4;
    if (dateFilter === "june") return new Date(expense.date).getMonth() === 5;
    if (dateFilter === "july") return new Date(expense.date).getMonth() === 6;
    if (dateFilter === "august") return new Date(expense.date).getMonth() === 7;
    if (dateFilter === "september")
      return new Date(expense.date).getMonth() === 8;
    if (dateFilter === "october")
      return new Date(expense.date).getMonth() === 9;
    if (dateFilter === "november")
      return new Date(expense.date).getMonth() === 10;
    if (dateFilter === "december")
      return new Date(expense.date).getMonth() === 11;

    return expense;
  });

  return (
    <>
      <h1>Expense Tracker App</h1>

      <div className="input-wrapper">
        <label htmlFor="" className="expense-label">
          Expense Text
        </label>
        <br />
        <input
          type="text"
          className="expense-input"
          value={newExpense.text}
          onChange={(e) =>
            setNewExpense((prev) => ({ ...prev, text: e.target.value }))
          }
        />
        <br />

        <label htmlFor="" className="expense-label">
          Expense Amount
        </label>
        <br />
        <input
          type="number"
          className="expense-input"
          value={newExpense.amount}
          onChange={(e) =>
            setNewExpense((prev) => ({
              ...prev,
              amount: Number(e.target.value),
            }))
          }
        />
        <br />

        <label htmlFor="" className="expense-label">
          Expense Category
        </label>
        <br />
        <select
          name=""
          id=""
          className="expense-select"
          value={newExpense.category}
          onChange={(e) =>
            setNewExpense((prev) => ({ ...prev, category: e.target.value }))
          }
        >
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
        <input
          type="date"
          className="expense-select-date"
          onChange={(e) =>
            setNewExpense((prev) => ({ ...prev, date: e.target.value }))
          }
        />

        <button onClick={() => addExpense(newExpense)}>Add Expense</button>
      </div>

      <div className="expenses-wrapper">
        <div className="expenses-category-sum">
          <span>
            Clothes:{" "}
            {expenses
              .filter((item) => item.category === "clothes")
              .reduce((acc, cur) => {
                return acc + cur.amount;
              }, 0)}
            {"$ "}
          </span>
          <span>
            Groceries:
            {expenses
              .filter((item) => item.category === "groceries")
              .reduce((acc, cur) => {
                return acc + cur.amount;
              }, 0)}
            {"$ "}
          </span>
          <span>
            Bills:{" "}
            {expenses
              .filter((item) => item.category === "bills")
              .reduce((acc, cur) => {
                return acc + cur.amount;
              }, 0)}
            {"$ "}
          </span>
          <span>
            Eating out:{" "}
            {expenses
              .filter((item) => item.category === "eating out")
              .reduce((acc, cur) => {
                return acc + cur.amount;
              }, 0)}
            {"$ "}
          </span>
        </div>
        <br />

        <p>Monthly expenses</p>
        <select name="" id="" onChange={(e) => setDateFilter(e.target.value)}>
          <option value="">All</option>
          <option value="january">January</option>
          <option value="february">February</option>
          <option value="march">March</option>
          <option value="april">April</option>
          <option value="may">May</option>
          <option value="june">June</option>
          <option value="july">July</option>
          <option value="august">Auguts</option>
          <option value="september">September</option>
          <option value="october">October</option>
          <option value="november">November</option>
          <option value="december">December</option>
        </select>
        <ul className="expenses-list">
          {filteredList.map((expens) => (
            <li className="expense-li" key={expens.id}>
              {editId === expens.id && editExpense ? (
                <>
                  <input
                    type="text"
                    value={editExpense.text}
                    onChange={(e) => {
                      setEditExpense((prev) => ({
                        ...prev,
                        text: e.target.value,
                      }));
                    }}
                  />
                  <input
                    type="number"
                    value={editExpense.amount}
                    onChange={(e) => {
                      setEditExpense((prev) => ({
                        ...prev,
                        amount: Number(e.target.value),
                      }));
                    }}
                  />
                  <select
                    name=""
                    id=""
                    value={editExpense.category}
                    onChange={(e) => {
                      setEditExpense((prev) => ({
                        ...prev,
                        category: e.target.value,
                      }));
                    }}
                  >
                    <option value="">---Chose a category---</option>
                    <option value="clothes">Clothes</option>
                    <option value="groceries">Groceries</option>
                    <option value="bills">Bills</option>
                    <option value="eating out">Eating out</option>
                  </select>
                  <input
                    type="date"
                    value={editExpense.date}
                    onChange={(e) => {
                      setEditExpense((prev) => ({
                        ...prev,
                        date: e.target.value,
                      }));
                    }}
                  />

                  <button onClick={() => saveChange(editExpense.id)}>
                    Save Changes
                  </button>
                </>
              ) : (
                <>
                  <span className="expense-txt">{expens.text} </span>
                  <span className="expense-amount">{expens.amount}$ </span>
                  <span className="expense-category">{expens.category} </span>
                  <span className="expense-date">{expens.date} </span>
                  <button onClick={() => saveEdit(expens, expens.id)}>
                    Edit
                  </button>
                  <button onClick={() => removeExpense(expens.id)}>
                    Remove
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ExpenseTracker;
