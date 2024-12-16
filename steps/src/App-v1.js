import React, { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);
  const [isStepsOpen, setIsStepsOpen] = useState(true);

  const [person, setPerson] = useState({ name: "Shakti" });

  // person.name = "Shakti Panda"; // Works, but it's BAD PRACTICE! Always use the setState default function to update the state (with an entire object in this case).

  // setPerson({ name: "Shakti Panda" }) // Too many re-renders. React limits the number of renders to prevent an infinite loop.

  const handleOpenSteps = () => {
    // Use callback when setting state based on the current state
    setIsStepsOpen((isOpen) => !isOpen)
    // setIsStepsOpen(!isStepsOpen);
  };

  const handlePrevious = () => {
    if (step > 1 && step <= 3) {
      setStep(step - 1);
    }
  };

  const handleNext = () => {
    if (step >= 1 && step < 3) {
      setStep((currentStep) => currentStep + 1);
    }
    setPerson({ name: "Shakti Panda" });
  };

  return (
    <>
      <h2 style={{ color: "#7950f2" }}>Welcome {person.name}!</h2>
      <button className="close" onClick={handleOpenSteps}>
        {isStepsOpen ? "❌" : "✅"}
      </button>
      {isStepsOpen ? (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              onClick={handlePrevious}
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        <div className="steps">
          <button
            className="open-steps"
            onClick={() => setIsStepsOpen(!isStepsOpen)}
          >
            Open Steps
          </button>
        </div>
      )}
    </>
  );
}

export default App;
