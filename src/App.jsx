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
        [inputId]: inputValue,
      };
    });
  }

  return (
    <>
      <Header />
      <main>
        <UserInput onInputChange={handleChange} userInput={userInput} />
        <Results userInput={userInput} />
      </main>
    </>
  );
}

export default App;
