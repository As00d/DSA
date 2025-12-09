import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Button = ({ currentStep, handleNext, handlePrev }) => {
  return (
    <div className="btn-container">
      <button
        className="btn"
        onClick={handlePrev}
        style={
          currentStep == 0
            ? {
                background: "white",
                color: "grey",
                border: "1px solid grey",
              }
            : {}
        }
      >
        <FaChevronLeft />
        <p>Previous</p>
      </button>
      <button
        className="btn"
        onClick={handleNext}
        style={
          currentStep == 2
            ? {
                background: "white",
                color: "grey",
                border: "1px solid grey",
              }
            : {}
        }
      >
        <p>Next</p>
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Button;
