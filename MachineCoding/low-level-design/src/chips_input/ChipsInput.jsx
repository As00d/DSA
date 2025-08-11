import React, { useState } from "react";

export default function ChipsInput() {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!inputValue || inputValue == "" || !inputValue.trim().length) {
      return;
    }
    const newValue = {
      id: new Date(),
      value: inputValue,
    };
    let newArray = [...data, newValue];
    setData(newArray);
    setInputValue("");
  };

  const handleDelete = (id) => {
    let array = data.filter((item) => item.id != id);
    setData(array);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <main>
        <h1 className="text-5xl m-2">Chips Input</h1>
        <input
          className="w-[300px] p-4 border"
          type="text"
          name=""
          id=""
          placeholder="Type a chip and press tag"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key == "Enter") {
              handleFormSubmit(e);
            }
          }}
        />
        <div className="flex">
          {data.map((item) => {
            return (
              <li
                className="flex bg-gray-300 rounded-lg my-8 p-2 m-2"
                key={item.id}
              >
                <span className="mx-2">{item.value}</span>
                <span
                  className="text-red-500 cursor-pointer"
                  onClick={() => handleDelete(item.id)}
                >
                  X
                </span>
              </li>
            );
          })}
        </div>
      </main>
    </div>
  );
}
