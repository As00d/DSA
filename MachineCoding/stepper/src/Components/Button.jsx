import React from "react";
export function Button({ buttonData, step }) {
  return (
    <div className="m-4 flex flex-col items-start w-80 relative">
      <button
        className="p-3 rounded-full h-12 w-12 "
        style={
          step == 4
            ? {
                background: "lightGreen",
              }
            : buttonData.index == step
            ? {
                background: "lightBlue",
              }
            : buttonData.index < step
            ? { background: "lightGreen" }
            : {
                background: "lightGrey",
              }
        }
      >
        {buttonData.index < step ? "✔️" : buttonData.index + 1}
      </button>
      {buttonData.index < 3 && (
        <div
          className="w-full absolute h-2 left-12 top-5"
          style={
            step == 4
              ? {
                  background: "lightGreen",
                }
              : buttonData.index < step
              ? { background: "lightGreen" }
              : {
                  background: "lightGrey",
                }
          }
        >
          {" "}
        </div>
      )}
      <p>{buttonData.value}</p>
    </div>
  );
}
