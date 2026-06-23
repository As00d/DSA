import React, { useState } from "react";
import "./styles.css";

const ExpenseTracker = () => {
  const [transactions, setTransactions] = useState([]);
  const [type, setType] = useState("income");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState("");

  const filteredTransactions = transactions.filter((t) =>
    t.title.toLowerCase().includes(search.toLowerCase())
  );

  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, curr) => acc + curr.amount, 0);

  const totalExpense = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, curr) => acc + curr.amount, 0);

  const balance = totalIncome - totalExpense;

  const handleAddTransaction = () => {
    if (!title || !amount) return;
    const newTransaction = {
      id: Date.now(),
      title,
      amount: Number(amount),
      type,
    };
    setTransactions([...transactions, newTransaction]);
    setTitle("");
    setAmount("");
    setType("income");
    setShowForm(false);
  };

  const handleDelete = (id) => {
    const updated = transactions.filter((t) => t.id !== id);
    setTransactions(updated);
  };

  return (
    <div className="container">
      <div className="expense-container">
        <h2 className="header">Expense Tracker</h2>

        <div className="balance-form">
          <h3 data-testid="balance-amount">Balance: ₹{balance}</h3>
          <button
            data-testid="toggle-form-button"
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? "Close Form" : "Open Form"}
          </button>
        </div>

        {showForm && (
          <div>
            <input
              type="text"
              data-testid="title-input"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="number"
              data-testid="amount-input"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "-" || e.key === "+") {
                  e.preventDefault();
                }
              }}
              min="0"
            />
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              data-testid="type-select"
            >
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
            <button
              className="transact-btn"
              data-testid="add-button"
              onClick={handleAddTransaction}
            >
              Add Transaction
            </button>
          </div>
        )}

        <div className="balance-form">
          <div data-testid="income-amount">Income: ₹{totalIncome}</div>
          <div data-testid="expenses-amount">Expense: ₹{totalExpense}</div>
        </div>

        <input
          type="text"
          data-testid="search-input"
          placeholder="Search....."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <ul style={{ listStyle: "none", padding: 0 }}>
          {filteredTransactions.map((t) => (
            <li
              key={t.id}
              className="transaction"
              data-testid="transaction-item"
            >
              <span>
                {t.title}: ₹{t.amount}
              </span>
              <button
                className="remove"
                data-testid="delete-button"
                onClick={() => handleDelete(t.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>

        {filteredTransactions.length === 0 && (
          <div className="transaction-div" data-testid="no-transactions">
            <p>No transactions found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExpenseTracker;
