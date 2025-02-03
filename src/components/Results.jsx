import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ userInput }) {
  const results = calculateInvestmentResults(userInput);

  const initialInvestment =
    results[0].valueEndOfYear -
    results[0].interest -
    results[0].annualInvestment;

  function f(value) {
    return formatter.format(value);
  }

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map((result) => {
          const { year, valueEndOfYear, interest, annualInvestment } = result;
          const totalInterest =
            valueEndOfYear - annualInvestment * year - initialInvestment;
          const totalAmountInvested = valueEndOfYear - totalInterest;
          return (
            <tr key={year}>
              <td>{year}</td>
              <td>{f(valueEndOfYear)}</td>
              <td>{f(interest)}</td>
              <td>{f(totalInterest)}</td>
              <td>{f(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
