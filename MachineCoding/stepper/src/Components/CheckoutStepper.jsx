import { Button } from "./Button";
import { useState } from "react";
import { data } from "../data";
function CheckoutStepper() {
  const [step, setStep] = useState(0);

  function increaseStep() {
    if (step < 4) setStep(step + 1);
    console.log(step);
  }
  return (
    <div>
      <div className="flex justify-center">
        {data.map((buttonData) => {
          return (
            <Button buttonData={buttonData} key={buttonData.step} step={step} />
          );
        })}
      </div>
      <div className="flex justify-center">
        <p className="text-xl my-4">
          {data[step]?.detail || "Your order has been delivered"}
        </p>
      </div>
      <div className="flex justify-center">
        {step < 4 && (
          <button
            className=" py-3 px-4 rounded-xl bg-blue-400 text-white"
            onClick={increaseStep}
          >
            {step == 3 ? "Finish" : "Next"}
          </button>
        )}
      </div>
    </div>
  );
}

export default CheckoutStepper;
