import React from "react";
import {
  FaUser,
  FaSuitcase,
  FaMoneyBill,
  FaRegCheckCircle,
} from "react-icons/fa";

const Stepper = ({ currentStep }) => {
  return (
    <div className="stepper">
      <div className="step-item">
        {currentStep <= 0 ? (
          <FaUser
            className="icon"
            style={
              currentStep == 0
                ? { color: "white", background: "black" }
                : { color: "black", background: "white" }
            }
          />
        ) : (
          <FaRegCheckCircle
            className="icon"
            style={{ color: "white", background: "black" }}
          />
        )}
        <h3 className="info">Personal Info</h3>
      </div>
      <div className="step-item">
        {currentStep <= 1 ? (
          <FaSuitcase
            className="icon"
            style={
              currentStep == 1 ? { color: "white", background: "black" } : {}
            }
          />
        ) : (
          <FaRegCheckCircle
            className="icon"
            style={{ color: "white", background: "black" }}
          />
        )}
        <h3 className="info">Professional Info</h3>
      </div>
      <div>
        <FaMoneyBill
          className="icon"
          style={
            currentStep == 2 ? { color: "white", background: "black" } : {}
          }
        />
        <h3 className="info">Billing Info</h3>
      </div>
    </div>
  );
};

export default Stepper;
