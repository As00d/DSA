import React, { useState } from "react";
import "./styles.css";

const splitText = (str, length) => {
  let firstHundredLength = str.split("");
  let split = "";
  for (let i = 0; i < length; i++) {
    split += firstHundredLength[i];
  }
  return split;
};

function ReadMoreToggle() {
  const text = `React is a popular JavaScript library developed by Facebook for 
  building user interfaces, especially single-page applications. It allows
   developers to create reusable UI components that efficiently update and 
   render as data changes. One of React’s key features is the virtual DOM, 
   which improves performance by minimizing direct manipulation of the actual
    DOM.`;
  const [isCollapse, setIsCollapse] = useState(false);
  const [splitLength, setSplitLength] = useState(splitText(text, 100) + "...");

  const handleCollapse = () => {
    setIsCollapse(!isCollapse);

    if (isCollapse) {
      setSplitLength(splitText(text, 100) + "...");
    } else {
      setSplitLength(text);
    }
  };
  return (
    <div className="readmore-container">
      <h1 className="title">Read More Toggle</h1>
      <p className="readmore-text" data-testid="readmore-text">
        {splitLength}
      </p>
      <button
        className="readmore-button"
        data-testid="readmore-button"
        onClick={() => handleCollapse()}
      >
        {isCollapse ? `Read Less` : `Read More`}
      </button>
    </div>
  );
}

export default ReadMoreToggle;
