import React from "react";
export function Button({ buttonData, step }) {
  return (
    <div className="m-4 flex flex-col items-start w-80">
      <button
        className="p-3 rounded-full h-12 w-12 "
        style={
          step == 4
            ? {
                background: "lightGreen",
              }
            : buttonData.step == step
            ? {
                background: "lightBlue",
              }
            : buttonData.step < step
            ? { background: "lightGreen" }
            : {
                background: "grey",
              }
        }
      >
        {buttonData.step < step ? "✔️" : buttonData.step + 1}
      </button>
      <p>{buttonData.value}</p>
    </div>
  );
}
