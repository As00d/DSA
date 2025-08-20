import React, { useState } from "react";
function TodoList() {
  const [userInput, setUserInput] = useState("");
  const [appList, setAppList] = useState([]);

  const handleAddItem = () => {
    if (!userInput || userInput.trim().length === 0) {
      return;
    }
    const newItem = { listItem: userInput, id: new Date(), isChecked: false };
    setAppList([...appList, newItem]);
    setUserInput("");
  };

  const handleDeleteItem = (id) => {
    const filteredArray = appList.filter((item) => item.id != id);
    setAppList(filteredArray);
  };

  const handleChecked = (id) => {
    const listItem = appList.map((item) => {
      if (item.id === id) {
        item.isChecked = !item.isChecked;
      }
      return item;
    });
    setAppList(listItem);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        name=""
        id=""
        placeholder="Enter todo"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button onClick={() => handleAddItem()}>Add</button>
      {appList.map((item) => {
        return (
          <li key={item.id}>
            <input
              type="checkbox"
              name=""
              id=""
              onClick={() => handleChecked(item.id)}
            />
            <span
              style={item.isChecked ? { textDecoration: "line-through" } : {}}
            >
              {" "}
              {" " + item.listItem + " "}{" "}
            </span>
            <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
          </li>
        );
      })}
    </div>
  );
}

export default TodoList;
