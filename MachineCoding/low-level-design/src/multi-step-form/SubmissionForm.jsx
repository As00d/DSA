import React, { useState } from "react";
import Button from "./Button";
import Stepper from "./Stepper";
import Form from "./Form";

const SubmissionForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const handleNext = () => {
    if (currentStep < 2) setCurrentStep((currentStep) => currentStep + 1);
  };
  const handlePrev = () => {
    if (currentStep >= 1) setCurrentStep((currentStep) => currentStep - 1);
  };
  return (
    <div className="form">
      <Stepper currentStep={currentStep} />
      <Form currentStep={currentStep} />
      <Button
        currentStep={currentStep}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
    </div>
  );
};

export default SubmissionForm;
