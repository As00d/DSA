import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import "./styles.css";

const faqs = [
  {
    question: "What is this app about?",
    answer: "This app helps users track and improve their daily habits.",
  },
  {
    question: "How do I reset my password?",
    answer:
      "Click on 'Forgot Password' on the login screen and follow instructions.",
  },
  {
    question: "Can I use this app offline?",
    answer: "Yes, some features are available offline after the initial setup.",
  },
];

function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(false);

  const handleButtonClick = (index) => {
    if (index === openIndex) {
      setOpenIndex(false);
      return;
    }
    setOpenIndex(index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <FaqItem
          faq={faq}
          key={index}
          openIndex={openIndex}
          handleButtonClick={handleButtonClick}
          index={index}
        />
      ))}
    </div>
  );
}

function FaqItem({ faq, openIndex, handleButtonClick, index }) {
  let isItemOpen = index === openIndex ? true : false;
  return (
    <div className="faq-item" data-testid={`faq-item-${index}`}>
      <button
        className="faq-question"
        data-testid={`faq-question-${index}`}
        onClick={() => handleButtonClick(index)}
      >
        <span>{faq.question}</span>
        <span className="faq-icon">
          {isItemOpen ? (
            <FiChevronUp data-testid={`icon-up-${index}`} />
          ) : (
            <FiChevronDown data-testid={`icon-down-${index}`} />
          )}
        </span>
      </button>
      {isItemOpen && (
        <div className="faq-answer" data-testid={`faq-answer-${index}`}>
          {faq.answer}
        </div>
      )}
    </div>
  );
}

export default FaqAccordion;
