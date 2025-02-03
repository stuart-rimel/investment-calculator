import { useState } from "react";
import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputId, inputValue) {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [inputId]: +inputValue,
      };
    });
  }

  // Just need to check duration (make sure it's > 0)
  const inputIsValid = userInput.duration > 0;

  return (
    <>
      <Header />
      <main>
        <UserInput onInputChange={handleChange} userInput={userInput} />
        {inputIsValid ? (
          <Results userInput={userInput} />
        ) : (
          <p className="center">Please input duration &gt; 0</p>
        )}
      </main>
    </>
  );
}

export default App;
