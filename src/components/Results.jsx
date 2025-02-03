import { formatter } from "../util/investment";

export default function Results({ results }) {
  let cumInterest = 0;

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
        {results.map((result, rowIndex) => {
          cumInterest += result.interest;
          const { year, valueEndOfYear, interest } = result;
          return (
            <tr key={rowIndex}>
              <td>{year}</td>
              <td>{formatter.format(valueEndOfYear)}</td>
              <td>{formatter.format(interest)}</td>
              <td>{formatter.format(cumInterest)}</td>
              <td>{formatter.format(valueEndOfYear - cumInterest)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
