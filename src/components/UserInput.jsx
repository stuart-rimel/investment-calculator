export default function UserInput({ onInputChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initial-investment">INITIAL INVESTMENT</label>
          <input
            type="number"
            id="initial-investment"
            onChange={(event) =>
              onInputChange("initial-investment", event.target.valueAsNumber)
            }
          />
        </p>
        <p>
          <label htmlFor="annual-investment">ANNUAL INVESTMENT</label>
          <input
            type="number"
            id="annual-investment"
            onChange={(event) =>
              onInputChange("annual-investment", event.target.valueAsNumber)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">EXPECTED RETURN</label>
          <input
            type="number"
            id="expected-return"
            onChange={(event) =>
              onInputChange("expected-return", event.target.valueAsNumber)
            }
          />
        </p>
        <p>
          <label htmlFor="duration">DURATION</label>
          <input
            type="number"
            id="duration"
            onChange={(event) =>
              onInputChange("duration", event.target.valueAsNumber)
            }
          />
        </p>
      </div>
    </section>
  );
}
