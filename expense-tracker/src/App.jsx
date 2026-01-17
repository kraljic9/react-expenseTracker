import "./App.css";
import ContextProvider from "./ContextProvider";
import ExpenseTracker from "./ExpenseTracker";

function App() {
  return (
    <ContextProvider>
      <ExpenseTracker />
    </ContextProvider>
  );
}

export default App;
