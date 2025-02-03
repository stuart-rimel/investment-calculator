export default function UserInput({ onInputChange, userInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initial-investment">INITIAL INVESTMENT</label>
          <input
            required
            type="number"
            id="initial-investment"
            onChange={(event) =>
              onInputChange("initialInvestment", event.target.value)
            }
            value={userInput.initialInvestment}
          />
        </p>
        <p>
          <label htmlFor="annual-investment">ANNUAL INVESTMENT</label>
          <input
            required
            type="number"
            id="annual-investment"
            onChange={(event) =>
              onInputChange("annualInvestment", event.target.value)
            }
            value={userInput.annualInvestment}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">EXPECTED RETURN</label>
          <input
            required
            type="number"
            id="expected-return"
            onChange={(event) =>
              onInputChange("expectedReturn", event.target.value)
            }
            value={userInput.expectedReturn}
          />
        </p>
        <p>
          <label htmlFor="duration">DURATION</label>
          <input
            required
            type="number"
            id="duration"
            onChange={(event) => onInputChange("duration", event.target.value)}
            value={userInput.duration}
          />
        </p>
      </div>
    </section>
  );
}
