import "./App.css";
import ContextProvider from "./ContextProvider";
import ExpenseTracker from "./ExpenseTracker";
/*
  Expense tracker app to-do's:

  1. Add state to track expenses OK!
  2. Add state for newExpense to add to expenses OK!
  2. Add Expense Context OK!
  3. Add input for text, amount, category and date
  6. Add expense, delete expense, edit expense functions
  4. Add sum amount for each catogry
  5. Display different list depending on month
  6. Persistance through local storage
*/

function App() {
  return (
    <ContextProvider>
      <ExpenseTracker />
    </ContextProvider>
  );
}

export default App;
