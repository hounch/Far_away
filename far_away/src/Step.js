import React from "react";
import { useState } from "react";
import Button from "./Button";

const messages = [
  "Learn React ⚛️",
  "Use it 💼",
  "Do it again until mastery 🤑",
];

const Step = () => {
  const [step, setStep] = useState(3);
  const [isOpen, setIsOpen] = useState(true);
  function handlePrevious() {
    step !== 1 ? setStep(step - 1) : setStep(1);
  }
  function handleNext() {
    step !== 3 ? setStep(step + 1) : setStep(3);
  }
  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`step-1 ${step === 1 ? "active" : ""}`}>1</div>
            <div className={`step-2 ${step === 2 ? "active" : ""}`}>2</div>
            <div className={`step-3 ${step === 3 ? "active" : ""}`}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            {/* <button onClick={handlePrevious} className="previous">
              Previous
            </button> */}
            <Button textColor="#fff" bgColor="#7950f2" onClick={handlePrevious}>
              <p>Previous</p>
            </Button>
            <button onClick={handleNext} className="next">
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Step;
