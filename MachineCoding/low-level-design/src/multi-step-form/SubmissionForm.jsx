import React, { useState } from "react";
import Button from "./Button";
import Stepper from "./Stepper";
import Form from "./Form";
import { FaRegCheckCircle } from "react-icons/fa";

const SubmissionForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    company: "",
    position: "",
    yoe: "",
    cardNumber: "",
    cardHolderName: "",
    expiry: "",
    cvv: "",
  });
  const handleFormSubmit = () => {
    console.log(formData);
    setCurrentStep(3);
  };
  const handleNext = () => {
    if (currentStep < 2) setCurrentStep((currentStep) => currentStep + 1);
  };
  const handlePrev = () => {
    if (currentStep >= 1) setCurrentStep((currentStep) => currentStep - 1);
  };
  return currentStep != 3 ? (
    <div className="form">
      <Stepper currentStep={currentStep} />
      <Form
        currentStep={currentStep}
        formData={formData}
        setFormData={setFormData}
      />
      <Button
        currentStep={currentStep}
        handleNext={handleNext}
        handlePrev={handlePrev}
        handleFormSubmit={handleFormSubmit}
      />
    </div>
  ) : (
    <div className="submit-form">
      <div className="form-submit">
        <FaRegCheckCircle className="check" />
        <h2 className="heading">Success!</h2>
        <h4 className="">Your form has been submited.</h4>
        <button className="btn">Submit Another form</button>
      </div>
    </div>
  );
};

export default SubmissionForm;
