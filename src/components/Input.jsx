export default function Input() {
  return (
    <>
      <label htmlFor="initial-investment">INITIAL INVESTMENT</label>
      <input
        type="number"
        id="initial-investment"
        onChange={(event) =>
          onInputChange("initial-investment", event.target.value)
        }
      />
    </>
  );
}
