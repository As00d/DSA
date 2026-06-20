import { useState } from "react";
import "./styles.css";
const SortableList = () => {
  const [listItem, setListItem] = useState([]);
  const [userInput, setUserInput] = useState("");
  const handleAddItem = () => {
    if (!userInput) {
      return;
    }
    const item = {
      value: userInput,
      id: new Date().getTime(),
    };
    setListItem((listItem) => [...listItem, item]);
    setUserInput("");
  };
  const handleAsc = () => {
    const sortedArray = [...listItem].sort((a, b) => {
      return String(a.value).localeCompare(String(b.value));
    });
    setListItem(sortedArray);
  };
  const handleDesc = () => {
    const sortedArray = [...listItem].sort((a, b) =>
      b.value.localeCompare(a.value)
    );
    setListItem(sortedArray);
  };
  console.log("render");
  return (
    <div className="sortable-list-container">
      <h3>Sortable List</h3>
      <input
        type="text"
        placeholder="Add a new item"
        onChange={(e) => setUserInput(e.target.value)}
        value={userInput}
      />
      <button onClick={handleAddItem}>Add Item</button>
      <div>
        <button onClick={handleAsc}>Sort Ascending</button>
        <button onClick={handleDesc}>Sort Descending</button>
      </div>
      <div className="list-items">
        {listItem.length ? (
          listItem.map((item, i) => {
            return <li key={`item-${i}`}>{item.value} </li>;
          })
        ) : (
          <div>No list item currently</div>
        )}
      </div>
    </div>
  );
};
export default SortableList;
