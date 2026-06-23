import { useState } from "react";
import "./styles.css";

const ExpenseTracker = () => {
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [isIncomeORExpense, setIsIncomeORExpense] = useState("Income");
  const [itemList, setItemList] = useState([]);
  const [search, setSearch] = useState("");

  const filteredItems = itemList.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleTransaction = (e) => {
    e.preventDefault();
    if (!title || !amount || !isIncomeORExpense) {
      return;
    }

    const information = {
      title: title,
      amount: amount,
      isIncomeORExpense: isIncomeORExpense,
      id: Date.now() + Math.random(),
    };
    setTitle("");
    setAmount("");
    setIsIncomeORExpense("Income");
    setItemList((prev) => [...prev, information]);
  };

  const handleRemove = (id) => {
    setItemList((prev) => prev.filter((item) => item.id !== id));
  };

  const income = itemList
    .filter((item) => item.isIncomeORExpense === "Income")
    .map((item) => item.amount)
    .reduce(
      (accumulator, currentValue) => Number(accumulator) + Number(currentValue),
      0
    );
  const expense = itemList
    .filter((item) => item.isIncomeORExpense === "Expense")
    .map((item) => item.amount)
    .reduce(
      (accumulator, currentValue) => Number(accumulator) + Number(currentValue),
      0
    );
  const balance = income - expense;

  return (
    <div className="container">
      <div className="expense-container">
        <h2 className="header">Expense Tracker</h2>
        <div className="balance-form">
          <h2 data-testid="balance-amount">Balance: ₹{balance}</h2>
          <button
            onClick={() => setIsOpenForm(!isOpenForm)}
            data-testid="toggle-form-button"
          >
            {isOpenForm ? "Close Form" : "Open Form"}
          </button>
        </div>
        {isOpenForm && (
          <form>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              data-testid="title-input"
            />
            <input
              type="number"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              data-testid="amount-input"
              min={0}
            />
            <select
              value={isIncomeORExpense}
              onChange={(e) => setIsIncomeORExpense(e.target.value)}
              data-testid="type-select"
            >
              <option value="Income">Income</option>
              <option value="Expense">Expense</option>
            </select>
            <button
              type="button"
              className="transact-btn"
              onClick={(e) => handleTransaction(e)}
              data-testid="add-button"
            >
              Add Transaction
            </button>
          </form>
        )}
        <div className="balance-form">
          <h2 data-testid="income-amount">Income: ₹{income}</h2>
          <h2 data-testid="expenses-amount">Expense: ₹{expense}</h2>
        </div>
        <input
          type="text"
          placeholder="Search....."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          data-testid="search-input"
        />
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div className="transaction" key={item.id}>
              <p data-testid="transaction-item">
                {item.title}: ₹{item.amount}
              </p>
              <button
                className="remove"
                onClick={() => handleRemove(item.id)}
                data-testid="delete-button"
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <div className="transaction-div">
            <p data-testid="no-transactions">No transactions found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExpenseTracker;
