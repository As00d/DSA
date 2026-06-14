import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./styles.css";
import ITEMS from "./data";

function Accordion() {
  const [id, setId] = useState(null);

  const handleClick = (itemId) => {
    if (itemId === id) {
      setId(null);
    } else {
      setId(itemId);
    }
  };
  return (
    <div className="accordion-container">
      {ITEMS.length ? (
        ITEMS.map((item) => {
          return (
            <div className="accordion" key={item.id}>
              <div className="accordion-item">
                <h3
                  className="accordion-title"
                  aria-expanded={item.id === id}
                  onClick={() => handleClick(item.id)}
                >
                  {item.title}
                  <span>
                    {item.id === id ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                </h3>
              </div>
              {item.id === id && (
                <p className="accordion-content">{item.content}</p>
              )}
            </div>
          );
        })
      ) : (
        <p className="empty-message">No items available</p>
      )}
    </div>
  );
}

export default Accordion;
