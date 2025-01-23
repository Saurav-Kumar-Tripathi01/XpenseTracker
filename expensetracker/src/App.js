// Start your implementation with App.js Here, All the best!
import React, { useState } from "react";
import Header from "./components/header";
import BalanceCard from "./components/balancecard";
import Transactions from "./components/transactions";
import AddExpenseModal from "./components/addexpense";
import AddIncomeModal from "./components/addincome";
import PieChart from "./components/piechart";
import TopExpense from "./components/topexpense";
import "./App.css";

function App() {
  const [income, setIncome] = useState(5000);
  const [expenses, setExpenses] = useState([]);
  const [balance, setBalance] = useState(income);
  const [showExpenseModal, setShowExpenseModal] = useState(false);
  const [showIncomeModal, setShowIncomeModal] = useState(false); // State for Add Income Modal

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
    setBalance(balance - expense.price);
    setShowExpenseModal(false);
  };

  const addIncome = (amount) => {
    setIncome(income + amount);
    setBalance(balance + amount);
    setShowIncomeModal(false);
  };

  const calculateCategoryTotals = () => {
    return expenses.reduce((totals, expense) => {
      totals[expense.category] = (totals[expense.category] || 0) + expense.price;
      return totals;
    }, {});
  };

  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="cards">
          <BalanceCard
            type="income"
            title="Wallet Balance"
            amount={balance}
            onAdd={() => setShowIncomeModal(true)}
          />
          <BalanceCard
            type="expense"
            title="Expenses"
            amount={expenses.reduce((sum, item) => sum + item.price, 0)}
            onAdd={() => setShowExpenseModal(true)}
          />
          <div>
            <PieChart categoryTotals={calculateCategoryTotals()} />
          </div>
        </div>
        <div className="transactions-container">
          <Transactions expenses={expenses} />
          <TopExpense categoryTotals={calculateCategoryTotals()} />

        </div>
      </div>
      {showExpenseModal && (
        <AddExpenseModal
          onClose={() => setShowExpenseModal(false)}
          onSubmit={addExpense}
        />
      )}
      {showIncomeModal && (
        <AddIncomeModal
          onClose={() => setShowIncomeModal(false)}
          onSubmit={addIncome}
        />
      )}
    </div>
  );
}

export default App;