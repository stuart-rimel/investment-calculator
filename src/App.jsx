import { useState } from "react";
import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";
import { calculateInvestmentResults } from "./util/investment";

function App() {
  const [initialInvestment, setInitialInvestment] = useState(0);
  const [annualInvestment, setAnnualInvestment] = useState(0);
  const [expectedReturn, setExpectedReturn] = useState(0);
  const [duration, setDuration] = useState(0);

  function handleInput(inputId, inputValue) {
    switch (inputId) {
      case "initial-investment":
        setInitialInvestment(inputValue);
        break;
      case "annual-investment":
        setAnnualInvestment(inputValue);
        break;
      case "expected-return":
        setExpectedReturn(inputValue);
        break;
      case "duration":
        setDuration(inputValue);
        break;
    }
  }

  const results = calculateInvestmentResults({
    initialInvestment: initialInvestment,
    annualInvestment,
    expectedReturn,
    duration,
  });

  console.log(results);

  return (
    <>
      <Header />
      <main>
        <UserInput onInputChange={handleInput} />
        <Results results={results} />
      </main>
    </>
  );
}

export default App;
